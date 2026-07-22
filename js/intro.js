(function () {
  const overlay = document.getElementById("intro");
  if (!overlay) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    overlay.remove();
    return;
  }

  const canvas = overlay.querySelector("canvas");
  const titleEl = document.getElementById("intro-title");
  const ctx = canvas.getContext("2d");
  document.documentElement.classList.add("intro-lock");

  let introLang = "uz";
  try { const s = localStorage.getItem("silkway_lang"); if (s === "ru") introLang = "ru"; } catch (e) {}

  // Короткое интро (~2.5 сек): один скрамбл в имя бренда.
  const PHRASES = ["Silkway12"];

  // Цвета бренда (фон — уже из CSS #intro { background: var(--night) })
  const MIST = "143, 163, 200";   // спокойный дождь
  const GOLD = "#D9B545";          // вспышки

  let W = 0, H = 0, dpr = 1;
  let chars = [];
  let done = false;

  const GLYPHS = "SILKWAY0123456789{}[]()<>/\\=+*#—АБВГ".split("");
  const RAIN_FONT_PX = 20;

  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.floor(W * dpr);
    canvas.height = Math.floor(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  size();
  window.addEventListener("resize", size);

  function makeChars() {
    const count = Math.min(320, Math.floor((W * H) / 5200));
    chars = [];
    for (let i = 0; i < count; i++) {
      chars.push({
        g: GLYPHS[(Math.random() * GLYPHS.length) | 0],
        x: Math.random(),
        y: Math.random(),
        speed: 0.04 + Math.random() * 0.11, // доля высоты в секунду
        active: false,
        flick: Math.random() * Math.PI * 2,
      });
    }
  }
  makeChars();

  // мерцание: раз в ~55мс делаем 3–5 случайных букв «активными»
  let flickerAcc = 0;
  function reflicker() {
    for (const c of chars) c.active = false;
    const n = 3 + ((Math.random() * 3) | 0);
    for (let i = 0; i < n; i++) chars[(Math.random() * chars.length) | 0].active = true;
  }

  let last = performance.now();
  function frame(now) {
    if (done) return;
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;

    flickerAcc += dt * 1000;
    if (flickerAcc >= 55) { reflicker(); flickerAcc = 0; }

    ctx.clearRect(0, 0, W, H);

    // спокойный дождь одним проходом
    ctx.font = "500 " + RAIN_FONT_PX + "px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowBlur = 0;

    for (const c of chars) {
      c.y += c.speed * dt;
      if (c.y >= 1.05) {
        c.y = -0.05;
        c.x = Math.random();
        c.g = GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      if (c.active) continue;
      ctx.fillStyle = "rgba(" + MIST + ", 0.32)";
      ctx.fillText(c.g, c.x * W, c.y * H);
    }

    // активные вспышки — вторым проходом (крупнее, золото, свечение)
    ctx.font = "700 " + Math.round(RAIN_FONT_PX * 1.35) + "px 'JetBrains Mono', monospace";
    ctx.fillStyle = GOLD;
    ctx.shadowColor = "rgba(217, 181, 69, 0.85)";
    ctx.shadowBlur = 14;
    for (const c of chars) {
      if (!c.active) continue;
      c.flick += dt * 20;
      ctx.globalAlpha = 0.75 + Math.sin(c.flick) * 0.25;
      ctx.fillText(c.g, c.x * W, c.y * H);
    }
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;

    requestAnimationFrame(frame);
  }

  // ---------- скрамбл заголовка ----------

  const SCRAMBLE = "!<>-_\\/[]{}—=+*^?#АБ01".split("");

  function scramble(el, text) {
    return new Promise((resolve) => {
      const old = el.textContent;
      const len = Math.max(old.length, text.length);
      const queue = [];
      for (let i = 0; i < len; i++) {
        const from = old[i] || "";
        const to = text[i] || "";
        const start = (Math.random() * 16) | 0;
        const end = start + ((Math.random() * 16) | 0);
        queue.push({ from, to, start, end, char: "" });
      }
      let frameNo = 0;
      function upd() {
        let out = "";
        let complete = 0;
        for (const q of queue) {
          if (frameNo >= q.end) { complete++; out += q.to; }
          else if (frameNo >= q.start) {
            if (!q.char || Math.random() < 0.28) q.char = SCRAMBLE[(Math.random() * SCRAMBLE.length) | 0];
            out += '<span class="dud">' + q.char + "</span>";
          } else out += q.from;
        }
        el.innerHTML = out;
        if (complete === queue.length) resolve();
        else { frameNo++; requestAnimationFrame(upd); }
      }
      upd();
    });
  }

  async function runTitle() {
    for (let i = 0; i < PHRASES.length && !done; i++) {
      await scramble(titleEl, PHRASES[i]);
      await new Promise((r) => setTimeout(r, 3000));
    }
    finish();
  }

  function finish() {
    if (done) return;
    done = true;
    overlay.classList.add("intro-out");
    document.documentElement.classList.remove("intro-lock");
    setTimeout(() => overlay.remove(), 700);
  }

  overlay.addEventListener("click", finish);

  function whenVisible(cb) {
    if (!document.hidden) { cb(); return; }
    const onVis = () => {
      if (!document.hidden) { document.removeEventListener("visibilitychange", onVis); cb(); }
    };
    document.addEventListener("visibilitychange", onVis);
  }

  whenVisible(() => {
    const fontReady = document.fonts && document.fonts.load
      ? document.fonts.load("500 20px 'JetBrains Mono'").then(() => undefined).catch(() => undefined)
      : Promise.resolve();
    Promise.race([fontReady, new Promise((r) => setTimeout(r, 250))]).then(() => {
      last = performance.now();
      requestAnimationFrame(frame);
      runTitle();
      setTimeout(finish, 6000); // страховка
    });
  });
})();
