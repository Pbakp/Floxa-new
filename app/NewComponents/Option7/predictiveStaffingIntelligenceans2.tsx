"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnalyzingCard from "../processing-animation";

const PredictiveStaffingIntelligenceAns2 = () => {
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
    { text: "Analyzing project complexity patterns" },
    { text: "Reviewing historical performance data" },
    { text: "Mapping required skills to role specifications" },
    { text: "Generating optimal role recommendations" },
    { text: "Preparing comprehensive job description" }
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
        description="Based on project complexity analysis and historical performance patterns, I am generating the optimal role specification for your DevOps requirements."
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
                    Based on project complexity analysis and historical performance patterns, here's the optimal role specification:
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
                  {/* Role Specification Card */}
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
                    <div className="mb-6">
                      <h3 className="text-base font-bold text-gray-900 mb-2">
                        <span className="font-bold text-gray-900">Recommended Role:</span>{" "}
                        <span className="font-bold text-green-700">Senior DevOps Engineer</span>
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Required Skills */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-4">
                          Required Skills:
                        </h4>
                        <ul className="space-y-2">
                          <li className="text-sm text-gray-700">
                            • Kubernetes & Docker (5+ years)
                          </li>
                          <li className="text-sm text-gray-700">
                            • AWS/Azure infrastructure
                          </li>
                          <li className="text-sm text-gray-700">
                            • CI/CD pipeline management
                          </li>
                          <li className="text-sm text-gray-700">
                            • Infrastructure as Code (Terraform)
                          </li>
                          <li className="text-sm text-gray-700">
                            • Monitoring & observability tools
                          </li>
                        </ul>
                      </div>

                      {/* Experience Level */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-4">
                          Experience Level:
                        </h4>
                        <ul className="space-y-2">
                          <li className="text-sm text-gray-700">
                            • 5-7 years DevOps experience
                          </li>
                          <li className="text-sm text-gray-700">
                            • 2+ years team leadership
                          </li>
                          <li className="text-sm text-gray-700">
                            • Financial services background preferred
                          </li>
                          <li className="text-sm text-gray-700">
                            • Agile/Scrum methodology
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Analysis Tags */}
                  <div className="flex gap-2 mb-6">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Historical Analysis</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Skills Mapping</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Confluence Docs</span>
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
                    I can draft a comprehensive job description based on our most
                    successful DevOps hires and current market standards. Should I also
                    prepare the salary benchmarking analysis?
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

export default PredictiveStaffingIntelligenceAns2;
