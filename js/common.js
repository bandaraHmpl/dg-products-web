/* ============================================================
   DG PRODUCTS: shared code (loaded on every public page, after data.js)
   - icons, images (Cloudinary), colour palettes
   - products + reviews storage, language / currency
   - header + footer (injected here, so they exist in ONE place only)
   - page-to-page loading animation
   - 5 taps on the logo => admin.html
   Page scripts use DG.ready(fn) and listen to the "dg:rerender" event
   (fired after language / currency changes).
   ============================================================ */

/* Icons: Lucide (https://lucide.dev) - ISC License. Inlined SVG paths, no network needed. */
const ICON_PATHS = {
  "phone": "<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"/>",
  "mail": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/> <path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"/>",
  "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/> <circle cx=\"12\" cy=\"10\" r=\"3\"/>",
  "leaf": "<path d=\"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z\"/> <path d=\"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12\"/>",
  "settings": "<path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\"/> <circle cx=\"12\" cy=\"12\" r=\"3\"/>",
  "square-pen": "<path d=\"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/> <path d=\"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z\"/>",
  "package": "<path d=\"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z\"/> <path d=\"M12 22V12\"/> <path d=\"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7\"/> <path d=\"m7.5 4.27 9 5.15\"/>",
  "trash-2": "<path d=\"M3 6h18\"/> <path d=\"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6\"/> <path d=\"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\"/> <line x1=\"10\" x2=\"10\" y1=\"11\" y2=\"17\"/> <line x1=\"14\" x2=\"14\" y1=\"11\" y2=\"17\"/>",
  "check": "<path d=\"M20 6 9 17l-5-5\"/>",
  "x": "<path d=\"M18 6 6 18\"/> <path d=\"m6 6 12 12\"/>",
  "star": "<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\"/>",
  "arrow-right": "<path d=\"M5 12h14\"/> <path d=\"m12 5 7 7-7 7\"/>",
  "arrow-left": "<path d=\"m12 19-7-7 7-7\"/> <path d=\"M19 12H5\"/>",
  "minus": "<path d=\"M5 12h14\"/>",
  "plus": "<path d=\"M5 12h14\"/> <path d=\"M12 5v14\"/>",
  "search": "<circle cx=\"11\" cy=\"11\" r=\"8\"/> <path d=\"m21 21-4.3-4.3\"/>",
  "menu": "<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"/> <line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\"/> <line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\"/>",
  "badge-check": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/> <path d=\"m9 12 2 2 4-4\"/>",
  "circle-check-big": "<path d=\"M21.801 10A10 10 0 1 1 17 3.335\"/> <path d=\"m9 11 3 3L22 4\"/>",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\"/> <path d=\"M12 16v-4\"/> <path d=\"M12 8h.01\"/>",
  "share-2": "<circle cx=\"18\" cy=\"5\" r=\"3\"/> <circle cx=\"6\" cy=\"12\" r=\"3\"/> <circle cx=\"18\" cy=\"19\" r=\"3\"/> <line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\"/> <line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\"/>",
  "file-text": "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/> <path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/> <path d=\"M10 9H8\"/> <path d=\"M16 13H8\"/> <path d=\"M16 17H8\"/>"
};

function icon(name, size = 18, extraClass = "", filled = false) {
  const inner = ICON_PATHS[name];
  if (!inner) return "";
  return `<svg class="icon icon-${name} ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${filled ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${inner}</svg>`;
}

/* Replace <i data-icon="phone" data-size="20"></i> placeholders with real SVGs */
function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach(el => {
    const name = el.getAttribute("data-icon");
    const size = parseInt(el.getAttribute("data-size") || "18", 10);
    const filled = el.hasAttribute("data-filled");
    const wrap = document.createElement("span");
    wrap.className = "icon-wrap " + (el.getAttribute("class") || "");
    wrap.innerHTML = icon(name, size, "", filled);
    el.replaceWith(wrap);
  });
}

