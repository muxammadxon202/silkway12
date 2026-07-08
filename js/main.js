const SERVICES = {
  landing: {
    name: { uz: "Lending", ru: "Лендинг" },
    base: 2500000,
    days: 5,
    options: [
      { id: "anim", name: { uz: "Animatsiya va mikro-interaktivlik", ru: "Анимации и микро-взаимодействия" }, price: 300000 },
      { id: "lang2", name: { uz: "Ikkinchi til versiyasi (UZ yoki RU)", ru: "Вторая языковая версия (UZ или RU)" }, price: 400000 },
      { id: "pay", name: { uz: "Click / Payme to'lovini qabul qilish", ru: "Приём оплаты Click / Payme" }, price: 500000 },
      { id: "seo", name: { uz: "SEO-asos va analitika ulash", ru: "SEO-база и подключение аналитики" }, price: 250000 },
      { id: "host", name: { uz: "Hosting va .uz domeni bir yilga", ru: "Хостинг и домен .uz на год" }, price: 700000 },
    ],
  },
  site: {
    name: { uz: "Kompaniya sayti", ru: "Сайт компании" },
    base: 4500000,
    days: 10,
    options: [
      { id: "admin", name: { uz: "Admin-panel — kontentni o'zingiz o'zgartirasiz", ru: "Админ-панель — сами меняете контент" }, price: 1500000 },
      { id: "blog", name: { uz: "Yangiliklar yoki blog bo'limi", ru: "Раздел новостей или блога" }, price: 500000 },
      { id: "lang2", name: { uz: "Ikkinchi til versiyasi (UZ yoki RU)", ru: "Вторая языковая версия (UZ или RU)" }, price: 600000 },
      { id: "tg", name: { uz: "Saytdan arizalar Telegramga", ru: "Заявки с сайта в Telegram" }, price: 400000 },
      { id: "crm", name: { uz: "CRM bilan integratsiya", ru: "Интеграция с CRM" }, price: 2500000 },
      { id: "host", name: { uz: "Hosting va .uz domeni bir yilga", ru: "Хостинг и домен .uz на год" }, price: 700000 },
    ],
  },
  bot: {
    name: { uz: "Telegram-bot", ru: "Telegram-бот" },
    base: 2500000,
    days: 7,
    options: [
      { id: "pay", name: { uz: "Botda to'lovlarni qabul qilish", ru: "Приём платежей в боте" }, price: 700000 },
      { id: "admin", name: { uz: "Botni boshqarish uchun admin-panel", ru: "Админ-панель для управления ботом" }, price: 800000 },
      { id: "mail", name: { uz: "Mijozlar bazasi bo'yicha tarqatmalar", ru: "Рассылки по базе клиентов" }, price: 400000 },
      { id: "site", name: { uz: "Saytingiz bilan integratsiya", ru: "Интеграция с вашим сайтом" }, price: 500000 },
      { id: "host", name: { uz: "Server va bot ishi bir yilga", ru: "Сервер и работа бота на год" }, price: 600000 },
    ],
  },
  wedding: {
    name: { uz: "To'y taklifnomasi", ru: "Свадебное приглашение" },
    base: 800000,
    days: 3,
    options: [
      { id: "guests", name: { uz: "Har bir mehmon uchun shaxsiy havolalar", ru: "Личные ссылки для каждого гостя" }, price: 200000 },
      { id: "rsvp", name: { uz: "Mehmonlar javoblari sizga Telegramga", ru: "Ответы гостей вам в Telegram" }, price: 150000 },
      { id: "music", name: { uz: "Musiqa va ochilish animatsiyasi", ru: "Музыка и анимация открытия" }, price: 150000 },
      { id: "map", name: { uz: "Xarita va zalgacha yo'nalish", ru: "Карта и маршрут до зала" }, price: 100000 },
    ],
  },
  shop: {
    name: { uz: "Onlayn do'kon", ru: "Интернет-магазин" },
    base: 7000000,
    days: 14,
    options: [
      { id: "pay", name: { uz: "Click / Payme to'lovi", ru: "Оплата Click / Payme" }, price: 800000 },
      { id: "stock", name: { uz: "Ombor va qoldiq hisobi", ru: "Учёт склада и остатков" }, price: 1000000 },
      { id: "bot", name: { uz: "Do'kon Telegram-boti", ru: "Telegram-бот магазина" }, price: 1200000 },
      { id: "delivery", name: { uz: "Yetkazib berish va buyurtma statuslari", ru: "Доставка и статусы заказов" }, price: 600000 },
      { id: "crm", name: { uz: "CRM va ombor bilan integratsiya", ru: "Интеграция с CRM и складом" }, price: 2500000 },
      { id: "host", name: { uz: "Hosting va .uz domeni bir yilga", ru: "Хостинг и домен .uz на год" }, price: 700000 },
    ],
  },
  optim: {
    name: { uz: "Biznes-jarayon optimizatsiyasi", ru: "Оптимизация бизнес-процессов" },
    base: 6000000,
    days: 14,
    options: [
      { id: "audit", name: { uz: "Bo'limlarning chuqur auditi", ru: "Глубокий аудит отделов" }, price: 1500000 },
      { id: "docs", name: { uz: "Reglament va yo'riqnomalar", ru: "Регламенты и инструкции" }, price: 800000 },
      { id: "auto", name: { uz: "1 jarayonni avtomatlashtirish", ru: "Автоматизация одного процесса" }, price: 1200000 },
    ],
  },
  hr: {
    name: { uz: "HR-integratsiya", ru: "HR-интеграция" },
    base: 7000000,
    days: 16,
    options: [
      { id: "ats", name: { uz: "Nomzodlar trekeri (ATS)", ru: "Трекер кандидатов (ATS)" }, price: 1500000 },
      { id: "bot", name: { uz: "Telegramda HR-bot", ru: "HR-бот в Telegram" }, price: 900000 },
      { id: "docs", name: { uz: "Hujjatlarni avto-yaratish", ru: "Автогенерация документов" }, price: 700000 },
    ],
  },
  crm: {
    name: { uz: "CRM-integratsiya", ru: "CRM-интеграция" },
    base: 9000000,
    days: 18,
    options: [
      { id: "migrate", name: { uz: "Ma'lumotlarni ko'chirish", ru: "Перенос данных" }, price: 1200000 },
      { id: "tel", name: { uz: "Telefoniya va qo'ng'iroqlar", ru: "Телефония и звонки" }, price: 1500000 },
      { id: "train", name: { uz: "Jamoani o'qitish", ru: "Обучение команды" }, price: 800000 },
    ],
  },
  ai: {
    name: { uz: "AI-agentlar", ru: "ИИ-агенты" },
    base: 12000000,
    days: 21,
    options: [
      { id: "voice", name: { uz: "Ovozli bot", ru: "Голосовой бот" }, price: 3000000 },
      { id: "crm", name: { uz: "CRM bilan bog'lash", ru: "Связь с CRM" }, price: 1500000 },
      { id: "analytics", name: { uz: "Suhbatlar tahlili", ru: "Аналитика диалогов" }, price: 1000000 },
    ],
  },
};

