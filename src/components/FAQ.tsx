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
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 right-20 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(128, 0, 32, 0.3)' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-inter font-bold text-white mb-4">
            FAQ
          </h2>
          <p className="text-lg" style={{ color: '#C7C7C7' }}>
            Get answers to common questions
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="backdrop-blur-lg border rounded-lg overflow-hidden shadow-md" style={{ backgroundColor: 'rgba(128, 0, 32, 0.1)', borderColor: 'rgba(199, 199, 199, 0.2)' }}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-base font-inter font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp size={20} className="flex-shrink-0" style={{ color: '#800020' }} />
                ) : (
                  <ChevronDown size={20} className="flex-shrink-0" style={{ color: '#800020' }} />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 border-t" style={{ borderColor: 'rgba(199, 199, 199, 0.2)' }}>
                  <p className="text-sm leading-relaxed" style={{ color: '#C7C7C7' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-3" style={{ color: '#C7C7C7' }}>
            Still have questions? We're here to help.
          </p>
          <a
            href="mailto:support@plantechx.com"
            className="hover:text-white font-medium transition-colors duration-200 text-sm"
            style={{ color: '#800020' }}
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;