import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { CurrencyProvider } from './context/CurrencyContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Admin from './pages/Admin';

export default function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <CurrencyProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="product/:id" element={<Product />} />
                <Route path="cart" element={<Cart />} />
                <Route path="about" element={<About />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="admin" element={<Admin />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CurrencyProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
