import React from 'react';
import { Eye, Target } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#800020]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-inter font-bold text-white mb-4">
            Vision & Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 lg:p-12 hover:bg-white/10 transition-all">
            <div className="bg-gradient-to-br from-[#800020] to-[#A00030] w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Eye size={28} className="text-white" />
            </div>

            <h3 className="text-2xl font-inter font-bold text-white mb-4">
              Our Vision
            </h3>

            <p className="text-lg text-white/80 leading-relaxed">
              "To redefine education by creating a reliable, scalable, and effective assessment ecosystem for the modern learner."
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                <span className="text-white/70 text-sm">Global educational transformation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                <span className="text-white/70 text-sm">Technology-driven learning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                <span className="text-white/70 text-sm">Sustainable assessment practices</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 lg:p-12 hover:bg-white/10 transition-all">
            <div className="bg-gradient-to-br from-blue-600 to-[#0EA5E9] w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Target size={28} className="text-white" />
            </div>

            <h3 className="text-2xl font-inter font-bold text-white mb-4">
              Our Mission
            </h3>

            <p className="text-lg text-white/80 leading-relaxed">
              "To empower students with effective practice opportunities and educators with tools to deliver transparent and impactful evaluations."
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                <span className="text-white/70 text-sm">Student empowerment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                <span className="text-white/70 text-sm">Educator excellence</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                <span className="text-white/70 text-sm">Transparent assessments</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl font-inter font-bold text-white mb-4">
            Our Commitment
          </h3>
          <p className="text-lg text-white/80 leading-relaxed max-w-4xl mx-auto">
            At PlantechX, we believe every student deserves access to quality assessment tools that prepare them for real-world challenges. Our commitment extends beyond technology—we're dedicated to creating meaningful educational experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
