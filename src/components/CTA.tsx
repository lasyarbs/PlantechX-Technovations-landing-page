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
    <section className="py-20 bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-inter font-bold text-white mb-6">
          Ready to Transform Your Institution's{' '}
          <span className="text-accent-300">Examination Process?</span>
        </h2>
        
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join leading institutions already using PlantechX to empower their students 
          and streamline placements. Experience the future of digital assessments today.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={openModal}
            className="group bg-white text-primary-800 px-8 py-4 rounded-xl hover:bg-neutral-100 transition-all duration-200 font-semibold text-lg flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Play size={24} className="group-hover:scale-110 transition-transform" />
            Request a Demo
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={scrollToFeatures}
            className="group border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-primary-800 transition-all duration-200 font-semibold text-lg flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started Today
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-blue-200">Trusted Institutions</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">100K+</div>
            <div className="text-blue-200">Active Students</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">1M+</div>
            <div className="text-blue-200">Exams Conducted</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;