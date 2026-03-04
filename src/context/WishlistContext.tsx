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
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Load wishlist from local storage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('luxevale-wishlist');
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (e) {
        console.error('Failed to parse wishlist from local storage');
      }
    }
  }, []);

  // Save wishlist to local storage on change
  useEffect(() => {
    localStorage.setItem('luxevale-wishlist', JSON.stringify(wishlist));
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
