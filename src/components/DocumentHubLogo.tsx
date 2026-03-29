import React from 'react';
import { FileStack, CircleDot } from 'lucide-react';

interface DocumentHubLogoProps {
  className?: string;
  size?: number;
}

const DocumentHubLogo: React.FC<DocumentHubLogoProps> = ({ className = '', size = 8 }) => {
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <FileStack 
        className={`h-${size} w-${size} text-gold`}
        strokeWidth={1.5}
      />
      <CircleDot 
        className={`absolute -top-1 -right-1 h-${Math.max(3, size-5)} w-${Math.max(3, size-5)} text-gold-dark`}
        strokeWidth={2}
      />
    </div>
  );
};

export default DocumentHubLogo;