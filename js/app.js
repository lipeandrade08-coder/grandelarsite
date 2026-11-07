/**
 * GRANDE LAR MÓVEIS - TAUBATÉ / SP
 * Interactive Engine: Black Friday Edition, Real WhatsApp Sofa Photos,
 * Sofa Customizer, Fabric Swatches, Catalog Filters, Quick View Modal & Countdown
 */

// Store Information
const STORE_DATA = {
  name: "Grande Lar Móveis",
  whatsappNumber: "5512992606661", // (12) 99260-6661
  instagramUrl: "https://www.instagram.com/agrandelarmoveis/",
  instagramHandle: "@agrandelarmoveis",
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

// Sofa Customizer Data (100% Real WhatsApp Photos from Grande Lar Taubaté + Black Friday Pricing)
const CUSTOMIZER_DATA = {
  models: {
    retratil: {
      name: "Sofá Retrátil Chaise Imperial Off-White",
      category: "Foto Real • Retrátil & Chaise",
      oldBasePrice: 4890,
      basePrice: 3490,
      discountPct: "29% OFF",
      image: "assets/images/wa-sofa-retratil-offwhite-chaise.jpg",
      specs: ["Foto Real da Loja", "3 Módulos + Chaise", "Molas Ensacadas + D33 Soft", "Pronta Entrega Taubaté"]
    },
    grafite: {
      name: "Sofá Retrátil Titanium Base Madeira",
      category: "Foto Real • Base Madeira Maciça",
      oldBasePrice: 5190,
      basePrice: 3690,
      discountPct: "29% OFF",
      image: "assets/images/wa-sofa-retratil-grafite-madeira.jpg",
      specs: ["Foto Real da Loja", "Base em Madeira Tauari", "Almofadas Decorativas Inclusas", "Pillow Top Hiper Macio"]
    },
    azul: {
      name: "Sofá Retrátil Master Porta-Copos",
      category: "Foto Real • 4 Módulos + Bandeja",
      oldBasePrice: 5490,
      basePrice: 3890,
      discountPct: "29% OFF",
      image: "assets/images/wa-sofa-retratil-azul-porta-copos.jpg",
      specs: ["Foto Real da Loja", "Braço com Porta-Copos Madeira", "4 Módulos Retráteis", "Espuma D33 Hiper Soft"]
    },
    ilha: {
      name: "Sofá Ilha Modular Bandeja & Porta-Taças",
      category: "Foto Real • Design Alto Padrão",
      oldBasePrice: 6290,
      basePrice: 4390,
      discountPct: "30% OFF",
      image: "assets/images/wa-sofa-ilha-modular-madeira.jpg",
      specs: ["Foto Real da Loja", "Mesa Lateral em Madeira Maciça", "Porta-Taças Integrado", "Design Arquitetônico"]
    },
    canto: {
      name: "Sofá de Canto Modular Grand Living + Puff",
      category: "Foto Real • Canto Modular Completo",
      oldBasePrice: 6490,
      basePrice: 4590,
      discountPct: "29% OFF",
      image: "assets/images/wa-sofa-canto-modular-puff.jpg",
      specs: ["Foto Real da Loja", "Acompanha Puff Capitonnê", "Ampla Modulação em L", "Ideal para Sala Grande"]
    },
    fendi: {
      name: "Sofá Retrátil Chaise Veludo Fendi Soft",
      category: "Foto Real • Conforto Absoluto",
      oldBasePrice: 4690,
      basePrice: 3290,
      discountPct: "30% OFF",
      image: "assets/images/wa-sofa-retratil-chaise-fendi.jpg",
      specs: ["Foto Real da Loja", "Encosto Duplo Reclinável", "Chaise Estendida Confort", "Toque Aveludado"]
    }
  },
  fabrics: {
    linho: {
      name: "Linho Rústico Nobre",
      type: "Trama Nobre Respirável",
      swatch: "assets/images/swatch-linho.jpg",
      extra: 0,
      tag: "Mais Pedido",
      colors: [
        { name: "Off-White Cru", hex: "#e7decb" },
        { name: "Grafite Titanium", hex: "#4a4d50" },
        { name: "Azul Petróleo", hex: "#3c5a78" },
        { name: "Fendi Suave", hex: "#b4a594" }
      ],
      description: "Linho de alta gramatura com toque natural e trama encorpada. Extremamente resistente a fricção, fresco no calor e aconchegante no inverno."
    },
    boucle: {
      name: "Bouclé Nuvem Off-White",
      type: "Textura Fofa & Alta Costura",
      swatch: "assets/images/swatch-boucle.jpg",
      extra: 350,
      tag: "Tendência",
      colors: [
        { name: "Off-White Nuvem", hex: "#f3ede3" },
        { name: "Areia Quente", hex: "#d9cdb8" },
        { name: "Cinza Urbano", hex: "#8e918f" }
      ],
      description: "O queridinho dos arquitetos internacionais. Fios com laçadas irregulares criam uma superfície ultra macia e convidativa."
    },
    veludo: {
      name: "Veludo Soft Hidrorrepelente",
      type: "Toque Macio Aveludado",
      swatch: "assets/images/swatch-veludo.jpg",
      extra: 220,
      tag: "Aconchego",
      colors: [
        { name: "Fendi Acinzentado", hex: "#9e9589" },
        { name: "Terracota Rust", hex: "#ad532d" },
        { name: "Verde Esmeralda", hex: "#1f4a41" },
        { name: "Azul Royal", hex: "#2b4c6f" }
      ],
      description: "Veludo especial toque de seda com brilho fosco sutil. Tratamento antiestático e amigável para casas com pets."
    },
    couro: {
      name: "Couro & Detalhes Caramelo",
      type: "Acabamento Premium",
      swatch: "assets/images/swatch-couro.jpg",
      extra: 980,
      tag: "Luxo Atemporal",
      colors: [
        { name: "Conhaque Whisky", hex: "#9a5629" },
        { name: "Café Escuro", hex: "#4b3223" },
        { name: "Preto Obsidian", hex: "#1e1e1e" }
      ],
      description: "Acabamento nobre de altíssima durabilidade e fácil higienização, ideal para salas sofisticadas."
    }
  },
  sizes: {
    "210": { label: "2,10m", desc: "Compacto / Apartamento", multiplier: 0.92 },
    "240": { label: "2,50m", desc: "Médio / Mais Vendido", multiplier: 1.00 },
    "280": { label: "2,90m", desc: "Espaçoso / Sala Ampla", multiplier: 1.16 },
    "320": { label: "3,30m", desc: "Gigante / Sala Integrada", multiplier: 1.30 }
  }
};

let customizerState = {
  modelKey: "retratil",
  fabricKey: "linho",
  colorName: "Off-White Cru",
  sizeKey: "240"
};

// Complete Black Friday Catalog with 100% Real Store Photos from WhatsApp
const PRODUCTS = [
  {
    id: 1,
    name: "Sofá Retrátil Chaise Imperial Off-White (3 Módulos)",
    category: "retratil",
    categoryName: "Foto Real • Retrátil & Chaise",
    image: "assets/images/wa-sofa-retratil-offwhite-chaise.jpg",
    badge: "🔥 -29% Black Friday",
    badgeColor: "bf-fire",
    location: "Pronta Entrega • Taubaté",
    shortDesc: "Foto real do nosso showroom! Sofá retrátil de 3 módulos com chaise estendida em linho off-white, pillow top alto e encosto reclinável.",
    oldPrice: "De R$ 4.890",
    price: "R$ 3.490",
    installments: "10x de R$ 349,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Configuração": "3 Módulos Amplos + Chaise Direita",
      "Assento": "Molas Ensacadas + Espuma D33 Hiper Soft",
      "Encosto": "Reclinável multiposições em fibra siliconada",
      "Estrutura": "Madeira maciça de Eucalipto tratado",
      "Oferta Black Friday": "Desconto real de R$ 1.400 + Pronta Entrega"
    }
  },
  {
    id: 2,
    name: "Sofá Retrátil Titanium Grafite com Base em Madeira",
    category: "retratil",
    categoryName: "Foto Real • Retrátil & Chaise",
    image: "assets/images/wa-sofa-retratil-grafite-madeira.jpg",
    badge: "🔥 -29% Black Friday",
    badgeColor: "bf-fire",
    location: "Pronta Entrega • Taubaté",
    shortDesc: "Exposto no showroom! Acabamento em linho grafite com base aparente em madeira nobre maciça e almofadas decorativas caramelo.",
    oldPrice: "De R$ 5.190",
    price: "R$ 3.690",
    installments: "10x de R$ 369,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Configuração": "Retrátil 3 Módulos + Chaise + Base Madeira",
      "Assento": "Pillow Top duplo com Espuma D33 Soft",
      "Diferencial": "Rodapé em madeira maciça tauari e almofadas",
      "Revestimento": "Linho Grafite de alta resistência",
      "Oferta Black Friday": "Economia de R$ 1.500 na Black Friday"
    }
  },
  {
    id: 3,
    name: "Sofá Retrátil Master Azul Petróleo com Porta-Copos",
    category: "retratil",
    categoryName: "Foto Real • Mega Retrátil",
    image: "assets/images/wa-sofa-retratil-azul-porta-copos.jpg",
    badge: "🔥 -29% Black Friday",
    badgeColor: "bf-fire",
    location: "Showroom Grande Lar Taubaté",
    shortDesc: "Sofá gigante de 4 módulos retráteis com bandeja e porta-copos em madeira maciça embutido no braço + almofadas decorativas terracota.",
    oldPrice: "De R$ 5.490",
    price: "R$ 3.890",
    installments: "10x de R$ 389,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Módulos": "4 Assentos Retráteis Independentes",
      "Braço Especial": "Tampo em madeira maciça com 2 porta-copos",
      "Almofadas": "Acompanha 4 almofadas decorativas terracota",
      "Conforto": "Molas ensacadas + Espuma D33 certificada",
      "Disponibilidade": "Pronta entrega ou sob medida"
    }
  },
  {
    id: 4,
    name: "Sofá Ilha Living Modular com Bandeja & Porta-Taças",
    category: "canto",
    categoryName: "Foto Real • Ilha & Design",
    image: "assets/images/wa-sofa-ilha-modular-madeira.jpg",
    badge: "🖤 -30% Black Friday",
    badgeColor: "bf-gold",
    location: "Showroom Grande Lar Taubaté",
    shortDesc: "Design de revista no nosso showroom: sofá ilha em tecido off-white com plataforma lateral em madeira nobre e suporte embutido para taças.",
    oldPrice: "De R$ 6.290",
    price: "R$ 4.390",
    installments: "10x de R$ 439,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Design": "Modular Ilha com Chaise e Plataforma Amadeirada",
      "Exclusividade": "Suporte embutido para taças e bandeja lateral",
      "Tecido": "Linho Bouclé Off-White toque macio",
      "Assento": "Espuma D33 Hiper Soft anatômica",
      "Garantia": "Garantia de fábrica + Entrega própria"
    }
  },
  {
    id: 5,
    name: "Sofá de Canto Modular Grand Living + Puff Capitonnê",
    category: "canto",
    categoryName: "Foto Real • Sofá de Canto",
    image: "assets/images/wa-sofa-canto-modular-puff.jpg",
    badge: "🔥 -29% Black Friday",
    badgeColor: "bf-fire",
    location: "Showroom Grande Lar Taubaté",
    shortDesc: "Conjunto completo em L para toda a família! Sofá de canto modular cinza claro acompanhado de puff central capitonnê.",
    oldPrice: "De R$ 6.490",
    price: "R$ 4.590",
    installments: "10x de R$ 459,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Formato": "Canto em L Amplo + Puff Central Capitonnê",
      "Assento": "Costura puxada em gomos com D33 Soft",
      "Almofadas": "Almofadas soltas em fibra siliconada",
      "Pés": "Madeira maciça tratada",
      "Condição Black Friday": "Puff central incluso na promoção"
    }
  },
  {
    id: 6,
    name: "Sofá Retrátil & Reclinável Chaise Veludo Fendi",
    category: "retratil",
    categoryName: "Foto Real • Retrátil & Chaise",
    image: "assets/images/wa-sofa-retratil-chaise-fendi.jpg",
    badge: "🔥 -30% Black Friday",
    badgeColor: "bf-fire",
    location: "Showroom Grande Lar Taubaté",
    shortDesc: "O campeão de vendas na Black Friday! Sofá retrátil com chaise longa em tecido aveludado fendi acinzentado e encosto duplo ultra macio.",
    oldPrice: "De R$ 4.690",
    price: "R$ 3.290",
    installments: "10x de R$ 329,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Configuração": "Assentos Retráteis + Chaise Longa",
      "Toque": "Veludo Soft Fendi antiestático",
      "Encosto": "Reclinável com almofadas lombares",
      "Mecanismo": "Aço carbono reforçado com rodízios de silicone"
    }
  },
  {
    id: 7,
    name: "Sofá Retrátil Chaise Confort Bege Showroom",
    category: "retratil",
    categoryName: "Foto Real • Retrátil & Chaise",
    image: "assets/images/wa-sofa-retratil-chaise-bege.jpg",
    badge: "🖤 -28% Black Friday",
    badgeColor: "bf-gold",
    location: "Loja Belém (Rod. Oswaldo Cruz, 255)",
    shortDesc: "Exposto na nossa loja! Sofá retrátil com chaise estendida em tom bege areia, pillow top de 18cm e braços almofadados.",
    oldPrice: "De R$ 4.590",
    price: "R$ 3.290",
    installments: "10x de R$ 329,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Localização": "Exposto no Showroom para teste presencial",
      "Assento": "Pillow Top 18cm + Molas Ensacadas",
      "Revestimento": "Linho Aveludado Bege Areia",
      "Entrega": "Pronta Entrega para Taubaté e Região"
    }
  },
  {
    id: 8,
    name: "Conjunto Sala Living 3 Lugares + Poltrona & Mesas",
    category: "living",
    categoryName: "Foto Real • Sala Completa",
    image: "assets/images/real-sofa-living-poltrona.jpg",
    badge: "🔥 -32% Black Friday",
    badgeColor: "bf-fire",
    location: "Showroom Grande Lar Taubaté",
    shortDesc: "Ambiente completo do nosso showroom: Sofá Living off-white com almofadas geométricas + Poltrona decorativa com desconto de Black Friday.",
    oldPrice: "De R$ 5.290",
    price: "R$ 3.590",
    installments: "10x de R$ 359,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Itens": "Sofá Living 3 Lugares + Poltrona Decorativa",
      "Tecido": "Linho tramado cinza claro de alta gramatura",
      "Conforto": "Espuma D33 macia e ergonômica",
      "Showroom": "Disponível a pronta entrega"
    }
  },
  {
    id: 9,
    name: "Poltrona Giratória Velvet Green Circular",
    category: "living",
    categoryName: "Foto Real • Poltrona Design",
    image: "assets/images/real-poltrona-giratoria-verde.jpg",
    badge: "🖤 -31% Black Friday",
    badgeColor: "bf-gold",
    location: "Showroom Grande Lar Taubaté",
    shortDesc: "Poltrona redonda giratória 360° estofada em verde esmeralda com 3 almofadas soltas. Peça de destaque na Black Friday!",
    oldPrice: "De R$ 2.490",
    price: "R$ 1.690",
    installments: "10x de R$ 169,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Formato": "Redondo / Chaise Individual Giratória",
      "Mecanismo": "Giro 360 graus em aço carbono",
      "Almofadas": "3 almofadas de encosto inclusas",
      "Tecido": "Trama esmeralda texturizada"
    }
  },
  {
    id: 10,
    name: "Chaise Lounge Redonda Varanda & Área Gourmet",
    category: "living",
    categoryName: "Foto Real • Área Externa",
    image: "assets/images/real-chaise-curva-varanda.jpg",
    badge: "🔥 -35% Black Friday",
    badgeColor: "bf-fire",
    location: "Showroom Rod. Oswaldo Cruz, 255",
    shortDesc: "Chaise curva em fibra sintética com proteção UV e estofado impermeável naval. Na Black Friday com preço especial de queima de mostruário!",
    oldPrice: "De R$ 2.990",
    price: "R$ 1.900",
    installments: "10x de R$ 190,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Uso": "Varanda Gourmet, Jardim e Área Externa",
      "Material": "Fibra sintética resistente ao sol e chuva",
      "Estofado": "Tecido Acquablock impermeável",
      "Promoção": "Valor especial da placa de Black Friday na loja"
    }
  },
  {
    id: 11,
    name: "Mesa de Jantar Oval Orgânica + 6 Cadeiras Bouclé Curvas",
    category: "sala-jantar",
    categoryName: "Foto Real • Sala de Jantar",
    image: "assets/images/wa-mesa-jantar-oval-boucle.jpg",
    badge: "🖤 -30% Black Friday",
    badgeColor: "bf-gold",
    location: "Showroom Grande Lar Taubaté",
    shortDesc: "Foto real do nosso showroom! Mesa de jantar oval orgânica em madeira nobre com 6 cadeiras abraço curvas estofadas em Bouclé off-white.",
    oldPrice: "De R$ 5.990",
    price: "R$ 4.190",
    installments: "10x de R$ 419,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Lugares": "6 Cadeiras Design Curvo Envolvente",
      "Tampo": "Formato Oval Orgânico com base central escultural",
      "Estrutura": "Madeira maciça tauari envernizada",
      "Tecido Cadeiras": "Bouclé Off-White de fácil limpeza"
    }
  },
  {
    id: 12,
    name: "Mesa de Jantar Tampo Cristal Off-White + 6 Cadeiras Dual Tone",
    category: "sala-jantar",
    categoryName: "Foto Real • Sala de Jantar",
    image: "assets/images/wa-mesa-jantar-vidro-caramelo.jpg",
    badge: "🔥 -28% Black Friday",
    badgeColor: "bf-fire",
    location: "Showroom Grande Lar Taubaté",
    shortDesc: "Conjunto moderno com tampo de vidro laqueado off-white, base ripada em madeira e 6 cadeiras com encosto caramelo e assento claro.",
    oldPrice: "De R$ 5.390",
    price: "R$ 3.890",
    installments: "10x de R$ 389,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Capacidade": "6 Lugares espaçosos",
      "Tampo": "Vidro temperado laqueado off-white com cantos suaves",
      "Cadeiras": "Design contemporâneo bicolor caramelo & linho cru",
      "Base": "Pedestal central ripado em madeira"
    }
  },
  {
    id: 13,
    name: "Sala de Jantar 8 Lugares Madeira Nobre & Espelho LED",
    category: "sala-jantar",
    categoryName: "Foto Real • Sala de Jantar",
    image: "assets/images/wa-mesa-jantar-madeira-espelho.jpg",
    badge: "🖤 -30% Black Friday",
    badgeColor: "bf-gold",
    location: "Showroom Grande Lar Taubaté",
    shortDesc: "Mesa de jantar retangular em madeira maciça para 6 a 8 lugares com cadeiras estofadas, acompanhada de espelho orgânico com iluminação LED.",
    oldPrice: "De R$ 5.690",
    price: "R$ 3.990",
    installments: "10x de R$ 399,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Madeira": "Tauari maciça com acabamento acetinado",
      "Cadeiras": "Cadeiras ergonômicas em madeira com assento estofado",
      "Decoração": "Espelho orgânico LED e quadros disponíveis na loja",
      "Entrega": "Montagem gratuita pela nossa equipe"
    }
  },
  {
    id: 14,
    name: "Mesa de Jantar 6 Lugares Cadeiras Palhinha & Estofadas",
    category: "sala-jantar",
    categoryName: "Foto Real • Queima Black Friday",
    image: "assets/images/wa-salao-mesas-jantar-palhinha.jpg",
    badge: "🔥 Super Queima BF",
    badgeColor: "bf-fire",
    location: "Showroom Belém & São Geraldo",
    shortDesc: "Dezenas de conjuntos de salas de jantar com cadeiras em tela sextavada (palhinha) ou estofadas com preços de liquidação na Black Friday!",
    oldPrice: "De R$ 4.290",
    price: "R$ 2.890",
    installments: "10x de R$ 289,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Variedade": "+15 modelos de mesas a pronta entrega no salão",
      "Opções": "4, 6 e 8 lugares (tampo madeira ou vidro)",
      "Cadeiras": "Encosto em palhinha natural ou 100% estofadas",
      "Condição": "Preços especiais de etiqueta amarela Black Friday"
    }
  },
  {
    id: 15,
    name: "Painel Home Theater Ripado com Dupla Cristaleira LED",
    category: "home-quarto",
    categoryName: "Foto Real • Home & Sala TV",
    image: "assets/images/wa-painel-home-ripado-led.jpg",
    badge: "🖤 -27% Black Friday",
    badgeColor: "bf-gold",
    location: "Showroom Grande Lar Taubaté",
    shortDesc: "Estante Home Theater imponente em acabamento amadeirado com duas torres de cristaleira em vidro reflecta, prateleiras iluminadas em LED e nicho.",
    oldPrice: "De R$ 4.490",
    price: "R$ 3.290",
    installments: "10x de R$ 329,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Suporte TV": "Compatível com TVs de até 75 polegadas",
      "Iluminação": "Dupla cristaleira lateral com LED embutido",
      "Bancada": "Portas basculantes e nichos para aparelhos",
      "Montagem": "Instalação especializada inclusa em Taubaté"
    }
  },
  {
    id: 16,
    name: "Conjunto Cama Box Baú + Colchão Molas Ensacadas Pillow Top",
    category: "home-quarto",
    categoryName: "Foto Real • Colchões & Box Baú",
    image: "assets/images/wa-conjunto-box-bau-colchao.jpg",
    badge: "🔥 -33% Black Friday",
    badgeColor: "bf-fire",
    location: "Showroom Grande Lar Taubaté",
    shortDesc: "Conjunto completo de quarto no nosso showroom: Base Box Baú com pistões a gás + Colchão de Molas Ensacadas de alto suporte + Cabeceira.",
    oldPrice: "De R$ 4.190",
    price: "R$ 2.790",
    installments: "10x de R$ 279,00 sem juros",
    isRealPhoto: true,
    specs: {
      "Medidas": "Casal Padrão, Queen Size e King Size",
      "Base Baú": "Abertura fácil com pistões hidráulicos e amplo espaço",
      "Colchão": "Molas ensacadas individuais + Tampo em malha nobre",
      "Opcional": "Cabeceira estofada capitonnê disponível"
    }
  }
];

