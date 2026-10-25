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

// 1 USD = 305 LKR
const EXCHANGE_RATE_USD_TO_LKR = 305;

// International format, no "+" or leading zero
const WHATSAPP_PHONE_NUMBER = "94752264199";

// Client-side only, not real security
const ADMIN_PASSWORD = "dgadmin2026";

const BRAND_INFO = {
  name: "DG PRODUCTS",
  tagline: "ekak hadaganna",
  domain: "lenudehi.lk",
  email: "dgproducts.dg@gmail.com",
  phoneDisplay: "075 226 4199",
  address: "Galbokka, Hewanwatta, Mahiyanganaya, Sri Lanka",
  regNo: "U/1/6/රෙදි/727"
};

const IMAGE_PATHS = {
  logoPng: "images/logo.png",
  logoJpeg: "images/dg-logo.jpeg",
  product1: "images/product-1.jpg",
  product2: "images/product-2.jpg",
  product3: "images/product-3.jpg",
  product4: "images/product-4.jpg",
  product5: "images/product-5.jpg",
  product6: "images/product-6.jpg",
  product7: "images/product-7.jpg",
  heroLimes: "images/hero-limes.jpg"
};

const TRANSLATIONS = {
  en: {

    navHome: "Home",
    navAbout: "About Us",
    navShop: "Shop",
    navContact: "Contact Us",
    searchPlaceholder: "Search lemon & lime products...",
    searchButton: "Search",

    brandName: "DG PRODUCTS",
    brandTagline: "ekak hadaganna",
    brandDomain: "lenudehi.lk",
    heroKicker: "Authentic Sri Lankan Heritage",
    heroTitlePrefix: "Traditional Pure",
    heroTitleAccent: "Ceylon Lunu Dehi",
    heroTitleSuffix: "& Citrus Delights",
    heroSubtitle: "Handcrafted from sun-ripened Mahiyanganaya limes, natural sea salt, and pure Ceylon spices. Free from artificial preservatives.",
    btnShopNow: "Shop Our Lime Pickles",
    btnLearnMore: "Our Traditional Story",
    heroTrustSun: "100% Sun-Cured",
    heroTrustSpices: "Pure Ceylon Spices",
    heroTrustNoChem: "Zero Artificial Chemicals",
    heroBadgeTitle: "Authentic Mahiyanganaya Recipe",
    heroBadgeDesc: "Aged to perfection in glass jars",

    aboutKicker: "Our Roots & Craft",
    aboutTitle: "Bringing Sri Lanka's Richest Lime Traditions to Your Table",
    aboutPara1: "DG PRODUCTS was founded in Mahiyanganaya with a simple passion: preserving the authentic heritage of traditional Ceylon Lunu Dehi (Salted Lime Pickle). We hand-select freshly harvested, thin-skinned citrus limes grown in lush tropical groves.",
    aboutPara2: "Every batch is prepared with ancient sun-curing wisdom, steeped in pure solar salt, chili flakes, and aromatic spices until every lime segment attains an intensely rich, tangy, and digestive flavor profile that elevates any Sri Lankan meal.",
    aboutFeat1Title: "Natural Solar Salt Aging",
    aboutFeat1Desc: "Slow cured under direct sunlight to unlock authentic medicinal goodness and depth.",
    aboutFeat2Title: "No Preservatives",
    aboutFeat2Desc: "Crafted strictly with Lime, Salt, Sugar, and Chili flakes without synthetic colors or binders.",

    shopKicker: "Product Catalog",
    shopTitle: "Artisanal Lime & Pickle Collection",
    shopSubtitle: "Every product is meticulously weighed, labeled, and sealed for export-grade freshness.",
    categoriesLabel: "Categories",
    catAll: "All Pickles",
    catTraditional: "Traditional Lunu Dehi",
    catSpiced: "Spiced & Seasoned",
    catSpecial: "Value Packs & Jars",
    showingCount: "Showing {count} handcrafted items",
    priceLabel: "Price",
    weightLabel: "Weight",
    btnViewDetails: "View & Order",
    emptyCatalog: "No products match your current search or category filter.",
    resetSearch: "Clear Filters",

    pdpBack: "Back to Catalog",
    pdpStock: "In Stock & Freshly Sealed",
    pdpSelectWeight: "Available Weight:",
    pdpQuantity: "Quantity:",
    btnBuyNowWhatsApp: "Buy Now via WhatsApp",
    pdpDescTitle: "Product Overview & Taste Profile",
    pdpInfoTitle: "Additional Product Information",
    pdpNutritionTitle: "Nutritional Facts (Per 100g)",
    thWeight: "Net Weight",
    thIngredients: "Ingredients",
    thSugar: "Sugar",
    thSalt: "Salt",
    thFat: "Fat",
    thShelfLife: "Shelf Life",
    thStorage: "Storage",
    thOrigin: "Origin",
    thRegNo: "Govt Registration",
    storageText: "Store in a cool, dry place. Always use a clean, dry spoon.",
    ingredientsText: "Fresh Ceylon Lime, Natural Salt, Pure Cane Sugar, Sun-Dried Chili Flakes.",
    shelfLifeText: "12 Months from Manufacturing Date",
    originText: "Galbokka, Hewanwatta, Mahiyanganaya, Sri Lanka",
    regNoText: "U/1/6/රෙදි/727",

    showcaseKicker: "Culinary Inspiration",
    showcaseTitle: "How to Enjoy Ceylon Lunu Dehi",
    showcaseSubtitle: "The quintessential Sri Lankan condiment that turns every meal into a royal banquet.",
    showcaseCard1Title: "Rice & Curry Banquet",
    showcaseCard1Desc: "A small sliver adds an explosion of tangy richness to red rice, dhal, and coconut sambol.",
    showcaseCard2Title: "Street-Style Kottu",
    showcaseCard2Desc: "Elevates hot roti kottu or fried rice with an aromatic citrus burst.",
    showcaseCard3Title: "Traditional Village Medicine",
    showcaseCard3Desc: "A timeless Ceylon home remedy for healthy digestion and revitalizing the appetite.",

    contactKicker: "Get In Touch",
    contactTitle: "Order Directly from the Producers",
    contactPara: "We dispatch orders island-wide and cater to bulk commercial orders, restaurants, grocery stores, and Sri Lankan expatriate gifts.",
    contactPhoneLabel: "Direct Phone & WhatsApp",
    contactEmailLabel: "Email Inquiries",
    contactAddressLabel: "Production Facility",
    footerAboutText: "DG PRODUCTS - lenudehi.lk. Premium artisanal Ceylon Lunu Dehi and lime preserves from Mahiyanganaya.",
    footerLinksTitle: "Quick Links",
    footerHoursTitle: "Delivery & Hours",
    footerHoursText: "Monday to Sunday: 8:00 AM - 8:00 PM. Islandwide courier delivery available.",
    footerCopyright: "© 2026 DG PRODUCTS (lenudehi.lk). Tagline: 'ekak hadaganna'. All rights reserved.",
    footerAdminHint: "Admin Portal (Tap logo 5 times to unlock)",

    waOrderHello: "Hello DG PRODUCTS! I would like to order through lenudehi.lk:",
    waItem: "Product",
    waWeight: "Weight",
    waQty: "Quantity",
    waPrice: "Price Each",
    waTotal: "Estimated Total",
    waPrompt: "Please let me know payment methods and islandwide delivery time to my address.",

    reviewsTitle: "Customer Reviews & Experiences",
    reviewsBasedOn: "Based on {count} verified customer reviews",
    btnWriteReview: "Write a Review",
    btnCancelReview: "Cancel",
    lblYourRating: "Your Overall Rating:",
    lblReviewerName: "Your Full Name *",
    lblReviewerLocation: "City / Location (e.g. Colombo, Kandy, Melbourne)",
    lblReviewTitle: "Review Headline *",
    lblReviewComment: "Your Detailed Feedback / Experience *",
    btnSubmitReview: "Submit Review for Verification",
    reviewPendingNotice: "Thank you for your feedback! Your review has been submitted for moderation and will appear once verified by our team.",
    noReviewsYet: "No customer reviews yet for this product. Be the first to share your experience!",
    verifiedBuyer: "Verified Buyer",
    ratingStars: "Stars",
    ratingBreakdown: "Rating Breakdown",
    starRatingPrompt: "Select a star rating",

    adminUnlockTitle: "DG Products Administrator Login",
    adminPassPlaceholder: "Enter admin password...",
    adminBtnLogin: "Unlock Dashboard",
    adminBtnCancel: "Cancel",
    adminDashboardTitle: "DG Products Catalog Manager",
    adminTabProducts: "Inventory List",
    adminTabAdd: "Add New Product",
    adminTabReviews: "Reviews & Moderation",
    adminTabSettings: "Store Settings",
    adminBtnAdd: "Add Product",
    adminBtnSave: "Save Changes",
    adminBtnDelete: "Delete",
    adminBtnEdit: "Edit",
    adminBtnReset: "Restore Factory Catalog",
    adminLogout: "Exit Admin",
    adminColImage: "Photo",
    adminColName: "Product Name",
    adminColCategory: "Category",
    adminColWeight: "Weight",
    adminColPrice: "Price (LKR)",
    adminColActions: "Actions",
    adminBtnApprove: "Approve",
    adminBtnReject: "Reject",
    adminReviewApprovedToast: "Review approved and published to product page!",
    adminReviewRejectedToast: "Review rejected.",
    adminReviewDeletedToast: "Review deleted permanently."
  },

  si: {

    navHome: "මුල් පිටුව",
    navAbout: "අප ගැන",
    navShop: "නිෂ්පාදන පෙළ",
    navContact: "අමතන්න",
    searchPlaceholder: "දෙහි නිෂ්පාදන සොයන්න...",
    searchButton: "සොයන්න",

    brandName: "ඩීජී ප්‍රඩක්ට්ස්",
    brandTagline: "එකක් හදාගන්න",
    brandDomain: "lenudehi.lk",
    heroKicker: "දේශීය රසයේ සැබෑ උරුමය",
    heroTitlePrefix: "ගැමි රස පිරි",
    heroTitleAccent: "ලුණු දෙහි",
    heroTitleSuffix: "සහ දෙහි නිෂ්පාදන",
    heroSubtitle: "මහියංගනයේ නැවුම් ගැමි දෙහි, මුහුදු ලුණු සහ පිරිසිදු දේශීය කුළුබඩු යොදා පැරණි ක්‍රමයට අව්වේ පදම් කර නිපදවූ උසස්ම ලුණු දෙහි.",
    btnShopNow: "ලුණු දෙහි ඇනවුම් කරන්න",
    btnLearnMore: "අපේ කතාව",
    heroTrustSun: "100% අව්වේ පදම් කළ",
    heroTrustSpices: "පිරිසිදු ලංකා කුළුබඩු",
    heroTrustNoChem: "කෘත්‍රිම කල්තබා ගැනීමේ ද්‍රව්‍ය නැත",
    heroBadgeTitle: "සම්ප්‍රදායික මහියංගන වට්ටෝරුව",
    heroBadgeDesc: "වීදුරු බෝතල්වල මනාව මුද්‍රා තැබූ",

    aboutKicker: "අපේ උරුමය",
    aboutTitle: "ශ්‍රී ලාංකීය සැබෑ ගැමි ලුණු දෙහි රසය ඔබේ කෑම මේසයට",
    aboutPara1: "DG PRODUCTS ආයතනය මහියංගනයේ ආරම්භ කරන ලද්දේ පාරම්පරික ලුණු දෙහි සෑදීමේ සුවිශේෂී ශිල්ප ක්‍රමය සුරකිමින් පාරිභෝගිකයාට ඉහළම ගුණාත්මක රසයක් තිළිණ කිරීමේ අරමුණෙනි.",
    aboutPara2: "අව්වේ වේලා පදම් කර, ගල් ලුණු, කෑලි මිරිස් සහ සුවඳවත් කුළුබඩු සමඟ මනාව මුසු කර නිපදවන අපගේ ලුණු දෙහි, බත් පතට අසමසම රසයක් සහ ගුණයක් එක් කරයි.",
    aboutFeat1Title: "ස්වාභාවික සූර්යාලෝකයෙන් පදම් කිරීම",
    aboutFeat1Desc: "ස්වාභාවික හිරු එළියෙන් පමණක් නිසි ප්‍රමිතියට පදම් කර සකසනු ලැබේ.",
    aboutFeat2Title: "රසායනික ද්‍රව්‍ය වලින් තොරයි",
    aboutFeat2Desc: "දෙහි, ලුණු, සීනි සහ කෑලි මිරිස් පමණක් යොදා කිසිදු කෘත්‍රිම රසකාරකයක් නොයොදයි.",

    shopKicker: "නිෂ්පාදන එකතුව",
    shopTitle: "නැවුම් දෙහි සහ ලුණු දෙහි පෙළ",
    shopSubtitle: "ප්‍රමිතියෙන් උසස්, නිසි බර සහ මුද්‍රාව සහිතව සුරක්ෂිතව අසුරා ඇත.",
    categoriesLabel: "වර්ගීකරණය",
    catAll: "සියලු නිෂ්පාදන",
    catTraditional: "සාම්ප්‍රදායික ලුණු දෙහි",
    catSpiced: "තුනපහ දැමූ දෙහි",
    catSpecial: "විශේෂ ඇසුරුම් සහ බෝතල්",
    showingCount: "නිෂ්පාදන {count} ක් පෙන්වයි",
    priceLabel: "මිල",
    weightLabel: "බර",
    btnViewDetails: "විස්තර හා ඇනවුම්",
    emptyCatalog: "ඔබ සොයන නිර්ණායක වලට අදාළ නිෂ්පාදන නොමැත.",
    resetSearch: "සොයුම ඉවත් කරන්න",

    pdpBack: "නැවත වෙළඳසැලට",
    pdpStock: "තොග ඇත (නැවුම්ව අසුරා ඇත)",
    pdpSelectWeight: "තෝරාගත හැකි බර:",
    pdpQuantity: "ප්‍රමාණය:",
    btnBuyNowWhatsApp: "WhatsApp හරහා දැන්ම ඇනවුම් කරන්න",
    pdpDescTitle: "නිෂ්පාදන විස්තරය සහ රස ගුණය",
    pdpInfoTitle: "අමතර තොරතුරු",
    pdpNutritionTitle: "පෝෂණ ගුණය (ග්‍රෑම් 100 කට)",
    thWeight: "ශුද්ධ බර",
    thIngredients: "අඩංගු ද්‍රව්‍ය",
    thSugar: "සීනි",
    thSalt: "ලුණු",
    thFat: "මේදය",
    thShelfLife: "කල් තබාගත හැකි කාලය",
    thStorage: "ගබඩා කිරීම",
    thOrigin: "නිෂ්පාදනය",
    thRegNo: "ලියාපදිංචි අංකය",
    storageText: "වියළි සිසිල් ස්ථානයක තබන්න. පිරිසිදු වියළි හැන්දක් භාවිතා කරන්න.",
    ingredientsText: "නැවුම් දෙහි, ලුණු, සීනි, කෑලි මිරිස්.",
    shelfLifeText: "නිෂ්පාදිත දින සිට මාස 12 කි.",
    originText: "ගල්බොක්ක, හේවන්වත්ත, මහියංගනය, ශ්‍රී ලංකාව",
    regNoText: "U/1/6/රෙදි/727",

    showcaseKicker: "ආහාර රසගැන්වීම",
    showcaseTitle: "ලුණු දෙහි ආහාරයට ගන්නා ආකාරය",
    showcaseSubtitle: "ඕනෑම ශ්‍රී ලාංකීය කෑම වේලකට අපූර්ව දිව පිනවන රසයක්.",
    showcaseCard1Title: "බත් සහ ව්‍යංජන සමඟ",
    showcaseCard1Desc: "රතු බත්, පරිප්පු, සම්බෝල සමඟ ලුණු දෙහි කැබැල්ලක් එක්වූ විට ලැබෙන රසය අසමසමයි.",
    showcaseCard2Title: "කොත්තු සහ ෆ්‍රයිඩ් රයිස්",
    showcaseCard2Desc: "උණු උණු කොත්තුවකට හෝ බතකට දෙහි රසයේ සුවඳවත් ප්‍රබෝධයක් ගෙන දෙයි.",
    showcaseCard3Title: "ආහාර රුචිය වඩවන ඔසුවක්",
    showcaseCard3Desc: "ආහාර ජීර්ණය පහසු කරවන, බඩගින්න වඩවන සාම්ප්‍රදායික පාරම්පරික ගුණයක්.",

    contactKicker: "අප අමතන්න",
    contactTitle: "නිෂ්පාදකයන්ගෙන් සෘජුවම ඇනවුම් කරන්න",
    contactPara: "දිවයින පුරා බෙදාහැරීම් සිදු කරනු ලැබේ. හෝටල්, අවන්හල් සහ තොග ඇනවුම් සඳහාද විමසන්න.",
    contactPhoneLabel: "දුරකථන සහ WhatsApp",
    contactEmailLabel: "විද්‍යුත් තැපෑල",
    contactAddressLabel: "නිෂ්පාදනාගාරය",
    footerAboutText: "DG PRODUCTS - lenudehi.lk. මහියංගනයේ පාරම්පරික උසස්ම තත්ත්වයේ ලුණු දෙහි නිෂ්පාදනය.",
    footerLinksTitle: "ප්‍රධාන සබැඳි",
    footerHoursTitle: "වේලාවන් සහ බෙදාහැරීම",
    footerHoursText: "සඳුදා සිට ඉරිදා දක්වා: පෙ.ව. 8:00 - ප.ව. 8:00. දිවයින පුරා කූරියර් සේවාව.",
    footerCopyright: "© 2026 DG PRODUCTS (lenudehi.lk). එකක් හදාගන්න. සියලුම හිමිකම් ඇවිරිණි.",
    footerAdminHint: "පරිපාලක පිවිසුම (ලාංඡනය 5 වරක් ඔබන්න)",

    waOrderHello: "ආයුබෝවන් DG PRODUCTS! lenudehi.lk හරහා ඇනවුම් කිරීමට කැමැත්තෙමි:",
    waItem: "නිෂ්පාදනය",
    waWeight: "බර",
    waQty: "ප්‍රමාණය",
    waPrice: "ඒකක මිල",
    waTotal: "මුළු මුදල",
    waPrompt: "කරුණාකර ගෙවීම් විස්තර සහ මගේ ලිපිනයට බෙදාහැරීමේ විස්තර දන්වන්න.",

    reviewsTitle: "පාරිභෝගික අදහස් සහ අත්දැකීම්",
    reviewsBasedOn: "තහවුරු කළ පාරිභෝගික සමාලෝචන {count} ක් මත පදනම්ව",
    btnWriteReview: "ඔබේ අදහස ලියන්න",
    btnCancelReview: "අවලංගු කරන්න",
    lblYourRating: "ඔබේ සමස්ත ඇගයීම:",
    lblReviewerName: "ඔබගේ නම *",
    lblReviewerLocation: "නගරය / ප්‍රදේශය (උදා: කොළඹ, නුවර, ගාල්ල)",
    lblReviewTitle: "සමාලෝචන මාතෘකාව *",
    lblReviewComment: "ඔබගේ අදහස / අත්දැකීම *",
    btnSubmitReview: "අදහස යොමු කරන්න",
    reviewPendingNotice: "ස්තූතියි! ඔබේ අදහස පරීක්ෂාව සඳහා යොමු කෙරුණු අතර අනුමැතියෙන් පසු වෙබ් අඩවියේ දිස්වනු ඇත.",
    noReviewsYet: "මෙම නිෂ්පාදනයට තවමත් පාරිභෝගික අදහස් පළවී නොමැත. ඔබේ අත්දැකීම බෙදාගන්නා පළමුවැන්නා වන්න!",
    verifiedBuyer: "තහවුරු කළ ගැනුම්කරු",
    ratingStars: "තරු",
    ratingBreakdown: "ඇගයීම් විග්‍රහය",
    starRatingPrompt: "තරු ගණනක් තෝරන්න",

    adminUnlockTitle: "DG Products පරිපාලක පිවිසුම",
    adminPassPlaceholder: "මුරපදය ඇතුළත් කරන්න...",
    adminBtnLogin: "ඇතුළු වන්න",
    adminBtnCancel: "අවලංගු කරන්න",
    adminDashboardTitle: "නිෂ්පාදන කළමනාකරණය",
    adminTabProducts: "නිෂ්පාදන ලැයිස්තුව",
    adminTabAdd: "නව නිෂ්පාදනයක් එක් කරන්න",
    adminTabReviews: "පාරිභෝගික අදහස් කළමනාකරණය",
    adminTabSettings: "වෙළඳසැල් සැකසුම්",
    adminBtnAdd: "නිෂ්පාදනය සුරකින්න",
    adminBtnSave: "වෙනස්කම් සුරකින්න",
    adminBtnDelete: "මකන්න",
    adminBtnEdit: "සංස්කරණය",
    adminBtnReset: "මුල් නිෂ්පාදන යථා තත්ත්වයට පත් කරන්න",
    adminLogout: "ඉවත් වන්න",
    adminColImage: "ඡායාරූපය",
    adminColName: "නිෂ්පාදනයේ නම",
    adminColCategory: "වර්ගය",
    adminColWeight: "බර",
    adminColPrice: "මිල (රු.)",
    adminColActions: "ක්‍රියාකාරකම්",
    adminBtnApprove: "අනුමත කරන්න",
    adminBtnReject: "ප්‍රතික්ෂේප කරන්න",
    adminReviewApprovedToast: "අදහස අනුමත කර නිෂ්පාදන පිටුවේ පළ කරන ලදී!",
    adminReviewRejectedToast: "අදහස ප්‍රතික්ෂේප කරන ලදී.",
    adminReviewDeletedToast: "අදහස සාර්ථකව මකා දමන ලදී."
  },

  ta: {

    navHome: "முகப்பு",
    navAbout: "எங்களை பற்றி",
    navShop: "பொருட்கள்",
    navContact: "தொடர்புக்கு",
    searchPlaceholder: "எலுமிச்சை ஊறுகாய் தேடவும்...",
    searchButton: "தேடு",

    brandName: "DG PRODUCTS",
    brandTagline: "ekak hadaganna",
    brandDomain: "lenudehi.lk",
    heroKicker: "இலங்கையின் பாரம்பரிய சுவை",
    heroTitlePrefix: "சுவையான தூய",
    heroTitleAccent: "எலுமிச்சை ஊறுகாய்",
    heroTitleSuffix: "& சிட்ரஸ் தயாரிப்புகள்",
    heroSubtitle: "மஹியங்கனையின் புதிய எலுமிச்சை, இயற்கை கடல் உப்பு மற்றும் சுத்தமான வாசனை திரவியங்கள் கொண்டு வெயிலில் பதப்படுத்தப்பட்ட மிகச்சிறந்த ஊறுகாய்.",
    btnShopNow: "ஊறுகாய் வாங்கவும்",
    btnLearnMore: "எங்கள் பாரம்பரிய கதை",
    heroTrustSun: "100% வெயிலில் பதப்படுத்தப்பட்டது",
    heroTrustSpices: "தூய இலங்கை மசாலாக்கள்",
    heroTrustNoChem: "செயற்கை ரசாயனங்கள் இல்லை",
    heroBadgeTitle: "பாரம்பரிய மஹியங்கனை செய்முறை",
    heroBadgeDesc: "கண்ணாடி ஜாடிகளில் பதப்படுத்தப்பட்டது",

    aboutKicker: "எங்கள் வேர்கள்",
    aboutTitle: "இலங்கையின் பாரம்பரிய ஊறுகாய் சுவையை உங்கள் இல்லத்திற்கு கொண்டு வருகிறோம்",
    aboutPara1: "DG PRODUCTS மஹியங்கனையில் ஆரம்பிக்கப்பட்டு, எலுமிச்சை ஊறுகாயின் உண்மை சுவையை மக்களிடம் கொண்டு சேர்க்கும் நோக்குடன் செயல்படுகிறது.",
    aboutPara2: "இயற்கை சூரிய ஒளியில் பதப்படுத்தி, தூய உப்பு, மிளகாய் தூள் சேர்த்து தயாரிக்கப்படும் எமது ஊறுகாய் ஒவ்வொரு சாப்பாட்டிற்கும் கூடுதல் சுவையூட்டுகிறது.",
    aboutFeat1Title: "இயற்கை சூரிய ஒளி பதப்படுத்தல்",
    aboutFeat1Desc: "பாரம்பரிய முறையில் சூரிய ஒளியில் மட்டுமே பக்குவமாக பதப்படுத்தப்படுகிறது.",
    aboutFeat2Title: "பாதுகாப்பு ரசாயனங்கள் இல்லை",
    aboutFeat2Desc: "எலுமிச்சை, உப்பு, சர்க்கரை மற்றும் மிளகாய் மட்டுமே பயன்படுத்தி பாதுகாப்பாக செய்யப்படுகிறது.",

    shopKicker: "தயாரிப்பு பட்டியல்",
    shopTitle: "கைவினை எலுமிச்சை ஊறுகாய் தொகுப்பு",
    shopSubtitle: "அனைத்து தயாரிப்புகளும் சரியான எடையில் தரமாக சீல் செய்யப்பட்டு விநியோகிக்கப்படுகின்றன.",
    categoriesLabel: "வகைகள்",
    catAll: "அனைத்து ஊறுகாய்களும்",
    catTraditional: "பாரம்பரிய எலுமிச்சை ஊறுகாய்",
    catSpiced: "மசாலா எலுமிச்சை ஊறுகாய்",
    catSpecial: "சிறப்பு ஜாடிகள் மற்றும் தொகுப்புகள்",
    showingCount: "{count} தயாரிப்புகள் காட்டப்படுகின்றன",
    priceLabel: "விலை",
    weightLabel: "எடை",
    btnViewDetails: "விவரம் & ஆர்டர்",
    emptyCatalog: "உங்கள் தேடலுக்கு ஏற்ற தயாரிப்புகள் எதுவும் இல்லை.",
    resetSearch: "தேடலை நீக்கு",

    pdpBack: "மீண்டும் கடைக்குச் செல்ல",
    pdpStock: "இருப்பில் உள்ளது (புதிய சீலிங்)",
    pdpSelectWeight: "கிடைக்கும் எடை:",
    pdpQuantity: "அளவு:",
    btnBuyNowWhatsApp: "WhatsApp மூலம் வாங்கவும்",
    pdpDescTitle: "தயாரிப்பு விளக்கம் & சுவை விவரம்",
    pdpInfoTitle: "கூடுதல் தகவல்கள்",
    pdpNutritionTitle: "ஊட்டச்சத்து விவரம் (100 கிராமுக்கு)",
    thWeight: "நிகர எடை",
    thIngredients: "பொருட்கள்",
    thSugar: "சர்க்கரை",
    thSalt: "உப்பு",
    thFat: "கொழுப்பு",
    thShelfLife: "பயன்பாட்டு காலம்",
    thStorage: "சேமிப்பு முறை",
    thOrigin: "உற்பத்தி",
    thRegNo: "பதிவு எண்",
    storageText: "குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும். எப்போதும் உலர்ந்த கரண்டியைப் பயன்படுத்தவும்.",
    ingredientsText: "புதிய எலுமிச்சை, இயற்கை உப்பு, சர்க்கரை, மிளகாய் தூள்.",
    shelfLifeText: "தயாரிப்பு தேதியிலிருந்து 12 மாதங்கள்",
    originText: "கல்பொக்க, ஹேவன்வத்த, மஹியங்கனை, இலங்கை",
    regNoText: "U/1/6/ரெதி/727",

    showcaseKicker: "உணவு வழிகாட்டல்",
    showcaseTitle: "எலுமிச்சை ஊறுகாயை எவ்வாறு சுவைப்பது",
    showcaseSubtitle: "எந்தவொரு இலங்கை உணவுக்கும் பிரத்தியேக ருசியை அளிக்கும் ஊறுகாய்.",
    showcaseCard1Title: "சோறு மற்றும் கறிகளுடன்",
    showcaseCard1Desc: "பருப்பு சோறு மற்றும் தேங்காய் சம்பலுடன் ஒரு துண்டு ஊறுகாய் இணையற்ற சுவையைத் தரும்.",
    showcaseCard2Title: "கொத்து மற்றும் பொரித்த சோறு",
    showcaseCard2Desc: "சூடான கொத்து அல்லது ஃபிரைட் ரைஸுக்கு புத்துணர்ச்சியூட்டும் சிட்ரஸ் சுவை.",
    showcaseCard3Title: "செரிமானத்திற்கான பாரம்பரிய மருந்து",
    showcaseCard3Desc: "பசி தூண்டவும், செரிமானத்திற்கும் பயன்படும் கைமருந்து.",

    contactKicker: "தொடர்பு கொள்ளுங்கள்",
    contactTitle: "உற்பத்தியாளர்களிடமிருந்து நேரடியாக ஆர்டர் செய்யுங்கள்",
    contactPara: "நாடு முழுவதும் பார்சல் மூலம் விநியோகம் செய்யப்படுகிறது. உணவகங்கள் மற்றும் மொத்த ஆர்டர்களுக்கு தொடர்பு கொள்ளவும்.",
    contactPhoneLabel: "தொலைபேசி மற்றும் WhatsApp",
    contactEmailLabel: "மின்னஞ்சல்",
    contactAddressLabel: "உற்பத்தி கூடம்",
    footerAboutText: "DG PRODUCTS - lenudehi.lk. மஹியங்கனையின் தூய எலுமிச்சை ஊறுகாய் தயாரிப்பு.",
    footerLinksTitle: "விரைவு இணைப்புகள்",
    footerHoursTitle: "வேலை நேரம் & விநியோகம்",
    footerHoursText: "திங்கள் - ஞாயிறு: காலை 8:00 - இரவு 8:00. நாடு முழுவதும் கூரியர் சேவை.",
    footerCopyright: "© 2026 DG PRODUCTS (lenudehi.lk). ekak hadaganna. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    footerAdminHint: "நிர்வாகி தளம் (லோகோவை 5 முறை தட்டவும்)",

    waOrderHello: "வணக்கம் DG PRODUCTS! lenudehi.lk மூலம் ஆர்டர் செய்ய விரும்புகிறேன்:",
    waItem: "தயாரிப்பு",
    waWeight: "எடை",
    waQty: "அளவு",
    waPrice: "விலை",
    waTotal: "மொத்த தொகை",
    waPrompt: "தயவுசெய்து கட்டணம் செலுத்தும் முறைகள் மற்றும் விநியோக விபரங்களை தெரிவிக்கவும்.",

    reviewsTitle: "வாடிக்கையாளர் மதிப்பாய்வுகள் & அனுபவங்கள்",
    reviewsBasedOn: "சரிபார்க்கப்பட்ட {count} வாடிக்கையாளர் மதிப்பாய்வுகளின் அடிப்படையில்",
    btnWriteReview: "மதிப்பாய்வு எழுதுக",
    btnCancelReview: "ரத்து செய்",
    lblYourRating: "உங்கள் மதிப்பீடு:",
    lblReviewerName: "உங்கள் முழுப் பெயர் *",
    lblReviewerLocation: "நகரம் / நாடு (உதா: கொழும்பு, கண்டி)",
    lblReviewTitle: "மதிப்பாய்வு தலைப்பு *",
    lblReviewComment: "உங்கள் விரிவான கருத்து *",
    btnSubmitReview: "மதிப்பாய்வை சமர்ப்பிக்கவும்",
    reviewPendingNotice: "நன்றி! உங்கள் மதிப்பாய்வு நிர்வாகியின் ஒப்புதலுக்காக சமர்ப்பிக்கப்பட்டுள்ளது. சரிபார்க்கப்பட்ட பின் தோன்றும்.",
    noReviewsYet: "இந்த தயாரிப்பிற்கு இதுவரை எந்த மதிப்பாய்வுகளும் இல்லை. உங்கள் அனுபவத்தை முதலில் பகிருங்கள்!",
    verifiedBuyer: "சரிபார்க்கப்பட்ட வாங்குபவர்",
    ratingStars: "நட்சத்திரங்கள்",
    ratingBreakdown: "மதிப்பீடு விவரம்",
    starRatingPrompt: "நட்சத்திர மதிப்பீட்டைத் தேர்ந்தெடுக்கவும்",

    adminUnlockTitle: "DG Products நிர்வாகி உள்நுழைவு",
    adminPassPlaceholder: "கடவுச்சொல்லை உள்ளிடவும்...",
    adminBtnLogin: "உள்நுழையவும்",
    adminBtnCancel: "ரத்து செய்",
    adminDashboardTitle: "தயாரிப்பு மேலாளர்",
    adminTabProducts: "தயாரிப்பு பட்டியல்",
    adminTabAdd: "புதிய தயாரிப்பு சேர்",
    adminTabReviews: "மதிப்பாய்வு மேலாண்மை",
    adminTabSettings: "கடை அமைப்புகள்",
    adminBtnAdd: "தயாரிப்பை சேமிக்கவும்",
    adminBtnSave: "மாற்றங்களை சேமிக்கவும்",
    adminBtnDelete: "அழி",
    adminBtnEdit: "திருத்து",
    adminBtnReset: "ஆரம்ப நிலைக்கு மாற்றுக",
    adminLogout: "வெளியேறு",
    adminColImage: "புகைப்படம்",
    adminColName: "தயாரிப்பு பெயர்",
    adminColCategory: "வகை",
    adminColWeight: "எடை",
    adminColPrice: "விலை (ரூ.)",
    adminColActions: "செயல்கள்",
    adminBtnApprove: "அங்கீகரி",
    adminBtnReject: "நிராகரி",
    adminReviewApprovedToast: "மதிப்பாய்வு அங்கீகரிக்கப்பட்டு வெளியிடப்பட்டது!",
    adminReviewRejectedToast: "மதிப்பாய்வு நிராகரிக்கப்பட்டது.",
    adminReviewDeletedToast: "மதிப்பாய்வு நிரந்தரமாக நீக்கப்பட்டது."
  }
};