// Адрес бэкенда бота. Пусто = автономный режим (копия в буфер + Telegram).
// Задеплоено на VPS 45.130.148.155, HTTPS через Caddy.
const ORDER_API = "https://api.silkway12.uz";

const state = { service: "landing", options: new Set(), urgent: false };
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = window.matchMedia("(pointer: coarse)").matches;

const L = () => (window.SILKWAY_LANG === "ru" ? "ru" : "uz");
const UI = {
  uz: {
    send: "Arizani Telegramga yuborish",
    copied: "Ariza nusxalandi — chatga qo'ying",
    sending: "Yuborilmoqda…",
    sent: "Ariza yuborildi ✓ Tez orada bog'lanamiz",
    sendErr: "Yuborilmadi — chatga qo'lda yuboring",
    orderTitle: "Silkway saytidan ariza",
    fService: "Xizmat", fOptions: "Opsiyalar", fUrgentYes: "Shoshilinch: ha", fContact: "Aloqa",
    fCalc: "Hisob", fSum: "so'm", fTerm: "muddat",
    basePkg: (n) => "«" + n + "» asosiy paketi",
    urgentItem: "Shoshilinch bajarish",
    urgent12: "12 soat", urgent24: "1–2 kun",
  },
  ru: {
    send: "Отправить заявку в Telegram",
    copied: "Заявка скопирована — вставьте в чат",
    sending: "Отправляем…",
    sent: "Заявка отправлена ✓ Скоро свяжемся",
    sendErr: "Не отправилось — вставьте в чат вручную",
    orderTitle: "Заявка с сайта Silkway",
    fService: "Услуга", fOptions: "Опции", fUrgentYes: "Срочно: да", fContact: "Связь",
    fCalc: "Расчёт", fSum: "сум", fTerm: "срок",
    basePkg: (n) => "Базовый пакет «" + n + "»",
    urgentItem: "Срочное выполнение",
    urgent12: "12 часов", urgent24: "1–2 дня",
  },
};
const ui = () => UI[L()];

