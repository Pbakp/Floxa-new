"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnalyzingCard from "../processing-animation";

const StrategicGrowthCommandCenterAns1 = () => {
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

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing board deck strategy - 12 strategic initiatives identified" },
    { text: "Extracting revenue targets - 40% YoY growth to $119M ARR" },
    { text: "Mapping market expansion - Healthcare, Financial Services, Manufacturing" },
    { text: "Reviewing product roadmap - 3 new AI modules, enterprise scaling" },
    { text: "Finalizing growth plan - 450→650 headcount, global expansion" },
  ], []);

  const handleBuildRepeatComplete = useCallback(() => {
    // Show dashboard first
    setShowDashboard(true);

    // Show sections with staggered delays for smooth animation
    setTimeout(() => setShowFirst(true), 300);
    setTimeout(() => setShowSecond(true), 600);
    setTimeout(() => setShowThird(true), 900);

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
        description=" I&apos;ll analyze your board deck strategy and create an executable
                  growth plan with comprehensive monitoring across all platforms. Let me
                  parse your strategy documents and extract key growth initiatives."
      />
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            className="mx-auto p-3 bg-white rounded-lg"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
          >
            <AnimatePresence>
              {showFirst && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2
                  }}
                >
                  {/* Introduction Message */}

                  <div className="flex justify-end">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-[#E0E7FF] text-[#2563EB] px-3 py-1 rounded text-xs font-normal">Teams</span>
                      <span className="bg-green-200 text-green-700 px-3 py-1 rounded text-xs font-normal">SharePoint</span>
                      <span className="  px-3 py-1 rounded text-xs font-normal">HubSpot</span>
                    </div>
                  </div>
                  {/* <div
                className={`mb-6 transform transition-all duration-700 ease-out ${showFirst ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
              >
                <p className="text-gray-800 text-sm leading-relaxed">
                  I&apos;ll analyze your board deck strategy and create an executable
                  growth plan with comprehensive monitoring across all platforms. Let me
                  parse your strategy documents and extract key growth initiatives.
                </p>
              </div> */}
                  <p className="text-gray-800 text-sm leading-relaxed mb-2">
                    I've analyzed your board deck strategy and create an executable growth plan with comprehensive monitoring across all
                    platforms. Let me parse your strategy documents and extract key growth initiatives
                  </p>

                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showSecond && (
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1
                  }}
                >
                  <div className="bg-white border-l-4 border-purple-500 p-3 rounded-lg shadow-sm">
                    <h3 className="text-base font-bold text-gray-900 mb-4">
                      Strategy Analysis Complete:
                    </h3>
                    <ul className="space-y-2">
                      <li className="text-gray-800 text-sm">
                        <span className="font-semibold text-sm text-gray-800">
                          • Revenue Growth:{" "}
                        </span>
                        40% YoY target ($119M ARR by EOY)
                      </li>
                      <li className="text-gray-800 text-sm">
                        <span className="font-semibold text-sm text-gray-800">
                          {" "}
                          • Market Expansion:
                        </span>
                        Healthcare, Financial Services, Manufacturing verticals
                      </li>
                      <li className="text-gray-800 text-sm">
                        <span className="font-semibold text-sm text-gray-800">
                          {" "}
                          • Product Strategy:
                        </span>
                        3 new AI modules, enterprise platform scaling
                      </li>
                      <li className="text-gray-800 text-sm">
                        <span className="font-semibold text-sm text-gray-800">
                          {" "}
                          • Operational Excellence:
                        </span>
                        450→650 headcount, global expansion
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showThird && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1
                  }}
                >
                  <p className="text-purple-700 text-sm leading-relaxed">
                    I`&apos;ve identified 12 strategic initiatives from your board deck.
                    Should I map these to measurable OKRs with cross-system tracking and
                    assign owners across your leadership team?
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StrategicGrowthCommandCenterAns1;