const DEFAULT_PRODUCTS = [
  {
    id: "dg-001",
    name: {
      en: "Traditional Ceylon Lunu Dehi (250g Jar)",
      si: "සාම්ප්‍රදායික ගැමි ලුණු දෙහි (ග්‍රෑම් 250 බෝතලය)",
      ta: "பாரம்பரிய இலங்கை எலுமிச்சை ஊறுகாய் (250g)"
    },
    category: "traditional",
    priceLkr: 650,
    weight: "250g",
    image: IMAGE_PATHS.product1,
    gallery: [IMAGE_PATHS.product1, IMAGE_PATHS.product2, IMAGE_PATHS.product3],
    badge: "Bestseller",
    description: {
      en: "Our flagship authentic Ceylon Lunu Dehi made following the century-old Mahiyanganaya household formulation. Hand-picked mature limes are aged in solar brine and seasoned with fine chili flakes and raw sugar for unmatched tartness and digestive goodness.",
      si: "මහියංගන පාරම්පරික වට්ටෝරුවට අනුව ගල් ලුණු, කෑලි මිරිස් සහ ස්වාභාවික හිරු එළියෙන් පදම් කළ සුවඳවත් ගැමි ලුණු දෙහි බෝතලය. බත් පතේ රසය දෙගුණ කරන අපේ ප්‍රධානතම නිෂ්පාදනය.",
      ta: "மஹியங்கனையின் பாரம்பரிய செய்முறைப்படி வெயிலில் பதப்படுத்தப்பட்ட தூய எலுமிச்சை ஊறுகாய். எமது முன்னணி தயாரிப்பு."
    },
    additionalInfo: {
      en: "Batch inspected under Registration No. U/1/6/රෙදි/727. Contains no added chemical preservatives, artificial food coloring, or vinegar. Glass jar sealed for safety.",
      si: "ලියාපදිංචි අංක U/1/6/රෙදි/727 යටතේ නිපදවන ලදී. විනාකිරි හෝ කිසිදු කෘත්‍රිම කල්තබාගැනීමේ ද්‍රව්‍ය අඩංගු නොවේ.",
      ta: "அங்கீகரிக்கப்பட்ட தயாரிப்பு U/1/6/ரெதி/727. வினிகர் அல்லது செயற்கை இரசாயனங்கள் சேர்க்கப்படவில்லை."
    }
  },
  {
    id: "dg-002",
    name: {
      en: "Spiced Ceylon Lunu Dehi with Curry Leaf & Spices (250g)",
      si: "සුවඳ කුළුබඩු හා කරපිංචා මුසු තුනපහ ලුණු දෙහි (ග්‍රෑම් 250)",
      ta: "கறிவேப்பிலை மற்றும் மசாலா கலந்த எலுமிச்சை ஊறுகாய் (250g)"
    },
    category: "spiced",
    priceLkr: 750,
    weight: "250g",
    image: IMAGE_PATHS.product2,
    gallery: [IMAGE_PATHS.product2, IMAGE_PATHS.product4, IMAGE_PATHS.product1],
    badge: "Spiced Recipe",
    description: {
      en: "A rich, deeply aromatic version infused with roasted mustard seeds, Ceylon black pepper, fragrant curry leaves, and sun-dried red chili flakes. The perfect side accompaniment for savory biryani and ghee rice.",
      si: "බැදගත් අබ, ගම්මිරිස් සහ කරපිංචා මිශ්‍රණයකින් සුවඳවත් කළ විශේෂ තුනපහ ලුණු දෙහි. බුරියානි, නെയ് බත් සහ බැදපු බත් සමඟ අගනා සංකලනයක්.",
      ta: "வறுத்த கடுகு மற்றும் கறிவேப்பிலை நறுமணத்துடன் கூடிய மசாலா எலுமிச்சை ஊறுகாய்."
    },
    additionalInfo: {
      en: "Naturally preserved in its own concentrated lime juice and salt brine. High in vitamin C and digestive enzymes.",
      si: "ස්වාභාවික දෙහි යුෂයෙන් සහ ලුණු වතුරෙන් පමණක් පදම් කර ඇත.",
      ta: "இயற்கை எலுமிச்சை சாற்றில் பதப்படுத்தப்பட்டது."
    }
  },
  {
    id: "dg-003",
    name: {
      en: "Artisanal Mahiyanganaya Salted Lime Pickle (500g Large Jar)",
      si: "මහියංගන පාරම්පරික ලුණු දෙහි විශාල බෝතලය (ග්‍රෑම් 500)",
      ta: "மஹியங்கனை பாரம்பரிய எலுமிச்சை ஊறுகாய் (500g)"
    },
    category: "traditional",
    priceLkr: 1200,
    weight: "500g",
    image: IMAGE_PATHS.product3,
    gallery: [IMAGE_PATHS.product3, IMAGE_PATHS.product5, IMAGE_PATHS.product1],
    badge: "Value Jar",
    description: {
      en: "Double the quantity for genuine Lunu Dehi connoisseurs and family households. Each jar contains whole cured lime quarters soaked in deep amber pickle syrup that melts on your tongue.",
      si: "පවුලේ පරිභෝජනය සඳහා වඩාත් වාසිදායක ග්‍රෑම් 500 විශාල බෝතලය. මනාව පදම් වූ දෙහි බෑ සහිතයි.",
      ta: "குடும்ப பயன்பாட்டிற்கான 500 கிராம் பெரிய ஜாடி ஊறுகாய்."
    },
    additionalInfo: {
      en: "Weight: 500g Net. 100% biodegradable and recyclable glass container. Manufactured by DG Products, Hewanwatta.",
      si: "ශුද්ධ බර ග්‍රෑම් 500 කි. වීදුරු බෝතලයක සුරක්ෂිතව අසුරා ඇත.",
      ta: "நிகர எடை 500 கிராம். கண்ணாடி ஜாடியில் அடைக்கப்பட்டது."
    }
  },
  {
    id: "dg-004",
    name: {
      en: "Country Harvest Aged Lime Segments (350g Rustic Jar)",
      si: "ගැමි අස්වැන්නේ අව්වේ වේලූ පදම් දෙහි (ග්‍රෑම් 350)",
      ta: "நாட்டு எலுமிச்சை பாரம்பரிய ஊறுகாய் (350g)"
    },
    category: "traditional",
    priceLkr: 850,
    weight: "350g",
    image: IMAGE_PATHS.product4,
    gallery: [IMAGE_PATHS.product4, IMAGE_PATHS.product7, IMAGE_PATHS.product2],
    badge: "Country Harvest",
    description: {
      en: "Harvested from smallholder village orchards in Mahiyanganaya, these limes are hand-slit, stuffed with solar sea salt, and solar-cured for over 45 days until dark, succulent, and intensely fragrant.",
      si: "දින 45කට අධික කාලයක් අව්වේ තබා පදම් කරගත් තද පැහැති ගැමි ලුණු දෙහි. සැබෑ ගමේ රසය.",
      ta: "45 நாட்களுக்கு மேல் வெயிலில் பக்குவமாக பதப்படுத்தப்பட்ட ஊறுகாய்."
    },
    additionalInfo: {
      en: "Ingredients: Limes, salt, sugar, chili flakes. Sodium content 7.36g per 100g. Sugar content 0.07g per 100g.",
      si: "අඩංගු ද්‍රව්‍ය: දෙහි, ලුණු, සීනි, කෑලි මිරිස්. ග්‍රෑම් 100ක ලුණු ප්‍රමාණය ග්‍රෑම් 7.36 කි.",
      ta: "பொருட்கள்: எலுமிச்சை, உப்பு, சர்க்கரை, மிளகாய் தூள்."
    }
  },
  {
    id: "dg-005",
    name: {
      en: "Twin Gift Box: Traditional & Spiced Lunu Dehi (2 x 250g)",
      si: "විශේෂ ද්විත්ව ඇසුරුම: සාම්ප්‍රදායික සහ තුනපහ දෙහි (ග්‍රෑම් 250 x 2)",
      ta: "இரட்டை பரிசு தொகுப்பு: பாரம்பரியம் & மசாலா (2 x 250g)"
    },
    category: "special",
    priceLkr: 1350,
    weight: "500g (Twin)",
    image: IMAGE_PATHS.product5,
    gallery: [IMAGE_PATHS.product5, IMAGE_PATHS.product6, IMAGE_PATHS.product1],
    badge: "Gift Set",
    description: {
      en: "The best of both worlds in a premium twin pack. Includes 1 jar of Classic Lunu Dehi (250g) and 1 jar of Spiced Seasoned Lunu Dehi (250g). Popular as an authentic Sri Lankan gift for friends and overseas relatives.",
      si: "සාම්ප්‍රදායික ලුණු දෙහි බෝතලයක් සහ තුනපහ ලුණු දෙහි බෝතලයක් ඇතුළත් සුවිශේෂී ඇසුරුම.",
      ta: "இரண்டு விதமான சுவைகளும் அடங்கிய சிறப்பு இரட்டை பேக்."
    },
    additionalInfo: {
      en: "Comes packed in secure outer carton suitable for islandwide shipping or carry-on travel gifts.",
      si: "තෑගි දීමට සහ සංචාර සඳහා වඩාත් සුදුසු ඇසුරුමකි.",
      ta: "பயணங்களுக்கும் பரிசளிப்பதற்கும் ஏற்றது."
    }
  },
  {
    id: "dg-006",
    name: {
      en: "Family Feast Master Jar - Aged Lunu Dehi (1000g / 1kg)",
      si: "පවුලේ මහා භෝජන ලුණු දෙහි ජම්බෝ බෝතලය (කිලෝග්‍රෑම් 1)",
      ta: "குடும்ப விருந்து எலுமிச்சை ஊறுகாய் பெரு ஜாடி (1000g / 1kg)"
    },
    category: "special",
    priceLkr: 2250,
    weight: "1000g (1kg)",
    image: IMAGE_PATHS.product6,
    gallery: [IMAGE_PATHS.product6, IMAGE_PATHS.product3, IMAGE_PATHS.product7],
    badge: "1kg Master Jar",
    description: {
      en: "Heavy-duty 1 kilogram catering and family jar designed for regular households, dining rooms, caterers, and food service enthusiasts who cannot dine without authentic Mahiyanganaya lunu dehi.",
      si: "කෑම මේසයට සහ උත්සව අවස්ථාවලට වඩාත් සුදුසු කිලෝ 1 යෝධ ලුණු දෙහි බෝතලය. ඉහළම ලාභය.",
      ta: "ஹோட்டல்கள் மற்றும் பெரிய குடும்பங்களுக்கான 1 கிலோ ஜாடி ஊறுகாய்."
    },
    additionalInfo: {
      en: "Net Weight 1,000g. Shelf life: 12 months in ambient pantry conditions.",
      si: "ශුද්ධ බර ග්‍රෑම් 1,000 කි. සාමාන්‍ය කාමර උෂ්ණත්වයේ මාස 12 ක් තබාගත හැක.",
      ta: "நிகர எடை 1000 கிராம். 12 மாதங்கள் வரை கெடாமல் இருக்கும்."
    }
  },
  {
    id: "dg-007",
    name: {
      en: "Gourmet Chili Infused Lime Pickle (400g)",
      si: "රතු මිරිස් සැර පිරි විශේෂ රසැති ලුණු දෙහි (ග්‍රෑම් 400)",
      ta: "காரசாரமான சிறப்பு மிளகாய் எலுமிச்சை ஊறுகாய் (400g)"
    },
    category: "spiced",
    priceLkr: 980,
    weight: "400g",
    image: IMAGE_PATHS.product7,
    gallery: [IMAGE_PATHS.product7, IMAGE_PATHS.product2, IMAGE_PATHS.product4],
    badge: "Extra Zesty",
    description: {
      en: "Crafted for lovers of vibrant fiery spice. Coarsely ground village chili pods are layered between tenderized whole limes for an exhilarating explosion of warmth and sour tang.",
      si: "සැර ප්‍රිය කරන ඔබ වෙනුවෙන්ම සැකසූ, ගමේ මිරිස් කරල් මනාව මුසු වූ විශේෂ ලුණු දෙහි.",
      ta: "காரமான சுவையை விரும்புவோருக்கான பிரத்தியேக மிளகாய் ஊறுகாய்."
    },
    additionalInfo: {
      en: "100% natural, no synthetic colors or emulsifiers. High in natural citric antioxidants.",
      si: "ස්වාභාවික ද්‍රව්‍ය පමණි. කිසිදු රසායනික වර්ණක නැත.",
      ta: "இயற்கையானது, செயற்கை வண்ணங்கள் எதுவும் இல்லை."
    }
  }
];

