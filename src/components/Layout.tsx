import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Diamond, Menu, X, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const { cartCount } = useCart();
  const { currency, setCurrency } = useCurrency();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/about' },
  ];

  const currencies = ['USD', 'NGN', 'EUR', 'GBP'];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <Diamond className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl font-bold tracking-tight">LUXEVALE</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <form onSubmit={handleSearch} className="hidden sm:flex items-center relative">
                <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search luxury..."
                  className="h-9 w-64 rounded-full bg-muted pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </form>

              {/* Currency Selector */}
              <div className="relative hidden sm:block">
                <button 
                  className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                >
                  <Globe className="h-4 w-4" />
                  {currency}
                </button>
                <AnimatePresence>
                  {isCurrencyOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-24 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50"
                    >
                      {currencies.map((curr) => (
                        <button
                          key={curr}
                          onClick={() => {
                            setCurrency(curr as any);
                            setIsCurrencyOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                            currency === curr ? 'text-primary font-bold' : 'text-foreground'
                          }`}
                        >
                          {curr}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link to="/cart" className="relative p-2 hover:bg-muted rounded-full transition-colors">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 hover:bg-muted rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-b border-border bg-background overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-medium py-2 border-b border-border last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-border">
                <span className="text-sm font-bold text-muted-foreground mb-2 block">Currency</span>
                <div className="flex gap-2 flex-wrap">
                  {currencies.map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        setCurrency(curr as any);
                        setIsMenuOpen(false);
                      }}
                      className={`px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${
                        currency === curr 
                          ? 'bg-primary text-primary-foreground border-primary' 
                          : 'bg-card text-muted-foreground border-border hover:border-primary'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Diamond className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">LUXEVALE</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Curated luxury lifestyle essentials for the modern connoisseur.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/shop?category=Perfumes" className="hover:text-primary">Perfumes</Link></li>
              <li><Link to="/shop?category=Fashion" className="hover:text-primary">Fashion</Link></li>
              <li><Link to="/shop?category=Skincare" className="hover:text-primary">Skincare</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-primary">FAQs</Link></li>
              <li><Link to="/faq" className="hover:text-primary">Shipping & Returns</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            {isSubscribed ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 font-medium bg-green-50 p-3 rounded-lg border border-green-100"
              >
                Thanks for subscribing!
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; 2026 LUXEVALE. All rights reserved.</p>
          <Link to="/admin" className="text-xs text-muted-foreground hover:text-primary transition-colors opacity-50 hover:opacity-100">
            Admin Access
          </Link>
        </div>
      </footer>
    </div>
  );
}
