import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 8 }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`h-${size} w-${size} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Square badge background */}
      <rect width="40" height="40" rx="9" fill="currentColor" />
      {/* V chevron mark */}
      <path
        d="M 9 13 L 20 24 L 31 13"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Intelligence node at V apex */}
      <circle cx="20" cy="24" r="3" fill="white" />
      {/* Document lines */}
      <rect x="9" y="30" width="22" height="2.5" rx="1.25" fill="white" opacity="0.55" />
      <rect x="9" y="35" width="15" height="2.5" rx="1.25" fill="white" opacity="0.35" />
    </svg>
  );
};

export default Logo;
