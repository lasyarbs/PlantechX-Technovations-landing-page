import React from 'react';
import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

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
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-inter font-bold text-neutral-900 mb-6">
            Transforming Educational Challenges
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            See how PlantechX addresses the critical challenges facing modern educational institutions
          </p>
          <div className="w-24 h-1 bg-primary-800 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Problems Column */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle size={32} className="text-red-600" />
              </div>
              <h3 className="text-2xl font-inter font-bold text-neutral-900">
                Current Challenges
              </h3>
            </div>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-700 text-sm leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Column */}
          <div className="flex justify-center">
            <div className="bg-primary-800 w-16 h-16 rounded-full flex items-center justify-center">
              <ArrowRight size={32} className="text-white" />
            </div>
          </div>

          {/* Solutions Column */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-accent-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-accent-600" />
              </div>
              <h3 className="text-2xl font-inter font-bold text-neutral-900">
                PlantechX Solutions
              </h3>
            </div>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-700 text-sm leading-relaxed">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-800 to-primary-900 p-8 lg:p-12 rounded-2xl text-white text-center">
          <h3 className="text-3xl font-inter font-bold mb-6">
            Ready to Transform Your Assessment Process?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of institutions that have already revolutionized their examination 
            systems with PlantechX.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-sm opacity-80">Reduction in Exam Preparation Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">94%</div>
              <div className="text-sm opacity-80">Student Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-sm opacity-80">Platform Reliability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;