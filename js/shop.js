/* ============================================================
   shop.js: shop.html only
   Categories, search and the product grid.
   Links like  shop.html?cat=sambal  and  shop.html?q=lime  work too.
   ============================================================ */

let activeCategory = "all";
let searchQuery = "";
const SHOP_CATEGORY_IDS = ["traditional", "spiced", "special", "sambal", "tea", "spice"];

// keeps the address bar in step with the filters, so the URL can be shared
function syncShopUrl() {
  const params = new URLSearchParams();
  if (activeCategory !== "all") params.set("cat", activeCategory);
  if (searchQuery.trim()) params.set("q", searchQuery.trim());
  const qs = params.toString();
  try { history.replaceState(null, "", window.location.pathname + (qs ? "?" + qs : "")); } catch (e) {}
}

function renderCategoriesBar() {
  const container = document.getElementById("categories-bar-container");
  if (!container) return;

  const categories = [{ id: "all", key: "catAll" }, ...["traditional", "spiced", "special", "sambal", "tea", "spice"]
    .filter(id => productsInventory.some(p => p.category === id))
    .map(id => ({ id, key: { traditional: "catTraditional", spiced: "catSpiced", special: "catSpecial", sambal: "catSambal", tea: "catTea", spice: "catSpice" }[id] }))];

  const counts = { all: productsInventory.length };
  categories.forEach(c => { if (c.id !== "all") counts[c.id] = productsInventory.filter(p => p.category === c.id).length; });

  const label = getTranslation("categoriesLabel", "Categories");

  let html = `
    <div class="categories-bar-compact">
      <span class="categories-bar-label">${label}</span>
  `;

  categories.forEach(cat => {
    const activeClass = activeCategory === cat.id ? "active" : "";
    const name = getTranslation(cat.key);
    const count = counts[cat.id] || 0;
    html += `
      <button class="category-pill-btn ${activeClass}" data-category="${cat.id}">
        <span>${name}</span>
        <span class="count-tag">${count}</span>
      </button>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;

  container.querySelectorAll(".category-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-category");
      activeCategory = cat;
      syncShopUrl();
      renderCategoriesBar();
      renderProductsGrid();
    });
  });
}

function renderProductsGrid() {
  const grid = document.getElementById("products-showcase-grid");
  const countEl = document.getElementById("shop-counter-text");
  if (!grid) return;

  const query = searchQuery.trim().toLowerCase();
  const filtered = productsInventory.filter(p => {

    const catMatch = (activeCategory === "all") || (p.category === activeCategory);
    if (!catMatch) return false;

    if (!query) return true;

    const nameEn = (p.name.en || "").toLowerCase();
    const nameSi = (p.name.si || "").toLowerCase();
    const nameTa = (p.name.ta || "").toLowerCase();
    const descEn = (p.description?.en || "").toLowerCase();
    const weight = (p.weight || "").toLowerCase();

    return nameEn.includes(query) ||
           nameSi.includes(query) ||
           nameTa.includes(query) ||
           descEn.includes(query) ||
           weight.includes(query);
  });

  if (countEl) {
    const countTemplate = getTranslation("showingCount", "Showing {count} handcrafted items");
    countEl.textContent = countTemplate.replace("{count}", filtered.length);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-products-view">
        <p>${getTranslation("emptyCatalog")}</p>
        <button id="reset-search-btn" class="btn-secondary">${getTranslation("resetSearch")}</button>
      </div>
    `;
    const resetBtn = document.getElementById("reset-search-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        searchQuery = "";
        activeCategory = "all";
        const searchInput = document.getElementById("header-search-input");
        if (searchInput) searchInput.value = "";
        syncShopUrl();
        renderCategoriesBar();
        renderProductsGrid();
      });
    }
    return;
  }

  let html = "";
  filtered.forEach(product => {
    const localizedName = product.name[currentLanguage] || product.name.en;
    const localizedDesc = product.description?.[currentLanguage] || product.description?.en || "";
    const formattedPrice = formatPrice(product.priceLkr);
    const viewLabel = getTranslation("btnViewDetails");
    const weight = product.weight || "250g";

    const catName = getCategoryName(product.category);

    const ratingStats = getProductRatingStats(product.id);
    const ratingBadgeHtml = ratingStats.count > 0
      ? `<div class="card-rating-inline"><span class="star-symbol">${icon("star", 13, "star-filled", true)}</span> <span class="tabular font-semibold">${ratingStats.average}</span> <span class="rating-count">(${ratingStats.count})</span></div>`
      : '';

    html += `
      <a class="product-card" href="product.html?id=${encodeURIComponent(product.id)}" style="${paletteStyle(product)}">
        <div class="card-media-wrapper">
          <img
            src="${cld(product.image, 700, true)}"
            alt="${localizedName}"
            class="card-media-img"
            loading="lazy"
            onerror="imgFallback(this)"
          />
          <span class="card-weight-badge tabular">${weight}</span>
          ${product.tag ? `<span class="card-tag-badge">${product.tag}</span>` : ""}
        </div>
        <div class="card-body">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="card-category-tag">${catName}</span>
            ${ratingBadgeHtml}
          </div>
          <h3 class="card-title">${localizedName}</h3>
          <p class="card-excerpt">${localizedDesc}</p>
          <div class="card-footer-row">
            <div class="card-price-block">
              <span class="card-price-label">${getTranslation("priceLabel")}</span>
              <span class="card-price-value tabular">${formattedPrice}</span>
            </div>
            <span class="card-action-btn">
              <span>${viewLabel}</span> ${icon("arrow-right", 14)}
            </span>
          </div>
        </div>
      </a>
    `;
  });

  grid.innerHTML = html;
}


DG.ready(() => {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  if (cat && SHOP_CATEGORY_IDS.includes(cat)) activeCategory = cat;

  const q = params.get("q");
  if (q) {
    searchQuery = q;
    const input = document.getElementById("header-search-input");
    if (input) input.value = q;
    document.getElementById("search-drawer")?.classList.add("open");
  }

  window.addEventListener("dg:search", (e) => {
    searchQuery = e.detail.query;
    syncShopUrl();
    renderProductsGrid();
  });
  window.addEventListener("dg:rerender", () => {
    renderCategoriesBar();
    renderProductsGrid();
  });
});
