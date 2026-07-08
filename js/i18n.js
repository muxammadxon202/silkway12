/* ---------- i18n: узбекский по умолчанию + русский ---------- */
(function () {
  const KEY = "silkway_lang";
  const DEFAULT = "uz";
  let lang = DEFAULT;
  try {
    const s = localStorage.getItem(KEY);
    if (s === "uz" || s === "ru") lang = s;
  } catch (e) {}

  const T = {
    uz: {
      "meta.title": "Silkway Web Company — saytlar, botlar va do'konlar tayyor holda",
      "meta.desc": "Silkway Web Company: lendinglar, saytlar, Telegram-botlar, to'y taklifnomalari va onlayn do'konlar tayyor holda. Belgilangan narx va muddat. Samarqand, O'zbekiston.",
      "logo.aria": "Silkway Web Company — bosh sahifaga",
      "nav.aria": "Asosiy navigatsiya",
      "lang.aria": "Sayt tili",
      "nav.services": "Xizmatlar",
      "nav.order": "Buyurtma yig'ish",
      "nav.work": "Ishlar",
      "nav.process": "Qanday ishlaymiz",
      "intro.hint": "O'tkazib yuborish uchun bosing",

      "hero.eyebrow": "Raqamli xizmatlar studiyasi · Samarqand",
      "hero.title": "Sayt, bot va&nbsp;do'kon — <em>aniq narxda, o'z vaqtida</em>",
      "hero.sub": "Narxi va muddati oldindan aniq — kelishuvdan keyin o'zgarmaydi. Buyurtmani shu sahifada yig'ing — ariza bizga Telegramga keladi, ish bugun boshlanadi.",
      "hero.cta1": "Buyurtma yig'ish",
      "hero.cta2": "Xizmatlarni ko'rish",
      "hero.fact1a": "3 kundan",
      "hero.fact1b": "loyiha ishga tushishi",
      "hero.fact2a": "9 xizmat",
      "hero.fact2b": "barchasi tayyor holda",
      "hero.fact3a": "1 chat",
      "hero.fact3b": "butun jarayon Telegramda",

      "sv.title": "To'qqiz xizmat",
      "sv.lead": "Har bir xizmat — tayyor paket: nima kirishi, qancha turishi va qachon tayyor bo'lishi ma'lum.",
      "sv.optim.h3": "Biznes-jarayon optimizatsiyasi",
      "sv.optim.desc": "Jarayonlarni tahlil qilamiz, qo'l mehnati va to'siqlarni yo'qotamiz.",
      "sv.optim.li1": "Joriy jarayonlar auditi",
      "sv.optim.li2": "Yaxshilash xaritasi",
      "sv.optim.li3": "Joriy etish va o'qitish",
      "sv.optim.price": "6 000 000 so'mdan",
      "sv.optim.days": "14 kun",
      "sv.hr.h3": "HR-integratsiya",
      "sv.hr.desc": "Yollash va moslashuvni avtomatlashtirish: nomzod arizasidan onboardinggacha.",
      "sv.hr.li1": "Nomzod arizalarini qabul",
      "sv.hr.li2": "Tanlov bosqichlari",
      "sv.hr.li3": "Xodimlar onboardingi",
      "sv.hr.price": "7 000 000 so'mdan",
      "sv.hr.days": "16 kun",
      "sv.crm.h3": "CRM-integratsiya",
      "sv.crm.desc": "CRM sozlaymiz va sayt, bot, omborni yagona tizimga bog'laymiz.",
      "sv.crm.li1": "CRM sozlash",
      "sv.crm.li2": "Sayt + bot + ombor aloqasi",
      "sv.crm.li3": "Hisobot va voronkalar",
      "sv.crm.price": "9 000 000 so'mdan",
      "sv.crm.days": "18 kun",
      "sv.ai.h3": "AI-agentlar",
      "sv.ai.desc": "AI asosidagi ovozli va chat-botlar qo'ng'iroq va arizalarni operatorsiz qabul qiladi.",
      "sv.ai.li1": "Ovozli AI-agent",
      "sv.ai.li2": "AI chat-bot",
      "sv.ai.li3": "24/7 qo'ng'iroq qabuli",
      "sv.ai.price": "12 000 000 so'mdan",
      "sv.ai.days": "21 kun",
      "order.btn": "Buyurtma berish",

      "sv.landing.h3": "Lending",
      "sv.landing.desc": "Bitta xizmat yoki mahsulotni sotadigan bir sahifali sayt. Tezkor, animatsiya va ariza shakli bilan.",
      "sv.landing.li1": "Brendingizga mos dizayn",
      "sv.landing.li2": "Telefonga moslashuv",
      "sv.landing.li3": "Telegramga ariza shakli",
      "sv.landing.price": "2 500 000 so'mdan",
      "sv.landing.days": "5 kun",

      "sv.site.h3": "Kompaniya sayti",
      "sv.site.desc": "Ko'p sahifali sayt: kompaniya haqida, xizmatlar, kontaktlar. Admin-panel bilan — narx va matnlarni o'zingiz o'zgartirasiz.",
      "sv.site.li1": "7 sahifagacha",
      "sv.site.li2": "Xarita va kontaktlar",
      "sv.site.li3": "Tez yuklanish, SEO-asos",
      "sv.site.price": "4 500 000 so'mdan",
      "sv.site.days": "10 kun",

      "sv.bot.h3": "Telegram-bot",
      "sv.bot.desc": "Bot buyurtmalarni qabul qiladi, mijozlarga javob beradi va sizga arizalarni yuboradi. Bu sahifa buyurtmalarni aynan shunday yuboradi.",
      "sv.bot.li1": "Menyu va suhbat ssenariylari",
      "sv.bot.li2": "Arizalar chatingizga",
      "sv.bot.li3": "Tugmalar, katalog, savat",
      "sv.bot.price": "2 500 000 so'mdan",
      "sv.bot.days": "7 kun",

      "sv.wedding.h3": "To'y taklifnomasi",
      "sv.wedding.desc": "Ikki tilli taklifnoma-sayt: har bir mehmonda o'z ismi bilan shaxsiy havola, javob sizga Telegramga keladi.",
      "sv.wedding.li1": "UZ + RU versiyalari",
      "sv.wedding.li2": "Har bir mehmonga shaxsiy havola",
      "sv.wedding.li3": "«Boraman / bormayman» javoblari Telegramda",
      "sv.wedding.price": "800 000 so'mdan",
      "sv.wedding.days": "3 kun",
      "sv.wedding.market": "Mehmonlarga shaxsiy havolalar — oddiy shablonlarda bunday yo'q",

      "sv.shop.h3": "Onlayn do'kon",
      "sv.shop.desc": "Katalog, savat, to'lovni qabul qilish va buyurtma haqida bildirishnomalar. Ijara va vositachilarsiz onlayn savdo qiling.",
      "sv.shop.li1": "Katalog va savat",
      "sv.shop.li2": "Click / Payme to'lovi",
      "sv.shop.li3": "Buyurtmalar sizga Telegramga",
      "sv.shop.price": "7 000 000 so'mdan",
      "sv.shop.days": "14 kun",

      "cfg.title": "Buyurtmani yig'ing",
      "cfg.lead": "Xizmat va opsiyalarni tanlang — narx va muddat darhol hisoblanadi. Tugma tayyor arizani Telegramga yuboradi.",
      "cfg.legend_service": "Xizmat",
      "cfg.legend_options": "Opsiyalar",
      "cfg.legend_urgency": "Muddat",
      "cfg.urgent": "Shoshilinch (+30% narxga) — muddat kamida ikki barobar qisqaradi: 10 kun → 3–5 kun, 2 kun → 12 soat",
      "cfg.days_prefix": "Tayyor bo'ladi:",
      "cfg.currency": "so'm",
      "cfg.send": "Arizani Telegramga yuborish",
      "cfg.contact_ph": "Telefon yoki @username (ixtiyoriy)",
      "cfg.note": "Ariza nusxalanadi — uni chatga qo'ying. Bu hali to'lov emas: avval tafsilotlarni muhokama qilamiz.",

      "gifts.title": "Bu doim ichida",
      "gifts.lead": "Opsiya ham, qo'shimcha to'lov ham emas — biz har bir buyurtma bilan shunday ishlaymiz.",
      "gifts.g1h": ".uz domeni — sovg'a",
      "gifts.g1p": "Sayt yoki do'kon buyurtmasida domenni bir yilga o'z hisobimizdan ro'yxatdan o'tkazamiz.",
      "gifts.g2h": "Bir oy qo'llab-quvvatlash — 0 so'm",
      "gifts.g2p": "Ishga tushgandan keyingi birinchi oy bepul tuzatamiz va maslahat beramiz.",
      "gifts.g3h": "Ikki bosqich tuzatish ichida",
      "gifts.g3p": "Demo ko'rsatamiz — nimani tuzatishni aytasiz. Ikki marta, qo'shimcha to'lovsiz.",
      "gifts.g4h": "1 soatgacha javob",
      "gifts.g4p": "Ish vaqtida Telegramda ko'pi bilan bir soatda javob beramiz.",

      "work.title": "Qilingan va ishlayapti",
      "work.lead": "Maketlar emas, tirik loyihalar — oching va o'zingiz sinab ko'ring.",
      "work.w1p": "Yong'oq sotuvchisi uchun sayt va buyurtmalar paneli: katalog, arizalar qabuli, admin.",
      "work.w1tag": "Sayt + admin-panel",
      "work.w2h": "To'y taklifnomasi",
      "work.w2p": "Ikki tilli taklifnoma-sayt: mehmonlarga shaxsiy havolalar, javoblar Telegramda.",
      "work.w2tag": "Taklifnoma UZ/RU",
      "work.w3p": "Onlayn do'kon: katalog, savat, buyurtmalar va qoldiq hisobi.",
      "work.w3tag": "Onlayn do'kon",
      "work.w4h": "Telegram-agent",
      "work.w4p": "Operator ishtirokisiz mijozlar arizalarini qabul qilib taqsimlaydigan bot.",
      "work.w4tag": "Telegram-bot",

      "proc.title": "Qanday ishlaymiz",
      "proc.lead": "Arizadan ishga tushirishgacha to'rt qadam — tartib doim bir xil.",
      "proc.s1h": "Ariza",
      "proc.s1p": "Buyurtmani shu sahifadan yuborasiz. Ish vaqtida bir soat ichida Telegramda javob beramiz.",
      "proc.s2h": "Brif va oldindan to'lov",
      "proc.s2p": "Tafsilotlarni aniqlaymiz, narx va muddatni yozma qayd etamiz. 50% oldindan to'lov — va ish boshlandi.",
      "proc.s3h": "Demo va tuzatishlar",
      "proc.s3p": "Ishlaydigan versiyani havola orqali ko'rsatamiz. Ikki bosqich tuzatish narxga kiradi.",
      "proc.s4h": "Ishga tushirish va topshirish",
      "proc.s4p": "Domenni ulaymiz, kirish ma'lumotlari va yo'riqnomani topshiramiz. Bir oy qo'llab-quvvatlash — bepul.",

      "foot.sub": "Sayt, bot va do'kon — aniq narxda, o'z vaqtida · Samarqand",
      "foot.copy": "© 2026 Silkway. Barcha huquqlar himoyalangan.",
      "foot.col_services": "Xizmatlar",
      "foot.col_nav": "Navigatsiya",
      "foot.col_contact": "Aloqa",
      "foot.link_gifts": "Doim nima kiradi",
      "foot.link_order": "Ariza qoldirish",
      "foot.aria_services": "Xizmatlar",
      "foot.aria_nav": "Navigatsiya",
      "foot.aria_contact": "Aloqa",
    },
    ru: {
      "meta.title": "Silkway Web Company — сайты, боты и магазины под ключ",
      "meta.desc": "Silkway Web Company: лендинги, сайты, Telegram-боты, свадебные приглашения и интернет-магазины под ключ. Фиксированная цена и срок. Самарканд, Узбекистан.",
      "logo.aria": "Silkway Web Company — на главную",
      "nav.aria": "Основная навигация",
      "lang.aria": "Язык сайта",
      "nav.services": "Услуги",
      "nav.order": "Собрать заказ",
      "nav.work": "Работы",
      "nav.process": "Как работаем",
      "intro.hint": "Нажмите, чтобы пропустить",

      "hero.eyebrow": "Студия цифровых услуг · Самарканд",
      "hero.title": "Сайты, боты и&nbsp;магазины — <em>под ключ</em>",
      "hero.sub": "Цена и срок известны заранее — и не меняются после согласования. Соберите заказ на этой странице — заявка придёт нам в Telegram, работа начнётся сегодня.",
      "hero.cta1": "Собрать заказ",
      "hero.cta2": "Смотреть услуги",
      "hero.fact1a": "от 3 дней",
      "hero.fact1b": "запуск проекта",
      "hero.fact2a": "9 услуг",
      "hero.fact2b": "всё под ключ",
      "hero.fact3a": "1 чат",
      "hero.fact3b": "весь процесс в Telegram",

      "sv.title": "Девять услуг",
      "sv.lead": "Каждая услуга — готовый пакет: известно, что входит, сколько стоит и когда будет готово.",
      "sv.optim.h3": "Оптимизация бизнес-процессов",
      "sv.optim.desc": "Разбираем процессы, убираем ручную рутину и узкие места.",
      "sv.optim.li1": "Аудит текущих процессов",
      "sv.optim.li2": "Карта улучшений",
      "sv.optim.li3": "Внедрение и обучение",
      "sv.optim.price": "от 6 000 000 сум",
      "sv.optim.days": "14 дней",
      "sv.hr.h3": "HR-интеграция",
      "sv.hr.desc": "Автоматизация найма и адаптации: от заявок кандидатов до онбординга.",
      "sv.hr.li1": "Приём заявок кандидатов",
      "sv.hr.li2": "Этапы отбора",
      "sv.hr.li3": "Онбординг сотрудников",
      "sv.hr.price": "от 7 000 000 сум",
      "sv.hr.days": "16 дней",
      "sv.crm.h3": "CRM-интеграция",
      "sv.crm.desc": "Настраиваем CRM и связываем сайт, бота и склад в одну систему.",
      "sv.crm.li1": "Настройка CRM",
      "sv.crm.li2": "Связь сайт + бот + склад",
      "sv.crm.li3": "Отчёты и воронки",
      "sv.crm.price": "от 9 000 000 сум",
      "sv.crm.days": "18 дней",
      "sv.ai.h3": "ИИ-агенты",
      "sv.ai.desc": "Голосовые и чат-боты на базе ИИ принимают звонки и заявки без оператора.",
      "sv.ai.li1": "Голосовой ИИ-агент",
      "sv.ai.li2": "Чат-бот с ИИ",
      "sv.ai.li3": "Приём звонков 24/7",
      "sv.ai.price": "от 12 000 000 сум",
      "sv.ai.days": "21 день",
      "order.btn": "Заказать",

      "sv.landing.h3": "Лендинг",
      "sv.landing.desc": "Одностраничный сайт, который продаёт одну услугу или товар. Быстрый, с анимацией и формой заявки.",
      "sv.landing.li1": "Дизайн под ваш бренд",
      "sv.landing.li2": "Адаптив под телефон",
      "sv.landing.li3": "Форма заявки в Telegram",
      "sv.landing.price": "от 2 500 000 сум",
      "sv.landing.days": "5 дней",

      "sv.site.h3": "Сайт компании",
      "sv.site.desc": "Многостраничный сайт: о компании, услуги, контакты. С админ-панелью — сами меняете цены и тексты.",
      "sv.site.li1": "До 7 страниц",
      "sv.site.li2": "Карта и контакты",
      "sv.site.li3": "Быстрая загрузка, SEO-база",
      "sv.site.price": "от 4 500 000 сум",
      "sv.site.days": "10 дней",

      "sv.bot.h3": "Telegram-бот",
      "sv.bot.desc": "Бот принимает заказы, отвечает клиентам и присылает вам заявки. Эта страница отправляет заказы именно так.",
      "sv.bot.li1": "Меню и сценарии диалога",
      "sv.bot.li2": "Заявки вам в чат",
      "sv.bot.li3": "Кнопки, каталог, корзина",
      "sv.bot.price": "от 2 500 000 сум",
      "sv.bot.days": "7 дней",

      "sv.wedding.h3": "Свадебное приглашение",
      "sv.wedding.desc": "Сайт-приглашение на двух языках: у каждого гостя личная ссылка с его именем, ответ приходит вам в Telegram.",
      "sv.wedding.li1": "RU + UZ версии",
      "sv.wedding.li2": "Личная ссылка каждому гостю",
      "sv.wedding.li3": "Ответы «приду / не приду» в Telegram",
      "sv.wedding.price": "от 800 000 сум",
      "sv.wedding.days": "3 дня",
      "sv.wedding.market": "Личные ссылки гостям — такого нет у типовых шаблонов",

      "sv.shop.h3": "Интернет-магазин",
      "sv.shop.desc": "Каталог, корзина, приём оплаты и уведомления о заказах. Торгуйте онлайн без аренды и посредников.",
      "sv.shop.li1": "Каталог и корзина",
      "sv.shop.li2": "Оплата Click / Payme",
      "sv.shop.li3": "Заказы вам в Telegram",
      "sv.shop.price": "от 7 000 000 сум",
      "sv.shop.days": "14 дней",

      "cfg.title": "Соберите заказ",
      "cfg.lead": "Выберите услугу и опции — цена и срок считаются сразу. Кнопка отправит готовую заявку в Telegram.",
      "cfg.legend_service": "Услуга",
      "cfg.legend_options": "Опции",
      "cfg.legend_urgency": "Срок",
      "cfg.urgent": "Срочно (+30% к цене) — срок короче минимум вдвое: 10 дней → 3–5 дней, 2 дня → 12 часов",
      "cfg.days_prefix": "Готово за",
      "cfg.currency": "сум",
      "cfg.send": "Отправить заявку в Telegram",
      "cfg.contact_ph": "Телефон или @username (необязательно)",
      "cfg.note": "Заявка скопируется — просто вставьте её в чат. Это ещё не оплата: сначала обсудим детали.",

      "gifts.title": "Это входит всегда",
      "gifts.lead": "Не опции и не доплаты — так мы работаем с каждым заказом.",
      "gifts.g1h": "Домен .uz — в подарок",
      "gifts.g1p": "При заказе сайта или магазина регистрируем домен на год за наш счёт.",
      "gifts.g2h": "Месяц поддержки — 0 сум",
      "gifts.g2p": "Первый месяц после запуска правим и консультируем бесплатно.",
      "gifts.g3h": "Два круга правок включены",
      "gifts.g3p": "Показываем демо — вы говорите, что поправить. Дважды, без доплат.",
      "gifts.g4h": "Ответ до 1 часа",
      "gifts.g4p": "В рабочее время отвечаем в Telegram максимум за час.",

      "work.title": "Сделано и работает",
      "work.lead": "Не макеты, а живые проекты — откройте и попробуйте сами.",
      "work.w1p": "Сайт и панель заказов для продавца орехов: каталог, приём заявок, админка.",
      "work.w1tag": "Сайт + админ-панель",
      "work.w2h": "Свадебное приглашение",
      "work.w2p": "Двуязычный сайт-приглашение: личные ссылки гостям, ответы в Telegram.",
      "work.w2tag": "Приглашение RU/UZ",
      "work.w3p": "Интернет-магазин: каталог, корзина, заказы и учёт остатков.",
      "work.w3tag": "Интернет-магазин",
      "work.w4h": "Telegram-агент",
      "work.w4p": "Бот, который принимает и распределяет заявки клиентов без участия оператора.",
      "work.w4tag": "Telegram-бот",

      "proc.title": "Как работаем",
      "proc.lead": "Четыре шага от заявки до запуска — порядок всегда одинаковый.",
      "proc.s1h": "Заявка",
      "proc.s1p": "Вы отправляете заказ с этой страницы. Отвечаем в Telegram в течение часа в рабочее время.",
      "proc.s2h": "Бриф и предоплата",
      "proc.s2p": "Уточняем детали, фиксируем цену и срок письменно. Предоплата 50% — и работа началась.",
      "proc.s3h": "Демо и правки",
      "proc.s3p": "Показываем рабочую версию по ссылке. Два круга правок входят в цену.",
      "proc.s4h": "Запуск и передача",
      "proc.s4p": "Подключаем домен, передаём доступы и инструкцию. Месяц поддержки — бесплатно.",

      "foot.sub": "Сайты, боты и магазины под ключ · Самарканд",
      "foot.copy": "© 2026 Silkway. Все права защищены.",
      "foot.col_services": "Услуги",
      "foot.col_nav": "Навигация",
      "foot.col_contact": "Связь",
      "foot.link_gifts": "Что входит всегда",
      "foot.link_order": "Оставить заявку",
      "foot.aria_services": "Услуги",
      "foot.aria_nav": "Навигация",
      "foot.aria_contact": "Связь",
    },
  };

  function tr(l, k) {
    return (T[l] && T[l][k] != null) ? T[l][k] : null;
  }

  function apply(l) {
    if (l !== "uz" && l !== "ru") l = DEFAULT;
    lang = l;
    window.SILKWAY_LANG = l;
    document.documentElement.lang = l;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = tr(l, el.getAttribute("data-i18n"));
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const v = tr(l, el.getAttribute("data-i18n-html"));
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
        const [a, k] = pair.split(":");
        const v = tr(l, k);
        if (v != null) el.setAttribute(a, v);
      });
    });

    document.querySelectorAll(".lang-btn").forEach((b) => {
      const on = b.getAttribute("data-lang") === l;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    try { localStorage.setItem(KEY, l); } catch (e) {}
    window.dispatchEvent(new CustomEvent("silkway:lang", { detail: l }));
  }

  window.SILKWAY_LANG = lang;
  window.setSilkwayLang = apply;

  function init() {
    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.addEventListener("click", () => apply(b.getAttribute("data-lang")));
    });
    apply(lang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
