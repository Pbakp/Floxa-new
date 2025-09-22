import React from "react";

const DashboardValueSection = () => {
  return (
    <div className="p-8 space-y-8 bg-white rounded-lg shadow-md w-full font-sans">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row w-full md:space-x-8 justify-between">
        {/* Risk Mitigation Value */}
        <div className="bg-yellow-50 rounded-lg p-6 w-full md:w-1/2">
          <h3 className="font-semibold mb-4 text-yellow-800 text-lg">
            Risk Mitigation Value
          </h3>
          <ul className="text-yellow-800 list-disc list-inside mb-4 space-y-2">
            <li>Proactive identification of high-risk ERP integration challenges</li>
            <li>Early scheduling of technical discovery sessions</li>
            <li>Resource buffer planning for critical path activities</li>
            <li>Compliance requirement identification before development begins</li>
          </ul>
          <p className="text-yellow-800 text-sm opacity-80">
            Studies show identifying risks early reduces remediation costs by up to 75% and improves project success rates by 30%
          </p>
        </div>

        {/* Team Optimization Value */}
        <div className="bg-purple-100 rounded-lg p-6 w-full md:w-1/2 mt-6 md:mt-0">
          <h3 className="font-semibold mb-4 text-purple-700 text-lg">
            Team Optimization Value
          </h3>
          <ul className="text-purple-700 list-disc list-inside mb-4 space-y-2">
            <li>92% average skill match vs. 70% with manual assignment</li>
            <li>Team members with relevant experience on similar projects</li>
            <li>Availability optimization prevents overallocation</li>
            <li>Historical performance data informs selection</li>
          </ul>
          <p className="text-purple-700 text-sm opacity-80">
            Research indicates optimal team composition can improve project delivery times by 20-30% and customer satisfaction scores by 25%
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row md:space-x-12 justify-between w-full">

        {/* Left column */}
        <div className="flex-1 grid grid-cols-1 gap-4 w-full">
          <div className="bg-red-50 rounded-lg text-red-700 p-3 w-full">
            <p className="text-sm mb-0">Traditional Project Setup</p>
            <h4 className="font-bold text-xl leading-tight mb-0">Time Efficiency Gains</h4>
            <p className="font-extrabold text-2xl">3-5 Days</p>
          </div>
          <div className="bg-green-50 rounded-lg text-green-700 p-3 w-full">
            <p className="text-sm mb-2">With Floxa</p>
            <h4 className="font-bold text-xl leading-tight mb-0 invisible">&nbsp;</h4>
            <p className="font-extrabold text-2xl">30-45 Minutes</p>
          </div>
          <div className="bg-blue-100 rounded-lg text-blue-700 font-bold flex flex-col justify-center items-center text-center p-3 w-full">
            <p className="text-lg mb-0">97% reduction</p>
            <p className="text-sm">in project setup time</p>
          </div>
        </div>

        {/* Right column */}
        <div className="flex-1 grid grid-cols-1 gap-4 w-full mt-8 md:mt-0">
          <div className="bg-red-50 rounded-lg text-red-700 p-3 w-full">
            <p className="text-sm mb-0">Manual Process Error Rate</p>
            <h4 className="font-bold text-xl leading-tight mb-0">Error Reduction & Consistency</h4>
            <p className="font-extrabold text-2xl">~15%</p>
          </div>
          <div className="bg-green-50 rounded-lg text-green-700 p-3 w-full">
            <p className="text-sm mb-2">With Floxa Error Rate</p>
            <h4 className="font-bold text-xl leading-tight mb-0 invisible">&nbsp;</h4>
            <p className="font-extrabold text-2xl">&lt;1%</p>
          </div>
          <div className="bg-blue-100 rounded-lg text-blue-700 flex items-center text-center p-3 w-full">
            <p className="leading-relaxed mb-0">
              Eliminates inconsistencies between systems that cause downstream issues
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardValueSection;
