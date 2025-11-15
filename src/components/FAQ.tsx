import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Can students take exams offline?',
      answer: 'Yes, PlantechX supports offline exam capabilities. Students can download exams and take them without an internet connection. Once reconnected, their responses are automatically synchronized with the platform, ensuring no data is lost.'
    },
    {
      question: 'How secure is the platform?',
      answer: 'PlantechX employs enterprise-grade security measures including end-to-end encryption, secure data storage, advanced proctoring features, and anti-cheating mechanisms. Our platform is compliant with international data protection standards and undergoes regular security audits.'
    },
    {
      question: 'Can educators customize exams and question banks?',
      answer: 'Absolutely! Educators have complete control over exam creation and question bank management. You can create custom questions, import existing question sets, organize questions by topics or difficulty levels, and design exams that match your specific curriculum requirements.'
    },
    {
      question: 'How do students receive performance insights?',
      answer: 'Students receive comprehensive performance reports immediately after exam completion. These reports include overall scores, topic-wise analysis, strengths and weaknesses identification, comparative performance metrics, and personalized recommendations for improvement.'
    },
    {
      question: 'What types of questions does PlantechX support?',
      answer: 'PlantechX supports multiple question formats including multiple choice, coding problems, essay questions, fill-in-the-blanks, true/false, and custom formats. For coding assessments, we support multiple programming languages with automated compilation and testing.'
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
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-inter font-bold text-neutral-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral-600">
            Get answers to common questions about PlantechX
          </p>
          <div className="w-24 h-1 bg-primary-800 mx-auto mt-8"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-neutral-50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-neutral-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-inter font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp size={24} className="text-primary-800 flex-shrink-0" />
                ) : (
                  <ChevronDown size={24} className="text-primary-800 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <a 
            href="mailto:support@plantechx.com" 
            className="text-primary-800 hover:text-primary-900 font-medium transition-colors duration-200"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;