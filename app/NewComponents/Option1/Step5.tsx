// components/CandidateProfile.tsx
import React from 'react';

const CandidateProfile: React.FC = () => {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white space-y-4 animate-fade-in">
      <div className="bg-white/10 p-4 rounded-lg">
        <p className="font-semibold text-white">David Kumar – ERP Specialist (Senior)</p>
        <p><span className="font-semibold">Skills:</span> ERP Integration (Expert), API Development (Advanced), Data Migration (Expert), Finance Module (Advanced)</p>
        <p><span className="font-semibold">Past Projects:</span> GlobalTech ERP Migration, FinanceCore Integration, AutoSys Digital Transformation</p>
        <p><span className="font-semibold">Availability:</span> Available from March 15, 2025 (currently finishing AutoSys project)</p>
        <p><span className="font-semibold">Recent Performance:</span> 4.8/5.0 (based on last 3 project evaluations)</p>
      </div>
      <p className="text-sm text-white/90">
        David appears to be a strong match based on his experience with similar digital transformation projects and expertise in ERP integration.
      </p>
    </div>
  );
};

export default CandidateProfile;
