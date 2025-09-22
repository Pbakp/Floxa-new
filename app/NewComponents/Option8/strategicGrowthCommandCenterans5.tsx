"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnalyzingCard from "../processing-animation";

const StrategicGrowthCommandCenterAns5 = () => {
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
    { text: "Analyzing cross-functional performance - Marketing and Operations data" },
    { text: "Evaluating alignment strategies - Healthcare vertical focus identified" },
    { text: "Calculating budget reallocation - 35% to healthcare content" },
    { text: "Optimizing CAC metrics - 23% improvement projected" },
    { text: "Finalizing scaling plan - +15 specialists, 40% faster deployment" },
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
        description="I'm analyzing cross-functional performance data and identifying
                   optimal alignment strategies for each department to support your
                   market expansion:"
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
                      <span className="  px-3 py-1 rounded text-xs font-normal">HubSpot</span>
                      <span className="bg-[#E0E7FF] text-[#2563EB] px-3 py-1 rounded text-xs font-normal">PowerBI</span>
                    </div>
                  </div>

                  <p className="text-gray-800 text-sm leading-relaxed mb-2">
                    I've analyzed cross-functional performance data and identified optimal alignment strategies for each department to
                    support your market expansion
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Marketing Optimization */}
                    <div className="bg-white  border-blue-800 border-s-4 rounded-lg p-3 shadow-sm">
                      <h3 className="text-base font-bold text-blue-800 mb-4">
                        Marketing Optimization
                      </h3>
                      <ul className="space-y-2">
                        <li className="text-gray-950 text-sm">
                          • Reallocate 35% budget to healthcare vertical content
                        </li>
                        <li className="text-gray-950 text-sm">
                          • Launch privacy-first competitive campaign
                        </li>
                        <li className="text-gray-950 text-sm">
                          • Optimize CAC: projected 23% improvement
                        </li>
                        <li className="text-gray-950 text-sm">
                          • Account-based marketing for enterprise segment
                        </li>
                      </ul>
                    </div>

                    {/* Operations Scaling */}
                    <div className="bg-white border-green-800 border-s-4 rounded-lg p-3 shadow-sm">
                      <h3 className="text-base font-bold text-green-800 mb-4">
                        Operations Scaling
                      </h3>
                      <ul className="space-y-2">
                        <li className="text-gray-950 text-sm">
                          • Customer Success: +15 healthcare specialists
                        </li>
                        <li className="text-gray-950 text-sm">
                          • Implementation: 40% faster deployment cycle
                        </li>
                        <li className="text-gray-950 text-sm">
                          • Support: 24/7 enterprise tier launch
                        </li>
                        <li className="text-gray-950 text-sm">
                          • Quality: 99.9% SLA for top-tier accounts
                        </li>
                      </ul>
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
                    Marketing spend reallocation could improve CAC by 23% while operations
                    scaling supports 67% higher customer satisfaction. Should I model the
                    financial impact and create department-specific OKRs with automated
                    tracking?
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

export default StrategicGrowthCommandCenterAns5;