// Turns a public ID / Cloudinary URL into an optimised delivery URL (auto format + quality + width)
function cld(src, w = 800, square = false) {
  if (!src) return "";
  src = String(src);
  const tf = `f_auto,q_auto,w_${w}` + (square ? ",c_fill,ar_1:1,g_auto" : "");
  const m = src.match(/^(https?:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/)(.+)$/);
  if (m) return m[1] + tf + "/" + m[2];
  if (/^(https?:|data:|\/\/)/.test(src) || src.startsWith("images/")) return src;
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${tf}/${src}`;
}

// Branded placeholder if an image fails to load
const IMG_PLACEHOLDER = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#F6E7C9"/><circle cx="100" cy="100" r="54" fill="#D5AD62"/><text x="100" y="116" font-family="Arial" font-weight="700" font-size="44" text-anchor="middle" fill="#86151B">DG</text></svg>');
function imgFallback(el) { el.onerror = null; el.src = IMG_PLACEHOLDER; el.style.objectFit = "cover"; }

// Fills every <img data-cld="key"> and the favicon from IMAGE_PATHS
function hydrateCloudinaryImages() {
  document.querySelectorAll("[data-cld]").forEach(img => {
    img.onerror = () => imgFallback(img);
    img.src = cld(IMAGE_PATHS[img.dataset.cld] || img.dataset.cld, parseInt(img.dataset.w, 10) || 800);
  });
  const fav = document.querySelector('link[rel="icon"]');
  if (fav) fav.href = cld(IMAGE_PATHS.logoPng, 64);
}

/* ============================================================
   COLOUR SYSTEM
   Website: Burgundy #86151B, Cream #FFF8ED, Dark Brown #39291F, Gold #D5AD62 (see styles.css)
   Each product has its own palette [main, secondary, cream tint, accent] used only as accents.
   Add a new product in the admin and pick a preset or custom colours.
   ============================================================ */
const PRODUCT_PALETTES = {
  lime:     { label: "Ceylon Lime Pickle: Green, Brown, Cream, Gold", tag: "Natural & Traditional", colors: ["#3F6B2B", "#6B4423", "#F6EDD2", "#D5AD62"] },
  chicken:  { label: "Spicy Chicken Sambal: Chili Red, Deep Brown, Cream, Warm Brown", tag: "Rich & Spicy", colors: ["#C62B1D", "#3B2015", "#FBEDD8", "#8B4E2B"] },
  fish:     { label: "Traditional Fish Sambal: Deep Brown, Rust Red, Cream, Earth Brown", tag: "Traditional & Rich", colors: ["#3E2519", "#A8472B", "#F8EBD6", "#7B5A3C"] },
  tea:      { label: "Ceylon Cinnamon Tea: Gold, Cinnamon Brown, Cream", tag: "Premium & Elegant", colors: ["#D5AD62", "#8A4B24", "#FFF4DE", "#B98E43"] },
  cinnamon: { label: "Pure Ceylon Cinnamon Powder: Cinnamon Brown, Tan, Cream, Gold", tag: "Natural & Premium", colors: ["#8A4B24", "#C8A27B", "#FFF1DC", "#D5AD62"] }
};

function lum(hex) {
  const n = parseInt(String(hex).slice(1), 16);
  const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  return 0.2126 * f((n >> 16) & 255) + 0.7152 * f((n >> 8) & 255) + 0.0722 * f(n & 255);
}
function paletteFor(p) {
  if (Array.isArray(p.colors) && p.colors.length === 4) return p.colors;
  return (PRODUCT_PALETTES[p.palette] || PRODUCT_PALETTES.lime).colors;
}
// CSS variables for a product's cards / detail page / banner slide
function paletteStyle(p) {
  const [a, b, c, d] = paletteFor(p);
  const dk = lum(a) <= lum(b) ? a : b, lt = dk === a ? b : a;
  return `--p-a:${a};--p-b:${b};--p-c:${c};--p-d:${d};--p-dk:${dk};--p-lt:${lt};--p-on:${lum(a) > 0.35 ? "#39291F" : "#ffffff"}`;
}
function getCategoryName(cat) {
  const map = { traditional: "catTraditional", spiced: "catSpiced", special: "catSpecial", sambal: "catSambal", tea: "catTea", spice: "catSpice" };
  return getTranslation(map[cat] || "catTraditional");
}

function getStoredReviews() {
  try {
    const raw = localStorage.getItem("dg_product_reviews");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn("Failed reading localStorage reviews:", err);
  }
  localStorage.setItem("dg_product_reviews", JSON.stringify(DEFAULT_REVIEWS));
  return DEFAULT_REVIEWS;
}

let productReviews = getStoredReviews();

function saveProductReviews() {
  localStorage.setItem("dg_product_reviews", JSON.stringify(productReviews));
  if (typeof updateAdminPendingBadge === "function") updateAdminPendingBadge();
}

function getApprovedReviewsForProduct(productId) {
  return productReviews.filter(r => r.productId === productId && r.status === "approved");
}

function getProductRatingStats(productId) {
  const approved = getApprovedReviewsForProduct(productId);
  const count = approved.length;
  if (count === 0) {
    return {
      count: 0,
      average: "5.0",
      breakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
    };
  }
  const sum = approved.reduce((acc, r) => acc + (Number(r.rating) || 5), 0);
  const avg = (sum / count).toFixed(1);

  const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  approved.forEach(r => {
    const star = Math.min(5, Math.max(1, Math.round(r.rating)));
    breakdown[star] = (breakdown[star] || 0) + 1;
  });

  return { count, average: avg, breakdown };
}

function renderStarsHtml(rating) {
  const rounded = Math.round(Number(rating) || 5);
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += i <= rounded
      ? icon("star", 16, "star-filled", true)
      : icon("star", 16, "star-empty", false);
  }
  return html;
}

/* ---------- Shared state ---------- */
let currentLanguage = localStorage.getItem("dg_active_language") || "en";
let currentCurrency = localStorage.getItem("dg_active_currency") || "LKR";
if (typeof TRANSLATIONS !== "undefined" && !TRANSLATIONS[currentLanguage]) currentLanguage = "en";
if (currentCurrency !== "LKR" && currentCurrency !== "USD") currentCurrency = "LKR";

const PRODUCTS_VERSION = 3;
function normalizeProduct(p) {
  p.palette = p.palette || "lime";
  if (!p.tag) p.tag = (PRODUCT_PALETTES[p.palette] || PRODUCT_PALETTES.lime).tag;
  if (p.featured === undefined) p.featured = (p.id === "dg-001");
  return p;
}

function getStoredProducts() {
  try {
    const raw = localStorage.getItem("dg_products_inventory");
    if (raw) {
      let parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // one-time migration: add any new default products that are missing
        if (parseInt(localStorage.getItem("dg_products_version") || "0", 10) < PRODUCTS_VERSION) {
          DEFAULT_PRODUCTS.forEach(d => { if (!parsed.some(p => p.id === d.id)) parsed.push(d); });
          localStorage.setItem("dg_products_version", String(PRODUCTS_VERSION));
          localStorage.setItem("dg_products_inventory", JSON.stringify(parsed));
        }
        return parsed.map(normalizeProduct);
      }
    }
  } catch (err) {
    console.warn("Failed reading localStorage products:", err);
  }
  localStorage.setItem("dg_products_version", String(PRODUCTS_VERSION));
  localStorage.setItem("dg_products_inventory", JSON.stringify(DEFAULT_PRODUCTS));
  return DEFAULT_PRODUCTS.map(normalizeProduct);
}

let productsInventory = getStoredProducts();

function saveProductsInventory() {
  localStorage.setItem("dg_products_inventory", JSON.stringify(productsInventory));
}

function formatPrice(priceInLkr) {
  if (currentCurrency === "USD") {
    const usd = (priceInLkr / EXCHANGE_RATE_USD_TO_LKR).toFixed(2);
    return `$${usd}`;
  }
  if (currentLanguage === "si") return `රු. ${priceInLkr.toLocaleString()}`;
  if (currentLanguage === "ta") return `ரூ. ${priceInLkr.toLocaleString()}`;
  return `Rs. ${priceInLkr.toLocaleString()}`;
}

function getTranslation(key, fallback = "") {
  const langDict = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  return langDict[key] || TRANSLATIONS.en[key] || fallback;
}

/* ---------- Tiny helper object for page scripts ---------- */
const DG = {
  _queue: [],
  _ready: false,
  page: () => document.body.dataset.page || "",
  ready(fn) { this._ready ? fn() : this._queue.push(fn); },
  go(href) { goTo(href); }
};

/* ---------- Language / currency ---------- */
function applyTranslations() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const val = getTranslation(el.getAttribute("data-i18n"));
    if (val) el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const val = getTranslation(el.getAttribute("data-i18n-placeholder"));
    if (val) el.setAttribute("placeholder", val);
  });
  document.querySelectorAll(".lang-opt-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLanguage);
  });
  document.querySelectorAll(".curr-opt-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-curr") === currentCurrency);
  });

  // pages re-draw their own dynamic parts (product grid, product detail, hero...)
  window.dispatchEvent(new CustomEvent("dg:rerender"));
}

function setLanguage(lang) {
  if (TRANSLATIONS[lang]) {
    currentLanguage = lang;
    localStorage.setItem("dg_active_language", lang);
    applyTranslations();
  }
}

function setCurrency(curr) {
  if (curr === "LKR" || curr === "USD") {
    currentCurrency = curr;
    localStorage.setItem("dg_active_currency", curr);
    applyTranslations();
  }
}

/* ---------- Toast ---------- */
function showToast(msg) {
  let toast = document.getElementById("app-toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast-notification";
    toast.className = "app-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove("show"), 2800);
}

/* ============================================================
   HEADER + FOOTER (written once, injected into every page)
   Pages only need:  <div id="site-header"></div>  and  <div id="site-footer"></div>
   ============================================================ */
const NAV_ITEMS = [
  { id: "home",    href: "index.html",   key: "navHome",    label: "Home" },
  { id: "about",   href: "about.html",   key: "navAbout",   label: "About Us" },
  { id: "shop",    href: "shop.html",    key: "navShop",    label: "Shop" },
  { id: "contact", href: "contact.html", key: "navContact", label: "Contact Us" }
];

function selectorPills() {
  return `
    <div class="selector-pill" role="group" aria-label="Language Selector">
      <button class="selector-option lang-opt-btn" data-lang="si" title="සිංහල">සිංහල</button>
      <button class="selector-option lang-opt-btn" data-lang="en" title="English">EN</button>
      <button class="selector-option lang-opt-btn" data-lang="ta" title="தமிழ்">தமிழ்</button>
    </div>
    <div class="selector-pill" role="group" aria-label="Currency Selector">
      <button class="selector-option curr-opt-btn" data-curr="LKR" title="Sri Lankan Rupee">LKR</button>
      <button class="selector-option curr-opt-btn" data-curr="USD" title="US Dollar">USD</button>
    </div>`;
}

function headerHtml() {
  const links = (cls) => NAV_ITEMS.map(n =>
    `<a href="${n.href}" class="${cls}" data-nav="${n.id}" data-i18n="${n.key}">${n.label}</a>`).join("");
  return `
    <header class="site-header">
      <div class="container header-container">
        <a href="index.html" class="brand-lockup secret-admin-trigger" title="DG Products">
          <img data-cld="logoPng" data-w="900" alt="DG PRODUCTS Logo" class="brand-logo-img" />
          <div class="brand-text-block"><span class="brand-name">DG PRODUCTS</span></div>
        </a>

        <nav class="main-nav" aria-label="Primary Site Navigation">${links("nav-link")}</nav>

        <div class="header-actions">
          <button id="header-search-toggle" class="action-btn" aria-label="Toggle Search Bar" title="Search Products">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          ${selectorPills()}
          <button id="mobile-menu-btn" class="action-btn mobile-menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav-drawer" title="Menu">
            <i data-icon="menu" data-size="20"></i>
          </button>
        </div>
      </div>

      <nav id="mobile-nav-drawer" class="mobile-nav-drawer" aria-label="Mobile Navigation">
        <div class="container">
          ${links("mobile-nav-link")}
          <div class="mobile-selectors">${selectorPills()}</div>
        </div>
      </nav>

      <div id="search-drawer" class="search-bar-drawer">
        <div class="container">
          <div class="search-input-wrapper">
            <input type="text" id="header-search-input" class="search-input-field"
              placeholder="Search lemon & lime products..." data-i18n-placeholder="searchPlaceholder"
              aria-label="Search products" />
            <button id="search-clear-btn" class="search-clear-btn" aria-label="Clear Search"><i data-icon="x" data-size="18"></i></button>
          </div>
        </div>
      </div>
    </header>`;
}

function footerHtml() {
  const links = NAV_ITEMS.map(n =>
    `<li><a href="${n.href}" class="footer-link" data-i18n="${n.key}">${n.label}</a></li>`).join("");
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top-grid">
          <div class="footer-brand-col">
            <a href="index.html" class="brand-lockup secret-admin-trigger" title="DG Products">
              <img data-cld="logoPng" data-w="900" alt="DG Products Shield Logo" class="brand-logo-img" />
              <div class="brand-text-block"><span class="brand-name">DG PRODUCTS</span></div>
            </a>
            <p class="footer-desc" data-i18n="footerAboutText">Premium artisanal Ceylon Lunu Dehi and lime preserves from Mahiyanganaya.</p>
          </div>
          <div>
            <h4 class="footer-heading" data-i18n="footerLinksTitle">Quick Links</h4>
            <ul class="footer-links-list">${links}</ul>
          </div>
          <div>
            <h4 class="footer-heading" data-i18n="footerHoursTitle">Delivery & Hours</h4>
            <p class="footer-desc" data-i18n="footerHoursText">Monday to Sunday: 8:00 AM - 8:00 PM. Islandwide courier delivery available.</p>
          </div>
          <div>
            <h4 class="footer-heading">WhatsApp Order Hotline</h4>
            <p class="footer-desc">Direct orders & questions:</p>
            <p style="font-size:1.1rem; font-weight:700; color:#52b788;" class="tabular">${BRAND_INFO.phoneDisplay}</p>
            <p style="font-size:0.8rem; color:rgba(255,255,255,0.5); margin-top:4px;">Reg. No: ${BRAND_INFO.regNo}</p>
          </div>
        </div>
        <div class="footer-bottom-bar">
          <p data-i18n="footerCopyright">&copy; 2026 DG PRODUCTS. All rights reserved.</p>
        </div>
      </div>
    </footer>`;
}

