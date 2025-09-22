"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Clock } from "lucide-react";
import AnalyzingCard from "../processing-animation";

const PredictiveStaffingIntelligenceAns3 = () => {
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
    { text: "Initiating hiring workflow across HR systems" },
    { text: "Creating job requisition in Dynamics HR" },
    { text: "Generating job description template" },
    { text: "Preparing salary benchmarking analysis" },
    { text: "Setting up automated candidate screening" }
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
        description="I'm initiating the hiring workflow across your systems and preparing the complete job posting package with salary benchmarking."
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
                    I'm initiating the hiring workflow across your systems and preparing the complete job posting package:
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* HR System Actions */}
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-base font-bold text-blue-700 mb-4">
                        HR System Actions
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                          Job req created in Dynamics HR
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                          Approval workflow initiated
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                          Job description template generated
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <Clock className="text-gray-500 mr-3 flex-shrink-0" size={16} />
                          Posting to LinkedIn & Indeed (pending approval)
                        </li>
                      </ul>
                    </div>

                    {/* Salary Benchmarking */}
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-base font-bold text-green-700 mb-4">
                        Salary Benchmarking
                      </h4>
                      <div className="space-y-3">
                        <div className="text-sm text-gray-700">
                          <span className="font-medium">Market Range:</span> €75K - €95K
                        </div>
                        <div className="text-sm text-gray-700">
                          <span className="font-medium">Recommended Offer:</span> €82K - €88K
                        </div>
                        <div className="text-sm text-gray-700">
                          <span className="font-medium">Total Package:</span> €95K - €105K
                        </div>
                        <div className="text-sm text-green-600 mt-4">
                          Based on 147 similar roles in your region
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* System Tags */}
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Dynamics HR</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">LinkedIn API</span>
                    <span className="px-3 py-1 bg-white border border-gray-300 text-gray-700 text-xs rounded-full">Confluence</span>
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
                    I'm also setting up automated candidate screening workflows and
                    identifying the top 3 recruiting firms with proven DevOps placement
                    rates. Should I schedule initial interviews for the week of July 8th
                    to meet your timeline?
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

export default PredictiveStaffingIntelligenceAns3;
