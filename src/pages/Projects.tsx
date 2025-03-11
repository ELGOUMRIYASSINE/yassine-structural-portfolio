
import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { AnimatedText } from '../components/AnimatedText';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
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
    },
    {
      id: "4",
      title: "Mountain Villa",
      category: "Residential",
      imageSrc: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop",
      description: "Custom residential design with innovative structural solutions for challenging mountainous terrain."
    },
    {
      id: "5",
      title: "Hospital Expansion",
      category: "Healthcare",
      imageSrc: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2070&auto=format&fit=crop",
      description: "Structural design for a major hospital expansion including seismic retrofitting."
    },
    {
      id: "6",
      title: "University Research Center",
      category: "Educational",
      imageSrc: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=2070&auto=format&fit=crop",
      description: "Advanced structural engineering for a state-of-the-art research facility."
    },
    {
      id: "7",
      title: "Sports Arena",
      category: "Public",
      imageSrc: "https://images.unsplash.com/photo-1505246618476-135e39f7af22?q=80&w=2070&auto=format&fit=crop",
      description: "Long-span roof system design for a 15,000-seat multi-purpose sports arena."
    },
    {
      id: "8",
      title: "Shopping Mall",
      category: "Commercial",
      imageSrc: "https://images.unsplash.com/photo-1614055284799-9ec3ff5eae09?q=80&w=2070&auto=format&fit=crop",
      description: "Structural design for a three-story shopping mall with underground parking."
    },
    {
      id: "9",
      title: "Waterfront Condominiums",
      category: "Residential",
      imageSrc: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2076&auto=format&fit=crop",
      description: "Multi-unit residential complex with innovative foundation system for waterfront conditions."
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'Commercial', label: 'Commercial' },
    { id: 'Residential', label: 'Residential' },
    { id: 'Public', label: 'Public' },
    { id: 'Infrastructure', label: 'Infrastructure' },
    { id: 'Healthcare', label: 'Healthcare' },
    { id: 'Educational', label: 'Educational' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto">
            <AnimatedText>
              <h1 className="mb-4">My Projects</h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-muted-foreground text-lg">
                Explore my portfolio of structural engineering projects across various sectors.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-tight">
          {/* Filter Controls */}
          <AnimatedText delay={0.3} className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    activeFilter === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </AnimatedText>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                imageSrc={project.imageSrc}
                description={project.description}
                delay={0.4 + (index % 6) * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
