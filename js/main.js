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
};

const TG_URL = "https://t.me/silkway12";
const state = { service: "landing", options: new Set(), urgent: false };
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = window.matchMedia("(pointer: coarse)").matches;

const L = () => (window.SILKWAY_LANG === "ru" ? "ru" : "uz");
const UI = {
  uz: {
    send: "Arizani Telegramga yuborish",
    copied: "Ariza nusxalandi — chatga qo'ying",
    orderTitle: "Silkway saytidan ariza",
    fService: "Xizmat", fOptions: "Opsiyalar", fUrgentYes: "Shoshilinch: ha",
    fCalc: "Hisob", fSum: "so'm", fTerm: "muddat",
    basePkg: (n) => "«" + n + "» asosiy paketi",
    urgentItem: "Shoshilinch bajarish",
    urgent12: "12 soat", urgent24: "1–2 kun",
  },
  ru: {
    send: "Отправить заявку в Telegram",
    copied: "Заявка скопирована — вставьте в чат",
    orderTitle: "Заявка с сайта Silkway",
    fService: "Услуга", fOptions: "Опции", fUrgentYes: "Срочно: да",
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
  return [
    u.orderTitle,
    u.fService + ": " + svc.name[L()],
    ...(chosen.length ? [u.fOptions + ": " + chosen.join(", ")] : []),
    ...(state.urgent ? [u.fUrgentYes] : []),
    u.fCalc + ": " + fmt(price) + " " + u.fSum + ", " + u.fTerm + ": " + daysText,
  ].join("\n");
}

el.urgent.addEventListener("change", () => {
  state.urgent = el.urgent.checked;
  renderTotal();
});

el.send.addEventListener("click", () => {
  const text = buildOrderText();
  if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
  el.send.textContent = ui().copied;
  setTimeout(() => { el.send.textContent = ui().send; }, 4000);
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
  });

  function physics(delta) {
    raycaster.setFromCamera(pointerNdc, camera);
    raycaster.ray.intersectPlane(plane, target);

    vTmp.fromArray(posData, 0).lerp(target, 0.1).toArray(posData, 0);
    velData[0] = velData[1] = velData[2] = 0;

    for (let i = 1; i < COUNT; i++) {
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
          if (j !== 0) {
            vOther.addScaledVector(vDiff, overlap);
            posData[ob] = vOther.x; posData[ob + 1] = vOther.y; posData[ob + 2] = vOther.z;
          }
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
    glow.position.fromArray(posData, 0);
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
