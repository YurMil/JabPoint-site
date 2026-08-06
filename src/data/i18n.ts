/**
 * ═══════════════════════════════════════════════════════════
 *  JabPoint — all visible text (ET / EN / RU)
 * ═══════════════════════════════════════════════════════════
 *
 * Change wording here. Contact values (phone, email) come from site.ts
 * Canonical Stage-1 EN copy: docs/product/03-technical-assignment.md
 */

import type { LangCode, GalleryId } from './site'

export type ServiceItem = { n: string; t: string; d: string }
export type FeatureItem = { t: string; d: string }
export type StepItem = { n: string; t: string; d: string }
export type StatItem = { k: string; v: string }

export type Dictionary = {
  /** Document <title> and og:title when this language is active */
  seoTitle: string
  /** Meta description / og:description when this language is active */
  seoDescription: string
  navServices: string
  navPlatform: string
  navCommunity: string
  navHow: string
  navPartners: string
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
  communityTitle: string
  communitySub: string
  communityHighlights: FeatureItem[]
  communityStory: string
  galleryTitle: string
  gallerySub: string
  /** Caption per photo — keys match `site.gallery[].id` */
  galleryCaptions: Record<GalleryId, string>
  /** Accessible labels for the rail arrows */
  galleryPrev: string
  galleryNext: string
  platBadge: string
  platTitle: string
  /** Short teaser shown while the full platform details are hidden */
  platTeaser: string
  /** Full description — currently not rendered, kept for when details are revealed */
  platSub: string
  /** Roadmap note: the upcoming interactive booking platform. Currently not rendered. */
  platFuture: string
  platCta: string
  platNote: string
  platFeatures: FeatureItem[]
  howTitle: string
  steps: StepItem[]
  partnersTitle: string
  partnersSub: string
  partnerPillars: FeatureItem[]
  partnersGeoLabel: string
  partnersGeo: string
  partnersCta: string
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
  openInMaps: string
  footer: string
  socialLabel: string
  menuOpen: string
  menuClose: string
  /** Short labels for mobile bottom tabs */
  tabs: {
    home: string
    services: string
    platform: string
    community: string
    contact: string
  }
  callUs: string
  /** Mobile floating CTA — book online */
  fabBook: string
  whatsapp: string
  telegram: string
  quickContactsLabel: string
  maintBadge: string
  maintTitle1: string
  maintTitle2: string
  maintSub: string
  maintNote: string
}

