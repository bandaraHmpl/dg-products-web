/* ============================================================
   admin.js: admin.html only (customers never download this file)
   NOTE: the password below is visible to anyone who opens this file.
   It is only a convenience lock. Replace it with Firebase Auth before
   going live (see the notes that came with this split).
   ============================================================ */

const ADMIN_PASSWORD = "dgadmin2026";
let adminReviewsFilter = "all";

/* ---------- Language helpers (language is shared with the whole site) ---------- */
const AT = (k, f = "") => getTranslation("a_" + k, f);
function atf(k, vars = {}) { return AT(k).replace(/\{(\w+)\}/g, (m, n) => (vars[n] !== undefined ? vars[n] : m)); }
function adminMoney(n) {
  const pre = currentLanguage === "si" ? "රු." : currentLanguage === "ta" ? "ரூ." : "Rs.";
  return `${pre} ${Number(n).toLocaleString()}`;
}
let adminEditingName = "";
function refreshFormTitle() {
  const t = document.getElementById("admin-form-title");
  if (t) t.textContent = adminEditingName ? atf("formEdit", { name: adminEditingName }) : AT("formAdd");
}
function adminRerender() {
  renderAdminProductsList();
  updateAdminPendingBadge();
  const rv = document.getElementById("admin-tab-reviews-content");
  if (rv && rv.style.display === "block") renderAdminReviewsList();
  refreshFormTitle();
  setAdminNav(!!document.querySelector(".admin-dashboard-modal")?.classList.contains("nav-open"));
  document.getElementById("admin-new-product-btn")?.setAttribute("aria-label", AT("addNew"));
  document.getElementById("admin-close-dashboard-btn")?.setAttribute("aria-label", getTranslation("adminLogout"));
  document.querySelectorAll(".admin-lang").forEach(g => g.setAttribute("aria-label", AT("langLabel")));
}

/* ---------- Mobile drawer (hamburger) ---------- */
function setAdminNav(open) {
  const modal = document.querySelector(".admin-dashboard-modal");
  const btn = document.getElementById("admin-menu-btn");
  if (!modal) return;
  modal.classList.toggle("nav-open", open);
  if (btn) {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? AT("menuClose") : AT("menuOpen"));
  }
}

/* ---------- Summary cards on the inventory tab ---------- */
function renderAdminStats() {
  const box = document.getElementById("admin-stats");
  if (!box) return;
  const total = productsInventory.length;
  const available = productsInventory.filter(isProductAvailable).length;
  const pending = productReviews.filter(r => r.status === "pending").length;
  const cards = [
    { icon: "package", value: total, label: AT("statTotal"), go: "list" },
    { icon: "check", value: available, label: AT("statOpen"), go: "list" },
    { icon: "star", value: pending, label: pending === 1 ? AT("statReview1") : AT("statReviewN"), go: "reviews" }
  ];
  box.innerHTML = cards.map(c => `
    <button type="button" class="admin-stat-card" data-go="${c.go}">
      <span class="admin-stat-icon">${icon(c.icon, 20)}</span>
      <span class="admin-stat-text"><span class="admin-stat-value tabular">${c.value}</span><span class="admin-stat-label">${c.label}</span></span>
    </button>`).join("");
}

function showAdminLoginPrompt() {
  const modal = document.getElementById("admin-login-modal-backdrop");
  if (!modal) return;
  modal.classList.add("open");
  const passInput = document.getElementById("admin-password-input");
  if (passInput) {
    passInput.value = "";
    setTimeout(() => passInput.focus(), 100);
  }
}

function closeAdminLoginPrompt() {
  const modal = document.getElementById("admin-login-modal-backdrop");
  if (modal) modal.classList.remove("open");
}

function verifyAdminPassword() {
  const passInput = document.getElementById("admin-password-input");
  if (!passInput) return;

  if (passInput.value.trim() === ADMIN_PASSWORD) {
    closeAdminLoginPrompt();
    openAdminDashboard();
    showToast(AT("toastGranted"));
  } else {
    showToast(AT("toastWrong"));
    passInput.value = "";
    passInput.focus();
  }
}

function openAdminDashboard() {
  const dashboard = document.getElementById("admin-dashboard-backdrop");
  if (!dashboard) return;
  dashboard.classList.add("open");
  updateAdminPendingBadge();
  renderAdminProductsList();
  switchAdminTab("list");
}

function closeAdminDashboard() {
  const dashboard = document.getElementById("admin-dashboard-backdrop");
  if (dashboard) dashboard.classList.remove("open");
  setAdminNav(false);
}

