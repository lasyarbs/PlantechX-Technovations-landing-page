import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    'Traditional exams are outdated and inefficient',
    'Students lack structured practice opportunities',
    'Performance insights are limited or unclear',
    'Manual evaluation is time-consuming and error-prone',
    'Scalability issues with large student populations',
    'Lack of placement-focused preparation'
  ];

  const solutions = [
    'Seamless Online Exams: Create, schedule, and conduct assessments easily',
    'Comprehensive Practice Modules: Students can prepare and evaluate themselves',
    'Performance Reports: Detailed feedback to track progress and improve outcomes',
    'Organized Question Banks: Faculty can efficiently manage exam content',
    'Scalable Platform: Handle thousands of students simultaneously',
    'Placement-Ready Assessments: Industry-standard test formats and questions'
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-32 left-1/2 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(128, 0, 32, 0.3)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-inter font-bold text-white mb-4">
            Transforming Challenges
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#C7C7C7' }}>
            See how PlantechX addresses critical challenges in educational institutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
          {/* Problems */}
          <div className="backdrop-blur-lg border rounded-xl p-8 shadow-lg" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
            <div className="text-center mb-8">
              <div className="bg-red-900/30 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4 border border-red-600">
                <AlertTriangle size={28} className="text-red-400" />
              </div>
              <h3 className="text-xl font-inter font-bold text-white">
                Current Challenges
              </h3>
            </div>

            <div className="space-y-3">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm leading-relaxed" style={{ color: '#C7C7C7' }}>{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow divider */}
          <div className="hidden lg:flex justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="text-lg font-bold" style={{ color: '#800020' }}>Plantechx</div>
              <div className="text-4xl font-bold" style={{ color: '#C7C7C7' }}>→</div>
            </div>
          </div>

          {/* Solutions */}
          <div className="backdrop-blur-lg border rounded-xl p-8 shadow-lg" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
            <div className="text-center mb-8">
              <div className="bg-green-900/30 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4 border border-green-600">
                <CheckCircle size={28} className="text-green-400" />
              </div>
              <h3 className="text-xl font-inter font-bold text-white">
                Solutions
              </h3>
            </div>

            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm leading-relaxed" style={{ color: '#C7C7C7' }}>{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="backdrop-blur-lg border rounded-2xl p-8 lg:p-12 text-center shadow-lg" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
          <h3 className="text-2xl lg:text-3xl font-inter font-bold text-white mb-4">
            Ready to Transform Your Assessment Process?
          </h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#C7C7C7' }}>
            Join hundreds of institutions already using PlantechX to revolutionize their examination systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="backdrop-blur-lg rounded-lg p-6 border shadow" style={{ backgroundColor: 'rgba(128, 0, 32, 0.2)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
              <div className="text-3xl font-bold mb-2" style={{ color: '#800020' }}>85%</div>
              <div className="text-sm" style={{ color: '#C7C7C7' }}>Reduction in Prep Time</div>
            </div>
            <div className="backdrop-blur-lg rounded-lg p-6 border shadow" style={{ backgroundColor: 'rgba(128, 0, 32, 0.2)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
              <div className="text-3xl font-bold mb-2" style={{ color: '#800020' }}>94%</div>
              <div className="text-sm" style={{ color: '#C7C7C7' }}>Student Satisfaction</div>
            </div>
            <div className="backdrop-blur-lg rounded-lg p-6 border shadow" style={{ backgroundColor: 'rgba(128, 0, 32, 0.2)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
              <div className="text-3xl font-bold mb-2" style={{ color: '#800020' }}>99.9%</div>
              <div className="text-sm" style={{ color: '#C7C7C7' }}>Platform Reliability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;