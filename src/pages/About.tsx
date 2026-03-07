import { MessageCircle, Mail, Clock, Camera } from 'lucide-react';
import { optimizeImage } from '../utils/image';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBru5H_4jchzuWHy6XQ9PPo8nYxJIc_JxJLZh0XG-hEG0RGNw-RfQD21pi3udigkfaIT_Lt6m-gTYjBQND7YqK2SAr3hqsixR2fuZ176p97Pol0D47HGOz7zoEenOcmESqlORguKZ55M7llIW0ck64WjNEOmjyC5mKrZu14nWhNg6f1yLJyLKloPTlbNjYy_cGOJ9w7J8ZFykRNeo63wlBbDCzePwmr28Y0pwb7oqKrDIPJAYqCKpgj6b46MHvgecAqoNitJoUffyA")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">About LUXEVALE</h1>
          <p className="text-xl md:text-2xl font-light text-white/90">
            Curated luxury lifestyle essentials for the modern connoisseur.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Story</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          LUXEVALE is more than a store; it's a lifestyle. We meticulously curate high-quality products that elevate your everyday living. Each item in our collection is rigorously quality-checked to ensure it meets our exacting standards of luxury, aesthetics, and durability. Experience the art of refined living.
        </p>
      </section>

      <hr className="border-border max-w-7xl mx-auto w-full" />

      {/* Contact */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground">We're here to assist you with any inquiries about our curated collections.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Chat & Email */}
          <div className="bg-card rounded-2xl p-8 border border-border space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Chat with Us</h3>
                <p className="text-sm text-muted-foreground mb-4">Fastest way to reach our concierge team.</p>
                <a 
                  href="https://wa.me/2349128517004" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                </a>
              </div>
            </div>
            
            <div className="h-px bg-border w-full" />
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-2">For general inquiries and order updates.</p>
                <a href="mailto:luxevale1@gmail.com" className="text-primary font-medium hover:underline">luxevale1@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="bg-card rounded-2xl p-8 border border-border space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between w-48"><span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span></li>
                  <li className="flex justify-between w-48"><span>Saturday:</span> <span>10:00 AM - 4:00 PM</span></li>
                  <li className="flex justify-between w-48"><span>Sunday:</span> <span>Closed</span></li>
                </ul>
              </div>
            </div>

            <div className="h-px bg-border w-full" />

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Camera className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Follow Our Lifestyle</h3>
                <p className="text-sm text-muted-foreground mb-4">Discover inspiration and new arrivals.</p>
                <a 
                  href="https://instagram.com/luxev_ale"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  @luxev_ale
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
