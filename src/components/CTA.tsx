import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

const CTA: React.FC = () => {
  const { openModal } = useDemoModal();

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-black to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-32 right-0 w-96 h-96 bg-[#800020]/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-inter font-bold text-white mb-4">
          Ready to Transform Your Institution?
        </h2>

        <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join leading institutions using PlantechX to empower students and streamline placements.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={openModal}
            className="group bg-gradient-to-r from-[#800020] to-[#A00030] text-white px-8 py-3 rounded-lg hover:shadow-2xl transition-all duration-300 font-medium flex items-center gap-2"
          >
            <Play size={18} />
            Request Demo
          </button>

          <button
            onClick={scrollToFeatures}
            className="group border-2 border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 font-medium flex items-center gap-2"
          >
            Learn More
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-white/70 text-sm">Trusted Institutions</div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all">
            <div className="text-3xl font-bold text-white mb-2">100K+</div>
            <div className="text-white/70 text-sm">Active Students</div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all">
            <div className="text-3xl font-bold text-white mb-2">1M+</div>
            <div className="text-white/70 text-sm">Exams Conducted</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;