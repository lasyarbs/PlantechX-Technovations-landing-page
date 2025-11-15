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
    <section id="features" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-inter font-bold text-neutral-900 mb-6">
            Key Features
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Discover the powerful capabilities that make PlantechX the preferred choice 
            for modern educational institutions
          </p>
          <div className="w-24 h-1 bg-primary-800 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-neutral-200 hover:border-primary-200"
            >
              <div className="bg-primary-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors duration-200">
                <feature.icon size={28} className="text-primary-800" />
              </div>
              
              <h3 className="text-xl font-inter font-semibold text-neutral-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-neutral-500">
                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-inter font-bold text-neutral-900 mb-6">
                Why Educational Institutions Choose PlantechX
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: Clock, text: 'Efficiency: Reduces administrative overhead by digitizing repetitive tasks' },
                  { icon: Target, text: 'Accuracy: Automated evaluation ensures reliable and error-free results' },
                  { icon: BarChart3, text: 'Transparency: Provides detailed performance reports for all stakeholders' },
                  { icon: Shield, text: 'Security: Ensures exam integrity with strict access controls' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-accent-50 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-accent-600" />
                    </div>
                    <p className="text-neutral-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Educational technology in action"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;