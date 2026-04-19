import { motion } from 'framer-motion';
import { Globe, Award, Sparkles } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const badges = [
  { icon: Globe, title: 'Internationally Trained', desc: 'Dubai & Toronto' },
  { icon: Award, title: 'Premium Products', desc: 'MAC, Dior, Charlotte Tilbury' },
  { icon: Sparkles, title: 'Customized Looks', desc: 'Tailored to You' },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/40 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-champagne/30 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeading
          title="About the Artist"
          subtitle="Where passion meets precision — every face tells a unique story"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 border border-secondary/20 -z-10" />
              <div className="absolute -inset-8 border border-secondary/10 -z-10" />
              <div className="overflow-hidden">
                <img
                  src="/images/guneet.jpeg"
                  alt="Guneet Vig — Professional Makeup Artist"
                  className="w-full h-[600px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white px-6 py-4 shadow-xl">
                <div className="font-heading text-2xl font-bold">8+</div>
                <div className="text-xs uppercase tracking-wider opacity-80">Years of Excellence</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-secondary text-xs uppercase tracking-[0.3em] font-medium">
              Our Story
            </span>
            <h3 className="font-heading text-3xl md:text-4xl font-medium mt-3 mb-6 leading-snug">
              Crafting Timeless
              <br />
              <span className="italic text-secondary">Beauty Since 2018</span>
            </h3>
            <div className="space-y-4 text-warm-gray leading-relaxed text-[15px]">
              <p>
                <strong className="text-primary">Guneet Vig Makeup Studio</strong> is a professional
                beauty studio offering luxury bridal makeup, party makeup, and special occasion
                services. Led by internationally experienced makeup artist Guneet Vig, trained in
                leading academies of <strong className="text-primary">Dubai</strong> and{' '}
                <strong className="text-primary">Toronto</strong>.
              </p>
              <p>
                With over 8 years of expertise and 500+ happy brides, Guneet brings a unique
                blend of global techniques and traditional Indian artistry. Every look is
                meticulously customized using only premium international products to ensure
                long-lasting, camera-ready perfection.
              </p>
              <p>
                From intimate pre-wedding shoots to grand celebrations, the studio delivers an
                experience that is as unforgettable as the occasion itself.
              </p>
            </div>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-luxury btn-luxury-gold mt-8 inline-flex"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-8 text-center group cursor-default"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center group-hover:bg-secondary/10 transition-colors duration-300">
                <badge.icon size={24} className="text-secondary" />
              </div>
              <h4 className="font-heading text-lg font-medium mb-2">{badge.title}</h4>
              <p className="text-warm-gray text-sm">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
