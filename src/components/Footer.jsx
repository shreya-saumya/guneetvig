import { Heart } from 'lucide-react';
import { navLinks } from '../data/siteData';

const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-secondary flex items-center justify-center">
                <span className="font-heading text-lg font-semibold text-secondary">G</span>
              </div>
              <div>
                <div className="font-heading text-lg font-semibold tracking-wide">Guneet Vig</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">Makeup Studio</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Luxury bridal and special occasion makeup by an internationally trained artist. 
              Making every moment beautiful, one face at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-secondary mb-6">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white/50 text-sm hover:text-secondary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-secondary mb-6">
              Connect
            </h4>
            <a
              href="https://instagram.com/guneetvigmua"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/50 hover:text-secondary transition-colors duration-300 mb-4"
            >
              {/* <Instagram size={18} /> */}
              <span className="text-sm">@guneetvigmua</span>
            </a>
            <p className="text-white/30 text-sm mt-4">
              DM us for consultations & inquiries
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wider">
            © {new Date().getFullYear()} Guneet Vig Makeup Studio. All rights reserved.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-secondary fill-secondary" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
