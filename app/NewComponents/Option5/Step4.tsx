// components/StakeholderAnalysis.tsx

import React from 'react';

const StakeholderAnalysis: React.FC = () => {
  return (
  <div className="w-full max-w-full p-  3  border-purple-700   animate-fade-in">
      <h2 className="text-lg sm:text-lg text-blue-600 font-semibold mb-6">MEDDIC Stakeholder Analysis for Vertex Solutions:</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Economic Buyer */}
        <div className="p-4 bg-blue-100 text-blue-700 rounded-lg shadow-md">
          <h3 className="text-md font-bold">Economic Buyer</h3>
          <p className="text-sm mt-2">David Chen (CTO)</p>
          <p className="text-xs text-blue-600 mt-1">Concern: Technical performance, compliance</p>
        </div>

        {/* Champion */}
        <div className="p-4 bg-green-100 text-green-700 rounded-lg shadow-md">
          <h3 className="text-md font-bold">Champion</h3>
          <p className="text-sm mt-2">Sarah Martinez (IT Director)</p>
          <p className="text-xs text-green-600 mt-1">Strong advocate, needs support ammunition</p>
        </div>

        {/* User/Influencer */}
        <div className="p-4 bg-purple-100 text-purple-700 rounded-lg shadow-md">
          <h3 className="text-md font-bold">User/Influencer</h3>
          <p className="text-sm mt-2">Engineering Team</p>
          <p className="text-xs text-purple-600 mt-1">Daily users experiencing API issues</p>
        </div>

        {/* Blocker */}
        <div className="p-4 bg-red-100 text-red-700 rounded-lg shadow-md">
          <h3 className="text-md font-bold">Blocker</h3>
          <p className="text-sm mt-2">Security Team</p>
          <p className="text-xs text-red-600 mt-1">Escalating compliance concerns</p>
        </div>
      </div>
    </div>
  );
};

export default StakeholderAnalysis;
