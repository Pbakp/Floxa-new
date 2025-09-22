// components/Sugg3.tsx
import React from "react";
// import { FaLightbulb } from 'react-icons/fa';

const Sugg3 = () => {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-500  px-6 py-4 rounded-lg shadow w-full flex gap-3">
      {/* <div className="text-purple-500 mt-1">
        <FaLightbulb className="text-lg" />
      </div> */}
      <div className="text-sm text-gray-800">
        <p className="font-semibold">Floxa - Proactive Suggestion</p>
        <p>
          I noticed there's a Teams discussion from last week about potential
          5–8% pricing increases for Q3. The pricing committee meets June 15th.
          Would you like me to prepare a summary of these upcoming changes and
          set up a briefing with Ryan Fisher?
        </p>
      </div>
    </div>
  );
};

export default Sugg3;
