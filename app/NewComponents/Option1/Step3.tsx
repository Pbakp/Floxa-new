// components/ProjectEnvironment.tsx
import React from 'react';

const ProjectEnvironment: React.FC = () => {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white space-y-4 animate-fade-in">
      <p>
        I've analyzed the TechCorp contract and identified the project parameters. Based on your contract terms and similar past projects, I recommend the following project setup:
      </p>
      <ol className="list-decimal list-inside space-y-1">
        <li>Create a "TechCorp Digital Transformation" project using the Enterprise Integration template</li>
        <li>Set up project workspaces in SharePoint, Confluence, and Jira with appropriate access controls</li>
        <li>Establish a project team with the required skills and availability</li>
        <li>Schedule kickoff meetings with both internal team and client stakeholders</li>
      </ol>
      <p className="pt-2 text-sm text-white/90">
        Would you like me to proceed with this setup approach, or would you prefer to customize any elements?
      </p>
    </div>
  );
};

export default ProjectEnvironment;