const DEFAULT_REVIEWS = [
  {
    id: "rev-001",
    productId: "dg-001",
    reviewerName: "Chaminda Senanayake",
    location: "Kandy",
    rating: 5,
    title: "The true Mahiyanganaya village taste!",
    comment: "I have tried many store-bought lime pickles in Colombo, but none compare to DG Products. The limes are sun-ripened and deeply marinated without any artificial chemical aftertaste. Perfect with red rice and dhal!",
    date: "October 14, 2026",
    status: "approved"
  },
  {
    id: "rev-002",
    productId: "dg-001",
    reviewerName: "Dilrukshi Perera",
    location: "Nugegoda",
    rating: 5,
    title: "Authentic homemade texture & aroma",
    comment: "Reminds me of my grandmother's clay pot lunu dehi. Rich, tart, and soothing for digestion after a heavy rice meal. Ordered 3 more jars via WhatsApp!",
    date: "October 20, 2026",
    status: "approved"
  },
  {
    id: "rev-003",
    productId: "dg-002",
    reviewerName: "Rizwan Mohamed",
    location: "Colombo",
    rating: 5,
    title: "Best accompaniment for Biryani & Ghee Rice",
    comment: "The roasted mustard seeds and curry leaves make all the difference. Adds an amazing savory kick to biryani and fried rice. Highly recommend!",
    date: "October 19, 2026",
    status: "approved"
  },
  {
    id: "rev-004",
    productId: "dg-003",
    reviewerName: "Suresh Nadarajah",
    location: "Jaffna",
    rating: 5,
    title: "Superb value and long-lasting quality",
    comment: "Large juicy lime quarters that melt in your mouth. The 500g jar is ideal for regular family dining. Fast delivery to Jaffna via courier.",
    date: "October 16, 2026",
    status: "approved"
  },
  {
    id: "rev-005",
    productId: "dg-004",
    reviewerName: "Anoma Wickramasinghe",
    location: "Kurunegala",
    rating: 5,
    title: "Natural solar salt curing at its finest",
    comment: "You can tell these were aged in solar brine without vinegar. Pure natural ingredients, perfect balance of salt and chili flakes.",
    date: "October 22, 2026",
    status: "approved"
  },
  {
    id: "rev-006",
    productId: "dg-005",
    reviewerName: "Kavinda Bandara",
    location: "Melbourne, Australia",
    rating: 5,
    title: "Great gift for overseas relatives",
    comment: "Ordered through WhatsApp to be sent to my parents in Gampaha before my visit. Beautiful presentation, leak-proof jars, and excellent customer care.",
    date: "October 24, 2026",
    status: "approved"
  },
  {
    id: "rev-007",
    productId: "dg-001",
    reviewerName: "Nalin Karunaratne",
    location: "Galle",
    rating: 5,
    title: "Fresh batch just arrived",
    comment: "Packaging was pristine and the flavor is exceptionally fresh. Highly recommend ordering in bulk for restaurants.",
    date: "October 25, 2026",
    status: "pending"
  }
];

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
  updateAdminPendingBadge();
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

