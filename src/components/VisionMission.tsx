import React from 'react';
import { Eye, Target } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-inter font-bold text-neutral-900 mb-6">
            Vision & Mission
          </h2>
          <div className="w-24 h-1 bg-primary-800 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 lg:p-12 rounded-2xl">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Eye size={32} className="text-primary-800" />
            </div>
            
            <h3 className="text-2xl font-inter font-bold text-neutral-900 mb-6">
              Our Vision
            </h3>
            
            <p className="text-lg text-neutral-700 leading-relaxed">
              "To redefine education by creating a reliable, scalable, and effective assessment 
              ecosystem for the modern learner."
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-neutral-600">Global educational transformation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-neutral-600">Technology-driven learning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-neutral-600">Sustainable assessment practices</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 lg:p-12 rounded-2xl">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Target size={32} className="text-accent-600" />
            </div>
            
            <h3 className="text-2xl font-inter font-bold text-neutral-900 mb-6">
              Our Mission
            </h3>
            
            <p className="text-lg text-neutral-700 leading-relaxed">
              "To empower students with effective practice opportunities and educators with 
              tools to deliver transparent and impactful evaluations."
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-600 rounded-full"></div>
                <span className="text-neutral-600">Student empowerment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-600 rounded-full"></div>
                <span className="text-neutral-600">Educator excellence</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-600 rounded-full"></div>
                <span className="text-neutral-600">Transparent assessments</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center bg-neutral-50 p-8 lg:p-12 rounded-2xl">
          <h3 className="text-2xl font-inter font-bold text-neutral-900 mb-6">
            Our Commitment to Excellence
          </h3>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-4xl mx-auto">
            At PlantechX, we believe that every student deserves access to quality assessment tools 
            that prepare them for real-world challenges. Our commitment extends beyond technology—we're 
            dedicated to creating meaningful educational experiences that shape the future of learning 
            and professional development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;