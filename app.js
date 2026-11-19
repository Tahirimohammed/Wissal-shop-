const INSTAGRAM = "https://www.instagram.com/wissal__creations31/";
const INSTAGRAM_DM = "https://ig.me/m/wissal__creations31";
const LOGO = "/assets/wissal-logo.webp";
const LOGO_JPEG = "/assets/wissal-logo.jpg";
const CITIES = ["Casablanca", "Rabat", "Marrakech", "Tanger", "Fès", "Agadir", "Khouribga", "Meknès", "Oujda", "Kénitra", "Tétouan", "El Jadida", "Béni Mellal", "Mohammedia", "Nador", "Laâyoune", "Autre ville"];
const PHOTO_FILES = [
  "instatik_1795097670.webp", "instatik_1795097675.webp", "instatik_1795097678.webp",
  "instatik_1795097681.webp", "instatik_1795097685.webp", "instatik_1795097690.webp",
  "instatik_1795097694.webp", "instatik_1795097703.webp", "instatik_1795097827.webp",
  "instatik_1795097837.webp", "instatik_1795097844.webp", "instatik_1795097849.webp",
  "instatik_1795097856.webp"
];
const DEFAULT_PRODUCTS = [
  { id: "wc-rose", title: "Bouquet Rose Éternelle", category: "Best-Sellers", price: 350, image: PHOTO_FILES[2], description: "Une composition généreuse de roses, arrangée avec amour.", stock: "En stock", featured: true },
  { id: "wc-jardin", title: "Bouquet Jardin de Wissal", category: "Nouveautés", price: 420, image: PHOTO_FILES[4], description: "Un bouquet délicat aux couleurs douces de saison.", stock: "Sur commande", featured: true },
  { id: "wc-coffret", title: "Coffret Fleurs & Douceurs", category: "Coffrets", price: 480, image: PHOTO_FILES[8], description: "Une attention fleurie dans son écrin précieux.", stock: "En stock", featured: true },
  { id: "wc-surmesure", title: "Composition Personnalisée", category: "Personnalisable", price: 550, image: PHOTO_FILES[10], description: "Choisissez les couleurs et les détails qui vous ressemblent.", stock: "Sur commande", featured: false },
  { id: "wc-petit", title: "Petite Attention Fleurie", category: "Best-Sellers", price: 280, image: PHOTO_FILES[3], description: "Un joli bouquet pour les petites et grandes occasions.", stock: "En stock", featured: false },
  { id: "wc-fete", title: "Coffret Jour de Fête", category: "Coffrets", price: 620, image: PHOTO_FILES[11], description: "Une création artisanale à offrir et à garder en souvenir.", stock: "Sur commande", featured: false }
];
const DEFAULT_OFFERS = [
  { id: "offer-fleurs-douceurs", badge: "COFFRET 01", title: "Coffret Fleurs & Douceurs", price: 480, oldPrice: 550, photos: [PHOTO_FILES[8], PHOTO_FILES[9], PHOTO_FILES[12]], active: true },
  { id: "offer-jardin", badge: "OFFRE DU MOMENT", title: "Jardin de Wissal", price: 420, oldPrice: 480, photos: [PHOTO_FILES[4], PHOTO_FILES[5], PHOTO_FILES[6]], active: true },
  { id: "offer-rose-eternelle", badge: "ÉDITION LIMITÉE", title: "Rose Éternelle", price: 350, oldPrice: 390, photos: [PHOTO_FILES[2], PHOTO_FILES[3], PHOTO_FILES[10]], active: true }
];
const PERFUME_FAMILIES = ["Floral & Romantique", "Oriental & Vanille", "Fruité & Sucré", "Musc & Poudré"];
const PERFUME_BADGES = ["Best-Seller", "Nouveau", "Coup de Cœur", "Édition Limitée"];
const DEFAULT_PERFUMES = [
  { id: "perfume-velours-de-rose", name: "Velours de Rose", family: "Floral & Romantique", notes: "Rose de Damas, Vanille, Musc Blanc", badge: "Best-Seller", prices: { 30: 150, 50: 240, 100: 380 }, image: PHOTO_FILES[2], stock: "En stock" },
  { id: "perfume-ambre-de-minuit", name: "Ambre de Minuit", family: "Oriental & Vanille", notes: "Ambre doux, Vanille, Bois de Santal", badge: "Coup de Cœur", prices: { 30: 170, 50: 270, 100: 420 }, image: PHOTO_FILES[10], stock: "En stock" },
  { id: "perfume-jardin-sucre", name: "Jardin Sucré", family: "Fruité & Sucré", notes: "Fruits rouges, Pivoine, Musc délicat", badge: "Nouveau", prices: { 30: 140, 50: 225, 100: 360 }, image: PHOTO_FILES[5], stock: "En stock" }
];
const TRANSLATIONS = {
  fr: {
    home: "Accueil", shop: "La Carte", perfumes: "Parfums", offers: "Offres", clients: "Nos Clientes", about: "À propos", contact: "Contact", order: "Commander",
    eyebrow: "WISSAL CREATIONS · LIVRAISON PARTOUT AU MAROC", headline: "Une création pensée", headline2: "rien que pour vous.", subtitle: "Pièces uniques, délicatesse artisanale et créations personnalisées livrées partout au Maroc.",
    shopButton: "Voir la carte des produits", custom: "Création sur-mesure", process1: "Choisissez vos produits", process2: "Renseignez vos infos de livraison", process3: "Livraison partout au Maroc",
    deliveryCaption: "Paiement à la livraison partout au Maroc · Nous confirmons votre commande rapidement.", shopTitle: "La carte des produits", shopIntro: "Des créations délicates, préparées avec soin et livrées chez vous.", search: "Rechercher un produit…", all: "Tout", best: "Best-Sellers", new: "Nouveautés", packs: "Coffrets", personal: "Personnalisable",
    addCart: "Ajouter au panier", inStock: "En stock", onOrder: "Sur commande", personalize: "Prénom ou petit mot à inscrire (facultatif)", viewCart: "Panier", offersTitle: "Les attentions à offrir", offersIntro: "De jolis coffrets pour célébrer les personnes qui comptent.",
    clientsTitle: "Elles ont adopté Wissal Creations", clientsIntro: "Des créations et des instants partagés par notre communauté.", shareReview: "Partager votre photo & avis", galleryTitle: "Les instants de la maison", follow: "Suivre @wissal__creations31 sur Instagram",
    aboutTitle: "Le beau prend forme à la main.", aboutText: "Chaque création commence par une intention, une rencontre, une envie. Wissal imagine des bouquets, des cadeaux et des pièces personnalisées, façonnés avec une attention sincère aux gestes et aux détails.",
    contactTitle: "Une idée, une histoire.", contactText: "Parlez-nous de votre projet et imaginons ensemble une création qui vous ressemble.", instaMessage: "Écrire sur Instagram", cartEmpty: "Votre panier attend sa première attention.", continue: "Continuer mes achats", total: "Total", checkout: "Vos informations de livraison", lastName: "Nom", firstName: "Prénom", phone: "Téléphone / WhatsApp", city: "Ville", address: "Adresse complète de livraison", note: "Note supplémentaire (facultatif)", confirm: "Confirmer ma commande", cod: "Paiement à la livraison · Partout au Maroc", verified: "Achat vérifié"
  },
  en: {
    home: "Home", shop: "Shop", perfumes: "Perfumes", offers: "Gift sets", clients: "Our clients", about: "About", contact: "Contact", order: "Order",
    eyebrow: "WISSAL CREATIONS · DELIVERY ACROSS MOROCCO", headline: "A creation made", headline2: "just for you.", subtitle: "One-of-a-kind pieces, handmade delicacy and personalized creations delivered across Morocco.",
    shopButton: "Explore the collection", custom: "Custom creation", process1: "Choose your pieces", process2: "Add delivery details", process3: "Delivery across Morocco",
    deliveryCaption: "Cash on delivery across Morocco · We’ll confirm your order shortly.", shopTitle: "The collection", shopIntro: "Thoughtful creations, made with care and delivered to your door.", search: "Search products…", all: "All", best: "Best sellers", new: "New", packs: "Gift sets", personal: "Customizable",
    addCart: "Add to bag", inStock: "In stock", onOrder: "Made to order", personalize: "Name or message to add (optional)", viewCart: "Bag", offersTitle: "Thoughtful gifts", offersIntro: "Beautiful gift sets to celebrate the people you love.",
    clientsTitle: "Loved by our community", clientsIntro: "Creations and moments shared by our community.", shareReview: "Share your photo & review", galleryTitle: "A glimpse into our world", follow: "Follow @wissal__creations31 on Instagram",
    aboutTitle: "Beauty, made by hand.", aboutText: "Every creation begins with an intention, a meeting, a wish. Wissal imagines bouquets, gifts and personalized pieces, made with care and attention to detail.",
    contactTitle: "An idea, a story.", contactText: "Tell us about your project and let's imagine a creation that feels like you.", instaMessage: "Message on Instagram", cartEmpty: "Your bag is waiting for its first little something.", continue: "Continue shopping", total: "Total", checkout: "Delivery details", lastName: "Last name", firstName: "First name", phone: "Phone / WhatsApp", city: "City", address: "Full delivery address", note: "Additional note (optional)", confirm: "Confirm my order", cod: "Cash on delivery · Across Morocco", verified: "Verified purchase"
  },
  ar: {
    home: "الرئيسية", shop: "المتجر", perfumes: "العطور", offers: "الهدايا", clients: "عميلاتنا", about: "من نحن", contact: "اتصلوا بنا", order: "اطلبي الآن",
    eyebrow: "ويسال كرييشنز · توصيل في جميع أنحاء المغرب", headline: "إبداع صُنع", headline2: "خصيصاً لكِ.", subtitle: "قطع فريدة ولمسات يدوية رقيقة وإبداعات مخصصة تصلكِ أينما كنتِ في المغرب.",
    shopButton: "اكتشفي المجموعة", custom: "إبداع حسب الطلب", process1: "اختاري إبداعاتك", process2: "أدخلي معلومات التوصيل", process3: "توصيل في أنحاء المغرب",
    deliveryCaption: "الدفع عند الاستلام في جميع أنحاء المغرب · سنتواصل معكِ قريباً لتأكيد الطلب.", shopTitle: "مجموعة ويسال", shopIntro: "إبداعات رقيقة محضرة بعناية وتصلكِ إلى باب منزلك.", search: "ابحثي عن منتج…", all: "الكل", best: "الأكثر مبيعاً", new: "جديد", packs: "علب الهدايا", personal: "حسب الطلب",
    addCart: "أضيفي إلى السلة", inStock: "متوفر", onOrder: "حسب الطلب", personalize: "الاسم أو الرسالة (اختياري)", viewCart: "السلة", cartEmpty: "سلتكِ تنتظر أولى إبداعاتها.", continue: "مواصلة التسوق", total: "المجموع", checkout: "معلومات التوصيل", lastName: "النسب", firstName: "الاسم", phone: "الهاتف / واتساب", city: "المدينة", address: "عنوان التوصيل الكامل", note: "ملاحظة إضافية (اختياري)", confirm: "تأكيد الطلب", cod: "الدفع عند الاستلام · جميع أنحاء المغرب",
    offersTitle: "هدايا مليئة بالمحبة", offersIntro: "علب جميلة للاحتفال بالأشخاص الذين تحبينهم.", clientsTitle: "إبداعات أحبّتها عميلاتنا", clientsIntro: "إبداعات ولحظات تشاركها معنا عميلاتنا.", shareReview: "شاركي صورتكِ ورأيكِ", galleryTitle: "لحظات من عالم ويسال", follow: "تابعينا على إنستغرام @wissal__creations31", aboutTitle: "جمال يُصنع باليد.", aboutText: "تبدأ كل إبداع بنية ولقاء ورغبة. تصمم ويسال باقات الزهور والهدايا والقطع الشخصية بعناية واهتمام بالتفاصيل.", contactTitle: "فكرة، حكاية.", contactText: "أخبرينا عن فكرتكِ ولنبتكر معاً قطعة تشبهكِ.", instaMessage: "راسِلينا على إنستغرام", verified: "شراء موثّق"
  }
};

const t = key => (TRANSLATIONS[state.lang] || TRANSLATIONS.fr)[key] || TRANSLATIONS.fr[key] || key;
const money = amount => `${Number(amount || 0).toLocaleString("fr-MA")} MAD`;
const asset = file => file.startsWith("data:") || file.startsWith("http") ? file : `/assets/${file}`;
const localDateKey = value => {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "unknown";
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
};
const dateLabel = value => {
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? "Date inconnue" : new Intl.DateTimeFormat("fr-MA", { day: "2-digit", month: "2-digit", year: "numeric" }).format(date);
};
const normalizeReviewStatus = status => {
  const value = String(status || "").toLowerCase();
  return value === "approved" || value === "approuvé" ? "approved" : value === "rejected" || value === "refusé" ? "rejected" : "pending";
};
const readStored = (key, fallback) => {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : fallback;
};
const saveStored = (key, value) => localStorage.setItem(key, JSON.stringify(value));
let offerSlideTimer = null;
let offerPhotoTimer = null;
let offerResizeHandler = null;
const getAdminPassword = () => {
  let password = localStorage.getItem("wc-admin-pin");
  if (password === null) {
    password = "wissal2026";
    localStorage.setItem("wc-admin-pin", password);
  }
  return password;
};
getAdminPassword();
const storedReviews = readStored("wc-reviews", []).map(review => ({
  ...review,
  status: normalizeReviewStatus(review.status),
  rating: Math.min(5, Math.max(1, Number(review.rating) || 5)),
  createdAt: review.createdAt || review.submittedAt || review.date || new Date().toISOString()
}));
const storedOffers = localStorage.getItem("wissal_offers") === null ? DEFAULT_OFFERS : readStored("wissal_offers", DEFAULT_OFFERS);
const storedPerfumesRaw = localStorage.getItem("wissal_perfumes");
const storedPerfumes = storedPerfumesRaw === null ? [] : readStored("wissal_perfumes", []);
const perfumeBootstrapDone = localStorage.getItem("wissal_perfumes_initialized") === "yes";
const initialPerfumes = !perfumeBootstrapDone && (!Array.isArray(storedPerfumes) || storedPerfumes.length === 0) ? DEFAULT_PERFUMES : Array.isArray(storedPerfumes) ? storedPerfumes : [];
const state = {
  lang: localStorage.getItem("wc-language") || "fr",
  cartOpen: false,
  products: readStored("wc-products", DEFAULT_PRODUCTS),
  cart: readStored("wc-cart", []),
  orders: readStored("wc-orders", []),
  reviews: storedReviews,
  offers: Array.isArray(storedOffers) ? storedOffers : DEFAULT_OFFERS,
  perfumes: initialPerfumes,
  adminAuthed: sessionStorage.getItem("wc-admin-auth") === "yes",
  adminTab: localStorage.getItem("wc-admin-tab") || "orders",
  productQuery: "",
  productCategory: "Tout",
  orderQuery: "",
  orderStatus: "Toutes",
  orderDateFilter: "all",
  orderExactDate: "",
  perfumeQuery: "",
  perfumeFamily: "Toutes les familles",
  perfumeStoreQuery: "",
  perfumeStoreFamily: "all",
  reviewFilter: "pending",
  reviewFormOpen: false,
  orderConfirmationId: ""
};
if (localStorage.getItem("wc-reviews")) saveStored("wc-reviews", storedReviews);
if (localStorage.getItem("wissal_offers") === null) saveStored("wissal_offers", state.offers);
if (!perfumeBootstrapDone) {
  saveStored("wissal_perfumes", state.perfumes);
  localStorage.setItem("wissal_perfumes_initialized", "yes");
} else if (storedPerfumesRaw === null) saveStored("wissal_perfumes", state.perfumes);