let currentLanguage = localStorage.getItem("dg_active_language") || "en";
let currentCurrency = localStorage.getItem("dg_active_currency") || "LKR";
let activeCategory = "all";
let searchQuery = "";
let selectedProduct = null;
let currentDetailQuantity = 1;
let adminReviewsFilter = "all";

let logoClickTimestamps = [];

function getStoredProducts() {
  try {
    const raw = localStorage.getItem("dg_products_inventory");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn("Failed reading localStorage products:", err);
  }

  localStorage.setItem("dg_products_inventory", JSON.stringify(DEFAULT_PRODUCTS));
  return DEFAULT_PRODUCTS;
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

  if (currentLanguage === "si") {
    return `රු. ${priceInLkr.toLocaleString()}`;
  } else if (currentLanguage === "ta") {
    return `ரூ. ${priceInLkr.toLocaleString()}`;
  }
  return `Rs. ${priceInLkr.toLocaleString()}`;
}

function getTranslation(key, fallback = "") {
  const langDict = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  return langDict[key] || TRANSLATIONS.en[key] || fallback;
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = getTranslation(key);
    if (val) {
      el.textContent = val;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = getTranslation(key);
    if (val) {
      el.setAttribute("placeholder", val);
    }
  });

  document.querySelectorAll(".lang-opt-btn").forEach(btn => {
    const lang = btn.getAttribute("data-lang");
    if (lang === currentLanguage) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  document.querySelectorAll(".curr-opt-btn").forEach(btn => {
    const curr = btn.getAttribute("data-curr");
    if (curr === currentCurrency) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderCategoriesBar();
  renderProductsGrid();

  if (selectedProduct) {
    renderProductDetail(selectedProduct);
  }
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

function renderCategoriesBar() {
  const container = document.getElementById("categories-bar-container");
  if (!container) return;

  const categories = [
    { id: "all", key: "catAll" },
    { id: "traditional", key: "catTraditional" },
    { id: "spiced", key: "catSpiced" },
    { id: "special", key: "catSpecial" }
  ];

  const counts = {
    all: productsInventory.length,
    traditional: productsInventory.filter(p => p.category === "traditional").length,
    spiced: productsInventory.filter(p => p.category === "spiced").length,
    special: productsInventory.filter(p => p.category === "special").length
  };

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

    let catKey = "catTraditional";
    if (product.category === "spiced") catKey = "catSpiced";
    if (product.category === "special") catKey = "catSpecial";
    const catName = getTranslation(catKey);

    const ratingStats = getProductRatingStats(product.id);
    const ratingBadgeHtml = ratingStats.count > 0
      ? `<div class="card-rating-inline"><span class="star-symbol">${icon("star", 13, "star-filled", true)}</span> <span class="tabular font-semibold">${ratingStats.average}</span> <span class="rating-count">(${ratingStats.count})</span></div>`
      : '';

    html += `
      <div class="product-card" data-product-id="${product.id}">
        <div class="card-media-wrapper">
          <img
            src="${product.image}"
            alt="${localizedName}"
            class="card-media-img"
            loading="lazy"
            onerror="this.src='${IMAGE_PATHS.logoPng}'; this.style.objectFit='contain'; this.style.padding='20px';"
          />
          <span class="card-weight-badge tabular">${weight}</span>
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
            <button class="card-action-btn" aria-label="View ${localizedName}">
              <span>${viewLabel}</span> ${icon("arrow-right", 14)}
            </button>
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;

  grid.querySelectorAll(".product-card").forEach(card => {
    const open = () => openProductDetailPage(card.getAttribute("data-product-id"));
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "link");
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });
}

function openProductDetailPage(productId) {
  const product = productsInventory.find(p => p.id === productId);
  if (!product) return;

  selectedProduct = product;
  currentDetailQuantity = 1;

  document.getElementById("main-storefront").style.display = "none";
  const pdpView = document.getElementById("product-detail-view");
  pdpView.classList.add("active");

  renderProductDetail(product);

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeProductDetailPage(scrollToShop = true) {
  selectedProduct = null;
  document.getElementById("product-detail-view").classList.remove("active");
  document.getElementById("main-storefront").style.display = "block";

  if (scrollToShop === true) {
    const shopEl = document.getElementById("shop");
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: "smooth" });
    }
  }
}

/* Go to a section (#home, #about, #shop, #contact) from anywhere,
   even when a product detail page is open. */
function navigateToSection(hash) {
  const id = (hash || "").replace("#", "");
  if (!id) return;

  if (selectedProduct) {
    closeProductDetailPage(false);
  }

  const target = document.getElementById(id);
  if (!target) return;

  // wait one frame so the storefront is visible again before scrolling
  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  history.replaceState(null, "", "#" + id);
  setActiveNav(id);
  closeMobileMenu();
}

function setActiveNav(id) {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + id);
  });
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + id);
  });
}

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

function revealShopForSearch() {
  if (selectedProduct) closeProductDetailPage(false);
  const shopEl = document.getElementById("shop");
  if (shopEl) {
    requestAnimationFrame(() => shopEl.scrollIntoView({ behavior: "smooth", block: "start" }));
  }
}

function renderProductDetail(product) {
  const container = document.getElementById("product-detail-content");
  if (!container) return;

  const localizedName = product.name[currentLanguage] || product.name.en;
  const localizedDesc = product.description?.[currentLanguage] || product.description?.en || "";
  const localizedAddInfo = product.additionalInfo?.[currentLanguage] || product.additionalInfo?.en || "";
  const unitPriceFormatted = formatPrice(product.priceLkr);
  const totalAmountFormatted = formatPrice(product.priceLkr * currentDetailQuantity);

  let catKey = "catTraditional";
  if (product.category === "spiced") catKey = "catSpiced";
  if (product.category === "special") catKey = "catSpecial";
  const catName = getTranslation(catKey);

  const waUrl = generateWhatsAppOrderUrl(product, currentDetailQuantity);

  const galleryImgs = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image, IMAGE_PATHS.product1, IMAGE_PATHS.product2];

  let thumbsHtml = "";
  galleryImgs.forEach((imgSrc, idx) => {
    thumbsHtml += `
      <div class="detail-thumb ${idx === 0 ? 'active' : ''}" data-img-src="${imgSrc}">
        <img src="${imgSrc}" alt="Thumbnail ${idx + 1}" onerror="this.src='${IMAGE_PATHS.logoPng}'" />
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

  container.innerHTML = `
    <button id="pdp-back-button" class="detail-nav-back">
      ${icon("arrow-left", 16)} <span>${getTranslation("pdpBack")}</span>
    </button>

    <div class="detail-grid">
      <div class="detail-gallery">
        <div class="detail-main-image-wrap">
          <img
            id="pdp-main-image"
            src="${product.image}"
            alt="${localizedName}"
            class="detail-main-image"
            onerror="this.src='${IMAGE_PATHS.logoPng}'; this.style.objectFit='contain'; this.style.padding='40px';"
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
          <span class="detail-stock-status">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ${getTranslation("pdpStock")}
          </span>
        </div>

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
        </div>

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

  document.getElementById("pdp-back-button").addEventListener("click", () => closeProductDetailPage(true));

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

(Brand: ${BRAND_INFO.name} | ${BRAND_INFO.domain})`;

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(messageText)}`;
}

function registerSecretLogoClick() {
  const now = Date.now();

  logoClickTimestamps = logoClickTimestamps.filter(t => now - t < 3000);
  logoClickTimestamps.push(now);

  const clicks = logoClickTimestamps.length;

  if (clicks >= 5) {
    logoClickTimestamps = [];
    showAdminLoginPrompt();
  } else if (clicks >= 2) {
    showAdminTapFeedback(clicks);
  }
}

function showAdminTapFeedback(count) {
  const toast = document.getElementById("admin-tap-toast");
  if (!toast) return;

  const remaining = 5 - count;
  toast.textContent = `Admin Unlock: ${count}/5 taps (Tap ${remaining} more times)`;
  toast.style.display = "block";

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.style.display = "none";
  }, 1200);
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
  renderProductsGrid();
  if (selectedProduct) renderProductDetail(selectedProduct);
  showToast(getTranslation("adminReviewApprovedToast", "Review approved and published!"));
};

window.rejectReview = function(id) {
  const rev = productReviews.find(r => r.id === id);
  if (!rev) return;
  rev.status = "rejected";
  saveProductReviews();
  renderAdminReviewsList();
  renderProductsGrid();
  if (selectedProduct) renderProductDetail(selectedProduct);
  showToast(getTranslation("adminReviewRejectedToast", "Review rejected."));
};

window.deleteReview = function(id) {
  if (confirm("Are you sure you want to permanently delete this customer review?")) {
    productReviews = productReviews.filter(r => r.id !== id);
    saveProductReviews();
    renderAdminReviewsList();
    renderProductsGrid();
    if (selectedProduct) renderProductDetail(selectedProduct);
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
          <img src="${p.image}" class="admin-product-thumb" alt="Product" onerror="this.src='${IMAGE_PATHS.logoPng}'" />
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

  document.getElementById("admin-form-title").textContent = "Edit Product: " + product.name.en;
  switchAdminTab("form");
};

window.deleteProductInAdmin = function(id) {
  if (confirm("Are you sure you want to delete this product from your inventory?")) {
    productsInventory = productsInventory.filter(p => p.id !== id);
    saveProductsInventory();
    renderAdminProductsList();
    applyTranslations();
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
  let image = document.getElementById("form-prod-image").value.trim() || IMAGE_PATHS.product1;
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
    additionalInfo: { en: addInfoEn, si: addInfoEn, ta: addInfoEn }
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
  applyTranslations();
}

function resetToDefaultInventory() {
  if (confirm("Restore original DG Products catalog? Any custom modifications will be reset.")) {
    productsInventory = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
    saveProductsInventory();
    renderAdminProductsList();
    applyTranslations();
    showToast("Restored factory catalog successfully.");
  }
}

function showToast(msg) {
  const toast = document.getElementById("app-toast-notification");
  if (!toast) return;

  toast.textContent = msg;
  toast.classList.add("show");

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

document.addEventListener("DOMContentLoaded", () => {

  const splash = document.getElementById("intro-splash");
  const skipBtn = document.getElementById("splash-skip-btn");

  const dismissSplash = () => {
    if (splash && !splash.classList.contains("fade-out")) {
      splash.classList.add("fade-out");
      setTimeout(() => {
        splash.style.display = "none";
      }, 800);
    }
  };

  if (skipBtn) {
    skipBtn.addEventListener("click", dismissSplash);
  }

  setTimeout(dismissSplash, 2400);

  hydrateIcons();

  document.querySelectorAll(".lang-opt-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Navigation links (header, mobile menu, footer, hero buttons) work even on product page
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;
    link.addEventListener("click", (e) => {
      if (!document.getElementById(href.slice(1))) return;
      e.preventDefault();
      navigateToSection(href);
    });
  });

  document.getElementById("mobile-menu-btn")?.addEventListener("click", toggleMobileMenu);

  // highlight current section in nav while scrolling
  const spyIds = ["home", "about", "shop", "contact"];
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !selectedProduct) setActiveNav(entry.target.id);
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  spyIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) spyObserver.observe(el);
  });

  // close modals/menus with Escape, close modals by clicking the dark backdrop
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    closeMobileMenu();
    closeAdminLoginPrompt();
    closeAdminDashboard();
    document.getElementById("search-drawer")?.classList.remove("open");
  });
  ["admin-login-modal-backdrop", "admin-dashboard-backdrop"].forEach(id => {
    const el = document.getElementById(id);
    el?.addEventListener("click", (e) => {
      if (e.target === el) el.classList.remove("open");
    });
  });

  document.querySelectorAll(".curr-opt-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const curr = btn.getAttribute("data-curr");
      setCurrency(curr);
    });
  });

  const searchToggleBtn = document.getElementById("header-search-toggle");
  const searchDrawer = document.getElementById("search-drawer");
  const searchInput = document.getElementById("header-search-input");
  const searchClearBtn = document.getElementById("search-clear-btn");

  if (searchToggleBtn && searchDrawer) {
    searchToggleBtn.addEventListener("click", () => {
      searchDrawer.classList.toggle("open");
      if (searchDrawer.classList.contains("open")) {
        searchInput?.focus();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (selectedProduct) revealShopForSearch();
      renderProductsGrid();
    });
  }

  if (searchClearBtn && searchInput) {
    searchClearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      renderProductsGrid();
      searchInput.focus();
    });
  }

  document.querySelectorAll(".secret-admin-trigger").forEach(el => {
    el.addEventListener("click", (e) => {
      registerSecretLogoClick();
    });
  });

  const adminLoginCancel = document.getElementById("admin-login-cancel-btn");
  const adminLoginSubmit = document.getElementById("admin-login-submit-btn");
  const adminPassInput = document.getElementById("admin-password-input");
  const adminCloseDashboard = document.getElementById("admin-close-dashboard-btn");
  const adminNewProductBtn = document.getElementById("admin-new-product-btn");
  const adminResetCatalogBtn = document.getElementById("admin-reset-catalog-btn");
  const adminProductForm = document.getElementById("admin-product-edit-form");
  const adminCancelFormBtn = document.getElementById("admin-cancel-form-btn");

  adminLoginCancel?.addEventListener("click", closeAdminLoginPrompt);
  adminLoginSubmit?.addEventListener("click", verifyAdminPassword);
  adminPassInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      verifyAdminPassword();
    }
  });

  adminCloseDashboard?.addEventListener("click", closeAdminDashboard);

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

  adminNewProductBtn?.addEventListener("click", () => {
    resetAdminProductForm();
    switchAdminTab("form");
  });

  adminCancelFormBtn?.addEventListener("click", () => {
    resetAdminProductForm();
    switchAdminTab("list");
  });

  adminResetCatalogBtn?.addEventListener("click", resetToDefaultInventory);
  adminProductForm?.addEventListener("submit", handleSaveProductForm);

  updateAdminPendingBadge();
  applyTranslations();

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".site-header");
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });
});
