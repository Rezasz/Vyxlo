import React from 'react';
import { Circle } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, isLast }) => (
  <div className="relative flex items-start">
    <div className="flex h-16 items-center">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
        <span className="text-lg font-semibold">{number}</span>
      </div>
      {!isLast && (
        <div className="absolute top-12 left-6 -ml-px h-full w-0.5 bg-blue-200" aria-hidden="true" />
      )}
    </div>
    <div className="ml-6 pb-8">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  </div>
);

interface ProcessFlowProps {
  steps: Array<{
    title: string;
    description: string;
  }>;
}

const ProcessFlow: React.FC<ProcessFlowProps> = ({ steps }) => {
  return (
    <div className="flow-root">
      <div className="space-y-8">
        {steps.map((step, index) => (
          <ProcessStep
            key={index}
            number={index + 1}
            title={step.title}
            description={step.description}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessFlow;