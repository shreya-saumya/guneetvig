import { useEffect, useState } from 'react';

const GlitterEffect = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
      size: 1 + Math.random() * 3,
      opacity: 0.2 + Math.random() * 0.4,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="glitter-overlay" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="glitter-particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default GlitterEffect;
