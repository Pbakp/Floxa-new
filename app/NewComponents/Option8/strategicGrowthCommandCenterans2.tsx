"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnalyzingCard from "../processing-animation";

const StrategicGrowthCommandCenterAns2 = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

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

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing competitive landscape - 12 key competitors identified" },
    { text: "Processing market research data - 3 verticals analyzed" },
    { text: "Extracting win/loss insights - 67% win rate vs direct competitors" },
    { text: "Evaluating differentiation gaps - Cross-platform orchestration unique" },
    { text: "Finalizing competitive positioning - #3 in enterprise AI platforms" },
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
        description="I've conducted comprehensive competitive intelligence analysis
                   across market research, customer feedback, and win/loss data.
                   Here's your competitive positioning landscape:"
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
                  {/* Introductory Message */}




                  <div className="flex justify-end">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-[#E0E7FF] text-[#2563EB] px-3 py-1 rounded text-xs font-normal">Confluence</span>

                      <span className="  px-3 py-1 rounded text-xs font-normal">HubSpot</span>
                      <span className="  px-3 py-1 rounded text-xs font-normal">External Intel</span>
                    </div>
                  </div>
                  {/* <div
            className={`mb-6 transform transition-all duration-700 ease-out ${showFirst ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
          >
            <p className="text-gray-800 text-sm leading-relaxed">
              I&apos;ve conducted comprehensive competitive intelligence analysis
              across market research, customer feedback, and win/loss data.
              Here&apos;s your competitive positioning landscape:
            </p>
          </div> */}

                  <p className="text-gray-800 text-sm leading-relaxed mb-2">
                    I've conducted comprehensive competitive intelligence analysis
                    across market research, customer feedback, and win/loss data.
                    Here's your competitive positioning landscape:
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
                      Competitive Analysis Results:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Key Metrics */}
                      <div>
                        <p className="text-gray-800 mb-2 text-sm">
                          <span className="font-semibold text-gray-800">
                            Market Position:
                          </span>{" "}
                          #3 in enterprise AI platforms
                        </p>
                        <p className="text-gray-800 mb-2 text-sm">
                          <span className="font-semibold text-gray-800">
                            Differentiation Gap:
                          </span>{" "}
                          Cross-platform orchestration (unique)
                        </p>
                        <p className="text-gray-800 text-sm">
                          <span className="font-semibold text-gray-800">
                            Pricing Advantage:
                          </span>{" "}
                          23% better value vs competitors
                        </p>
                      </div>

                      {/* Strategic Insights */}
                      <div>
                        <p className="text-gray-800 mb-2 text-sm">
                          <span className="font-semibold text-gray-800">
                            Threat Level:
                          </span>{" "}
                          Microsoft Copilot expansion
                        </p>
                        <p className="text-gray-800 mb-2 text-sm">
                          <span className="font-semibold text-gray-800">
                            Opportunity:
                          </span>{" "}
                          Privacy-first positioning
                        </p>
                        <p className="text-gray-800 text-sm">
                          <span className="font-semibold text-gray-800">Win Rate:</span>{" "}
                          67% vs direct competitors
                        </p>
                      </div>
                    </div>
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
                  <p className=" text-purple-700 text-sm leading-relaxed">
                    I&apos;ve identified 3 critical differentiation opportunities:
                    universal platform integration, compound learning architecture, and
                    privacy-preserving analytics. Should I model how these advantages
                    translate to market share capture in your target verticals?
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

export default StrategicGrowthCommandCenterAns2;
