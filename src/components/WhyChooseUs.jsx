import { motion } from 'framer-motion';
import { Globe, Gem, Palette, Sparkles } from 'lucide-react';
import { whyChooseUs } from '../data/siteData';
import SectionHeading from './ui/SectionHeading';

const iconMap = { Globe, Gem, Palette, Sparkles };

const WhyChooseUs = () => {
  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-secondary/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeading
          title="Why Choose Us"
          subtitle="What sets Guneet Vig Makeup Studio apart — because you deserve nothing but the best"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center group p-8 border border-white/5 hover:border-secondary/30 transition-all duration-500 hover:bg-white/5"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full border border-secondary/30 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary/10 transition-all duration-300">
                  <Icon size={26} className="text-secondary" />
                </div>
                <h4 className="font-heading text-white text-lg font-medium mb-3">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
