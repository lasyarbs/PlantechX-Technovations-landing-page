import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How secure is the platform?',
      answer: 'PlantechX employs enterprise-grade security measures including end-to-end encryption, secure data storage, advanced proctoring features, and anti-cheating mechanisms. Our platform is compliant with international data protection standards and undergoes regular security audits.'
    },
    {
      question: 'Can educators customize exams and question banks?',
      answer: 'Absolutely! Educators have complete control over exam creation and question bank management. You can create custom questions, organize questions by topics or difficulty levels, and design exams that match your specific curriculum requirements.'
    },
    {
      question: 'How do students receive performance insights?',
      answer: 'Students receive comprehensive performance reports immediately after exam completion. These reports include overall scores, topic-wise analysis, strengths and weaknesses identification, comparative performance metrics, and personalized recommendations for improvement.'
    },
    {
      question: 'What types of questions does PlantechX support?',
      answer: 'PlantechX supports multiple question formats including multiple choice, coding problems, essay questions, true/false, and custom formats. For coding assessments, we support multiple programming languages with automated compilation and testing.'
    },
    {
      question: 'How does the platform handle large-scale examinations?',
      answer: 'Our cloud-based infrastructure is designed to handle thousands of concurrent users without performance degradation. We provide load balancing, auto-scaling capabilities, and redundant systems to ensure smooth operation during peak exam periods.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-neutral-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 right-20 w-96 h-96 bg-secondary-200/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-inter font-bold text-neutral-900 mb-4">
            FAQ
          </h2>
          <p className="text-lg text-neutral-600">
            Get answers to common questions
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-neutral-300 rounded-lg overflow-hidden shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors duration-200"
              >
                <h3 className="text-base font-inter font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-primary-700 flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-primary-700 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 border-t border-neutral-200">
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-3">
            Still have questions? We're here to help.
          </p>
          <a
            href="mailto:support@plantechx.com"
            className="text-primary-700 hover:text-neutral-900 font-medium transition-colors duration-200 text-sm"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;