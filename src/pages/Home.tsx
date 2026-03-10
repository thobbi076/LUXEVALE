import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Heart, ShoppingBag } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';
import { products } from '../data/products';
import { optimizeImage } from '../utils/image';

export default function Home() {
  console.log("[Client] Home rendering...");
  const { content } = useAdmin();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { formatPrice } = useCurrency();

  // Get 4 featured products (e.g., new arrivals or specific items)
  const featuredProducts = products.filter(p => p.isNew || p.isBestSeller).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={content.banner.image}
            alt="Hero Background"
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            {content.banner.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light mb-8 text-white/90"
          >
            {content.banner.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to={content.banner.link} 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg"
            >
              Shop Now <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Fashion', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKALPArCgjYy393ALY1pUUQX1q__FHyY3fvIt_R-FkBXMbhEwzI0FaeUPtOBwlGLBdktucKGR9nBIG5lIkYlvYjbExtsVskcUz52MrjmafpdHLiLw6p0ZceZVOsqn7dTw_mvU3UgYwp4js2UgRp7YR2mmCviNPQz9TIU0ErCPZm7vwJP30de1TAm0Xwup8V1aIKhjGf7Jh9r5RfOi_CNb4CrZPPAMyk8pxpZ3cln2mbj-aWtt7wEqtHq3_XclbY54evo4Cw3zuwaI' },
            { name: 'Skincare', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-V9qEHhkCxIuuJ5mYg4EQto58NXdwxhgu_kgfLW3ZUJR2hznmqRRvlCMu5hFkkVC8z52zH-J_HTQwoTEBvRJUJ2_6ZeyrkRsGEXaSGDDarWiDCqkT11BnFocOfAbxzaXCtyaCL_Qgby4HYk23xo5DI78L146Rxh_c1CliNKn6vhcd6WHciuARzvFMbo4Yc6rV5HOQKvEnKoALc5I2T5K3gDPQFQQ3-OMDnUXCSiE8QfmQID8aOfNevgJziJzKMSEJ4QTcrvAM4k4' },
            { name: 'Perfumes', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg4WkepRKU1147MIAz6AV54Q8NKh7Bk3oEdU19HFv8QUh-PotHD4YmVozMdCk825kBKTVpiXmq-7x-uQZUTsMpgRF0Q2dINTHZsFv4dhM3cl4oaLwvtx48O0XGgECw_i6kjg-GRWmQQLo7MMVfzUZnIrxrLdfYzo2crnDzCtvI6idgaK4clrO6KJpYxXMX4VpPCIzs2cq4UJTJjwE5e0qzOD_CuaB5YGQxBhalisbqCb7M5VsARvNjp7kh2-DTaEty715uoX6uiTw' },
          ].map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer"
            >
              <Link to="/shop">
                <img 
                  src={collection.image}
                  alt={collection.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{collection.name}</h3>
                  <span className="text-sm font-medium text-white/80 group-hover:text-primary transition-colors flex items-center gap-1">
                    Explore Collection <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full bg-muted/30">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Discover our latest and most popular items.</p>
          </div>
          <Link to="/shop" className="hidden sm:flex items-center gap-2 text-primary font-bold hover:underline">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group flex flex-col gap-4"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-card">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
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
                    ['Skincare', 'Women\'s Perfume', 'Men\'s Cologne', 'Unisex'].includes(product.category) 
                      ? 'text-accent-purple' 
                      : ['Gadgets', 'Fashion'].includes(product.category)
                        ? 'text-primary'
                        : 'text-muted-foreground'
                  }`}
                >
                  {product.category}
                </span>
                <Link to={`/product/${product.id}`} className="block">
                  <h3 className="text-lg font-bold leading-tight mb-1 hover:text-primary transition-colors truncate px-2">
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
        <div className="mt-8 text-center sm:hidden">
          <Link to="/shop" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
