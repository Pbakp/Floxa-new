"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnalyzingCard from "../processing-animation";

const StrategicGrowthCommandCenterAns7 = () => {
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
    { text: "Creating integrated command center - Cross-functional orchestration setup" },
    { text: "Setting up real-time analytics - Marketing → Sales alignment protocols" },
    { text: "Configuring predictive models - Product → Customer Success integration" },
    { text: "Implementing automated tracking - Finance → Operations optimization" },
    { text: "Finalizing strategic visibility - 360° executive dashboard ready" },
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
        description="I'm creating an integrated Strategic Growth Command Center with
                   real-time cross-functional orchestration and predictive analytics."
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
                      <span className="bg-[#E0E7FF] text-[#2563EB] px-3 py-1 rounded text-xs font-normal">Teams</span>
                      <span className="bg-green-200 text-green-700 px-3 py-1 rounded text-xs font-normal">Jira</span>
                      <span className="  px-3 py-1 rounded text-xs font-normal">HubSpot</span>
                    </div>
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed mb-2"> I've created your integrated Strategic Growth Command Center with real-time cross-functional orchestration and
                    predictive analytics:
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
                      Integrated Execution Framework:
                    </h3>
                    <div className="space-y-4">
                      {/* Marketing → Sales Alignment */}
                      <div className="">
                        <span className="text-sm font-semibold text-gray-800 mb-2">
                          Marketing → Sales Alignment :
                        </span>{" "}
                        <span className="text-gray-800 text-sm">
                          Lead scoring optimization: +45% qualified leads Automated
                          handoff protocols: -23% cycle time
                        </span>
                      </div>

                      {/* Product → Customer Success */}
                      <div className=" ">
                        <span className="text-sm font-semibold text-gray-800 mb-2">
                          Product → Customer Success:
                        </span>{" "}
                        <span className="text-gray-800 text-sm">
                          Feature usage analytics: 89% expansion opportunity accuracy
                          Automated onboarding: -52% time-to-value
                        </span>
                      </div>

                      {/* Finance → Operations */}
                      <div>
                        <span className="text-sm font-semibold text-gray-800 mb-2">
                          Finance → Operations:
                        </span>{" "}
                        <span className="text-gray-800 text-sm">
                          Real-time burn rate analysis optimized resource allocation
                          Predictive cash flow: proactive scaling decisions
                        </span>
                      </div>
                    </div>
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
                    I&apos;m setting up automated cross-functional dashboards in Teams,
                    predictive analytics for each department, and strategic alert system
                    for executive decision-making. Your growth command center will provide
                    360° strategic visibility with automated execution tracking across all
                    business functions.
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

export default StrategicGrowthCommandCenterAns7;