export const dict: Record<LangCode, Dictionary> = {
  et: {
    seoTitle: 'JabPoint Tallinn — iseteenindus, autoplatvorm ja detailing',
    seoDescription:
      'JabPoint on kaasaegne autoplatvorm Tallinnas (Plaasi tn 2): iseteenindus, professionaalne töökoda, detailing, rehviteenus ja marketplace ühes kohas. Avatud 10.00–21.00.',
    navServices: 'Teenused',
    navPlatform: 'Platvorm',
    navCommunity: 'Kogukond',
    navHow: 'Kuidas',
    navPartners: 'Partnerid',
    navContact: 'Kontakt',
    navCta: 'Broneeri',
    themeLabel: 'Vaheta teemat',
    themeDark: 'TUME',
    themeLight: 'HELE',
    heroBadge: 'Tallinn · Plaasi tn 2',
    heroTitle1: 'Kõik sinu autole',
    heroTitle2: 'ühes kohas',
    heroSub:
      'JabPoint on kaasaegne autode ökosüsteem, mis ühendab iseteeninduse, professionaalse töökoja, detailing’u, rehviteenuse ja automarketplace’i ühes platvormis.',
    heroCta1: 'Broneeri',
    heroCta2: 'Meie teenused',
    heroImgTag: 'Modern Automotive Space',
    stats: [
      { k: '5', v: 'Autotõstukit' },
      { k: '2', v: 'Detailing’u boksi' },
      { k: '24/7', v: 'Broneerimine saadaval' },
    ],
    svcTitle: 'Meie teenused',
    svcSub: 'Kõik, mis autoga seotud — ühes kohas.',
    services: [
      {
        n: 'S1',
        t: 'Iseteenindus',
        d: 'Tõstukid, professionaalne ja spetsiaalne tööriist, kompressorid ning kulumaterjalid iseseisvaks hoolduseks.',
      },
      {
        n: 'S2',
        t: 'Autoteenindus',
        d: 'Remont ja hooldus professionaalsete meistrite käe all.',
      },
      {
        n: 'S3',
        t: 'Detailing',
        d: 'Keemiline puhastus, poleerimine, kaitsekatted, täielik hooldus kerele ja salongile.',
      },
      {
        n: 'S4',
        t: 'Rohkem teenuseid',
        d: 'Rehvitöö, varuosade valik ja tellimine, diagnostika, PDR, toonimine, abi auto ostu-müügil (kontroll, müügieelne ettevalmistus, komisjon, väljaost).',
      },
      {
        n: 'S5',
        t: 'Detailing iseteenindus',
        d: 'Isepesu, professionaalne keemia, harjad, märjad ja tavalised tolmuimejad.',
      },
    ],
    communityTitle: 'Atmosfäär ja kogukond',
    communitySub: 'Rohkem kui teenindus — autoklubi kohtumisteks, ülevaadeteks ja üritusteks.',
    communityHighlights: [
      { t: 'Lounge', d: 'Puhkeala, kus oodata või lihtsalt olla.' },
      { t: 'PlayStation 5', d: 'Mänguala, kuni auto valmis saab.' },
      { t: 'Lauajalgpall', d: 'Kerge võistlusmeeleolu sõpradega.' },
      { t: 'Ruumi rent', d: 'Koht kohtumisteks, shoot’ideks ja üritusteks.' },
    ],
    communityStory:
      'JabPoint on autoklubi ja koht suhtlemiseks — mitte ainult boks, kuhu auto jätta.',
    galleryTitle: 'Meie punkt seestpoolt',
    gallerySub: 'Nii näeb JabPoint Tallinnas välja täna — tõsted, tööriistad ja puhkeala.',
    galleryCaptions: {
      reception: 'Vastuvõtt ja ooteala',
      bar: 'JabPointi baar ja vastuvõtulett',
      lifts: 'Tõstukid ja töökohad',
      hall: 'Töökoja saal tõstukitega',
      lounge: 'Kohvinurk boksi kõrval',
      masters: 'Meistrid töös',
      onLift: 'Iga auto on teretulnud',
      opening: 'Avamine ja klubiüritused',
      kids: 'Lounge lastele ja külalistele',
      workday: 'Tavaline tööpäev',
      detailing: 'Detailing-tsoon',
      team: 'Meie meeskond',
    },
    galleryPrev: 'Eelmised fotod',
    galleryNext: 'Järgmised fotod',
    platBadge: 'Varsti',
    platTitle: 'JabPoint Platform',
    platTeaser:
      'Peagi ootavad ees uudised ning platvormi ja teeninduse suured uuendused. Püsi lainel.',
    platSub:
      'Digitaalne ökosüsteem, mis ühendab autoomanikke, töökodasid, iseteenindusi, detailing-stuudioid, spetsialiste ja autosektori ettevõtteid üle Euroopa.',
    platFuture:
      'Edasi arendame interaktiivse broneerimisplatvormi: leia parim autoteenindus enda lähedal ja broneeri paari klikiga. Igas olukorras leidub autoteenindus, mis saab sind aidata — ja meie aitame selle üles leida.',
    platCta: 'Loe lähemalt',
    platNote: 'Beeta 2026',
    platFeatures: [
      { t: 'Online-broneerimine', d: 'Broneeri paari klikiga.' },
      { t: 'Hinnangud', d: 'Meistrite ja teenuste reitingud.' },
      { t: 'Marketplace', d: 'Varuosad, autokeemia ja sõltumatute spetsialistide teenused.' },
      { t: 'Üks äpp', d: 'Kogu infrastruktuur ühes rakenduses.' },
    ],
    howTitle: 'Kuidas see töötab',
    steps: [
      { n: '01', t: 'Vali teenus', d: 'Vali vajalik teenus.' },
      { n: '02', t: 'Broneeri', d: 'Vali sobiv aeg.' },
      { n: '03', t: 'Tule kohale', d: 'Külasta JabPointi aadressil Plaasi tn 2, Tallinn.' },
      { n: '04', t: 'Nauti', d: 'Auto on hooldatud, klient rahul.' },
    ],
    partnersTitle: 'Partnerid ja frantsiis',
    partnersSub: 'Töökohad meistritele, lava brändidele ja ühine mudel laienemiseks.',
    partnerPillars: [
      {
        t: 'Meistritele',
        d: 'Töökohad sõltumatutele spetsialistidele — PDR, elektrikud, diagnostikud.',
      },
      {
        t: 'Brändidele',
        d: 'Turundusplats tootjatele: reklaam, videosalvestus ja üritused.',
      },
      {
        t: 'Frantsiis',
        d: 'Üks bränd, üks broneerimissüsteem, üks äpp, üks kliendibaas ja ühised kvaliteedistandardid.',
      },
    ],
    partnersGeoLabel: 'Arengugeograafia',
    partnersGeo: 'Tallinn → Eesti → Läti → Leedu → Poola → Soome → Hispaania → Euroopa',
    partnersCta: 'Kirjuta partnerlusest',
    contactTitle: 'Räägime',
    contactSub: 'Vajad abi autoga? Oleme sinu jaoks olemas.',
    contactLabels: {
      phone: 'Telefon',
      email: 'E-post',
      address: 'Aadress',
      hours: 'Avatud',
    },
    mapTitle: 'JabPoint Tallinn',
    mapSub: 'Tasuta parkimine · 10.00–21.00 · Lounge · Online-broneerimine',
    openInMaps: 'Ava Google Mapsis',
    footer: 'Kaasaegne autoökosüsteem',
    socialLabel: 'Sotsiaalmeedia',
    menuOpen: 'Ava menüü',
    menuClose: 'Sulge menüü',
    tabs: {
      home: 'Avaleht',
      services: 'Teenused',
      platform: 'Platvorm',
      community: 'Kogukond',
      contact: 'Kontakt',
    },
    callUs: 'Helista',
    fabBook: 'Broneeri',
    whatsapp: 'WhatsApp',
    telegram: 'Telegram',
    quickContactsLabel: 'Kiire kontakt',
    maintBadge: 'Hooldus',
    maintTitle1: 'Käimas on',
    maintTitle2: 'tehnilised tööd',
    maintSub:
      'Uuendame JabPointi veebilehte. Uudiseid ja kontakte leiad sotsiaalmeediast — oleme peagi tagasi.',
    maintNote: 'Plaasi tn 2, Tallinn · peagi taas online',
  },

  en: {
    seoTitle: 'JabPoint Tallinn — Self-service, automotive platform & detailing',
    seoDescription:
      'JabPoint is a modern automotive platform in Tallinn (Plaasi tn 2): self-service, professional workshop, detailing, tyre service and marketplace in one place. Open 10.00–21.00.',
    navServices: 'Services',
    navPlatform: 'Platform',
    navCommunity: 'Community',
    navHow: 'How it works',
    navPartners: 'Partners',
    navContact: 'Contacts',
    navCta: 'Book Now',
    themeLabel: 'Switch theme',
    themeDark: 'DARK',
    themeLight: 'LIGHT',
    heroBadge: 'Tallinn · Plaasi tn 2',
    heroTitle1: 'Everything for Your Car',
    heroTitle2: 'in One Place',
    heroSub:
      'JabPoint is a modern automotive ecosystem combining self-service, professional workshop, detailing, tyre service and automotive marketplace in one platform.',
    heroCta1: 'Book Now',
    heroCta2: 'Our Services',
    heroImgTag: 'Modern Automotive Space',
    stats: [
      { k: '5', v: 'Vehicle Lifts' },
      { k: '2', v: 'Detailing Bays' },
      { k: '24/7', v: 'Booking Available' },
    ],
    svcTitle: 'Our Services',
    svcSub: 'Everything related to your car - in one place.',
    services: [
      {
        n: 'S1',
        t: 'Self-Service',
        d: 'Lifts, professional and specialised tools, compressors, and consumables for independent maintenance.',
      },
      {
        n: 'S2',
        t: 'Car Service',
        d: 'Repair and scheduled maintenance by professional masters.',
      },
      {
        n: 'S3',
        t: 'Detailing',
        d: 'Interior deep cleaning, polishing, protective coatings, full body and cabin care.',
      },
      {
        n: 'S4',
        t: 'More Services',
        d: 'Tyre fitting; parts selection and ordering; diagnostics; PDR; window tinting; assistance with buying and selling cars (inspection, pre-sale preparation, commission sales, buy-out).',
      },
      {
        n: 'S5',
        t: 'Detailing Self-Service',
        d: 'Self-wash bay with professional chemicals, brushes, wet and dry vacuums.',
      },
    ],
    communityTitle: 'Atmosphere & Community',
    communitySub: 'More than a workshop — an automotive club for meet-ups, car reviews and events.',
    communityHighlights: [
      { t: 'Lounge', d: 'A rest zone to wait — or simply hang out.' },
      { t: 'PlayStation 5', d: 'A play area while the car is being sorted.' },
      { t: 'Table football', d: 'A quick match with friends between jobs.' },
      { t: 'Space rental', d: 'A venue for meetings, shoots and gatherings.' },
    ],
    communityStory:
      'JabPoint is an automotive club and a place to connect — not only a bay to leave your car.',
    galleryTitle: 'Inside our point',
    gallerySub: 'This is JabPoint Tallinn today — lifts, tools and a place to wait in comfort.',
    galleryCaptions: {
      reception: 'Reception and waiting area',
      bar: 'The JabPoint bar and front desk',
      lifts: 'Lifts and work bays',
      hall: 'Workshop hall with the lifts',
      lounge: 'Coffee corner next to the bays',
      masters: 'Masters at work',
      onLift: 'Every car is welcome',
      opening: 'Opening day and club events',
      kids: 'Lounge for kids and guests',
      workday: 'An ordinary working day',
      detailing: 'Detailing zone',
      team: 'Our team',
    },
    galleryPrev: 'Previous photos',
    galleryNext: 'Next photos',
    platBadge: 'Coming Soon',
    platTitle: 'JabPoint Platform',
    platTeaser:
      'Big news and major platform and service updates are coming soon. Stay tuned.',
    platSub:
      'A digital ecosystem connecting car owners, workshops, self-service sites, detailing studios, specialists and automotive companies across Europe.',
    platFuture:
      'Next, we are building an interactive booking platform: find the best car service near you and book it in a few clicks. Whatever the situation, there is a car service that can help you — and we help you find it.',
    platCta: 'Learn More',
    platNote: 'Beta 2026',
    platFeatures: [
      { t: 'Online Booking', d: 'Book in a few clicks.' },
      { t: 'Ratings', d: 'Ratings for masters and services.' },
      { t: 'Marketplace', d: 'Parts, car care products, and independent specialist services.' },
      { t: 'One App', d: 'Entire infrastructure in one application.' },
    ],
    howTitle: 'How It Works',
    steps: [
      { n: '01', t: 'Choose Service', d: 'Select the service you need.' },
      { n: '02', t: 'Book', d: 'Pick a convenient time.' },
      { n: '03', t: 'Arrive', d: 'Visit JabPoint at Plaasi tn 2, Tallinn.' },
      { n: '04', t: 'Enjoy', d: 'Car serviced; customer satisfied.' },
    ],
    partnersTitle: 'Partners & Franchise',
    partnersSub: 'Workplaces for masters, a stage for brands, and one model built to expand.',
    partnerPillars: [
      {
        t: 'For masters',
        d: 'Workplaces for independent specialists — PDR, electricians, diagnosticians.',
      },
      {
        t: 'For brands',
        d: 'A marketing venue for manufacturers: advertising, video production and events.',
      },
      {
        t: 'Franchise',
        d: 'One brand, one booking system, one app, one client base and shared quality standards.',
      },
    ],
    partnersGeoLabel: 'Expansion geography',
    partnersGeo: 'Tallinn → Estonia → Latvia → Lithuania → Poland → Finland → Spain → Europe',
    partnersCta: 'Talk partnership',
    contactTitle: "Let's Talk",
    contactSub: "Need help with your car? We're here for you.",
    contactLabels: {
      phone: 'Phone',
      email: 'E-mail',
      address: 'Address',
      hours: 'Open',
    },
    mapTitle: 'JabPoint Tallinn',
    mapSub: 'Free parking · 10.00–21.00 · Lounge · Online booking',
    openInMaps: 'Open in Google Maps',
    footer: 'Modern automotive ecosystem',
    socialLabel: 'Social media',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    tabs: {
      home: 'Home',
      services: 'Services',
      platform: 'Platform',
      community: 'Community',
      contact: 'Contacts',
    },
    callUs: 'Call us',
    fabBook: 'Book online',
    whatsapp: 'WhatsApp',
    telegram: 'Telegram',
    quickContactsLabel: 'Quick contact',
    maintBadge: 'Maintenance',
    maintTitle1: 'Technical work',
    maintTitle2: 'in progress',
    maintSub:
      'We are updating the JabPoint website. Follow us on social media for news — we will be back shortly.',
    maintNote: 'Plaasi tn 2, Tallinn · back online soon',
  },

  ru: {
    seoTitle: 'JabPoint Tallinn — сервис самообслуживания, автомобильная платформа и детейлинг',
    seoDescription:
      'JabPoint — современная автомобильная платформа в Таллинне (Plaasi tn 2): самообслуживание, профессиональный сервис, детейлинг, шиномонтаж и маркетплейс в одном месте. Открыто 10.00–21.00.',
    navServices: 'Услуги',
    navPlatform: 'Платформа',
    navCommunity: 'Сообщество',
    navHow: 'Как это работает',
    navPartners: 'Партнёрам',
    navContact: 'Контакты',
    navCta: 'Записаться',
    themeLabel: 'Сменить тему',
    themeDark: 'ТЁМНАЯ',
    themeLight: 'СВЕТЛАЯ',
    heroBadge: 'Таллинн · Plaasi tn 2',
    heroTitle1: 'Всё для вашего авто',
    heroTitle2: 'в одном месте',
    heroSub:
      'JabPoint — современная автомобильная экосистема: самообслуживание, профессиональный сервис, детейлинг, шиномонтаж и автомобильный маркетплейс на одной платформе.',
    heroCta1: 'Записаться',
    heroCta2: 'Наши услуги',
    heroImgTag: 'Modern Automotive Space',
    stats: [
      { k: '5', v: 'Подъёмников' },
      { k: '2', v: 'Детейлинг-бокса' },
      { k: '24/7', v: 'Запись доступна' },
    ],
    svcTitle: 'Наши услуги',
    svcSub: 'Всё, что связано с автомобилем — в одном месте.',
    services: [
      {
        n: 'S1',
        t: 'Сервис самообслуживания',
        d: 'Подъёмники, профессиональный и специализированный инструмент, компрессоры и расходники для самостоятельного обслуживания.',
      },
      {
        n: 'S2',
        t: 'Автосервис',
        d: 'Ремонт и ТО от профессиональных мастеров.',
      },
      {
        n: 'S3',
        t: 'Детейлинг',
        d: 'Химчистка, полировка, защитные покрытия, полный уход за кузовом и салоном.',
      },
      {
        n: 'S4',
        t: 'Другие услуги',
        d: 'Шиномонтаж, подбор и заказ запчастей, диагностика, PDR, тонировка, помощь при покупке и продаже авто (проверка, предпродажная подготовка, комиссия, выкуп).',
      },
      {
        n: 'S5',
        t: 'Детейлинг самообслуживания',
        d: 'Самостоятельная мойка, профессиональная химия, кисточки, щётки, моющие и обычные пылесосы.',
      },
    ],
    communityTitle: 'Атмосфера и сообщество',
    communitySub: 'Больше, чем сервис — автомобильный клуб для встреч, обзоров и событий.',
    communityHighlights: [
      { t: 'Лаунж', d: 'Зона отдыха — подождать или просто побыть.' },
      { t: 'PlayStation 5', d: 'Игровая зона, пока готовят авто.' },
      { t: 'Настольный футбол', d: 'Быстрый матч с друзьями между делами.' },
      { t: 'Аренда пространства', d: 'Площадка для встреч, съёмок и мероприятий.' },
    ],
    communityStory:
      'JabPoint — это автомобильный клуб и место для общения, а не только бокс, куда оставляют машину.',
    galleryTitle: 'Наша точка изнутри',
    gallerySub: 'Так JabPoint в Таллинне выглядит сегодня: подъёмники, инструмент и зона отдыха.',
    galleryCaptions: {
      reception: 'Ресепшн и зона ожидания',
      bar: 'Барная стойка и ресепшн JabPoint',
      lifts: 'Подъёмники и рабочие посты',
      hall: 'Цех с подъёмниками',
      lounge: 'Кофе-зона рядом с боксами',
      masters: 'Мастера за работой',
      onLift: 'Здесь рады любой машине',
      opening: 'Открытие и клубные встречи',
      kids: 'Лаунж для детей и гостей',
      workday: 'Обычный рабочий день',
      detailing: 'Детейлинг-зона',
      team: 'Наша команда',
    },
    galleryPrev: 'Предыдущие фото',
    galleryNext: 'Следующие фото',
    platBadge: 'Скоро',
    platTitle: 'JabPoint Platform',
    platTeaser:
      'Скоро — новости и масштабные обновления платформы и сервиса. Следите за анонсами.',
    platSub:
      'Цифровая экосистема, объединяющая автовладельцев, автосервисы, сервисы самообслуживания, детейлинг-студии, специалистов и автокомпании по всей Европе.',
    platFuture:
      'В будущем мы разработаем интерактивную платформу бронирования: найти лучший автосервис ближе и удобнее к вам и записаться в пару кликов. В любой ситуации найдётся автосервис, который сможет вам помочь, — а мы поможем его найти.',
    platCta: 'Узнать больше',
    platNote: 'Бета 2026',
    platFeatures: [
      { t: 'Онлайн-запись', d: 'Запись в пару кликов.' },
      { t: 'Рейтинги', d: 'Рейтинги мастеров и сервисов.' },
      { t: 'Маркетплейс', d: 'Запчасти, автохимия и услуги независимых специалистов.' },
      { t: 'Одно приложение', d: 'Вся инфраструктура в одном приложении.' },
    ],
    howTitle: 'Как это работает',
    steps: [
      { n: '01', t: 'Выберите услугу', d: 'Выберите нужную услугу.' },
      { n: '02', t: 'Запишитесь', d: 'Выберите удобное время.' },
      { n: '03', t: 'Приезжайте', d: 'Посетите JabPoint по адресу Plaasi tn 2, Tallinn.' },
      { n: '04', t: 'Наслаждайтесь', d: 'Автомобиль обслужен, клиент доволен.' },
    ],
    partnersTitle: 'Партнёрам и франшизе',
    partnersSub: 'Рабочие места мастерам, площадка брендам и единая модель для роста.',
    partnerPillars: [
      {
        t: 'Мастерам',
        d: 'Рабочие места независимым специалистам — PDR, электрики, диагносты.',
      },
      {
        t: 'Брендам',
        d: 'Маркетинговая площадка для производителей: реклама, видеосъёмка и мероприятия.',
      },
      {
        t: 'Франшиза',
        d: 'Единый бренд, единая система бронирования, единое приложение, единая база клиентов и стандарты качества.',
      },
    ],
    partnersGeoLabel: 'География развития',
    partnersGeo: 'Таллин → Эстония → Латвия → Литва → Польша → Финляндия → Испания → Европа',
    partnersCta: 'Написать о партнёрстве',
    contactTitle: 'Давайте поговорим',
    contactSub: 'Нужна помощь с авто? Мы на связи.',
    contactLabels: {
      phone: 'Телефон',
      email: 'Почта',
      address: 'Адрес',
      hours: 'Часы',
    },
    mapTitle: 'JabPoint Tallinn',
    mapSub: 'Бесплатная парковка · 10.00–21.00 · Лаунж · Онлайн-запись',
    openInMaps: 'Открыть в Google Maps',
    footer: 'Современная автомобильная экосистема',
    socialLabel: 'Соцсети',
    menuOpen: 'Открыть меню',
    menuClose: 'Закрыть меню',
    tabs: {
      home: 'Главная',
      services: 'Услуги',
      platform: 'Платформа',
      community: 'Клуб',
      contact: 'Контакты',
    },
    callUs: 'Позвонить',
    fabBook: 'Записаться онлайн',
    whatsapp: 'WhatsApp',
    telegram: 'Telegram',
    quickContactsLabel: 'Быстрый контакт',
    maintBadge: 'Техработы',
    maintTitle1: 'Ведутся',
    maintTitle2: 'технические работы',
    maintSub:
      'Мы обновляем сайт JabPoint. Новости и контакты — в соцсетях, скоро вернёмся.',
    maintNote: 'Plaasi tn 2, Tallinn · скоро снова online',
  },
}