const fmt = (n) => n.toLocaleString("ru-RU").replace(/,/g, " ");

const el = {
  chips: document.getElementById("cfg-services"),
  opts: document.getElementById("cfg-options"),
  urgent: document.getElementById("cfg-urgent"),
  name: document.getElementById("cfg-name"),
  price: document.getElementById("cfg-price"),
  days: document.getElementById("cfg-days"),
  summary: document.getElementById("cfg-summary"),
  send: document.getElementById("cfg-send"),
  contact: document.getElementById("cfg-contact"),
  email: document.getElementById("cfg-email"),
  website: document.getElementById("cfg-hp"),
  error: document.getElementById("cfg-error"),
};

function renderChips() {
  el.chips.innerHTML = "";
  for (const [key, svc] of Object.entries(SERVICES)) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "cfg-chip" + (key === state.service ? " is-active" : "");
    b.textContent = svc.name[L()];
    b.setAttribute("aria-pressed", key === state.service);
    b.addEventListener("click", () => {
      state.service = key;
      state.options.clear();
      renderChips();
      renderOptions();
      renderTotal();
    });
    el.chips.appendChild(b);
  }
}

function renderOptions() {
  el.opts.innerHTML = "";
  for (const opt of SERVICES[state.service].options) {
    const label = document.createElement("label");
    label.className = "cfg-opt" + (state.options.has(opt.id) ? " is-on" : "");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = state.options.has(opt.id);
    input.addEventListener("change", () => {
      input.checked ? state.options.add(opt.id) : state.options.delete(opt.id);
      label.classList.toggle("is-on", input.checked);
      renderTotal();
    });
    const name = document.createElement("span");
    name.className = "cfg-opt-name";
    name.textContent = opt.name[L()];
    const price = document.createElement("span");
    price.className = "cfg-opt-price";
    price.textContent = "+" + fmt(opt.price);
    label.append(input, name, price);
    el.opts.appendChild(label);
  }
}

function dayWord(n) {
  if (L() === "uz") return "kun";
  const m10 = n % 10;
  const m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return "день";
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return "дня";
  return "дней";
}

function urgentText(days) {
  if (days <= 2) return ui().urgent12;
  if (days <= 4) return ui().urgent24;
  const lo = Math.ceil(days * 0.3);
  const hi = Math.ceil(days * 0.5);
  return lo + "–" + hi + " " + dayWord(hi);
}

function calc() {
  const svc = SERVICES[state.service];
  let price = svc.base;
  const chosen = [];
  for (const opt of svc.options) {
    if (state.options.has(opt.id)) {
      price += opt.price;
      chosen.push(opt.name[L()]);
    }
  }
  const days = svc.days + Math.ceil(chosen.length * 0.8);
  let daysText;
  if (state.urgent) {
    price = Math.round(price * 1.3 / 10000) * 10000;
    daysText = urgentText(days);
  } else {
    daysText = days + " " + dayWord(days);
  }
  return { svc, price, daysText, chosen };
}

let priceShown = 0;
function animatePrice(target) {
  if (reduceMotion) {
    el.price.textContent = fmt(target);
    priceShown = target;
    return;
  }
  const from = priceShown;
  const start = performance.now();
  const dur = 380;
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.price.textContent = fmt(Math.round(from + (target - from) * eased));
    if (p < 1) requestAnimationFrame(tick);
    else priceShown = target;
  }
  requestAnimationFrame(tick);
}

function renderTotal() {
  const { svc, price, daysText, chosen } = calc();
  el.name.textContent = svc.name[L()];
  animatePrice(price);
  el.days.textContent = daysText;
  el.summary.innerHTML = "";
  const items = [ui().basePkg(svc.name[L()]), ...chosen];
  if (state.urgent) items.push(ui().urgentItem);
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    el.summary.appendChild(li);
  }
}

