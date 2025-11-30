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
    <section className="py-24 bg-gradient-to-br from-white via-neutral-50 to-neutral-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-32 right-0 w-96 h-96 bg-secondary-200/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 left-0 w-96 h-96 bg-primary-200/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-inter font-bold text-neutral-900 mb-4">
          Transform Your Preparation for Leading Company Exams with PlantechX
        </h2>

        <p className="text-lg text-neutral-600 mb-16 max-w-3xl mx-auto leading-relaxed">
          Enable your institution to match and exceed the quality standards of top global companies.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          <div className="bg-white border border-neutral-300 rounded-lg p-6 hover:shadow-lg hover:border-neutral-400 transition-all">
            <div className="text-neutral-800 font-bold text-sm">Accenture</div>
          </div>
          <div className="bg-white border border-neutral-300 rounded-lg p-6 hover:shadow-lg hover:border-neutral-400 transition-all">
            <div className="text-neutral-800 font-bold text-sm">TCS/Elxsi</div>
          </div>
          <div className="bg-white border border-neutral-300 rounded-lg p-6 hover:shadow-lg hover:border-neutral-400 transition-all">
            <div className="text-neutral-800 font-bold text-sm">Wipro</div>
          </div>
          <div className="bg-white border border-neutral-300 rounded-lg p-6 hover:shadow-lg hover:border-neutral-400 transition-all">
            <div className="text-neutral-800 font-bold text-sm">Google</div>
          </div>
          <div className="bg-white border border-neutral-300 rounded-lg p-6 hover:shadow-lg hover:border-neutral-400 transition-all">
            <div className="text-neutral-800 font-bold text-sm">Microsoft</div>
          </div>
          <div className="bg-white border border-neutral-300 rounded-lg p-6 hover:shadow-lg hover:border-neutral-400 transition-all">
            <div className="text-neutral-800 font-bold text-sm">Infosys</div>
          </div>
          <div className="bg-white border border-neutral-300 rounded-lg p-6 hover:shadow-lg hover:border-neutral-400 transition-all">
            <div className="text-neutral-800 font-bold text-sm">Amazon</div>
          </div>
          <div className="bg-white border border-neutral-300 rounded-lg p-6 hover:shadow-lg hover:border-neutral-400 transition-all">
            <div className="text-neutral-800 font-bold text-sm">IBM</div>
          </div>
          <div className="bg-white border border-neutral-300 rounded-lg p-6 hover:shadow-lg hover:border-neutral-400 transition-all">
            <div className="text-neutral-800 font-bold text-sm">Tech Mahendra</div>
          </div>
          <div className="bg-white border border-neutral-300 rounded-lg p-6 hover:shadow-lg hover:border-neutral-400 transition-all">
            <div className="text-neutral-800 font-bold text-sm">HCL</div>
          </div>
          <div className="bg-white border border-neutral-300 rounded-lg p-6 hover:shadow-lg hover:border-neutral-400 transition-all">
            <div className="text-neutral-800 font-bold text-sm">Cognizant</div>
          </div>
          <div className="bg-white border border-neutral-300 rounded-lg p-6 hover:shadow-lg hover:border-neutral-400 transition-all">
            <div className="text-neutral-800 font-bold text-sm">Capgemini</div>
          </div>
          <div className="bg-white border border-neutral-300 rounded-lg p-6 hover:shadow-lg hover:border-neutral-400 transition-all">
            <div className="text-neutral-800 font-bold text-sm">Intel</div>
          </div>
        </div>
        

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={openModal}
            className="group bg-gradient-to-r from-secondary-600 to-secondary-700 text-white px-8 py-3 rounded-lg hover:shadow-2xl transition-all duration-300 font-medium flex items-center gap-2"
          >
            <Play size={18} />
            Request Demo
          </button>

          <button
            onClick={scrollToFeatures}
            className="group border-2 border-neutral-400 text-neutral-700 px-8 py-3 rounded-lg hover:bg-neutral-200 hover:border-neutral-600 transition-all duration-200 font-medium flex items-center gap-2"
          >
            Learn More
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
