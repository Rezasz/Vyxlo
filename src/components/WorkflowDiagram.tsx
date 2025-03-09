import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WorkflowStepProps {
  title: string;
  description: string;
  isLast?: boolean;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ title, description, isLast }) => (
  <div className="flex items-center">
    <div className="flex-1">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
    {!isLast && (
      <div className="flex-shrink-0 mx-4">
        <ArrowRight className="h-6 w-6 text-blue-600" />
      </div>
    )}
  </div>
);

interface WorkflowDiagramProps {
  steps: Array<{
    title: string;
    description: string;
  }>;
}

const WorkflowDiagram: React.FC<WorkflowDiagramProps> = ({ steps }) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch space-y-4 md:space-y-0 md:space-x-4">
      {steps.map((step, index) => (
        <WorkflowStep
          key={index}
          title={step.title}
          description={step.description}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
};

export default WorkflowDiagram;