function injectLayout() {
  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.outerHTML = headerHtml();
  if (f) f.outerHTML = footerHtml();

  // highlight the current page in the menus
  const current = document.body.dataset.nav || DG.page();
  document.querySelectorAll("[data-nav]").forEach(a => {
    a.classList.toggle("active", a.getAttribute("data-nav") === current);
  });
}

/* ---------- Mobile menu ---------- */
function closeMobileMenu() {
  const drawer = document.getElementById("mobile-nav-drawer");
  const btn = document.getElementById("mobile-menu-btn");
  if (drawer) drawer.classList.remove("open");
  if (btn) {
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = icon("menu", 20);
  }
}

function toggleMobileMenu() {
  const drawer = document.getElementById("mobile-nav-drawer");
  const btn = document.getElementById("mobile-menu-btn");
  if (!drawer || !btn) return;
  const open = drawer.classList.toggle("open");
  btn.setAttribute("aria-expanded", String(open));
  btn.innerHTML = icon(open ? "x" : "menu", 20);
}

/* ---------- Header search ---------- */
function bindSearch() {
  const toggleBtn = document.getElementById("header-search-toggle");
  const drawer = document.getElementById("search-drawer");
  const input = document.getElementById("header-search-input");
  const clearBtn = document.getElementById("search-clear-btn");
  if (!input) return;

  const announce = () => window.dispatchEvent(new CustomEvent("dg:search", { detail: { query: input.value } }));
  const toShop = () => {
    const q = input.value.trim();
    if (q) goTo("shop.html?q=" + encodeURIComponent(q));
  };

  toggleBtn?.addEventListener("click", () => {
    drawer.classList.toggle("open");
    if (drawer.classList.contains("open")) input.focus();
  });

  input.addEventListener("input", announce);
  input.addEventListener("keydown", (e) => {
    // outside the shop page, Enter takes the visitor to the shop with the search applied
    if (e.key === "Enter" && DG.page() !== "shop") { e.preventDefault(); toShop(); }
  });
  clearBtn?.addEventListener("click", () => {
    input.value = "";
    announce();
    input.focus();
  });
}

