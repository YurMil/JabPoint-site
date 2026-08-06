"""
Generate a FILLABLE client intake PDF (AcroForm) for JabPoint site content.
Open in Acrobat / Edge / Chrome, type into fields, then Save.
"""

from pathlib import Path

from reportlab.lib.colors import HexColor, white, Color
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf" / "JabPoint-client-content-brief-fillable.pdf"

RED = HexColor("#E1191F")
INK = HexColor("#0E1013")
MUTED = HexColor("#5C636C")
LINE = HexColor("#C8CCD2")
CHIP = HexColor("#F5F6F8")
SOFT = Color(0.94, 0.945, 0.95)
FIELD_BORDER = Color(0.78, 0.8, 0.82)
FIELD_TEXT = Color(0.05, 0.06, 0.07)

pdfmetrics.registerFont(TTFont("Arial", r"C:\Windows\Fonts\arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", r"C:\Windows\Fonts\arialbd.ttf"))


class FormDoc:
    def __init__(self, path: Path):
        self.path = path
        path.parent.mkdir(parents=True, exist_ok=True)
        self.c = canvas.Canvas(str(path), pagesize=A4)
        self.form = self.c.acroForm
        self.w, self.h = A4
        self.margin = 16 * mm
        self.y = self.h - self.margin
        self.page = 1
        self.content_w = self.w - 2 * self.margin
        self._n = 0

    def _name(self, prefix: str = "f") -> str:
        self._n += 1
        return f"{prefix}_{self._n:03d}"

    def new_page(self):
        self._footer()
        self.c.showPage()
        self.page += 1
        self._header_strip()

    def ensure(self, need: float):
        if self.y - need < 22 * mm:
            self.new_page()

    def _footer(self):
        self.c.setStrokeColor(LINE)
        self.c.setLineWidth(0.4)
        self.c.line(self.margin, 14 * mm, self.w - self.margin, 14 * mm)
        self.c.setFillColor(MUTED)
        self.c.setFont("Arial", 8)
        self.c.drawString(self.margin, 8 * mm, "JabPoint Tallinn - заполняемый бланк данных сайта")
        self.c.drawRightString(self.w - self.margin, 8 * mm, str(self.page))

    def _header_strip(self):
        self.c.setFillColor(INK)
        self.c.rect(0, self.h - 12 * mm, self.w, 12 * mm, fill=1, stroke=0)
        self.c.setFillColor(RED)
        self.c.rect(0, self.h - 12 * mm, 4 * mm, 12 * mm, fill=1, stroke=0)
        self.c.setFillColor(white)
        self.c.setFont("Arial-Bold", 10)
        self.c.drawString(self.margin, self.h - 8 * mm, "JabPoint - заполняемый бланк данных сайта")
        self.y = self.h - 18 * mm

    def cover_header(self):
        self.c.setFillColor(INK)
        self.c.rect(0, self.h - 44 * mm, self.w, 44 * mm, fill=1, stroke=0)
        self.c.setFillColor(RED)
        self.c.rect(0, self.h - 44 * mm, 5 * mm, 44 * mm, fill=1, stroke=0)
        self.c.setFillColor(white)
        self.c.setFont("Arial-Bold", 18)
        self.c.drawString(self.margin, self.h - 15 * mm, "JabPoint Tallinn")
        self.c.setFont("Arial", 10)
        self.c.setFillColor(HexColor("#B9BEC6"))
        self.c.drawString(self.margin, self.h - 24 * mm, "Заполняемый бланк данных для сайта-визитки")
        self.c.drawString(
            self.margin,
            self.h - 32 * mm,
            "Acrobat / Edge / Chrome: кликните в поле, введите текст, File > Save.",
        )
        self.c.drawString(
            self.margin,
            self.h - 39 * mm,
            "Тексты желательно на ET / EN / RU.",
        )
        self.y = self.h - 52 * mm

    def title(self, text: str):
        self.ensure(14 * mm)
        self.c.setFillColor(RED)
        self.c.setFont("Arial-Bold", 8)
        self.c.drawString(self.margin, self.y, text.upper())
        self.y -= 3 * mm
        self.c.setStrokeColor(RED)
        self.c.setLineWidth(1.2)
        self.c.line(self.margin, self.y, self.margin + 18 * mm, self.y)
        self.y -= 5 * mm

    def note(self, text: str):
        self.ensure(8 * mm)
        self.c.setFillColor(MUTED)
        self.c.setFont("Arial", 8.5)
        for line in self._wrap(text, self.content_w, "Arial", 8.5):
            self.ensure(4.2 * mm)
            self.c.drawString(self.margin, self.y, line)
            self.y -= 4.2 * mm
        self.y -= 1.5 * mm

    def _textfield(self, x: float, y: float, w: float, h: float, tooltip: str = "", multiline: bool = False):
        self.form.textfield(
            name=self._name("tf"),
            tooltip=tooltip or " ",
            x=x,
            y=y,
            width=w,
            height=h,
            borderWidth=0.7,
            borderColor=FIELD_BORDER,
            fillColor=SOFT,
            textColor=FIELD_TEXT,
            forceBorder=True,
            fontSize=9,
            fontName="Helvetica",
            borderStyle="solid",
            fieldFlags="multiline" if multiline else "",
        )

    def field(self, label: str, lines: int = 1, hint: str = ""):
        box_h = 7.5 * mm if lines == 1 else max(7.5 * mm, 5.8 * mm * lines)
        self.ensure(box_h + 10 * mm)
        self.c.setFillColor(INK)
        self.c.setFont("Arial-Bold", 9)
        self.c.drawString(self.margin, self.y, label)
        if hint:
            self.c.setFillColor(MUTED)
            self.c.setFont("Arial", 7.5)
            self.c.drawRightString(self.w - self.margin, self.y, hint)
        self.y -= 3.4 * mm
        self._textfield(
            self.margin,
            self.y - box_h,
            self.content_w,
            box_h,
            tooltip=label,
            multiline=lines > 1,
        )
        self.y -= box_h + 4.5 * mm

    def dual(self, left: str, right: str, hint_l: str = "", hint_r: str = ""):
        self.ensure(18 * mm)
        gap = 4 * mm
        col = (self.content_w - gap) / 2
        y0 = self.y
        box_h = 7.5 * mm
        for i, (label, hint) in enumerate(((left, hint_l), (right, hint_r))):
            x = self.margin + i * (col + gap)
            self.c.setFillColor(INK)
            self.c.setFont("Arial-Bold", 9)
            self.c.drawString(x, y0, label)
            if hint:
                self.c.setFillColor(MUTED)
                self.c.setFont("Arial", 7)
                self.c.drawRightString(x + col, y0, hint)
            self._textfield(x, y0 - 3.4 * mm - box_h, col, box_h, tooltip=label)
        self.y = y0 - 3.4 * mm - box_h - 5 * mm

    def triple_lang(self, label: str, lines: int = 2):
        box_h = 6.8 * mm if lines == 1 else 5.8 * mm * lines
        self.ensure(10 * mm + box_h)
        self.c.setFillColor(INK)
        self.c.setFont("Arial-Bold", 9)
        self.c.drawString(self.margin, self.y, label)
        self.y -= 4 * mm
        gap = 3 * mm
        col = (self.content_w - 2 * gap) / 3
        for i, lang in enumerate(("ET", "EN", "RU")):
            x = self.margin + i * (col + gap)
            self.c.setFillColor(RED if i == 0 else MUTED)
            self.c.setFont("Arial-Bold", 7.5)
            self.c.drawString(x, self.y + 1.2 * mm, lang)
            self._textfield(
                x,
                self.y - box_h,
                col,
                box_h,
                tooltip=f"{label} [{lang}]",
                multiline=lines > 1,
            )
        self.y -= box_h + 5 * mm

    def checkbox(self, label: str):
        self.ensure(8 * mm)
        size = 3.4 * mm
        self.form.checkbox(
            name=self._name("cb"),
            tooltip=label,
            x=self.margin,
            y=self.y - 2.6 * mm,
            size=size,
            buttonStyle="check",
            borderColor=FIELD_BORDER,
            fillColor=SOFT,
            textColor=RED,
            forceBorder=True,
            checked=False,
        )
        self.c.setFillColor(INK)
        self.c.setFont("Arial", 8.5)
        self.c.drawString(self.margin + 5.5 * mm, self.y - 1.6 * mm, label)
        self.y -= 6.4 * mm

    def checklist(self, items: list[str]):
        for item in items:
            self.checkbox(item)
        self.y -= 1.5 * mm

    def service_banner(self, text: str):
        self.ensure(10 * mm)
        self.c.setFillColor(CHIP)
        self.c.roundRect(self.margin, self.y - 3.5 * mm, self.content_w, 7 * mm, 2, fill=1, stroke=0)
        self.c.setFillColor(RED)
        self.c.setFont("Arial-Bold", 8)
        self.c.drawString(self.margin + 2 * mm, self.y - 1.2 * mm, text)
        self.y -= 9 * mm

    def _wrap(self, text: str, width: float, font: str, size: float) -> list[str]:
        words = text.split()
        lines, cur = [], ""
        for word in words:
            test = f"{cur} {word}".strip()
            if self.c.stringWidth(test, font, size) <= width:
                cur = test
            else:
                if cur:
                    lines.append(cur)
                cur = word
        if cur:
            lines.append(cur)
        return lines or [""]

    def save(self):
        self._footer()
        self.c.save()