function header() {
  return `<header class="site-header">
    <a class="brand" href="/" data-route="/" aria-label="Wissal Creations"><img class="brand-logo" src="${LOGO}" alt="Logo Wissal Creations"><span class="brand-name">WISSAL CREATIONS</span></a>
    <nav class="main-nav" aria-label="Navigation principale">
      <a href="/#accueil" data-scroll="accueil">${t("home")}</a><a href="/#boutique" data-scroll="boutique">${t("shop")}</a><a href="/#parfums" data-scroll="parfums">${t("perfumes")}</a><a href="/#offres" data-scroll="offres">${t("offers")}</a><a href="/#clientes" data-scroll="clientes">${t("clients")}</a><a href="/#a-propos" data-scroll="a-propos">${t("about")}</a><a href="/#contact" data-scroll="contact">${t("contact")}</a>
    </nav>
    <div class="header-actions">
      <div class="language-switch" aria-label="Choose language"><button data-lang="fr" aria-pressed="${state.lang === "fr"}">FR</button><button data-lang="en" aria-pressed="${state.lang === "en"}">EN</button><button data-lang="ar" aria-pressed="${state.lang === "ar"}">العربية</button></div>
      <button class="bag-button" data-action="open-cart" aria-label="${t("viewCart")}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg><span class="bag-label">${t("viewCart")}</span><b class="bag-count">${state.cart.reduce((n, item) => n + item.quantity, 0)}</b></button>
      <a class="button header-cta" href="/#boutique" data-scroll="boutique">${t("order")} <span>↗</span></a>
      <button class="menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false"><span></span><span></span></button>
    </div>
  </header>`;
}

function productCard(product) {
  return `<article class="product-card reveal" data-product-id="${product.id}">
    <div class="product-image image-frame"><img src="${asset(product.image)}" alt="${escapeHtml(product.title)}" loading="lazy"><span class="stock-badge">${product.stock === "En stock" ? t("inStock") : t("onOrder")}</span><button class="quick-view" data-action="quick-view" data-id="${product.id}">Aperçu rapide</button><button class="product-quick-add" type="button" data-action="add-cart" data-id="${product.id}" aria-label="Ajouter ${escapeHtml(product.title)} au panier">+</button></div>
    <div class="product-info"><span class="product-category">${escapeHtml(product.category)}</span><h3>${escapeHtml(product.title)}</h3><p>${escapeHtml(product.description || "")}</p>
      <label class="personalize-field"><span>${t("personalize")}</span><input data-personalization="${product.id}" maxlength="90" placeholder="Ex. Salma, avec amour"></label>
      <div class="product-buy"><strong>${money(product.price)}</strong><button class="pill-button" data-action="add-cart" data-id="${product.id}">${t("addCart")}</button></div>
    </div>
  </article>`;
}

function availablePerfumeVolumes(perfume) {
  return [30, 50, 100].map(size => ({ size, price: Number(perfume.prices?.[size]) || 0 })).filter(volume => volume.price > 0);
}

function filteredStorePerfumes() {
  const query = state.perfumeStoreQuery.trim().toLocaleLowerCase("fr");
  return state.perfumes.filter(perfume => {
    const content = `${perfume.name} ${perfume.family} ${perfume.notes || ""} ${perfume.badge || ""}`.toLocaleLowerCase("fr");
    return (!query || content.includes(query)) && (state.perfumeStoreFamily === "all" || perfume.family === state.perfumeStoreFamily);
  });
}

function perfumeStoreCard(perfume) {
  const volumes = availablePerfumeVolumes(perfume);
  const selected = volumes[0];
  const inStock = perfume.stock === "En stock";
  const volumeControls = volumes.length ? volumes.map((volume, index) => `<button type="button" class="perfume-volume-pill" data-action="select-perfume-volume" data-volume="${volume.size}" data-price="${volume.price}" aria-pressed="${index === 0}" aria-label="${volume.size} millilitres · ${money(volume.price)}">${volume.size} ml</button>`).join("") : `<span class="perfume-unavailable-price">Prix bientôt disponibles</span>`;
  const addDisabled = !inStock || !selected;
  return `<article class="product-card perfume-product-card reveal" data-perfume-id="${escapeHtml(perfume.id)}">
    <div class="product-image image-frame perfume-product-image"><img src="${asset(perfume.image || PHOTO_FILES[2])}" alt="Flacon ${escapeHtml(perfume.name)}" loading="lazy"><span class="stock-badge ${inStock ? "" : "is-out-of-stock"}">${inStock ? "En stock" : "Rupture de stock"}</span><button class="product-quick-add perfume-quick-add" type="button" data-action="add-perfume" data-perfume-id="${escapeHtml(perfume.id)}" aria-label="Ajouter ${escapeHtml(perfume.name)} au panier" ${addDisabled ? "disabled" : ""}>+</button></div>
    <div class="product-info perfume-product-info"><span class="product-category">${escapeHtml(perfume.family)}</span><div class="perfume-title-row"><h3>${escapeHtml(perfume.name)}</h3>${perfume.badge ? `<span class="perfume-store-badge">${escapeHtml(perfume.badge)}</span>` : ""}</div><p class="perfume-store-notes">${perfume.notes ? `Notes : ${escapeHtml(perfume.notes)}` : "Une fragrance délicate signée Wissal Creations."}</p><div class="perfume-volume-options" role="group" aria-label="Choisir une contenance">${volumeControls}</div><div class="product-buy perfume-product-buy"><strong data-perfume-price>${selected ? money(selected.price) : "—"}</strong><button type="button" class="pill-button" data-action="add-perfume" data-perfume-id="${escapeHtml(perfume.id)}" ${addDisabled ? "disabled" : ""}>Ajouter au panier</button></div></div>
  </article>`;
}

function perfumesSection() {
  const filters = [["all", "Tous"], ...PERFUME_FAMILIES.map(family => [family, family])];
  const perfumes = filteredStorePerfumes();
  return `<section class="section-shell shop-section perfume-shop-section" id="parfums"><div class="section-heading shop-heading reveal perfume-shop-heading"><p class="eyebrow">Haute parfumerie · Sillages d'exception</p><h2>Nos Parfums</h2><p>Des fragrances délicates, envoûtantes et durables pour sublimer chaque instant.</p><div class="perfume-heart-divider" aria-hidden="true">— ♡ —</div></div>
    <div class="catalog-tools perfume-catalog-tools"><div class="catalog-tabs" role="group" aria-label="Familles olfactives">${filters.map(([value, label]) => `<button type="button" class="catalog-tab" data-perfume-family="${escapeHtml(value)}" aria-pressed="${state.perfumeStoreFamily === value}">${escapeHtml(label)}</button>`).join("")}</div><label class="catalog-search"><span aria-hidden="true">⌕</span><input id="perfume-store-search" type="search" value="${escapeHtml(state.perfumeStoreQuery)}" placeholder="Rechercher un parfum…" aria-label="Rechercher un parfum"></label></div>
    <div class="product-grid perfume-grid">${perfumes.length ? perfumes.map(perfumeStoreCard).join("") : `<p class="empty-products">Aucun parfum ne correspond à votre recherche.</p>`}</div>
  </section>`;
}

function storefront() {
  const categories = ["Tout", "Best-Sellers", "Nouveautés", "Coffrets", "Personnalisable"];
  const products = state.products.filter(product => {
    const categoryMatch = state.productCategory === "Tout" || product.category === state.productCategory;
    const queryMatch = `${product.title} ${product.description} ${product.category}`.toLowerCase().includes(state.productQuery.toLowerCase());
    return categoryMatch && queryMatch;
  });
  const approvedReviews = state.reviews.filter(review => review.status === "approved");
  return `<main id="main">
    <section class="hero" id="accueil">
      <svg class="botanical botanical-one" viewBox="0 0 220 300" fill="none" aria-hidden="true"><path d="M22 284C61 237 105 177 184 18M50 246C26 230 20 201 29 177C54 189 67 210 62 232M78 207C56 188 52 159 64 136C87 151 98 175 91 196M108 159C90 136 91 108 108 88C127 108 132 132 119 151M135 111C121 87 126 60 146 43C161 65 162 89 146 105M48 250C73 235 100 240 118 258C97 275 72 276 53 260M81 204C106 188 134 194 150 214C127 231 102 230 84 214M111 157C136 144 162 153 176 174C153 187 130 183 114 168" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 177C41 190 51 208 62 232M64 136C76 151 86 173 91 196M108 88C115 106 120 129 119 151M146 43C150 61 151 84 146 105M53 260C72 254 96 255 118 258M84 214C104 208 129 209 150 214M114 168C132 164 155 167 176 174" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg>
      <svg class="botanical botanical-two" viewBox="0 0 220 300" fill="none" aria-hidden="true"><path d="M22 284C61 237 105 177 184 18M50 246C26 230 20 201 29 177C54 189 67 210 62 232M78 207C56 188 52 159 64 136C87 151 98 175 91 196M108 159C90 136 91 108 108 88C127 108 132 132 119 151M135 111C121 87 126 60 146 43C161 65 162 89 146 105M48 250C73 235 100 240 118 258C97 275 72 276 53 260M81 204C106 188 134 194 150 214C127 231 102 230 84 214M111 157C136 144 162 153 176 174C153 187 130 183 114 168" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 177C41 190 51 208 62 232M64 136C76 151 86 173 91 196M108 88C115 106 120 129 119 151M146 43C150 61 151 84 146 105M53 260C72 254 96 255 118 258M84 214C104 208 129 209 150 214M114 168C132 164 155 167 176 174" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg>
      <div class="hero-copy"><p class="eyebrow">${t("eyebrow")}</p><h1><span class="hero-title-line">${t("headline")}</span><br><em class="hero-title-line">${t("headline2")}</em><span class="hero-heart" aria-hidden="true">♡</span></h1>
        <p class="hero-description">${t("subtitle")}</p>
        <div class="hero-actions"><a class="pill-button primary-pill" href="/#boutique" data-scroll="boutique">${t("shopButton")} <span>›</span></a><a class="pill-button outline-pill" href="/#contact" data-scroll="contact">${t("custom")}</a></div>
        <p class="hero-extra">Fait avec amour · Créé au Maroc</p>
      </div>
      <figure class="hero-visual"><img class="hero-photo" src="${asset(PHOTO_FILES[4])}" alt="Bouquet de roses confectionné par Wissal Creations" fetchpriority="high"><figcaption class="hero-caption">La beauté du geste · Wissal Creations</figcaption><span class="hero-image-note">Une création unique <i>♡</i></span></figure>
    </section>
    <section class="process-wrap"><div class="process-strip">
      <div class="process-step"><span class="process-icon" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M16 27C12 23 5 19 5 12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 7-7 11-11 15Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M16 24c-1-5-1-10 0-15m0 9c-2-2-4-3-6-3m6 7c2-2 4-3 6-3" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/></svg></span><span><b>01</b>${t("process1")}</span></div>
      <div class="process-step"><span class="process-icon" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><rect x="5.5" y="7.5" width="21" height="19" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M10 5v5m12-5v5M6 13h20m-15 4h3m-3 4h3m4-4h3m-3 4h3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="m18 23 2 2 4-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span><b>02</b>${t("process2")}</span></div>
      <div class="process-step"><span class="process-icon" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="11" stroke="currentColor" stroke-width="1.5"/><path d="m11 16 3.2 3.2L21.5 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span><b>03</b>${t("process3")}</span></div>
    </div><p class="process-caption">${t("deliveryCaption")}</p></section>
    <section class="section-shell shop-section" id="boutique">
      <div class="section-heading shop-heading reveal"><p class="eyebrow">Une sélection pleine de douceur</p><h2>${t("shopTitle")}</h2><p>${t("shopIntro")}</p></div>
      <div class="catalog-tools"><div class="catalog-tabs" role="group" aria-label="Catégories">${categories.map((category, i) => `<button class="catalog-tab" data-category="${category}" aria-pressed="${state.productCategory === category}">${t(["all", "best", "new", "packs", "personal"][i])}</button>`).join("")}</div><label class="catalog-search"><span aria-hidden="true">⌕</span><input id="product-search" value="${escapeHtml(state.productQuery)}" placeholder="${t("search")}"></label></div>
      <div class="product-grid">${products.length ? products.map(productCard).join("") : `<p class="empty-products">Aucun produit ne correspond à cette recherche.</p>`}</div>
    </section>
    ${perfumesSection()}
    <section class="section-shell offer-section" id="offres"><div class="offer-intro"><p class="eyebrow">À offrir ou à s'offrir</p><h2>${t("offersTitle")}</h2><p>${t("offersIntro")}</p><a class="text-link" href="/#boutique" data-scroll="boutique">Explorer la boutique <span>↗</span></a></div>
      ${offersCarousel()}
    </section>
    <section class="section-shell reviews-section" id="clientes"><div class="section-heading reveal"><p class="eyebrow">Leurs petits mots</p><h2>${t("clientsTitle")}</h2><p>${t("clientsIntro")}</p></div>
      ${approvedReviews.length ? `<div class="reviews-grid">${approvedReviews.map(reviewCard).join("")}</div>` : `<div class="review-empty"><span class="review-stars">★★★★★</span><p>Vos mots et vos photos donneront bientôt vie à cet espace.</p></div>`}
      <button class="pill-button outline-pill review-open">${t("shareReview")}</button>
    </section>
    <section class="section-shell lookbook-section" id="realisations"><div class="instagram-top"><div class="section-heading"><p class="eyebrow">Les instants de la maison</p><h2>${t("galleryTitle")}</h2><p>Des créations florales, des détails et des instants partagés avec vous.</p></div><a class="pill-button outline-pill" href="${INSTAGRAM}" target="_blank" rel="noreferrer">${t("follow")} ↗</a></div>
      <div class="social-grid">${PHOTO_FILES.slice(1, 9).map((photo, i) => `<a class="social-card reveal" href="${asset(photo)}" data-lightbox="${i + 1}" aria-label="Agrandir une création florale"><img src="${asset(photo)}" alt="Création florale Wissal Creations ${i + 1}" loading="lazy"><span class="social-overlay">↗</span></a>`).join("")}</div>
    </section>
    <section class="section-shell about-preview" id="a-propos"><div class="about-images reveal"><img class="about-image-main" src="${asset(PHOTO_FILES[8])}" alt="Coffret floral Wissal Creations" loading="lazy"><img class="about-image-small" src="${asset(PHOTO_FILES[5])}" alt="Bouquet préparé pour une célébration" loading="lazy"></div>
      <div class="about-copy reveal"><p class="eyebrow">Une histoire de passion</p><h2>${t("aboutTitle")}</h2><p>${t("aboutText")}</p><a class="text-link" href="${INSTAGRAM}" target="_blank" rel="noreferrer">Découvrir notre univers <span>↗</span></a><div class="signature">Wissal</div></div></section>
    <section class="section-shell contact-section" id="contact"><div class="contact-intro"><p class="eyebrow">Parlons de votre envie</p><h2>${t("contactTitle")}</h2><p>${t("contactText")}</p><div class="contact-links"><a class="pill-button contact-pill" href="${INSTAGRAM_DM}" target="_blank" rel="noreferrer">${t("instaMessage")} ↗</a><a class="pill-button contact-pill" href="https://wa.me/?text=${encodeURIComponent("Bonjour Wissal, je souhaite discuter d'une création.")}" target="_blank" rel="noreferrer">WhatsApp ↗</a></div><div class="contact-details"><span>Créations personnalisées · Livraison partout au Maroc</span><a href="${INSTAGRAM}" target="_blank" rel="noreferrer">@wissal__creations31</a></div></div><div class="contact-image"><img src="${asset(PHOTO_FILES[6])}" alt="Composition florale imaginée avec soin" loading="lazy"></div></section>
  </main>`;
}

