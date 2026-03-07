import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, MessageCircle, Info, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { motion, AnimatePresence } from 'motion/react';
import { optimizeImage } from '../utils/image';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { formatPrice } = useCurrency();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-muted-foreground mb-8">Looks like you haven't added anything yet.</p>
        <Link 
          to="/shop" 
          className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  const handleCheckout = () => {
    const phoneNumber = '2349128517004';
    let message = `*New Order from LUXEVALE*\n\n`;
    
    items.forEach(item => {
      message += `• ${item.name} (x${item.quantity})\n`;
      if (item.size) message += `  Size: ${item.size}\n`;
      if (item.color) message += `  Color: ${item.color}\n`;
      message += `  Price: ${formatPrice(item.price * item.quantity)}\n\n`;
    });

    message += `*Total: ${formatPrice(cartTotal)}*\n\n`;
    message += `Please confirm my order and provide payment details.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 mb-4">
          <ArrowLeft className="h-4 w-4" /> Continue Shopping
        </Link>
        <h1 className="text-4xl font-black tracking-tight mb-2">Your Cart</h1>
        <p className="text-muted-foreground">Delivery fee added automatically at checkout.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="flex-1 bg-card rounded-2xl border border-border overflow-hidden">
          <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-border text-sm font-bold uppercase tracking-wider text-muted-foreground">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Total</div>
          </div>

          <div className="divide-y divide-border">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 items-center"
                >
                  <div className="col-span-1 md:col-span-6 flex items-center gap-6">
                    <div className="h-24 w-24 rounded-xl bg-muted overflow-hidden flex-shrink-0 border border-border">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover" 
                        loading="lazy" 
                        decoding="async"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.size && `Size: ${item.size}`} {item.color && `| Color: ${item.color}`}
                      </p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-muted-foreground hover:text-destructive flex items-center gap-1 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" /> Remove
                      </button>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-2 flex md:justify-center font-medium">
                    <span className="md:hidden text-muted-foreground mr-2">Price:</span> 
                    {formatPrice(item.price)}
                  </div>

                  <div className="col-span-1 md:col-span-2 flex md:justify-center">
                    <div className="flex items-center border border-border rounded-full bg-background">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-muted rounded-l-full transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-muted rounded-r-full transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-2 flex md:justify-end font-bold text-lg">
                    <span className="md:hidden text-muted-foreground mr-2 font-normal">Total:</span>
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96 bg-muted/50 rounded-2xl border border-border p-8 h-fit sticky top-24">
          <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-border">Order Summary</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center text-muted-foreground">
              <span>Subtotal ({items.length} items)</span>
              <span className="font-medium text-foreground">{formatPrice(cartTotal)}</span>
            </div>
            <div className="flex justify-between items-center text-muted-foreground">
              <span>Shipping</span>
              <span className="font-medium text-foreground">Calculated at checkout</span>
            </div>
          </div>

          <div className="pt-6 border-t border-border mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-bold">Total</span>
              <span className="text-3xl font-black text-primary">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-xs text-muted-foreground text-right">Including taxes</p>
          </div>

          <button 
            onClick={handleCheckout}
            className="w-full bg-foreground text-background py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-foreground/90 transition-all shadow-lg mb-4"
          >
            <MessageCircle className="h-5 w-5" /> Checkout via WhatsApp
          </button>

          <div className="bg-background p-4 rounded-xl border border-border flex gap-3 items-start">
            <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground block mb-1">Note:</strong>
              Payment via transfer after confirmation. A customer service representative will contact you shortly after you submit your order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
