import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Star, Minus, Plus, ShoppingBag, Truck, ShieldCheck, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data/products';
import { optimizeImage } from '../utils/image';

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  
  const product = products.find(p => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(
    product?.fragranceNotes ? 'notes' : 'features'
  );
  const [selectedImage, setSelectedImage] = useState<string>('');

  const availableSizes = product?.specifications?.Volume 
    ? [String(product.specifications.Volume)] 
    : product?.category === 'Perfumes' 
      ? ['50ml', '100ml', '120ml', '150ml']
      : [];

  const [selectedSize, setSelectedSize] = useState(availableSizes[0]);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      // Update selected size when product changes
      const sizes = product.specifications?.Volume 
        ? [String(product.specifications.Volume)] 
        : product.category === 'Perfumes' 
          ? ['50ml', '100ml', '120ml', '150ml']
          : [];
      setSelectedSize(sizes[0]);
      setActiveAccordion(product.fragranceNotes ? 'notes' : 'features');
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
        <p className="text-muted-foreground mb-8">The product you are looking for does not exist.</p>
        <Link 
          to="/shop" 
          className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: selectedSize
    });
  };

  const AccordionItem = ({ id, title, children }: { id: string, title: string, children: ReactNode }) => (
    <div className="border-b border-border">
      <button 
        onClick={() => setActiveAccordion(activeAccordion === id ? null : id)}
        className="w-full py-4 flex items-center justify-between text-left font-bold text-sm uppercase tracking-wider hover:text-primary transition-colors"
      >
        {title}
        {activeAccordion === id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      <AnimatePresence>
        {activeAccordion === id && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-muted-foreground text-sm leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square bg-card rounded-2xl overflow-hidden relative">
            <img 
              src={optimizeImage(selectedImage || product.image, 1080)} 
              alt={product.name} 
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {(product.images && product.images.length > 0 ? product.images : [product.image, product.image, product.image, product.image]).map((img, i) => (
              <div 
                key={i} 
                className={`aspect-square bg-card rounded-lg overflow-hidden cursor-pointer transition-all ${selectedImage === img ? 'ring-2 ring-primary' : 'hover:ring-2 hover:ring-primary/50'}`}
                onClick={() => setSelectedImage(img)}
              >
                <img src={optimizeImage(img, 320)} alt="Thumbnail" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/shop" className="hover:text-primary">Shop</Link> / <span className="text-foreground font-medium">{product.name}</span>
          </nav>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">{product.category}</span>
            {product.brand && (
              <>
                <span className="text-muted-foreground">•</span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{product.brand}</span>
              </>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 break-words">{product.name}</h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded text-xs font-bold">
              <Star className="h-3 w-3 fill-primary text-primary" />
              <span>{product.rating} ({product.reviews} reviews)</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8 break-words">
            {product.description}
          </p>

          {availableSizes.length > 1 && (
            <div className="mb-8">
              <span className="text-sm font-bold uppercase tracking-wider mb-3 block">Size</span>
              <div className="flex gap-3">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex-1 py-3 rounded-lg border text-sm font-bold transition-all ${
                      selectedSize === size 
                        ? 'border-primary bg-primary/5 text-primary ring-1 ring-primary' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <span className="text-sm font-bold uppercase tracking-wider mb-3 block">Quantity</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-muted transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-muted transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-primary/90 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 mb-8"
          >
            <ShoppingBag className="h-5 w-5" /> Add to Cart
          </button>

          <div className="bg-card rounded-xl p-6 mb-8 space-y-4">
            <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 text-primary mt-1" />
              <div>
                <h4 className="font-bold text-sm">Fast Delivery</h4>
                <p className="text-xs text-muted-foreground">2-5 days within Lagos. 3-7 days outside Lagos.</p>
              </div>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-primary mt-1" />
              <div>
                <h4 className="font-bold text-sm">100% Authentic</h4>
                <p className="text-xs text-muted-foreground">Direct from manufacturer. Quality guaranteed.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border w-full overflow-hidden">
            {product.keyFeatures && (
              <AccordionItem id="features" title="Key Features">
                <ul className="list-disc pl-5 space-y-1 break-words">
                  {product.keyFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </AccordionItem>
            )}
            
            {product.specifications && (
              <AccordionItem id="specs" title="Specifications">
                <div className="grid grid-cols-2 gap-2 break-words">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="font-bold text-xs uppercase text-muted-foreground">{key}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </AccordionItem>
            )}

            {product.fragranceNotes && (
              <AccordionItem id="notes" title="Fragrance Notes">
                <div className="space-y-1 break-words">
                  <p><strong>Top Notes:</strong> {product.fragranceNotes.top}</p>
                  <p><strong>Heart Notes:</strong> {product.fragranceNotes.heart}</p>
                  <p><strong>Base Notes:</strong> {product.fragranceNotes.base}</p>
                </div>
              </AccordionItem>
            )}

            {product.ingredients && (
              <AccordionItem id="ingredients" title="Ingredients">
                <p className="break-words">{product.ingredients}</p>
              </AccordionItem>
            )}

            {product.howToUse && (
              <AccordionItem id="usage" title="How to Use">
                <p className="break-words">{product.howToUse}</p>
              </AccordionItem>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
