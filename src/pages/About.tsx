
import React from 'react';
import { Layout } from '../components/Layout';
import { AboutSection } from '../components/AboutSection';
import { Building, Users, Clock, Award } from 'lucide-react';
import { AnimatedText } from '../components/AnimatedText';
import { AnimatedImage } from '../components/AnimatedImage';

const About = () => {
  const stats = [
    {
      icon: Building,
      value: "150+",
      label: "Projects Completed"
    },
    {
      icon: Users,
      value: "80+",
      label: "Satisfied Clients"
    },
    {
      icon: Clock,
      value: "10+",
      label: "Years Experience"
    },
    {
      icon: Award,
      value: "15",
      label: "Industry Awards"
    }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto">
            <AnimatedText>
              <h1 className="mb-4">About Me</h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-muted-foreground text-lg">
                Learn more about my experience, expertise, and passion for structural engineering.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedText key={index} delay={0.2 + index * 0.1} className="text-center">
                <div className="flex flex-col items-center">
                  <stat.icon className="h-8 w-8 mb-3 text-white/80" />
                  <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedText>
                <h2 className="text-3xl font-semibold mb-4">My Philosophy</h2>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <p className="text-muted-foreground mb-4">
                  My engineering philosophy centers on three key principles: safety, innovation, and sustainability. Every project begins with ensuring the utmost safety and reliability of the structure.
                </p>
                <p className="text-muted-foreground mb-4">
                  Beyond meeting code requirements, I strive to find innovative solutions that enhance functionality, reduce costs, and create structures that stand out. This innovation doesn't come at the expense of our planet - I'm committed to implementing sustainable practices in every project.
                </p>
                <p className="text-muted-foreground">
                  My approach is collaborative - I work closely with architects, contractors, and clients to ensure the structural system complements the overall design vision while meeting technical requirements.
                </p>
              </AnimatedText>
            </div>
            <div>
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1471877325906-aee7c2240b5f?q=80&w=2070&auto=format&fit=crop" 
                alt="Engineering Philosophy"
                className="rounded-2xl shadow-xl"
                delay={0.3}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
