/**
 * GRANDE LAR MÓVEIS - TAUBATÉ / SP
 * Interactive Engine: Sofa Customizer, Fabric Swatches, Color Chips, Catalog Filters, 
 * Texture Zoom Lightbox, Quick View Modal, Mobile Drawer & Meeting Pitch Mode
 */

// Store Information
const STORE_DATA = {
  name: "Grande Lar Móveis",
  whatsappNumber: "5512992606661", // (12) 99260-6661
  googleRating: "4.8",
  reviewCount: "72",
  stores: [
    {
      unit: "Loja 1",
      bairro: "Vila São Geraldo",
      address: "Rua Bahia, 474 - Vila São Geraldo, Taubaté - SP",
      mapsUrl: "https://maps.google.com/?q=R.+Bahia,+474+-+Vila+Sao+Geraldo,+Taubat%C3%A9+-+SP,+12062-100",
      hours: "Seg à Sex: 09h às 18h | Sáb: 09h às 14h"
    },
    {
      unit: "Loja 2",
      bairro: "Belém (Próx. Dutra)",
      address: "Rodovia Oswaldo Cruz, 255 – Belém, Taubaté - SP (a 300m da Rod. Pres. Dutra)",
      mapsUrl: "https://maps.google.com/?q=Rod.+Oswaldo+Cruz,+255+-+Bel%C3%A9m,+Taubat%C3%A9+-+SP",
      hours: "Seg à Sex: 09h às 18h | Sáb: 09h às 14h"
    }
  ]
};

// Sofa Customizer Data
const CUSTOMIZER_DATA = {
  models: {
    retratil: {
      name: "Sofá Retrátil Imperial Soft",
      category: "Retrátil & Reclinável",
      basePrice: 3890,
      image: "assets/images/sofa-retratil-bege.jpg",
      specs: ["Molas Ensacadas", "Pillow Top D33 Soft", "Reclinável 5 Posições", "Madeira Eucalipto Tratada"]
    },
    canto: {
      name: "Sofá de Canto Master Living",
      category: "Canto com Chaise",
      basePrice: 4790,
      image: "assets/images/sofa-canto-cinza.jpg",
      specs: ["Chaise Ampla", "Assento Profundo", "Espuma D33 Hiper Soft", "Pés em Madeira Maciça"]
    },
    boucle: {
      name: "Sofá Orgânico Curvo Soleil",
      category: "Living Contemporâneo",
      basePrice: 4490,
      image: "assets/images/sofa-boucle-offwhite.jpg",
      specs: ["Design Curvo Escultural", "Tecido Bouclé Nobre", "Estrutura Anatômica", "Espuma D33 Soft"]
    },
    veludo: {
      name: "Sofá Royale Velvet Terracota",
      category: "Living Elegance",
      basePrice: 3990,
      image: "assets/images/sofa-veludo-terracota.jpg",
      specs: ["Veludo Italiano Importado", "Design Curvo Retrô Chic", "Pés Palito Madeira Nobre", "Toque Aveludado"]
    },
    couro: {
      name: "Sofá Chesterfield Conhaque",
      category: "Couro Legítimo Nobre",
      basePrice: 5890,
      image: "assets/images/sofa-couro-caramelo.jpg",
      specs: ["Couro Bovino Legítimo", "Acabamento Capitoune Artesanal", "Estrutura 100% Maciça", "Garantia 5 Anos"]
    },
    realChaise: {
      name: "Sofá Retrátil Chaise Showroom",
      category: "Destaque Showroom Taubaté",
      basePrice: 3690,
      image: "assets/images/real-sofa-retratil-chaise.jpg",
      specs: ["Modelo Exposto no Showroom", "Pillow Top 18cm", "Chaise Confort Plus", "Pronta Entrega"]
    }
  },
  fabrics: {
    linho: {
      name: "Linho Rústico Cru",
      type: "Trama Nobre Respirável",
      swatch: "assets/images/swatch-linho.jpg",
      extra: 0,
      tag: "Mais Pedido",
      colors: [
        { name: "Cru Natural", hex: "#e7decb" },
        { name: "Fendi Suave", hex: "#b4a594" },
        { name: "Cinza Mescla", hex: "#7a7d79" }
      ],
      description: "Linho de alta gramatura com toque natural e trama encorpada. Extremamente resistente a fricção, fresco no calor e aconchegante no inverno."
    },
    boucle: {
      name: "Bouclé Nuvem Off-White",
      type: "Textura Fofa & Alta Costura",
      swatch: "assets/images/swatch-boucle.jpg",
      extra: 420,
      tag: "Tendência",
      colors: [
        { name: "Off-White Nuvem", hex: "#f3ede3" },
        { name: "Areia Quente", hex: "#d9cdb8" }
      ],
      description: "O queridinho dos arquitetos internacionais. Fios com laçadas irregulares criam uma superfície ultra macia e convidativa."
    },
    veludo: {
      name: "Veludo Terracota Soft",
      type: "Toque Macio Aveludado",
      swatch: "assets/images/swatch-veludo.jpg",
      extra: 280,
      tag: "Aconchego",
      colors: [
        { name: "Terracota Rust", hex: "#ad532d" },
        { name: "Verde Esmeralda", hex: "#1f4a41" },
        { name: "Azul Petróleo", hex: "#254252" }
      ],
      description: "Veludo especial toque de seda com brilho fosco sutil. Tratamento antiestático e repelente de pelos de animais."
    },
    couro: {
      name: "Couro Conhaque Nobre",
      type: "Couro Bovino Legítimo",
      swatch: "assets/images/swatch-couro.jpg",
      extra: 1250,
      tag: "Luxo Atemporal",
      colors: [
        { name: "Conhaque Whisky", hex: "#9a5629" },
        { name: "Café Escuro", hex: "#4b3223" },
        { name: "Preto Nobre", hex: "#1e1e1e" }
      ],
      description: "Couro bovino integral com curtimento vegetal ecológico. Adquire pátina única com os anos e é facílimo de higienizar."
    }
  },
  sizes: {
    "210": { label: "2,10m", desc: "Compacto / Apartamento", multiplier: 0.92 },
    "240": { label: "2,40m", desc: "Médio / Mais Vendido", multiplier: 1.00 },
    "280": { label: "2,80m", desc: "Espaçoso / Sala Ampla", multiplier: 1.18 },
    "320": { label: "3,20m", desc: "Família / Sala Integrada", multiplier: 1.34 }
  }
};

