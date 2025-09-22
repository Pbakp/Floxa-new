"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnalyzingCard from "../processing-animation";

const StrategicGrowthCommandCenterAns6 = () => {
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
    { text: "Analyzing product development velocity - Healthcare compliance module Q3" },
    { text: "Evaluating resource allocation - Financial services API Q4 delivery" },
    { text: "Processing scaling requirements - 3x cloud infrastructure expansion" },
    { text: "Calculating operational efficiency - 34% improvement projected" },
    { text: "Finalizing adaptation plan - +25 specialists, global support centers" },
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
        description="I'm analyzing product development velocity, resource allocation,
                   and operational scaling requirements for your expansion strategy:"
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
                      <span className="bg-green-200 text-green-700 px-3 py-1 rounded text-xs font-normal">Jira</span>
                      <span className="bg-[#E0E7FF] text-[#2563EB] px-3 py-1 rounded text-xs font-normal">Confluence</span>
                      <span className="  px-3 py-1 rounded text-xs font-normal">Finance</span>
                    </div>
                  </div>


                  <p className="text-gray-800 text-sm leading-relaxed mb-2">
                    I've analyzed product development velocity, resource allocation, and operational scaling requirements for your
                    expansion strategy:
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
                      Product & Operations Adaptation Plan:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Product Development */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-3">
                          Product Development:
                        </h4>
                        <ul className="space-y-2">
                          <li className="text-gray-800 text-sm">
                            • Healthcare compliance module: Q3 delivery
                          </li>
                          <li className="text-gray-800 text-sm">
                            • Financial services API: Q4 delivery
                          </li>
                          <li className="text-gray-800 text-sm">
                            • Enterprise security enhancement: Q3
                          </li>
                          <li className="text-gray-800 text-sm">
                            • Development velocity: +40% with new hires
                          </li>
                        </ul>
                      </div>

                      {/* Operations Scaling */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-3">
                          Operations Scaling:
                        </h4>
                        <ul className="space-y-2">
                          <li className="text-gray-800 text-sm">
                            • Cloud infrastructure: 3x capacity expansion
                          </li>
                          <li className="text-gray-800 text-sm">
                            • Global support: EU and APAC centers
                          </li>
                          <li className="text-gray-800 text-sm">
                            • Implementation team: +25 specialists
                          </li>
                          <li className="text-gray-800 text-sm">
                            • Operational efficiency: 34% improvement
                          </li>
                        </ul>
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
                  <p className="text-purple-700 text-sm leading-relaxed">
                    Product roadmap alignment with market strategy shows 18-month
                    competitive advantage window. I can orchestrate cross-functional
                    delivery tracking and automated milestone reporting. Should I set up
                    predictive delivery analytics to ensure market timing objectives are
                    met?
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

export default StrategicGrowthCommandCenterAns6;