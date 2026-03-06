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
    originalPrice: 50000,
    image: 'https://i.ibb.co/KjXdpwvY/bag1.png',
    images: [
      'https://i.ibb.co/KjXdpwvY/bag1.png',
      'https://i.ibb.co/xtfKfQH7/bag5.png',
      'https://i.ibb.co/q37hNf8W/bag2.png',
      'https://i.ibb.co/DHDMn86G/bag3.png'
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
    originalPrice: 25000,
    image: 'https://i.ibb.co/JRt1F0BJ/tro1.png',
    images: [
      'https://i.ibb.co/JRt1F0BJ/tro1.png',
      'https://i.ibb.co/LXrYYg8m/tro2.png',
      'https://i.ibb.co/FLHcxdST/tro3.png',
      'https://i.ibb.co/cSGK80XL/tro4.png'
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
    image: 'https://i.ibb.co/jZ8x6dmB/mas1.png',
    images: [
      'https://i.ibb.co/jZ8x6dmB/mas1.png',
      'https://i.ibb.co/Vprz2jsM/mas2.png',
      'https://i.ibb.co/cc0dYLJJ/mas3.png',
      'https://i.ibb.co/JjhFrmbW/mas4.png'
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
    image: 'https://i.ibb.co/kgyk2dtr/mask1.png',
    images: [
      'https://i.ibb.co/kgyk2dtr/mask1.png',
      'https://i.ibb.co/dJgjPr9q/mask2.png',
      'https://i.ibb.co/zV0V19hs/mask3.png',
      'https://i.ibb.co/TV7ttWs/mask4.png'
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
    originalPrice: 10000,
    image: 'https://i.ibb.co/KxKsFn5s/balila1.png',
    images: [
      'https://i.ibb.co/KxKsFn5s/balila1.png',
      'https://i.ibb.co/7tmvfDGZ/balila2.png',
      'https://i.ibb.co/FbzMrmfh/balila3.png',
      'https://i.ibb.co/ksDFk56H/balila4.png'
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
    image: 'https://i.ibb.co/RpCBv8Pr/tempt1.png',
    images: [
      'https://i.ibb.co/RpCBv8Pr/tempt1.png',
      'https://i.ibb.co/KxPY9fvD/tempt2.png',
      'https://i.ibb.co/Xk7pW9YD/tempt3.png',
      'https://i.ibb.co/5h9hhh4K/tempt4.png'
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
    originalPrice: 45000,
    image: 'https://i.ibb.co/93pkK9bk/bg1.png',
    images: [
      'https://i.ibb.co/93pkK9bk/bg1.png',
      'https://i.ibb.co/jvwJV499/bg2.png',
      'https://i.ibb.co/Xrxp52jg/bg3.png',
      'https://i.ibb.co/DD5GwJt4/bg4.png'
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
  }
];