let customizerState = {
  modelKey: "retratil",
  fabricKey: "linho",
  colorName: "Cru Natural",
  sizeKey: "240"
};

// Complete Catalog Products (Including all real store showroom items)
const PRODUCTS = [
  {
    id: 1,
    name: "Sofá Retrátil Imperial Molas Ensacadas",
    category: "retratil",
    categoryName: "Retrátil & Reclinável",
    image: "assets/images/sofa-retratil-bege.jpg",
    badge: "Mais Vendido",
    badgeColor: "gold",
    location: "Disponível nas 2 Lojas",
    shortDesc: "O clássico do conforto com molas ensacadas individuais e almofadas com fibra siliconada 100% virgem.",
    price: "R$ 3.890",
    installments: "10x de R$ 389,00 sem juros",
    isRealPhoto: false,
    specs: {
      "Medidas": "2,10m • 2,40m • 2,80m • 3,20m",
      "Assento": "Molas Ensacadas + Espuma D33 Soft + Pillow Top",
      "Encosto": "Reclinável em 5 estágios com fibra siliconada",
      "Estrutura": "Madeira maciça de Eucalipto tratado contra pragas",
      "Tecido": "Linho Nobre, Suede Veludo ou Bouclé"
    }
  },
  {
    id: 2,
    name: "Sofá de Canto Master Living Chaise",
    category: "canto",
    categoryName: "Sofá de Canto",
    image: "assets/images/sofa-canto-cinza.jpg",
    badge: "Super Conforto",
    badgeColor: "green",
    location: "Showroom Belém & Vila São Geraldo",
    shortDesc: "Perfeito para reunir a família inteira com chaise espaçosa e assentos profundos em tecido grafite tramado.",
    price: "R$ 4.790",
    installments: "10x de R$ 479,00 sem juros",
    isRealPhoto: false,
    specs: {
      "Medidas": "2,60m x 2,10m (Chaise reversível)",
      "Assento": "Espuma D33 Soft com percintas elásticas italianas",
      "Encosto": "Almofadas soltas preenchidas com fibra siliconada",
      "Estrutura": "Eucalipto tratado de reflorestamento",
      "Pés": "Madeira maciça tauari com feltro protetor"
    }
  },
  {
    id: 3,
    name: "Sofá Orgânico Curvo Soleil Bouclé",
    category: "living",
    categoryName: "Living & Design",
    image: "assets/images/sofa-boucle-offwhite.jpg",
    badge: "Tendência Design",
    badgeColor: "gold",
    location: "Showroom Vila São Geraldo",
    shortDesc: "Silhueta curva contemporânea em tecido Bouclé off-white. A peça central de qualquer sala de revista.",
    price: "R$ 4.490",
    installments: "10x de R$ 449,00 sem juros",
    isRealPhoto: false,
    specs: {
      "Medidas": "2,40m x 1,05m de profundidade",
      "Acabamento": "Tecido Bouclé importado toque nuvem",
      "Assento": "Espuma D33 soft anatômica curvada",
      "Estrutura": "Madeira multilaminada e eucalipto imunizado"
    }
  },
  {
    id: 4,
    name: "Sofá Royale Velvet Terracota Curvo",
    category: "living",
    categoryName: "Living & Elegance",
    image: "assets/images/sofa-veludo-terracota.jpg",
    badge: "Exclusivo",
    badgeColor: "gold",
    location: "Showroom Rod. Oswaldo Cruz",
    shortDesc: "Requinte em veludo terracota aquecido, pés em madeira torneada e design fluido com toque irresistível.",
    price: "R$ 3.990",
    installments: "10x de R$ 399,00 sem juros",
    isRealPhoto: false,
    specs: {
      "Medidas": "2,20m x 0,95m",
      "Revestimento": "Veludo especial toque de seda terracota",
      "Pés": "Madeira maciça torneada estilo escandinavo",
      "Estrutura": "Madeira maciça com travamento duplo"
    }
  },
  {
    id: 5,
    name: "Sofá Retrátil Chaise Showroom Real",
    category: "retratil",
    categoryName: "Foto Real Showroom",
    image: "assets/images/real-sofa-retratil-chaise.jpg",
    badge: "Showroom Taubaté",
    badgeColor: "real-photo",
    location: "Loja Belém (Rod. Oswaldo Cruz, 255)",
    shortDesc: "Foto real no showroom de Taubaté! Sofá retrátil com chaise estendida, almofadas macias e manta decorativa.",
    price: "R$ 3.690",
    installments: "10x de R$ 369,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Localização": "Exposto na Loja Belém para teste presencial",
      "Mecanismo": "Tubos de aço carbono e rodízios em silicone",
      "Assento": "Espuma D33 Hiper Soft com pillow top",
      "Condição": "Pronta Entrega Imediata para o Vale do Paraíba"
    }
  },
  {
    id: 6,
    name: "Conjunto Sala Living & Poltrona Confort",
    category: "living",
    categoryName: "Foto Real Showroom",
    image: "assets/images/real-sofa-living-poltrona.jpg",
    badge: "Sala Completa",
    badgeColor: "real-photo",
    location: "Loja Belém (Rod. Oswaldo Cruz)",
    shortDesc: "Conjunto completo exposto em nossa loja: Sofá 3 lugares off-white com almofadas geométricas e poltrona decorativa.",
    price: "Sob Consulta",
    installments: "Consulte condições especiais no WhatsApp",
    isRealPhoto: true,
    specs: {
      "Itens": "Sofá 3 Lugares + Poltrona Estofada + Mesas de Centro",
      "Tecido": "Linho tramado cinza claro de alta gramatura",
      "Conforto": "Espuma D33 macia e ergonômica",
      "Showroom": "Disponível para pronta entrega"
    }
  },
  {
    id: 7,
    name: "Mesa de Jantar 8 Lugares Laqueada",
    category: "sala-jantar",
    categoryName: "Foto Real Showroom",
    image: "assets/images/real-mesa-jantar-showroom.jpg",
    badge: "Showroom Taubaté",
    badgeColor: "real-photo",
    location: "Showroom Grande Lar Taubaté",
    shortDesc: "Mesa de jantar de 8 lugares com tampo de vidro laqueado off-white, base escultural em madeira e cadeiras estofadas.",
    price: "Sob Consulta",
    installments: "Condições de fábrica em até 10x",
    isRealPhoto: true,
    specs: {
      "Capacidade": "8 Lugares confortáveis",
      "Tampo": "Vidro temperado pintado off-white",
      "Cadeiras": "Estrutura madeira com encosto anatômico e estofado",
      "Acabamento": "Laca fosca acetinada e verniz poliuretano"
    }
  },
  {
    id: 8,
    name: "Poltrona Giratória Velvet Green Circular",
    category: "living",
    categoryName: "Foto Real Showroom",
    image: "assets/images/real-poltrona-giratoria-verde.jpg",
    badge: "Design Circular",
    badgeColor: "real-photo",
    location: "Showroom Grande Lar Taubaté",
    shortDesc: "Poltrona redonda giratória estofada em verde esmeralda com base giratória em aço. O toque de estilo para o ambiente.",
    price: "R$ 1.890",
    installments: "10x de R$ 189,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Formato": "Redondo / Chaise Individual Giratória",
      "Mecanismo": "Giro 360 graus suave e silencioso",
      "Almofadas": "3 almofadas de encosto inclusas",
      "Tecido": "Trama esmeralda texturizada especial"
    }
  },
  {
    id: 9,
    name: "Chaise Lounge Curva Área Externa & Varanda",
    category: "living",
    categoryName: "Foto Real Showroom",
    image: "assets/images/real-chaise-curva-varanda.jpg",
    badge: "Varanda Gourmet",
    badgeColor: "real-photo",
    location: "Showroom Rod. Oswaldo Cruz, 255",
    shortDesc: "Chaise curva com estrutura em fibra sintética preta e estofado impermeável naval. Elegância total para varanda ou piscina.",
    price: "Sob Consulta",
    installments: "Consulte opções de cores da fibra",
    isRealPhoto: true,
    specs: {
      "Uso": "Área Externa, Varanda Gourmet e Piscina",
      "Material": "Fibra sintética com proteção anti-UV",
      "Estofado": "Tecido Acquablock 100% impermeável",
      "Almofadas": "Acompanha conjunto de almofadas de encosto"
    }
  },
  {
    id: 10,
    name: "Sofá Curvo Living em Linho Cinza Detalhe",
    category: "living",
    categoryName: "Foto Real Showroom",
    image: "assets/images/real-sofa-curvo-detalhe.jpg",
    badge: "Showroom Taubaté",
    badgeColor: "real-photo",
    location: "Showroom Vila São Geraldo",
    shortDesc: "Foto detalhada do acabamento dos nossos sofás curvos: costura rebatida de alto padrão, almofadas artísticas e pés em madeira.",
    price: "R$ 3.750",
    installments: "10x de R$ 375,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Acabamento": "Costura dupla rebatida artesanal",
      "Tecido": "Linho trama cerrada cinza clássico",
      "Pés": "Madeira maciça torneada",
      "Showroom": "Disponível para pronta entrega em Taubaté"
    }
  }
];

