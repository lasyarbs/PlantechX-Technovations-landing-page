import React from 'react';
import { Eye, Target } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(128, 0, 32, 0.3)' }}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(128, 0, 32, 0.3)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-inter font-bold text-white mb-4">
            Vision & Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="backdrop-blur-lg border rounded-2xl p-8 lg:p-12 hover:shadow-xl transition-all" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ background: 'linear-gradient(to br, #800020, #A00030)' }}>
              <Eye size={28} className="text-white" />
            </div>

            <h3 className="text-2xl font-inter font-bold text-white mb-4">
              Our Vision
            </h3>

            <p className="text-lg leading-relaxed" style={{ color: '#C7C7C7' }}>
              "To redefine education by creating a reliable, scalable, and effective assessment ecosystem for the modern learner."
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#800020' }}></div>
                <span className="text-sm" style={{ color: '#C7C7C7' }}>Global educational transformation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#800020' }}></div>
                <span className="text-sm" style={{ color: '#C7C7C7' }}>Technology-driven learning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#800020' }}></div>
                <span className="text-sm" style={{ color: '#C7C7C7' }}>Sustainable assessment practices</span>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-lg border rounded-2xl p-8 lg:p-12 hover:shadow-xl transition-all" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ background: 'linear-gradient(to br, #800020, #A00030)' }}>
              <Target size={28} className="text-white" />
            </div>

            <h3 className="text-2xl font-inter font-bold text-white mb-4">
              Our Mission
            </h3>

            <p className="text-lg leading-relaxed" style={{ color: '#C7C7C7' }}>
              "To empower students with effective practice opportunities and educators with tools to deliver transparent and impactful evaluations."
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#800020' }}></div>
                <span className="text-sm" style={{ color: '#C7C7C7' }}>Student empowerment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#800020' }}></div>
                <span className="text-sm" style={{ color: '#C7C7C7' }}>Educator excellence</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#800020' }}></div>
                <span className="text-sm" style={{ color: '#C7C7C7' }}>Transparent assessments</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 backdrop-blur-lg border rounded-2xl p-8 lg:p-12 text-center shadow-lg" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
          <h3 className="text-2xl font-inter font-bold text-white mb-4">
            Our Commitment
          </h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto" style={{ color: '#C7C7C7' }}>
            At PlantechX, we believe every student deserves access to quality assessment tools that prepare them for real-world challenges. Our commitment extends beyond technology—we're dedicated to creating meaningful educational experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