function buildOrderText() {
  const { svc, price, daysText, chosen } = calc();
  const u = ui();
  const contact = el.contact ? el.contact.value.trim() : "";
  const email = el.email ? el.email.value.trim() : "";
  return [
    u.orderTitle,
    u.fService + ": " + svc.name[L()],
    ...(chosen.length ? [u.fOptions + ": " + chosen.join(", ")] : []),
    ...(state.urgent ? [u.fUrgentYes] : []),
    u.fCalc + ": " + fmt(price) + " " + u.fSum + ", " + u.fTerm + ": " + daysText,
    ...(contact ? [u.fContact + ": " + contact] : []),
    ...(email ? ["Email: " + email] : []),
  ].join("\n");
}

function validateContact() {
  const ok = !!(el.contact && el.contact.value.trim());
  if (el.contact) el.contact.classList.toggle("is-invalid", !ok);
  if (el.error) el.error.hidden = ok;
  if (!ok && el.contact) el.contact.focus();
  return ok;
}

el.urgent.addEventListener("change", () => {
  state.urgent = el.urgent.checked;
  renderTotal();
});

function fallbackCopy() {
  if (navigator.clipboard) navigator.clipboard.writeText(buildOrderText()).catch(() => {});
  el.send.textContent = ui().copied;
  setTimeout(() => { el.send.textContent = ui().send; }, 4000);
}

async function sendToApi() {
  el.send.textContent = ui().sending;
  try {
    const res = await fetch(ORDER_API.replace(/\/$/, "") + "/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service: state.service,
        options: [...state.options],
        urgent: state.urgent,
        contact: el.contact ? el.contact.value.trim() : "",
        email: el.email ? el.email.value.trim() : "",
        website: el.website ? el.website.value : "", // honeypot — должно быть пустым
      }),
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    await res.json();
    el.send.textContent = ui().sent;
    if (el.contact) el.contact.value = "";
    if (el.email) el.email.value = "";
    setTimeout(() => { el.send.textContent = ui().send; }, 5000);
  } catch (e) {
    // бэкенд недоступен — не теряем заявку: копируем и открываем Telegram
    if (navigator.clipboard) navigator.clipboard.writeText(buildOrderText()).catch(() => {});
    el.send.textContent = ui().sendErr;
    window.open("https://t.me/mmike202", "_blank", "noopener");
    setTimeout(() => { el.send.textContent = ui().send; }, 5000);
  }
}

el.send.addEventListener("click", (e) => {
  if (!validateContact()) {
    e.preventDefault();
    return;
  }
  if (ORDER_API) {
    e.preventDefault();
    sendToApi();
  } else {
    // автономный режим: пусть ссылка откроет Telegram, а мы скопируем текст
    fallbackCopy();
  }
});

el.contact.addEventListener("input", () => {
  if (el.contact.value.trim()) {
    el.contact.classList.remove("is-invalid");
    if (el.error) el.error.hidden = true;
  }
});

document.querySelectorAll("[data-order]").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.service = btn.dataset.order;
    state.options.clear();
    renderChips();
    renderOptions();
    renderTotal();
    document.getElementById("configurator").scrollIntoView({ behavior: "smooth" });
  });
});

renderChips();
renderOptions();
renderTotal();

// перерисовать конфигуратор при смене языка
window.addEventListener("silkway:lang", () => {
  renderChips();
  renderOptions();
  renderTotal();
});

/* ---------- hero title: word-by-word rise ---------- */

if (!reduceMotion) {
  const splitTitle = () => {
    const title = document.querySelector(".hero-title");
    if (!title) return;
    let wordIndex = 0;
    (function splitWords(node) {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((part) => {
            if (/^\s+$/.test(part) || part === "") {
              frag.appendChild(document.createTextNode(part));
            } else {
              const span = document.createElement("span");
              span.className = "w";
              span.style.animationDelay = 0.15 + wordIndex * 0.07 + "s";
              span.textContent = part;
              frag.appendChild(span);
              wordIndex++;
            }
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          splitWords(child);
        }
      });
    })(title);
  };
  splitTitle();
  // i18n перезаписывает заголовок при смене языка — пересобираем слова заново
  window.addEventListener("silkway:lang", splitTitle);
}

/* ---------- tech strip: seamless loop ---------- */

const techTrack = document.getElementById("tech-track");
if (techTrack) techTrack.innerHTML += techTrack.innerHTML;