// Initialize on DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  initHeroVideo();
  initBlackFridayCountdown();
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
   BLACK FRIDAY LIVE COUNTDOWN TIMER
   ========================================================================== */
function initBlackFridayCountdown() {
  const daysEl = document.getElementById("bf-days");
  const hoursEl = document.getElementById("bf-hours");
  const minsEl = document.getElementById("bf-mins");
  const secsEl = document.getElementById("bf-secs");
  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  // Dynamic target: End of Black Friday week / rolling 4-day promotional window
  const now = new Date();
  const target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 23, 59, 59);

  function updateTimer() {
    const current = new Date();
    let diff = Math.max(0, Math.floor((target - current) / 1000));

    const d = Math.floor(diff / 86400);
    diff %= 86400;
    const h = Math.floor(diff / 3600);
    diff %= 3600;
    const m = Math.floor(diff / 60);
    const s = diff % 60;

    daysEl.textContent = String(d).padStart(2, "0");
    hoursEl.textContent = String(h).padStart(2, "0");
    minsEl.textContent = String(m).padStart(2, "0");
    secsEl.textContent = String(s).padStart(2, "0");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

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
    window.addEventListener("click", playOnTouch, { once: true, passive: true });
    window.addEventListener("touchstart", playOnTouch, { once: true, passive: true });
  });

  if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroVideo.play().catch(() => {});
        } else {
          heroVideo.pause();
        }
      });
    }, { threshold: 0.05 });
    videoObserver.observe(heroVideo);
  }
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
  }, { passive: true });
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
      const text = `Olá equipe da Grande Lar Móveis! 🖤🔥
Vi a oferta de *Black Friday* no site com a amostra do tecido *${currentFabric.name}* (cor ${customizerState.colorName}) para o modelo real *${currentModel.name}* e gostaria de ver o mostruário no showroom de Taubaté (Vila São Geraldo ou Belém).`;
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

  // Calculate Black Friday Price & Savings
  const oldTotal = Math.round((model.oldBasePrice + fabric.extra) * size.multiplier);
  const total = Math.round((model.basePrice + fabric.extra) * size.multiplier);
  const savings = oldTotal - total;
  const installmentVal = (total / 10).toFixed(2).replace(".", ",");
  const formattedOld = oldTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const formattedTotal = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const formattedSavings = savings.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const oldPriceEl = document.getElementById("customizer-old-price-val");
  const priceValEl = document.getElementById("customizer-price-val");
  const installmentValEl = document.getElementById("customizer-installment-val");
  const savingsBadgeEl = document.getElementById("customizer-bf-savings");

  if (oldPriceEl) {
    oldPriceEl.textContent = `De ${formattedOld}`;
  }
  if (priceValEl) {
    priceValEl.textContent = formattedTotal;
  }
  if (installmentValEl) {
    installmentValEl.textContent = `Ou em 10x de R$ ${installmentVal} sem juros • Desconto extra no PIX`;
  }
  if (savingsBadgeEl) {
    savingsBadgeEl.textContent = `🔥 Economia Black Friday de ${formattedSavings} (${model.discountPct})`;
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
  
  const oldTotal = Math.round((model.oldBasePrice + fabric.extra) * size.multiplier);
  const total = Math.round((model.basePrice + fabric.extra) * size.multiplier);
  const formattedOld = oldTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const formattedTotal = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const installmentVal = (total / 10).toFixed(2).replace(".", ",");

  const msg = 
`Olá equipe da Grande Lar Móveis! 🖤🔥

Personalizei meu sofá na *BLACK FRIDAY GRANDE LAR* pelo site oficial e quero garantir esta condição:

🛋️ *Modelo Real:* ${model.name}
🧵 *Tecido:* ${fabric.name}
🎨 *Cor:* ${customizerState.colorName}
📏 *Medida:* ${size.label} (${size.desc})
🏷️ *Oferta Black Friday:* De ${formattedOld} por *${formattedTotal}* (ou 10x de R$ ${installmentVal} sem juros)

Esse modelo está disponível a pronta entrega no showroom de Taubaté (Vila São Geraldo ou Belém) ou posso encomendar nessa configuração?`;

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
      const text = `Olá equipe da Grande Lar Móveis! 🧵🖤
Vi o zoom em alta definição da trama do tecido *${fabric.name}* na Black Friday do site e adorei a textura!
Vocês têm o mostruário físico desse tecido no showroom de Taubaté (São Geraldo ou Belém)?`;
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
    <div class="product-card bf-product-card" data-id="${product.id}">
      <div class="product-media" onclick="openQuickView(${product.id})" style="cursor: pointer;">
        <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async">
        <div class="product-badge-group">
          <span class="product-badge ${product.badgeColor}">${product.badge}</span>
          ${product.isRealPhoto ? '<span class="product-badge real-photo">📸 Foto Real da Loja</span>' : ''}
        </div>
        <button class="product-quickview-btn" onclick="event.stopPropagation(); openQuickView(${product.id})" title="Ver Detalhes do Produto">
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
            ${product.oldPrice ? `<span class="product-old-price">${product.oldPrice}</span>` : ''}
            <span class="product-price">${product.price}</span>
            <span class="price-condition">${product.installments}</span>
          </div>
          <button class="product-btn-quote bf-btn-quote" onclick="openProductQuoteWhatsApp(${product.id})">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.952 1.18-.175.2-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.49-1.077-.96-1.805-2.146-2.016-2.508-.21-.362-.022-.558.128-.707.135-.135.301-.351.451-.527.151-.175.201-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.245-.588-.493-.509-.676-.518l-.577-.01c-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508s1.078 2.908 1.228 3.109c.151.2 2.122 3.24 5.14 4.543 3.018 1.303 3.018.868 3.568.818.55-.05 1.782-.728 2.032-1.429.25-.702.25-1.304.175-1.429-.075-.126-.275-.201-.576-.351z"/>
            </svg>
            Garantir Oferta
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
  const modalOldPrice = document.getElementById("modal-product-old-price");
  const modalPrice = document.getElementById("modal-product-price");
  const modalInstallments = document.getElementById("modal-product-installments");
  const modalSpecsList = document.getElementById("modal-product-specs");
  const modalZapBtn = document.getElementById("modal-btn-zap");

  if (modalImg) modalImg.src = product.image;
  if (modalCategory) modalCategory.textContent = `${product.categoryName} • ${product.badge}`;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalDesc) modalDesc.textContent = product.shortDesc;
  if (modalOldPrice) modalOldPrice.textContent = product.oldPrice || "";
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

  const text = `Olá equipe da Grande Lar Móveis! 🖤🔥

Vi a foto real deste produto na *BLACK FRIDAY GRANDE LAR* pelo site e quero garantir o preço promocional:
👉 *${product.name}*
🏷️ *Oferta:* ${product.oldPrice ? product.oldPrice + ' por ' : ''}*${product.price}* (${product.installments})

Ainda têm unidades disponíveis para pronta entrega nos showrooms de Taubaté (São Geraldo ou Belém)?`;

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
   LUXURY TOAST (PROVA SOCIAL BLACK FRIDAY EM TEMPO REAL)
   ========================================================================== */