function offersCarousel() {
  const offers = state.offers.filter(offer => offer.active);
  if (!offers.length) return `<div class="offer-showcase"><p class="offer-carousel-empty">De nouvelles attentions arrivent bientôt.</p></div>`;
  const loopPadding = Math.min(2, offers.length);
  const repeated = [...offers.slice(-loopPadding), ...offers, ...offers.slice(0, loopPadding)];
  return `<div class="offer-showcase"><div class="offer-carousel" data-offer-count="${offers.length}" data-offer-prefix="${loopPadding}">
    <div class="offer-carousel-controls"><button type="button" class="offer-arrow" data-offer-direction="prev" aria-label="Offres précédentes">‹</button><button type="button" class="offer-arrow" data-offer-direction="next" aria-label="Offres suivantes">›</button></div>
    <div class="offer-viewport"><div class="offer-track">${repeated.map((offer, index) => offerAdCard(offer, index)).join("")}</div></div>
    <div class="offer-pagination" role="group" aria-label="Choisir une offre">${offers.map((offer, index) => `<button type="button" class="offer-dot ${index === 0 ? "is-active" : ""}" data-offer-index="${index}" aria-label="Afficher l'offre ${index + 1}" aria-pressed="${index === 0}"></button>`).join("")}</div>
  </div></div>`;
}

function offerAdCard(offer, index) {
  const photos = Array.isArray(offer.photos) && offer.photos.length ? offer.photos : [PHOTO_FILES[8]];
  const offerNumber = state.offers.filter(item => item.active).findIndex(item => item.id === offer.id) + 1;
  return `<article class="offer-ad-card" data-offer-card="${escapeHtml(offer.id)}" aria-label="${escapeHtml(offer.title)}">
    <div class="offer-ad-image"><div class="offer-photo-stack">${photos.map((photo, photoIndex) => `<img class="offer-ad-photo ${photoIndex === 0 ? "is-current" : ""}" src="${asset(photo)}" alt="${escapeHtml(offer.title)}" ${index < 4 ? "fetchpriority=\"low\"" : "loading=\"lazy\""}>`).join("")}</div><span class="offer-promo-badge">${escapeHtml(offer.badge || "OFFRE SPÉCIALE")}</span><span class="offer-image-index">${String(offerNumber).padStart(2, "0")}</span></div>
    <div class="offer-ad-copy"><span class="offer-category-tag">COFFRETS FLORAUX</span><h3>${escapeHtml(offer.title)}</h3><div class="offer-prices">${offer.oldPrice ? `<del>${money(offer.oldPrice)}</del>` : ""}<strong>${money(offer.price)}</strong></div><button type="button" class="pill-button offer-add-button" data-action="add-offer" data-offer-id="${escapeHtml(offer.id)}">Ajouter le coffret <span>+</span></button></div>
  </article>`;
}

function reviewCard(review) {
  return `<article class="review-card"><img src="${review.image || asset(PHOTO_FILES[2])}" alt="Photo partagée par ${escapeHtml(review.name)}" loading="lazy"><div class="review-content"><div class="review-meta"><span class="review-stars" aria-label="${review.rating || 5} étoiles">${"★".repeat(review.rating || 5)}${"☆".repeat(5 - (review.rating || 5))}</span>${review.verified ? `<span class="verified-badge">${t("verified")}</span>` : ""}</div><blockquote>« ${escapeHtml(review.text)} »</blockquote><p class="review-author">${escapeHtml(review.name)} · ${escapeHtml(review.city)}</p></div></article>`;
}

function footer() {
  return `<footer class="site-footer"><div class="footer-mark"><a href="/" class="footer-brand" data-route="/" aria-label="Wissal Creations — accueil"><img src="${LOGO}" alt="Logo Wissal Creations"></a><p>Des pièces avec une âme.</p></div><nav class="footer-nav" aria-label="Navigation de pied de page"><a href="/#accueil" data-scroll="accueil">${t("home")}</a><a href="/#boutique" data-scroll="boutique">${t("shop")}</a><a href="/#parfums" data-scroll="parfums">${t("perfumes")}</a><a href="/#offres" data-scroll="offres">${t("offers")}</a><a href="/#contact" data-scroll="contact">${t("contact")}</a><a href="${INSTAGRAM}" target="_blank" rel="noreferrer">@wissal__creations31 ↗</a></nav><div class="footer-bottom"><span>© ${new Date().getFullYear()} Wissal Creations</span><span>Livraison partout au Maroc · Paiement à la livraison</span><a href="/admin" data-route="/admin" class="admin-link">⌑ Admin</a></div></footer>`;
}

function cartDrawer() {
  const subtotal = state.cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
  return `<div class="drawer-backdrop ${state.cartOpen ? "open" : ""}" data-action="close-cart"></div><aside class="cart-drawer ${state.cartOpen ? "open" : ""}" aria-label="Panier" aria-hidden="${!state.cartOpen}">
    <div class="drawer-head"><div><p class="eyebrow">Wissal Creations</p><h2>${t("viewCart")} <span>(${state.cart.reduce((n, item) => n + item.quantity, 0)})</span></h2></div><button class="icon-close" data-action="close-cart" aria-label="Fermer">×</button></div>
    <div class="cart-body">${state.cart.length ? state.cart.map(cartItem).join("") : `<div class="cart-empty"><span>♡</span><p>${t("cartEmpty")}</p><button class="pill-button outline-pill" data-action="close-cart">${t("continue")}</button></div>`}
      ${state.cart.length ? `<div class="cart-subtotal"><span>${t("total")}</span><strong>${money(subtotal)}</strong></div><p class="cod-note">♡ ${t("cod")}</p>
      <form class="checkout-form" id="checkout-form"><h3>${t("checkout")}</h3>
        <div class="checkout-name"><label>${t("lastName")} *<input name="lastName" autocomplete="family-name" required></label><label>${t("firstName")} *<input name="firstName" autocomplete="given-name" required></label></div>
        <label>${t("phone")} *<input name="phone" type="tel" inputmode="tel" placeholder="06 00 00 00 00" required><small>Format marocain : 06XXXXXXXX ou 07XXXXXXXX</small></label>
        <label>${t("city")} *<input name="city" list="moroccan-cities" autocomplete="address-level2" required placeholder="Choisissez ou saisissez une ville"><datalist id="moroccan-cities">${CITIES.map(city => `<option value="${city}">`).join("")}</datalist></label>
        <label>${t("address")} *<textarea name="address" autocomplete="street-address" required rows="2" placeholder="Quartier, rue, numéro…"></textarea></label>
        <label>${t("note")}<textarea name="note" rows="2"></textarea></label>
        <button class="pill-button primary-pill checkout-button" type="submit">${t("confirm")} <span>↗</span></button><p class="checkout-error" role="alert"></p>
      </form>` : ""}
    </div>
  </aside>`;
}

function orderConfirmationModal() {
  if (!state.orderConfirmationId) return "";
  return `<div class="modal-backdrop" id="order-confirmation" aria-hidden="true"><section class="modal-card order-confirmation-modal" role="dialog" aria-modal="true" aria-labelledby="order-confirmation-title"><button class="icon-close modal-close" data-action="close-order-confirmation" aria-label="Fermer">×</button><img src="${LOGO}" alt="Logo Wissal Creations"><p class="eyebrow">Commande enregistrée</p><h2 id="order-confirmation-title">Merci ! Votre commande a bien été enregistrée. Nous vous contacterons très vite pour confirmer la livraison.</h2><a class="pill-button outline-pill" href="${receiptWhatsAppUrl(state.orderConfirmationId)}" target="_blank" rel="noreferrer">Confirmer sur WhatsApp ↗</a><button class="text-link" type="button" data-action="close-order-confirmation">Continuer</button></section></div>`;
}

function cartItem(item) {
  const product = state.products.find(candidate => candidate.id === item.id);
  return `<article class="cart-item"><img src="${asset(product?.image || item.image)}" alt=""><div class="cart-item-copy"><h3>${escapeHtml(item.title)}</h3><strong>${money(item.price)}</strong>${item.volume ? `<p class="cart-item-volume">Contenance : ${item.volume} ml</p>` : ""}${item.personalization ? `<p>Personnalisation : ${escapeHtml(item.personalization)}</p>` : ""}<div class="quantity-control"><button data-action="quantity" data-id="${item.id}" data-delta="-1" aria-label="Diminuer">−</button><span>${item.quantity}</span><button data-action="quantity" data-id="${item.id}" data-delta="1" aria-label="Augmenter">+</button><button class="remove-item" data-action="remove-item" data-id="${item.id}">Retirer</button></div></div></article>`;
}

function reviewModal() {
  return `<div class="modal-backdrop" id="review-modal" aria-hidden="true"><section class="review-modal modal-card" role="dialog" aria-modal="true" aria-labelledby="review-modal-title"><button class="icon-close modal-close" data-action="close-modal" aria-label="Fermer">×</button><p class="eyebrow">Votre expérience</p><h2 id="review-modal-title">Un mot doux à partager ?</h2><form id="review-form"><label>Votre prénom *<input name="name" required></label><label>Votre ville *<input name="city" required></label><label>Votre avis *<textarea name="text" rows="4" required maxlength="500"></textarea></label><label>Votre note *<select name="rating" required><option value="5">★★★★★ — 5 étoiles</option><option value="4">★★★★☆ — 4 étoiles</option><option value="3">★★★☆☆ — 3 étoiles</option><option value="2">★★☆☆☆ — 2 étoiles</option><option value="1">★☆☆☆☆ — 1 étoile</option></select></label><label>Votre photo *<input type="file" name="photo" accept="image/*" required></label><img class="review-preview" alt="Aperçu de votre photo"><button class="pill-button primary-pill">Envoyer pour validation ♡</button><p class="review-feedback" role="status"></p></form></section></div>`;
}

function quickModal() {
  return `<div class="modal-backdrop" id="quick-modal" aria-hidden="true"><section class="quick-modal modal-card" role="dialog" aria-modal="true" aria-labelledby="quick-title"><button class="icon-close modal-close" data-action="close-modal" aria-label="Fermer">×</button><img class="quick-image" src="" alt=""><div class="quick-content"><p class="eyebrow">Une création Wissal</p><h2 id="quick-title"></h2><p class="quick-description"></p><strong class="quick-price"></strong><label class="personalize-field"><span>${t("personalize")}</span><input class="quick-personalization" maxlength="90" placeholder="Ex. Salma, avec amour"></label><button class="pill-button primary-pill quick-add" data-action="quick-add">${t("addCart")} +</button></div></section></div>`;
}

function loginView() {
  return `<main class="admin-shell"><section class="admin-login"><img src="${LOGO}" alt="Logo Wissal Creations"><p class="eyebrow">Espace privé</p><h1>Bonjour Wissal.</h1><p>Connectez-vous pour gérer votre boutique et vos commandes.</p><form id="admin-login-form"><label>Mot de passe<input type="password" name="pin" autocomplete="current-password" required></label><button class="pill-button primary-pill">Accéder au tableau de bord ↗</button><p class="login-error" role="alert"></p></form><a class="text-link" href="/">← Retour à la boutique</a></section></main>`;
}