/* ---------- hero: interactive ballpit (Three.js, port of 21st.dev component) ---------- */

(function initHeroBallpit() {
  if (reduceMotion || !window.THREE) return;
  const canvas = document.getElementById("hero-ballpit");
  const hero = document.querySelector(".hero");
  if (!canvas || !hero) return;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
  } catch (e) { return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(0, 0, 20);

  const COUNT = window.innerWidth < 900 ? 60 : 120;
  const COLORS = [0x1c3a70, 0x16294f, 0x2c4d8f, 0xc9a227, 0xd9b545, 0xf7f4ee];
  const WEIGHTS = [0.26, 0.22, 0.2, 0.14, 0.1, 0.08];

  function pickColor() {
    let r = Math.random();
    for (let i = 0; i < WEIGHTS.length; i++) {
      r -= WEIGHTS[i];
      if (r <= 0) return COLORS[i];
    }
    return COLORS[0];
  }

  const cfg = {
    gravity: 0.35,
    friction: 0.995,
    wallBounce: 0.3,
    maxVelocity: 0.12,
    minSize: 0.35,
    maxSize: 0.95,
    size0: 1.15,
  };

  let maxX = 10, maxY = 6, maxZ = 5;

  // движение телефона управляет шарами: наклон -> катятся вбок, тряска -> дрожат
  const grav = { x: 0 };
  let shakeEnergy = 0;              // затухающая «энергия тряски»

  function handleMotion(e) {
    // наклон: компонента гравитации по X. Работает и без deviceorientation.
    const g = e.accelerationIncludingGravity;
    if (g && g.x != null) {
      const target = Math.max(-1.5, Math.min(1.5, -g.x / 4));
      grav.x += (target - grav.x) * 0.12;
    }
    // тряска: «чистое» ускорение (без гравитации) копит энергию
    const a = e.acceleration;
    if (a && a.x != null) {
      const mag = Math.abs(a.x) + Math.abs(a.y || 0) + Math.abs(a.z || 0);
      if (mag > 6) shakeEnergy = Math.min(1.2, shakeEnergy + mag / 25);
    }
  }
  function enableTilt() {
    const DME = window.DeviceMotionEvent;
    if (!DME) return;
    if (typeof DME.requestPermission === "function") {
      // iOS 13+: разрешение на датчики можно запросить только по жесту пользователя
      DME.requestPermission()
        .then((s) => { if (s === "granted") window.addEventListener("devicemotion", handleMotion); })
        .catch(() => {});
    } else {
      window.addEventListener("devicemotion", handleMotion);
    }
  }
  if (isTouch) {
    // первый жест (тап по интро/экрану) — запрашиваем доступ к датчикам
    window.addEventListener("pointerdown", enableTilt, { once: true });
    window.addEventListener("touchstart", enableTilt, { once: true });
  }

  const posData = new Float32Array(COUNT * 3);
  const velData = new Float32Array(COUNT * 3);
  const sizeData = new Float32Array(COUNT);

  sizeData[0] = cfg.size0;
  for (let i = 1; i < COUNT; i++) {
    const b = i * 3;
    posData[b] = THREE.MathUtils.randFloatSpread(16);
    posData[b + 1] = THREE.MathUtils.randFloatSpread(10);
    posData[b + 2] = THREE.MathUtils.randFloatSpread(8);
    sizeData[i] = THREE.MathUtils.randFloat(cfg.minSize, cfg.maxSize);
  }

  const geo = new THREE.SphereGeometry(1, 24, 24);
  const mat = new THREE.MeshPhysicalMaterial({
    metalness: 0.15,
    roughness: 0.28,
    clearcoat: 1,
    clearcoatRoughness: 0.15,
  });
  const mesh = new THREE.InstancedMesh(geo, mat, COUNT);
  for (let i = 0; i < COUNT; i++) mesh.setColorAt(i, new THREE.Color(pickColor()));
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  scene.add(mesh);

  scene.add(new THREE.AmbientLight(0xbfcbe6, 0.75));
  const key = new THREE.DirectionalLight(0xfff2d0, 1.4);
  key.position.set(4, 6, 8);
  scene.add(key);
  const glow = new THREE.PointLight(0xd9b545, 2.2, 40);
  scene.add(glow);

  const dummy = new THREE.Object3D();
  const raycaster = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const pointerNdc = new THREE.Vector2(0, 2);
  const target = new THREE.Vector3(0, 0, 0);
  const vTmp = new THREE.Vector3();
  const vOther = new THREE.Vector3();
  const vDiff = new THREE.Vector3();

  // курсор отталкивает шарики (порт REPULSION из combined-hero)
  let pointerActive = false;
  const REPEL_RADIUS = 5.0;
  const REPEL_STRENGTH = 0.11;

  function resize() {
    const w = hero.clientWidth;
    const h = hero.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const fovRad = (camera.fov * Math.PI) / 180;
    const wH = 2 * Math.tan(fovRad / 2) * camera.position.z;
    const wW = wH * camera.aspect;
    maxX = wW / 2;
    maxY = wH / 2;
    maxZ = Math.min(5, wW / 4);
  }
  resize();
  window.addEventListener("resize", resize);

  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    pointerNdc.set(
      ((e.clientX - r.left) / r.width) * 2 - 1,
      -((e.clientY - r.top) / r.height) * 2 + 1
    );
    pointerActive = true;
  });
  const deactivate = () => { pointerActive = false; };
  hero.addEventListener("pointerleave", deactivate);
  hero.addEventListener("pointercancel", deactivate);
  hero.addEventListener("pointerup", deactivate);

  function physics(delta) {
    raycaster.setFromCamera(pointerNdc, camera);
    raycaster.ray.intersectPlane(plane, target);

    for (let i = 0; i < COUNT; i++) {
      const b = i * 3;
      vTmp.set(posData[b], posData[b + 1], posData[b + 2]);
      const vel = new THREE.Vector3(velData[b], velData[b + 1], velData[b + 2]);
      vel.y -= delta * cfg.gravity * sizeData[i];
      vel.x += delta * cfg.gravity * sizeData[i] * grav.x * 2.2;   // наклон телефона -> катятся вбок
      if (shakeEnergy > 0.02) {
        const k = shakeEnergy * cfg.maxVelocity * 5;
        vel.x += (Math.random() - 0.5) * k;
        vel.y += (Math.random() - 0.5) * k;
      }
      if (pointerActive) {
        const rdx = vTmp.x - target.x;
        const rdy = vTmp.y - target.y;
        const rd = Math.hypot(rdx, rdy);
        if (rd < REPEL_RADIUS && rd > 0.001) {
          const f = (REPEL_RADIUS - rd) / REPEL_RADIUS;
          vel.x += (rdx / rd) * f * REPEL_STRENGTH;
          vel.y += (rdy / rd) * f * REPEL_STRENGTH;
        }
      }
      vel.multiplyScalar(cfg.friction);
      vel.clampLength(0, cfg.maxVelocity * (1 + shakeEnergy * 5));
      vTmp.add(vel);

      for (let j = 0; j < COUNT; j++) {
        if (j === i) continue;
        const ob = j * 3;
        vOther.set(posData[ob], posData[ob + 1], posData[ob + 2]);
        vDiff.subVectors(vOther, vTmp);
        const dist = vDiff.length();
        const sum = sizeData[i] + sizeData[j];
        if (dist < sum && dist > 0.0001) {
          const overlap = (sum - dist) * 0.5;
          vDiff.normalize();
          vTmp.addScaledVector(vDiff, -overlap);
          vOther.addScaledVector(vDiff, overlap);
          posData[ob] = vOther.x; posData[ob + 1] = vOther.y; posData[ob + 2] = vOther.z;
        }
      }

      if (Math.abs(vTmp.x) + sizeData[i] > maxX) {
        vTmp.x = Math.sign(vTmp.x) * (maxX - sizeData[i]);
        vel.x *= -cfg.wallBounce;
      }
      if (vTmp.y - sizeData[i] < -maxY) {
        vTmp.y = -maxY + sizeData[i];
        vel.y *= -cfg.wallBounce;
      }
      if (Math.abs(vTmp.z) + sizeData[i] > maxZ) {
        vTmp.z = Math.sign(vTmp.z) * (maxZ - sizeData[i]);
        vel.z *= -cfg.wallBounce;
      }

      posData[b] = vTmp.x; posData[b + 1] = vTmp.y; posData[b + 2] = vTmp.z;
      velData[b] = vel.x; velData[b + 1] = vel.y; velData[b + 2] = vel.z;
    }
    shakeEnergy *= 0.9;   // энергия тряски затухает
  }

  const clock = new THREE.Clock();
  let running = false;
  let rafId = null;

  function animate() {
    rafId = requestAnimationFrame(animate);
    const delta = Math.min(clock.getDelta(), 0.05);
    physics(delta);
    for (let i = 0; i < COUNT; i++) {
      dummy.position.fromArray(posData, i * 3);
      dummy.scale.setScalar(sizeData[i]);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (pointerActive) glow.position.copy(target);
    else glow.position.fromArray(posData, 0);
    renderer.render(scene, camera);
  }

  new IntersectionObserver((entries) => {
    const visible = entries[0].isIntersecting;
    if (visible && !running) {
      running = true;
      clock.start();
      animate();
    } else if (!visible && running) {
      running = false;
      clock.stop();
      cancelAnimationFrame(rafId);
    }
  }).observe(hero);
})();