// Initialize on DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  initHeroVideo();
  initHeaderScroll();
  initMobileDrawer();
  initCustomizer();
  initCatalog();
  initQuickViewModal();
  initTextureModal();
  initFaqAccordion();
  initScrollReveal();
  initLuxuryToast();
  initSmoothScroll();
});

/* ==========================================================================
   HERO VIDEO AUTOPLAY SAFEGUARD
   ========================================================================== */
function initHeroVideo() {
  const heroVideo = document.querySelector(".hero-bg-video");
  if (!heroVideo) return;
  heroVideo.play().catch(() => {
    const playOnTouch = () => {
      heroVideo.play().catch(() => {});
      window.removeEventListener("click", playOnTouch);
      window.removeEventListener("touchstart", playOnTouch);
    };
    window.addEventListener("click", playOnTouch, { once: true });
    window.addEventListener("touchstart", playOnTouch, { once: true });
  });
}

/* ==========================================================================
   HEADER SCROLL & MOBILE DRAWER
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

function initMobileDrawer() {
  const toggleBtn = document.querySelector(".mobile-menu-toggle");
  const drawer = document.getElementById("mobile-drawer");
  const overlay = document.getElementById("mobile-drawer-overlay");
  const closeBtn = document.getElementById("drawer-close-btn");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  function openDrawer() {
    if (drawer) drawer.classList.add("active");
    if (overlay) overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (toggleBtn) toggleBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

/* ==========================================================================
   SOFA CUSTOMIZER & FABRIC SWATCHES
   ========================================================================== */