function adminView() {
  if (!state.adminAuthed) return loginView();
  const today = localDateKey(new Date());
  const todayOrders = state.orders.filter(order => localDateKey(order.createdAt) === today);
  const pendingOrders = state.orders.filter(order => order.status === "En attente");
  const deliveredOrders = state.orders.filter(order => order.status === "Livrée");
  const totalRevenue = orderRevenue(state.orders);
  const todayRevenue = orderRevenue(todayOrders);
  const pendingReviews = state.reviews.filter(review => review.status === "pending").length;
  return `<main class="admin-shell"><section class="admin-dashboard"><div class="admin-top"><div><p class="eyebrow">Wissal Creations · Administration</p><h1>Votre maison, en un regard.</h1></div><div class="admin-top-actions"><button class="pill-button outline-pill" data-action="change-pin">Changer le mot de passe</button><button class="pill-button outline-pill" data-action="logout">Déconnexion</button></div></div>
    <div class="kpi-grid"><article class="kpi"><span>Total des commandes</span><strong>${state.orders.length}</strong><small class="kpi-today">+${todayOrders.length} aujourd'hui</small><i>♡</i></article><article class="kpi"><span>En attente</span><strong>${pendingOrders.length}</strong><small class="kpi-today">${todayOrders.filter(order => order.status === "En attente").length} aujourd'hui</small><i>◷</i></article><article class="kpi"><span>Livrées</span><strong>${deliveredOrders.length}</strong><small class="kpi-today">${todayOrders.filter(order => order.status === "Livrée").length} aujourd'hui</small><i>✓</i></article><article class="kpi"><span>Chiffre d'affaires</span><strong>${money(totalRevenue)}</strong><small class="kpi-today">${money(todayRevenue)} aujourd'hui</small><i>✧</i></article></div>
    <div class="admin-tabs"><button data-admin-tab="orders" aria-pressed="${state.adminTab === "orders"}">Commandes <span>${state.orders.length}</span></button><button data-admin-tab="products" aria-pressed="${state.adminTab === "products"}">Produits <span>${state.products.length}</span></button><button data-admin-tab="perfumes" aria-pressed="${state.adminTab === "perfumes"}">Parfums <span>${state.perfumes.length}</span></button><button data-admin-tab="offers" aria-pressed="${state.adminTab === "offers"}">Offres <span>${state.offers.length}</span></button><button data-admin-tab="reviews" aria-pressed="${state.adminTab === "reviews"}">Avis clientes <span class="review-count ${pendingReviews ? "has-pending" : ""}">${pendingReviews}</span></button></div>
    ${state.adminTab === "orders" ? ordersPanel(filteredOrders()) : state.adminTab === "products" ? productsPanel() : state.adminTab === "perfumes" ? perfumesPanel() : state.adminTab === "offers" ? offersPanel() : reviewsPanel()}
  </section></main>`;
}

function orderRevenue(orders) {
  return orders.filter(order => order.status !== "Annulée").reduce((sum, order) => sum + Number(order.total || 0), 0);
}

function orderDateMatches(order) {
  const key = localDateKey(order.createdAt);
  if (state.orderDateFilter === "exact") return key === state.orderExactDate;
  if (state.orderDateFilter === "all") return true;
  const today = new Date();
  const todayKey = localDateKey(today);
  if (state.orderDateFilter === "today") return key === todayKey;
  if (state.orderDateFilter === "yesterday") {
    today.setDate(today.getDate() - 1);
    return key === localDateKey(today);
  }
  if (state.orderDateFilter === "last7") {
    const start = new Date();
    start.setDate(start.getDate() - 6);
    return key >= localDateKey(start) && key <= todayKey;
  }
  if (state.orderDateFilter === "month") {
    const date = new Date(order.createdAt);
    const now = new Date();
    return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
  }
  return true;
}

function filteredOrders() {
  const query = state.orderQuery.toLowerCase();
  return [...state.orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).filter(order => {
    const fields = `${order.id} ${order.lastName} ${order.firstName} ${order.phone} ${order.city} ${order.address}`.toLowerCase();
    return fields.includes(query) && (state.orderStatus === "Toutes" || order.status === state.orderStatus) && orderDateMatches(order);
  });
}

function ordersPanel(orders) {
  const statuses = ["En attente", "Confirmée", "En préparation", "En livraison", "Livrée", "Annulée"];
  const dateOptions = [["all", "Toutes les dates"], ["today", "Aujourd'hui"], ["yesterday", "Hier"], ["last7", "7 derniers jours"], ["month", "Ce mois"]];
  const selectedDateLabel = state.orderDateFilter === "exact" ? dateLabel(`${state.orderExactDate}T12:00:00`) : "";
  return `<div class="admin-panel"><section class="day-activity" aria-label="Activité par jour"><div class="day-activity-heading"><h2>Activité par jour</h2><span>Bilan par jour</span></div><div class="day-activity-list">${dailyActivityCards()}</div></section><div class="panel-heading"><div><h2>Gestion des commandes</h2><p>Suivez chaque attention, de sa préparation à sa livraison.</p></div><div class="order-tools"><input id="order-search" type="search" aria-label="Rechercher une commande" placeholder="Nom, téléphone, ville, commande…" value="${escapeHtml(state.orderQuery)}"><select id="order-status-filter" aria-label="Filtrer par statut"><option value="Toutes">Tous les statuts</option>${statuses.map(status => `<option value="${status}" ${state.orderStatus === status ? "selected" : ""}>${status}</option>`).join("")}</select><select id="order-date-filter" aria-label="Filtrer par date">${dateOptions.map(([value, label]) => `<option value="${value}" ${state.orderDateFilter === value ? "selected" : ""}>${label}</option>`).join("")}${selectedDateLabel ? `<option value="exact" selected>${selectedDateLabel}</option>` : ""}</select></div></div>
  ${orders.length ? `<div class="orders-list">${groupOrdersByDay(orders, statuses)}</div>` : `<div class="admin-empty">Aucune commande ne correspond à votre recherche.</div>`}</div>`;
}

function dailyActivityCards() {
  const groups = new Map();
  state.orders.forEach(order => {
    const key = localDateKey(order.createdAt);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(order);
  });
  const todayKey = localDateKey(new Date());
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = localDateKey(yesterday);
  const keys = [...groups.keys()].sort((a, b) => a === "unknown" ? 1 : b === "unknown" ? -1 : b.localeCompare(a));
  if (!keys.length) return `<p class="day-activity-empty">Vos commandes quotidiennes apparaîtront ici.</p>`;
  return keys.map(key => {
    const dayOrders = groups.get(key);
    const confirmed = dayOrders.filter(order => ["Confirmée", "En préparation", "En livraison", "Livrée"].includes(order.status)).length;
    const canceled = dayOrders.filter(order => order.status === "Annulée").length;
    const label = key === todayKey ? "Aujourd'hui" : key === yesterdayKey ? "Hier" : key === "unknown" ? "Date inconnue" : dateLabel(`${key}T12:00:00`);
    return `<button type="button" class="day-activity-card ${state.orderDateFilter === "exact" && state.orderExactDate === key ? "is-selected" : ""}" data-order-day="${key}" aria-pressed="${state.orderDateFilter === "exact" && state.orderExactDate === key}"><strong>${label}</strong><span>${dayOrders.length} commande${dayOrders.length === 1 ? "" : "s"}</span><small>${confirmed} confirmée${confirmed === 1 ? "" : "s"} / livrée${confirmed === 1 ? "" : "s"} · ${canceled} annulée${canceled === 1 ? "" : "s"}</small><b>${money(orderRevenue(dayOrders))}</b></button>`;
  }).join("");
}

function groupOrdersByDay(orders, statuses) {
  const groups = new Map();
  orders.forEach(order => {
    const key = localDateKey(order.createdAt);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(order);
  });
  const todayKey = localDateKey(new Date());
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = localDateKey(yesterday);
  return [...groups.entries()].sort(([a], [b]) => a === "unknown" ? 1 : b === "unknown" ? -1 : b.localeCompare(a)).map(([key, dayOrders]) => {
    const label = key === todayKey ? `Aujourd'hui — ${dateLabel(`${key}T12:00:00`)}` : key === yesterdayKey ? `Hier — ${dateLabel(`${key}T12:00:00`)}` : key === "unknown" ? "Date inconnue" : dateLabel(`${key}T12:00:00`);
    return `<section class="orders-day-group"><h3>${label} <span>· ${dayOrders.length} commande${dayOrders.length === 1 ? "" : "s"} · ${money(orderRevenue(dayOrders))}</span></h3>${dayOrders.map(order => orderCard(order, statuses)).join("")}</section>`;
  }).join("");
}

