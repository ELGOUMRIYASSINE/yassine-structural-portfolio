
import React from 'react';
import { Check, Award, GraduationCap, Briefcase } from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import { AnimatedImage } from './AnimatedImage';

export const AboutSection: React.FC = () => {
  const skillsList = [
    "Structural Analysis & Design",
    "Seismic Engineering",
    "Construction Management",
    "Building Information Modeling (BIM)",
    "Sustainable Design",
    "Building Code Compliance",
    "Material Science",
    "Finite Element Analysis",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-tight">
        <div className="section-heading">
          <AnimatedText>
            <h2 className="section-title">About Me</h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="section-subtitle">
              A dedicated structural engineer with a passion for creating safe, innovative, and sustainable structures.
            </p>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <AnimatedImage 
              src="https://images.unsplash.com/photo-1584277261846-c6a1672ed979?q=80&w=2070&auto=format&fit=crop" 
              alt="Yassine El Goumri reviewing blueprints"
              className="rounded-2xl shadow-xl"
            />
          </div>
          
          <div>
            <AnimatedText delay={0.3}>
              <h3 className="text-2xl font-semibold mb-4">Yassine El Goumri</h3>
            </AnimatedText>
            
            <AnimatedText delay={0.4} className="text-muted-foreground">
              <p className="mb-4">
                With over 10 years of experience in structural engineering, I've developed a comprehensive understanding 
                of building systems, materials behavior, and design methodologies.
              </p>
              <p className="mb-6">
                My approach combines technical expertise with creative problem-solving to deliver structures that 
                not only meet safety and regulatory requirements but also achieve aesthetic and functional excellence.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={0.5}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {skillsList.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </AnimatedText>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedText delay={0.3} className="glass-panel p-6 card-hover">
              <GraduationCap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-medium">MSc in Structural Engineering</p>
                  <p className="text-sm text-muted-foreground">Stanford University, 2013</p>
                </li>
                <li>
                  <p className="font-medium">BSc in Civil Engineering</p>
                  <p className="text-sm text-muted-foreground">MIT, 2011</p>
                </li>
              </ul>
            </AnimatedText>
            
            <AnimatedText delay={0.4} className="glass-panel p-6 card-hover">
              <Briefcase className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Experience</h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-medium">Senior Structural Engineer</p>
                  <p className="text-sm text-muted-foreground">Arup, 2018-Present</p>
                </li>
                <li>
                  <p className="font-medium">Structural Engineer</p>
                  <p className="text-sm text-muted-foreground">Thornton Tomasetti, 2013-2018</p>
                </li>
              </ul>
            </AnimatedText>
            
            <AnimatedText delay={0.5} className="glass-panel p-6 card-hover">
              <Award className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Certifications</h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-medium">Licensed Professional Engineer (PE)</p>
                  <p className="text-sm text-muted-foreground">New York State</p>
                </li>
                <li>
                  <p className="font-medium">LEED Accredited Professional</p>
                  <p className="text-sm text-muted-foreground">U.S. Green Building Council</p>
                </li>
                <li>
                  <p className="font-medium">Certified Building Inspector</p>
                  <p className="text-sm text-muted-foreground">International Code Council</p>
                </li>
              </ul>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
};
