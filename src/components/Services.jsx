import { motion } from 'framer-motion';
import { Crown, Sparkles, Heart, Camera, Star, Gem } from 'lucide-react';
import { services } from '../data/siteData';
import SectionHeading from './ui/SectionHeading';

const iconMap = {
  Crown,
  Sparkles,
  Heart,
  Camera,
  Star,
  Gem,
};

const Services = ({ onBookClick }) => {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-blush/30 blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-champagne/20 blur-3xl translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeading
          title="Our Services"
          subtitle="Luxury beauty services tailored to every occasion — from intimate gatherings to grand celebrations"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Star;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card group p-8 relative overflow-hidden"
              >
                {/* Gold top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-accent flex items-center justify-center group-hover:bg-secondary/10 transition-colors duration-300">
                    <Icon size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-medium leading-tight">{service.name}</h3>
                    <div className="text-secondary font-heading text-xl font-semibold mt-1">
                      {service.price}
                    </div>
                  </div>
                </div>

                <p className="text-warm-gray text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <button
                  onClick={() => onBookClick(service.name)}
                  className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-secondary font-medium group/link"
                >
                  Book Now
                  <span className="ml-2 w-4 h-px bg-secondary group-hover/link:w-8 transition-all duration-300" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
