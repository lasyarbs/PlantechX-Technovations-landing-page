import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

const Hero: React.FC = () => {
  const { openModal } = useDemoModal();

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-neutral-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-32 w-48 h-48 bg-accent-500 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-bold text-neutral-900 leading-tight">
              Transforming Learning and{' '}
              <span className="text-primary-800">Assessment</span>{' '}
              for the Digital Era
            </h1>
            
            <p className="text-xl text-neutral-600 mt-6 leading-relaxed max-w-2xl">
              PlantechX is a cutting-edge online examination platform that empowers students to excel 
              and faculty to deliver structured, fair, and insightful assessments.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={openModal}
                className="group bg-primary-800 text-white px-8 py-4 rounded-lg hover:bg-primary-900 transition-all duration-200 font-medium text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Request a Demo
                <Play size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={scrollToFeatures}
                className="group border-2 border-primary-800 text-primary-800 px-8 py-4 rounded-lg hover:bg-primary-800 hover:text-white transition-all duration-200 font-medium text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Today
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-primary-800">500+</div>
                <div className="text-sm text-neutral-600">Institutions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-800">100K+</div>
                <div className="text-sm text-neutral-600">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-800">99.9%</div>
                <div className="text-sm text-neutral-600">Uptime</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students using PlantechX platform"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20 animate-pulse">
              <div className="text-sm text-neutral-600">Exam Success Rate</div>
              <div className="text-2xl font-bold text-accent-500">94%</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20 animate-pulse delay-1000">
              <div className="text-sm text-neutral-600">Time Saved</div>
              <div className="text-2xl font-bold text-primary-800">80%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;