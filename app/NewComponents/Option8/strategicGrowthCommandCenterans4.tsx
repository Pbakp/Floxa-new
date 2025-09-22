"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnalyzingCard from "../processing-animation";

const StrategicGrowthCommandCenterAns4 = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFirst(true), 500);
    const timer2 = setTimeout(() => setShowSecond(true), 1000);
    const timer3 = setTimeout(() => setShowThird(true), 1500);
    const timer4 = setTimeout(() => setShowFourth(true), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Monitoring market signals - 35% deal overlap with Microsoft Copilot" },
    { text: "Analyzing win/loss patterns - Salesforce Einstein targeting our segments" },
    { text: "Processing strategic intelligence - 3 well-funded startups identified" },
    { text: "Evaluating competitive threats - Aggressive enterprise bundling detected" },
    { text: "Finalizing defense strategy - Privacy-first positioning recommended" },
  ], []);

  const handleBuildRepeatComplete = useCallback(() => {
    // Show dashboard first
    setShowDashboard(true);

    // Show sections with staggered delays for smooth animation
    setTimeout(() => setShowFirst(true), 300);
    setTimeout(() => setShowSecond(true), 600);
    setTimeout(() => setShowThird(true), 900);
    setTimeout(() => setShowFourth(true), 1200);

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
        description="I'm conducting comprehensive competitive threat analysis by
                   monitoring market signals, analyzing win/loss patterns, and processing
                   strategic intelligence from customer conversations:"
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

                  <div className="flex justify-end">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="  px-3 py-1 rounded text-xs font-normal">Market Intel</span>
                      <span className="  px-3 py-1 rounded text-xs font-normal">Sales Data</span>
                      <span className="bg-[#E0E7FF] text-[#2563EB] px-3 py-1 rounded text-xs font-normal">Teams</span>


                    </div>
                  </div>
                  {/* <div
            className={`mb-6 transform transition-all duration-700 ease-out ${showFirst ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
          >
            <p className="text-gray-800 text-sm leading-relaxed">
              I&apos;ve conducted comprehensive competitive threat analysis by
              monitoring market signals, analyzing win/loss patterns, and processing
              strategic intelligence from customer conversations:
            </p>
          </div> */}
                  <p className="text-gray-800 text-sm leading-relaxed mb-2">
                    I've conducted comprehensive competitive threat analysis by monitoring market signals, analyzing win/loss patterns,
                    and processing strategic intelligence from customer conversations:
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
                  <div className="bg-white border-l-4 border-red-500 p-3 rounded-lg shadow-sm">
                    <h3 className="text-base font-bold text-red-700 mb-4">
                      Critical Competitive Threats:
                    </h3>
                    <ul className="space-y-2">
                      <li className="text-gray-800 text-sm">
                        <span className="font-semibold text-gray-800">
                          • Microsoft Copilot:
                        </span>{" "}
                        35% deal overlap, aggressive enterprise bundling strategy
                      </li>
                      <li className="text-gray-800 text-sm">
                        <span className="font-semibold text-gray-800">
                          • Salesforce Einstein:
                        </span>{" "}
                        CRM integration advantage, targeting our


                      </li>
                      <li className="text-gray-800 text-sm">
                        <span className="font-semibold text-gray-800">
                          • New Entrant Risk:
                        </span>{" "}
                        3 well-funded startups in adjacent AI

                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showThird && (
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
                  <div className="bg-white border-l-4 border-green-500 p-3 rounded-lg shadow-sm">
                    <h3 className="text-base font-bold text-green-700 mb-4">
                      Defensive Strategy Recommendations:
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="text-gray-800 text-sm">
                        <span className="font-semibold text-gray-800">
                          • Technical Moat:
                        </span>{" "}
                        Accelerate cross-platform orchestration

                      </li>
                      <li className="text-gray-800 text-sm">
                        <span className="font-semibold text-gray-800">
                          • Customer Lock-in:
                        </span>{" "}
                        Deepen integration complexity, increase

                      </li>
                      <li className="text-gray-800 text-sm">
                        <span className="font-semibold text-gray-800">
                          • Market Positioning:
                        </span>{" "}
                        Privacy-first messaging vs. big tech

                      </li>
                      <li className="text-gray-800 text-sm">
                        <span className="font-semibold text-gray-800">
                          • Partnership Strategy:
                        </span>{" "}
                        Atlassian deeper integration to counter

                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showFourth && (
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
                    I recommend implementing a competitive defense program with automated
                    threat monitoring and rapid response protocols. Should I create
                    competitive battle cards for your sales team and set up real-time
                    competitive intelligence alerts?
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

export default StrategicGrowthCommandCenterAns4;
