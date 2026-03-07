import React, { createContext, useContext, useState, useEffect } from 'react';
import { products as initialProducts, Product } from '../data/products';
import { syncProductToSheet } from '../services/googleSheetService';

export interface Order {
  id: string;
  customerName: string;
  items: { productId: string; name: string; quantity: number; price: number }[];
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
  date: string;
}

export interface WebsiteContent {
  banner: {
    title: string;
    subtitle: string;
    link: string;
    image: string;
  };
  promoMessage: string;
}

interface AdminContextType {
  products: Product[];
  orders: Order[];
  content: WebsiteContent;
  addProduct: (product: Product) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  addOrder: (order: Order) => void;
  updateOrderStatus: (id: string, status: Order['status']) => void;
  updateContent: (updates: Partial<WebsiteContent>) => void;
  syncToSheet: (product: Product) => Promise<boolean>;
  syncAllToSheet: () => Promise<void>;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('admin_auth') === 'true';
  });

  const login = (password: string) => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const dynamicPassword = `Luxe${day}`;
    
    if (password === 'luxevale2026' || password === dynamicPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_auth');
  };

  // Initialize products with default stock if missing
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('admin_products');
    if (saved) return JSON.parse(saved);
    return initialProducts.map(p => ({ ...p, stock: p.stock ?? 10, isHidden: p.isHidden ?? false }));
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('admin_orders_v2');
    if (saved) return JSON.parse(saved);
    return [];
  });

  const [content, setContent] = useState<WebsiteContent>(() => {
    const saved = localStorage.getItem('admin_content');
    if (saved) return JSON.parse(saved);
    return {
      banner: {
        title: 'New Arrivals',
        subtitle: 'Discover the latest trends',
        link: '/shop',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      },
      promoMessage: 'Free shipping on orders over ₦50,000',
    };
  });

  useEffect(() => {
    localStorage.setItem('admin_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('admin_orders_v2', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('admin_content', JSON.stringify(content));
  }, [content]);

  // Sync across tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'admin_products' && e.newValue) {
        setProducts(JSON.parse(e.newValue));
      }
      if (e.key === 'admin_orders_v2' && e.newValue) {
        setOrders(JSON.parse(e.newValue));
      }
      if (e.key === 'admin_content' && e.newValue) {
        setContent(JSON.parse(e.newValue));
      }
      if (e.key === 'admin_auth') {
        setIsAuthenticated(e.newValue === 'true');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const addProduct = (product: Product) => {
    setProducts(prev => [...prev, { ...product, stock: product.stock ?? 0, isHidden: false }]);
    syncToSheet(product);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const addOrder = (order: Order) => {
    setOrders(prev => [order, ...prev]);
  };

  const updateOrderStatus = (id: string, status: Order['status']) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
  };

  const updateContent = (updates: Partial<WebsiteContent>) => {
    setContent(prev => ({ ...prev, ...updates }));
  };

  const syncToSheet = async (product: Product) => {
    try {
      await syncProductToSheet(product);
      return true;
    } catch (error) {
      console.error('Sync failed:', error);
      return false;
    }
  };

  const syncAllToSheet = async () => {
    for (const product of products) {
      await syncProductToSheet(product);
      await new Promise(resolve => setTimeout(resolve, 500)); // Rate limiting
    }
  };

  return (
    <AdminContext.Provider value={{
      products,
      orders,
      content,
      addProduct,
      updateProduct,
      deleteProduct,
      addOrder,
      updateOrderStatus,
      updateContent,
      syncToSheet,
      syncAllToSheet,
      isAuthenticated,
      login,
      logout
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