function initCustomizer() {
  const modelBtns = document.querySelectorAll(".model-option-btn");
  const fabricBtns = document.querySelectorAll(".fabric-swatch-item");
  const sizeBtns = document.querySelectorAll(".size-pill-btn");

  // Model selection
  modelBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modelBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      customizerState.modelKey = btn.dataset.model;
      updateCustomizerView();
    });
  });

  // Fabric swatch selection
  fabricBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      fabricBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      customizerState.fabricKey = btn.dataset.fabric;
      
      // Default to first color of fabric
      const fabric = CUSTOMIZER_DATA.fabrics[customizerState.fabricKey];
      if (fabric && fabric.colors && fabric.colors.length > 0) {
        customizerState.colorName = fabric.colors[0].name;
      }
      
      updateCustomizerView();
    });
  });

  // Size selection
  sizeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      sizeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      customizerState.sizeKey = btn.dataset.size;
      updateCustomizerView();
    });
  });

  // WhatsApp order button
  const zapBtn = document.getElementById("btn-customizer-zap");
  if (zapBtn) {
    zapBtn.addEventListener("click", (e) => {
      e.preventDefault();
      sendCustomizerToWhatsApp();
    });
  }

  // Request physical sample button
  const sampleBtn = document.getElementById("btn-request-sample");
  if (sampleBtn) {
    sampleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const currentFabric = CUSTOMIZER_DATA.fabrics[customizerState.fabricKey];
      const currentModel = CUSTOMIZER_DATA.models[customizerState.modelKey];
      const text = `Olá equipe da Grande Lar Móveis! 🧵✨
Vi a amostra do tecido *${currentFabric.name}* (cor ${customizerState.colorName}) para o modelo *${currentModel.name}* no site e gostaria de saber se vocês têm o mostruário físico ou fotos reais desse tecido no showroom de Taubaté (Vila São Geraldo ou Belém) para eu ver pessoalmente. Como posso agendar?`;
      window.open(`https://wa.me/${STORE_DATA.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    });
  }

  // Texture Zoom button
  const zoomBtn = document.getElementById("btn-zoom-fabric");
  if (zoomBtn) {
    zoomBtn.addEventListener("click", () => {
      openTextureModal(customizerState.fabricKey);
    });
  }

  const swatchBadge = document.getElementById("customizer-swatch-badge");
  if (swatchBadge) {
    swatchBadge.addEventListener("click", () => {
      openTextureModal(customizerState.fabricKey);
    });
  }

  updateCustomizerView();
}

function updateCustomizerView() {
  const model = CUSTOMIZER_DATA.models[customizerState.modelKey];
  const fabric = CUSTOMIZER_DATA.fabrics[customizerState.fabricKey];
  const size = CUSTOMIZER_DATA.sizes[customizerState.sizeKey];

  // Update preview image
  const previewImg = document.getElementById("customizer-preview-img");
  if (previewImg && model.image) {
    previewImg.style.opacity = "0.7";
    setTimeout(() => {
      previewImg.src = model.image;
      previewImg.alt = `${model.name} em ${fabric.name}`;
      previewImg.style.opacity = "1";
    }, 120);
  }

  // Update fabric badge
  const fabricBadgeImg = document.getElementById("customizer-swatch-thumb");
  const fabricBadgeText = document.getElementById("customizer-swatch-text");
  if (fabricBadgeImg && fabric.swatch) {
    fabricBadgeImg.src = fabric.swatch;
  }
  if (fabricBadgeText) {
    fabricBadgeText.textContent = `${fabric.name} (${customizerState.colorName})`;
  }

  // Update color chips row
  const colorChipsContainer = document.getElementById("customizer-color-chips");
  if (colorChipsContainer && fabric.colors) {
    colorChipsContainer.innerHTML = fabric.colors.map(col => `
      <div class="color-chip ${col.name === customizerState.colorName ? 'active' : ''}" onclick="selectCustomizerColor('${col.name}')">
        <span class="chip-circle" style="background-color: ${col.hex};"></span>
        <span>${col.name}</span>
      </div>
    `).join("");
  }

  // Update dimensions overlay
  const dimOverlay = document.getElementById("customizer-dimensions-text");
  if (dimOverlay) {
    dimOverlay.textContent = `Largura: ${size.label} • ${size.desc}`;
  }

  // Update Active model title in column
  const modelTitleEl = document.getElementById("active-model-title");
  if (modelTitleEl) {
    modelTitleEl.textContent = model.name;
  }

  // Update Specs Pills
  const specsContainer = document.getElementById("customizer-specs-pills");
  if (specsContainer && model.specs) {
    specsContainer.innerHTML = model.specs.map(spec => `
      <span class="spec-pill">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        ${spec}
      </span>
    `).join("");
  }

  // Calculate Price
  const base = model.basePrice;
  const extraFabric = fabric.extra;
  const multiplier = size.multiplier;
  const total = Math.round((base + extraFabric) * multiplier);
  const installmentVal = (total / 10).toFixed(2).replace(".", ",");
  const formattedTotal = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const priceValEl = document.getElementById("customizer-price-val");
  const installmentValEl = document.getElementById("customizer-installment-val");
  if (priceValEl) {
    priceValEl.textContent = formattedTotal;
  }
  if (installmentValEl) {
    installmentValEl.textContent = `Ou em 10x de R$ ${installmentVal} sem juros no cartão`;
  }
}

window.selectCustomizerColor = function(colorName) {
  customizerState.colorName = colorName;
  updateCustomizerView();
};

function sendCustomizerToWhatsApp() {
  const model = CUSTOMIZER_DATA.models[customizerState.modelKey];
  const fabric = CUSTOMIZER_DATA.fabrics[customizerState.fabricKey];
  const size = CUSTOMIZER_DATA.sizes[customizerState.sizeKey];
  
  const total = Math.round((model.basePrice + fabric.extra) * size.multiplier);
  const formattedTotal = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const installmentVal = (total / 10).toFixed(2).replace(".", ",");

  const msg = 
`Olá equipe da Grande Lar Móveis! 🛋️✨

Estive personalizando meu sofá no site oficial e amei esta combinação:

📐 *Modelo:* ${model.name} (${model.category})
🧵 *Tecido:* ${fabric.name} — Trama Nobre
🎨 *Cor Selecionada:* ${customizerState.colorName}
📏 *Medida:* ${size.label} (${size.desc})
💰 *Valor Estimado no Site:* ${formattedTotal} (em até 10x de R$ ${installmentVal} sem juros)

Vocês têm esse modelo disponível para eu testar no showroom de Taubaté (Vila São Geraldo ou Belém), ou mostruário físico desse tecido? Gostaria de saber mais sobre o prazo de entrega para a minha sala.`;

  const url = `https://wa.me/${STORE_DATA.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

/* ==========================================================================
   TEXTURE ZOOM LIGHTBOX MODAL
   ========================================================================== */
function initTextureModal() {
  const overlay = document.getElementById("texture-modal-overlay");
  const closeBtn = document.getElementById("texture-modal-close");

  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
    });
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.classList.remove("active");
    });
  }
}

