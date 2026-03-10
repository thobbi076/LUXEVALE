export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  isNew: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  isHidden?: boolean;
  stock?: number;
  description: string;
  rating: number;
  reviews: number;
  keyFeatures?: string[];
  specifications?: Record<string, string>;
  brand?: string;
  ingredients?: string;
  howToUse?: string;
  fragranceNotes?: {
    top: string;
    heart: string;
    base: string;
  };
}

export const products: Product[] = [
  {
    id: 'modern-key-lock-satchel',
    name: 'Modern Key Lock Satchel',
    category: 'Fashion',
    price: 25000,
    originalPrice: 36000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836580/bag1_sxr98e.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836580/bag1_sxr98e.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836625/bag5_d339n7.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836585/bag2_hh0bk7.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836607/bag3_nhhkpw.png'
    ],
    isNew: true,
    description: 'A sophisticated satchel featuring a distinctive buckle and key charm detail. Available in classic black and bold red, this structured bag is perfect for the modern professional. The high-gloss finish and silver-tone hardware add a touch of luxury to any outfit.',
    rating: 4.8,
    reviews: 7,
    keyFeatures: [
      'High-gloss finish',
      'Distinctive buckle detail',
      'Key charm accessory',
      'Structured silhouette',
      'Available in Black and Red'
    ],
    specifications: {
      'Material': 'Patent Faux Leather',
      'Style': 'Satchel / Crossbody',
      'Closure': 'Zip & Buckle',
      'Strap': 'Detachable Shoulder Strap'
    }
  },
  {
    id: 'mens-wide-leg-trousers',
    name: "Men's Wide Leg Trousers",
    category: 'Fashion',
    price: 15000,
    originalPrice: 23000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908061/tro1_obgbjx.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908061/tro1_obgbjx.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908071/tro2_fhiil3.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908063/tro3_nwkauq.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908083/tro4_whlaf2.png'
    ],
    isNew: true,
    description: "Stay comfortable and stylish with these Men's Wide Leg Trousers. Featuring a relaxed fit and a clean, minimalist design, these trousers are perfect for creating a modern silhouette. Ideal for pairing with a simple tee or a crisp shirt.",
    rating: 4.5,
    reviews: 5,
    keyFeatures: [
      "Relaxed wide-leg fit",
      "Versatile black color",
      "Comfortable waistband",
      "Durable fabric",
      "Minimalist design"
    ],
    specifications: {
      "Material": "Cotton Blend",
      "Fit": "Wide Leg",
      "Color": "Black",
      "Occasion": "Casual"
    }
  },
  {
    id: 'macgregor-sheet-mask',
    name: 'MacGregor Natural Moisture Sheet Mask',
    brand: 'MacGregor',
    category: 'Skincare',
    price: 2500,
    originalPrice: 3600,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837382/mas1_hrlbzo.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837382/mas1_hrlbzo.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837362/mas2_ijqrur.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837379/mas3_we71a4.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837417/mas4_jgkiyo.png'
    ],
    isNew: true,
    description: "Revitalize your skin with MacGregor Natural Moisture Sheet Masks. Available in Charcoal for deep pore cleansing and oil control, and Pomegranate for firming and wrinkle improvement. These masks provide intense hydration and leave your skin feeling refreshed and radiant.",
    rating: 4.7,
    reviews: 10,
    keyFeatures: [
      "Deep pore cleansing (Charcoal)",
      "Wrinkle improvement (Pomegranate)",
      "Intense hydration",
      "Oil control",
      "Natural ingredients"
    ],
    specifications: {
      "Type": "Sheet Mask",
      "Variants": "Charcoal, Pomegranate",
      "Skin Type": "All Skin Types",
      "Usage": "Single Use"
    },
    ingredients: "Water, Glycerin, Butylene Glycol, Charcoal Powder (for Charcoal variant), Punica Granatum Fruit Extract (for Pomegranate variant), Sodium Hyaluronate, Betaine, Allantoin, Panthenol, Carbomer, Triethanolamine, Phenoxyethanol, Ethylhexylglycerin, Disodium EDTA, Fragrance.",
    howToUse: "1. After cleansing and toning, remove the mask from the package and unfold it carefully.\n2. Apply the mask to your face, smoothing out any air bubbles to ensure good contact with the skin.\n3. Leave on for 15-20 minutes to allow the essence to absorb.\n4. Remove the mask and gently pat the remaining essence into your skin until fully absorbed. Do not rinse."
  },
  {
    id: 'green-mask-stick',
    name: 'Green Mask Stick For Pimples',
    category: 'Skincare',
    price: 3500,
    originalPrice: 6000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837379/mask1_j4trls.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837379/mask1_j4trls.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837410/mask2_o5kxjq.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837404/mask3_eccaxk.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837412/mask4_cblqjh.png'
    ],
    isNew: true,
    description: "The mask cleansing face contains green tea extract, which can effectively clean the skin pores, deeply clean up skin dirt, adjust the skin's water and oil balance, replenish skin moisture, and nourish the skin. Effectively reduce control oil, improve facial fullness, and Keep beautiful skin.",
    rating: 4.6,
    reviews: 18,
    keyFeatures: [
      "Contains green tea extract",
      "Deeply cleans skin pores and dirt",
      "Adjusts water and oil balance",
      "Rotating head design for easy application",
      "Removes whiteheads and excess oil"
    ],
    specifications: {
      "SKU": "GE779ST439KNVNAFAMZ",
      "Model": "Green Mask",
      "Production Country": "China",
      "Size": "10 x 7 x 1 cm",
      "Weight": "40g",
      "Main Material": "Plastic",
      "Color": "Green"
    },
    ingredients: "Water, Propylene Glycol, Glycerin, Titanium Dioxide, Kaolin, Isoceteth-20, Butylene Glycol, Sodium Hydroxide, Stearic Acid, Tea Extract, Disodium EDTA, Chromium Oxide Green, Dipotassium Glycyrrhizate, Tocopherol (Vitamin E).",
    howToUse: "1. Twist the base to spin out the paste.\n2. Apply evenly to the face, avoiding the eye area.\n3. Leave it on for about 10-15 minutes until it dries.\n4. Rinse thoroughly with water.\n5. Use 2-3 times a week for oily skin, 1-2 times for dry skin."
  },
  {
    id: 'balila-unisex-perfume',
    name: 'Balila Unisex Perfume',
    brand: 'Balila',
    category: 'Unisex',
    price: 5500,
    originalPrice: 9000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836605/balila1_jws29n.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836605/balila1_jws29n.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836627/balila2_xp1lr6.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836641/balila3_sdu72j.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836635/balila4_pjpe17.png'
    ],
    isNew: true,
    description: "Announce your arrival without much effort with this sensational fragrance. It's a floral, woody fragrance infused in the exotic gourmand scents making every one that wears it stand out with its aroma still trailing after he/she had long left the scene. A very sensual and aromatic scent that every one who has taste for good perfumes will love. A combination of floral and woody accord form the top, middle and base notes.",
    rating: 4.5,
    reviews: 12,
    keyFeatures: [
      "Sensational fragrance",
      "Floral, woody fragrance infused in exotic gourmand scents",
      "Long-lasting aroma that trails after you",
      "Sensual and aromatic scent",
      "Combination of floral and woody accords"
    ],
    specifications: {
      "SKU": "BA244PF5RI5KNNAFAMZ",
      "Product Line": "JETO",
      "Weight (kg)": "0.01",
      "Volume": "120ml"
    },
    ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Limonene, Linalool, Coumarin, Citronellol, Geraniol, Citral.",
    howToUse: "Hold the bottle 3-6 inches away from your skin and spray onto pulse points such as your wrists, neck, and behind the ears. For a longer-lasting scent, apply to moisturized skin. Avoid rubbing your wrists together as this can break down the fragrance notes.",
    fragranceNotes: {
      top: "Bergamot, Black Pepper, Cardamom",
      heart: "Midnight Jasmine, Dark Vanilla, Rose Absolute",
      base: "Rare Oud, Amber, Musk, Sandalwood"
    }
  },
  {
    id: 'temptation-eau-de-parfum',
    name: 'TEMPTATION EAU DE PARFUM 100ML FOR MEN',
    brand: 'Temptation',
    category: 'Men\'s Cologne',
    price: 8500,
    originalPrice: 10000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772838010/tempt1_wgxivn.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772838010/tempt1_wgxivn.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772838041/tempt2_ypaanh.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772838301/tempt3_ipvtc0.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772907794/tempt4_s9tzyg.png'
    ],
    isNew: true,
    description: "This Eau Du Parfum is Luxurious and Sensuous. Its romantic scent is a dazzling, oriental with floral aroma. A romantic blend of Asian fruit with subtle undertones of musk and raspberry. It has a romantic scent that makes you dazzle all day. Suitable for everyday use with a lasting effect. This 100ml perfume smells great and awesome, a great addition for your daily use. Lightweight and affordable. Need a perfume? This is perfect for you. Smell good, feel great and look awesome.",
    rating: 5.0,
    reviews: 1,
    keyFeatures: [
      "Long Lasting and Nice Fragrance",
      "Temptation",
      "100ml",
      "Eau De Perfume",
      "Men Perfume",
      "Fresh and Aromatic",
      "Affordable Price"
    ],
    specifications: {
      "SKU": "TE552PF4PDQSENAFAMZ",
      "Product Line": "JETO",
      "Model": "Temptation",
      "Weight (kg)": "0.1",
      "Volume": "100ml"
    },
    ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citronellol, Coumarin, Citral, Geraniol.",
    howToUse: "Spray liberally onto pulse points (neck, chest, and wrists) for long-lasting results. Best applied after a shower when pores are open.",
    fragranceNotes: {
      top: "Asian Fruit, Bergamot",
      heart: "Musk, Raspberry, Floral Notes",
      base: "Oriental Woods, Amber"
    }
  },
  {
    id: 'black-studded-bag',
    name: 'Black Studded Bag',
    category: 'Fashion',
    price: 22000,
    originalPrice: 37000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836631/bg1_k5as4g.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836631/bg1_k5as4g.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836644/bg2_aarevx.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836659/bg3_rwrg3h.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836672/bg4_ehfaky.png'
    ],
    isNew: true,
    description: "Elevate your style with this exquisite black studded handbag. Featuring a structured silhouette with geometric detailing and a matte finish, this bag is the perfect blend of edgy and elegant. It comes with a chain strap for versatile styling. Please note: This item is sold without the original box.",
    rating: 5.0,
    reviews: 9,
    keyFeatures: [
      "Matte black finish",
      "Geometric stud detailing",
      "Chain strap",
      "Structured design",
      "Not Boxed"
    ],
    specifications: {
      "Material": "Faux Leather",
      "Color": "Black",
      "Style": "Crossbody",
      "Condition": "New without box"
    }
  },
  {
    id: 'six-pieces-ankle-socks',
    name: 'Six Pieces-in-1 Quality Ankle Socks',
    category: 'Fashion',
    price: 3000,
    originalPrice: 4500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772838033/sock1_pxuz8n.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772838033/sock1_pxuz8n.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772838030/sock2_damonj.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837960/sock3_cxcjfs.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772838019/sock4_im7n4x.png'
    ],
    isNew: true,
    description: "The 6 Pieces (3 Pairs) ankle socks are produced from cotton rich fabric. Designed to protect the feet from the effect of the harshness of shoe on the feet, warm and cold weathers. It expands for proper fit on the feet. It is one size (fits adults). High quality 100% cotton which boasts ample absorbency and softness while resisting pilling and shedding, finished off in a stronger pure natural cotton fibre and is machine washable for easy care and comfortability.",
    rating: 4.5,
    reviews: 18,
    keyFeatures: [
      "6 Pieces (3 Pairs)",
      "1 Pair of each color (Black/White/Ash)",
      "High quality 100% cotton",
      "Easy to wear and maintain",
      "Classy, Stylish, and Fashionable",
      "Safe to wear",
      "One size fits adults"
    ],
    specifications: {
      "SKU": "FA203AA172BVWNAFAMZ",
      "Product Line": "City Deals",
      "Model": "Fashion",
      "Weight (kg)": "0.3",
      "Color": "White/Black/Ash",
      "Main Material": "Cotton"
    }
  },
  {
    id: 'geneva-couple-watches',
    name: 'Geneva Couple Watches Women Casual Silicone Band Quartz Watch Jewelry Set',
    category: 'Fashion',
    price: 9500,
    originalPrice: 14000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908091/watch1_luv2be.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908091/watch1_luv2be.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908086/watch2_r7f6mp.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908100/watch3_hxvuj0.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908100/watch4_a2zwm3.png'
    ],
    isNew: true,
    description: "This black and white couple watch is paired with a couple love bracelet for a casual and stylish look. The watch uses a quartz movement to ensure accurate time display. The silicone strap is comfortable and durable for everyday wear. Although not waterproof, the delicate alloy case demonstrates high quality craftsmanship. Whether it's Valentine's Day, birthday or anniversary, this watch and bracelet combination is the perfect gift for your loved one, conveying deep emotion and care.",
    rating: 4.6,
    reviews: 19,
    keyFeatures: [
      "Classic black and white color scheme",
      "Includes 2 watches and 1 set of bracelets",
      "Accurate Quartz movement",
      "Comfortable silicone strap",
      "Symbol of emotion and care",
      "Perfect gift for couples"
    ],
    specifications: {
      "SKU": "FA203FC5PTN3ANAFAMZ",
      "Product Line": "Haogogo-COD",
      "Production Country": "China",
      "Size": "10 x 10 x 3 cm",
      "Weight": "0.08kg",
      "Color": "Black/White",
      "Main Material": "Alloy",
      "Movement": "Quartz",
      "Band Material": "Silicone",
      "Waterproof": "No"
    }
  },
  {
    id: 'minimalist-square-watch',
    name: 'Stylish Minimalist Square Silicone Strap Quartz Watch',
    category: 'Fashion',
    price: 7500,
    originalPrice: 11500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908101/wtch1_rt8vkw.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908101/wtch1_rt8vkw.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908109/wtch2_gibwsj.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908123/wtch3_hgoyz2.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908127/wtch4_qmdq2b.png'
    ],
    isNew: true,
    description: "This stylish minimalist square watch features a comfortable silicone strap and a durable alloy case. It is an incredible gift suitable for any occasion, highlighting your temperament and emphasizing your uniqueness. With its business casual and sports style, it fits perfectly into any wardrobe.",
    rating: 4.5,
    reviews: 22,
    keyFeatures: [
      "Minimalist Square Design",
      "Quartz Movement",
      "Alloy Case Material",
      "Silicone Band",
      "Suitable for any occasion",
      "Unisex Design"
    ],
    specifications: {
      "SKU": "FA203FC6TBIHFNAFAMZ",
      "Weight (kg)": "0.03",
      "Movement": "Quartz",
      "Case Material": "Alloy",
      "Band Material": "Silicone",
      "Case Shape": "Square",
      "Style": "Sports / Business Casual",
      "Battery": "Non-rechargeable Button Battery"
    }
  },
  {
    id: 'givanas-caribbean-vanilla',
    name: 'Givanas 100% CARBBEAN VANILLA PERFUME',
    category: 'Women\'s Perfume',
    price: 6500,
    originalPrice: 9500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837622/perf1_veuplk.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837622/perf1_veuplk.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837626/perf2_ygnwao.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837647/perf3_vqgzvf.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837667/perf4_uwz5mm.png'
    ],
    isNew: true,
    description: "An elegant rich modern fruity chypre fragrance. The fresh top notes of bergamot and watermelon are boosted by a subtle floral accord of pretty jasmin, rose and violet notes. The dry down is a tenacious blend of oakmoss, amber and precious patchouli woods.",
    rating: 4.5,
    reviews: 10,
    keyFeatures: [
      "Eau De parfum",
      "Natural spray",
      "E 100ml",
      "UNIQUE FRAGRANCE",
      "AFFORDABLE"
    ],
    specifications: {
      "SKU": "GI958PF46XB1ANAFAMZ",
      "Product Line": "JETO",
      "Model": "Carbbean Vanilla",
      "Weight (kg)": "0.01",
      "Color": "Black"
    }
  },
  {
    id: 'grey-de-kouroun-wishbone',
    name: 'Grey De Kouroun Wishbone Perfume',
    category: 'Unisex',
    price: 6500,
    originalPrice: 8000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908617/wish1_shcppw.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908617/wish1_shcppw.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908626/wish2_nnh3xv.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908628/wish3_j44brd.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908614/wish4_igdvvt.png'
    ],
    isNew: true,
    description: "Wishbone natural spray is a product of GREY DE KOUROUN. This natural spray is affordable, long-lasting, does not leave stain on cloths and can be used by both gender.",
    rating: 4.5,
    reviews: 15,
    keyFeatures: [
      "Long lasting",
      "Nice fragrance",
      "Affordable price",
      "Natural spray"
    ],
    specifications: {
      "SKU": "GR041PF3PFFA7NAFAMZ",
      "Product Line": "JETO",
      "Weight (kg)": "0.01"
    }
  },
  {
    id: 'ecstasy-chic-eau-de-toilette',
    name: 'Ecstasy Collection Chic Eau de Toilette - 25ml',
    category: 'Women\'s Perfume',
    price: 8500,
    originalPrice: 10500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836647/chic1_cixifh.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836647/chic1_cixifh.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836661/chic2_lshgpl.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836672/chic3_pam2ip.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836673/chic4_shzwmh.png'
    ],
    isNew: true,
    description: "Ecstasy Chic is not just a fragrance, it’s a statement. Designed for women who understand that true luxury doesn’t shout, it lingers. With a refined blend of woody, oriental, gourmand and light oud accords, this premium Eau de Toilette delivers a confident, seductive presence that lasts all day.",
    rating: 4.8,
    reviews: 20,
    keyFeatures: [
      "All-Day Longevity",
      "Premium 5X Essence",
      "Moderate Projection",
      "Skin-Friendly Formula",
      "All-Season Wear"
    ],
    specifications: {
      "SKU": "EC647PF7VJ103NAFAMZ",
      "Product Line": "KATES ASSOCIATED INDUSTRIES LIMITED",
      "Model": "Chic Collection",
      "Weight (kg)": "0.2",
      "Certifications": "Fair Trade|Eco Friendly",
      "Color": "Red",
      "Main Material": "Parfum, Eau de Toilette"
    }
  },
  {
    id: 'roushun-vitamin-c-serum',
    name: 'Roushun Vitamin C Serum [Anti-Aging Serum]---30ml',
    category: 'Skincare',
    price: 4500,
    originalPrice: 7500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837706/rous1_oo3dqr.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837706/rous1_oo3dqr.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837949/rous2_oun06o.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837989/rous3_vvkwji.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837989/rous4_sd4w5i.png'
    ],
    isNew: true,
    description: "NEW IMPROVED formula Roushun Vitamin C Serum is thin and highly effective. It will help fade sun spots, discoloration, refine skin texture, reduce wrinkle formation, and minimize existing wrinkles. It also has a high concentrated base of pure vegan hyaluronic acid to plump skin cells and protect and restore.",
    rating: 4.6,
    reviews: 25,
    keyFeatures: [
      "Hyaluronic acid",
      "Anti-aging",
      "Whitening",
      "Roushun brand",
      "Vitamin C"
    ],
    specifications: {
      "SKU": "RO613ST4GXB8LNAFAMZ",
      "Product Line": "JETO",
      "Weight (kg)": "0.2"
    }
  },
  {
    id: 'anua-niacinamide-dark-spot-serum',
    name: 'Anua Niacinamide 10%+ TXA 4% Dark Spot Correcting Serum -30ml',
    category: 'Skincare',
    price: 8500,
    originalPrice: 16500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836571/anua1_pgwpwb.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836571/anua1_pgwpwb.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836585/anua2_ypg21v.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836594/anua3_pcwrlv.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836607/anua4_ymcnud.png'
    ],
    isNew: true,
    description: "The Anua Niacinamide 10% + TXA 4% Dark Spot Correcting Serum is a potent skincare solution designed to target and reduce the appearance of dark spots and hyperpigmentation. This serum combines 10% niacinamide with 4% tranexamic acid (TXA) to promote a more even complexion, reduce redness, and enhance overall skin radiance.",
    rating: 4.7,
    reviews: 19,
    keyFeatures: [
      "Effective Dark Corrector",
      "Hydrating Formula",
      "Brightens and Evens Skin Tone",
      "Lightweight and Fast Absorbing",
      "Suitable for All Skin Types"
    ],
    specifications: {
      "SKU": "AN522ST5X3ID6NAFAMZ",
      "Product Line": "PROMO Mall",
      "Weight (kg)": "0.7"
    }
  },
  {
    id: 'galuin-waffle-shorts-set',
    name: 'GALUIN Waffle Shorts And T Shirt Set-Khaki',
    category: 'Fashion',
    price: 16500,
    originalPrice: 22800,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836674/galu1_jh5wp1.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836674/galu1_jh5wp1.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772836694/galu2_xtfjku.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837375/galu3_cwioku.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772837383/galu4_hajqt0.png'
    ],
    isNew: true,
    description: "Stylish GALUIN Waffle Shorts and T-Shirt set in Khaki. Perfect for casual, everyday wear. Features a comfortable waffle texture fabric. Set includes 1 T-shirt and 1 Short.",
    rating: 5.0,
    reviews: 29,
    keyFeatures: [
      "Brand: GALUIN",
      "Style: Top + Pants",
      "Occasion: Casual, Everyday",
      "Gender: Men",
      "Available Sizes: L, XL, XXL, XXXL"
    ],
    specifications: {
      "SKU": "FA203MW4XV51LNAFAMZ",
      "Model": "Waffle Shorts And T Shirt Set",
      "Weight (kg)": "0.5",
      "Color": "Khaki"
    }
  },
  {
    id: 'multi-color-chic-satchel',
    name: 'Multi-Color Chic Satchel',
    category: 'Fashion',
    price: 28000,
    originalPrice: 42000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772907996/bgg1_naelaj.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772907996/bgg1_naelaj.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772907984/bgg2_zeekno.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908000/bgg3_udzegx.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772907989/bgg4_txko3t.png'
    ],
    isNew: true,
    description: 'A vibrant and versatile satchel available in six stunning colors. This chic accessory is designed for the fashion-forward individual who values both style and functionality. Crafted with premium materials and featuring a spacious interior, it is the perfect companion for any occasion.',
    rating: 4.8,
    reviews: 18,
    keyFeatures: [
      'Available in 6 vibrant colors',
      'Spacious interior compartment',
      'Premium faux leather finish',
      'Adjustable shoulder strap',
      'Elegant gold-tone hardware'
    ],
    specifications: {
      'Material': 'Premium Faux Leather',
      'Style': 'Satchel',
      'Dimensions': '12" x 9" x 5"',
      'Closure': 'Secure Zip'
    }
  },
  {
    id: 'elegant-evening-gown',
    name: 'Elegant Evening Gown',
    category: 'Fashion',
    price: 18000,
    originalPrice: 24000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908009/gown1_jvzfvh.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908009/gown1_jvzfvh.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908033/gown2_pzonaz.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908040/gown3_mnat2i.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908043/gown4_ix9gth.png'
    ],
    isNew: true,
    description: 'Turn heads in this breathtaking evening gown. Designed with elegance in mind, this gown features a flattering silhouette and intricate detailing that exudes sophistication. Perfect for galas, weddings, and high-profile events.',
    rating: 4.9,
    reviews: 22,
    keyFeatures: [
      'Flattering floor-length silhouette',
      'Intricate lace detailing',
      'Premium silk-blend fabric',
      'Hidden back zipper',
      'Comfortable inner lining'
    ],
    specifications: {
      'Material': 'Silk Blend & Lace',
      'Occasion': 'Evening / Formal',
      'Fit': 'Slim Fit',
      'Length': 'Floor Length'
    }
  },
  {
    id: 'min-min-designer-bag',
    name: 'Min Min Designer Bag',
    category: 'Fashion',
    price: 21000,
    originalPrice: 27000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908036/min1_v8blpp.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908036/min1_v8blpp.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908048/min2_ew8iwl.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908061/min3_pqesln.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1772908074/min4_brhpir.png'
    ],
    isNew: true,
    isBestSeller: true,
    description: 'The Min Min Designer Bag is the epitome of modern luxury. With its unique structured design and premium finish, it adds a touch of class to any ensemble. A must-have for those who appreciate high-end craftsmanship.',
    rating: 4.7,
    reviews: 15,
    keyFeatures: [
      'Unique structured design',
      'Signature Min Min hardware',
      'High-gloss premium finish',
      'Multiple interior pockets',
      'Detachable chain strap'
    ],
    specifications: {
      'Material': 'Patent Leather',
      'Style': 'Designer Handbag',
      'Weight': '0.6kg',
      'Color': 'Classic Black'
    }
  },
  {
    id: 'beautiful-unique-ladies-corporate-gown',
    name: 'Beautiful And Unique Ladies Corporate Gown(No Belt,no Cap)',
    category: 'Fashion',
    price: 12000,
    originalPrice: 16500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773001804/1.1_jkhxsa.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773001804/1.1_jkhxsa.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773001738/1.2_fwexmz.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773001864/1.3_dnr79z.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773001731/1.4_dodbtu.png'
    ],
    isNew: true,
    description: "Fashionable and Unique ladies cooperate gown for classy ladies it comes in various sizes to fits perfectly well and give you that Adorable look you desire it's Affordable and Adorable it's suitable for all occasion and events it comfortable outfits that makes you stand out and have that confidence that you deserve",
    rating: 5.0,
    reviews: 12,
    keyFeatures: [
      'Beautiful',
      'Fabulous',
      'Unique',
      'Affordable'
    ],
    specifications: {
      'SKU': 'FA203MW4V9T3INAFAMZ',
      'Product Line': 'Michelle Collection'
    }
  },
  {
    id: 'gorgeous-classy-ladies-gown-jacket',
    name: 'Gorgeous And Classy Ladies Gown And Jacket',
    category: 'Fashion',
    price: 14500,
    originalPrice: 19000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773001858/2.1_mk9jht.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773001858/2.1_mk9jht.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773001708/2.2_ib1byr.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773001870/2.3_rxm4n3.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002026/2.4_nfkjdi.png'
    ],
    isNew: true,
    description: "Fashionable and Unique ladies gown and jacket for classy ladies it comes in various sizes to fits perfectly well and give you that Adorable look you desire it's Affordable and Adorable it's suitable for all occasion and events it comfortable outfits that makes you stand out and have that confidence that you deserve",
    rating: 5.0,
    reviews: 24,
    keyFeatures: [
      'Beautiful',
      'Fabulous',
      'Unique',
      'Affordable'
    ],
    specifications: {
      'SKU': 'FA203MW4FHN72NAFAMZ',
      'Product Line': 'Michelle Collection',
      'What’s in the box': 'A gown and jacket',
      'Size Guide': 'M, L, XL'
    }
  },
  {
    id: 'ladies-corporate-gown',
    name: 'Ladies Corporate Gown',
    category: 'Fashion',
    price: 11500,
    originalPrice: 15000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773001940/4.1_xpxieg.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773001940/4.1_xpxieg.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773001923/4.2_mbe8zy.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773001996/4.3_ftr3ok.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773001968/4.4_yvfwdp.png'
    ],
    isNew: true,
    description: "This is a trendy beautiful gown. just as it appears in the picture it is beautifully designed. it is a gown with jacket. It has zip . Its good for official and causal wear.its beautiful and comes in different sizes to fit perfectly well and give you that desirable fitting you deserve",
    rating: 5.0,
    reviews: 8,
    keyFeatures: [
      'Unique design',
      'Beautiful color',
      'Adorable and affordable',
      'Elegant'
    ],
    specifications: {
      'SKU': 'FA203MW2W4H71NAFAMZ',
      'Product Line': 'Michelle Collection',
      'Weight (kg)': '0.5',
      'Color': 'NAVY BLUE',
      'Main Material': 'ployster',
      'Size Guide': 'L, XL, XXL'
    }
  },
  {
    id: 'fabulous-dress-gown-elegant-ladies',
    name: 'Fabulous Dress Gown For Elegant Ladies',
    category: 'Fashion',
    price: 14500,
    originalPrice: 21000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002015/5.1_cy0vmg.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002015/5.1_cy0vmg.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773001994/5.2_pwsyrp.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002039/5.3_xmuzzq.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002042/5.4_jdufxl.png'
    ],
    isNew: true,
    description: "Unique and syslish gorgeous Fashionable gown for elegant ladies it's fabulous and adorable,it comes in various sizes to fit perfectly well and give you that wonderful fitting you desire it can be wear to different events and occasions and stand out in style it affordable too",
    rating: 5.0,
    reviews: 17,
    keyFeatures: [
      'Fabolous',
      'Gorgeous',
      'Unique',
      'Beautiful'
    ],
    specifications: {
      'SKU': 'FA203MW5HX3DWNAFAMZ',
      'Product Line': 'Michelle Collection',
      'Size Guide': 'M, L, XL'
    }
  },
  {
    id: 'machislet-maxi-dress',
    name: 'Machislet Maxi Dress Bodycon Dress Shift Dress Cotton Dress Party Dress Wedding Dress Evening Dress Casual Dress Holiday Dress',
    category: 'Fashion',
    price: 8500,
    originalPrice: 12000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002048/6.1_tdtoko.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002048/6.1_tdtoko.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002035/6.2_il5dv6.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002052/6.3_pazd91.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002060/6.4_yfdvua.png'
    ],
    isNew: true,
    description: "Known as the queen of fashion in many styles, dresses are the most unpredictable, popular and popular. Dress is a general term for a variety, and it is one of the summer dresses of choice for young girls.\nThe long one-shoulder sleeves are the unique beauty of this dress, and the ripple print of the water is wild and unmistakable. It has good elasticity and can maximize your figure.\nIt creates a more defined size and is an elegant hip-pack style. If you want fa? Onner the curves, this dress is a good choice.\nThe matching of the bright and unrestrained colors of this dress is the perfect combination of sexy and intellectual, and it is a choice you will not regret!",
    rating: 5.0,
    reviews: 29,
    keyFeatures: [
      'Sexy Sexy',
      'Sleeves straps',
      'Pleasant to wear',
      'Easy to maintain'
    ],
    specifications: {
      'SKU': 'FA203MW5EVMDMNAFAMZ',
      'Product Line': 'Machislet',
      'Model': 'Maxi Dress,Bodycon Dress,Shift Dress,Cotton Dress,Silk Dress,Party Dress,Wedding Dress,Evening Dress,Casual Dress,Holiday Dress',
      'Weight (kg)': '0.2',
      'Color': 'Chroma',
      'Main Material': 'Coton',
      'What’s in the box': 'dreeses',
      'Variation available': 'M'
    }
  },
  {
    id: 'machislet-short-sleeved-lace-up-dress',
    name: 'Machislet Short-sleeved Lace-up Dress Evening Dress Casual Dress',
    category: 'Fashion',
    price: 16500,
    originalPrice: 22500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002079/8.1_c8xgfn.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002079/8.1_c8xgfn.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002070/8.2_rdo0cx.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002089/8.3_ccgs5i.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002090/8.4_pbaetn.png'
    ],
    isNew: true,
    description: "Machislet - A Pioneer in African Fashion, a Sanctuary of Apparel and Footwear Artistry\nAt the heart of the African continent, there is a brand that is redefining the boundaries of fashion – Machislet. As a leader in African fashion, Machislet focuses on delivering unique and vibrant apparel and footwear to consumers worldwide. Each piece created by Machislet is a celebration of the essece of African culture, an homage to traditional craftsmanship, and a showcase of contemporary design aesthetics.",
    rating: 5.0,
    reviews: 14,
    keyFeatures: [
      'Brand: Machislet',
      'Sexy Sexy',
      'Sleeves straps',
      'Pleasant to wear',
      'Easy to maintain',
      'Loose and breathable',
      'Daily leisure'
    ],
    specifications: {
      'SKU': 'MA504MW761VEHNAFAMZ',
      'Product Line': 'Machislet SMT02',
      'Model': 'Lace-up Dress',
      'Production Country': 'China',
      'Weight (kg)': '0.3',
      'Certifications': 'Eco Friendly',
      'Color': 'white and red',
      'Main Material': 'Blended Cotton',
      'What’s in the box': '1*DRESSES',
      'Size Guide': 'S, M, L'
    }
  },
  {
    id: 'women-casual-sexy-bodycon-maxi-dress',
    name: 'Women Casual Sexy Bodycon Maxi Dress',
    category: 'Fashion',
    price: 14500,
    originalPrice: 18500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002061/7.1_rvrycb.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002061/7.1_rvrycb.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002052/7.2_npxoqc.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002064/7.3_wtnquw.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002075/7.4_peueph.png'
    ],
    isNew: true,
    description: "1.It is made of high quality materials,durable enought for your daily wearing\n2.This Special design setand will steal your heart! Chic and comfy, you can't go wrong with this amazing cute DRESS!\n3.Great for party,Daily,I am sure you will like it!",
    rating: 5.0,
    reviews: 21,
    keyFeatures: [
      'elastic',
      'fit all',
      'soft',
      'comfortable'
    ],
    specifications: {
      'SKU': 'GE779MW6AL8BMNAFAMZ',
      'Model': 'Bodycon Maxi',
      'Weight (kg)': '0.3',
      'Color': 'PINK',
      'Main Material': 'polyester + spandex',
      'Size Guide': 'S, M, L, XL, XXL',
      'Available Colours': 'candy pink and black'
    }
  },
  {
    id: 'adorable-bodycon-long-gown',
    name: 'Adorable bodycon Long Gown for ladies',
    category: 'Fashion',
    price: 13000,
    originalPrice: 17000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002079/9.1_nuiarq.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002079/9.1_nuiarq.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002086/9.2_ga8ewx.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002099/9.3_wdykqp.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002106/9.4_zidgs6.png'
    ],
    isNew: true,
    description: "Elegant fashionable ladies long gown it's beautiful and sexy it comes in various sizes to fit perfectly well and give you that desirable fitting you deserve it can be wear to different events and occasions and stand out in style it affordable and classy",
    rating: 5.0,
    reviews: 11,
    keyFeatures: [
      'Gorgeous',
      'Unique',
      'Classy',
      'Affordable'
    ],
    specifications: {
      'SKU': 'FA203MW7FRRE1NAFAMZ',
      'Product Line': 'Michelle collection',
      'Weight (kg)': '0.4kg',
      'Color': 'Black',
      'Size Guide': 'S, L, XL'
    }
  },
  {
    id: 'gorgeous-stylish-ladies-long-gown',
    name: 'Gorgeous And Stylish Ladies Long Gown(no Hart)',
    category: 'Fashion',
    price: 13000,
    originalPrice: 17500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002105/10.1_qk9wyy.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002105/10.1_qk9wyy.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002115/10.2_qqkbgn.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002116/10.3_u81re2.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773002107/10.4_j9rt88.png'
    ],
    isNew: true,
    description: "Elegant fashionable ladies long gown it's beautiful and sexy it comes in various sizes to fit perfectly well and give you that desirable fitting you deserve it can be wear to different events and occasions and stand out in style it affordable and classy",
    rating: 5.0,
    reviews: 27,
    keyFeatures: [
      'Gorgeous',
      'Unique',
      'Classy',
      'Affordable'
    ],
    specifications: {
      'SKU': 'FA203MW7ATESDNAFAMZ',
      'Product Line': 'Michelle collection',
      'Weight (kg)': '0.2kg',
      'Color': 'Yellow',
      'Size Guide': 'S, L, XL'
    }
  },
  {
    id: 'happy-flower-yellow-women-perfume',
    name: 'Happy Flower "yellow" women Perfume',
    brand: 'Warmkiss',
    category: 'Women\'s Perfume',
    price: 8000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091278/22.1_ydo14g.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091278/22.1_ydo14g.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091290/22.2_qdvpl7.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091312/22.3_cui4z3.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091290/22.4_sdsvw1.png'
    ],
    isNew: true,
    description: 'Warmkiss Happy Flower Eau de Parfum for women. It has a floral and fruity scent profile. The fragrance is described as long-lasting and light. It is available in a 50ml volume. The perfume is suitable for everyday wear.',
    rating: 4.8,
    reviews: 12,
    keyFeatures: [
      'Warmkiss Happy Flower Eau de Parfum for women.',
      'It has a floral and fruity scent profile.',
      'The fragrance is described as long-lasting and light.',
      'It is available in a 50ml volume.',
      'The perfume is suitable for everyday wear.'
    ],
    specifications: {
      'SKU': 'GE779PF75VCUBNAFAMZ',
      'Weight (kg)': '0.2',
      'Volume': '50ml'
    }
  },
  {
    id: 'perfume-red-velvet',
    name: 'Perfume Red velvet',
    brand: 'Warmkiss',
    category: 'Women\'s Perfume',
    price: 10500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091329/21.1_luk34z.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091329/21.1_luk34z.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091346/21.2_p1vezr.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091331/21.3_m5drwe.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091383/21.4_mcmwc6.png'
    ],
    isNew: true,
    description: 'Warm kiss Red velvet perfume 100ml, top note is citrus, bergamot, middle note is musk, aloe and base note is jasmine, woody, musk and agarwood.',
    rating: 4.9,
    reviews: 28,
    keyFeatures: [
      'Warmkiss Red velvet perfume 100ml'
    ],
    specifications: {
      'SKU': 'GE779PF6ODNJLNAFAMZ',
      'Weight (kg)': '100ml',
      'Color': 'Red',
      'Volume': '100ml'
    },
    fragranceNotes: {
      top: 'citrus, bergamot',
      heart: 'musk, aloe',
      base: 'jasmine, woody, musk and agarwood'
    }
  },
  {
    id: 'veyes-rouge-n-romance-perfume',
    name: 'Veyes Rouge,n romance perfume',
    brand: 'Veyes',
    category: 'Women\'s Perfume',
    price: 9500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091284/20.1_rge8dg.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091284/20.1_rge8dg.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091325/20.2_l9b9zp.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091283/20.3_c6qer9.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091399/20.4_pkto2a.png'
    ],
    isNew: true,
    description: 'This is a Veyes Rouge\'n Romance Eau de Parfum. Volume: 100ml (3.4 fl.oz). Scent Profile: A sweet-floral, warm, and rich fragrance. Target Audience: Marketed as a feminine, captivating, and high-class scent for women.',
    rating: 4.7,
    reviews: 35,
    keyFeatures: [
      'This is a Veyes Rouge\'n Romance Eau de Parfum.',
      'Volume: 100ml (3.4 fl.oz)',
      'Scent Profile: A sweet-floral, warm, and rich fragrance',
      'Target Audience: Marketed as a feminine, captivating, and high-class scent for women'
    ],
    specifications: {
      'SKU': 'VE226PF860NZJNAFAMZ',
      'Weight (kg)': '0.2',
      'Volume': '100ml'
    }
  },
  {
    id: 'lulanzi-passion-cologne-perfume',
    name: 'Lulanzi Passion Cologne Perfume 50ml',
    brand: 'Lulanzi',
    category: 'Men\'s Cologne',
    price: 8500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091316/24.1_gb741f.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091316/24.1_gb741f.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091367/24.2_exifmx.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091368/24.3_qjcgpo.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091401/24.4_iv4zjh.png'
    ],
    isNew: true,
    description: 'The Scent of Passion: An aromatic composition designed to be noticeably pleasant. Cologne Perfume: Provides the crisp freshness of a cologne but with the longevity of a perfume.',
    rating: 4.6,
    reviews: 19,
    keyFeatures: [
      'Scent Profile: A vibrant and energetic Passion Cologne fragrance.',
      'Design: Unique gradient bottle (Blue/Pink/Red) for a stylish presentation.',
      'Concentration: Cologne Perfume formula for a noticeable and lasting scent.',
      'Size: Perfect 50ml / 1.7 FL.OZ. travel and daily use size.'
    ],
    specifications: {
      'SKU': 'GE779PF82RBADNAFAMZ',
      'Product Line': 'wowmart.ng',
      'Model': 'WARMKISS',
      'Weight (kg)': '0.20',
      'Certifications': 'Eco Friendly',
      'Volume': '50ml'
    },
    howToUse: 'For external use only. Spray onto pulse points like the neck, chin, or other areas where blood flows to help diffuse the fragrance.'
  },
  {
    id: 'vv-love-dema-fougere-perfume',
    name: 'V.V.LOVE Dema Fougere Perfume',
    brand: 'V.V.LOVE',
    category: 'Men\'s Cologne',
    price: 6000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091385/25.1_rhqr9y.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091385/25.1_rhqr9y.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091404/25.2_bqeybd.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091411/25.3_iroqnt.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091439/25.4_l6mimp.png'
    ],
    isNew: true,
    description: 'This is a bottle of Dema Fougere Eau de Toilette spray. Volume: 30ml (1.0 FL.OZ.). Type: Eau de Toilette (EDT). Scent Profile: Fougere (a classic fragrance classification typically featuring herbaceous and woody notes).',
    rating: 4.8,
    reviews: 22,
    keyFeatures: [
      'This is a bottle of Dema Fougere Eau de Toilette spray.',
      'Volume: 30ml (1.0 FL.OZ.)',
      'Type: Eau de Toilette (EDT)',
      'Scent Profile: Fougere (a classic fragrance classification typically featuring herbaceous and woody notes)'
    ],
    specifications: {
      'SKU': 'VV297PF6UN7DRNAFAMZ',
      'Weight (kg)': '0.1',
      'Volume': '30ml'
    }
  },
  {
    id: 'drunken-man-black-crow-at-9pm',
    name: 'Drunken Man (Black Crow at 9pm) Men Perfume Eau de Toilette',
    brand: 'Warmkiss',
    category: 'Men\'s Cologne',
    price: 6500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091430/26.1_qmvkrq.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091430/26.1_qmvkrq.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091442/26.2_bbvlpw.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091443/26.3_rptatu.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091451/26.4_plzrjb.png'
    ],
    isNew: true,
    description: 'Step into any room with an aura of irresistible magnetic scent. The WARMKISS Drunken Man Fragrance is more than just a perfume—it\'s a statement. Crafted for the man who is bold, confident, and unforgettable, this Eau de Toilette features a rich, intoxicating scent designed to captivate and draw attention.',
    rating: 4.9,
    reviews: 41,
    keyFeatures: [
      'Magnetic & Enduring Scent: A powerfully rich and seductive fragrance that leaves a lasting impression.',
      'Optimal Performance: Designed to be applied to pulse points (neck, wrists) to activate the scent and create a vibrant, irresistible aura.',
      'Long-Lasting Quality: Enjoy a premium fragrance with a generous 5-year shelf life (Guaranteed by the manufacturer).',
      'Perfect Size: The 50ml volume is ideal for both daily use and travel.',
      'High-Quality Formula: Made with a simple yet effective blend of Ethanol, Water, and Essence (Parfum).'
    ],
    specifications: {
      'SKU': 'GE779PF78P4YDNAFAMZ',
      'Product Line': 'wowmart.ng',
      'Model': 'Model: W-9031',
      'Weight (kg)': '0.20',
      'Volume': '50ml'
    },
    howToUse: 'For maximum impact, lightly spray the WARMKISS Drunken Man Fragrance onto your body\'s natural pulse points, such as the: Neck, Wrists, Behind the ears. The warmth from these areas helps to diffuse the fragrance throughout the day, ensuring you remain enveloped in this captivating scent.'
  },
  {
    id: 'warmkiss-earth-man-fragrance',
    name: 'WARMKISS Earth Man Fragrance Eau de Parfum – Long-Lasting Perfume for Men',
    brand: 'Warmkiss',
    category: 'Men\'s Cologne',
    price: 6500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091434/27.1_mv0ymw.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091434/27.1_mv0ymw.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091464/27.2_iqrdg3.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091489/27.3_w21fd0.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091504/27.4_j3rohn.png'
    ],
    isNew: true,
    description: 'Command attention with WARMKISS Earth Man Fragrance, a powerfully masculine perfume designed to capture the essence of confidence and strength. This 50ml Eau de Parfum opens with fresh, woody notes that blend seamlessly into warm, earthy undertones, creating an irresistibly sophisticated scent for men who stand out naturally. Stylishly bottled with a luxury crystal-cut design, it’s a signature fragrance for the modern man.',
    rating: 4.7,
    reviews: 15,
    keyFeatures: [
      'Distinctive Masculine Aroma – Fresh, woody, and earthy blend for everyday sophistication.',
      'Premium Eau de Parfum – Long-lasting formulation for all-day fragrance retention.',
      'Fragrance Family: Woody – Earthy – Fresh',
      'Elegant Design – Crystal-pattern bottle for a luxurious feel and premium presentation.',
      'Versatile Use – Ideal for office, casual outings, dates, and formal events.',
      'Perfect Gift Choice – Classy packaging suited for birthdays, anniversaries, and holidays.',
      'Safe Composition – Gentle on skin when used as directed.',
      'Longevity: 6–10 hours',
      'Brand: WARMKISS'
    ],
    specifications: {
      'SKU': 'GE779PF6SMV1XNAFAMZ',
      'Product Line': 'wowmart.ng',
      'Model': 'JIAOBOLAN',
      'Weight (kg)': '0.25',
      'Volume': '50ml'
    }
  },
  {
    id: 'warmkiss-signature-spicy-floral-amber',
    name: 'The WARMKISS Signature Spicy Floral Amber Perfume',
    brand: 'Warmkiss',
    category: 'Unisex',
    price: 9500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091476/28.1_ka82wu.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091476/28.1_ka82wu.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091502/28.2_qc0xcg.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091489/28.3_fmiupq.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091515/28.4_ywiqwl.png'
    ],
    isNew: true,
    description: 'A mesmerizing floral-spicy creation. The bright sparkle of Pink Pepper and Lemon gives way to a romantic heart of Rose and Jasmine. A truly captivating scent anchored by deep Agarwood (Oud) and creamy Vanilla base.',
    rating: 4.8,
    reviews: 33,
    keyFeatures: [
      'Spicy-Floral Contrast',
      'Romantic Rose & Jasmine Heart',
      'Rich Ambergris & Vanilla Base'
    ],
    specifications: {
      'SKU': 'GE779PF78NGOXNAFAMZ',
      'Model': 'WARMKISS Signature Spicy Floral Amber',
      'Weight (kg)': '0.010',
      'Color': 'Purple',
      'Volume': '100ml'
    }
  },
  {
    id: 'cologne-noir-9pm-edt',
    name: 'COLOGNE NOIR 9PM EDT Perfume for Men - Original Compass Design',
    brand: 'Cologne Noir',
    category: 'Men\'s Cologne',
    price: 8500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091507/29.1_vnobji.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091507/29.1_vnobji.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091527/29.2_uxchr4.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091528/29.3_e4uu2y.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091545/29.4_jmgbk5.png'
    ],
    isNew: true,
    description: 'Indulge in the refreshing embrace of this exquisite cologne, designed for the discerning modern man. This fragrance offers a captivating blend of invigorating notes, creating an aura of sophistication and confidence. For those seeking long lasting fragrances for men, this cologne provides a subtle yet enduring scent that will leave a lasting impression.',
    rating: 4.9,
    reviews: 50,
    keyFeatures: [
      'Type: Eau de Toilette (EDT) for balanced projection and longevity.',
      'Design: A commanding square matte black bottle with an eye-catching gold compass graphic and matching cap—a symbol of ambition and adventure.',
      'Longevity: Crafted with a rich fragrance concentration that lasts throughout your day.',
      'Net Content: 50ml (1.7 FL.OZ)',
      'Fragrance Family: Aromatic Fougere / Citrus Aromatic'
    ],
    specifications: {
      'SKU': 'GE779PF707IN1NAFAMZ',
      'Product Line': 'wowmart.ng',
      'Weight (kg)': '0.020',
      'Volume': '50ml'
    }
  },
  {
    id: 'bearing-edp-cologne-perfume',
    name: 'BEARING EDP Cologne Perfume for Men',
    brand: 'Bearing',
    category: 'Men\'s Cologne',
    price: 8500,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091533/30.1_wbkvcz.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091533/30.1_wbkvcz.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091550/30.2_grlayq.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091558/30.3_rt8tli.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773091582/30.4_vyyxgr.png'
    ],
    isNew: true,
    description: 'BEARING Eau de Parfum Cologne for Men - 50ml. For the man who commands respect, the BEARING Eau de Parfum Cologne is the definitive choice. This fragrance is crafted not just to smell good, but to last all day, thanks to its superior Eau de Parfum (EDP) concentration. Encased in a timeless, high-quality matte black bottle accented with luxurious gold detailing, this cologne is the embodiment of modern masculinity. The traditional "Cologne" label combined with the elegant packaging suggests a powerful and refined scent, likely blending fresh aromatic herbs, crisp citrus notes, and a warm, woody base.',
    rating: 4.8,
    reviews: 27,
    keyFeatures: [
      'High Concentration (EDP): Formulated as an Eau de Parfum, offering strong, long-lasting performance and silage.',
      'Classic Masculine Scent: A traditional Aromatic Fougere or Spicy Fresh blend.',
      'Elegant Packaging: Features a sleek matte black bottle and box with striking gold lettering, ideal for a gift.',
      'Natural Spray: Comes with a VAPORISATEUR - NATURAL SPRAY atomizer for a fine mist application.',
      'Generous Volume: Contains 50ml (1.7 Fl. Oz), providing extended use.'
    ],
    specifications: {
      'SKU': 'GE779PF73096LNAFAMZ',
      'Product Line': 'wowmart.ng',
      'Weight (kg)': '0.020',
      'Volume': '50ml'
    }
  },
  {
    id: 'midia-ladies-square-bag-khaki',
    name: "MIDIA Ladies' square bag, single-shoulder bag, Women's bag handbag, crossbody bag-Khaki",
    brand: 'MIDIA',
    category: 'Fashion',
    price: 16500,
    originalPrice: 22000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176742/53.1_rsx0n3.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176742/53.1_rsx0n3.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176757/53.2_xo72cv.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176772/53.3_imebmc.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176786/53.4_i55mmd.png'
    ],
    isNew: true,
    description: "Welcome to MIDIA. Fashionable and lightweight: This vintage leather bag for women is not only fashionable but also lightweight, suitable for all kinds of occasions. Convenient and multi-functional: This shoulder and crossbody bag is equipped with adjustable shoulder straps. Durable and waterproof: This Messenger handbag is made of leather.",
    rating: 4.8,
    reviews: 15,
    keyFeatures: [
      'Material: PU',
      'Size: 22*8*17',
      'Handle height: 10CM',
      'Shoulder strap: 110CM (adjustable)',
      'Weight: 0.38KG',
      'Fashionable and grand'
    ],
    specifications: {
      'SKU': 'FA203FC6UW82DNAFAMZ',
      'Weight (kg)': '0.6',
      'Color': 'Khaki',
      'Main Material': 'PU'
    }
  },
  {
    id: 'black-regal-ladies-handbag',
    name: 'Black Regal Ladies Handbag with Adjustable Straps for Everyday Elegance',
    brand: 'Regal',
    category: 'Fashion',
    price: 16500,
    originalPrice: 21000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176825/56.1_wpjejn.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176825/56.1_wpjejn.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176830/56.2_mopwoy.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176824/56.3_foigxo.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176859/56.4_qzckpj.png'
    ],
    isNew: true,
    description: 'Step out in confidence with the Black Regal Ladies Handbag, crafted to blend timeless style with modern functionality. Featuring adjustable straps for versatile carrying and a sleek design that elevates any outfit, this handbag is perfect for work, shopping, or casual outings.',
    rating: 4.9,
    reviews: 24,
    keyFeatures: [
      'Elegant Design: A stylish accessory for both formal and casual wear',
      'Adjustable Straps: Wear comfortably as a shoulder or crossbody bag',
      'Spacious & Practical: Fits phone, wallet, makeup, and daily essentials',
      'Durable Build: Made to withstand everyday use',
      'Lightweight & Comfortable: Easy to carry all day long',
      'Versatile Use: ideal for work, shopping, travel, or outings'
    ],
    specifications: {
      'SKU': 'FA203FC7NFB7XNAFAMZ',
      'Weight (kg)': '0.04kg',
      'Color': 'Black'
    }
  },
  {
    id: 'midia-lady-handbag-duchess-white',
    name: 'MIDIA Lady handbag Duchess bag woman crossbody bag -white',
    brand: 'MIDIA',
    category: 'Fashion',
    price: 17500,
    originalPrice: 24000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176768/54.1_kzmpju.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176768/54.1_kzmpju.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176815/54.2_gjodul.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176746/54.3_gp9qh3.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176744/54.4_i34vqz.png'
    ],
    isNew: true,
    description: 'Size: 19cm x 14cm x 10cm. Classic herringbone pattern design, resembling the silhouette of Princess Diana\'s bag. The soft material has a delicate feel, and the herringbone pattern is full and three-dimensional. The interior is equipped with concealed zippered pockets and inner pouches.',
    rating: 4.7,
    reviews: 18,
    keyFeatures: [
      'Classic herringbone pattern design',
      'Crown Bag'
    ],
    specifications: {
      'SKU': 'FA203FC7IU68RNAFAMZ',
      'Weight (kg)': '0.4',
      'Color': 'white',
      'Main Material': 'pu'
    }
  },
  {
    id: 'midia-2-pcs-crocodile-patterned-black',
    name: 'MIDIA 2 PCS Crocodile Patterned Leather Handbag - Crossbody Bag woman\'s Shoulder Bag - black',
    brand: 'MIDIA',
    category: 'Fashion',
    price: 24500,
    originalPrice: 32000,
    image: 'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176794/55.1_dikkao.png',
    images: [
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176794/55.1_dikkao.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176785/55.2_iyxzta.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176803/55.3_nvhc3z.png',
      'https://res.cloudinary.com/dghv07yzv/image/upload/v1773176843/55.4_lyyxm7.png'
    ],
    isNew: true,
    description: 'Material: PU. Inner lining: PU. Hardness: Moderately soft. Size: Length 27 * Width 13 * Height 21. The sequin texture is fine and does not fall off. The main bag has an extremely large capacity. The secondary bag is small and exquisite.',
    rating: 4.9,
    reviews: 32,
    keyFeatures: [
      '2 PCS Double Bags',
      'Durable and waterproof',
      'Superb texture'
    ],
    specifications: {
      'SKU': 'FA203FC7A5MP7NAFAMZ',
      'Model': 'MIDIA',
      'Weight (kg)': '0.8',
      'Color': 'brown',
      'Main Material': 'PU'
    }
  }
];