/* ---------- road progress + caravan + stops ---------- */

const road = document.getElementById("road");
const progress = document.getElementById("road-progress");
const stops = document.querySelectorAll(".stop");

let caravan = null;
if (road && !reduceMotion) {
  caravan = document.createElement("span");
  caravan.className = "road-caravan";
  caravan.setAttribute("aria-hidden", "true");
  road.appendChild(caravan);
}

function updateRoad() {
  if (!road) return;
  const rect = road.getBoundingClientRect();
  const viewportMid = window.innerHeight * 0.55;
  const passed = Math.min(Math.max(viewportMid - rect.top, 0), rect.height);
  progress.style.height = passed + "px";
  if (caravan) caravan.style.top = 8 + passed + "px";
  stops.forEach((stop) => {
    const dot = stop.querySelector(".stop-dot");
    const dotY = dot.getBoundingClientRect().top - rect.top + 8;
    stop.classList.toggle("lit", dotY <= passed);
  });
}

window.addEventListener("scroll", updateRoad, { passive: true });
window.addEventListener("resize", updateRoad);
updateRoad();

/* ---------- 3D tilt + spotlight on cards ---------- */

if (!reduceMotion) {
  document.querySelectorAll(".stop-card, .work-card").forEach((card) => {
    const move = (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty("--mx", px * 100 + "%");
      card.style.setProperty("--my", py * 100 + "%");
      if (isTouch) {
        card.classList.add("spot");   // на touch нет :hover — включаем подсветку классом
      } else {
        const rx = (0.5 - py) * 6;
        const ry = (px - 0.5) * 6;
        card.style.transform = "perspective(800px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) translateY(-2px)";
        card.style.transition = "transform 0.06s linear";
      }
    };
    const reset = () => {
      if (isTouch) { card.classList.remove("spot"); return; }
      card.style.transition = "transform 0.4s ease";
      card.style.transform = "";
    };
    card.addEventListener("pointermove", move, { passive: true });
    card.addEventListener("pointerleave", reset);
    card.addEventListener("pointercancel", reset);
    card.addEventListener("pointerup", reset);
  });
}

