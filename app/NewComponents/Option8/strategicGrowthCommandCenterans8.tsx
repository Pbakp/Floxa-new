"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { CheckCircle } from "lucide-react";
import { FaCheckCircle, FaCheckSquare } from "react-icons/fa";
import AnalyzingCard from "../processing-animation";
import StrategicGrowthCommandCenterAns8c from "./strategicGrowthCommandCenterans8c";
import StrategicGrowthCommandCenterAns8b from "./strategicGrowthCommandCenterans8b";
import StrategicGrowthCommandCenterAns8d from "./strategicGrowthCommandCenterans8d";

const StrategicGrowthCommandCenterAns8 = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);
  const [show8b, setShow8b] = useState(false);
  const [show8c, setShow8c] = useState(false);
  const [show8d, setShow8d] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFirst(true), 500);
    const timer2 = setTimeout(() => setShowSecond(true), 1000);
    const timer3 = setTimeout(() => setShowThird(true), 1500);
    const timer4 = setTimeout(() => setShowFourth(true), 2000);
    const timer5 = setTimeout(() => setShow8b(true), 2500);
    const timer6 = setTimeout(() => setShow8c(true), 3000);
    const timer7 = setTimeout(() => setShow8d(true), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }, []);

  // Memoize the steps array to prevent recreation on every render
  // Steps reflect context from all 8 series components
  const steps = useMemo(() => [
    { text: "Analyzing board deck strategy - 12 strategic initiatives identified" },
    { text: "Processing competitive intelligence - 35% deal overlap with Microsoft Copilot" },
    { text: "Evaluating customer segmentation - Enterprise: $2.1M LTV, 95% retention" },
    { text: "Calculating growth analytics - 850% annual ROI, 1.4 months payback" },
    { text: "Finalizing command center - Cross-platform orchestration complete" },
  ], []);

  const handleBuildRepeatComplete = useCallback(() => {
    // Show dashboard first
    setShowDashboard(true);

    // Show dashboard value section after a delay
    setTimeout(() => {
      setShowDashboardValue(true);
    }, 500);
  }, []);

  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'm configuring your CEO Strategic Intelligence System with comprehensive
                   monitoring and proactive insights across all strategic growth components:"
      />
      {showDashboard && (
        <>
          {showFirst && (
            <div className="max-w-7xl mx-auto mb-6 flex flex-col gap-6">


              <div className="flex justify-end">
                <div className="flex flex-wrap gap-2 mb-4">

                  <span className="bg-[#E0E7FF] text-[#2563EB] px-3 py-1 rounded text-xs font-normal">Teams</span>

                  <span className="bg-purple-200 text-purple-700 px-3 py-1 rounded text-xs font-normal">Ai Analytics</span>
                  <span className="bg-green-200 text-green-700 px-3 py-1 rounded text-xs font-normal">Alerts</span>
                </div>
              </div>
              <div className=" mx-auto p-3 bg-white rounded-lg shadow-lg">
                {/* Introduction Message */}
                <div
                  className={`mb-6 transform transition-all duration-700 ease-out ${showFirst ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                >
                  <p className="text-gray-800 text-sm leading-relaxed">
                    Absolutely! I&apos;ve configured your CEO Strategic Intelligence
                    System with comprehensive monitoring and proactive insights:
                  </p>
                </div>

                {/* Strategic Alert System Section */}
                <div
                  className={`mb-6 transform transition-all duration-700 ease-out ${showSecond ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                >
                  <div className="bg-white border-l-4 border-green-500 p-3 rounded-lg shadow-sm">
                    <h3 className="text-base font-bold text-green-700 mb-4">
                      Strategic Alert System Activated:
                    </h3>
                    <ul className="space-y-3 list-disc list-inside">
                      <li className="text-gray-800 text-sm">
                        <span className="text-sm font-semibold text-gray-800">
                          Competitive Threats:
                        </span>{" "}
                        Real-time monitoring of competitor moves, market signals
                      </li>
                      <li className="text-gray-800 text-sm">
                        <span className="text-sm font-semibold text-gray-800">
                          Market Opportunities:
                        </span>{" "}
                        New vertical expansion signals, partnership opportunities
                      </li>
                      <li className="text-gray-800 text-sm">
                        <span className="text-sm font-semibold text-gray-800">
                          Operational Risks:
                        </span>{" "}
                        Resource constraints, delivery timeline risks, quality issues
                      </li>
                      <li className="text-gray-800 text-sm">
                        <span className="text-sm font-semibold text-gray-800">
                          Financial Triggers:
                        </span>{" "}
                        Burn rate changes, revenue forecast adjustments, cash flow alerts
                      </li>
                      <li className="text-gray-800 text-sm">
                        <span className="text-sm font-semibold text-gray-800">
                          Strategic Milestones:
                        </span>{" "}
                        OKR progress, initiative completions, dependency risks
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CEO Strategic Briefing Configuration */}
                <div
                  className={`mb-6 transform transition-all duration-700 ease-out ${showThird ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                >
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <div className="flex items-start space-x-1">
                      <FaCheckSquare className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-blue-800 text-sm  leading-relaxed">
                          Weekly CEO Strategic Briefing configured for Mondays 8 AM in
                          Teams
                        </p>
                        <p className="text-blue-800 text-sm -ms-7 ">
                          Including: Growth metrics, competitive intelligence, strategic
                          initiative progress, predictive forecasts, and recommended
                          actions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Summary */}
                <div
                  className={`transform transition-all duration-700 ease-out ${showFourth ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                >
                  <p className="text-purple-700 text-sm ">
                    Your Strategic Growth Command Center is now live with predictive
                    intelligence, cross-functional orchestration, and automated strategic
                    execution tracking. The system will continuously learn from patterns
                    and optimize recommendations as your strategy evolves.
                  </p>
                </div>
              </div>

              {show8b && (
                <div className="transform transition-all duration-700 ease-out">
                  <StrategicGrowthCommandCenterAns8b />
                </div>
              )}
              {show8c && (
                <div className="transform transition-all duration-700 ease-out">
                  <StrategicGrowthCommandCenterAns8c />
                </div>
              )}
              {show8d && (
                <div className="transform transition-all duration-700 ease-out">
                  <StrategicGrowthCommandCenterAns8d />
                </div>
              )}

            </div>
          )}


        </>

      )}
    </>
  );

}
export default StrategicGrowthCommandCenterAns8;