function orderCard(order, statuses) {
  const date = new Date(order.createdAt);
  const timestamp = Number.isNaN(date.getTime()) ? "Date inconnue" : date.toLocaleString("fr-MA", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  const waPhone = String(order.phone || "").replace(/\D/g, "").replace(/^0/, "212");
  return `<article class="order-card ${order.status === "Annulée" ? "is-canceled" : ""}"><div class="order-card-top"><div class="order-card-meta"><span class="order-number">${escapeHtml(order.id)}</span><span class="order-date">${timestamp}</span>${order.status === "Annulée" ? `<span class="order-status-badge is-canceled">Annulée</span>` : ""}</div><div class="order-status-actions">${order.status !== "Annulée" ? `<button type="button" class="cancel-order-button" data-action="cancel-order" data-id="${escapeHtml(order.id)}">Annuler</button>` : ""}<select class="status-select" data-order-status="${escapeHtml(order.id)}" aria-label="Statut">${statuses.map(status => `<option ${order.status === status ? "selected" : ""}>${status}</option>`).join("")}</select></div></div>
    <div class="order-detail-grid"><div><small>DESTINATAIRE</small><strong>${escapeHtml(order.firstName)} ${escapeHtml(order.lastName)}</strong></div><div><small>TÉLÉPHONE</small><strong>${escapeHtml(order.phone)}</strong><span class="order-contact-links"><a href="https://wa.me/${escapeHtml(waPhone)}" target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="tel:${escapeHtml(order.phone)}">Appeler ↗</a></span></div><div><small>VILLE & ADRESSE</small><strong>${escapeHtml(order.city)}</strong><span>${escapeHtml(order.address)}</span></div>
    <div class="order-products"><small>CRÉATIONS</small>${(order.items || []).map(item => `<p>${item.quantity} × ${escapeHtml(item.title)}${item.volume ? ` · ${item.volume} ml` : ""}${item.personalization ? ` · ${escapeHtml(item.personalization)}` : ""}</p>`).join("")}${order.note ? `<p class="order-note">Note : ${escapeHtml(order.note)}</p>` : ""}</div><div><small>TOTAL · PAIEMENT À LA LIVRAISON</small><strong class="order-total">${money(order.total)}</strong></div></div>
    <button class="pill-button outline-pill" data-action="download-receipt" data-id="${escapeHtml(order.id)}">Bon de Livraison (PDF) ↓</button></article>`;
}

function productsPanel() {
  return `<div class="admin-panel"><div class="panel-heading"><div><h2>Gestion de la carte</h2><p>Les modifications apparaissent immédiatement dans la boutique.</p></div></div>
    <form class="product-editor" id="product-form"><input type="hidden" name="id"><label>Nom du produit<input name="title" required placeholder="Nom de la création"></label><label>Catégorie<select name="category"><option>Best-Sellers</option><option>Nouveautés</option><option>Coffrets</option><option>Personnalisable</option></select></label><label>Prix en MAD<input name="price" type="number" min="1" step="1" required></label><label class="stock-toggle-label"><span>Stock</span><span class="stock-toggle-wrap"><input class="stock-toggle" name="stock" type="checkbox" value="En stock" checked><span class="stock-toggle-track"></span><span class="stock-toggle-text">En stock</span></span></label><label class="product-image-input">Image — URL ou fichier<input name="imageUrl" placeholder="/assets/ma-photo.webp"><input name="imageFile" type="file" accept="image/*"><img class="product-image-preview" alt="Aperçu du produit" hidden></label><label class="editor-description">Description<textarea name="description" rows="2"></textarea></label><div class="product-editor-actions"><button class="pill-button primary-pill">Enregistrer le produit ♡</button><button type="button" class="pill-button outline-pill" data-action="reset-product">Nouvelle fiche</button></div></form>
    <div class="admin-products">${state.products.map(product => `<article class="admin-product"><img src="${asset(product.image)}" alt=""><div><strong>${escapeHtml(product.title)}</strong><span>${escapeHtml(product.category)} · ${money(product.price)} · ${escapeHtml(product.stock)}</span></div><button data-action="edit-product" data-id="${escapeHtml(product.id)}">Modifier</button><button data-action="delete-product" data-id="${escapeHtml(product.id)}" aria-label="Supprimer ${escapeHtml(product.title)}">Supprimer</button></article>`).join("")}</div></div>`;
}

function reviewsPanel() {
  const filters = [["pending", "En attente d'approbation"], ["approved", "Approuvés (Publiés)"], ["all", "Tous"]];
  const reviews = state.reviews.filter(review => state.reviewFilter === "all" || review.status === state.reviewFilter);
  return `<div class="admin-panel"><div class="panel-heading"><div><h2>Gestion des avis clientes</h2><p>Les avis soumis restent privés jusqu'à leur validation.</p></div><button class="pill-button outline-pill" data-action="admin-add-review">${state.reviewFormOpen ? "Fermer" : "+ Ajouter un avis"}</button></div>
    <form class="admin-review-form" id="admin-review-form" ${state.reviewFormOpen ? "" : "hidden"}><label>Prénom et nom *<input name="name" required></label><label>Ville *<input name="city" required></label><label>Note *<select name="rating"><option value="5">★★★★★ — 5 étoiles</option><option value="4">★★★★☆ — 4 étoiles</option><option value="3">★★★☆☆ — 3 étoiles</option><option value="2">★★☆☆☆ — 2 étoiles</option><option value="1">★☆☆☆☆ — 1 étoile</option></select></label><label class="admin-review-comment">Avis *<textarea name="text" rows="3" required maxlength="500"></textarea></label><label>Photo cliente *<input name="photo" type="file" accept="image/*" required></label><img class="admin-review-preview" alt="Aperçu de la photo" hidden><button class="pill-button primary-pill">Ajouter comme avis approuvé ♡</button><p class="admin-review-feedback" role="status"></p></form>
    <div class="review-filter-pills" role="group" aria-label="Filtrer les avis">${filters.map(([value, label]) => `<button type="button" data-review-filter="${value}" aria-pressed="${state.reviewFilter === value}">${label}${value === "pending" ? ` <span>${state.reviews.filter(review => review.status === "pending").length}</span>` : ""}</button>`).join("")}</div>
    <div class="admin-reviews">${reviews.length ? reviews.map(review => `<article class="admin-review"><img src="${review.image || asset(PHOTO_FILES[2])}" alt="Photo partagée par ${escapeHtml(review.name)}"><div><strong>${escapeHtml(review.name)} · ${escapeHtml(review.city)}</strong><span class="review-stars" aria-label="${review.rating || 5} étoiles">${"★".repeat(review.rating || 5)}${"☆".repeat(5 - (review.rating || 5))}</span><p>${escapeHtml(review.text)}</p><small>Envoyé le ${dateLabel(review.createdAt)} · <b class="review-status review-status-${review.status}">${review.status === "approved" ? "Approuvé · Publié" : review.status === "rejected" ? "Refusé" : "En attente"}</b>${review.verified ? " · Achat vérifié" : ""}</small></div><div class="review-admin-actions"><button data-action="approve-review" data-id="${escapeHtml(review.id)}" ${review.status === "approved" ? "disabled" : ""}>${review.status === "approved" ? "✓ Déjà publié" : "✓ Approuver (Publier)"}</button><button data-action="delete-review" data-id="${escapeHtml(review.id)}">✕ Refuser / Supprimer</button></div></article>`).join("") : `<div class="admin-empty">${state.reviewFilter === "pending" ? "Aucun avis en attente." : "Aucun avis dans cette sélection."}</div>`}</div></div>`;
}

function perfumesPanel() {
  const familyOptions = PERFUME_FAMILIES.map(family => `<option value="${escapeHtml(family)}" ${state.perfumeFamily === family ? "selected" : ""}>${escapeHtml(family)}</option>`).join("");
  const badgeOptions = PERFUME_BADGES.map(badge => `<option value="${escapeHtml(badge)}">${escapeHtml(badge)}</option>`).join("");
  return `<div class="admin-panel perfume-panel"><div class="panel-heading"><div><h2>Gestion des Parfums &amp; Fragrances</h2><p>Ajoutez, modifiez et gérez vos senteurs et contenances disponibles sur la boutique.</p></div></div>
    <section class="perfume-editor-card" aria-labelledby="perfume-editor-title"><div class="perfume-editor-heading"><h3 id="perfume-editor-title">Ajouter / Modifier un Parfum</h3><span>Une senteur, trois formats possibles</span></div>
      <form class="perfume-editor" id="perfume-form"><input type="hidden" name="id"><label>Nom du parfum *<input name="name" required maxlength="80" placeholder="Velours de Rose"></label><label>Famille olfactive<select name="family" required>${PERFUME_FAMILIES.map(family => `<option value="${escapeHtml(family)}">${escapeHtml(family)}</option>`).join("")}</select></label><label>Notes olfactives<input name="notes" maxlength="160" placeholder="Rose de Damas, Vanille, Musc Blanc"></label><label>Badge / Étiquette<select name="badge"><option value="">Aucun</option>${badgeOptions}</select></label>
        <fieldset class="perfume-volume-prices"><legend>Prix selon la contenance (MAD)</legend><label>Prix 30 ml<input name="price30" type="number" min="1" step="1" inputmode="numeric" placeholder="150"></label><label>Prix 50 ml<input name="price50" type="number" min="1" step="1" inputmode="numeric" placeholder="240"></label><label>Prix 100 ml<input name="price100" type="number" min="1" step="1" inputmode="numeric" placeholder="380"></label></fieldset>
        <label class="perfume-photo-field">Photo du flacon / parfum<input name="photo" type="file" accept="image/*"><small>Image compressée automatiquement pour un stockage léger.</small></label><div class="perfume-preview-wrap"><img class="perfume-image-preview" alt="Aperçu du flacon" hidden></div>
        <label class="stock-toggle-label perfume-stock-label"><span>Statut du stock</span><span class="stock-toggle-wrap"><input class="stock-toggle" name="stock" type="checkbox" checked><span class="stock-toggle-track"></span><span class="stock-toggle-text">En stock</span></span></label>
        <div class="perfume-editor-actions"><button type="submit" class="pill-button primary-pill" data-perfume-submit>Enregistrer le parfum</button><button type="button" class="pill-button outline-pill" data-action="reset-perfume">Nouveau parfum</button></div><p class="perfume-feedback" role="status"></p>
      </form>
    </section>
    <section class="perfume-list-section" aria-label="Parfums enregistrés"><div class="perfume-list-heading"><div><h3>Parfums enregistrés</h3><p>${state.perfumes.length} parfum${state.perfumes.length === 1 ? "" : "s"} dans votre collection</p></div><div class="perfume-list-filters"><label class="visually-hidden" for="perfume-search">Rechercher un parfum</label><input id="perfume-search" type="search" value="${escapeHtml(state.perfumeQuery)}" placeholder="Rechercher un parfum…"><label class="visually-hidden" for="perfume-family-filter">Filtrer par famille olfactive</label><select id="perfume-family-filter"><option value="Toutes les familles">Toutes les familles</option>${familyOptions}</select></div></div>
      <div class="admin-perfumes-list">${perfumeCards(filteredPerfumes())}</div>
    </section>
  </div>`;
}

function filteredPerfumes() {
  const query = state.perfumeQuery.trim().toLocaleLowerCase("fr");
  return state.perfumes.filter(perfume => {
    const content = `${perfume.name} ${perfume.family} ${perfume.notes || ""} ${perfume.badge || ""}`.toLocaleLowerCase("fr");
    return (!query || content.includes(query)) && (state.perfumeFamily === "Toutes les familles" || perfume.family === state.perfumeFamily);
  });
}

function perfumeCards(perfumes) {
  if (!perfumes.length) return `<div class="perfume-empty">${state.perfumes.length ? "Aucun parfum ne correspond à ces filtres." : "Votre collection est prête à accueillir son premier parfum."}</div>`;
  return perfumes.map(perfume => {
    const stock = perfume.stock || "En stock";
    return `<article class="admin-perfume-card"><img class="admin-perfume-image" src="${asset(perfume.image || PHOTO_FILES[2])}" alt="Flacon ${escapeHtml(perfume.name)}"><div class="admin-perfume-info"><div class="perfume-name-row"><h4>${escapeHtml(perfume.name)}</h4>${perfume.badge ? `<span class="perfume-badge">${escapeHtml(perfume.badge)}</span>` : ""}</div><span class="perfume-family-pill">${escapeHtml(perfume.family)}</span>${perfume.notes ? `<p class="perfume-notes">${escapeHtml(perfume.notes)}</p>` : ""}<div class="perfume-price-tags">${perfumePriceTags(perfume)}</div></div><div class="admin-perfume-controls"><label class="perfume-stock-control"><input class="stock-toggle" type="checkbox" data-action="toggle-perfume-stock" data-id="${escapeHtml(perfume.id)}" ${stock === "En stock" ? "checked" : ""}><span class="stock-toggle-track"></span><small>${stock === "En stock" ? "En stock" : "Rupture de stock"}</small></label><button type="button" data-action="edit-perfume" data-id="${escapeHtml(perfume.id)}">Modifier</button><button type="button" data-action="delete-perfume" data-id="${escapeHtml(perfume.id)}">Supprimer</button></div></article>`;
  }).join("");
}

function perfumePriceTags(perfume) {
  const prices = perfume.prices || {};
  const tags = [30, 50, 100].filter(size => Number(prices[size]) > 0).map(size => `<span class="perfume-price-tag"><b>${size} ml</b><strong>${money(prices[size])}</strong></span>`);
  return tags.length ? tags.join("") : `<span class="perfume-no-price">Aucun format proposé</span>`;
}

function offersPanel() {
  const offers = state.offers;
  return `<div class="admin-panel"><div class="panel-heading"><div><h2>Gestion des offres</h2><p>Créez les coffrets mis en avant dans le carrousel de la boutique.</p></div></div>
    <form class="offer-editor" id="offer-form"><input type="hidden" name="id"><label>Badge / Étiquette pub<input name="badge" required maxlength="32" placeholder="COFFRET 01"></label><label>Titre du coffret<input name="title" required maxlength="80" placeholder="Coffret Fleurs & Douceurs"></label><label>Prix promo (MAD)<input name="price" type="number" min="1" step="1" required></label><label>Ancien prix barré (MAD)<input name="oldPrice" type="number" min="1" step="1" placeholder="Facultatif"></label>
      <label class="offer-photo-input">Photos du coffret<input name="photos" type="file" accept="image/*" multiple><small>Une ou plusieurs images · compressées pour un enregistrement léger.</small></label><div class="offer-preview-list" aria-live="polite"></div>
      <label class="stock-toggle-label"><span>Statut</span><span class="stock-toggle-wrap"><input class="stock-toggle" name="active" type="checkbox" checked><span class="stock-toggle-track"></span><span class="stock-toggle-text">Actif · Visible dans le carrousel</span></span></label>
      <div class="offer-editor-actions"><button class="pill-button primary-pill">Enregistrer l'offre ♡</button><button type="button" class="pill-button outline-pill" data-action="reset-offer">Nouvelle offre</button></div><p class="offer-feedback" role="status"></p>
    </form>
    <div class="admin-offers">${offers.length ? offers.map((offer, index) => `<article class="admin-offer"><img src="${asset(offer.photos?.[0] || PHOTO_FILES[8])}" alt="Aperçu de ${escapeHtml(offer.title)}"><div class="admin-offer-copy"><strong>${escapeHtml(offer.title)}</strong><span>${escapeHtml(offer.badge || "OFFRE SPÉCIALE")} · ${money(offer.price)}${offer.oldPrice ? ` · <del>${money(offer.oldPrice)}</del>` : ""}</span></div><label class="offer-list-toggle" aria-label="${offer.active ? "Masquer" : "Activer"} ${escapeHtml(offer.title)}"><input class="stock-toggle" type="checkbox" data-action="toggle-offer" data-id="${escapeHtml(offer.id)}" ${offer.active ? "checked" : ""}><span class="stock-toggle-track"></span><small>${offer.active ? "Actif" : "Masqué"}</small></label><div class="admin-offer-reorder"><button type="button" data-action="move-offer" data-direction="up" data-id="${escapeHtml(offer.id)}" aria-label="Monter ${escapeHtml(offer.title)}" ${index === 0 ? "disabled" : ""}>↑</button><button type="button" data-action="move-offer" data-direction="down" data-id="${escapeHtml(offer.id)}" aria-label="Descendre ${escapeHtml(offer.title)}" ${index === offers.length - 1 ? "disabled" : ""}>↓</button></div><div class="admin-offer-actions"><button type="button" data-action="edit-offer" data-id="${escapeHtml(offer.id)}">Modifier</button><button type="button" data-action="delete-offer" data-id="${escapeHtml(offer.id)}">Supprimer</button></div></article>`).join("") : `<div class="admin-empty">Aucune offre pour le moment. Ajoutez votre premier coffret ci-dessus.</div>`}</div></div>`;
}

function pinModal() {
  return `<div class="modal-backdrop" id="pin-modal" aria-hidden="true"><section class="modal-card pin-modal" role="dialog" aria-modal="true"><button class="icon-close modal-close" data-action="close-modal" aria-label="Fermer">×</button><p class="eyebrow">Sécurité du compte</p><h2>Modifier le mot de passe</h2><form id="pin-form"><label>Mot de passe actuel<input type="password" name="current" autocomplete="current-password" required></label><label>Nouveau mot de passe<input type="password" name="next" autocomplete="new-password" minlength="6" required></label><button class="pill-button primary-pill">Enregistrer</button><p class="pin-feedback" role="status"></p></form></section></div>`;
}

function modals() {
  return `${reviewModal()}${quickModal()}${orderConfirmationModal()}${pinModal()}<div class="toast" role="status"></div>`;
}

function adminModals() {
  return `${pinModal()}<div class="toast" role="status"></div>`;
}

function render() {
  document.documentElement.lang = state.lang === "ar" ? "ar" : state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  const admin = window.location.pathname.replace(/\/+$/, "") === "/admin";
  if (admin) clearOfferCarouselTimers();
  document.title = admin ? "Administration — Wissal Creations" : "Wissal Creations — Des créations avec une âme";
  const app = document.querySelector("#app");
  app.innerHTML = `${admin ? `${adminView()}${footer()}${adminModals()}` : `${header()}${storefront()}${footer()}${cartDrawer()}${modals()}`}`;
  if (!admin) bindStoreInteractions();
  else bindAdminInteractions();
  observeReveals();
}

function bindStoreInteractions() {
  const headerEl = document.querySelector(".site-header");
  window.onscroll = () => headerEl?.classList.toggle("scrolled", window.scrollY > 24);
  document.querySelector(".menu-toggle")?.addEventListener("click", event => {
    const open = headerEl.classList.toggle("menu-open");
    event.currentTarget.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("locked", open);
  });
  document.querySelectorAll(".main-nav a[data-scroll], .footer-nav a[data-scroll]").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    document.body.classList.remove("locked");
    headerEl?.classList.remove("menu-open");
    document.getElementById(link.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
    history.replaceState({}, "", `/#${link.dataset.scroll}`);
  }));
  document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => {
    closeCart();
    state.lang = button.dataset.lang;
    localStorage.setItem("wc-language", state.lang);
    render();
  }));
  document.querySelectorAll(".catalog-tab").forEach(button => button.addEventListener("click", () => {
    state.productCategory = button.dataset.category;
    render();
    document.getElementById("boutique")?.scrollIntoView({ behavior: "smooth" });
  }));
  document.querySelector("#product-search")?.addEventListener("input", event => {
    state.productQuery = event.target.value;
    const position = window.scrollY;
    document.querySelector(".product-grid").innerHTML = state.products.filter(product => (state.productCategory === "Tout" || product.category === state.productCategory) && `${product.title} ${product.description} ${product.category}`.toLowerCase().includes(state.productQuery.toLowerCase())).map(productCard).join("") || `<p class="empty-products">Aucun produit ne correspond à cette recherche.</p>`;
    bindProductActions();
    bindQuickView();
    observeReveals();
    window.scrollTo(0, position);
  });
  bindProductActions();
  bindPerfumeStoreInteractions();
  bindOfferCarousel();
  document.querySelectorAll('[data-action="add-offer"]').forEach(button => button.addEventListener("click", () => {
    const offer = state.offers.find(item => item.id === button.dataset.offerId && item.active);
    if (!offer) return;
    addToCart({ id: `offer-${offer.id}`, title: offer.title, price: Number(offer.price), image: offer.photos?.[0] || PHOTO_FILES[8] });
  }));
  document.querySelector(".review-open")?.addEventListener("click", () => showModal("review-modal"));
  bindReviewSubmission();
  bindCartSubmission();
  bindQuickView();
  document.querySelectorAll('[data-action="open-cart"]').forEach(button => button.addEventListener("click", () => openCart()));
  document.querySelectorAll('[data-action="close-cart"]').forEach(button => button.addEventListener("click", event => {
    if (button.classList.contains("drawer-backdrop") || button.tagName === "BUTTON") {
      event.preventDefault();
      closeCart();
    }
  }));
  bindLightbox();
  document.querySelectorAll('[data-action="close-modal"]').forEach(button => button.addEventListener("click", () => hideModal(button.closest(".modal-backdrop"))));
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => backdrop.addEventListener("click", event => { if (event.target === backdrop) hideModal(backdrop); }));
  document.querySelectorAll('[data-action="quantity"]').forEach(button => button.addEventListener("click", () => updateQuantity(button.dataset.id, Number(button.dataset.delta))));
  document.querySelectorAll('[data-action="remove-item"]').forEach(button => button.addEventListener("click", () => removeFromCart(button.dataset.id)));
  document.querySelectorAll('[data-action="close-order-confirmation"]').forEach(button => button.addEventListener("click", () => {
    state.orderConfirmationId = "";
    hideModal(button.closest(".modal-backdrop"));
    render();
  }));
  document.querySelector("#order-confirmation")?.addEventListener("click", event => {
    if (event.target !== event.currentTarget) return;
    state.orderConfirmationId = "";
    hideModal(event.currentTarget);
    render();
  });
}