function switchAdminTab(tab) {
  setAdminNav(false);
  const contentArea = document.querySelector(".dashboard-content-area");
  if (contentArea) contentArea.scrollTop = 0;
  document.querySelectorAll(".dashboard-tab-btn").forEach(btn => {
    if (btn.getAttribute("data-tab") === (tab === "form" ? "list" : tab)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const listTab = document.getElementById("admin-tab-list-content");
  const formTab = document.getElementById("admin-tab-form-content");
  const reviewsTab = document.getElementById("admin-tab-reviews-content");

  if (tab === "list") {
    if (listTab) listTab.style.display = "block";
    if (formTab) formTab.style.display = "none";
    if (reviewsTab) reviewsTab.style.display = "none";
    renderAdminProductsList();
  } else if (tab === "reviews") {
    if (listTab) listTab.style.display = "none";
    if (formTab) formTab.style.display = "none";
    if (reviewsTab) reviewsTab.style.display = "block";
    renderAdminReviewsList();
  } else {
    if (listTab) listTab.style.display = "none";
    if (formTab) formTab.style.display = "block";
    if (reviewsTab) reviewsTab.style.display = "none";
  }
}

function updateAdminPendingBadge() {
  const pendingCount = productReviews.filter(r => r.status === "pending").length;
  const badge = document.getElementById("admin-pending-review-badge");
  if (badge) {
    badge.textContent = pendingCount;
    badge.style.display = pendingCount > 0 ? "inline-flex" : "none";
  }

  renderAdminStats();

  const countAll = document.getElementById("count-all-reviews");
  const countPending = document.getElementById("count-pending-reviews");
  const countApproved = document.getElementById("count-approved-reviews");
  const countRejected = document.getElementById("count-rejected-reviews");

  if (countAll) countAll.textContent = productReviews.length;
  if (countPending) countPending.textContent = pendingCount;
  if (countApproved) countApproved.textContent = productReviews.filter(r => r.status === "approved").length;
  if (countRejected) countRejected.textContent = productReviews.filter(r => r.status === "rejected").length;
}

function renderAdminReviewsList() {
  const container = document.getElementById("admin-reviews-list-container");
  if (!container) return;

  updateAdminPendingBadge();

  let filtered = productReviews.slice();
  if (adminReviewsFilter !== "all") {
    filtered = filtered.filter(r => r.status === adminReviewsFilter);
  }

  filtered.sort((a, b) => {
    if (a.status === "pending" && b.status !== "pending") return -1;
    if (b.status === "pending" && a.status !== "pending") return 1;
    return (b.id || "").localeCompare(a.id || "");
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-reviews-box" style="padding:40px 20px;">
        <p>${AT("revNone")}</p>
      </div>
    `;
    return;
  }

  let html = "";
  filtered.forEach(r => {
    const matchedProduct = productsInventory.find(p => p.id === r.productId);
    const productName = matchedProduct
      ? (matchedProduct.name[currentLanguage] || matchedProduct.name.en)
      : (r.productId || "DG Product");

    const stars = renderStarsHtml(r.rating);
    const itemClass = `is-${r.status}`;
    const statusLabel = AT("f" + r.status.charAt(0).toUpperCase() + r.status.slice(1), r.status);
    const locText = r.location ? `(${r.location})` : "";

    const approveBtnText = getTranslation("adminBtnApprove", "Approve");
    const rejectBtnText = getTranslation("adminBtnReject", "Reject");
    const deleteBtnText = getTranslation("adminBtnDelete", "Delete");

    html += `
      <div class="admin-review-item ${itemClass}">
        <div class="admin-review-header">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <span class="admin-review-product-tag">${icon("package", 14)} ${productName}</span>
            <span class="admin-review-status-pill status-${r.status}">${statusLabel}</span>
          </div>
          <span class="tabular" style="font-size:0.8rem; color:var(--color-text-light);">${r.date || ''}</span>
        </div>

        <div class="admin-review-content-box">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:4px;">
            <strong style="color:var(--color-brand-deep); font-size:0.95rem;">${r.reviewerName}</strong>
            <small style="color:var(--color-text-light);">${locText}</small>
            <span style="color:#f59e0b; font-size:0.9rem;">${stars}</span>
          </div>
          <h5 class="admin-review-title">${r.title}</h5>
          <p class="admin-review-body">${r.comment}</p>
        </div>

        <div class="admin-review-actions-bar">
          <span>${AT("revId")} <code style="font-size:0.75rem;">${r.id}</code></span>
          <div class="admin-review-btn-group">
            ${r.status !== "approved" ? `
              <button class="btn-mod-action approve" onclick="approveReview('${r.id}')">
                ${icon("check", 14)} ${approveBtnText}
              </button>
            ` : ""}
            ${r.status !== "rejected" ? `
              <button class="btn-mod-action reject" onclick="rejectReview('${r.id}')">
                ${icon("x", 14)} ${rejectBtnText}
              </button>
            ` : ""}
            <button class="btn-mod-action delete" onclick="deleteReview('${r.id}')">
              ${icon("trash-2", 14)} ${deleteBtnText}
            </button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

window.approveReview = function(id) {
  const rev = productReviews.find(r => r.id === id);
  if (!rev) return;
  rev.status = "approved";
  saveProductReviews();
  renderAdminReviewsList();
  showToast(getTranslation("adminReviewApprovedToast", "Review approved and published!"));
};

window.rejectReview = function(id) {
  const rev = productReviews.find(r => r.id === id);
  if (!rev) return;
  rev.status = "rejected";
  saveProductReviews();
  renderAdminReviewsList();
  showToast(getTranslation("adminReviewRejectedToast", "Review rejected."));
};

window.deleteReview = function(id) {
  if (confirm(AT("confirmDelReview"))) {
    productReviews = productReviews.filter(r => r.id !== id);
    saveProductReviews();
    renderAdminReviewsList();
        showToast(getTranslation("adminReviewDeletedToast", "Review permanently deleted."));
  }
};

function renderAdminProductsList() {
  const tbody = document.getElementById("admin-products-table-body");
  if (!tbody) return;

  renderAdminStats();
  // labels shown beside each value when the table turns into cards on phones
  const labels = Array.from(document.querySelectorAll(".admin-table thead th")).map(th => th.textContent.trim());
  const L = i => (labels[i] || "").replace(/"/g, "&quot;");

  const q = (document.getElementById("admin-search")?.value || "").trim().toLowerCase();
  const list = productsInventory.filter(p => !q || [p.name.en, p.name.si, p.category, p.weight].join(" ").toLowerCase().includes(q));
  const countEl = document.getElementById("admin-result-count");
  if (countEl) countEl.textContent = q ? atf("countSome", { n: list.length, total: productsInventory.length }) : atf("countAll", { n: productsInventory.length });
  const emptyEl = document.getElementById("admin-empty");
  if (emptyEl) emptyEl.hidden = list.length > 0;

  let html = "";
  list.forEach((p, index) => {
    const on = isProductAvailable(p);
    html += `
      <tr>
        <td data-label="${L(0)}">
          <img src="${cld(p.image, 120, true)}" class="admin-product-thumb" alt="Product" onerror="imgFallback(this)" />
        </td>
        <td data-label="${L(1)}">
          <strong>${p.name.en}</strong><br>
          <small style="color:#718096;">${p.name.si || ''}</small>
          <label class="admin-switch"><input type="checkbox" data-toggle-id="${p.id}" ${on ? "checked" : ""} aria-label="${AT("switchAria")}" /><span class="admin-switch-track"></span><span class="admin-switch-text">${on ? AT("available") : AT("notAvailable")}</span></label>
        </td>
        <td data-label="${L(2)}"><span style="text-transform: capitalize;">${p.category}</span></td>
        <td class="tabular" data-label="${L(3)}">${p.weight}</td>
        <td class="tabular font-semibold" data-label="${L(4)}">${adminMoney(p.priceLkr)}</td>
        <td data-label="${L(5)}">
          <div class="admin-actions-cell">
            <button class="btn-icon-action edit" onclick="editProductInAdmin('${p.id}')">${icon("square-pen", 14)} ${AT("editBtn")}</button>
            <button class="btn-icon-action delete" onclick="deleteProductInAdmin('${p.id}')">${icon("trash-2", 14)} ${getTranslation("adminBtnDelete", "Delete")}</button>
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

window.editProductInAdmin = function(id) {
  const product = productsInventory.find(p => p.id === id);
  if (!product) return;

  document.getElementById("form-prod-id").value = product.id;
  document.getElementById("form-prod-name-en").value = product.name.en || "";
  document.getElementById("form-prod-name-si").value = product.name.si || "";
  document.getElementById("form-prod-name-ta").value = product.name.ta || "";
  document.getElementById("form-prod-price").value = product.priceLkr || 600;
  document.getElementById("form-prod-weight").value = product.weight || "250g";
  document.getElementById("form-prod-category").value = product.category || "traditional";
  document.getElementById("form-prod-image").value = product.image || "";
  document.getElementById("form-prod-desc-en").value = product.description?.en || "";
  document.getElementById("form-prod-desc-si").value = product.description?.si || "";
  document.getElementById("form-prod-desc-ta").value = product.description?.ta || "";
  document.getElementById("form-prod-addinfo-en").value = product.additionalInfo?.en || "";
  document.getElementById("form-prod-tag").value = product.tag || "";
  document.getElementById("form-prod-palette").value = (Array.isArray(product.colors) && product.colors.length === 4) ? "custom" : (product.palette || "lime");
  paletteFor(product).forEach((c, i) => { document.getElementById("form-prod-c" + (i + 1)).value = c; });
  document.getElementById("form-prod-featured").checked = !!product.featured;
  document.getElementById("form-prod-available").checked = isProductAvailable(product);
  document.getElementById("form-prod-main").checked = !!product.main;

  adminEditingName = product.name.en;
  refreshFormTitle();
  switchAdminTab("form");
};

window.deleteProductInAdmin = function(id) {
  const _p = productsInventory.find(p => p.id === id);
  if (confirm(atf("confirmDelete", { name: _p ? _p.name.en : AT("thisProduct") }))) {
    productsInventory = productsInventory.filter(p => p.id !== id);
    saveProductsInventory();
    renderAdminProductsList();
      showToast(AT("toastDeleted"));
  }
};

function resetAdminProductForm() {
  document.getElementById("form-prod-id").value = "";
  document.getElementById("admin-product-edit-form").reset();
  adminEditingName = "";
  refreshFormTitle();
}

function handleSaveProductForm(e) {
  e.preventDefault();

  const id = document.getElementById("form-prod-id").value.trim() || `dg-${Date.now()}`;
  const nameEn = document.getElementById("form-prod-name-en").value.trim();
  const nameSi = document.getElementById("form-prod-name-si").value.trim() || nameEn;
  const nameTa = document.getElementById("form-prod-name-ta").value.trim() || nameEn;
  const priceLkr = parseInt(document.getElementById("form-prod-price").value, 10) || 500;
  const weight = document.getElementById("form-prod-weight").value.trim() || "250g";
  const category = document.getElementById("form-prod-category").value;
  let image = document.getElementById("form-prod-image").value.trim() || IMAGE_PATHS.product1;   // Cloudinary public ID or URL
  const descEn = document.getElementById("form-prod-desc-en").value.trim();
  const descSi = document.getElementById("form-prod-desc-si").value.trim() || descEn;
  const descTa = document.getElementById("form-prod-desc-ta").value.trim() || descEn;
  const addInfoEn = document.getElementById("form-prod-addinfo-en").value.trim();

  const existingIndex = productsInventory.findIndex(p => p.id === id);

  const productData = {
    id,
    name: { en: nameEn, si: nameSi, ta: nameTa },
    category,
    priceLkr,
    weight,
    image,
    gallery: [image, IMAGE_PATHS.product1, IMAGE_PATHS.product2],
    description: { en: descEn, si: descSi, ta: descTa },
    additionalInfo: { en: addInfoEn, si: addInfoEn, ta: addInfoEn },
    tag: document.getElementById("form-prod-tag").value.trim(),
    palette: document.getElementById("form-prod-palette").value,
    colors: [1, 2, 3, 4].map(i => document.getElementById("form-prod-c" + i).value),
    featured: document.getElementById("form-prod-featured").checked,
    available: document.getElementById("form-prod-available").checked,
    main: document.getElementById("form-prod-main").checked
  };

  if (existingIndex >= 0) {
    productsInventory[existingIndex] = productData;
    showToast(AT("toastUpdated"));
  } else {
    productsInventory.push(productData);
    showToast(AT("toastAdded"));
  }

  saveProductsInventory();
  resetAdminProductForm();
  switchAdminTab("list");
}

function resetToDefaultInventory() {
  if (confirm(AT("confirmReset"))) {
    productsInventory = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
    saveProductsInventory();
    renderAdminProductsList();
      showToast(AT("toastReset"));
  }
}

DG.ready(() => {
  // the login box opens straight away on this page
  showAdminLoginPrompt();

  document.getElementById("admin-login-cancel-btn")?.addEventListener("click", () => DG.go("index.html"));
  document.getElementById("admin-login-submit-btn")?.addEventListener("click", verifyAdminPassword);
  document.getElementById("admin-password-input")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") verifyAdminPassword();
  });
  document.getElementById("admin-close-dashboard-btn")?.addEventListener("click", () => DG.go("index.html"));

  document.querySelectorAll(".dashboard-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");
      if (tab === "form") resetAdminProductForm();
      switchAdminTab(tab);
    });
  });

  const reviewFilterSelect = document.getElementById("admin-review-filter-select");
  // phones: the filter buttons are shown as a dropdown; keep its labels (with counts) in step with the buttons
  const syncReviewFilterSelect = () => {
    if (!reviewFilterSelect) return;
    reviewFilterSelect.innerHTML = [...document.querySelectorAll(".review-filter-btn")].map(b => {
      const f = b.getAttribute("data-filter") || "all";
      return `<option value="${f}"${f === adminReviewsFilter ? " selected" : ""}>${b.textContent.replace(/\s+/g, " ").trim()}</option>`;
    }).join("");
  };
  const setReviewFilter = f => {
    adminReviewsFilter = f || "all";
    document.querySelectorAll(".review-filter-btn").forEach(b => b.classList.toggle("active", (b.getAttribute("data-filter") || "all") === adminReviewsFilter));
    syncReviewFilterSelect();
    renderAdminReviewsList();
  };
  document.querySelectorAll(".review-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => setReviewFilter(btn.getAttribute("data-filter")));
  });
  reviewFilterSelect?.addEventListener("change", () => setReviewFilter(reviewFilterSelect.value));
  const reviewFilterBox = document.querySelector(".admin-review-filters");
  if (reviewFilterBox && reviewFilterSelect) {
    syncReviewFilterSelect();
    new MutationObserver(() => {
      // counts/translations changed → refresh option text (only if it actually differs, avoids loops)
      const labels = [...reviewFilterBox.querySelectorAll(".review-filter-btn")].map(b => b.textContent.replace(/\s+/g, " ").trim());
      const cur = [...reviewFilterSelect.options].map(o => o.textContent);
      if (labels.join("|") !== cur.join("|")) syncReviewFilterSelect();
    }).observe(reviewFilterBox, { childList: true, subtree: true, characterData: true });
  }

  document.getElementById("admin-new-product-btn")?.addEventListener("click", () => {
    resetAdminProductForm();
    switchAdminTab("form");
  });
  document.getElementById("admin-cancel-form-btn")?.addEventListener("click", () => {
    resetAdminProductForm();
    switchAdminTab("list");
  });
  document.getElementById("admin-reset-catalog-btn")?.addEventListener("click", resetToDefaultInventory);
  document.getElementById("admin-product-edit-form")?.addEventListener("submit", handleSaveProductForm);

  updateAdminPendingBadge();

  /* Simple client helpers: search, availability switch, stat shortcuts, back link */
  document.getElementById("admin-search")?.addEventListener("input", renderAdminProductsList);
  document.getElementById("admin-products-table-body")?.addEventListener("change", (e) => {
    const t = e.target.closest("[data-toggle-id]");
    if (!t) return;
    const p = productsInventory.find(x => x.id === t.dataset.toggleId);
    if (!p) return;
    p.available = t.checked;
    saveProductsInventory();
    renderAdminProductsList();
    showToast(t.checked ? AT("toastOn") : AT("toastOff"));
  });
  document.getElementById("admin-stats")?.addEventListener("click", (e) => {
    const b = e.target.closest("[data-go]");
    if (b) switchAdminTab(b.dataset.go);
  });
  document.getElementById("admin-back-btn")?.addEventListener("click", () => { resetAdminProductForm(); switchAdminTab("list"); });

  /* Re-draw every admin section whenever the site language changes */
  window.addEventListener("dg:rerender", adminRerender);

  /* Mobile drawer */
  document.getElementById("admin-menu-btn")?.addEventListener("click", () => {
    const open = !document.querySelector(".admin-dashboard-modal")?.classList.contains("nav-open");
    setAdminNav(open);
  });
  document.getElementById("admin-nav-backdrop")?.addEventListener("click", () => setAdminNav(false));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setAdminNav(false); });
  window.matchMedia("(min-width: 769px)").addEventListener?.("change", (e) => { if (e.matches) setAdminNav(false); });

  /* Admin form: preset colours */
  (function () {
    const sel = document.getElementById("form-prod-palette");
    if (!sel) return;
    sel.addEventListener("change", () => {
      const pal = PRODUCT_PALETTES[sel.value];
      if (!pal) return;
      pal.colors.forEach((c, i) => { document.getElementById("form-prod-c" + (i + 1)).value = c; });
      const tag = document.getElementById("form-prod-tag");
      if (!tag.value) tag.value = pal.tag;
    });
    [1, 2, 3, 4].forEach(i => document.getElementById("form-prod-c" + i).addEventListener("input", () => { sel.value = "custom"; }));
  })();
});