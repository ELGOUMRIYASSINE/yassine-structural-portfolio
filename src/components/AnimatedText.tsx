
import React from 'react';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const animationStyle = {
    opacity: 0,
    animation: `fade-in 0.6s ease-out ${delay}s forwards`,
  };

  return (
    <div style={animationStyle} className={className}>
      {children}
    </div>
  );
};
