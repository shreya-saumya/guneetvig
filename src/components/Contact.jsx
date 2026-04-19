import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const contactItems = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 9896813111',
    href: 'tel:+919896813111',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'guneetvig07@gmail.com',
    href: 'mailto:guneetvig07@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Studio Location',
    value: 'India-based Studio',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon – Sat, 10 AM – 10 PM',
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have questions or ready to book? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href || '#'}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 text-center group block"
              {...(item.href && item.href !== '#' ? {} : { onClick: (e) => e.preventDefault() })}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center group-hover:bg-secondary/10 transition-colors duration-300">
                <item.icon size={22} className="text-secondary" />
              </div>
              <h4 className="font-heading text-base font-medium mb-2">{item.title}</h4>
              <p className="text-warm-gray text-sm">{item.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Social strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-warm-gray text-sm mb-4 uppercase tracking-[0.2em]">Follow us on</p>
          <a
            href="https://instagram.com/guneetvigmua"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-primary hover:text-secondary transition-colors duration-300 group"
          >
            {/* <div className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all duration-300">
              <Instagram size={20} className="group-hover:text-white transition-colors" />
            </div> */}
            <span className="font-heading text-lg">@guneetvigmua</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
