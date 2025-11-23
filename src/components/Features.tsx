import React from 'react';
import { 
  FileText, 
  Target, 
  BarChart3, 
  Shield, 
  Smartphone, 
  Settings,
  Code,
  Clock
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Seamless Exam Creation & Management',
      description: 'Create exams quickly with an easy-to-use interface. Support for multiple exam types: aptitude, reasoning, verbal, coding, and custom question formats.',
      details: [
        'Automated scheduling for daily practice',
        'Midterms and placement exams',
        'Question bank management',
        'Bulk import capabilities'
      ]
    },
    {
      icon: Target,
      title: 'Placement-Centric Assessments',
      description: 'Ready-to-use modules for aptitude, logical reasoning, verbal ability, and coding tests tailored for campus placements.',
      details: [
        'Pre-built question sets',
        'Industry-standard formats',
        'Competitive exam patterns',
        'Skill-based categorization'
      ]
    },
    {
      icon: BarChart3,
      title: 'Smart Evaluation & Analytics',
      description: 'Instant result generation with detailed student performance breakdown and topic-wise strengths analysis.',
      details: [
        'Real-time performance tracking',
        'Weakness identification',
        'Exportable reports',
        'Comparative analysis'
      ]
    },
    {
      icon: Shield,
      title: 'Scalable & Secure Platform',
      description: 'Handle thousands of students simultaneously with advanced proctoring and monitoring features.',
      details: [
        'Enterprise-grade security',
        'Anti-cheating measures',
        'Reliable infrastructure',
        'Data protection compliance'
      ]
    },
    {
      icon: Smartphone,
      title: 'Student-Friendly Experience',
      description: 'Intuitive dashboard for students to take exams, view results, and track progress across all devices.',
      details: [
        'Cross-platform compatibility',
        'Offline exam capabilities',
        'Progress visualization',
        'Mobile-optimized interface'
      ]
    },
    {
      icon: Code,
      title: 'Advanced Coding Assessments',
      description: 'Comprehensive coding evaluation with multiple programming languages and automated testing.',
      details: [
        'Multi-language support',
        'Code compilation & execution',
        'Automated test cases',
        'Plagiarism detection'
      ]
    }
  ];

  return (
    <section id="features" className="py-24 bg-black relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#800020]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-inter font-bold text-white mb-6">
            Powerful Features
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Everything you need for modern educational assessment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-[#800020] to-[#A00030] w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                <feature.icon size={24} className="text-white" />
              </div>

              <h3 className="text-lg font-inter font-semibold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-white/70 text-sm mb-5 leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-xs text-white/60">
                    <div className="w-1 h-1 bg-[#800020] rounded-full mr-2"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-inter font-bold text-white mb-6">
                Why Choose PlantechX
              </h3>

              <div className="space-y-4">
                {[
                  { icon: Clock, text: 'Efficiency: Reduces administrative overhead by digitizing repetitive tasks' },
                  { icon: Target, text: 'Accuracy: Automated evaluation ensures reliable and error-free results' },
                  { icon: BarChart3, text: 'Transparency: Provides detailed performance reports for all stakeholders' },
                  { icon: Shield, text: 'Security: Ensures exam integrity with strict access controls' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-[#800020]/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#800020]/30">
                      <item.icon size={20} className="text-[#C7C7C7]" />
                    </div>
                    <p className="text-white/80 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10">
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Educational technology in action"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;