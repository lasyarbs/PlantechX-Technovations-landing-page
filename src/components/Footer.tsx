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
    <footer id="footer" className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2 mb-6">
            <h3 className="text-2xl font-inter font-bold mb-1">PlantechX</h3>
            <h5 className="text-lg font-inter font-semibold mb-1">Technovations</h5>
            <small className="text-sm font-inter">Pvt. Ltd.</small>

            <p className="text-neutral-400 leading-relaxed max-w-md mt-4">
              Transforming education with cutting-edge digital assessment solutions. 
              Empowering students and educators for a brighter future.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-accent-400" />
              <a href="mailto:contact@plantechx.in" className="text-neutral-300 hover:text-white transition-colors">
                contact@plantechx.in
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-accent-400" />
              <a href="tel:+1234567890" className="text-neutral-300 hover:text-white transition-colors">
                +1 (234) 567-8900
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-accent-400" />
              <span className="text-neutral-300">
                Plot No:15, 2nd floor R.K Nagar, Srikakulam 532001
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-inter font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-neutral-400 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={openModal}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Request Demo
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-lg font-inter font-semibold mb-6">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-neutral-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary-800 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            <div>
              <p className="text-sm text-neutral-400 mb-2">Stay updated with our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-neutral-800 text-white px-3 py-2 rounded-lg text-sm flex-1 border border-neutral-700 focus:border-primary-600 focus:outline-none"
                />
                <button className="bg-primary-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-900 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © 2025 PlantechX. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
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
