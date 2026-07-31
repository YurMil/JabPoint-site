/**
 * ═══════════════════════════════════════════════════════════
 *  JabPoint — all visible text (ET / EN / RU)
 * ═══════════════════════════════════════════════════════════
 *
 * Change wording here. Contact values (phone, email) come from site.ts
 */

import type { LangCode } from './site'

export type ServiceItem = { n: string; t: string; d: string }
export type FeatureItem = { t: string; d: string }
export type StepItem = { n: string; t: string; d: string }
export type StatItem = { k: string; v: string }

export type Dictionary = {
  navServices: string
  navPlatform: string
  navHow: string
  navContact: string
  navCta: string
  themeLabel: string
  themeDark: string
  themeLight: string
  heroBadge: string
  heroTitle1: string
  heroTitle2: string
  heroSub: string
  heroCta1: string
  heroCta2: string
  heroImgTag: string
  stats: StatItem[]
  svcTitle: string
  svcSub: string
  services: ServiceItem[]
  platBadge: string
  platTitle: string
  platSub: string
  platCta: string
  platNote: string
  platFeatures: FeatureItem[]
  howTitle: string
  steps: StepItem[]
  contactTitle: string
  contactSub: string
  contactLabels: {
    phone: string
    email: string
    address: string
    hours: string
  }
  mapTitle: string
  mapSub: string
  footer: string
  socialLabel: string
  menuOpen: string
  menuClose: string
  /** Short labels for mobile bottom tabs */
  tabs: {
    home: string
    services: string
    platform: string
    how: string
    contact: string
  }
  callUs: string
}

