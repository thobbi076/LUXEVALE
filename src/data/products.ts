export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew: boolean;
  isBestSeller?: boolean;
  description: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Silk Evening Gown',
    category: 'Fashion',
    price: 850.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUvlqN9JIP7AwYfSCfIdxcwUCOm89w6OEIU4DeuQZOB3PxNsVBw8LLi8bnquEYvVfqOSLup8dE0KuiTFovZPh5UKvYZBxgYPpOqgsQn2wFIe89skwbrCYR5K4lX84onmorTxSz339fo1u-behWsz4HS2lTwRh0MR38BLBeYIrK8kUwhuawBgbUMpYfE87sLCXZOgRgzwAhQYeitkhoMv4pJrYir6wmkp_Q3THA8pPURpCUOPOuROJFmPNeUTxUfbjlykxN_I8q3IM',
    isNew: false,
    description: 'Elegance personified. This silk evening gown features a flowing silhouette, delicate draping, and a lustrous finish that catches the light with every movement. Perfect for galas, red carpet events, or sophisticated soirées.',
    rating: 4.8,
    reviews: 42
  },
  {
    id: '3',
    name: 'Radiance Face Serum',
    category: 'Skincare',
    price: 120.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeRPBtU2J444JqSqZeQTi3v981WSOHfsAs8S7rW68mFlTnYC_rzshJo8yXBu8O9kBxjNDTA6MMLtlh0T4jP472wxHqVNL1qWB6tgzCF3ziYYKWvW2VSweekM0KLVMSnC-xzhp_APZXVmISxwtledkHUGYj5PjsQ27LSSClqVyKlwYzPBgzc0Yo8S91OM1kBAMacH3aVH8a5SsS_krhJqHqI54MHsoybDK2SE7c6TkydhP20Cjqnjzt-xE6zGiKUt5SXHReBtlqEtQ',
    isNew: false,
    description: 'Unlock your skin\'s natural glow. Formulated with rare botanicals and advanced peptides, this serum deeply hydrates, reduces fine lines, and restores luminosity for a youthful, radiant complexion.',
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'aura-de-luxe',
    name: 'Aura de Luxe',
    category: 'Perfumes',
    price: 125.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE9KT_Nuza5fyX3UM3489hkJMKe-0dEqUffejKxF9WY3KXrA4pe8s1t0hbmZjNvIi4idVgsUjTc1QtRj04BRXUEddve9HRQjqaP27lHoSgyyQ7JrFzI_5Ge0GjhPg4iGII8GHXtc_C6E_-hTOqQhfEMFwolZTpUIaM5d9QHFvo1q9a9iieln4PcltWC6GcDACrIKY7nmDZn7d0XgkIHNAvnAcwimmrMem83m97Sr4An3voxH2WLE43uTiUZDbZJn6y2FcvmshpZuA',
    isNew: false,
    description: 'An intoxicating blend of rare oud, dark vanilla, and midnight jasmine. Aura de Luxe is crafted for the modern individual who commands the room. Long-lasting, provocative, and unmistakably premium. Leaves a signature trail that captivates from dawn to dusk.',
    rating: 4.9,
    reviews: 128
  },
  {
    id: '5',
    name: 'Leather Weekend Bag',
    category: 'Fashion',
    price: 450.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1BfnkTkEEWzjg1fr5ZVYTtyoDertvru5dO28mQbCULORf4hvVVZCQGMjd1yOv0ZM7LbnAKbaItpvHXvrx622qvOXpeJ4jDTyM1NRvVnS50OSwigBmasQZI2hufmgoI1PqJj0W-5xujvzIBJ003nKmghLBI6BXkhCMVxW6OjZwNok2NUDkS8Rr6knlP-Lfe2tEUyMM23Fp8vQC4NNa4fAKwWq0J_v7qFwUpx4VfzFjEM-teAzDL34AkHW3TcT9GF1IoiKC9p3SyJk',
    isNew: false,
    description: 'Travel in style with our handcrafted leather weekend bag. Made from full-grain leather that ages beautifully, it features ample storage, durable hardware, and a timeless design for the discerning traveler.',
    rating: 4.6,
    reviews: 34
  }
];