function clearOfferCarouselTimers() {
  if (offerSlideTimer) window.clearInterval(offerSlideTimer);
  if (offerPhotoTimer) window.clearInterval(offerPhotoTimer);
  if (offerResizeHandler) window.removeEventListener("resize", offerResizeHandler);
  offerSlideTimer = null;
  offerPhotoTimer = null;
  offerResizeHandler = null;
}

function bindOfferCarousel() {
  clearOfferCarouselTimers();
  const carousel = document.querySelector(".offer-carousel");
  if (!carousel) return;
  const viewport = carousel.querySelector(".offer-viewport");
  const track = carousel.querySelector(".offer-track");
  const cards = [...track.children];
  const count = Number(carousel.dataset.offerCount);
  const prefix = Number(carousel.dataset.offerPrefix);
  if (!count || !cards.length) return;
  let index = prefix;
  let paused = false;
  let startX = null;

  const placeTrack = () => {
    const currentCard = cards[index];
    if (currentCard) track.style.transform = `translate3d(-${currentCard.offsetLeft}px, 0, 0)`;
    carousel.querySelectorAll(".offer-dot").forEach((dot, dotIndex) => {
      const active = dotIndex === ((index - prefix) % count + count) % count;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-pressed", String(active));
    });
  };
  const goTo = nextIndex => {
    index = nextIndex;
    track.style.transition = "";
    placeTrack();
  };
  const move = direction => goTo(index + direction);
  const startAutoplay = () => {
    if (offerSlideTimer) window.clearInterval(offerSlideTimer);
    offerSlideTimer = window.setInterval(() => { if (!paused) move(1); }, 3500);
  };

  track.addEventListener("transitionend", event => {
    if (event.target !== track) return;
    if (index < prefix || index >= prefix + count) {
      index += index < prefix ? count : -count;
      track.style.transition = "none";
      placeTrack();
      requestAnimationFrame(() => { track.style.transition = ""; });
    }
  });
  carousel.querySelectorAll("[data-offer-direction]").forEach(button => button.addEventListener("click", () => move(button.dataset.offerDirection === "next" ? 1 : -1)));
  carousel.querySelectorAll("[data-offer-index]").forEach(button => button.addEventListener("click", () => goTo(prefix + Number(button.dataset.offerIndex))));
  viewport.addEventListener("pointerenter", () => { paused = true; if (offerSlideTimer) window.clearInterval(offerSlideTimer); });
  viewport.addEventListener("pointerleave", () => { paused = false; startAutoplay(); });
  viewport.addEventListener("focusin", () => { paused = true; if (offerSlideTimer) window.clearInterval(offerSlideTimer); });
  viewport.addEventListener("focusout", event => {
    if (!viewport.contains(event.relatedTarget)) { paused = false; startAutoplay(); }
  });
  viewport.addEventListener("pointerdown", event => { startX = event.clientX; });
  viewport.addEventListener("pointerup", event => {
    if (startX === null) return;
    const delta = event.clientX - startX;
    if (Math.abs(delta) > 42) move(delta < 0 ? 1 : -1);
    startX = null;
  });
  viewport.addEventListener("pointercancel", () => { startX = null; });
  offerResizeHandler = placeTrack;
  window.addEventListener("resize", offerResizeHandler, { passive: true });
  placeTrack();
  startAutoplay();
  const cardsByOffer = new Map();
  cards.forEach(card => {
    const offerId = card.dataset.offerCard;
    if (!cardsByOffer.has(offerId)) cardsByOffer.set(offerId, []);
    cardsByOffer.get(offerId).push(card);
  });
  const offerPhotoIndexes = new Map();
  offerPhotoTimer = window.setInterval(() => {
    cardsByOffer.forEach((offerCards, offerId) => {
      if (offerCards.some(card => card.matches(":hover"))) return;
      const photoCount = offerCards[0].querySelectorAll(".offer-ad-photo").length;
      if (photoCount < 2) return;
      const next = ((offerPhotoIndexes.get(offerId) || 0) + 1) % photoCount;
      offerPhotoIndexes.set(offerId, next);
      offerCards.forEach(card => card.querySelectorAll(".offer-ad-photo").forEach((photo, photoIndex) => photo.classList.toggle("is-current", photoIndex === next)));
    });
  }, 3300);
}

function bindProductActions() {
  document.querySelectorAll('[data-action="add-cart"]').forEach(button => button.addEventListener("click", () => {
    const product = state.products.find(item => item.id === button.dataset.id);
    const input = document.querySelector(`[data-personalization="${CSS.escape(product.id)}"]`);
    addToCart(product, input?.value.trim() || "");
  }));
}

function bindPerfumeStoreInteractions() {
  const grid = document.querySelector(".perfume-grid");
  if (!grid) return;
  const bindCards = () => {
    grid.querySelectorAll('[data-action="select-perfume-volume"]').forEach(button => button.addEventListener("click", () => {
      const card = button.closest(".perfume-product-card");
      card.querySelectorAll("[data-action=select-perfume-volume]").forEach(option => option.setAttribute("aria-pressed", String(option === button)));
      const price = card.querySelector("[data-perfume-price]");
      if (price) price.textContent = money(Number(button.dataset.price));
    }));
    grid.querySelectorAll('[data-action="add-perfume"]').forEach(button => button.addEventListener("click", () => {
      const perfume = state.perfumes.find(item => item.id === button.dataset.perfumeId);
      if (!perfume || perfume.stock !== "En stock") return;
      const card = button.closest(".perfume-product-card");
      const selected = card?.querySelector('[data-action="select-perfume-volume"][aria-pressed="true"]');
      const volume = Number(selected?.dataset.volume);
      const price = Number(selected?.dataset.price);
      if (!volume || !price) return;
      addToCart({ id: `perfume-${perfume.id}-${volume}ml`, title: perfume.name, price, image: perfume.image, volume });
    }));
  };
  const refresh = () => {
    const perfumes = filteredStorePerfumes();
    grid.innerHTML = perfumes.length ? perfumes.map(perfumeStoreCard).join("") : `<p class="empty-products">Aucun parfum ne correspond à votre recherche.</p>`;
    bindCards();
    observeReveals();
  };
  document.querySelectorAll("[data-perfume-family]").forEach(button => button.addEventListener("click", () => {
    state.perfumeStoreFamily = button.dataset.perfumeFamily;
    document.querySelectorAll("[data-perfume-family]").forEach(filter => filter.setAttribute("aria-pressed", String(filter === button)));
    refresh();
  }));
  document.querySelector("#perfume-store-search")?.addEventListener("input", event => {
    state.perfumeStoreQuery = event.target.value;
    refresh();
  });
  bindCards();
}

function addToCart(product, personalization = "") {
  if (!product) return;
  const key = `${product.id}::${personalization}`;
  const existing = state.cart.find(item => item.key === key);
  if (existing) existing.quantity += 1;
  else state.cart.push({ key, id: product.id, title: product.title, price: Number(product.price), image: product.image, volume: Number(product.volume) || null, personalization, quantity: 1 });
  saveStored("wc-cart", state.cart);
  showToast(`${product.title}${product.volume ? ` · ${product.volume} ml` : ""} · ajouté au panier ♡`);
  render();
  openCart();
}

function updateQuantity(id, delta) {
  const item = state.cart.find(row => row.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) state.cart = state.cart.filter(row => row !== item);
  saveStored("wc-cart", state.cart);
  render();
  openCart();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(item => item.id !== id);
  saveStored("wc-cart", state.cart);
  render();
  openCart();
}

function openCart() {
  state.cartOpen = true;
  document.querySelector(".cart-drawer")?.classList.add("open");
  document.querySelector(".drawer-backdrop")?.classList.add("open");
  document.querySelector(".cart-drawer")?.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
}

function closeCart() {
  state.cartOpen = false;
  document.querySelector(".cart-drawer")?.classList.remove("open");
  document.querySelector(".drawer-backdrop")?.classList.remove("open");
  document.querySelector(".cart-drawer")?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
}

function bindCartSubmission() {
  document.querySelector("#checkout-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    const phone = form.elements.phone.value.replace(/[\s().+-]/g, "");
    const error = form.querySelector(".checkout-error");
    if (!/^0[67]\d{8}$/.test(phone)) {
      error.textContent = "Saisissez un numéro marocain valide au format 06XXXXXXXX ou 07XXXXXXXX.";
      form.elements.phone.focus();
      return;
    }
    if (!form.reportValidity()) return;
    if (!state.cart.length) return;
    const data = new FormData(form);
    const order = {
      id: `#WC-${new Date().getFullYear()}-${String(Math.floor(1000 + Math.random() * 9000))}`,
      createdAt: new Date().toISOString(),
      firstName: String(data.get("firstName")).trim(),
      lastName: String(data.get("lastName")).trim(),
      phone,
      city: String(data.get("city")).trim(),
      address: String(data.get("address")).trim(),
      note: String(data.get("note") || "").trim(),
      items: state.cart.map(item => ({ ...item })),
      total: state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      status: "En attente"
    };
    state.orders = [...state.orders, order];
    saveStored("wc-orders", state.orders);
    state.cart = [];
    saveStored("wc-cart", state.cart);
    state.orderConfirmationId = order.id;
    render();
    showModal("order-confirmation");
  });
}

function receiptWhatsAppUrl(orderId) {
  const order = state.orders.find(row => row.id === orderId);
  if (!order) return INSTAGRAM_DM;
  const lines = [
    `Bonjour Wissal, voici ma commande ${order.id}.`,
    `Destinataire : ${order.firstName} ${order.lastName}`,
    `Téléphone : ${order.phone}`,
    `Livraison : ${order.city}, ${order.address}`,
    ...order.items.map(item => `${item.quantity} × ${item.title}${item.volume ? ` · ${item.volume} ml` : ""}${item.personalization ? ` (${item.personalization})` : ""} — ${money(item.price * item.quantity)}`),
    `Total à payer à la livraison : ${money(order.total)}`
  ];
  return `https://wa.me/?text=${encodeURIComponent(lines.join("\n"))}`;
}

async function downloadOrderReceipt(orderId) {
  if (window.location.pathname.replace(/\/+$/, "") !== "/admin" || !state.adminAuthed) return;
  const order = state.orders.find(row => row.id === orderId);
  if (!order) return;
  try {
  const response = await fetch(LOGO_JPEG);
  if (!response.ok) throw new Error(`Impossible de charger le logo pour le PDF (${response.status}).`);
  const jpeg = new Uint8Array(await response.arrayBuffer());
  const pdf = createShippingPdf(order, jpeg);
  const url = URL.createObjectURL(new Blob([pdf], { type: "application/pdf" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `Bon-de-livraison-${order.id.replace("#", "")}.pdf`;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (error) {
  console.error("PDF receipt generation failed.", error);
  showToast("Le reçu PDF n'a pas pu être téléchargé. Réessayez depuis le bouton du reçu.");
  }
}

function pdfSafe(value) {
  return String(value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7E]/g, "?").replace(/[\\()]/g, "\\$&");
}

function pdfMoney(amount) {
  return `${Number(amount || 0).toLocaleString("fr-MA").replace(/[\u00a0\u202f]/g, " ")} MAD`;
}

function createShippingPdf(order, jpeg) {
  const pageW = 298;
  const pageH = 420;
  const commands = ["q", "1 0 0 1 0 0 cm", "Q", "q", "44 0 0 44 24 362 cm", "/Logo Do", "Q"];
  const text = (value, x, y, size = 9, font = "F1") => {
    commands.push(`BT /${font} ${size} Tf ${x} ${y} Td (${pdfSafe(value)}) Tj ET`);
  };
  const rule = y => commands.push(`0.82 0.75 0.68 RG 0.6 w 20 ${y} m 278 ${y} l S`);
  text("WISSAL CREATIONS", 78, 389, 15, "F2");
  text("@wissal__creations31", 78, 376, 8);
  text("BON DE LIVRAISON", 20, 346, 11, "F2");
  text(order.id, 20, 331, 9, "F2");
  text(new Date(order.createdAt).toLocaleString("fr-MA"), 158, 331, 7);
  rule(320);
  text("DESTINATAIRE", 20, 303, 7, "F2");
  text(`${order.firstName} ${order.lastName}`, 20, 287, 11, "F2");
  text(`Telephone : ${order.phone}`, 20, 271, 8);
  text(`Destination : ${order.city}`, 20, 255, 8);
  const addressLines = wrapText(order.address, 54);
  addressLines.slice(0, 3).forEach((line, i) => text(i ? line : `Adresse : ${line}`, 20, 241 - i * 12, 8));
  text("Livraison partout au Maroc", 20, 202, 7);
  rule(190);
  text("DETAILS DE LA COMMANDE", 20, 173, 8, "F2");
  let y = 157;
  order.items.forEach(item => {
    wrapText(`${item.quantity} x ${item.title}${item.volume ? ` - ${item.volume} ml` : ""}`, 48).slice(0, 2).forEach(line => { text(line, 20, y, 8); y -= 11; });
    if (item.personalization) { wrapText(`Personnalisation : ${item.personalization}`, 48).slice(0, 2).forEach(line => { text(line, 28, y, 7); y -= 10; }); }
    text(pdfMoney(item.price * item.quantity), 218, y + 10, 7);
    y -= 7;
  });
  if (order.note) { wrapText(`Note : ${order.note}`, 48).slice(0, 2).forEach(line => { text(line, 20, y, 7); y -= 10; }); }
  rule(Math.max(y - 2, 67));
  text("TOTAL A PAYER", 20, Math.max(y - 22, 43), 9, "F2");
  text(`${pdfMoney(order.total)} - PAIEMENT A LA LIVRAISON`, 20, Math.max(y - 38, 28), 9, "F2");

  const content = commands.join("\n") + "\n";
  const encoder = new TextEncoder();
  const objects = [
    encoder.encode("<< /Type /Catalog /Pages 2 0 R >>"),
    encoder.encode("<< /Type /Pages /Kids [3 0 R] /Count 1 >>"),
    encoder.encode("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 298 420] /Resources << /Font << /F1 4 0 R /F2 7 0 R >> /XObject << /Logo 5 0 R >> >> /Contents 6 0 R >>"),
    encoder.encode("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>"),
    concatBytes([encoder.encode("<< /Type /XObject /Subtype /Image /Width 1080 /Height 1080 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length " + jpeg.length + " >>\nstream\n"), jpeg, encoder.encode("\nendstream")]),
    encoder.encode(`<< /Length ${encoder.encode(content).length} >>\nstream\n${content}endstream`),
    encoder.encode("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>")
  ];
  const chunks = [encoder.encode("%PDF-1.4\n%Wissal\n")];
  const offsets = [0];
  let length = chunks[0].length;
  objects.forEach((object, index) => {
    offsets.push(length);
    const chunk = concatBytes([encoder.encode(`${index + 1} 0 obj\n`), object, encoder.encode("\nendobj\n")]);
    chunks.push(chunk);
    length += chunk.length;
  });
  const xrefOffset = length;
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach(offset => { xref += `${String(offset).padStart(10, "0")} 00000 n \n`; });
  xref += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  chunks.push(encoder.encode(xref));
  return concatBytes(chunks);
}

function wrapText(value, maxLength) {
  const words = pdfSafe(value).split(/\s+/);
  const lines = [];
  let line = "";
  words.forEach(word => {
    if (line && `${line} ${word}`.length > maxLength) { lines.push(line); line = word; }
    else line = line ? `${line} ${word}` : word;
  });
  if (line) lines.push(line);
  return lines;
}

function concatBytes(chunks) {
  const output = new Uint8Array(chunks.reduce((sum, chunk) => sum + chunk.length, 0));
  let offset = 0;
  chunks.forEach(chunk => { output.set(chunk, offset); offset += chunk.length; });
  return output;
}

function bindQuickView() {
  document.querySelectorAll('[data-action="quick-view"]').forEach(button => button.addEventListener("click", () => {
    const product = state.products.find(item => item.id === button.dataset.id);
    if (!product) return;
    const modal = document.querySelector("#quick-modal");
    modal.dataset.productId = product.id;
    modal.querySelector(".quick-image").src = asset(product.image);
    modal.querySelector(".quick-image").alt = product.title;
    modal.querySelector("#quick-title").textContent = product.title;
    modal.querySelector(".quick-description").textContent = product.description;
    modal.querySelector(".quick-price").textContent = money(product.price);
    modal.querySelector(".personalize-field").hidden = false;
    modal.querySelector(".quick-add").hidden = false;
    modal.querySelector(".quick-personalization").value = "";
    showModal("quick-modal");
    modal.querySelector(".quick-add").onclick = () => {
      addToCart(product, modal.querySelector(".quick-personalization").value.trim());
      hideModal(modal);
    };
  }));
}

function bindReviewSubmission() {
  const form = document.querySelector("#review-form");
  if (!form) return;
  let photoData = "";
  let photoProcess = Promise.resolve("");
  form.elements.photo.addEventListener("change", async event => {
    const file = event.target.files[0];
    const preview = form.querySelector(".review-preview");
    photoData = "";
    if (!file) { photoProcess = Promise.resolve(""); preview.classList.remove("visible"); preview.removeAttribute("src"); return; }
    photoProcess = compressImage(file).then(data => {
      photoData = data;
      preview.src = photoData;
      preview.classList.add("visible");
      return data;
    }).catch(() => {
      form.querySelector(".review-feedback").textContent = "Cette photo n'a pas pu être chargée.";
      return "";
    });
  });
  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    photoData = await photoProcess;
    if (!photoData) { form.querySelector(".review-feedback").textContent = "Ajoutez une photo pour envoyer votre avis."; return; }
    const data = new FormData(form);
    state.reviews.push({ id: crypto.randomUUID(), name: data.get("name").trim(), city: data.get("city").trim(), text: data.get("text").trim(), rating: Number(data.get("rating")) || 5, image: photoData, status: "pending", verified: false, createdAt: new Date().toISOString() });
    saveStored("wc-reviews", state.reviews);
    form.querySelector(".review-feedback").textContent = "Merci ! Votre avis a bien été envoyé et sera publié après validation par Wissal Creations.";
    form.reset();
    photoData = "";
    photoProcess = Promise.resolve("");
    const preview = form.querySelector(".review-preview");
    preview.classList.remove("visible");
    preview.removeAttribute("src");
  });
}

function bindLightbox() {
  const links = document.querySelectorAll("[data-lightbox]");
  links.forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    const image = link.querySelector("img");
    const modal = document.querySelector("#quick-modal");
    modal.dataset.productId = "";
    modal.querySelector(".quick-image").src = image.src;
    modal.querySelector(".quick-image").alt = image.alt;
    modal.querySelector("#quick-title").textContent = "Wissal Creations";
    modal.querySelector(".quick-description").textContent = "Une création imaginée et préparée avec soin.";
    modal.querySelector(".quick-price").textContent = "";
    modal.querySelector(".personalize-field").hidden = true;
    modal.querySelector(".quick-add").hidden = true;
    showModal("quick-modal");
  }));
}

