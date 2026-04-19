import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const BookAppointment = ({ onBookClick }) => {
  return (
    <section id="book" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/look1.jpg"
          alt="Bridal makeup background"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-16 h-16 mx-auto mb-8 rounded-full border-2 border-secondary/40 flex items-center justify-center">
            <Calendar size={28} className="text-secondary" />
          </div>

          <h2 className="font-heading text-white text-3xl md:text-5xl font-medium mb-4">
            Ready to{' '}
            <span className="italic text-secondary">Look Stunning?</span>
          </h2>
          <span className="block w-16 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto my-6" />
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Book your appointment today and experience the luxury of personalized
            makeup artistry. Fill out our quick form below to secure your slot instantly via WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => onBookClick()}
              className="btn-luxury btn-luxury-gold min-w-[240px] flex items-center justify-center gap-3 group"
            >
              Book Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+919896813111"
              className="btn-luxury btn-luxury-white min-w-[240px]"
            >
              Call to Book
            </a>
          </div>

          <p className="text-white/40 text-xs tracking-wider">
            ✦ Instant confirmation available via WhatsApp ✦
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookAppointment;
