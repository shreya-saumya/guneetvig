import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';

const categories = ['all', 'bridal', 'engagement', 'party'];

const galleryImages = [
  { id: 1,  category: 'bridal',     src: '/images/look3.jpg', height: 'h-96',  alt: 'Luxury bridal look — White lehenga' },
  { id: 2,  category: 'engagement', src: '/images/look2.jpg', height: 'h-80',  alt: 'Elegant engagement makeup — Blue outfit' },
  { id: 3,  category: 'party',      src: '/images/look1.jpg', height: 'h-72',  alt: 'Party glam look — Blue lehenga with mehndi' },
  { id: 4,  category: 'bridal',     src: '/images/look2.jpg', height: 'h-80',  alt: 'Bridal closeup — Stunning eye makeup' },
  { id: 5,  category: 'engagement', src: '/images/look3.jpg', height: 'h-72',  alt: 'Romantic engagement look — Soft glam' },
  { id: 6,  category: 'party',      src: '/images/look2.jpg', height: 'h-96',  alt: 'Evening party look — HD makeup' },
  { id: 7,  category: 'bridal',     src: '/images/look1.jpg', height: 'h-72',  alt: 'Traditional bridal beauty' },
  { id: 8,  category: 'engagement', src: '/images/look1.jpg', height: 'h-80',  alt: 'Chic engagement style' },
  { id: 9,  category: 'party',      src: '/images/look3.jpg', height: 'h-80',  alt: 'Bold party look — Camera ready' },
];

/* ─── Gallery Section ──────────────────────────────────────── */
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  }, [filteredImages.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  }, [filteredImages.length]);

  const goToIndex = useCallback((idx) => {
    setLightboxIndex(idx);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          goNext();
          break;
        case 'ArrowLeft':
          goPrev();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeading
          title="Portfolio"
          subtitle="A curated collection of our finest work across bridal, engagement, and party looks"
        />

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-secondary text-white'
                  : 'bg-accent text-warm-gray hover:bg-blush'
              }`}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="masonry-item group relative overflow-hidden cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full ${img.height} object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:brightness-75`}
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <span className="text-secondary text-xs uppercase tracking-[0.2em] font-medium">
                      {img.category}
                    </span>
                    <p className="text-white text-sm mt-1 font-light">{img.alt}</p>
                  </div>
                </div>
                {/* Magnify icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                      <circle cx="11" cy="11" r="7" />
                      <line x1="16.5" y1="16.5" x2="21" y2="21" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                    </svg>
                  </div>
                </div>
                {/* Gold corner accent */}
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-secondary/60 transition-all duration-500" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-transparent group-hover:border-secondary/60 transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <LightboxModal
            images={filteredImages}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onNext={goNext}
            onPrev={goPrev}
            onGoTo={goToIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

/* ─── Lightbox Modal Component ─────────────────────────────── */
const LightboxModal = ({ images, currentIndex, onClose, onNext, onPrev, onGoTo }) => {
  const img = images[currentIndex];

  return (
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close preview"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Counter */}
      <div className="lightbox-counter">
        <span className="lightbox-counter-current">{currentIndex + 1}</span>
        <span className="lightbox-counter-sep"> / </span>
        <span className="lightbox-counter-total">{images.length}</span>
      </div>

      {/* Previous button */}
      <button
        className="lightbox-nav lightbox-prev"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Image container */}
      <div className="lightbox-image-wrapper" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={img.id}
            className="lightbox-image-container"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="lightbox-image"
              draggable={false}
            />
            {/* Bottom info bar */}
            <div className="lightbox-info">
              <span className="lightbox-category">{img.category}</span>
              <p className="lightbox-alt">{img.alt}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Next button */}
      <button
        className="lightbox-nav lightbox-next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Thumbnail strip */}
      <div className="lightbox-thumbnails" onClick={(e) => e.stopPropagation()}>
        {images.map((thumb, idx) => (
          <button
            key={thumb.id}
            className={`lightbox-thumb ${idx === currentIndex ? 'lightbox-thumb-active' : ''}`}
            onClick={() => onGoTo(idx)}
            aria-label={`View image ${idx + 1}`}
          >
            <img src={thumb.src} alt="" className="lightbox-thumb-img" draggable={false} />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
