import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

const Hero: React.FC = () => {
  const { openModal } = useDemoModal();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(128, 0, 32, 0.2)', transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div
          className="absolute -bottom-32 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-inter font-bold text-white leading-tight">
              Transform{' '}
              <span className="bg-gradient-to-r from-[#800020] to-[#C7C7C7] bg-clip-text text-transparent">
                Education
              </span>
              <br />
              <span style={{ color: '#C7C7C7' }}>Assessment Today</span>
            </h1>

            <p className="text-lg mt-6 leading-relaxed max-w-2xl" style={{ color: '#C7C7C7' }}>
              PlantechX delivers cutting-edge online examinations that empower students and educators with structured, fair, and insightful assessments for the modern era.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={openModal}
                className="group text-white px-8 py-3 rounded-lg hover:shadow-2xl transition-all duration-300 font-medium flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(to right, #800020, #A00030)' }}
              >
                <Play size={18} />
                Request Demo
              </button>

              <button
                onClick={scrollToFeatures}
                className="group border-2 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium flex items-center justify-center gap-2"
                style={{ borderColor: '#C7C7C7' }}
              >
                Learn More
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative h-96 lg:h-full">
            <div className="relative z-10 h-full rounded-2xl overflow-hidden border" style={{ borderColor: '#800020' }}>
              <img
                src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students using PlantechX platform"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#800020]/20 via-transparent to-blue-600/20"></div>
            </div>

            {/* Floating glassmorphism cards */}
            <div
              className="absolute -top-4 -left-8 backdrop-blur-lg p-4 rounded-xl border z-20 hover:opacity-80 transition-all"
              style={{ backgroundColor: 'rgba(128, 0, 32, 0.2)', borderColor: '#800020' }}
            >
              <div className="text-xs mt-1" style={{ color: '#C7C7C7' }}>Success Rate</div>
              <div className="text-xl font-bold text-white mt-1">94%</div>
            </div>

            <div
              className="absolute -bottom-4 -right-8 backdrop-blur-lg p-4 rounded-xl border z-20 hover:opacity-80 transition-all"
              style={{ backgroundColor: 'rgba(128, 0, 32, 0.2)', borderColor: '#800020' }}
            >
              <div className="text-xs mt-1" style={{ color: '#C7C7C7' }}>Time Saved</div>
              <div className="text-xl font-bold text-white mt-1">80%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
