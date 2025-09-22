"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnalyzingCard from "../processing-animation";

const PredictiveStaffingIntelligenceAns5 = () => {
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
    { text: "Setting up comprehensive staffing intelligence monitoring" },
    { text: "Analyzing department capacity across all teams" },
    { text: "Configuring automated alert systems" },
    { text: "Preparing weekly intelligence reports" },
    { text: "Establishing continuous learning protocols" }
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
        description="I'm setting up comprehensive staffing intelligence monitoring across all departments with automated alerts and continuous learning."
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
                  {/* Introductory Text */}
                  <p className="text-gray-900 text-sm mb-6 leading-relaxed">
                    Absolutely. I'm setting up comprehensive staffing intelligence monitoring across all departments:
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
                  {/* Department Status Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {/* Engineering Department */}
                    <div className="bg-green-50 rounded-lg text-center p-6">
                      <h3 className="text-base font-bold text-green-700 mb-2">
                        Engineering
                      </h3>
                      <p className="text-sm text-gray-700 mb-1">Optimal Staffing</p>
                      <p className="text-sm text-gray-600">+5% buffer capacity</p>
                    </div>

                    {/* Sales Department */}
                    <div className="bg-orange-50 text-center rounded-lg p-6">
                      <h3 className="text-base font-bold text-orange-700 mb-2">Sales</h3>
                      <p className="text-sm text-gray-700 mb-1">Monitor Closely</p>
                      <p className="text-sm text-gray-600">Q4 risk potential</p>
                    </div>

                    {/* Marketing Department */}
                    <div className="bg-green-50 text-center rounded-lg p-6">
                      <h3 className="text-base font-bold text-green-700 mb-2">
                        Marketing
                      </h3>
                      <p className="text-sm text-gray-700 mb-1">Well Staffed</p>
                      <p className="text-sm text-gray-600">Campaign ready</p>
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
                    I'll send you automated weekly staffing intelligence reports and proactive alerts 60 days before any predicted shortfalls. The system will continuously learn from project outcomes to improve predictions.
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

export default PredictiveStaffingIntelligenceAns5;
