/* ============================================================
   product.js: product.html only
   Reads  product.html?id=dg-001  and shows that product.
   Also fills in the page title / description / social tags / Google
   structured data for the product.
   ============================================================ */

let selectedProduct = null;
let currentDetailQuantity = 1;

function renderProductDetail(product) {
  const container = document.getElementById("product-detail-content");
  if (!container) return;

  const localizedName = product.name[currentLanguage] || product.name.en;
  const localizedDesc = product.description?.[currentLanguage] || product.description?.en || "";
  const localizedAddInfo = product.additionalInfo?.[currentLanguage] || product.additionalInfo?.en || "";
  const unitPriceFormatted = formatPrice(product.priceLkr);
  const totalAmountFormatted = formatPrice(product.priceLkr * currentDetailQuantity);

  const catName = getCategoryName(product.category);

  const available = isProductAvailable(product);
  const waUrl = generateWhatsAppOrderUrl(product, currentDetailQuantity);

  const galleryImgs = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image, IMAGE_PATHS.product1, IMAGE_PATHS.product2];

  let thumbsHtml = "";
  galleryImgs.forEach((imgSrc, idx) => {
    thumbsHtml += `
      <div class="detail-thumb ${idx === 0 ? 'active' : ''}" data-img-src="${cld(imgSrc, 1000)}">
        <img src="${cld(imgSrc, 200, true)}" alt="Thumbnail ${idx + 1}" onerror="imgFallback(this)" />
      </div>
    `;
  });

  const ratingStats = getProductRatingStats(product.id);
  const approvedReviews = getApprovedReviewsForProduct(product.id);

  let testimonialsHtml = "";
  if (approvedReviews.length === 0) {
    testimonialsHtml = `
      <div class="no-reviews-box">
        <p>${getTranslation("noReviewsYet")}</p>
      </div>
    `;
  } else {
    approvedReviews.forEach(r => {
      const initial = (r.reviewerName || "U").charAt(0).toUpperCase();
      const stars = renderStarsHtml(r.rating);
      const locText = r.location ? `· ${r.location}` : "";
      testimonialsHtml += `
        <div class="testimonial-card">
          <div class="testimonial-top-row">
            <div class="reviewer-profile">
              <div class="reviewer-avatar-circle">${initial}</div>
              <div>
                <div class="reviewer-name">${r.reviewerName}</div>
                <div class="reviewer-meta">
                  <span class="verified-buyer-tag">${icon("badge-check", 14)} ${getTranslation("verifiedBuyer")}</span>
                  ${locText ? `<span>${locText}</span>` : ""}
                </div>
              </div>
            </div>
            <span class="testimonial-date tabular">${r.date}</span>
          </div>
          <div class="stars-row" style="margin: 6px 0 4px; font-size:1rem;">
            ${stars}
          </div>
          <h4 class="testimonial-title">${r.title}</h4>
          <p class="testimonial-comment">${r.comment}</p>
        </div>
      `;
    });
  }

  container.setAttribute("style", paletteStyle(product));
  container.innerHTML = `
    <a href="shop.html" class="detail-nav-back">
      ${icon("arrow-left", 16)} <span>${getTranslation("pdpBack")}</span>
    </a>

    <div class="pdp-tagbar"><span>${product.tag || ""}</span>${paletteFor(product).map(c => `<i style="background:${c}"></i>`).join("")}</div>
    <div class="detail-grid">
      <div class="detail-gallery">
        <div class="detail-main-image-wrap">
          <img
            id="pdp-main-image"
            src="${cld(product.image, 1000)}"
            alt="${localizedName}"
            class="detail-main-image"
            onerror="imgFallback(this)"
          />
        </div>
        <div class="detail-gallery-thumbs">
          ${thumbsHtml}
        </div>
      </div>

      <div class="detail-info-col">
        <span class="detail-category-kicker">${catName} · ${BRAND_INFO.name}</span>
        <h1 class="detail-title">${localizedName}</h1>

        <div class="detail-price-box">
          <span class="detail-price tabular">${unitPriceFormatted}</span>
          ${available ? `<span class="detail-stock-status">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ${getTranslation("pdpStock")}
          </span>` : `<span class="detail-stock-status is-out">${icon("frown", 14)} ${getTranslation("pdpUnavailable")}</span>`}
        </div>

        ${available ? `
        <div class="detail-option-group">
          <div class="detail-option-title">${getTranslation("pdpSelectWeight")}</div>
          <div>
            <span class="detail-weight-pill active">${product.weight || "250g"}</span>
          </div>
        </div>

        <div class="detail-option-group">
          <div class="detail-option-title">${getTranslation("pdpQuantity")}</div>
          <div class="detail-purchase-row">
            <div class="quantity-stepper">
              <button id="pdp-qty-minus" class="stepper-btn" aria-label="Decrease quantity">${icon("minus", 16)}</button>
              <input id="pdp-qty-input" type="text" class="stepper-input tabular" value="${currentDetailQuantity}" readonly />
              <button id="pdp-qty-plus" class="stepper-btn" aria-label="Increase quantity">${icon("plus", 16)}</button>
            </div>

            <a
              id="pdp-whatsapp-btn"
              href="${waUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-buy-whatsapp"
            >
              <svg class="whatsapp-icon-svg" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 18.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.04 8.04 0 0 1-1.24-4.29c0-4.47 3.64-8.11 8.12-8.11 2.17 0 4.2 1.03 5.73 2.57a8.077 8.077 0 0 1 2.39 5.74c-.01 4.47-3.65 8.1-8.11 8.1zm4.44-6.07c-.24-.12-1.44-.71-1.66-.79-.23-.08-.39-.12-.56.12-.17.24-.64.79-.79.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.95-1.21-.72-.64-1.2-1.43-1.34-1.68-.14-.24-.02-.37.1-.49.11-.11.24-.29.37-.43.12-.15.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.16 0-.43.06-.66.31-.23.24-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.16 1.77 2.7 4.28 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.49-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z"/>
              </svg>
              <span>${getTranslation("btnBuyNowWhatsApp")}</span>
            </a>
          </div>
          <button type="button" id="pdp-share-btn" class="btn-secondary" style="margin-top:14px; font-size:0.85rem; padding:8px 16px;">
            ${icon("share-2", 16)} <span>${getTranslation("btnShareProduct")}</span>
          </button>
        </div>
        ` : `
        <div class="detail-option-group">
          <div class="detail-option-title">${getTranslation("pdpSelectWeight")}</div>
          <div><span class="detail-weight-pill active">${product.weight || "250g"}</span></div>
        </div>
        <div class="oops-card" role="status">
          <div class="oops-face">${icon("frown", 56)}</div>
          <div class="oops-body">
            <h3 class="oops-title">${getTranslation("oopsTitle")}</h3>
            <p class="oops-text">${getTranslation("oopsText")}</p>
            <div class="oops-actions">
              <a href="shop.html?filter=available" class="btn-primary"><span>${getTranslation("oopsBtn")}</span> ${icon("arrow-right", 16)}</a>
              <button type="button" id="pdp-share-btn" class="btn-secondary" style="font-size:0.85rem; padding:8px 16px;">${icon("share-2", 16)} <span>${getTranslation("btnShareProduct")}</span></button>
            </div>
          </div>
        </div>`}

        <div class="detail-sections-container">
          <div class="detail-content-card">
            <h3 class="detail-section-heading">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              ${getTranslation("pdpDescTitle")}
            </h3>
            <div class="detail-prose">
              <p>${localizedDesc}</p>
              <p>${localizedAddInfo}</p>
            </div>
          </div>

          <div class="detail-content-card">
            <h3 class="detail-section-heading">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              ${getTranslation("pdpInfoTitle")}
            </h3>
            <table class="detail-info-table">
              <tbody>
                <tr>
                  <th>${getTranslation("thWeight")}</th>
                  <td class="tabular">${product.weight || "250g"}</td>
                </tr>
                <tr>
                  <th>${getTranslation("thIngredients")}</th>
                  <td>${getTranslation("ingredientsText")}</td>
                </tr>
                <tr>
                  <th>${getTranslation("thSugar")}</th>
                  <td class="tabular">0.07g / 100g</td>
                </tr>
                <tr>
                  <th>${getTranslation("thSalt")}</th>
                  <td class="tabular">7.36g / 100g</td>
                </tr>
                <tr>
                  <th>${getTranslation("thFat")}</th>
                  <td class="tabular">0.67g / 100g</td>
                </tr>
                <tr>
                  <th>${getTranslation("thShelfLife")}</th>
                  <td>${getTranslation("shelfLifeText")}</td>
                </tr>
                <tr>
                  <th>${getTranslation("thStorage")}</th>
                  <td>${getTranslation("storageText")}</td>
                </tr>
                <tr>
                  <th>${getTranslation("thOrigin")}</th>
                  <td>${getTranslation("originText")}</td>
                </tr>
                <tr>
                  <th>${getTranslation("thRegNo")}</th>
                  <td class="tabular">${getTranslation("regNoText")}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="detail-content-card pdp-reviews-container">
            <div class="reviews-header-row">
              <div>
                <h3 class="detail-section-heading" style="margin-bottom:4px;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  ${getTranslation("reviewsTitle")}
                </h3>
                <p style="font-size:0.85rem; color:var(--color-text-muted);">
                  ${getTranslation("reviewsBasedOn").replace("{count}", ratingStats.count)}
                </p>
              </div>
              <button id="pdp-toggle-write-review-btn" class="btn-secondary" style="font-size:0.85rem; padding:8px 16px;">
                ${icon("square-pen", 16)} <span>${getTranslation("btnWriteReview")}</span>
              </button>
            </div>

            <div class="reviews-summary-grid">
              <div class="rating-big-score-box">
                <span class="big-rating-number tabular">${ratingStats.average}</span>
                <div class="stars-row">
                  ${renderStarsHtml(Math.round(ratingStats.average))}
                </div>
                <span class="rating-subtext tabular">${ratingStats.count} ${getTranslation("verifiedBuyer")}s</span>
              </div>

              <div class="rating-bars-breakdown">
                ${[5, 4, 3, 2, 1].map(stars => {
                  const count = ratingStats.breakdown[stars] || 0;
                  const pct = ratingStats.count > 0 ? Math.round((count / ratingStats.count) * 100) : 0;
                  return `
                    <div class="rating-bar-line">
                      <span class="rating-bar-label">${stars} ${icon("star", 12, "star-filled", true)}</span>
                      <div class="rating-bar-track">
                        <div class="rating-bar-fill" style="width: ${pct}%;"></div>
                      </div>
                      <span class="rating-bar-count tabular">${count}</span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <div id="pdp-write-review-card" class="write-review-card">
              <h4 style="font-weight:700; font-size:1.05rem; margin-bottom:16px; color:var(--color-brand-deep);">
                ${getTranslation("reviewModalTitle", "Share Your Experience")}
              </h4>
              <form id="pdp-new-review-form">
                <input type="hidden" id="rev-form-product-id" value="${product.id}" />

                <div class="form-group">
                  <label class="form-label">${getTranslation("lblYourRating")}</label>
                  <div class="star-rating-interactive" id="interactive-star-picker">
                    <button type="button" class="star-input-btn selected" data-star="1" aria-label="1 star">${icon("star", 28, "star-filled", true)}</button>
                    <button type="button" class="star-input-btn selected" data-star="2" aria-label="2 stars">${icon("star", 28, "star-filled", true)}</button>
                    <button type="button" class="star-input-btn selected" data-star="3" aria-label="3 stars">${icon("star", 28, "star-filled", true)}</button>
                    <button type="button" class="star-input-btn selected" data-star="4" aria-label="4 stars">${icon("star", 28, "star-filled", true)}</button>
                    <button type="button" class="star-input-btn selected" data-star="5" aria-label="5 stars">${icon("star", 28, "star-filled", true)}</button>
                    <span id="star-picker-hint" class="star-rating-hint">5 - Excellent</span>
                  </div>
                  <input type="hidden" id="rev-form-rating" value="5" />
                </div>

                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:14px;">
                  <div class="form-group">
                    <label class="form-label" for="rev-form-name">${getTranslation("lblReviewerName")}</label>
                    <input type="text" id="rev-form-name" class="form-control" required placeholder="e.g. Kasun Fernando" />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="rev-form-location">${getTranslation("lblReviewerLocation")}</label>
                    <input type="text" id="rev-form-location" class="form-control" placeholder="e.g. Colombo, Kandy" />
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="rev-form-title">${getTranslation("lblReviewTitle")}</label>
                  <input type="text" id="rev-form-title" class="form-control" required placeholder="e.g. Authentic traditional flavor, truly delicious!" />
                </div>

                <div class="form-group">
                  <label class="form-label" for="rev-form-comment">${getTranslation("lblReviewComment")}</label>
                  <textarea id="rev-form-comment" class="form-control" rows="3" required placeholder="How did you enjoy the flavor, aroma, texture, and packaging?"></textarea>
                </div>

                <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:16px;">
                  <button type="button" id="rev-form-cancel-btn" class="btn-secondary" style="font-size:0.85rem; padding:8px 16px;">
                    ${getTranslation("btnCancelReview")}
                  </button>
                  <button type="submit" class="btn-primary" style="font-size:0.85rem; padding:8px 20px;">
                    ${getTranslation("btnSubmitReview")}
                  </button>
                </div>
              </form>
            </div>

            <div class="testimonials-list">
              ${testimonialsHtml}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("pdp-share-btn")?.addEventListener("click", () => shareProduct(product));

  container.querySelectorAll(".detail-thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
      container.querySelectorAll(".detail-thumb").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
      const newSrc = thumb.getAttribute("data-img-src");
      const mainImg = document.getElementById("pdp-main-image");
      if (mainImg) mainImg.src = newSrc;
    });
  });

  const qtyInput = document.getElementById("pdp-qty-input");
  const minusBtn = document.getElementById("pdp-qty-minus");
  const plusBtn = document.getElementById("pdp-qty-plus");
  const waBtn = document.getElementById("pdp-whatsapp-btn");

  minusBtn?.addEventListener("click", () => {
    if (currentDetailQuantity > 1) {
      currentDetailQuantity--;
      qtyInput.value = currentDetailQuantity;
      waBtn.href = generateWhatsAppOrderUrl(product, currentDetailQuantity);
    }
  });

  plusBtn?.addEventListener("click", () => {
    if (currentDetailQuantity < 50) {
      currentDetailQuantity++;
      qtyInput.value = currentDetailQuantity;
      waBtn.href = generateWhatsAppOrderUrl(product, currentDetailQuantity);
    }
  });

  const toggleReviewBtn = document.getElementById("pdp-toggle-write-review-btn");
  const writeReviewCard = document.getElementById("pdp-write-review-card");
  const cancelReviewBtn = document.getElementById("rev-form-cancel-btn");
  const reviewForm = document.getElementById("pdp-new-review-form");

  toggleReviewBtn?.addEventListener("click", () => {
    writeReviewCard?.classList.toggle("open");
    if (writeReviewCard?.classList.contains("open")) {
      document.getElementById("rev-form-name")?.focus();
    }
  });

  const starBtns = container.querySelectorAll(".star-input-btn");
  const starInput = document.getElementById("rev-form-rating");
  const starHint = document.getElementById("star-picker-hint");
  const ratingLabels = {
    1: "1 - Poor",
    2: "2 - Fair",
    3: "3 - Average",
    4: "4 - Very Good",
    5: "5 - Excellent"
  };

  const resetStarPicker = () => {
    if (starInput) starInput.value = 5;
    starBtns.forEach(b => {
      b.classList.add("selected");
      b.classList.remove("hovered");
    });
    if (starHint) starHint.textContent = ratingLabels[5];
  };

  cancelReviewBtn?.addEventListener("click", () => {
    writeReviewCard?.classList.remove("open");
    reviewForm?.reset();
    resetStarPicker();
  });

  starBtns.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      const val = parseInt(btn.getAttribute("data-star"), 10);
      starBtns.forEach(b => {
        const s = parseInt(b.getAttribute("data-star"), 10);
        if (s <= val) b.classList.add("hovered");
        else b.classList.remove("hovered");
      });
      if (starHint) starHint.textContent = ratingLabels[val] || `${val} Stars`;
    });

    btn.addEventListener("mouseleave", () => {
      starBtns.forEach(b => b.classList.remove("hovered"));
      const currentVal = parseInt(starInput?.value || "5", 10);
      if (starHint) starHint.textContent = ratingLabels[currentVal] || `${currentVal} Stars`;
    });

    btn.addEventListener("click", () => {
      const val = parseInt(btn.getAttribute("data-star"), 10);
      if (starInput) starInput.value = val;
      starBtns.forEach(b => {
        const s = parseInt(b.getAttribute("data-star"), 10);
        if (s <= val) b.classList.add("selected");
        else b.classList.remove("selected");
      });
      if (starHint) starHint.textContent = ratingLabels[val] || `${val} Stars`;
    });
  });

  reviewForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const reviewerName = document.getElementById("rev-form-name")?.value.trim();
    const location = document.getElementById("rev-form-location")?.value.trim() || "";
    const title = document.getElementById("rev-form-title")?.value.trim();
    const comment = document.getElementById("rev-form-comment")?.value.trim();
    const rating = parseInt(document.getElementById("rev-form-rating")?.value || "5", 10);

    const now = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formattedDate = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

    const newReview = {
      id: `rev-${Date.now()}`,
      productId: product.id,
      reviewerName,
      location,
      rating,
      title,
      comment,
      date: formattedDate,
      status: "pending"
    };

    productReviews.push(newReview);
    saveProductReviews();

    writeReviewCard?.classList.remove("open");
    reviewForm.reset();
    resetStarPicker();

    showToast(getTranslation("reviewPendingNotice"));
  });
}