/* ---------- reveal on scroll ---------- */

const revealTargets = document.querySelectorAll(".stop-card, .work-card, .step, .section-head, .gift");
revealTargets.forEach((t) => t.classList.add("reveal"));

document.querySelectorAll(".freveal").forEach((t, i) => {
  t.style.transitionDelay = 0.1 + i * 0.1 + "s";
});

if (!reduceMotion) {
  document.querySelectorAll(".footer-shell, .configurator").forEach((zone) => {
    zone.addEventListener("pointermove", (e) => {
      const r = zone.getBoundingClientRect();
      zone.style.setProperty("--fx", ((e.clientX - r.left) / r.width) * 100 + "%");
      zone.style.setProperty("--fy", ((e.clientY - r.top) / r.height) * 100 + "%");
      if (isTouch) zone.classList.add("spot");
    }, { passive: true });
    if (isTouch) {
      const clear = () => zone.classList.remove("spot");
      zone.addEventListener("pointerup", clear);
      zone.addEventListener("pointercancel", clear);
      zone.addEventListener("pointerleave", clear);
    }
  });
}

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealTargets.forEach((t) => io.observe(t));
document.querySelectorAll(".freveal").forEach((t) => io.observe(t));

/* ---------- переключатель темы (день/ночь) ---------- */