function showModal(id) {
  const modal = typeof id === "string" ? document.getElementById(id) : id;
  modal?.classList.add("open");
  modal?.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
}

function hideModal(modal) {
  modal?.classList.remove("open");
  modal?.setAttribute("aria-hidden", "true");
  if (!document.querySelector(".modal-backdrop.open") && !document.querySelector(".cart-drawer.open")) document.body.classList.remove("locked");
}

function bindAdminInteractions() {
  document.querySelector("#admin-login-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const entered = new FormData(event.currentTarget).get("pin");
    const savedPin = getAdminPassword();
    const error = document.querySelector(".login-error");
    if (entered !== savedPin) { error.textContent = "Ce mot de passe ne correspond pas. Réessayez."; return; }
    state.adminAuthed = true;
    sessionStorage.setItem("wc-admin-auth", "yes");
    render();
  });
  document.querySelectorAll("[data-admin-tab]").forEach(button => button.addEventListener("click", () => {
    state.adminTab = button.dataset.adminTab;
    localStorage.setItem("wc-admin-tab", state.adminTab);
    render();
  }));
  document.querySelector("#order-search")?.addEventListener("input", event => {
    state.orderQuery = event.target.value;
    refreshOrderResults();
  });
  document.querySelector("#order-status-filter")?.addEventListener("change", event => {
    state.orderStatus = event.target.value;
    refreshOrderResults();
  });
  document.querySelector("#order-date-filter")?.addEventListener("change", event => {
    state.orderDateFilter = event.target.value;
    state.orderExactDate = "";
    refreshOrderResults();
  });
  document.querySelectorAll("[data-order-day]").forEach(button => button.addEventListener("click", () => {
    state.orderDateFilter = "exact";
    state.orderExactDate = button.dataset.orderDay;
    render();
  }));
  bindOrderCardActions();
  document.querySelector('[data-action="logout"]')?.addEventListener("click", () => { state.adminAuthed = false; sessionStorage.removeItem("wc-admin-auth"); render(); });
  document.querySelector('[data-action="change-pin"]')?.addEventListener("click", () => showModal("pin-modal"));
  document.querySelectorAll('[data-action="close-modal"]').forEach(button => button.addEventListener("click", () => hideModal(button.closest(".modal-backdrop"))));
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => backdrop.addEventListener("click", event => { if (event.target === backdrop) hideModal(backdrop); }));
  document.querySelector("#pin-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const saved = getAdminPassword();
    const feedback = event.currentTarget.querySelector("[role=status]");
    feedback.classList.remove("is-success");
    if (data.get("current") !== saved) { feedback.textContent = "Le mot de passe actuel est incorrect."; return; }
    if (String(data.get("next")).length < 6) { feedback.textContent = "Le nouveau mot de passe doit contenir au moins 6 caractères."; return; }
    localStorage.setItem("wc-admin-pin", data.get("next"));
    feedback.textContent = "Mot de passe mis à jour avec succès";
    feedback.classList.add("is-success");
    event.currentTarget.reset();
  });
  bindProductManager();
  bindPerfumeManager();
  bindOfferManager();
  document.querySelectorAll("[data-review-filter]").forEach(button => button.addEventListener("click", () => {
    state.reviewFilter = button.dataset.reviewFilter;
    render();
  }));
  document.querySelectorAll('[data-action="approve-review"]').forEach(button => button.addEventListener("click", () => {
    const review = state.reviews.find(item => item.id === button.dataset.id);
    if (review) { review.status = "approved"; saveStored("wc-reviews", state.reviews); render(); }
  }));
  document.querySelectorAll('[data-action="delete-review"]').forEach(button => button.addEventListener("click", () => {
    state.reviews = state.reviews.filter(item => item.id !== button.dataset.id);
    saveStored("wc-reviews", state.reviews);
    render();
  }));
  document.querySelector('[data-action="admin-add-review"]')?.addEventListener("click", () => {
    state.reviewFormOpen = !state.reviewFormOpen;
    render();
  });
  bindAdminReviewForm();
}

function bindAdminReviewForm() {
  const form = document.querySelector("#admin-review-form");
  if (!form) return;
  let imageData = "";
  let imageProcess = Promise.resolve("");
  const preview = form.querySelector(".admin-review-preview");
  form.elements.photo.addEventListener("change", async event => {
    const file = event.target.files[0];
    imageData = "";
    if (!file) { imageProcess = Promise.resolve(""); preview.hidden = true; preview.removeAttribute("src"); return; }
    imageProcess = compressImage(file).then(data => {
      imageData = data;
      preview.src = imageData;
      preview.hidden = false;
      return data;
    }).catch(() => {
      form.querySelector(".admin-review-feedback").textContent = "Cette photo n'a pas pu être chargée.";
      return "";
    });
  });
  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    imageData = await imageProcess;
    if (!imageData) { form.querySelector(".admin-review-feedback").textContent = "Ajoutez une photo cliente pour publier cet avis."; return; }
    const data = new FormData(form);
    state.reviews.push({ id: crypto.randomUUID(), name: data.get("name").trim(), city: data.get("city").trim(), text: data.get("text").trim(), rating: Number(data.get("rating")) || 5, image: imageData, status: "approved", verified: true, createdAt: new Date().toISOString() });
    saveStored("wc-reviews", state.reviews);
    state.reviewFilter = "approved";
    state.reviewFormOpen = false;
    render();
    showToast("Avis ajouté et publié sur la boutique.");
  });
}

function refreshOrderResults() {
  const results = filteredOrders();
  const list = document.querySelector(".orders-list, .admin-empty");
  if (!list) return;
  const statuses = ["En attente", "Confirmée", "En préparation", "En livraison", "Livrée", "Annulée"];
  const replacement = results.length
    ? `<div class="orders-list">${groupOrdersByDay(results, statuses)}</div>`
    : `<div class="admin-empty">Aucune commande ne correspond à votre recherche.</div>`;
  list.outerHTML = replacement;
  bindOrderCardActions();
}

function setOrderStatus(orderId, status) {
  const order = state.orders.find(item => item.id === orderId);
  if (!order) return;
  order.status = status;
  saveStored("wc-orders", state.orders);
  render();
  showToast(status === "Annulée" ? "Commande annulée." : "Statut de la commande mis à jour.");
}

function bindOrderCardActions() {
  document.querySelectorAll("[data-order-status]").forEach(select => select.addEventListener("change", () => setOrderStatus(select.dataset.orderStatus, select.value)));
  document.querySelectorAll('[data-action="cancel-order"]').forEach(button => button.addEventListener("click", () => setOrderStatus(button.dataset.id, "Annulée")));
  document.querySelectorAll('[data-action="download-receipt"]').forEach(button => button.addEventListener("click", () => downloadOrderReceipt(button.dataset.id)));
}

function bindProductManager() {
  const form = document.querySelector("#product-form");
  if (!form) return;
  const preview = form.querySelector(".product-image-preview");
  const stockText = form.querySelector(".stock-toggle-text");
  let imageProcess = Promise.resolve("");
  let imageError = false;
  form.elements.stock.addEventListener("change", () => { stockText.textContent = form.elements.stock.checked ? "En stock" : "Sur commande"; });
  form.elements.imageUrl.addEventListener("input", event => {
    if (form.dataset.imageData) form.dataset.imageData = "";
    imageProcess = Promise.resolve("");
    imageError = false;
    const value = event.target.value.trim();
    if (value) { preview.src = asset(value); preview.hidden = false; }
    else if (!form.elements.imageFile.files.length) { preview.hidden = true; preview.removeAttribute("src"); }
  });
  form.elements.imageFile.addEventListener("change", async event => {
    const file = event.target.files[0];
    if (!file) { imageProcess = Promise.resolve(""); return; }
    imageError = false;
    imageProcess = compressImage(file).then(data => {
      form.dataset.imageData = data;
      form.elements.imageUrl.value = "";
      preview.src = data;
      preview.hidden = false;
      return data;
    }).catch(() => {
      imageError = true;
      showToast("Cette image n'a pas pu être chargée.");
      return "";
    });
  });
  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    await imageProcess;
    if (imageError) return;
    const data = new FormData(form);
    let image = form.dataset.imageData || data.get("imageUrl").trim();
    const existing = state.products.find(item => item.id === data.get("id"));
    if (!image) image = existing?.image || PHOTO_FILES[2];
    const product = { id: data.get("id") || `wc-${crypto.randomUUID()}`, title: data.get("title").trim(), category: data.get("category"), price: Number(data.get("price")), stock: data.get("stock") ? "En stock" : "Sur commande", description: data.get("description").trim(), image, featured: data.get("category") === "Coffrets" };
    if (existing) state.products = state.products.map(item => item.id === existing.id ? product : item);
    else state.products.push(product);
    saveStored("wc-products", state.products);
    form.dataset.imageData = "";
    render();
    showToast("Produit enregistré dans la boutique.");
  });
  document.querySelectorAll('[data-action="edit-product"]').forEach(button => button.addEventListener("click", () => {
    const product = state.products.find(item => item.id === button.dataset.id);
    if (!product) return;
    form.elements.id.value = product.id;
    form.elements.title.value = product.title;
    form.elements.category.value = product.category;
    form.elements.price.value = product.price;
    form.elements.stock.checked = product.stock === "En stock";
    stockText.textContent = form.elements.stock.checked ? "En stock" : "Sur commande";
    form.elements.description.value = product.description || "";
    form.dataset.imageData = product.image.startsWith("data:") ? product.image : "";
    form.elements.imageUrl.value = product.image.startsWith("data:") ? "" : product.image;
    preview.src = asset(product.image);
    preview.hidden = false;
    form.scrollIntoView({ behavior: "smooth", block: "center" });
  }));
  document.querySelectorAll('[data-action="delete-product"]').forEach(button => button.addEventListener("click", () => {
    if (!confirm("Supprimer ce produit de la boutique ?")) return;
    state.products = state.products.filter(item => item.id !== button.dataset.id);
    saveStored("wc-products", state.products);
    render();
  }));
  document.querySelector('[data-action="reset-product"]')?.addEventListener("click", () => {
    form.reset();
    form.dataset.imageData = "";
    imageProcess = Promise.resolve("");
    imageError = false;
    stockText.textContent = "En stock";
    preview.hidden = true;
    preview.removeAttribute("src");
  });
}

