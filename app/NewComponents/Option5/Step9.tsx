// components/FinancialImpactAnalysis.tsx

import React from 'react';

const FinancialImpactAnalysis: React.FC = () => {
  return (
    <div className="w-full max-w-full p-3  border-l-6 border-purple-700 animate-fade-in">
      <h2 className="text-xl sm:text-lg text-blue-600 font-semibold mb-6">Financial Impact Analysis - Recovery vs. Loss Scenario:</h2>

      <div className="flex flex-wrap sm:flex-nowrap justify-between mb-6 gap-6">
        <div className="p-4 bg-red-100 text-red-700 rounded-lg shadow-md flex-1">
          <h3 className="text-md font-bold">Loss Scenario</h3>
          <p className="text-xs mt-2">Annual Contract Value: <span className="font-semibold">-€450K</span></p>
          <p className="text-xs mt-1">Replacement Cost: <span className="font-semibold">-€75K</span></p>
          <p className="text-xs mt-1">Reference Value Loss: <span className="font-semibold">-€200K</span></p>
          <p className="text-xs mt-2 font-semibold">Total Impact: <span className="text-red-800">-€725K</span></p>
        </div>
        
        <div className="p-4 bg-green-100 text-green-700 rounded-lg shadow-md flex-1">
          <h3 className="text-md font-bold">Recovery Investment</h3>
          <p className="text-xs mt-2">Dedicated Resources: <span className="font-semibold">€35K</span></p>
          <p className="text-xs mt-1">Infrastructure Upgrade: <span className="font-semibold">€15K</span></p>
          <p className="text-xs mt-1">Account Management: <span className="font-semibold">€10K</span></p>
          <p className="text-xs mt-2 font-semibold">Total Investment: <span className="text-green-800">€60K</span></p>
        </div>
      </div>

      <div className="text-center bg-[#e0f7fa] p-4 rounded-lg shadow-sm">
        <h4 className="font-bold text-md text-teal-600">ROI of Recovery Strategy: 1,108%</h4>
        <p className="text-xs">€665K Net Benefit vs. Loss Scenario</p>
      </div>
    </div>
  );
};

export default FinancialImpactAnalysis;
