/* ============================================================
   shop.js: shop.html only
   Three views: All products, Available products, Main products.
   Links like  shop.html?filter=available  work too.
   Only available products can be ordered; the rest open a
   friendly "not available right now" message.
   ============================================================ */

let activeFilter = "all";
const SHOP_FILTERS = ["all", "available", "main"];

function productsForFilter(filter) {
  if (filter === "available") return productsInventory.filter(isProductAvailable);
  if (filter === "main") return productsInventory.filter(p => p.main && isProductAvailable(p));
  // "all": products you can order come first
  return [...productsInventory].sort((a, b) => Number(isProductAvailable(b)) - Number(isProductAvailable(a)));
}

// keeps the address bar in step with the tab, so the URL can be shared
function syncShopUrl() {
  try { history.replaceState(null, "", window.location.pathname + (activeFilter !== "all" ? "?filter=" + activeFilter : "")); } catch (e) {}
}

function renderCategoriesBar() {
  const container = document.getElementById("categories-bar-container");
  if (!container) return;

  const tabs = [
    { id: "all", key: "filterAll" },
    { id: "available", key: "filterAvailable" },
    { id: "main", key: "filterMain" }
  ];

  container.innerHTML = `<div class="categories-bar-compact" role="tablist">` + tabs.map(t => `
      <button class="category-pill-btn ${activeFilter === t.id ? "active" : ""}" data-filter="${t.id}" role="tab" aria-selected="${activeFilter === t.id}">
        <span>${getTranslation(t.key)}</span>
        <span class="count-tag">${productsForFilter(t.id).length}</span>
      </button>`).join("") + `</div>` +
    // phones: same filters as a dropdown (the tabs are hidden by CSS on small screens)
    `<select class="mobile-filter-select" aria-label="${getTranslation("filterAll")}">` + tabs.map(t => `
      <option value="${t.id}" ${activeFilter === t.id ? "selected" : ""}>${getTranslation(t.key)} (${productsForFilter(t.id).length})</option>`).join("") + `</select>`;

  container.querySelector(".mobile-filter-select")?.addEventListener("change", e => {
    activeFilter = e.target.value;
    syncShopUrl();
    renderCategoriesBar();
    renderProductsGrid();
  });

  container.querySelectorAll(".category-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeFilter = btn.getAttribute("data-filter");
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

  const filtered = productsForFilter(activeFilter);

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
    document.getElementById("reset-search-btn")?.addEventListener("click", () => {
      activeFilter = "all";
      syncShopUrl();
      renderCategoriesBar();
      renderProductsGrid();
    });
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const localizedName = product.name[currentLanguage] || product.name.en;
    const localizedDesc = product.description?.[currentLanguage] || product.description?.en || "";
    const formattedPrice = formatPrice(product.priceLkr);
    const weight = product.weight || "250g";
    const catName = getCategoryName(product.category);
    const available = isProductAvailable(product);

    const ratingStats = getProductRatingStats(product.id);
    const ratingBadgeHtml = available && ratingStats.count > 0
      ? `<div class="card-rating-inline"><span class="star-symbol">${icon("star", 13, "star-filled", true)}</span> <span class="tabular font-semibold">${ratingStats.average}</span> <span class="rating-count">(${ratingStats.count})</span></div>`
      : "";

    const action = available
      ? `<span class="card-action-btn"><span>${getTranslation("btnViewDetails")}</span> ${icon("arrow-right", 14)}</span>`
      : `<span class="card-unavailable-pill">${icon("frown", 14)} <span>${getTranslation("cardUnavailable")}</span></span>`;

    return `
      <a class="product-card ${available ? "" : "is-unavailable"}" href="product.html?id=${encodeURIComponent(product.id)}" style="${paletteStyle(product)}">
        <div class="card-media-wrapper">
          <img src="${cld(product.image, 700, true)}" alt="${localizedName}" class="card-media-img" loading="lazy" onerror="imgFallback(this)" />
          <span class="card-weight-badge tabular">${weight}</span>
          ${available && product.tag ? `<span class="card-tag-badge">${product.tag}</span>` : ""}
          ${available ? "" : `<span class="card-sad-overlay" aria-hidden="true">${icon("frown", 34)}</span>`}
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
            ${action}
          </div>
        </div>
      </a>`;
  }).join("");
}

DG.ready(() => {
  const f = new URLSearchParams(window.location.search).get("filter");
  if (f && SHOP_FILTERS.includes(f)) activeFilter = f;

  window.addEventListener("dg:rerender", () => {
    renderCategoriesBar();
    renderProductsGrid();
  });
});