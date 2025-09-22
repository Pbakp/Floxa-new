// components/ProjectPlanStep.tsx
import React from 'react';

const ProjectPlanStep = () => {
  return (
    <div className="space-y-4 animate-fade-in">

      {/* Chat Bubble */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg p-6 shadow-md max-w-full">
        <p className="text-sm">
          I've confirmed the team selections. Would you like me to generate a project plan based on the contract requirements and our standard methodology for digital transformation projects?
        </p>
      </div>
    </div>
  );
};

export default ProjectPlanStep;