function bindPerfumeManager() {
  const form = document.querySelector("#perfume-form");
  if (!form) return;
  const preview = form.querySelector(".perfume-image-preview");
  const feedback = form.querySelector(".perfume-feedback");
  const stockText = form.querySelector(".stock-toggle-text");
  const saveButton = form.querySelector("[data-perfume-submit]");
  const list = document.querySelector(".admin-perfumes-list");
  let imageData = "";
  let imageProcess = Promise.resolve("");
  let imageError = false;
  let imageSelectionVersion = 0;

  const setFeedback = (message, isError = false) => {
    feedback.textContent = message;
    feedback.classList.toggle("is-error", isError);
  };
  const syncStockLabel = () => { stockText.textContent = form.elements.stock.checked ? "En stock" : "Rupture de stock"; };
  const showImage = source => {
    if (!source) { preview.hidden = true; preview.removeAttribute("src"); return; }
    preview.src = asset(source);
    preview.hidden = false;
  };
  const resetForm = () => {
    form.reset();
    form.elements.id.value = "";
    form.elements.stock.checked = true;
    syncStockLabel();
    imageSelectionVersion += 1;
    imageData = "";
    imageProcess = Promise.resolve("");
    imageError = false;
    showImage("");
    saveButton.textContent = "Enregistrer le parfum";
    setFeedback("");
  };
  const persist = perfumes => {
    if (JSON.stringify(perfumes).length > 1500000) {
      setFeedback("Ces photos occupent trop d'espace. Choisissez une image plus légère.", true);
      return false;
    }
    try {
      saveStored("wissal_perfumes", perfumes);
      state.perfumes = perfumes;
      return true;
    } catch (error) {
      setFeedback("Le stockage est presque plein. Choisissez une photo plus légère puis réessayez.", true);
      return false;
    }
  };
  const bindListActions = () => {
    list.querySelectorAll('[data-action="edit-perfume"]').forEach(button => button.addEventListener("click", () => {
      const perfume = state.perfumes.find(item => item.id === button.dataset.id);
      if (!perfume) return;
      form.elements.id.value = perfume.id;
      form.elements.name.value = perfume.name || "";
      form.elements.family.value = perfume.family || PERFUME_FAMILIES[0];
      form.elements.notes.value = perfume.notes || "";
      form.elements.badge.value = perfume.badge || "";
      form.elements.price30.value = perfume.prices?.[30] || "";
      form.elements.price50.value = perfume.prices?.[50] || "";
      form.elements.price100.value = perfume.prices?.[100] || "";
      form.elements.stock.checked = (perfume.stock || "En stock") === "En stock";
      syncStockLabel();
      imageSelectionVersion += 1;
      imageData = perfume.image || "";
      imageProcess = Promise.resolve(imageData);
      imageError = false;
      showImage(imageData);
      saveButton.textContent = "Mettre à jour";
      setFeedback("Modifiez les informations puis enregistrez les changements.");
      form.scrollIntoView({ behavior: "smooth", block: "center" });
    }));
    list.querySelectorAll('[data-action="toggle-perfume-stock"]').forEach(input => input.addEventListener("change", () => {
      const next = state.perfumes.map(perfume => perfume.id === input.dataset.id ? { ...perfume, stock: input.checked ? "En stock" : "Rupture de stock" } : perfume);
      if (persist(next)) {
        list.innerHTML = perfumeCards(filteredPerfumes());
        bindListActions();
      } else {
        input.checked = !input.checked;
      }
    }));
    list.querySelectorAll('[data-action="delete-perfume"]').forEach(button => button.addEventListener("click", () => {
      const perfume = state.perfumes.find(item => item.id === button.dataset.id);
      if (!perfume || !confirm(`Supprimer le parfum « ${perfume.name} » ?`)) return;
      const next = state.perfumes.filter(item => item.id !== perfume.id);
      if (!persist(next)) return;
      render();
      showToast("Parfum supprimé de la collection.");
    }));
  };
  const refreshList = () => {
    list.innerHTML = perfumeCards(filteredPerfumes());
    bindListActions();
  };

  form.elements.stock.addEventListener("change", syncStockLabel);
  form.elements.photo.addEventListener("change", event => {
    const file = event.currentTarget.files[0];
    if (!file) return;
    const selectionVersion = ++imageSelectionVersion;
    imageError = false;
    setFeedback("Compression de la photo…");
    imageProcess = compressOfferImage(file).then(data => {
      if (selectionVersion !== imageSelectionVersion) return data;
      imageData = data;
      showImage(imageData);
      setFeedback("Photo prête à être enregistrée.");
      return data;
    }).catch(() => {
      if (selectionVersion !== imageSelectionVersion) return "";
      imageError = true;
      setFeedback("Cette photo n'a pas pu être chargée. Choisissez une autre image.", true);
      return "";
    });
  });
  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    await imageProcess;
    if (imageError) return;
    const data = new FormData(form);
    const prices = {
      30: data.get("price30") ? Number(data.get("price30")) : null,
      50: data.get("price50") ? Number(data.get("price50")) : null,
      100: data.get("price100") ? Number(data.get("price100")) : null
    };
    if (!Object.values(prices).some(price => price > 0)) {
      setFeedback("Renseignez au moins un prix de contenance.", true);
      return;
    }
    const existing = state.perfumes.find(item => item.id === data.get("id"));
    const image = imageData || existing?.image || "";
    if (!image) {
      setFeedback("Ajoutez une photo du flacon avant d'enregistrer.", true);
      return;
    }
    const perfume = {
      id: existing?.id || `perfume-${crypto.randomUUID()}`,
      name: String(data.get("name")).trim(),
      family: data.get("family"),
      notes: String(data.get("notes") || "").trim(),
      badge: data.get("badge") || "",
      prices,
      image,
      stock: data.get("stock") ? "En stock" : "Rupture de stock"
    };
    const next = existing ? state.perfumes.map(item => item.id === existing.id ? perfume : item) : [...state.perfumes, perfume];
    if (!persist(next)) return;
    resetForm();
    render();
    showToast(existing ? "Parfum mis à jour." : "Parfum enregistré.");
  });
  document.querySelector('[data-action="reset-perfume"]')?.addEventListener("click", resetForm);
  document.querySelector("#perfume-search")?.addEventListener("input", event => {
    state.perfumeQuery = event.target.value;
    refreshList();
  });
  document.querySelector("#perfume-family-filter")?.addEventListener("change", event => {
    state.perfumeFamily = event.target.value;
    refreshList();
  });
  bindListActions();
}

function bindOfferManager() {
  const form = document.querySelector("#offer-form");
  if (!form) return;
  const previewList = form.querySelector(".offer-preview-list");
  const feedback = form.querySelector(".offer-feedback");
  const activeText = form.querySelector(".stock-toggle-text");
  let currentPhotos = [];
  let photoProcess = Promise.resolve([]);
  let photoError = false;
  let photoSelectionVersion = 0;

  const showPhotos = photos => {
    previewList.innerHTML = photos.map((photo, index) => `<img src="${asset(photo)}" alt="Photo ${index + 1} du coffret">`).join("");
  };
  const setFeedback = (message, isError = false) => {
    feedback.textContent = message;
    feedback.classList.toggle("is-error", isError);
  };
  const syncActiveLabel = () => { activeText.textContent = form.elements.active.checked ? "Actif · Visible dans le carrousel" : "Masqué"; };
  const resetForm = () => {
    form.reset();
    form.elements.id.value = "";
    form.elements.active.checked = true;
    syncActiveLabel();
    currentPhotos = [];
    photoSelectionVersion += 1;
    photoProcess = Promise.resolve([]);
    photoError = false;
    form.elements.photos.value = "";
    showPhotos(currentPhotos);
    setFeedback("");
  };

  form.elements.active.addEventListener("change", syncActiveLabel);

  form.elements.photos.addEventListener("change", event => {
    const files = [...event.currentTarget.files].filter(file => file.type.startsWith("image/"));
    if (!files.length) return;
    const selectionVersion = ++photoSelectionVersion;
    photoError = false;
    setFeedback("Préparation des photos…");
    photoProcess = Promise.all(files.map(compressOfferImage)).then(photos => {
      if (selectionVersion !== photoSelectionVersion) return photos;
      currentPhotos = photos;
      showPhotos(currentPhotos);
      setFeedback(`${photos.length} photo${photos.length > 1 ? "s" : ""} prête${photos.length > 1 ? "s" : ""}.`);
      return photos;
    }).catch(() => {
      if (selectionVersion !== photoSelectionVersion) return [];
      photoError = true;
      setFeedback("Une ou plusieurs photos n'ont pas pu être chargées. Choisissez des images plus légères.", true);
      return [];
    });
  });

  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    await photoProcess;
    if (photoError) return;
    if (!currentPhotos.length) { setFeedback("Ajoutez au moins une photo au coffret.", true); return; }
    const data = new FormData(form);
    const id = data.get("id") || `offer-${crypto.randomUUID()}`;
    const offer = {
      id,
      badge: String(data.get("badge")).trim(),
      title: String(data.get("title")).trim(),
      price: Number(data.get("price")),
      oldPrice: data.get("oldPrice") ? Number(data.get("oldPrice")) : null,
      photos: currentPhotos,
      active: Boolean(data.get("active"))
    };
    const existingIndex = state.offers.findIndex(item => item.id === id);
    const nextOffers = existingIndex < 0 ? [...state.offers, offer] : state.offers.map(item => item.id === id ? offer : item);
    if (JSON.stringify(nextOffers).length > 1800000) {
      setFeedback("Ces photos occupent trop d'espace. Réduisez leur nombre ou choisissez des fichiers plus petits.", true);
      return;
    }
    try {
      saveStored("wissal_offers", nextOffers);
      state.offers = nextOffers;
    } catch (error) {
      setFeedback("Le stockage est presque plein. Réduisez le nombre de photos puis réessayez.", true);
      return;
    }
    resetForm();
    render();
    showToast("Offre enregistrée dans le carrousel.");
  });

  document.querySelector('[data-action="reset-offer"]')?.addEventListener("click", resetForm);
  document.querySelectorAll('[data-action="edit-offer"]').forEach(button => button.addEventListener("click", () => {
    const offer = state.offers.find(item => item.id === button.dataset.id);
    if (!offer) return;
    form.elements.id.value = offer.id;
    form.elements.badge.value = offer.badge || "";
    form.elements.title.value = offer.title || "";
    form.elements.price.value = offer.price;
    form.elements.oldPrice.value = offer.oldPrice || "";
    form.elements.active.checked = offer.active !== false;
    syncActiveLabel();
    currentPhotos = Array.isArray(offer.photos) ? [...offer.photos] : [];
    photoSelectionVersion += 1;
    photoProcess = Promise.resolve(currentPhotos);
    photoError = false;
    showPhotos(currentPhotos);
    setFeedback("Modifiez les détails ou choisissez de nouvelles photos.");
    form.scrollIntoView({ behavior: "smooth", block: "center" });
  }));
  document.querySelectorAll('[data-action="toggle-offer"]').forEach(input => input.addEventListener("change", () => {
    state.offers = state.offers.map(offer => offer.id === input.dataset.id ? { ...offer, active: input.checked } : offer);
    saveStored("wissal_offers", state.offers);
    render();
  }));
  document.querySelectorAll('[data-action="move-offer"]').forEach(button => button.addEventListener("click", () => {
    const index = state.offers.findIndex(item => item.id === button.dataset.id);
    const nextIndex = index + (button.dataset.direction === "up" ? -1 : 1);
    if (index < 0 || nextIndex < 0 || nextIndex >= state.offers.length) return;
    const reordered = [...state.offers];
    [reordered[index], reordered[nextIndex]] = [reordered[nextIndex], reordered[index]];
    state.offers = reordered;
    saveStored("wissal_offers", state.offers);
    render();
  }));
  document.querySelectorAll('[data-action="delete-offer"]').forEach(button => button.addEventListener("click", () => {
    const offer = state.offers.find(item => item.id === button.dataset.id);
    if (!offer || !confirm(`Supprimer l'offre « ${offer.title} » ?`)) return;
    state.offers = state.offers.filter(item => item.id !== offer.id);
    saveStored("wissal_offers", state.offers);
    render();
    showToast("Offre supprimée du carrousel.");
  }));
}

async function compressOfferImage(file) {
  const source = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("La photo n'a pas pu être lue."));
    reader.readAsDataURL(file);
  });
  const image = await new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Le format de cette photo n'est pas reconnu."));
    img.src = source;
  });
  const scale = Math.min(1, 720 / Math.max(image.width, image.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));
  canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/webp", .58);
}

async function compressImage(file) {
  const source = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("La photo n'a pas pu être lue."));
    reader.readAsDataURL(file);
  });
  const image = await new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Le format de cette photo n'est pas reconnu."));
    img.src = source;
  });
  const scale = Math.min(1, 850 / Math.max(image.width, image.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(image.width * scale);
  canvas.height = Math.round(image.height * scale);
  canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/webp", .72);
}

function handleEscape(event) {
  if (event.key !== "Escape") return;
  document.querySelectorAll(".modal-backdrop.open").forEach(hideModal);
  state.orderConfirmationId = "";
  closeCart();
}

function showToast(message) {
  const toast = document.querySelector(".toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function observeReveals() {
  const targets = document.querySelectorAll(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) { targets.forEach(target => target.classList.add("visible")); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  }), { threshold: .08 });
  targets.forEach(target => observer.observe(target));
}

document.addEventListener("click", event => {
  const routeLink = event.target.closest("a[data-route]");
  if (!routeLink || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (routeLink.dataset.route === "/admin") { event.preventDefault(); history.pushState({}, "", "/admin"); render(); window.scrollTo(0, 0); }
});
window.addEventListener("popstate", () => { render(); window.scrollTo(0, 0); });
window.addEventListener("storage", event => {
  if (!event.key || (!event.key.startsWith("wc-") && event.key !== "wissal_offers" && event.key !== "wissal_perfumes")) return;
  state.products = readStored("wc-products", DEFAULT_PRODUCTS);
  state.cart = readStored("wc-cart", []);
  state.orders = readStored("wc-orders", []);
  state.reviews = readStored("wc-reviews", []).map(review => ({ ...review, status: normalizeReviewStatus(review.status), rating: Math.min(5, Math.max(1, Number(review.rating) || 5)), createdAt: review.createdAt || review.submittedAt || review.date || new Date().toISOString() }));
  state.offers = readStored("wissal_offers", DEFAULT_OFFERS);
  if (!Array.isArray(state.offers)) state.offers = DEFAULT_OFFERS;
  state.perfumes = readStored("wissal_perfumes", []);
  if (!Array.isArray(state.perfumes)) state.perfumes = [];
  render();
});

document.addEventListener("keydown", handleEscape);
render();
