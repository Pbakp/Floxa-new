"use client";

import React, { useEffect, useState } from "react";

const StrategicGrowthCommandCenterAns8c = () => {
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
    <div className="max-w-7xl mx-auto p-3 bg-white rounded-lg shadow-lg py-2">
      {/* Introduction Message */}
      <div
        className={`mb-8 transform transition-all duration-700 ease-out ${showFirst ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Strategic Command Center ROI & Business Impact
        </h2>
      </div>

      {/* KPI Cards Row */}
      <div
        className={`mb-8 transform transition-all duration-700 ease-out ${showSecond ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Annual ROI Card */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-6 text-white">
            <div className="text-4xl font-bold mb-2">850%</div>
            <div className="text-base font-semibold mb-1">Annual ROI</div>
            <div className="text-xs opacity-90">
              €8.5M strategic value vs €1M Investment
            </div>
          </div>

          {/* Months Payback Card */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white shadow-lg">
            <div className="text-4xl font-bold mb-2">1.4</div>
            <div className="text-base font-semibold mb-1">Months Payback</div>
            <div className="text-xs opacity-90">vs 6.5 month target</div>
          </div>

          {/* Strategic Maturity Card */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white shadow-lg">
            <div className="text-4xl font-bold mb-2">9.2/10</div>
            <div className="text-base font-semibold mb-1">Strategic Maturity</div>
            <div className="text-xs opacity-90">
              Advanced strategic orchestration
            </div>
          </div>

          {/* Execution Acceleration Card */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white shadow-lg">
            <div className="text-4xl font-bold mb-2">89%</div>
            <div className="text-base font-semibold mb-1">
              Execution Acceleration
            </div>
            <div className="text-xs opacity-90">
              Strategic decision to action time
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Strategic Value and Execution Metrics */}
      <div
        className={`transform transition-all duration-700 ease-out ${showThird ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Strategic Value Delivered Section */}
          <div className="bg-white rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Strategic Value Delivered
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-800">
                  Cross-Platform Strategic Intelligence
                </span>
                <span className="font-semibold text-gray-900">
                  €2.8M annually
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-800">
                  Competitive Advantage Acceleration
                </span>
                <span className="font-semibold text-gray-900">
                  €2.1M annually
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-800">
                  Operational Orchestration Efficiency
                </span>
                <span className="font-semibold text-gray-900">
                  €1.9M annually
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-800">
                  Predictive Strategic Analytics
                </span>
                <span className="font-semibold text-gray-900">
                  €1.7M annually
                </span>
              </div>

              <div className="flex justify-between items-center pt-1 border-t-2 border-gray-300">
                <span className="text-base font-bold text-gray-900">
                  Total Annual Value
                </span>
                <span className="text-xl font-bold text-gray-900">€8.5M</span>
              </div>
            </div>
          </div>

          {/* Strategic Execution Metrics Section */}
          <div className="bg-white rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Strategic Execution Metrics
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-800">
                  Strategic Decision Velocity
                </span>
                <span className="font-semibold text-green-600">
                  +340% faster
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-800">
                  Cross-Functional Alignment
                </span>
                <span className="font-semibold text-green-600">
                  +270% improvement
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-800">Market Response Speed</span>
                <span className="font-semibold text-green-600">
                  +450% faster
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-800">Strategic Risk Mitigation</span>
                <span className="font-semibold text-green-600">
                  +180% better
                </span>
              </div>

              <div className="flex justify-between items-center py-2 text-sm">
                <span className="text-gray-800 font-bold">
                  Overall Strategic Capability
                </span>
                <span className="font-semibold text-green-600">
                  +310% enhanced
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicGrowthCommandCenterAns8c;
