
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { AnimatedText } from './AnimatedText';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0 
}) => {
  return (
    <AnimatedText delay={delay} className="group">
      <div className="glass-panel p-6 h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        <div className="p-4 rounded-full bg-primary/10 w-fit mb-5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </AnimatedText>
  );
};
