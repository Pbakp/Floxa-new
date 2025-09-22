"use client";

import React, { useEffect, useState } from "react";
import { Trophy } from "lucide-react";

const StrategicGrowthCommandCenterAns8d = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFirst(true), 500);
    const timer2 = setTimeout(() => setShowSecond(true), 1000);
    const timer3 = setTimeout(() => setShowThird(true), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (

    <>
      <div className="max-w-7xl mt-6 mx-auto p-3 bg-white rounded-lg shadow-lg py-2">
        {/* Introduction Message with Trophy Icon */}
        <div
          className={`mb-8 transform transition-all duration-700 ease-out ${showFirst ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="flex items-center space-x-3">
            <Trophy className="w-6 h-6 text-gray-800" />
            <h2 className="text-2xl font-bold text-gray-900">
              Strategic Growth Command Center Outcomes
            </h2>
          </div>
        </div>

        {/* Two Column Layout */}
        <div
          className={`transform transition-all duration-700 ease-out ${showSecond ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Floxa's Strategic Value Delivered */}
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-6">
                Floxa&apos;s Strategic Value Delivered
              </h3>

              <div className="space-y-4">
                {/* Universal Cross-Platform Strategic Intelligence */}
                <div className="bg-blue-50  rounded-lg p-4">
                  <h4 className="text-base font-bold text-blue-600 mb-2">
                    Universal Cross-Platform Strategic Intelligence
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Complete strategy synthesis across Microsoft 365, Atlassian,
                    and HubSpot ecosystems enabling comprehensive market analysis,
                    competitive positioning, and customer segmentation
                    optimization
                  </p>
                </div>

                {/* Strategic Context Understanding */}
                <div className="bg-purple-50  rounded-lg p-4">
                  <h4 className="text-base font-bold text-purple-600 mb-2">
                    Strategic Context Understanding
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Business strategy alignment with organizational knowledge,
                    stakeholder relationship mapping, and market dynamics
                    consideration for optimal strategic execution
                  </p>
                </div>

                {/* Compound Learning Architecture */}
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="text-base font-bold text-green-900 mb-2">
                    Compound Learning Architecture
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Organizational memory and pattern recognition from historical
                    strategic data to inform current competitive tactics and
                    market positioning decisions
                  </p>
                </div>

                {/* Real-Time Strategic Orchestration */}
                <div className="bg-white  rounded-lg p-4">
                  <h4 className="text-base font-bold text-gray-900 mb-2">
                    Real-Time Strategic Orchestration
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Complex cross-functional workflow automation across 12+
                    platforms simultaneously for coordinated strategic execution
                    with data consistency and audit trails
                  </p>
                </div>

                {/* Privacy-Preserving Strategic Analytics */}
                <div className="bg-red-50  rounded-lg p-4">
                  <h4 className="text-base font-bold text-red-600 mb-2">
                    Privacy-Preserving Strategic Analytics
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Strategic data processing while respecting ACLs and governance
                    frameworks, maintaining compliance across enterprise systems
                    for secure strategic intelligence
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Measurable Strategic Impact */}
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-6">
                Measurable Strategic Impact
              </h3>

              <div className="space-y-6">
                {/* Strategic Execution Acceleration */}
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-16 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-blue-600 mb-2">
                      Strategic Execution Acceleration
                    </h4>
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      89% faster
                    </div>
                    <p className="text-sm text-gray-600">
                      Board strategy to execution implementation
                    </p>
                  </div>
                </div>

                {/* Cross-Functional Alignment */}
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-16 bg-green-500 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-gray-900 mb-2">
                      Cross-Functional Alignment
                    </h4>
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      270% improvement
                    </div>
                    <p className="text-sm text-gray-600">
                      Marketing, sales, product, operations coordination
                    </p>
                  </div>
                </div>

                {/* Competitive Response Speed */}
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-16 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-gray-900 mb-2">
                      Competitive Response Speed
                    </h4>
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                      450% faster
                    </div>
                    <p className="text-sm text-gray-600">
                      Market threat detection to tactical response
                    </p>
                  </div>
                </div>

                {/* Strategic Intelligence Quality */}
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-16 bg-red-500 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-gray-900 mb-2">
                      Strategic Intelligence Quality
                    </h4>
                    <div className="text-3xl font-bold text-red-600 mb-1">
                      340% better
                    </div>
                    <p className="text-sm text-gray-600">
                      Decision-making accuracy and market insights
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r mt-4 from-blue-600 to-purple-600 text-white p-6 rounded-lg ">
        <h2 className="text-lg font-bold mb-3">Strategic Growth Command Center: Complete Success</h2>
        <p className="text-blue-100 text-sm mb-6 leading-relaxed">
          Alexandra now has unprecedented strategic execution capability through Floxa's Universal Organizational
          Intelligence. The Strategic Growth Command Center provides comprehensive market analysis, competitive
          positioning, customer segmentation optimization, and cross-functional orchestration - all powered by real-time
          predictive analytics and automated strategic execution monitoring.
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-sm text-sm font-medium">
            Board Strategy Executed
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-sm text-sm font-medium">
            Competitive Advantage Secured
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-sm text-sm font-medium">
            Cross-functional Alignment Achieved
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-sm text-sm font-medium">
            Strategic Growth Accelerated
          </div>
        </div>
      </div>
    </>
  );
};

export default StrategicGrowthCommandCenterAns8d;