/* ---------- Secret admin: 5 taps on the logo within 3 seconds ---------- */
let logoClickTimestamps = [];
let brandNavTimer = null;

function onBrandClick(e) {
  e.preventDefault();               // so the 5 taps are not cut short by a page change
  const now = Date.now();
  logoClickTimestamps = logoClickTimestamps.filter(t => now - t < 3000);
  logoClickTimestamps.push(now);
  clearTimeout(brandNavTimer);

  if (logoClickTimestamps.length >= 5) {
    logoClickTimestamps = [];
    goTo("admin.html");
    return;
  }
  if (DG.page() === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // a normal single click still goes home, after a very short wait for extra taps
    brandNavTimer = setTimeout(() => goTo("index.html"), 450);
  }
}

/* ============================================================
   PAGE-TO-PAGE LOADING ANIMATION
   - #page-loader is plain HTML in every page (so it shows instantly)
   - leaving a page: overlay fades in, then we navigate
   - new page: overlay fades out once the page is ready
   ============================================================ */
const LOADER_MIN_MS = 450;     // shortest time the loader stays visible on arrival
const LEAVE_MS = 260;          // fade-in time before navigating away

function goTo(href) {
  const root = document.documentElement;
  if (root.classList.contains("page-leaving")) return;
  root.classList.add("page-leaving");
  setTimeout(() => { window.location.href = href; }, LEAVE_MS);
  // safety: if the browser stays on this page, take the overlay away again
  setTimeout(() => root.classList.remove("page-leaving"), 5000);
}

