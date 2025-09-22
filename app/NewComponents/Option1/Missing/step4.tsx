// ProjectSetupConfirmationCard.jsx
import React from 'react';

const ProjectSetupConfirmationCard = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg max-w-full space-y-4 text-sm animate-fade-in mt-4">

      <p>I’ve completed the project setup for TechCorp Digital Transformation. Here’s a summary of what’s been done:</p>

      <ul className="list-disc list-inside space-y-1">
        <li>Project team assembled: Jennifer Reeves (PM), David Kumar (ERP), Sarah Williams (Dashboard)</li>
        <li>Project plan created with phases from March to November 2025</li>
        <li>42 tasks created across 5 epics in Jira</li>
        <li>Project documentation structure set up in SharePoint and Confluence</li>
        <li>3 meetings scheduled: Internal Kickoff, Client Kickoff, and First Steering Group</li>
        <li>Risk analysis completed with 3 mitigation tasks assigned</li>
        <li>Client record updated in Dynamics CRM and HubSpot</li>
      </ul>

      <p className="text-white/90">
        All team members have been notified and the environment is ready for the kickoff on March 12. Would you like me to make any additional configurations or adjustments?
      </p>
    </div>
  );
};

export default ProjectSetupConfirmationCard;
