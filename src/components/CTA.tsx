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
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-32 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(128, 0, 32, 0.3)' }}></div>
        <div className="absolute -bottom-32 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(128, 0, 32, 0.3)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-inter font-bold text-white mb-4">
          Transform Your Preparation for Leading Company Exams with PlantechX
        </h2>

        <p className="text-lg mb-16 max-w-3xl mx-auto leading-relaxed" style={{ color: '#C7C7C7' }}>
          Enable your institution to match and exceed the quality standards of top global companies.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          <div className="backdrop-blur-lg border rounded-lg p-6 hover:shadow-lg transition-all" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
            <div className="font-bold text-sm" style={{ color: '#C7C7C7' }}>Accenture</div>
          </div>
          <div className="backdrop-blur-lg border rounded-lg p-6 hover:shadow-lg transition-all" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
            <div className="font-bold text-sm" style={{ color: '#C7C7C7' }}>TCS/Elxsi</div>
          </div>
          <div className="backdrop-blur-lg border rounded-lg p-6 hover:shadow-lg transition-all" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
            <div className="font-bold text-sm" style={{ color: '#C7C7C7' }}>Wipro</div>
          </div>
          <div className="backdrop-blur-lg border rounded-lg p-6 hover:shadow-lg transition-all" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
            <div className="font-bold text-sm" style={{ color: '#C7C7C7' }}>Google</div>
          </div>
          <div className="backdrop-blur-lg border rounded-lg p-6 hover:shadow-lg transition-all" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
            <div className="font-bold text-sm" style={{ color: '#C7C7C7' }}>Microsoft</div>
          </div>
          <div className="backdrop-blur-lg border rounded-lg p-6 hover:shadow-lg transition-all" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
            <div className="font-bold text-sm" style={{ color: '#C7C7C7' }}>Infosys</div>
          </div>
          <div className="backdrop-blur-lg border rounded-lg p-6 hover:shadow-lg transition-all" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
            <div className="font-bold text-sm" style={{ color: '#C7C7C7' }}>Amazon</div>
          </div>
          <div className="backdrop-blur-lg border rounded-lg p-6 hover:shadow-lg transition-all" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
            <div className="font-bold text-sm" style={{ color: '#C7C7C7' }}>IBM</div>
          </div>
          <div className="backdrop-blur-lg border rounded-lg p-6 hover:shadow-lg transition-all" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
            <div className="font-bold text-sm" style={{ color: '#C7C7C7' }}>Tech Mahendra</div>
          </div>
          <div className="backdrop-blur-lg border rounded-lg p-6 hover:shadow-lg transition-all" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
            <div className="font-bold text-sm" style={{ color: '#C7C7C7' }}>HCL</div>
          </div>
          <div className="backdrop-blur-lg border rounded-lg p-6 hover:shadow-lg transition-all" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
            <div className="font-bold text-sm" style={{ color: '#C7C7C7' }}>Cognizant</div>
          </div>
          <div className="backdrop-blur-lg border rounded-lg p-6 hover:shadow-lg transition-all" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
            <div className="font-bold text-sm" style={{ color: '#C7C7C7' }}>Capgemini</div>
          </div>
          <div className="backdrop-blur-lg border rounded-lg p-6 hover:shadow-lg transition-all" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
            <div className="font-bold text-sm" style={{ color: '#C7C7C7' }}>Intel</div>
          </div>
        </div>
        

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={openModal}
            className="group text-white px-8 py-3 rounded-lg hover:shadow-2xl transition-all duration-300 font-medium flex items-center gap-2"
            style={{ background: 'linear-gradient(to right, #800020, #A00030)' }}
          >
            <Play size={18} />
            Request Demo
          </button>

          <button
            onClick={scrollToFeatures}
            className="group border-2 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium flex items-center gap-2"
            style={{ borderColor: '#C7C7C7' }}
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