function initLuxuryToast() {
  const toast = document.getElementById("luxury-toast");
  const toastTitle = document.getElementById("toast-title");
  const toastMsg = document.getElementById("toast-message");
  const toastClose = document.getElementById("toast-close");
  if (!toast) return;

  const events = [
    { title: "🔥 Black Friday — Loja Belém", msg: "Cliente de Taubaté acabou de reservar o Sofá Retrátil Imperial Off-White com 29% OFF!" },
    { title: "🖤 Black Friday — Vila São Geraldo", msg: "Sofá Retrátil Titanium Base Madeira consultado agora mesmo pelo WhatsApp." },
    { title: "🔥 Queima de Showroom Ativa", msg: "As 2 lojas de Taubaté estão com etiquetas especiais de Black Friday a pronta entrega!" },
    { title: "⭐ Avaliação Google 5.0 ★", msg: "'Fechei meu sofá e mesa de jantar na promoção da Grande Lar, entrega super rápida!' — Juliana M." },
    { title: "🚚 Entrega Própria no Vale", msg: "Caminhão saindo com pedidos da Black Friday para Taubaté, Tremembé e Pinda." }
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

  // First appearance at 5.5s, then cycle every 18s
  setTimeout(showNextToast, 5500);
  setInterval(showNextToast, 18000);
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
