// components/StepComponent.tsx

import React, { useEffect, useState } from 'react';

const StepComponent: React.FC = () => {
  const [step, setStep] = useState<number>(1); // Manage the step (1 or 2)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(2); // Transition from Step 1 to Step 2 after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center bg-white">
      <div className="w-full max-w-4xl mx-auto">
        {/* Step 1 */}
        <div className={`animate-fade-in ${step >= 1 ? 'opacity-100 block' : 'opacity-0 hidden'} transition-opacity duration-1000 ease-in-out`}>
          <div className="bg-white border-l-8 border-purple-700 rounded-xl shadow-md text-sm p-3 mb-3">
            <div className="text-sm sm:text-sm text-gray-800 font-normal mb-3 leading-relaxed">
              I'll analyze our relationship with Vertex Solutions across all touchpoints. Let me gather data from support, sales, project delivery, and financial systems...
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#e0e7ff] text-[#2563eb] px-3 py-1 rounded text-xs font-medium">Dynamics CRM</span>
              <span className="bg-[#e0e7ff] text-[#2563eb] px-3 py-1 rounded text-xs font-medium">Teams</span>
              <span className="bg-[#fee2e2] text-[#dc2626] px-3 py-1 rounded text-xs font-medium">Jira</span>
              <span className="bg-[#ffedd5] text-[#ea580c] px-3 py-1 rounded text-xs font-medium">HubSpot</span>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className={`animate-fade-in ${step >= 2 ? 'opacity-100 block' : 'opacity-0 hidden'} transition-opacity duration-1000 ease-in-out`}>
          <div className="bg-white border-l-8 border-purple-700 rounded-xl shadow-md p-4 mb-3">
            <div className="text-sm sm:text-sm text-gray-800 font-normal mb-3 leading-relaxed">
              I can provide detailed analysis on several dimensions. What's your priority focus?
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button className="flex items-center gap-2 bg-[#ede9fe] px-4 py-2 rounded-md text-sm font-medium text-[#312e81] shadow-sm border-none hover:bg-[#e0e7ff] transition-all w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#312e81]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8a9 9 0 1118 0z" />
                </svg>
                <div className='text-xs'>Communication patterns</div>
              </button>
              <button className="flex items-center gap-2 bg-[#ede9fe] px-4 py-2 rounded-md text-sm font-medium text-[#312e81] shadow-sm border-none hover:bg-[#e0e7ff] transition-all w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#312e81]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 9l-3 3-3-3" />
                </svg>
                <div className='text-xs'>Project satisfaction</div>
              </button>
              <button className="flex items-center gap-2 bg-[#ede9fe] px-4 py-2 rounded-md text-sm font-medium text-[#312e81] shadow-sm border-none hover:bg-[#e0e7ff] transition-all w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#312e81]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
                </svg>
                <div className='text-xs'>Support ticket trends</div>
              </button>
              <button className="flex items-center gap-2 bg-[#ede9fe] px-4 py-2 rounded-md text-sm font-medium text-[#312e81] shadow-sm border-none hover:bg-[#e0e7ff] transition-all w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#312e81]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0h-1v4h-1" />
                </svg>
                <div className='text-xs'>Upsell opportunities</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepComponent;
