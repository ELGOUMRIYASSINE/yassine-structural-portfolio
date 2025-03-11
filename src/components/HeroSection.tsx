
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import { AnimatedImage } from './AnimatedImage';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <AnimatedText delay={0.1}>
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Structural Engineer
              </div>
            </AnimatedText>
            
            <AnimatedText delay={0.3}>
              <h1 className="mb-4">Designing Structures That Stand the Test of Time</h1>
            </AnimatedText>
            
            <AnimatedText delay={0.5} className="mb-8 text-muted-foreground text-lg">
              I'm Yassine El Goumri, a structural engineer specializing in innovative design solutions 
              that prioritize safety, functionality, and sustainability.
            </AnimatedText>
            
            <AnimatedText delay={0.7}>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/projects" className="btn-outline">
                  View Projects
                </Link>
              </div>
            </AnimatedText>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3 scale-[1.02]"></div>
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
                alt="Yassine El Goumri - Structural Engineer"
                className="rounded-2xl shadow-2xl aspect-[4/5] object-cover"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 glass-panel p-4 shadow-lg animate-slide-up">
                <p className="text-xs font-medium text-gray-500">Experience</p>
                <p className="text-xl font-bold">10+ Years</p>
              </div>
              
              {/* Floating badge 2 */}
              <div className="absolute -top-6 -right-6 glass-panel p-4 shadow-lg animate-slide-up">
                <p className="text-xs font-medium text-gray-500">Projects Completed</p>
                <p className="text-xl font-bold">150+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