function revealPage() {
  const root = document.documentElement;
  const splashShowing = !!document.getElementById("intro-splash") && !root.classList.contains("no-splash");
  const wait = splashShowing ? 0 : Math.max(0, LOADER_MIN_MS - performance.now());
  setTimeout(() => root.classList.add("page-ready"), wait);
}

function bindPageTransitions() {
  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest("a[href]");
    if (!a) return;
    if ((a.target && a.target !== "_self") || a.hasAttribute("download")) return;

    let url;
    try { url = new URL(a.href, window.location.href); } catch (err) { return; }
    if (!/^(https?:|file:)$/.test(url.protocol) || url.origin !== window.location.origin) return;

    const samePage = url.pathname === window.location.pathname && url.search === window.location.search;
    if (samePage && url.hash) return;                       // in-page anchor: browser handles it
    if (samePage) { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); return; }

    e.preventDefault();
    goTo(url.href);
  });

  // coming back with the Back button: the old page may be restored from cache
  window.addEventListener("pageshow", (e) => {
    document.documentElement.classList.remove("page-leaving");
    if (e.persisted) document.documentElement.classList.add("page-ready");
  });
}

/* ============================================================
   START
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const layout = document.body.dataset.layout;     // admin.html uses data-layout="none"
  if (layout !== "none") injectLayout();

  hydrateIcons();
  hydrateCloudinaryImages();

  document.querySelectorAll(".lang-opt-btn").forEach(btn =>
    btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang"))));
  document.querySelectorAll(".curr-opt-btn").forEach(btn =>
    btn.addEventListener("click", () => setCurrency(btn.getAttribute("data-curr"))));
  document.getElementById("mobile-menu-btn")?.addEventListener("click", toggleMobileMenu);
  document.querySelectorAll(".secret-admin-trigger").forEach(el => el.addEventListener("click", onBrandClick));
  bindSearch();
  bindPageTransitions();

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    closeMobileMenu();
    document.getElementById("search-drawer")?.classList.remove("open");
  });

  window.addEventListener("scroll", () => {
    document.querySelector(".site-header")?.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });

  // page scripts (home.js, shop.js, product.js, admin.js) start here...
  DG._ready = true;
  DG._queue.forEach(fn => fn());
  DG._queue = [];

  // ...then translations are applied, which also triggers their first render
  applyTranslations();
  revealPage();
});
