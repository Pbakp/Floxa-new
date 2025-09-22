// components/Step1.tsx
import React, { useEffect, useState } from 'react';
import { FaBrain } from 'react-icons/fa';

const Step1 = () => {
  const [showContent, setShowContent] = useState(true);

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl px-6 py-4 w-full max-w-full animate-fade-in">
      <div className="flex items-start gap-3">
        <div>
          <p>
            Congratulations on winning TechCorp! I can help you set up the project environment based on the contract details. Would you like me to analyze the contract and recommend a project setup approach?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step1;
// Add this to your global CSS (e.g., app/globals.css) if not present:
// @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
// .animate-fade-in { animation: fade-in 0.7s cubic-bezier(0.4,0,0.2,1); }
