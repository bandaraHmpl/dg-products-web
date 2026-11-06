/* ============================================================
   home.js: index.html only
   - intro splash (first visit of a browser session only)
   - 3D hero: one product line-up image that floats and tilts,
     with a clickable hotspot over every jar
   ============================================================ */

/* Hotspots over images/hero-products.webp.
   l / t / w / h are percentages of the image, so they scale with it.
   If you replace the image, adjust these numbers. */
const HERO_SPOTS = [
  { id: "dg-001", l: 8.3,  t: 19.8, w: 14.9, h: 28.0 },  // Lunu Dehi 250g
  { id: "dg-004", l: 22.8, t: 16.0, w: 16.2, h: 31.8 },  // Lunu Dehi 350g
  { id: "dg-003", l: 38.3, t: 10.3, w: 18.6, h: 37.6 },  // Lunu Dehi 500g
  { id: "dg-006", l: 55.9, t: 1.8,  w: 23.5, h: 46.0 },  // Lunu Dehi 1kg
  { id: "dg-011", l: 78.9, t: 15.7, w: 15.3, h: 34.0 },  // Cinnamon Powder
  { id: "dg-002", l: 4.8,  t: 47.9, w: 17.8, h: 36.8 },  // Spiced 250g
  { id: "dg-007", l: 22.2, t: 47.9, w: 16.1, h: 37.7 },  // Spiced (400g product)
  { id: "dg-008", l: 37.8, t: 48.3, w: 17.0, h: 39.0 },  // Chicken Sambal
  { id: "dg-009", l: 54.4, t: 48.3, w: 17.3, h: 39.0 },  // Fish Sambal
  { id: "dg-010", l: 72.2, t: 49.7, w: 23.8, h: 37.3 }   // Cinnamon Tea
];

function renderHeroShowcase() {
  const root = document.getElementById("hero-showcase");
  if (!root) return;
  const nm = p => p.name[currentLanguage] || p.name.en;

  const spots = HERO_SPOTS.map(s => {
    const p = productsInventory.find(x => x.id === s.id);
    if (!p) return "";
    return `<a class="hero-spot" href="product.html?id=${encodeURIComponent(p.id)}" aria-label="${nm(p)}"
      style="left:${s.l}%;top:${s.t}%;width:${s.w}%;height:${s.h}%"><span class="hero-spot-tip">${nm(p)}</span></a>`;
  }).join("");

  root.innerHTML = `
    <div class="hero-bg-shape" aria-hidden="true"></div>
    <div class="container hero-showcase-inner">
      <div class="hero-copy">
        <span class="hero-kicker">DG PRODUCTS</span>
        <h1 class="hero-title">${getTranslation("heroTitle", "Authentic Taste of Ceylon")}</h1>
        <p class="hero-sub">${getTranslation("heroSub", "")}</p>
        <div class="hero-cta-group">
          <a href="shop.html" class="btn-primary hero-shop-btn"><span>${getTranslation("heroShopAll", "Shop all products")}</span> ${icon("arrow-right", 16)}</a>
          <a href="about.html" class="hero-ghost-btn">${getTranslation("navAbout", "About Us")}</a>
        </div>
      </div>
      <div class="hero-stage" id="hero-stage">
        <div class="hero-glow" aria-hidden="true"></div>
        <div class="hero-tilt">
          <div class="hero-float">
            <img class="hero-products-img" src="images/hero-products.webp" width="1200" height="900"
              alt="DG PRODUCTS range: Lunu Dehi, spiced lime pickle, sambals, cinnamon powder and cinnamon tea"
              fetchpriority="high" decoding="async" />
            <div class="hero-spots">${spots}</div>
          </div>
        </div>
        <div class="hero-ground-shadow" aria-hidden="true"></div>
      </div>
    </div>`;

  initHeroTilt();
}

/* Mouse-only 3D tilt. Touch screens just get the floating animation. */
function initHeroTilt() {
  const stage = document.getElementById("hero-stage");
  if (!stage) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const tilt = stage.querySelector(".hero-tilt");

  stage.addEventListener("pointermove", e => {
    const r = stage.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tilt.style.setProperty("--ry", (x * 10).toFixed(2) + "deg");
    tilt.style.setProperty("--rx", (-y * 8).toFixed(2) + "deg");
  });
  stage.addEventListener("pointerleave", () => {
    tilt.style.setProperty("--ry", "0deg");
    tilt.style.setProperty("--rx", "0deg");
  });
}

/* Intro splash: shown once per browser session, not on every page */
function initSplash() {
  const splash = document.getElementById("intro-splash");
  if (!splash || document.documentElement.classList.contains("no-splash")) return;

  const dismiss = () => {
    if (splash.classList.contains("fade-out")) return;
    splash.classList.add("fade-out");
    try { sessionStorage.setItem("dg_splash_seen", "1"); } catch (e) {}
    setTimeout(() => { splash.style.display = "none"; }, 800);
  };
  document.getElementById("splash-skip-btn")?.addEventListener("click", dismiss);
  setTimeout(dismiss, 2400);
}

/* Phones only: after a little scrolling, a floating "Shop" button slides up */
function initShopFab() {
  if (document.getElementById("shop-fab")) return;
  const fab = document.createElement("a");
  fab.id = "shop-fab";
  fab.className = "shop-fab";
  fab.href = "shop.html";
  document.body.appendChild(fab);

  const paint = () => { fab.innerHTML = `${icon("shopping-bag", 20)}<span>${getTranslation("heroShopAll", "Shop all products")}</span>`; };
  paint();
  window.addEventListener("dg:rerender", paint);

  let ticking = false;
  const update = () => {
    ticking = false;
    const footer = document.querySelector(".site-footer");
    const nearFooter = footer && footer.getBoundingClientRect().top < window.innerHeight - 40;
    fab.classList.toggle("show", window.scrollY > 260 && !nearFooter);
  };
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener("resize", update);
  update();
}

DG.ready(() => {
  initSplash();
  initShopFab();
  window.addEventListener("dg:rerender", renderHeroShowcase);
});