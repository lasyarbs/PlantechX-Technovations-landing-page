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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-32 left-1/2 w-96 h-96 bg-primary-200/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-inter font-bold text-neutral-900 mb-4">
            Transforming Challenges
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            See how PlantechX addresses critical challenges in educational institutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
          {/* Problems */}
          <div className="bg-neutral-50 border border-neutral-300 rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4 border border-red-300">
                <AlertTriangle size={28} className="text-red-600" />
              </div>
              <h3 className="text-xl font-inter font-bold text-neutral-900">
                Current Challenges
              </h3>
            </div>

            <div className="space-y-3">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-600 text-sm leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow divider */}
          <div className="hidden lg:flex justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="text-primary-700 text-lg font-bold">Plantechx</div>
              <div className="text-secondary-600 text-4xl font-bold">→</div>
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-neutral-50 border border-neutral-300 rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4 border border-green-300">
                <CheckCircle size={28} className="text-green-600" />
              </div>
              <h3 className="text-xl font-inter font-bold text-neutral-900">
                Solutions
              </h3>
            </div>

            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-600 text-sm leading-relaxed">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary-100 to-primary-100 border border-neutral-300 rounded-2xl p-8 lg:p-12 text-center shadow-lg">
          <h3 className="text-2xl lg:text-3xl font-inter font-bold text-neutral-900 mb-4">
            Ready to Transform Your Assessment Process?
          </h3>
          <p className="text-lg text-neutral-700 mb-8 max-w-3xl mx-auto">
            Join hundreds of institutions already using PlantechX to revolutionize their examination systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-neutral-300 shadow">
              <div className="text-3xl font-bold text-primary-700 mb-2">85%</div>
              <div className="text-sm text-neutral-600">Reduction in Prep Time</div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-neutral-300 shadow">
              <div className="text-3xl font-bold text-primary-700 mb-2">94%</div>
              <div className="text-sm text-neutral-600">Student Satisfaction</div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-neutral-300 shadow">
              <div className="text-3xl font-bold text-primary-700 mb-2">99.9%</div>
              <div className="text-sm text-neutral-600">Platform Reliability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;