"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertTriangle, Users, AlertCircle } from "lucide-react";
import AnalyzingCard from "../processing-animation";

export function CompetitiveIntelligenceAnalysis() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing competitive landscape in BI space" },
    { text: "Processing market intelligence data" },
    { text: "Evaluating competitor implementation patterns" },
    { text: "Cross-referencing success and failure factors" },
    { text: "Generating competitive positioning insights" }
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
        title="Competitive Intelligence Analysis"
        description="I'll analyze competitive intelligence in the business intelligence and analytics space to position your Intelligence Module effectively against alternatives."
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
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {/* Title */}
                  <motion.div
                    className="flex items-center gap-2 mb-6"
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <motion.div
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <Users className="w-5 h-5 text-blue-600" />
                    </motion.div>
                    <motion.h2
                      className="text-xl font-bold text-gray-900"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      Competitive Intelligence Analysis
                    </motion.h2>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showSecond && (
                <motion.div
                  className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: 0.1,
                    type: "spring",
                    stiffness: 80
                  }}
                >
                  {/* PowerBI Card */}
                  <motion.div
                    className="bg-white border rounded-lg p-4 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <h3 className="text-lg font-semibold mb-1">PowerBI Solutions</h3>
                    <p className="text-sm text-gray-500 mb-3">Direct Competitor</p>

                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium">Investment:</p>
                        <p className="text-sm">€180K average</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium">Implementation:</p>
                        <p className="text-sm">Microsoft PowerBI + Custom Dashboards</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium">Results:</p>
                        <p className="text-sm">15% productivity increase</p>
                      </div>

                      <p className="text-sm text-green-600">Limited cross-platform integration</p>
                    </div>
                  </motion.div>

                  {/* Tableau Card */}
                  <motion.div
                    className="bg-white border rounded-lg p-4 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <h3 className="text-lg font-semibold mb-1">Tableau Enterprise</h3>
                    <p className="text-sm text-gray-500 mb-3">Market Leader</p>

                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium">Investment:</p>
                        <p className="text-sm">€220K average</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium">Implementation:</p>
                        <p className="text-sm">Advanced Analytics Platform</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium">Results:</p>
                        <p className="text-sm">€280K annual value</p>
                      </div>

                      <p className="text-sm text-yellow-600">Complex implementation, high training costs</p>
                    </div>
                  </motion.div>

                  {/* DataMart Card */}
                  <motion.div
                    className="bg-white border rounded-lg p-4 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <h3 className="text-lg font-semibold mb-1">DataMart Pro</h3>
                    <p className="text-sm text-gray-500 mb-3">Failed Implementation</p>

                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium">Investment:</p>
                        <p className="text-sm">€160K average</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium">Implementation:</p>
                        <p className="text-sm">Custom BI Solution</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium">Results:</p>
                        <p className="text-sm">28% integration failures</p>
                      </div>

                      <p className="text-sm text-red-600">Poor platform compatibility issues</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showThird && (
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <motion.div
                    className="bg-white border rounded-lg p-4 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h3 className="text-lg font-semibold mb-4">Market Intelligence Summary</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Success Factors */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle className="text-green-600 h-5 w-5" />
                          <h4 className="font-medium">Successful Implementation Patterns</h4>
                        </div>

                        <ul className="space-y-2 pl-7">
                          <li className="text-sm flex items-start">
                            <span className="mr-2">•</span>
                            <span>Focus on existing platform integration</span>
                          </li>
                          <li className="text-sm flex items-start">
                            <span className="mr-2">•</span>
                            <span>Strong cross-system data connectivity</span>
                          </li>
                          <li className="text-sm flex items-start">
                            <span className="mr-2">•</span>
                            <span>Phased rollout with user training</span>
                          </li>
                          <li className="text-sm flex items-start">
                            <span className="mr-2">•</span>
                            <span>Clear ROI measurement framework</span>
                          </li>
                        </ul>
                      </div>

                      {/* Failure Factors */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <AlertTriangle className="text-red-600 h-5 w-5" />
                          <h4 className="font-medium">Common Failure Factors</h4>
                        </div>

                        <ul className="space-y-2 pl-7">
                          <li className="text-sm flex items-start">
                            <span className="mr-2">•</span>
                            <span>Inadequate platform integration capabilities</span>
                          </li>
                          <li className="text-sm flex items-start">
                            <span className="mr-2">•</span>
                            <span>Complex setup and high training requirements</span>
                          </li>
                          <li className="text-sm flex items-start">
                            <span className="mr-2">•</span>
                            <span>Insufficient change management support</span>
                          </li>
                          <li className="text-sm flex items-start">
                            <span className="mr-2">•</span>
                            <span>Unrealistic implementation timelines</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showFourth && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                >

                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
