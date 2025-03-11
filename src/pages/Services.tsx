
import React from 'react';
import { Layout } from '../components/Layout';
import { ServicesSection } from '../components/ServicesSection';
import { Check } from 'lucide-react';
import { AnimatedText } from '../components/AnimatedText';
import { AnimatedImage } from '../components/AnimatedImage';

const Services = () => {
  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a thorough discussion of your project requirements, goals, and constraints to establish clear objectives."
    },
    {
      number: "02",
      title: "Concept Development",
      description: "I develop preliminary structural concepts and solutions tailored to your specific project needs and architectural vision."
    },
    {
      number: "03",
      title: "Detailed Analysis",
      description: "Comprehensive structural analysis is performed using advanced software to ensure safety, efficiency, and code compliance."
    },
    {
      number: "04",
      title: "Design Documentation",
      description: "Detailed structural drawings and specifications are prepared with clarity and precision for seamless construction execution."
    },
    {
      number: "05",
      title: "Construction Support",
      description: "I provide ongoing support during the construction phase, including site visits and addressing any structural issues that arise."
    },
    {
      number: "06",
      title: "Project Completion",
      description: "Final inspections and documentation ensure the structural elements are built as designed and meet all requirements."
    }
  ];

  const benefits = [
    "Innovative structural solutions that optimize space and materials",
    "Comprehensive knowledge of building codes and regulations",
    "Cost-effective designs that don't compromise on safety or quality",
    "Experience with diverse project types and construction materials",
    "Clear communication throughout the project lifecycle",
    "Commitment to sustainable and environmentally conscious design"
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto">
            <AnimatedText>
              <h1 className="mb-4">Services</h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-muted-foreground text-lg">
                Comprehensive structural engineering solutions tailored to your project needs.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-tight">
          <div className="section-heading">
            <AnimatedText>
              <h2 className="section-title">My Process</h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="section-subtitle">
                A systematic approach to delivering successful structural engineering projects.
              </p>
            </AnimatedText>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedText key={index} delay={0.3 + index * 0.1}>
                <div className="glass-panel p-6 h-full border-t-4 border-primary card-hover">
                  <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedText>
                <h2 className="text-3xl font-semibold mb-4">Why Choose Me</h2>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <p className="text-muted-foreground mb-6">
                  With over a decade of experience and a passion for innovative structural solutions, 
                  I bring technical expertise, creative problem-solving, and dedicated service to every project.
                </p>
              </AnimatedText>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <AnimatedText key={index} delay={0.3 + index * 0.1} className="flex items-start">
                    <div className="p-1 rounded-full bg-primary/10 text-primary mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <p>{benefit}</p>
                  </AnimatedText>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1512187849-463fdb898f21?q=80&w=2069&auto=format&fit=crop" 
                alt="Structural engineering expertise"
                className="rounded-xl shadow-lg h-48 object-cover"
                delay={0.3}
              />
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" 
                alt="Structural design process"
                className="rounded-xl shadow-lg h-56 mt-8 object-cover"
                delay={0.4}
              />
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                alt="Construction site supervision"
                className="rounded-xl shadow-lg h-56 object-cover"
                delay={0.5}
              />
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1604689598793-b8bf0daf984b?q=80&w=2070&auto=format&fit=crop" 
                alt="Structural analysis"
                className="rounded-xl shadow-lg h-48 mt-8 object-cover"
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
