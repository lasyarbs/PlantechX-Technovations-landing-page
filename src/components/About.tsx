import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Placement-Focused',
      description: 'Specifically designed for campus placement preparation and competitive recruitment'
    },
    {
      icon: Users,
      title: 'Scalable Platform',
      description: 'Handle thousands of students simultaneously without performance issues'
    },
    {
      icon: Award,
      title: 'Smart Evaluation',
      description: 'Instant results with detailed performance analytics and insights'
    },
    {
      icon: TrendingUp,
      title: 'Complete Lifecycle',
      description: 'From exam creation to performance analytics in one integrated platform'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-inter font-bold text-neutral-900 mb-6">
            About PlantechX
          </h2>
          <div className="w-24 h-1 bg-primary-800 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Digital assessment ecosystem"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          
          <div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              PlantechX is not just another online examination tool—it's a complete digital assessment 
              ecosystem designed for modern education. Our platform simplifies the entire exam lifecycle, 
              from creation and scheduling to evaluation and performance analytics, ensuring transparency 
              and efficiency at every step.
            </p>
            
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              What makes PlantechX truly impactful is its focus on placement-driven examinations. 
              Institutions can seamlessly conduct aptitude, reasoning, verbal, and coding tests, 
              preparing students for campus placements and competitive recruitment processes.
            </p>
            
            <p className="text-lg text-neutral-700 leading-relaxed">
              From daily practice to large-scale placement drives, PlantechX adapts to every academic 
              and professional requirement while keeping the student experience simple and intuitive.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors duration-200">
                <highlight.icon size={32} className="text-primary-800" />
              </div>
              <h3 className="text-xl font-inter font-semibold text-neutral-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-neutral-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-inter font-bold text-neutral-900 mb-8 text-center">
            Who Can Benefit from PlantechX?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary-800 mb-4">Students</h4>
              <p className="text-neutral-600">
                Gain continuous practice opportunities, structured exam preparation, 
                and detailed feedback on performance.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary-800 mb-4">Faculty</h4>
              <p className="text-neutral-600">
                Save time, create better assessments, and guide students using 
                actionable insights.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary-800 mb-4">Institutions</h4>
              <p className="text-neutral-600">
                Build credibility by offering a professional, fair, and transparent 
                assessment system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;