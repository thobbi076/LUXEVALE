import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import { optimizeImage } from '../utils/image';

export default function Home() {
  const { content } = useAdmin();

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
    </div>
  );
}