export const dict: Record<LangCode, Dictionary> = {
  et: {
    navServices: 'Teenused',
    navPlatform: 'Platvorm',
    navHow: 'Kuidas',
    navContact: 'Kontakt',
    navCta: 'Broneeri aeg',
    themeLabel: 'Vaheta teemat',
    themeDark: 'TUME',
    themeLight: 'HELE',
    heroBadge: 'Iseteenindus · Tallinn',
    heroTitle1: 'Autoteenindus,',
    heroTitle2: 'mis liigub digitaalseks',
    heroSub:
      'JabPoint on iseteeninduslik autoteenindus Tallinnas. Ehitame platvormi, mis viib broneerimise, diagnostika ja hinnapakkumised täisdigitaalseks — nii kliendile kui partnerile. Kuni selleni: tule kohale, tõsta auto tõstukile või usalda see meie meistritele.',
    heroCta1: 'Broneeri aeg',
    heroCta2: 'Platvormist lähemalt',
    heroImgTag: 'Iseteeninduse boksid',
    stats: [
      { k: '24/7', v: 'Broneerimine tulekul' },
      { k: '6', v: 'Boksi ja tõstukit' },
      { k: '3', v: 'Keelt teeninduses' },
    ],
    svcTitle: 'Mida me täna teeme',
    svcSub: 'Neli teenust, mis on kohe saadaval — ilma ootejärjekorra ja üllatusarveteta.',
    services: [
      {
        n: 'S1',
        t: 'Iseteenindus',
        d: 'Rendi tõstuk ja tööriistad tunnitasu eest. Õlivahetus, pidurid, rehvid — teed ise, meistri nõuanne on kõrval.',
      },
      {
        n: 'S2',
        t: 'Hooldus ja remont',
        d: 'Korraline hooldus, diagnostika ja remont meie meistrite käe all. Selge hinnapakkumine enne tööde algust.',
      },
      {
        n: 'S3',
        t: 'Konsultatsioon',
        d: 'Tehniline nõustamine: mis autol viga on, mis on hädavajalik ja mis võib oodata.',
      },
      {
        n: 'S4',
        t: 'Autovalik',
        d: 'Aitame kasutatud auto valida ja kontrollime selle enne ostu läbi — tehniliselt ja ajalooliselt.',
      },
    ],
    platBadge: 'Arendusjärgus',
    platTitle: 'Digitaalne platvorm autoteenindusele',
    platSub:
      'Suur osa autoteeninduse protsessist käib endiselt telefoni ja paberi teel. Me viime selle ühte süsteemi: klient näeb hinda ja aega ette, partner saab tellimused, laoseisu ja aruandluse automaatselt.',
    platCta: 'Liitu ooteringiga',
    platNote: 'Beeta 2026',
    platFeatures: [
      { t: 'Broneerimine reaalajas', d: 'Vaba boks, meister ja hind — kohe ekraanil.' },
      { t: 'Digitaalne autopass', d: 'Kogu hooldusajalugu ja kviitungid ühes kohas.' },
      { t: 'Läbipaistev hinnastamine', d: 'Hinnapakkumine enne tööd, muudatused kinnitusega.' },
      { t: 'Partneri töölaud', d: 'Tellimused, koormus ja varuosad ühes vaates.' },
    ],
    howTitle: 'Neli sammu boksini',
    steps: [
      { n: '01', t: 'Võta ühendust', d: 'Helista või kirjuta — ütleme kohe, kas boks on vaba.' },
      { n: '02', t: 'Vali formaat', d: 'Teed ise või teeme meie. Mõlemal juhul selge hind ette.' },
      { n: '03', t: 'Tule kohale', d: 'Tõstuk, tööriistad ja valgus on valmis. Vajadusel meister kõrval.' },
      { n: '04', t: 'Sõida edasi', d: 'Tööde kokkuvõte ja soovitused järgmiseks korraks.' },
    ],
    contactTitle: 'Tule teenindusse',
    contactSub:
      'Räägime eesti, inglise ja vene keeles. Kirjuta, mis autoga tegu ja mida vaja — vastame kiiresti.',
    contactLabels: {
      phone: 'Telefon',
      email: 'E-post',
      address: 'Aadress',
      hours: 'Avatud',
    },
    mapTitle: 'JabPoint Tallinn',
    mapSub: 'Iseteeninduse boksid, hooldus ja diagnostika ühe katuse all.',
    footer: 'Iseteeninduslik autoteenindus',
    socialLabel: 'Sotsiaalmeedia',
    menuOpen: 'Ava menüü',
    menuClose: 'Sulge menüü',
    tabs: {
      home: 'Avaleht',
      services: 'Teenused',
      platform: 'Platvorm',
      how: 'Kuidas',
      contact: 'Kontakt',
    },
    callUs: 'Helista',
  },

  en: {
    navServices: 'Services',
    navPlatform: 'Platform',
    navHow: 'How it works',
    navContact: 'Contact',
    navCta: 'Book a slot',
    themeLabel: 'Switch theme',
    themeDark: 'DARK',
    themeLight: 'LIGHT',
    heroBadge: 'Self-service · Tallinn',
    heroTitle1: 'Car service,',
    heroTitle2: 'moving to digital',
    heroSub:
      "JabPoint is a self-service garage in Tallinn. We're building a platform that moves booking, diagnostics and quotes fully digital — for customers and partners alike. Until then: drive over, take a lift and tools, or leave the job to our mechanics.",
    heroCta1: 'Book a slot',
    heroCta2: 'See the platform',
    heroImgTag: 'Self-service bays',
    stats: [
      { k: '24/7', v: 'Booking coming soon' },
      { k: '6', v: 'Bays and lifts' },
      { k: '3', v: 'Languages on site' },
    ],
    svcTitle: 'What we do today',
    svcSub: 'Four services available right now — no queues, no surprise invoices.',
    services: [
      {
        n: 'S1',
        t: 'Self-service bay',
        d: 'Rent a lift and tools by the hour. Oil, brakes, tyres — do it yourself with a mechanic within reach.',
      },
      {
        n: 'S2',
        t: 'Service & repair',
        d: 'Scheduled maintenance, diagnostics and repair by our mechanics. Clear quote before any work starts.',
      },
      {
        n: 'S3',
        t: 'Consultation',
        d: "Technical advice: what's actually wrong, what's urgent, and what can wait.",
      },
      {
        n: 'S4',
        t: 'Car sourcing',
        d: 'We help you pick a used car and inspect it before you buy — technically and by history.',
      },
    ],
    platBadge: 'In development',
    platTitle: 'A digital platform for car service',
    platSub:
      "Most of the garage process still runs on phone calls and paper. We're moving it into one system: customers see price and time upfront, partners get orders, stock and reporting automatically.",
    platCta: 'Join the waitlist',
    platNote: 'Beta 2026',
    platFeatures: [
      { t: 'Real-time booking', d: 'Free bay, mechanic and price — right on screen.' },
      { t: 'Digital car passport', d: 'Full service history and receipts in one place.' },
      { t: 'Transparent pricing', d: 'Quote before the work, changes only on approval.' },
      { t: 'Partner dashboard', d: 'Orders, workload and parts in a single view.' },
    ],
    howTitle: 'Four steps to the bay',
    steps: [
      { n: '01', t: 'Get in touch', d: "Call or write — we'll tell you straight away if a bay is free." },
      { n: '02', t: 'Pick a format', d: 'Do it yourself or let us do it. Either way, a clear price upfront.' },
      { n: '03', t: 'Drive over', d: 'Lift, tools and light are ready. A mechanic nearby if you need one.' },
      { n: '04', t: 'Drive on', d: 'A summary of the work and what to watch next time.' },
    ],
    contactTitle: 'Come to the shop',
    contactSub:
      'We speak Estonian, English and Russian. Tell us the car and the job — we answer fast.',
    contactLabels: {
      phone: 'Phone',
      email: 'E-mail',
      address: 'Address',
      hours: 'Open',
    },
    mapTitle: 'JabPoint Tallinn',
    mapSub: 'Self-service bays, maintenance and diagnostics under one roof.',
    footer: 'Self-service car garage',
    socialLabel: 'Social media',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    tabs: {
      home: 'Home',
      services: 'Services',
      platform: 'Platform',
      how: 'Steps',
      contact: 'Contact',
    },
    callUs: 'Call us',
  },

  ru: {
    navServices: 'Услуги',
    navPlatform: 'Платформа',
    navHow: 'Как это работает',
    navContact: 'Контакты',
    navCta: 'Записаться',
    themeLabel: 'Сменить тему',
    themeDark: 'ТЁМНАЯ',
    themeLight: 'СВЕТЛАЯ',
    heroBadge: 'Самообслуживание · Таллинн',
    heroTitle1: 'Автосервис,',
    heroTitle2: 'который уходит в цифру',
    heroSub:
      'JabPoint — автосервис самообслуживания в Таллинне. Мы строим платформу, которая переводит запись, диагностику и расчёт стоимости в цифру — и для клиентов, и для партнёров. А пока — приезжайте: подъёмник и инструмент ваши, или доверьте работу нашим мастерам.',
    heroCta1: 'Записаться',
    heroCta2: 'О платформе',
    heroImgTag: 'Боксы самообслуживания',
    stats: [
      { k: '24/7', v: 'Запись — скоро' },
      { k: '6', v: 'Боксов и подъёмников' },
      { k: '3', v: 'Языка в сервисе' },
    ],
    svcTitle: 'Что мы делаем сегодня',
    svcSub: 'Четыре услуги, доступные прямо сейчас — без очередей и неожиданных счетов.',
    services: [
      {
        n: 'S1',
        t: 'Самообслуживание',
        d: 'Аренда подъёмника и инструмента почасово. Масло, тормоза, шины — делаете сами, мастер рядом.',
      },
      {
        n: 'S2',
        t: 'Обслуживание и ремонт',
        d: 'Плановое ТО, диагностика и ремонт нашими мастерами. Понятная смета до начала работ.',
      },
      {
        n: 'S3',
        t: 'Консультация',
        d: 'Техническая консультация: что не так, что срочно, а что может подождать.',
      },
      {
        n: 'S4',
        t: 'Автоподбор',
        d: 'Поможем выбрать автомобиль с пробегом и проверим его до покупки — технически и по истории.',
      },
    ],
    platBadge: 'В разработке',
    platTitle: 'Цифровая платформа для автосервиса',
    platSub:
      'Большая часть работы сервиса до сих пор идёт через звонки и бумагу. Мы переносим её в одну систему: клиент заранее видит цену и время, партнёр получает заказы, склад и отчётность автоматически.',
    platCta: 'В лист ожидания',
    platNote: 'Бета 2026',
    platFeatures: [
      { t: 'Запись в реальном времени', d: 'Свободный бокс, мастер и цена — сразу на экране.' },
      { t: 'Цифровой паспорт авто', d: 'Вся история обслуживания и чеки в одном месте.' },
      { t: 'Прозрачные цены', d: 'Смета до работ, изменения — только с подтверждением.' },
      { t: 'Кабинет партнёра', d: 'Заказы, загрузка и запчасти в одном окне.' },
    ],
    howTitle: 'Четыре шага до бокса',
    steps: [
      { n: '01', t: 'Свяжитесь с нами', d: 'Позвоните или напишите — сразу скажем, свободен ли бокс.' },
      { n: '02', t: 'Выберите формат', d: 'Делаете сами или делаем мы. В обоих случаях цена известна заранее.' },
      { n: '03', t: 'Приезжайте', d: 'Подъёмник, инструмент и свет готовы. Мастер рядом, если нужен.' },
      { n: '04', t: 'Едьте дальше', d: 'Итог работ и рекомендации на следующий раз.' },
    ],
    contactTitle: 'Приезжайте в сервис',
    contactSub:
      'Говорим на эстонском, английском и русском. Напишите, какая машина и что нужно — ответим быстро.',
    contactLabels: {
      phone: 'Телефон',
      email: 'Почта',
      address: 'Адрес',
      hours: 'Часы',
    },
    mapTitle: 'JabPoint Tallinn',
    mapSub: 'Боксы самообслуживания, ТО и диагностика под одной крышей.',
    footer: 'Автосервис самообслуживания',
    socialLabel: 'Соцсети',
    menuOpen: 'Открыть меню',
    menuClose: 'Закрыть меню',
    tabs: {
      home: 'Главная',
      services: 'Услуги',
      platform: 'Платформа',
      how: 'Шаги',
      contact: 'Контакт',
    },
    callUs: 'Позвонить',
  },
}
