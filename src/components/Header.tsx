import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useDemoModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', href: 'hero' },
    { label: 'About', href: 'about' },
    { label: 'Features', href: 'features' },
    { label: 'Vision', href: 'vision' },
    { label: 'Contact', href: 'footer' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/40 backdrop-blur-xl shadow-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src="/Untitled-1_copy[1].jpg" alt="Plantech Logo" className="h-8 w-8 object-contain" />
            <div className="flex items-center space-x-0">
              <span className="text-2xl font-inter font-bold text-white">Plantech</span>
              <span className="text-2xl font-inter font-bold" style={{ color: '#0EA5E9' }}>X</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-white/80 hover:text-white font-medium transition-colors duration-200 text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <button className="text-white/80 hover:text-white px-5 py-2 font-medium transition-colors duration-200 text-sm">
              Log In
            </button>
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-[#800020] to-[#A00030] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-medium text-sm"
            >
              Request Demo
            </button>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/60 backdrop-blur-xl border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <button className="block w-full text-left px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200">
                Log In
              </button>
              <button
                onClick={() => {
                  openModal();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left bg-gradient-to-r from-[#800020] to-[#A00030] text-white px-3 py-2 rounded-md hover:shadow-lg transition-all duration-200 mt-2"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;