window.openTextureModal = function(fabricKey) {
  const fabric = CUSTOMIZER_DATA.fabrics[fabricKey || customizerState.fabricKey];
  if (!fabric) return;

  const overlay = document.getElementById("texture-modal-overlay");
  const img = document.getElementById("texture-modal-img");
  const title = document.getElementById("texture-modal-title");
  const desc = document.getElementById("texture-modal-desc");
  const zapBtn = document.getElementById("texture-modal-zap-btn");

  if (img) img.src = fabric.swatch;
  if (title) title.textContent = `${fabric.name} — Trama em Alta Definição`;
  if (desc) desc.textContent = fabric.description;

  if (zapBtn) {
    zapBtn.onclick = () => {
      const text = `Olá equipe da Grande Lar Móveis! 🧵✨
Vi o zoom em altíssima definição da trama do tecido *${fabric.name}* no site e adorei a textura!
Vocês têm o mostruário físico com as opções de cores desse tecido no showroom de Taubaté (São Geraldo ou Belém) para eu conhecer de perto?`;
      window.open(`https://wa.me/${STORE_DATA.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    };
  }

  if (overlay) overlay.classList.add("active");
};

/* ==========================================================================
   CATALOG GRID & FILTERING
   ========================================================================== */
function initCatalog() {
  const container = document.getElementById("catalog-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (!container) return;

  renderProducts("todos");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.filter;
      renderProducts(category);
    });
  });
}

function renderProducts(category) {
  const container = document.getElementById("catalog-grid");
  if (!container) return;

  let filtered = PRODUCTS;
  if (category === "real-fotos") {
    filtered = PRODUCTS.filter(p => p.isRealPhoto);
  } else if (category !== "todos") {
    filtered = PRODUCTS.filter(p => p.category === category);
  }

  container.innerHTML = filtered.map(product => `
    <div class="product-card" data-id="${product.id}">
      <div class="product-media">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-badge-group">
          <span class="product-badge ${product.badgeColor}">${product.badge}</span>
          ${product.isRealPhoto ? '<span class="product-badge real-photo">Showroom Real</span>' : ''}
        </div>
        <button class="product-quickview-btn" onclick="openQuickView(${product.id})" title="Ver Detalhes do Produto">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </button>
      </div>
      <div class="product-info">
        <div class="product-category-row">
          <span class="product-category">${product.categoryName}</span>
          <span class="product-location-hint">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Taubaté
          </span>
        </div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.shortDesc}</p>
        <div class="product-footer">
          <div class="product-price-box">
            <span class="price-condition">${product.installments}</span>
            <span class="product-price">${product.price}</span>
          </div>
          <button class="product-btn-quote" onclick="openProductQuoteWhatsApp(${product.id})">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.952 1.18-.175.2-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.49-1.077-.96-1.805-2.146-2.016-2.508-.21-.362-.022-.558.128-.707.135-.135.301-.351.451-.527.151-.175.201-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.245-.588-.493-.509-.676-.518l-.577-.01c-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508s1.078 2.908 1.228 3.109c.151.2 2.122 3.24 5.14 4.543 3.018 1.303 3.018.868 3.568.818.55-.05 1.782-.728 2.032-1.429.25-.702.25-1.304.175-1.429-.075-.126-.275-.201-.576-.351z"/>
            </svg>
            Consultar
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   QUICK VIEW MODAL
   ========================================================================== */
function initQuickViewModal() {
  const overlay = document.getElementById("product-modal-overlay");
  const closeBtn = document.getElementById("product-modal-close");

  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
    });
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.classList.remove("active");
    });
  }
}

