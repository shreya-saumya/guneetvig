import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/siteData';
import SectionHeading from './ui/SectionHeading';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-accent relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-blush/50 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-champagne/30 blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeading
          title="Client Love"
          subtitle="Words from the beautiful brides and clients who trusted us with their special day"
        />

        {/* Testimonial Card */}
        <div className="relative mt-4">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 md:p-14 text-center relative shadow-[0_10px_50px_rgba(197,160,89,0.08)]"
          >
            {/* Quote icon */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Quote size={18} className="text-white" />
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6 mt-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-secondary text-secondary" />
              ))}
            </div>

            {/* Text */}
            <p className="font-heading text-lg md:text-xl italic text-charcoal leading-relaxed max-w-2xl mx-auto mb-8">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-heading font-semibold text-sm">
                {t.avatar}
              </div>
              <div className="text-left">
                <div className="font-heading font-medium text-primary">{t.name}</div>
                <div className="text-warm-gray text-xs uppercase tracking-wider">{t.event}</div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 flex items-center justify-center border border-secondary/30 text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-2 bg-secondary'
                      : 'w-2 h-2 bg-secondary/30 hover:bg-secondary/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 flex items-center justify-center border border-secondary/30 text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
