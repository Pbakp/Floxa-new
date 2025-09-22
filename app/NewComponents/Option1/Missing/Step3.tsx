// RiskAnalysisCard.jsx
import React from 'react';

const RiskAnalysisCard = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg max-w-full space-y-4 text-sm animate-fade-in">
      <p>
        I’ve analyzed potential risks for the TechCorp Digital Transformation project based on contract terms, similar past projects, and team composition. Here are the key risks identified:
      </p>

      <div className="space-y-1">
        <p><span className="font-bold">High Risk:</span> Integration with TechCorp’s legacy ERP system (mentioned in contract section 4.2)</p>
        <p><span className="font-bold">Medium Risk:</span> Dashboard development timeline overlaps with Sarah’s part-time availability</p>
        <p><span className="font-bold">Medium Risk:</span> Compliance requirements for GDPR may require additional documentation</p>
        <p><span className="font-bold">Low Risk:</span> Client stakeholder changes (based on HubSpot stability records)</p>
      </div>

      <div>
        <p className="italic">I recommend the following mitigation strategies:</p>
        <ol className="list-decimal list-inside space-y-1 mt-1">
          <li>Schedule early technical discovery session with TechCorp’s IT team to assess ERP integration complexity</li>
          <li>Add 20% buffer to Dashboard development phase or consider backup resource</li>
          <li>Engage legal compliance team by April 1 to review GDPR requirements</li>
        </ol>
      </div>

      <p className="text-white/90">
        Would you like me to add these risks and mitigation strategies to the project documentation and create associated tasks?
      </p>
    </div>
  );
};

export default RiskAnalysisCard;
