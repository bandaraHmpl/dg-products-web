/* ============================================================
   admin.js: admin.html only (customers never download this file)
   NOTE: the password below is visible to anyone who opens this file.
   It is only a convenience lock. Replace it with Firebase Auth before
   going live (see the notes that came with this split).
   ============================================================ */

const ADMIN_PASSWORD = "dgadmin2026";
let adminReviewsFilter = "all";

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
    showToast("Admin access granted!");
  } else {
    showToast("Incorrect password. Please try again.");
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
}

function switchAdminTab(tab) {
  document.querySelectorAll(".dashboard-tab-btn").forEach(btn => {
    if (btn.getAttribute("data-tab") === tab) {
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
        <p>No customer reviews found matching filter "${adminReviewsFilter}".</p>
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
    const statusLabel = r.status.charAt(0).toUpperCase() + r.status.slice(1);
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
          <span>Review ID: <code style="font-size:0.75rem;">${r.id}</code></span>
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
  if (confirm("Are you sure you want to permanently delete this customer review?")) {
    productReviews = productReviews.filter(r => r.id !== id);
    saveProductReviews();
    renderAdminReviewsList();
        showToast(getTranslation("adminReviewDeletedToast", "Review permanently deleted."));
  }
};

function renderAdminProductsList() {
  const tbody = document.getElementById("admin-products-table-body");
  if (!tbody) return;

  let html = "";
  productsInventory.forEach((p, index) => {
    html += `
      <tr>
        <td>
          <img src="${cld(p.image, 120, true)}" class="admin-product-thumb" alt="Product" onerror="imgFallback(this)" />
        </td>
        <td>
          <strong>${p.name.en}</strong><br>
          <small style="color:#718096;">${p.name.si || ''}</small>
        </td>
        <td><span style="text-transform: capitalize;">${p.category}</span></td>
        <td class="tabular">${p.weight}</td>
        <td class="tabular font-semibold">Rs. ${p.priceLkr.toLocaleString()}</td>
        <td>
          <div class="admin-actions-cell">
            <button class="btn-icon-action edit" onclick="editProductInAdmin('${p.id}')">${icon("square-pen", 14)} Edit</button>
            <button class="btn-icon-action delete" onclick="deleteProductInAdmin('${p.id}')">${icon("trash-2", 14)} Delete</button>
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

  document.getElementById("admin-form-title").textContent = "Edit Product: " + product.name.en;
  switchAdminTab("form");
};

window.deleteProductInAdmin = function(id) {
  if (confirm("Are you sure you want to delete this product from your inventory?")) {
    productsInventory = productsInventory.filter(p => p.id !== id);
    saveProductsInventory();
    renderAdminProductsList();
      showToast("Product deleted successfully.");
  }
};

function resetAdminProductForm() {
  document.getElementById("form-prod-id").value = "";
  document.getElementById("admin-product-edit-form").reset();
  document.getElementById("admin-form-title").textContent = "Add New Product";
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
    showToast("Product updated successfully!");
  } else {
    productsInventory.push(productData);
    showToast("New product added to inventory!");
  }

  saveProductsInventory();
  resetAdminProductForm();
  switchAdminTab("list");
}

function resetToDefaultInventory() {
  if (confirm("Restore original DG Products catalog? Any custom modifications will be reset.")) {
    productsInventory = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
    saveProductsInventory();
    renderAdminProductsList();
      showToast("Restored factory catalog successfully.");
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

  document.querySelectorAll(".review-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".review-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      adminReviewsFilter = btn.getAttribute("data-filter") || "all";
      renderAdminReviewsList();
    });
  });

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