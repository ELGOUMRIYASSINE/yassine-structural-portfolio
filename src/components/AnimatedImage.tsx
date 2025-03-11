
import React, { useState, useEffect } from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  delay = 0 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  const imageStyle = {
    opacity: 0,
    animation: isLoaded ? `scale-in 0.8s ease-out ${delay}s forwards` : 'none',
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      {isLoaded ? (
        <img 
          src={src} 
          alt={alt} 
          style={imageStyle} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-100 animate-pulse"></div>
      )}
    </div>
  );
};
