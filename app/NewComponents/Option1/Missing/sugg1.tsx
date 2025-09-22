// components/Sugg1.tsx
import React from "react";
// import { FaLightbulb } from "react-icons/fa";

const Sugg1 = () => {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-500 px-6 py-4 rounded-lg shadow w-full flex gap-3">
      {/* <div className="text-purple-500 mt-1"> */}
      {/* <FaLightbulb className="text-lg" /> */}
      {/* </div> */}
      <div className="text-sm text-gray-800">
        <p className="font-semibold">Floxa - Proactive Suggestion</p>
        <p>
          I've created a competitive battlecard combining all this intelligence
          with recent win/loss data from HubSpot. I can also set up alerts for
          when competitors are mentioned in new deals or customer
          communications. Should I share this battlecard with the sales team?
        </p>
      </div>
    </div>
  );
};

export default Sugg1;
