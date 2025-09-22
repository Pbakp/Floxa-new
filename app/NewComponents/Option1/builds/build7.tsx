// components/Step7.tsx
'use client';

import React from 'react';
import { FaCog, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import { FiLink2 } from 'react-icons/fi';
// import { BsTeams } from 'react-icons/bs';

const Step7 = () => {
  return (
    <div className="bg-white px-6 py-4 rounded-lg shadow w-full mx-auto mt-4">
      <div className="flex items-center gap-2 mb-3">
        <FaCog className="text-gray-400 text-sm" />
        <h2 className="text-sm font-semibold text-gray-600">
          Behind the Scenes: Final Cross-Platform Integration
        </h2>
      </div>

      <p className="text-gray-600 text-sm mb-3">
        For the final confirmation, Floxa:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
        {/* Left Column */}
        <ul className="space-y-1">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xs" />
            Verifies all components are set up across all systems
          </li>
          <li className="flex items-center gap-2">
            <FaShieldAlt className="text-blue-500 text-xs" />
            Confirms permissions and access rights in all platforms
          </li>
          <li className="flex items-center gap-2">
            <span className="text-xs bg-blue-700 rounded-md px-2 py-0.5 text-white">Teams</span>
            Sends notifications to team members
          </li>
        </ul>

        {/* Right Column */}
        <ul className="space-y-1">
          <li className="flex items-center gap-2">
            <span className="text-xs bg-blue-500 rounded-md px-2 py-0.5 text-white">Dynamics</span>
            Updates project status
          </li>
          <li className="flex items-center gap-2">
            <span className="text-xs bg-red-500 rounded-md px-2 py-0.5 text-white">HubSpot</span>
            Updates client engagement records
          </li>
          <li className="flex items-center gap-2">
            <FiLink2 className="text-purple-500 text-sm" />
            Creates cross-reference links between systems
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Step7;
