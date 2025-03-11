
import React from 'react';
import { Layout } from '../components/Layout';
import { ContactSection } from '../components/ContactSection';
import { AnimatedText } from '../components/AnimatedText';

const Contact = () => {
  const faqItems = [
    {
      question: "What information do you need to provide a project estimate?",
      answer: "To provide an accurate estimate, I typically need project drawings (if available), project location, scope of work, timeline expectations, and any specific requirements or constraints."
    },
    {
      question: "How long does a typical structural engineering project take?",
      answer: "Project timelines vary significantly based on scope and complexity. A small residential project might take 2-3 weeks, while larger commercial projects can span several months. I always provide a detailed timeline during the initial consultation."
    },
    {
      question: "Do you work on international projects?",
      answer: "Yes, I've worked on projects across North America, Europe, and parts of Asia. For international projects, I collaborate with local engineers to ensure compliance with regional building codes and regulations."
    },
    {
      question: "What structural engineering software do you use?",
      answer: "I utilize industry-leading software including ETABS, SAP2000, RISA, and Revit for BIM integration. The specific tools depend on the project requirements and complexity."
    },
    {
      question: "Can you assist with obtaining building permits?",
      answer: "Yes, I provide comprehensive documentation and calculations required for building permit applications. I can also assist with responding to technical queries from building departments during the review process."
    }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto">
            <AnimatedText>
              <h1 className="mb-4">Contact Me</h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-muted-foreground text-lg">
                Get in touch to discuss your structural engineering needs or request a consultation.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-tight">
          <div className="section-heading">
            <AnimatedText>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="section-subtitle">
                Find answers to common questions about my structural engineering services.
              </p>
            </AnimatedText>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <AnimatedText key={index} delay={0.3 + index * 0.1}>
                <div className="mb-6 glass-panel p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
