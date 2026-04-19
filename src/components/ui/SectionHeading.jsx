import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, light = false }) => {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
    >
      <h2 className={light ? 'text-white' : ''}>
        {title}
      </h2>
      <span className="heading-accent" />
      {subtitle && (
        <p className={light ? 'text-white/70' : ''}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
