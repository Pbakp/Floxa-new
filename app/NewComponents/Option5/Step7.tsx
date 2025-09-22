// components/ReferenceCases.tsx

import React from 'react';

const ReferenceCases: React.FC = () => {
  return (
    <div className="w-full max-w-full border-l-6 border-purple-700  p-3  animate-fade-in">
      <h2 className="text-xl sm:text-lg text-blue-600 font-semibold mb-6">Reference Cases for Relationship Recovery:</h2>

      <div className="space-y-4">
        {/* TechFlow Recovery */}
        <div className="p-4 bg-green-100 text-green-700 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">TechFlow Solutions Recovery (2023)</h3>
          <p className="text-md mt-2">Similar API issues, CTO disengagement. 6-week recovery plan resulted in:</p>
          <ul className="mt-2 text-sm">
            <li  className='text-xs'>40% contract expansion within 4 months</li>
            <li  className='text-xs'>CTO became public reference customer</li>
            <li  className='text-xs'>98% uptime achieved consistently</li>
          </ul>
        </div>

        {/* FinanceCore Partnership */}
        <div className="p-4 bg-blue-100 text-blue-700 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">FinanceCore Partnership (2022)</h3>
          <p className="text-md mt-2">Performance issues led to contract risk. Dedicated support approach:</p>
          <ul className="mt-2 text-sm">
            <li className='text-xs'>Technical architect assignment</li>
            <li  className='text-xs'>Weekly executive reviews</li>
            <li className='text-xs'>Result: 3-year contract renewal + €200K expansion</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReferenceCases;
