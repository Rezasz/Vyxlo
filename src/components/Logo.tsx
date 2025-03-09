import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 8 }) => {
  const sizeClass = `h-${size} w-${size}`;
  
  return (
    <div className={`relative inline-flex items-center justify-center ${sizeClass} ${className}`}>
      <img 
        src="/logo.svg" 
        alt="Vyxlo.com Logo" 
        className={`w-full h-full ${className}`}
      />
    </div>
  );
};

export default Logo;