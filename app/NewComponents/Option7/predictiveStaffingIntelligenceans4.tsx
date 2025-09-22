"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import AnalyzingCard from "../processing-animation";

const PredictiveStaffingIntelligenceAns4 = () => {
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
    { text: "Analyzing historical hiring velocity data" },
    { text: "Evaluating current market conditions" },
    { text: "Calculating optimal timeline projections" },
    { text: "Validating feasibility against project requirements" },
    { text: "Preparing comprehensive timeline analysis" }
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
        description="Based on historical hiring velocity and current market conditions, I am generating the optimized timeline for your DevOps hiring process."
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
                    Based on historical hiring velocity and current market conditions, here's the optimized timeline:
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
                  {/* Hiring Timeline Projection Card */}
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <h3 className="text-base font-bold text-blue-700 mb-6">
                      Hiring Timeline Projection
                    </h3>
                    <div className="space-y-4">
                      {/* Job Posting Live */}
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">Job Posting Live</span>
                        </div>
                        <span className="text-sm text-gray-700">June 28 - July 5</span>
                      </div>

                      {/* Initial Interviews */}
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">Initial Interviews</span>
                        </div>
                        <span className="text-sm text-gray-700">July 8 - July 15</span>
                      </div>

                      {/* Technical Assessments */}
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">Technical Assessments</span>
                        </div>
                        <span className="text-sm text-gray-700">July 16 - July 22</span>
                      </div>

                      {/* Start Date Target */}
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">Start Date Target</span>
                        </div>
                        <span className="text-sm text-green-600 font-medium">August 1st</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Feasibility Section */}
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                      <div>
                        <h4 className="text-base font-bold text-green-700 mb-2">
                          Timeline Feasibility: Optimal
                        </h4>
                        <p className="text-sm text-gray-700">
                          New hire will be onboarded 2 weeks before the critical project surge, allowing for proper integration and ramp-up.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Data Source Tags */}
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Historical Data</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Market Analysis</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Calendar Integration</span>
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
                    I'm also preparing automated candidate scoring workflows and
                    setting up integration with your existing DevOps team's Slack
                    channels for seamless onboarding. Would you like me to create a
                    detailed onboarding checklist for the new hire?
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

export default PredictiveStaffingIntelligenceAns4;
