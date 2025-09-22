// components/RecoveryTimeline.tsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Data for the chart
const data = [
  { name: "Week 1", health: 3, churn: 9 },
  { name: "Week 2", health: 4, churn: 8.5 },
  { name: "Week 3", health: 5, churn: 8 },
  { name: "Week 4", health: 6, churn: 7 },
  { name: "Week 5", health: 7, churn: 6 },
  { name: "Week 6", health: 8, churn: 5 },
  { name: "Week 7", health: 9, churn: 4 },
  { name: "Week 8", health: 9, churn: 3 },
  { name: "Week 9", health: 9, churn: 2 },
  { name: "Week 10", health: 9, churn: 1 },
  { name: "Week 11", health: 9, churn: 0.5 },
  { name: "Week 12", health: 9, churn: 0 },
];

const RecoveryTimeline: React.FC = () => {
  return (
    <div className="w-full max-w-full mx-auto p-3 border-l-6 border-purple-700 animate-fade-in">
      <h2 className="text-xl sm:text-lg text-blue-600 font-semibold mb-6">
        Recovery Timeline Forecast Based on Historical Patterns:
      </h2>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="health" stroke="#4CAF50" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="churn" stroke="#FF4D4D" />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-6 flex justify-between gap-4">
        <div className="p-4 bg-yellow-100  border-l-6 border-yellow-600 text-yellow-700 rounded-lg shadow-md w-full sm:w-1/3">
          <h3 className="font-bold text-md">Week 1-2: Stabilization</h3>
          <ul className="mt-2 text-xs">
            <li>Critical issues resolved</li>
            <li>CTO engagement restored</li>
          </ul>
        </div>

        <div className="p-4 bg-blue-100 text-blue-700 border-l-6 border-blue-600 rounded-lg shadow-md w-full sm:w-1/3 mt-4 sm:mt-0">
          <h3 className="font-bold text-md">Week 3-6: Recovery</h3>
          <ul className="mt-2 text-xs">
            <li>SLA compliance restored</li>
            <li>Trust rebuilding phase</li>
          </ul>
        </div>

        <div className="p-4 bg-green-100 text-green-700 border-l-6 border-green-600 rounded-lg shadow-md w-full sm:w-1/3 mt-4 sm:mt-0">
          <h3 className="font-bold text-md">Week 7-12: Growth</h3>
          <ul className="mt-2 text-xs">
            <li>Expansion discussions</li>
            <li>Reference case status</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecoveryTimeline;
