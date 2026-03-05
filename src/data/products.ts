import balila1 from '../assets/balila1.png';
import balila2 from '../assets/balila2.png';
import balila3 from '../assets/balila3.png';
import balila4 from '../assets/balila4.png';
import tempt1 from '../assets/tempt1.png';
import tempt2 from '../assets/tempt2.png';
import tempt3 from '../assets/tempt3.png';
import tempt4 from '../assets/tempt4.png';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';
import bg4 from '../assets/bg4.png';
import bag1 from '../assets/bag1.png';
import bag5 from '../assets/bag5.png';
import bag3 from '../assets/bag3.png';
import bag2 from '../assets/bag2.png';
import tro1 from '../assets/tro1.png';
import tro2 from '../assets/tro2.png';
import tro3 from '../assets/tro3.png';
import tro4 from '../assets/tro4.png';
import mas1 from '../assets/mas1.png';
import mas2 from '../assets/mas2.png';
import mas3 from '../assets/mas3.png';
import mas4 from '../assets/mas4.png';
import mask1 from '../assets/mask1.png';
import mask2 from '../assets/mask2.png';
import mask3 from '../assets/mask3.png';
import mask4 from '../assets/mask4.png';

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
    image: bag1,
    images: [
      bag1,
      bag5,
      bag3,
      bag2,
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
    image: tro1,
    images: [
      tro1,
      tro2,
      tro3,
      tro4
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
    image: mas1,
    images: [
      mas1,
      mas2,
      mas3,
      mas4
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
    image: mask1,
    images: [
      mask1,
      mask2,
      mask3,
      mask4
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
    image: balila1,
    images: [
      balila1,
      balila2,
      balila3,
      balila4
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
    image: tempt1,
    images: [
      tempt1,
      tempt2,
      tempt3,
      tempt4
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
    image: bg1,
    images: [
      bg1,
      bg2,
      bg3,
      bg4
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
