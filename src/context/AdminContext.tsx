import React, { createContext, useContext, useState, useEffect } from 'react';
import { products as initialProducts, Product } from '../data/products';
import { syncProductToSheet, syncAllProducts } from '../services/googleSheetService';

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
  isGoogleSheetSyncEnabled: boolean;
  toggleGoogleSheetSync: () => void;
  lastSyncStatus: { success: boolean; time: string } | null;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('admin_auth') === 'true';
  });

  const [isGoogleSheetSyncEnabled, setIsGoogleSheetSyncEnabled] = useState(() => {
    return localStorage.getItem('admin_sync_enabled') === 'true';
  });

  const [lastSyncStatus, setLastSyncStatus] = useState<{ success: boolean; time: string } | null>(() => {
    const saved = localStorage.getItem('admin_last_sync');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (password: string) => {
    const today = new Date();
    const hour = String(today.getHours()).padStart(2, '0');
    const dynamicPassword = `Luxe${hour}`;
    
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

  const [orders, setOrders] = useState<Order[]>([]);

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

  // Fetch orders from server
  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders');
      if (response.ok) {
        const data = await response.json();
        console.log('Fetched orders:', data.length);
        setOrders(data);
      } else {
        console.error('Failed to fetch orders:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000); // Poll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem('admin_products', JSON.stringify(products));
  }, [products]);

  // Removed localStorage sync for orders as it's now server-side

  useEffect(() => {
    localStorage.setItem('admin_content', JSON.stringify(content));
  }, [content]);

  useEffect(() => {
    localStorage.setItem('admin_sync_enabled', String(isGoogleSheetSyncEnabled));
  }, [isGoogleSheetSyncEnabled]);

  useEffect(() => {
    if (lastSyncStatus) {
      localStorage.setItem('admin_last_sync', JSON.stringify(lastSyncStatus));
    }
  }, [lastSyncStatus]);

  // Sync across tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'admin_products' && e.newValue) {
        setProducts(JSON.parse(e.newValue));
      }
      // Removed admin_orders_v2 sync
      if (e.key === 'admin_content' && e.newValue) {
        setContent(JSON.parse(e.newValue));
      }
      if (e.key === 'admin_auth') {
        setIsAuthenticated(e.newValue === 'true');
      }
      if (e.key === 'admin_sync_enabled') {
        setIsGoogleSheetSyncEnabled(e.newValue === 'true');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleGoogleSheetSync = () => {
    setIsGoogleSheetSyncEnabled(prev => !prev);
  };

  const addProduct = (product: Product) => {
    setProducts(prev => [...prev, { ...product, stock: product.stock ?? 0, isHidden: false }]);
    if (isGoogleSheetSyncEnabled) {
      syncToSheet(product);
    }
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const addOrder = async (order: Order) => {
    // Optimistic update
    setOrders(prev => [order, ...prev]);
    
    try {
      await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      });
      // Re-fetch to ensure sync
      fetchOrders();
    } catch (error) {
      console.error('Failed to save order:', error);
    }
  };

  const updateOrderStatus = async (id: string, status: Order['status']) => {
    // Optimistic update
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));

    try {
      await fetch(`/api/orders/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
    } catch (error) {
      console.error('Failed to update order status:', error);
    }
  };

  const updateContent = (updates: Partial<WebsiteContent>) => {
    setContent(prev => ({ ...prev, ...updates }));
  };

  const syncToSheet = async (product: Product) => {
    try {
      const success = await syncProductToSheet(product);
      setLastSyncStatus({ success, time: new Date().toISOString() });
      return success;
    } catch (error) {
      console.error('Sync failed:', error);
      setLastSyncStatus({ success: false, time: new Date().toISOString() });
      return false;
    }
  };

  const syncAllToSheet = async () => {
    const success = await syncAllProducts(products);
    setLastSyncStatus({ success, time: new Date().toISOString() });
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
      logout,
      isGoogleSheetSyncEnabled,
      toggleGoogleSheetSync,
      lastSyncStatus
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
