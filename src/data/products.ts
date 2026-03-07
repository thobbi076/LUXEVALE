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
    category: 'Perfumes',
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
    category: 'Perfumes',
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
    category: 'Perfumes',
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
    category: 'Perfumes',
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
    category: 'Perfumes',
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
  }
];
