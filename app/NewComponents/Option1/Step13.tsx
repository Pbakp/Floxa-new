import React from "react";

const StrategicValueSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-8 text-white max-w-7xl mx-auto font-sans">
      {/* Header */}
      <div className="flex items-center mb-6">
        <svg
          className="w-6 h-6 mr-3 fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
        <h2 className="text-2xl font-bold">Floxa's Strategic Value Delivered</h2>
      </div>

      {/* Two columns */}
      <div className="flex flex-col md:flex-row justify-between mb-8">
        {/* Left column */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h3 className="text-lg font-semibold mb-3">Universal Cross-Platform Intelligence</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-100">
            <li>Direct, automated analysis across enterprise ecosystems</li>
            <li>Complete digital maturity analysis across Microsoft 365, Atlassian, and HubSpot</li>
            <li>Unified project orchestration eliminating manual system coordination</li>
          </ul>
        </div>

        {/* Right column */}
        <div className="md:w-1/2 md:pl-8">
          <h3 className="text-lg font-semibold mb-3">Intelligent Orchestration</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-100">
            <li>Automated team assembly based on skills, availability, and performance</li>
            <li>Contract intelligence extracting structured insights from documents</li>
            <li>Predictive risk analysis with proactive mitigation strategies</li>
          </ul>
        </div>
      </div>

      {/* Measurable Business Impact */}
      <div className="bg-blue-500 bg-opacity-30 rounded-lg p-6 flex flex-wrap justify-between text-center">
        {/* Item 1 */}
        <div className="flex-1 min-w-[120px] mb-4 md:mb-0">
          <h4 className="font-semibold text-lg mb-1">Measurable Business Impact</h4>
          <p className="text-4xl font-bold leading-none">97%</p>
          <p>Setup Time Reduction</p>
        </div>
        {/* Item 2 */}
        <div className="flex-1 min-w-[120px] mb-4 md:mb-0">
          <p className="text-4xl font-bold leading-none">&lt;1%</p>
          <p>Error Rate</p>
        </div>
        {/* Item 3 */}
        <div className="flex-1 min-w-[120px] mb-4 md:mb-0">
          <p className="text-4xl font-bold leading-none">92%</p>
          <p>Team Skills Match</p>
        </div>
        {/* Item 4 */}
        <div className="flex-1 min-w-[120px]">
          <p className="text-4xl font-bold leading-none">75%</p>
          <p>Risk Cost Reduction</p>
        </div>
      </div>
    </div>
  );
};

export default StrategicValueSection;
