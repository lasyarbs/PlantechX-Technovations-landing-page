import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

const Footer: React.FC = () => {
  const { openModal } = useDemoModal();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'About', href: 'about' },
    { label: 'Features', href: 'features' },
    { label: 'Vision', href: 'vision' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/109008476', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer id="footer" className="bg-neutral-900 text-white border-t border-neutral-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-secondary-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/Untitled-1_copy[1].jpg" alt="Plantech Logo" className="h-8 w-8 object-contain" />
              <div className="flex items-center space-x-0">
                <span className="text-xl font-inter font-bold text-white">Plantech</span>
                <span className="text-xl font-inter font-bold text-primary-400">X</span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md text-sm">
              Transforming education with cutting-edge digital assessment solutions. Empowering students and educators for a brighter future.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white/80 mb-4">Contact</h4>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-secondary-400" />
              <a href="mailto:contact@plantechx.in" className="text-white/70 hover:text-white transition-colors text-sm">
                contact@plantechx.in
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-secondary-400" />
              <a href="tel:+1234567890" className="text-white/70 hover:text-white transition-colors text-sm">
                +1 (234) 567-8900
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-secondary-400 flex-shrink-0 mt-0.5" />
              <span className="text-white/70 text-sm">
                Plot No:15, 2nd floor R.K Nagar, Srikakulam 532001
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4">Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white transition-colors text-left text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={openModal}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Request Demo
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4">Social</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-secondary-600 transition-colors border border-white/10"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 PlantechX. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