function generateWhatsAppOrderUrl(product, quantity = 1) {
  const localizedName = product.name[currentLanguage] || product.name.en;
  const weight = product.weight || "250g";
  const unitPriceFormatted = formatPrice(product.priceLkr);
  const totalAmountFormatted = formatPrice(product.priceLkr * quantity);

  const greeting = getTranslation("waOrderHello");
  const lblItem = getTranslation("waItem");
  const lblWeight = getTranslation("waWeight");
  const lblQty = getTranslation("waQty");
  const lblPrice = getTranslation("waPrice");
  const lblTotal = getTranslation("waTotal");
  const prompt = getTranslation("waPrompt");

  const messageText =
`${greeting}

• ${lblItem}: ${localizedName}
• ${lblWeight}: ${weight}
• ${lblQty}: ${quantity}
• ${lblPrice}: ${unitPriceFormatted}
• ${lblTotal}: ${totalAmountFormatted}

${prompt}

(Brand: ${BRAND_INFO.name})`;

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(messageText)}`;
}

/* Link to one product (always the clean  product.html?id=...  form) */
function productUrl(product) {
  return new URL("product.html?id=" + encodeURIComponent(product.id), window.location.href).href;
}

/* Share button: phone share sheet when available, otherwise WhatsApp */
async function shareProduct(product) {
  const name = product.name[currentLanguage] || product.name.en;
  const url = productUrl(product);
  const text = getTranslation("shareText") + " " + name;
  if (navigator.share) {
    try { await navigator.share({ title: name, text, url }); } catch (e) { /* cancelled */ }
    return;
  }
  window.open("https://wa.me/?text=" + encodeURIComponent(text + "\n" + url), "_blank", "noopener");
}

/* ---------- SEO / social tags ---------- */
function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function updateProductMeta(product) {
  const name = product.name[currentLanguage] || product.name.en;
  const desc = (product.description?.[currentLanguage] || product.description?.en || "").slice(0, 160);
  const url = productUrl(product);
  const image = new URL(cld(product.image, 1200), window.location.href).href;

  document.title = `${name} | ${BRAND_INFO.name}`;
  upsertMeta("name", "description", desc);
  upsertMeta("property", "og:title", `${name} | ${BRAND_INFO.name}`);
  upsertMeta("property", "og:description", desc);
  upsertMeta("property", "og:image", image);
  upsertMeta("property", "og:url", url);

  let canon = document.head.querySelector('link[rel="canonical"]');
  if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
  canon.href = url;

  // Google "product" rich result data
  const stats = getProductRatingStats(product.id);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    image: [image],
    description: desc,
    brand: { "@type": "Brand", name: BRAND_INFO.name },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "LKR",
      price: String(product.priceLkr),
      availability: isProductAvailable(product) ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    }
  };
  if (stats.count > 0) {
    ld.aggregateRating = { "@type": "AggregateRating", ratingValue: stats.average, reviewCount: stats.count };
  }
  let script = document.getElementById("product-jsonld");
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "product-jsonld";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(ld);
}

function renderProductPage() {
  const container = document.getElementById("product-detail-content");
  if (!container) return;

  if (!selectedProduct) {
    document.title = "Product not found | " + BRAND_INFO.name;
    upsertMeta("name", "robots", "noindex");
    container.removeAttribute("style");
    container.innerHTML = `
      <a href="shop.html" class="detail-nav-back">${icon("arrow-left", 16)} <span>${getTranslation("pdpBack")}</span></a>
      <div class="empty-products-view"><p>${getTranslation("pdpNotFound")}</p></div>`;
    return;
  }
  renderProductDetail(selectedProduct);
  updateProductMeta(selectedProduct);
}

DG.ready(() => {
  const id = new URLSearchParams(window.location.search).get("id");
  selectedProduct = productsInventory.find(p => p.id === id) || null;
  window.addEventListener("dg:rerender", renderProductPage);
});