(function initThemeToggle() {
  const KEY = "silkway_theme";
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");

  function apply(theme) {
    root.classList.toggle("theme-light", theme === "light");
    if (btn) btn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    try { localStorage.setItem(KEY, theme); } catch (e) {}
  }

  let theme = "dark";
  try {
    const s = localStorage.getItem(KEY);
    if (s === "light" || s === "dark") theme = s;
  } catch (e) {}
  apply(theme);

  if (btn) {
    btn.addEventListener("click", () => {
      apply(root.classList.contains("theme-light") ? "dark" : "light");
    });
  }
})();

/* ---------- звёздное поле: переиспользуемая мерцающая пыль ---------- */
/* Используется в hero (с золотым сиянием) и как лёгкий фон во всех секциях. */

function startStarfield(canvas, host, opts) {
  if (reduceMotion || !canvas || !host) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const density = opts.density || 0.00006;
  const glow = !!opts.glow;
  // 'auto' — секция сама тёмная/светлая в зависимости от темы (hero/configurator/footer);
  // 'light' — секция всегда светлая (services/work/process/gifts не меняются темой)
  const mode = opts.mode || "auto";

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let W = 0;
  let H = 0;
  let stars = [];

  function sizeStars() {
    W = host.clientWidth;
    H = host.clientHeight;
    canvas.width = Math.floor(W * dpr);
    canvas.height = Math.floor(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.floor(W * H * density);
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: 0.5 + Math.random(),
        alpha: 0.15 + Math.random() * 0.35,
        phase: Math.random() * Math.PI * 2,
        gold: Math.random() < 0.18,
      });
    }
  }
  sizeStars();
  // Защита от гонки: если при первом расчёте layout ещё не устоялся (0-й/крошечный
  // размер), пересчитываем после следующего кадра — иначе canvas на всю жизнь
  // страницы останется мизерным, а событие resize может больше не наступить.
  requestAnimationFrame(() => {
    if (host.clientWidth > W + 5 || host.clientHeight > H + 5) sizeStars();
  });
  window.addEventListener("resize", sizeStars);

  let running = false;
  let rafId = null;

  function frame(t) {
    rafId = requestAnimationFrame(frame);
    ctx.clearRect(0, 0, W, H);

    const isLight = mode === "light" || document.documentElement.classList.contains("theme-light");

    if (glow) {
      const pulse = Math.sin(t * 0.0008) * 0.05 + (isLight ? 0.09 : 0.12);
      const g = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.7);
      g.addColorStop(0, "rgba(201, 162, 39, " + pulse + ")");
      g.addColorStop(1, "rgba(201, 162, 39, 0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    }

    const dust = isLight ? "#1C3A70" : "#F7F4EE";
    const dustAlpha = isLight ? 0.5 : 1;
    for (const s of stars) {
      s.x += s.vx;
      s.y += s.vy;
      if (s.x < 0) s.x = W;
      if (s.x > W) s.x = 0;
      if (s.y < 0) s.y = H;
      if (s.y > H) s.y = 0;
      const tw = Math.sin(t * 0.002 + s.phase) * 0.5 + 0.5;
      ctx.globalAlpha = Math.min(1, s.alpha * (0.3 + 0.7 * tw) * (s.gold ? 1 : dustAlpha));
      ctx.fillStyle = s.gold ? "#D9B545" : dust;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  new IntersectionObserver((entries) => {
    const visible = entries[0].isIntersecting;
    if (visible && !running) {
      running = true;
      rafId = requestAnimationFrame(frame);
    } else if (!visible && running) {
      running = false;
      cancelAnimationFrame(rafId);
    }
  }).observe(host);
}

startStarfield(document.getElementById("hero-stars"), document.querySelector(".hero"), { glow: true, mode: "auto", density: 0.00006 });
startStarfield(document.getElementById("stars-configurator"), document.querySelector(".configurator"), { mode: "auto", density: 0.00004 });
startStarfield(document.getElementById("stars-footer"), document.querySelector(".footer-shell"), { mode: "auto", density: 0.00004 });
startStarfield(document.getElementById("stars-services"), document.querySelector(".services"), { mode: "light", density: 0.00004 });
startStarfield(document.getElementById("stars-work"), document.querySelector(".work"), { mode: "light", density: 0.00004 });
startStarfield(document.getElementById("stars-gifts"), document.querySelector(".gifts"), { mode: "light", density: 0.00004 });
startStarfield(document.getElementById("stars-process"), document.querySelector(".process"), { mode: "light", density: 0.00004 });
