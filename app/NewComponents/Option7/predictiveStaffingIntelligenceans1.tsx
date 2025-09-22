"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import AnalyzingCard from "../processing-animation";

const PredictiveStaffingIntelligenceAns1 = () => {
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
    { text: "Analyzing project pipeline data from Jira" },
    { text: "Processing team capacity metrics from Teams" },
    { text: "Evaluating revenue commitments from HubSpot" },
    { text: "Cross-referencing staffing requirements" },
    { text: "Generating predictive staffing intelligence" }
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
        description="I am analyzing your staffing requirements by examining project pipeline data from Jira, team capacity metrics from Teams, and revenue commitments from HubSpot."
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
                  <p className="text-gray-900 text-sm mb-4 leading-relaxed">
                    I've analyzed your staffing requirements by examining project pipeline data from Jira, team capacity metrics from Teams, and revenue commitments from HubSpot...
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
                  {/* Critical Alert Section */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
                    <div className="flex items-start">
                      <AlertTriangle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <div>
                        <h3 className="text-red-800 font-bold text-sm mb-2">
                          Critical Understaffing Detected
                        </h3>
                        <p className="text-red-700 text-sm">
                          Based on cross-platform analysis, your DevOps team shows 23% understaffing for Q3 project demands. Current team velocity cannot meet the projected workload starting mid-July.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics Cards */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {/* DevOps Understaffing Card */}
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-red-600 mb-1">23%</div>
                      <div className="text-gray-800 text-sm">DevOps Understaffing</div>
                    </div>

                    {/* Projects in Pipeline Card */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 mb-1">47</div>
                      <div className="text-gray-800 text-sm">Projects in Pipeline</div>
                    </div>

                    {/* Q3 Revenue at Risk Card */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">€2.3M</div>
                      <div className="text-gray-800 text-sm">Q3 Revenue at Risk</div>
                    </div>
                  </div>

                  {/* Data Source Tags */}
                  <div className="flex gap-2 mb-6">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-normal">Jira Analysis</span>
                    <span className="bg-green-200 text-green-700 px-3 py-1 rounded-full text-xs font-normal">Teams Metrics</span>
                    <span className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-xs font-normal">HubSpot Pipeline</span>
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
                    I also detected a critical surge in infrastructure projects starting
                    July 15th. Should I analyze the specific role requirements needed to
                    address this gap?
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

export default PredictiveStaffingIntelligenceAns1;
