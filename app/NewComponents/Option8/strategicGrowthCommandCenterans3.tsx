"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnalyzingCard from "../processing-animation";

const StrategicGrowthCommandCenterAns3 = () => {
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
    { text: "Analyzing customer data - CRM, support tickets, usage patterns" },
    { text: "Processing segmentation metrics - 4 customer segments identified" },
    { text: "Calculating LTV and retention - Enterprise: $2.1M, 95% retention" },
    { text: "Evaluating growth patterns - Mid-market: 40% expansion rate" },
    { text: "Finalizing segmentation strategy - Healthcare 3x faster adoption" },
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
        description="I'm analyzing customer data across CRM, support tickets, and
                   usage patterns to optimize your segmentation strategy. The results
                   reveal significant opportunities:"
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
                      <span className="  px-3 py-1 rounded text-xs font-normal">HubSpot</span>
                      <span className="bg-[#E0E7FF] text-[#2563EB] px-3 py-1 rounded text-xs font-normal">PowerBI</span>
                      <span className="bg-green-200 text-green-700 px-3 py-1 rounded text-xs font-normal">Jira</span>

                    </div>
                  </div>
                  {/* <div
            className={`mb-6 transform transition-all duration-700 ease-out ${showFirst ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
          >
            <p className="text-gray-800 text-sm leading-relaxed">
              I&apos;ve analyzed customer data across CRM, support tickets, and
              usage patterns to optimize your segmentation strategy. The results
              reveal significant opportunities:
            </p>
          </div> */}
                  <p className="text-gray-800 text-sm leading-relaxed mb-2">
                    I've analyzed customer data across CRM, support tickets, and usage patterns to optimize your segmentation strategy.
                    The results reveal significant opportunities:
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
                      Customer Segmentation Insights:
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-800 font-semibold">
                          Enterprise (1000+ employees):
                        </span>
                        <span className="text-gray-800">
                          Highest LTV ($2.1M), 95% retention
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-800 font-semibold">
                          Mid-Market (250-1000):
                        </span>
                        <span className="text-gray-800">
                          Fastest growth, 40% expansion rate
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-800 font-semibold">SMB (50-250):</span>
                        <span className="text-gray-800">
                          Price sensitive, 78% retention
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-800 font-semibold">
                          Vertical Focus:
                        </span>
                        <span className="text-gray-800">
                          Healthcare shows 3x faster adoption
                        </span>
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
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-purple-700 text-sm leading-relaxed">
                      Based on compound learning from historical patterns, I recommend
                      prioritizing mid-market healthcare and financial services for Q3-Q4
                      expansion.These segments show 67% higher conversion rates and 45%
                      faster implementation cycles. Should I model the revenue impact of
                      this segmentation shift?
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StrategicGrowthCommandCenterAns3;
