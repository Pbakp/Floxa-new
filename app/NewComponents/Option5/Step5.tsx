// components/RiskPriorityMatrix.tsx

import React from 'react';

const RiskPriorityMatrix: React.FC = () => {
  return (
    <div className="w-full max-w-full p-3 border-purple-700   animate-fade-in">
      <h2 className="text-xl sm:text-lg text-blue-600 font-semibold mb-6">Risk Priority Matrix - Immediate Action Required:</h2>

      <div className="space-y-4">
        {/* Critical Section */}
        <div className="p-4 bg-red-100 text-red-700 rounded-lg shadow-md">
          <h3 className="text-md font-bold">CRITICAL: CTO Disengagement</h3>
          <p className="text-xs mt-2">David Chen hasn't attended meetings for 6 weeks. Risk: Contract non-renewal</p>
        </div>

        {/* High Section */}
        <div className="p-4 bg-orange-100 text-orange-700 rounded-lg shadow-md">
          <h3 className="text-md font-bold">HIGH: Support Escalation Pattern</h3>
          <p className="text-xs mt-2">3 critical tickets match pre-churn patterns from historical data</p>
        </div>

        {/* Medium Section */}
        <div className="p-4 bg-green-100 text-green-700 rounded-lg shadow-md">
          <h3 className="text-md font-bold">MEDIUM: Usage Decline</h3>
          <p className="text-xs mt-2">API calls down 23% from baseline, indicating reduced adoption</p>
        </div>
      </div>

      <div className="flex flex-col bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-lg max-w-full mx-auto mt-8">
        <div className='flex items-center '>
          <span className="text-2xl mr-4">⚠️</span>
          <span className="font-bold text-md">CRISIS INTERVENTION TRIGGERED</span>
        </div>
        <p className="text-sm">Churn risk score exceeded threshold. Emergency CTO meeting required within 48 hours.</p>
      </div>

    </div>
  );
};

export default RiskPriorityMatrix;
