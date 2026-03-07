import { Link, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';
import { products } from '../data/products';
import { optimizeImage } from '../utils/image';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('category') || 'All';
  const searchQuery = searchParams.get('search') || '';

  const setFilter = (category: string) => {
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const [sortBy, setSortBy] = useState('Featured');
  const [visibleCount, setVisibleCount] = useState(4);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { formatPrice } = useCurrency();

  const filteredProducts = products.filter(p => {
    const matchesCategory = filter === 'All' || p.category === filter;
    const matchesSearch = searchQuery 
      ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'Price: Low to High':
        return a.price - b.price;
      case 'Price: High to Low':
        return b.price - a.price;
      case 'Newest Arrivals':
        return (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1;
      default:
        return 0;
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'Shop All Products'}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {searchQuery 
            ? `Found ${filteredProducts.length} items matching your search.`
            : 'Discover our curated collection of luxury items, designed for the modern connoisseur.'
          }
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-12 border-b border-border pb-6">
        <div className="flex gap-3 flex-wrap">
          {['All', 'Fashion', 'Skincare', 'Perfumes'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 h-10 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                filter === category 
                  ? 'bg-primary text-primary-foreground scale-105' 
                  : 'bg-card text-muted-foreground hover:bg-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Sort by:</span>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border-none text-sm font-bold uppercase tracking-wider focus:ring-0 cursor-pointer"
          >
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrivals</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.slice(0, visibleCount).map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="group flex flex-col gap-4"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-card">
              <Link to={`/product/${product.id}`}>
                <img 
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading={index < 4 ? "eager" : "lazy"}
                  fetchPriority={index < 4 ? "high" : "auto"}
                  referrerPolicy="no-referrer"
                />
              </Link>
              
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded z-10">
                  New
                </span>
              )}
              
              {product.isBestSeller && (
                <span className="absolute top-4 left-4 bg-foreground text-background text-xs font-bold uppercase tracking-wider px-2 py-1 rounded z-10">
                  Best Seller
                </span>
              )}

              <button 
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 right-4 h-10 w-10 rounded-full flex items-center justify-center transition-all backdrop-blur-sm z-10 ${
                  isInWishlist(product.id) 
                    ? 'bg-primary text-white opacity-100' 
                    : 'bg-white/90 text-muted-foreground hover:text-primary opacity-0 group-hover:opacity-100'
                }`}
              >
                <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
              </button>

              <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-10">
                <button 
                  onClick={() => addToCart({ ...product, quantity: 1 })}
                  className="w-full bg-white/90 backdrop-blur-md text-foreground font-bold uppercase tracking-wider text-xs py-3 rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShoppingBag className="h-4 w-4" /> Add to Cart
                </button>
              </div>
            </div>

            <div className="text-center">
              <span 
                className={`text-xs font-bold uppercase tracking-widest mb-1 block ${
                  ['Skincare', 'Perfumes'].includes(product.category) 
                    ? 'text-accent-purple' 
                    : ['Gadgets', 'Fashion'].includes(product.category)
                      ? 'text-primary'
                      : 'text-muted-foreground'
                }`}
              >
                {product.category}
              </span>
              <Link to={`/product/${product.id}`} className="block">
                <h3 className="text-lg font-bold leading-tight mb-1 hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </Link>
              <div className="flex items-center justify-center gap-2">
                <p className="text-primary font-bold">{formatPrice(product.price)}</p>
                {product.originalPrice && (
                  <p className="text-muted-foreground text-sm line-through">{formatPrice(product.originalPrice)}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center mt-20">
          <button 
            onClick={() => setVisibleCount(prev => prev + 4)}
            className="px-8 py-4 border-2 border-foreground text-foreground font-bold uppercase tracking-widest text-sm rounded-full hover:bg-foreground hover:text-background transition-colors"
          >
            Load More Products
          </button>
        </div>
      )}
    </div>
  );
}
