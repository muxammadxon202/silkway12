(function () {
  const overlay = document.getElementById("intro");
  if (!overlay) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let seen = false;
  try { seen = localStorage.getItem("silkway_intro_v2") === "1"; } catch (e) {}

  if (reduce || seen) {
    overlay.remove();
    return;
  }

  const canvas = overlay.querySelector("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  document.documentElement.classList.add("intro-lock");

  let introLang = "uz";
  try { const s = localStorage.getItem("silkway_lang"); if (s === "ru") introLang = "ru"; } catch (e) {}
  const TEXTS = ["SILKWAY", introLang === "ru" ? "Под ключ." : "Tayyor holda."];
  const COLOR = "rgba(247, 244, 238, 1)";
  const VAPORIZE_MS = 1300;
  const FADE_MS = 450;
  const WAIT_MS = 350;
  const STATIC_MS = 420;
  const DENSITY = 0.65;

  const dpr = Math.min((window.devicePixelRatio || 1) * 1.5, 2.5);
  const cssW = window.innerWidth;
  const cssH = window.innerHeight;
  canvas.width = Math.floor(cssW * dpr);
  canvas.height = Math.floor(cssH * dpr);
  const fontSize = Math.max(34, Math.min(cssW * 0.085, 84));
  const font = "600 " + fontSize * dpr + "px Unbounded, sans-serif";

  function calcSpread(size) {
    const pts = [
      { size: 20, spread: 0.2 },
      { size: 50, spread: 0.5 },
      { size: 100, spread: 1.5 },
    ];
    if (size <= pts[0].size) return pts[0].spread;
    if (size >= pts[2].size) return pts[2].spread;
    let i = 0;
    while (i < pts.length - 1 && pts[i + 1].size < size) i++;
    const p1 = pts[i], p2 = pts[i + 1];
    return p1.spread + (size - p1.size) * (p2.spread - p1.spread) / (p2.size - p1.size);
  }
  const SPREAD = calcSpread(fontSize) * 5;

  let particles = [];
  let bounds = { left: 0, right: 0, width: 0 };
  let state = "static";
  let progress = 0;
  let fadeT = 0;
  let idx = 0;
  let stateT = 0;
  let done = false;

  function makeParticles(text) {
    particles = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = COLOR;
    ctx.font = font;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const w = ctx.measureText(text).width;
    bounds = { left: cx - w / 2, right: cx + w / 2, width: w };
    ctx.fillText(text, cx, cy);
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const rate = Math.max(1, Math.round(dpr / 3));
    for (let y = 0; y < canvas.height; y += rate) {
      for (let x = 0; x < canvas.width; x += rate) {
        const a = data[(y * canvas.width + x) * 4 + 3];
        if (a > 0) {
          const oa = (a / 255) * (rate / dpr);
          particles.push({
            x, y, ox: x, oy: y,
            o: oa, oa,
            vx: 0, vy: 0, speed: 0, quick: false,
          });
        }
      }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function updateWave(vaporizeX, dt) {
    let all = true;
    for (const p of particles) {
      if (p.ox <= vaporizeX) {
        if (p.speed === 0) {
          const angle = Math.random() * Math.PI * 2;
          p.speed = (Math.random() + 0.5) * SPREAD;
          p.vx = Math.cos(angle) * p.speed;
          p.vy = Math.sin(angle) * p.speed;
          p.quick = Math.random() > DENSITY;
        }
        if (p.quick) {
          p.o = Math.max(0, p.o - dt);
        } else {
          const dx = p.ox - p.x;
          const dy = p.oy - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const damp = Math.max(0.95, 1 - dist / (100 * SPREAD));
          const rs = SPREAD * 3;
          p.vx = (p.vx + (Math.random() - 0.5) * rs + dx * 0.002) * damp;
          p.vy = (p.vy + (Math.random() - 0.5) * rs + dy * 0.002) * damp;
          const maxV = SPREAD * 2;
          const v = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (v > maxV) { p.vx *= maxV / v; p.vy *= maxV / v; }
          p.x += p.vx * dt * 20;
          p.y += p.vy * dt * 10;
          p.o = Math.max(0, p.o - dt * 0.25 * (2000 / VAPORIZE_MS));
        }
        if (p.o > 0.01) all = false;
      } else {
        all = false;
      }
    }
    return all;
  }

  function render(alphaScale) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(dpr, dpr);
    for (const p of particles) {
      const o = alphaScale === undefined ? p.o : Math.min(alphaScale, 1) * p.oa;
      if (o > 0) {
        ctx.fillStyle = "rgba(247, 244, 238, " + o + ")";
        ctx.fillRect(p.x / dpr, p.y / dpr, 1, 1);
      }
    }
    ctx.restore();
  }

  function finish() {
    if (done) return;
    done = true;
    try { localStorage.setItem("silkway_intro_v2", "1"); } catch (e) {}
    overlay.classList.add("intro-out");
    document.documentElement.classList.remove("intro-lock");
    setTimeout(() => overlay.remove(), 700);
  }

  overlay.addEventListener("click", finish);

  let last = performance.now();
  function loop(now) {
    if (done) return;
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;

    switch (state) {
      case "static": {
        stateT += dt * 1000;
        render();
        if (stateT >= STATIC_MS) { state = "vape"; progress = 0; }
        break;
      }
      case "vape": {
        progress += (dt * 1000 * 100) / VAPORIZE_MS;
        const vx = bounds.left + (bounds.width * Math.min(progress, 100)) / 100;
        const all = updateWave(vx, dt);
        render();
        if (progress >= 100 && all) {
          idx++;
          if (idx >= TEXTS.length) { finish(); return; }
          makeParticles(TEXTS[idx]);
          state = "fade";
          fadeT = 0;
        }
        break;
      }
      case "fade": {
        fadeT += (dt * 1000) / FADE_MS;
        render(fadeT);
        if (fadeT >= 1) { state = "waitpause"; stateT = 0; }
        break;
      }
      case "waitpause": {
        stateT += dt * 1000;
        render(1);
        if (stateT >= WAIT_MS) { state = "vape"; progress = 0; }
        break;
      }
    }
    requestAnimationFrame(loop);
  }

  function start() {
    if (done) return;
    makeParticles(TEXTS[0]);
    last = performance.now();
    requestAnimationFrame(loop);
    setTimeout(finish, 9000);
  }

  function whenVisible(cb) {
    if (!document.hidden) { cb(); return; }
    const onVis = () => {
      if (!document.hidden) {
        document.removeEventListener("visibilitychange", onVis);
        cb();
      }
    };
    document.addEventListener("visibilitychange", onVis);
  }

  whenVisible(() => {
    const fontReady = document.fonts && document.fonts.load
      ? document.fonts.load(font).then(() => undefined).catch(() => undefined)
      : Promise.resolve();
    const timeout = new Promise((res) => setTimeout(res, 900));
    Promise.race([fontReady, timeout]).then(start);
  });
})();
