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
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-[#800020]/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
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
              <span className="bg-gradient-to-r from-[#800020] to-blue-500 bg-clip-text text-transparent">
                Education
              </span>
              <br />
              <span className="text-white/80">Assessment Today</span>
            </h1>

            <p className="text-lg text-white/70 mt-6 leading-relaxed max-w-2xl">
              PlantechX delivers cutting-edge online examinations that empower students and educators with structured, fair, and insightful assessments for the modern era.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={openModal}
                className="group bg-gradient-to-r from-[#800020] to-[#A00030] text-white px-8 py-3 rounded-lg hover:shadow-2xl transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <Play size={18} />
                Request Demo
              </button>

              <button
                onClick={scrollToFeatures}
                className="group border-2 border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 font-medium flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Compact stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-white/60 mt-1">Institutions</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">100K+</div>
                <div className="text-xs text-white/60 mt-1">Students</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-xs text-white/60 mt-1">Uptime</div>
              </div>
            </div>
          </div>

          <div className="relative h-96 lg:h-full">
            <div className="relative z-10 h-full rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm">
              <img
                src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students using PlantechX platform"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#800020]/20 via-transparent to-blue-600/20"></div>
            </div>

            {/* Floating glassmorphism cards */}
            <div className="absolute -top-4 -left-8 bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 z-20 hover:bg-white/20 transition-all">
              <div className="text-xs text-white/70">Success Rate</div>
              <div className="text-xl font-bold text-white mt-1">94%</div>
            </div>

            <div className="absolute -bottom-4 -right-8 bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 z-20 hover:bg-white/20 transition-all">
              <div className="text-xs text-white/70">Time Saved</div>
              <div className="text-xl font-bold text-white mt-1">80%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;