
export interface Product {
  id: string;
  name: string;
  brand?: string;
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
  specifications?: Record<string, string | number>;
}

export const products: Product[] = [
  {
    id: 'modern-key-lock-satchel',
    name: 'Modern Key Lock Satchel',
    category: 'Fashion',
    price: 25000 / 1500,
    originalPrice: 50000 / 1500,
    image: '/assets/bag1.png',
    images: [
      '/assets/bag1.png',
      '/assets/bag5.png',
      '/assets/bag3.png',
      '/assets/bag2.png',
    ],
    isNew: true,
    description: "A sophisticated satchel featuring a distinctive buckle and key charm detail. Available in classic black and bold red, this structured bag is perfect for the modern professional. The high-gloss finish and silver-tone hardware add a touch of luxury to any outfit.",
    rating: 4.8,
    reviews: 0,
    keyFeatures: [
      "High-gloss finish",
      "Distinctive buckle detail",
      "Key charm accessory",
      "Structured silhouette",
      "Available in Black and Red"
    ],
    specifications: {
      "Material": "Patent Faux Leather",
      "Style": "Satchel / Crossbody",
      "Closure": "Zip & Buckle",
      "Strap": "Detachable Shoulder Strap"
    }
  },
  {
    id: 'mens-wide-leg-trousers',
    name: "Men's Wide Leg Trousers",
    category: 'Fashion',
    price: 14999 / 1500,
    originalPrice: 25000 / 1500,
    image: '/assets/tro1.png',
    images: [
      '/assets/tro1.png',
      '/assets/tro2.png',
      '/assets/tro3.png',
      '/assets/tro4.png',
    ],
    isNew: true,
    description: "Stay comfortable and stylish with these Men's Wide Leg Trousers. Featuring a relaxed fit and a clean, minimalist design, these trousers are perfect for creating a modern silhouette. Ideal for pairing with a simple tee or a crisp shirt.",
    rating: 4.5,
    reviews: 0,
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
    price: 2500 / 1500,
    originalPrice: 3600 / 1500,
    image: '/assets/mas1.png',
    images: [
      '/assets/mas1.png',
      '/assets/mas2.png',
      '/assets/mas3.png',
      '/assets/mas4.png',
    ],
    isNew: true,
    description: "Revitalize your skin with MacGregor Natural Moisture Sheet Masks. Available in Charcoal for deep pore cleansing and oil control, and Pomegranate for firming and wrinkle improvement. These masks provide intense hydration and leave your skin feeling refreshed and radiant.",
    rating: 4.7,
    reviews: 0,
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
    }
  },
  {
    id: 'green-mask-stick',
    name: 'Green Mask Stick For Pimples',
    category: 'Skincare',
    price: 3500 / 1500,
    originalPrice: 6000 / 1500,
    image: '/assets/mask1.png',
    images: [
      '/assets/mask1.png',
      '/assets/mask2.png',
      '/assets/mask3.png',
      '/assets/mask4.png',
    ],
    isNew: true,
    description: "The mask cleansing face contains green tea extract, which can effectively clean the skin pores, deeply clean up skin dirt, adjust the skin's water and oil balance, replenish skin moisture, and nourish the skin. Effectively reduce control oil, improve facial fullness, and Keep beautiful skin.",
    rating: 4.6,
    reviews: 0,
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
    }
  },
  {
    id: 'balila-unisex-perfume',
    name: 'Balila Unisex Perfume',
    brand: 'Balila',
    category: 'Perfumes',
    price: 3.67, // Approx 5,500 NGN
    originalPrice: 6.67, // Approx 10,000 NGN
    image: '/assets/balila1.png',
    images: [
      '/assets/balila1.png',
      '/assets/balila2.png',
      '/assets/balila3.png',
      '/assets/balila4.png',
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
      "Weight (kg)": 0.01,
      "Volume": "120ml"
    }
  },
  {
    id: 'temptation-eau-de-parfum',
    name: 'Temptation EAU DE PARFUM TEMPTATION 100ML FOR MEN',
    brand: 'Temptation',
    category: 'Perfumes',
    price: 8500 / 1500,
    originalPrice: 10000 / 1500,
    image: '/assets/tempt1.png',
    images: [
      '/assets/tempt1.png',
      '/assets/tempt2.png',
      '/assets/tempt3.png',
      '/assets/tempt4.png',
    ],
    isNew: true,
    description: "This Eau Du Parfum is Luxurious and Sensuous. Its romantic scent is a dazzling, oriental with floral aroma. A romantic blend of Asian fruit with subtle undertones of musk and raspberry. It has a romantic scent that makes you dazzle all day. Suitable for everyday use with a lasting effect. This 100ml perfume smells great and awesome, a great addition for your daily use. Lightweight and affordable. Need a perfume? This is perfect for you. Smell good, feel great and look awesome.",
    rating: 5.0,
    reviews: 1,
    keyFeatures: [
      "Long Lasting and Nice Fragnance",
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
      "Weight (kg)": 0.1,
      "Volume": "100ml"
    }
  },
  {
    id: 'black-studded-bag',
    name: 'Black Studded Bag',
    category: 'Fashion',
    price: 22000 / 1500,
    originalPrice: 45000 / 1500,
    image: '/assets/bg1.png',
    images: [
      '/assets/bg1.png',
      '/assets/bg2.png',
      '/assets/bg3.png',
      '/assets/bg4.png',
    ],
    isNew: true,
    description: "Elevate your style with this exquisite black studded handbag. Featuring a structured silhouette with geometric detailing and a matte finish, this bag is the perfect blend of edgy and elegant. It comes with a chain strap for versatile styling. Please note: This item is sold without the original box.",
    rating: 5.0,
    reviews: 1,
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
];