window.openQuickView = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const overlay = document.getElementById("product-modal-overlay");
  const modalImg = document.getElementById("modal-product-img");
  const modalCategory = document.getElementById("modal-product-category");
  const modalTitle = document.getElementById("modal-product-title");
  const modalDesc = document.getElementById("modal-product-desc");
  const modalPrice = document.getElementById("modal-product-price");
  const modalInstallments = document.getElementById("modal-product-installments");
  const modalSpecsList = document.getElementById("modal-product-specs");
  const modalZapBtn = document.getElementById("modal-btn-zap");

  if (modalImg) modalImg.src = product.image;
  if (modalCategory) modalCategory.textContent = product.categoryName;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalDesc) modalDesc.textContent = product.shortDesc;
  if (modalPrice) modalPrice.textContent = product.price;
  if (modalInstallments) modalInstallments.textContent = product.installments;

  if (modalSpecsList && product.specs) {
    modalSpecsList.innerHTML = Object.entries(product.specs).map(([k, v]) => `
      <div class="modal-spec-row">
        <span class="spec-name">${k}</span>
        <span class="spec-val">${v}</span>
      </div>
    `).join("");
  }

  if (modalZapBtn) {
    modalZapBtn.onclick = () => openProductQuoteWhatsApp(product.id);
  }

  if (overlay) overlay.classList.add("active");
};

