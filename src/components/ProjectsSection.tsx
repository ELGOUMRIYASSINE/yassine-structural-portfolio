
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { AnimatedText } from './AnimatedText';

export const ProjectsSection: React.FC = () => {
  const featuredProjects = [
    {
      id: "1",
      title: "High-Rise Office Tower",
      category: "Commercial",
      imageSrc: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2070&auto=format&fit=crop",
      description: "Structural design for a 40-story office tower with innovative lateral force resisting system."
    },
    {
      id: "2",
      title: "Cultural Center",
      category: "Public",
      imageSrc: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2070&auto=format&fit=crop",
      description: "Award-winning concrete shell structure for a contemporary arts center."
    },
    {
      id: "3",
      title: "Suspension Bridge",
      category: "Infrastructure",
      imageSrc: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=2070&auto=format&fit=crop",
      description: "Design and project management for a 500-meter pedestrian suspension bridge."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <AnimatedText>
              <h2 className="text-3xl font-semibold md:text-4xl mb-3">Featured Projects</h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-muted-foreground max-w-2xl">
                A selection of my most significant structural engineering projects showcasing innovation and technical excellence.
              </p>
            </AnimatedText>
          </div>
          
          <AnimatedText delay={0.3}>
            <Link to="/projects" className="mt-4 md:mt-0 inline-flex items-center font-medium text-primary">
              View All Projects
              <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              imageSrc={project.imageSrc}
              description={project.description}
              delay={0.3 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
