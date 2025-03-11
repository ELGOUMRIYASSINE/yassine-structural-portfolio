
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedText } from './AnimatedText';
import { AnimatedImage } from './AnimatedImage';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  delay?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  category, 
  imageSrc, 
  description,
  delay = 0 
}) => {
  return (
    <AnimatedText delay={delay} className="group">
      <div className="overflow-hidden rounded-xl shadow-md transition-all duration-300 h-full bg-white group-hover:-translate-y-1 group-hover:shadow-xl">
        <div className="relative overflow-hidden aspect-video">
          <AnimatedImage 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 text-xs font-medium bg-white/80 backdrop-blur-sm text-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
          
          <Link 
            to={`/projects/${id}`} 
            className="inline-flex items-center text-sm font-medium text-primary"
          >
            View Project Details
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </AnimatedText>
  );
};
