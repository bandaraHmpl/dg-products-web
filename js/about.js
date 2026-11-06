/* ============================================================
   about.js: about.html only
   Certificates section. To add a certificate, add an entry to
   CERTIFICATES and put the scan/photo in images/certificates/.
   ============================================================ */

const CERTIFICATES = [
  { image: "images/certificates/registration.jpg", titleKey: "certRegTitle", numberKey: "regNoText", labelKey: "certRegNo" },
  { image: "images/certificates/business.jpg",     titleKey: "certSecondTitle", noteKey: "certSecondNote" }
];

function renderCertificates() {
  const grid = document.getElementById("cert-grid");
  if (!grid) return;

  grid.innerHTML = CERTIFICATES.map((c, i) => {
    const title = getTranslation(c.titleKey);
    const meta = c.numberKey
      ? `<p class="cert-meta"><span>${getTranslation(c.labelKey)}</span> <strong class="tabular">${getTranslation(c.numberKey)}</strong></p>`
      : `<p class="cert-meta"><span>${getTranslation(c.noteKey)}</span></p>`;
    return `
      <figure class="cert-card" data-i="${i}">
        <button type="button" class="cert-frame" aria-label="${title}">
          <img src="${c.image}" alt="${title}" loading="lazy" />
          <span class="cert-placeholder">
            ${icon("file-text", 40)}
            <span>${getTranslation("certComingSoon")}</span>
          </span>
        </button>
        <figcaption><h3 class="cert-title">${title}</h3>${meta}</figcaption>
      </figure>`;
  }).join("");

  grid.querySelectorAll(".cert-card").forEach(card => {
    const img = card.querySelector("img");
    const frame = card.querySelector(".cert-frame");
    const ok = () => frame.classList.add("has-image");
    img.addEventListener("load", ok);
    img.addEventListener("error", () => { img.remove(); });
    if (img.complete && img.naturalWidth > 0) ok();
    frame.addEventListener("click", () => {
      if (frame.classList.contains("has-image")) openCertLightbox(img.src, img.alt);
    });
  });
}

function openCertLightbox(src, alt) {
  const box = document.createElement("div");
  box.className = "cert-lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.innerHTML = `<button type="button" class="cert-lightbox-close" aria-label="${getTranslation("certClose")}">${icon("x", 22)}</button><img src="${src}" alt="${alt}" />`;
  const close = () => { box.remove(); document.removeEventListener("keydown", onKey); };
  const onKey = e => { if (e.key === "Escape") close(); };
  box.addEventListener("click", close);
  document.addEventListener("keydown", onKey);
  document.body.appendChild(box);
  box.querySelector("button").focus();
}

DG.ready(() => {
  renderCertificates();
  window.addEventListener("dg:rerender", renderCertificates);
});
