import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Check, Heart, Mail, Lock, Clock, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// Product images
import heroImage from '../assets/7d0303cfb5cd80cb5872a1d57fd758f3c9d026b0.png';
import productGrid from '../assets/8f37a317b110bb3b68d74e3512c444b64c890bfd.png';
import lifestyleNeon from '../assets/a6537bba9e6c68fcba241895629e33be5d980d90.png';
import productWhite from '../assets/5aca35af8d97f46d5661fa3a075b27732001e4a9.png';
import strapDetail from '../assets/99cac5594f9d0ed913be1fc01402b7e0360c01bb.png';
import interiorShot from '../assets/0e128c4aa57540edd449e3b55f86a0ed3ed86b7c.png';

// New brand assets
import neonLogo from '../assets/6ce1972787b941e564335d2cd47d6e152b1ab8c6.png';
import allColorsGroup from '../assets/5da4c05b47c1c12028666f6b1ec41aed11a3e938.png';

export default function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 30
  });
  
  const [selectedColor, setSelectedColor] = useState('pink');
  
  const checkoutRef = useRef<HTMLDivElement>(null);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToCheckout = () => {
    checkoutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const colors = [
    { name: 'Pink', value: 'pink', hex: '#EC4899', available: true },
    { name: 'Red', value: 'red', hex: '#EF4444', available: false },
    { name: 'Purple', value: 'purple', hex: '#A855F7', available: false },
    { name: 'Blue', value: 'blue', hex: '#3B82F6', available: false },
    { name: 'Black', value: 'black', hex: '#000000', available: false }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="THIX Heartbreaker bag lifestyle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {/* Logo */}
          <motion.div 
            className="mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <span className="text-pink-600">THI</span>
              <span className="text-black">X</span>
            </h1>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl mb-4 text-black tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            The Bad Girl Bag.
          </motion.h2>

          {/* Subtext */}
          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-10 tracking-wide"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Limited First Drop
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToCheckout}
            className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-5 md:px-16 md:py-6 text-lg md:text-xl tracking-wide transition-colors duration-200 shadow-lg hover:shadow-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            PRE-ORDER NOW
          </motion.button>
        </div>
      </motion.section>

      {/* Future Colors Teaser */}
      <section className="py-16 md:py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/20 to-black"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-pink-500" />
              <h3 className="text-3xl md:text-5xl text-white uppercase tracking-tight">
                Future Drops
              </h3>
              <Sparkles className="w-6 h-6 text-pink-500" />
            </div>
            <p className="text-pink-400 text-sm md:text-base tracking-widest uppercase">
              More colors. More attitude.
            </p>
          </motion.div>

          {/* Color Showcase */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={allColorsGroup} 
              alt="All THIX Heartbreaker colors" 
              className="w-full max-w-5xl mx-auto"
            />
          </motion.div>

          {/* Interactive Color Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {colors.map((color, index) => (
              <motion.button
                key={color.value}
                onClick={() => setSelectedColor(color.value)}
                className={`group relative px-6 py-3 border-2 bg-black transition-all duration-200 min-w-[160px] ${
                  selectedColor === color.value
                    ? 'border-pink-500'
                    : 'border-gray-700 hover:border-pink-500/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: selectedColor === color.value 
                    ? '0 0 20px rgba(236, 72, 153, 0.5)' 
                    : 'none'
                }}
              >
                <div className="flex items-center justify-center gap-3">
                  <div 
                    className="w-6 h-6 rounded-full border-2 border-white/50"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <span className="text-white uppercase tracking-wider text-sm md:text-base">
                    {color.name}
                  </span>
                </div>
                {!color.available && (
                  <span className="absolute -top-2 -right-2 text-xs text-pink-400 uppercase bg-black px-2 py-1 border border-pink-500">Soon</span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Trust + Urgency Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: Heart, text: 'Pre-Order Only' },
              { icon: Check, text: 'Limited First Production Run' },
              { icon: Mail, text: 'Email Updates On All Orders' },
              { icon: Lock, text: 'Secure Checkout' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="w-8 h-8 text-pink-600" strokeWidth={1.5} />
                <p className="text-sm md:text-base text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Countdown Timer */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-pink-600" />
              <p className="text-sm md:text-base text-gray-700">Pre-Order Closes In:</p>
            </div>
            <div className="flex justify-center gap-3 md:gap-6">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Min' },
                { value: timeLeft.seconds, label: 'Sec' }
              ].map((unit, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-black text-white w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-xl md:text-2xl">
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mt-2">{unit.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Product Images */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: productWhite, span: 'col-span-2' },
                { src: productGrid, span: '' },
                { src: strapDetail, span: '' },
                { src: interiorShot, span: 'col-span-2' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={item.span}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img
                    src={item.src}
                    alt={`THIX Heartbreaker bag view ${index + 1}`}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Product Details */}
            <div className="flex flex-col" ref={checkoutRef}>
              <h3 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-black">
                Heartbreaker
              </h3>
              
              <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
                Structured heart silhouette. Statement strap. Made for girls who move loud in silence.
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl md:text-5xl text-black">$135</span>
                <span className="text-xl md:text-2xl text-gray-400 line-through">$199</span>
                <span className="bg-pink-600 text-white px-3 py-1 text-sm">SAVE $64</span>
              </div>

              {/* Pre-Order Button */}
              <button
                className="w-full bg-pink-600 hover:bg-pink-700 text-white py-5 md:py-6 text-lg md:text-xl tracking-wide mb-4 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                PRE-ORDER NOW
              </button>

              {/* Express Checkout Options */}
              <div className="space-y-3 mb-8">
                <button className="w-full bg-black text-white py-4 flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                  </svg>
                  <span>Apple Pay</span>
                </button>
                <button className="w-full bg-[#5a31f4] text-white py-4 flex items-center justify-center gap-3 hover:bg-[#4a21d4] transition-colors">
                  <span>Shop Pay</span>
                </button>
              </div>

              {/* Pre-Order Notice */}
              <div className="bg-gray-50 p-6 border-l-4 border-pink-600">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong className="text-black">Pre-Order Notice:</strong> This item is currently in pre-order status. 
                  All customers will receive confirmation and shipping updates via email. 
                  <span className="block mt-2 text-pink-600">Estimated production time: 4-6 weeks</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-white text-center">
        <p className="text-sm md:text-base">
          © 2026 THIX. All rights reserved.
        </p>
      </footer>
    </div>
  );
}