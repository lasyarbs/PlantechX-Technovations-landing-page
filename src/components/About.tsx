import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Placement-Focused',
      description: 'Specifically designed for campus placement preparation'
    },
    {
      icon: Users,
      title: 'Scalable Platform',
      description: 'Handle thousands of students simultaneously'
    },
    {
      icon: Award,
      title: 'Smart Evaluation',
      description: 'Instant results with detailed performance analytics'
    },
    {
      icon: TrendingUp,
      title: 'Complete Lifecycle',
      description: 'From exam creation to performance analytics'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-inter font-bold text-white mb-4">
            About PlantechX
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-xl overflow-hidden border border-white/10 h-96">
            <img
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Digital assessment ecosystem"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              PlantechX is a comprehensive digital assessment ecosystem designed for modern education. Our platform simplifies the entire exam lifecycle, from creation to evaluation and analytics.
            </p>

            <p className="text-lg text-white/80 leading-relaxed mb-6">
              What makes PlantechX truly impactful is its focus on placement-driven examinations. Institutions can seamlessly conduct aptitude, reasoning, verbal, and coding tests.
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              From daily practice to large-scale placement drives, PlantechX adapts to every requirement while keeping the student experience simple and intuitive.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="bg-gradient-to-br from-[#800020] to-[#A00030] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <highlight.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-inter font-semibold text-white mb-2">
                {highlight.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-inter font-bold text-white mb-8 text-center">
            Who Benefits from PlantechX?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-[#0EA5E9] mb-3">Students</h4>
              <p className="text-white/70 text-sm">
                Gain continuous practice opportunities, structured exam preparation, and detailed feedback on performance.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-[#0EA5E9] mb-3">Faculty</h4>
              <p className="text-white/70 text-sm">
                Save time, create better assessments, and guide students using actionable insights.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-[#0EA5E9] mb-3">Institutions</h4>
              <p className="text-white/70 text-sm">
                Build credibility by offering a professional, fair, and transparent assessment system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
