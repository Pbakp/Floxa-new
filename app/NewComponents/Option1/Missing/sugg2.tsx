// components/Sugg2.tsx
import React from "react";
// import { FaLightbulb } from "react-icons/fa";

const Sugg2 = () => {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-500  px-6 py-4 rounded-lg shadow w-full flex gap-3">
      {/* <div className="text-purple-500 mt-1">
        <FaLightbulb className="text-lg" />
      </div> */}
      <div className="text-sm text-gray-800">
        <p className="font-semibold">Floxa - Proactive Suggestion</p>
        <p>
          I can schedule a 30-minute Analytics overview meeting with Michael for
          tomorrow and prepare a briefing document with recent customer feedback
          from HubSpot and support tickets from Jira. Should I also invite James
          to provide the customer perspective?
        </p>
      </div>
    </div>
  );
};

export default Sugg2;
