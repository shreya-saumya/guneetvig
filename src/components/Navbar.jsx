import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/siteData';

const Navbar = ({ onBookClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_2px_30px_rgba(197,160,89,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full border-2 border-secondary flex items-center justify-center">
                  <span className="font-heading text-lg font-semibold text-secondary">
                    G
                  </span>
                </div>
                <div className="absolute -inset-1 rounded-full border border-secondary/20 group-hover:border-secondary/50 transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className={`font-heading text-lg font-semibold tracking-wide transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
                  Guneet Vig
                </span>
                <span className={`text-[10px] uppercase tracking-[0.25em] font-body transition-colors ${scrolled ? 'text-warm-gray' : 'text-white/60'}`}>
                  Makeup Studio
                </span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 hover:text-secondary group ${
                    scrolled ? 'text-charcoal' : 'text-white/90'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <button
                onClick={onBookClick}
                className="btn-luxury btn-luxury-gold text-xs px-6 py-2.5"
              >
                Book Now
              </button>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.08 }}
                className="text-white text-lg uppercase tracking-[0.25em] font-light hover:text-secondary transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              onClick={() => {
                setMobileOpen(false);
                onBookClick();
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="btn-luxury btn-luxury-gold mt-4"
            >
              Book Appointment
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