window.openProductQuoteWhatsApp = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const text = `Olá equipe da Grande Lar Móveis! 🛋️✨

Estava navegando no catálogo do site e me interessei muito por este modelo:
👉 *${product.name}* (${product.price} — ${product.installments})

Vocês têm esse produto para pronta entrega nos showrooms de Taubaté (São Geraldo ou Belém) ou fabricam sob encomenda nas medidas da minha sala? Gostaria de saber mais sobre as opções de tecidos e entrega. Obrigado!`;

  window.open(`https://wa.me/${STORE_DATA.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
};

/* ==========================================================================
   FAQ ACCORDION INTERACTION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    if (questionBtn) {
      questionBtn.addEventListener("click", () => {
        const wasActive = item.classList.contains("active");
        faqItems.forEach(i => i.classList.remove("active"));
        if (!wasActive) {
          item.classList.add("active");
        }
      });
    }
  });
}

/* ==========================================================================
   SCROLL REVEAL (LUXURY MICRO-ANIMATIONS)
   ========================================================================== */
function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal-on-scroll, .section-header, .feature-card, .customizer-container, .product-card, .craft-grid, .store-card, .review-card");

  if (!("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  });

  targets.forEach(el => {
    el.classList.add("reveal-on-scroll");
    observer.observe(el);
  });
}

/* ==========================================================================
   LUXURY TOAST (PROVA SOCIAL DISCRETA & ELEGANTE)
   ========================================================================== */
function initLuxuryToast() {
  const toast = document.getElementById("luxury-toast");
  const toastTitle = document.getElementById("toast-title");
  const toastMsg = document.getElementById("toast-message");
  const toastClose = document.getElementById("toast-close");
  if (!toast) return;

  const events = [
    { title: "Showroom Belém — Taubaté", msg: "Cliente de Taubaté acabou de solicitar catálogo do Sofá Retrátil Imperial." },
    { title: "Vila São Geraldo — Taubaté", msg: "Consulta recebida para Sofá Orgânico Soleil em Bouclé Nuvem." },
    { title: "Showroom Aberto", msg: "Showroom na Rodovia Oswaldo Cruz aberto hoje com pronta entrega e estacionamento." },
    { title: "Avaliação Google 5.0 ★", msg: "'Sofá maravilhoso, espuma super macia e atendimento nota 10!' — Mariana S." },
    { title: "Pronta Entrega Vale do Paraíba", msg: "Caminhão com entregas agendadas para Taubaté, Pinda e Tremembé." }
  ];

  let eventIdx = 0;

  function showNextToast() {
    const ev = events[eventIdx];
    if (toastTitle) toastTitle.textContent = ev.title;
    if (toastMsg) toastMsg.textContent = ev.msg;
    toast.classList.add("active");

    setTimeout(() => {
      toast.classList.remove("active");
    }, 5500);

    eventIdx = (eventIdx + 1) % events.length;
  }

  if (toastClose) {
    toastClose.addEventListener("click", () => {
      toast.classList.remove("active");
    });
  }

  // First appearance at 6.5s, then cycle every 20s
  setTimeout(showNextToast, 6500);
  setInterval(showNextToast, 20000);
}

/* ==========================================================================
   SMOOTH SCROLL FOR ALL INTERNAL ANCHORS
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}
