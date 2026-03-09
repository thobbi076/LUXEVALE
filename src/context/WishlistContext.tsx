import React, { createContext, useContext, useState, useEffect } from 'react';

interface WishlistContextType {
  wishlist: string[];
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  toggleWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('luxevale-wishlist');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('LocalStorage access failed', e);
    }
    return [];
  });

  // Save wishlist to local storage on change
  useEffect(() => {
    try {
      localStorage.setItem('luxevale-wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('LocalStorage set failed', e);
    }
  }, [wishlist]);

  const addToWishlist = (id: string) => {
    setWishlist(prev => {
      if (!prev.includes(id)) {
        return [...prev, id];
      }
      return prev;
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist(prev => prev.filter(itemId => itemId !== id));
  };

  const isInWishlist = (id: string) => {
    return wishlist.includes(id);
  };

  const toggleWishlist = (id: string) => {
    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist(id);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
