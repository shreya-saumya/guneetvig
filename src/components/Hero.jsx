import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = ({ onBookClick }) => {
  const scrollToServices = (e) => {
    e.preventDefault();
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/look3.jpg"
          alt="Luxury bridal makeup by Guneet Vig"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        {/* Gold shimmer line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-yellow-600/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-pink-300/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <span className="inline-block text-yellow-500/90 text-xs uppercase tracking-[0.4em] font-body font-medium border border-yellow-600/30 px-5 py-2">
            Est. 2018 · India
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
        >
          Luxury Makeup for
          <br />
          <span className="italic text-secondary">Your Special Moments</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/70 font-body text-base md:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          By Internationally Trained Artist{' '}
          <span className="text-secondary font-medium">Guneet Vig</span>
          <br className="hidden md:block" />
          Crafting timeless beauty for brides, celebrations &amp; every moment that matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onBookClick}
            className="btn-luxury btn-luxury-gold min-w-[200px]"
          >
            Book Appointment
          </button>
          <a
            href="#services"
            onClick={scrollToServices}
            className="btn-luxury btn-luxury-white min-w-[200px]"
          >
            View Services
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-16 flex items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: '500+', label: 'Happy Brides' },
            { value: '8+', label: 'Years Experience' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-secondary font-heading text-2xl md:text-3xl font-semibold">
                {stat.value}
              </div>
              <div className="text-white/50 text-[10px] uppercase tracking-[0.2em] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ChevronDown size={18} className="text-secondary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
