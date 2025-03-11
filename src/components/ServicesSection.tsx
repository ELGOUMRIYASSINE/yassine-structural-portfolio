
import React from 'react';
import { Building, Construction, Activity, Search, Shield, PenTool } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { AnimatedText } from './AnimatedText';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Building,
      title: "Structural Design & Analysis",
      description: "Comprehensive design and analysis of structures to ensure safety, functionality, and compliance with building codes."
    },
    {
      icon: Construction,
      title: "Construction Consulting",
      description: "Expert guidance throughout the construction process to ensure structural integrity and efficient project execution."
    },
    {
      icon: Activity,
      title: "Seismic Assessments",
      description: "Evaluation of buildings for seismic vulnerability and development of retrofit strategies to improve performance during earthquakes."
    },
    {
      icon: Search,
      title: "Structural Investigations",
      description: "Thorough examinations to identify structural issues, determine causes of failures, and recommend remedial actions."
    },
    {
      icon: Shield,
      title: "Safety Evaluations",
      description: "Comprehensive assessments to ensure structures meet safety standards and identify potential hazards."
    },
    {
      icon: PenTool,
      title: "Project Management",
      description: "End-to-end management of structural engineering projects, ensuring timely delivery and quality results."
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container-tight">
        <div className="section-heading">
          <AnimatedText>
            <h2 className="section-title">My Services</h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="section-subtitle">
              Providing comprehensive structural engineering solutions tailored to meet your specific project needs.
            </p>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