def build(out: Path | None = None) -> Path:
    path = out or OUT
    d = FormDoc(path)
    d.cover_header()

    d.note(
        "Это заполняемая PDF-форма. Откройте в Adobe Acrobat, Microsoft Edge или Google Chrome. "
        "Кликните в серое поле, введите текст и сохраните файл (Save / Save As). "
        "Структура соответствует разделам сайта JabPoint."
    )

    d.title("1. Общие сведения")
    d.dual("Дата заполнения", "Контактное лицо (ФИО)")
    d.dual("Должность / роль", "Телефон / Telegram / WhatsApp")
    d.field("Юридическое название компании / бренд на сайте", hint="сейчас: JabPoint")
    d.field("Город / локация на сайте", hint="сейчас: Tallinn")
    d.field("Язык по умолчанию на сайте", hint="ET / EN / RU")
    d.field("Краткий слоган / подпись в футере", hint="1 строка")

    d.title("2. Контакты (отображаются на сайте)")
    d.dual("Телефон (как показать)", "tel: ссылка", hint_l="+372 ...", hint_r="tel:+372...")
    d.dual("E-mail", "mailto:", hint_l="info@...", hint_r="mailto:...")
    d.triple_lang("Адрес (по языкам)", lines=2)
    d.triple_lang("Часы работы (по языкам)", lines=2)
    d.field("Комментарий по контактам (карта, парковка, как проехать)", lines=2)

    d.title("3. Социальные сети")
    d.note("Если сети нет - оставьте пустым (на сайте скроем иконку).")
    d.field("Instagram URL")
    d.field("YouTube URL")
    d.field("Facebook URL")
    d.field("LinkedIn URL")
    d.field("Другие ссылки (сайт, Booking, Google Maps и т.д.)", lines=2)

    d.title("4. Позиционирование / миссия (Hero)")
    d.note("Первый экран сайта: бейдж, заголовок, короткий текст и кнопки.")
    d.triple_lang("Бейдж над заголовком", lines=1)
    d.triple_lang("Заголовок - часть 1", lines=1)
    d.triple_lang("Заголовок - часть 2 (акцент)", lines=1)
    d.triple_lang("Подзаголовок / миссия (2-4 предложения)", lines=4)
    d.triple_lang("Текст кнопки 1 (главная CTA)", lines=1)
    d.triple_lang("Текст кнопки 2 (вторичная)", lines=1)
    d.triple_lang("Подпись на фото в Hero", lines=1)

    d.title("5. Цифры / факты (3 показателя)")
    for i in range(1, 4):
        d.dual(f"Факт {i}: значение", f"Факт {i}: подпись ET/EN/RU", hint_l="24/7, 6, 3...")

    d.title("6. Услуги (Services)")
    d.triple_lang("Заголовок блока услуг", lines=1)
    d.triple_lang("Короткое описание блока", lines=2)
    for i in range(1, 5):
        d.service_banner(f"Услуга {i}")
        d.field("Код / номер услуги", hint="S1, S2...")
        d.triple_lang("Название услуги", lines=1)
        d.triple_lang("Описание услуги (1-2 предложения)", lines=3)

    d.title("7. Цифровая платформа (Platform)")
    d.triple_lang("Бейдж статуса", lines=1)
    d.triple_lang("Заголовок платформы", lines=2)
    d.triple_lang("Описание платформы / продукта", lines=4)
    d.triple_lang("Текст кнопки CTA", lines=1)
    d.triple_lang("Пометка / статус (Beta 2026)", lines=1)
    for i in range(1, 5):
        d.field(f"Фича {i}: название (ET / EN / RU)", lines=1)
        d.field(f"Фича {i}: описание (ET / EN / RU)", lines=2)

    d.title("8. Как это работает (4 шага)")
    d.triple_lang("Заголовок блока шагов", lines=1)
    for i in range(1, 5):
        d.field(f"Шаг {i}: номер", hint="01...")
        d.triple_lang(f"Шаг {i}: название", lines=1)
        d.triple_lang(f"Шаг {i}: описание", lines=2)

    d.title("9. Блок контактов (тексты)")
    d.triple_lang("Заголовок контактного блока", lines=1)
    d.triple_lang("Подзаголовок / приглашение", lines=2)
    d.triple_lang("Подпись на фото / карте", lines=1)
    d.triple_lang("Текст под фото / картой", lines=2)

    d.title("10. Материалы и бренд")
    d.checklist(
        [
            "Логотип (PNG/SVG, прозрачный фон)",
            "Фото / рендер здания или боксов (Hero + contacts)",
            "Изображение / визуал для блока платформы",
            "Фирменные цвета (если не #E1191F)",
            "Шрифты бренда (если есть)",
            "Доп. фото работ (по желанию)",
        ]
    )
    d.field("Ссылка на облако с файлами (Drive / Dropbox)", lines=1)
    d.field("Замечания по визуалу и тону бренда", lines=3)

    d.title("11. Юридическое и подтверждение")
    d.checklist(
        [
            "Данные можно публиковать на открытом сайте",
            "Телефон и e-mail проверены и актуальны",
            "Тексты согласованы (или нужен копирайт)",
            "Есть право на использование фото / логотипа",
        ]
    )
    d.dual("Подпись клиента", "Дата")
    d.field("Комментарии / особые пожелания", lines=3)

    d.title("12. Минимум для запуска")
    d.checklist(
        [
            "Бренд, телефон, e-mail, адрес, часы",
            "Hero: заголовок + текст (хотя бы 1 язык)",
            "4 услуги: название + описание",
            "Логотип + 1 основное фото",
            "Полные тексты на 3 языках (можно позже)",
            "Соцсети и фичи платформы (можно позже)",
        ]
    )

    d.save()
    return path


if __name__ == "__main__":
    out = build()
    # Also try classic name if not locked
    classic = ROOT / "output" / "pdf" / "JabPoint-client-content-brief.pdf"
    try:
        build(classic)
        print(classic.as_posix())
    except PermissionError:
        print("classic locked; wrote fillable name only")
    print(out.as_posix())
