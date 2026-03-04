import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('luxevale-cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from local storage');
      }
    } else {
      // Add some dummy data for the "Come to life" feel if empty
      setItems([
        {
          id: '1',
          name: 'Crimson Velocity Runner',
          price: 999.00,
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt81q38uDVh7nccuZtJ7O_y2hInK9BnqWdWbib6ZqWUVoRH8TTMNwMeTZtCvDiV10G0nNqqrL6-h7fM7nbJ2S1cxxnRe6la1r-TKMSThiVucee4TvC2-pvRlMRTRTEgK1qPZA0A6tMgBIY-KFsQC6_WTUuyk4wGRcTBH2Rd3uz6DDwBz4huEwSvKfkm3ltGQSCATtjvFH_RnnomH1F5tcXuvrD4CJc-LRTAcCB2E9L7AcpjUDYrjjGT5uz5YvTlJlMMnlQUQE4S0s',
          quantity: 1,
          size: '42',
          color: 'Crimson'
        },
        {
          id: '2',
          name: 'Aura Chronograph',
          price: 1299.00,
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKpbSM6ap-ecROt5LMlu9Pz7067OLTPQsEXwCgH5lLhgy9jCKAIpAhLEnm1StoAUAm9aXp7dWV3Z8x7oILiPirfgCCbQoxh-kRBtL9F4uyT2TlcJLDM2_jMaai1-kC7ASqeWgRRSeF2rIiiRNJDHzFq60fDc1csNzPzy095JK2E4VMtjQTMPqfQrTl2yB-CbD9fkrlir3xrQRRLlfRzEKvzI5eHNQiDoKnUWYyuLeeerQyyjJlupkSj8ayddWrGQZ5dIgypaPekIs',
          quantity: 1,
          size: 'One Size',
          color: 'Platinum'
        }
      ]);
    }
  }, []);

  // Save cart to local storage on change
  useEffect(() => {
    localStorage.setItem('luxevale-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === newItem.id);
      if (existing) {
        return prev.map(item => 
          item.id === newItem.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
