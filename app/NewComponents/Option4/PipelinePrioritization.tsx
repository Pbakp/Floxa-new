"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp } from "lucide-react";
import AnalyzingCard from "../processing-animation";

export function PipelinePrioritization() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing prospect data - 5 top opportunities, $920K total pipeline value" },
    { text: "Extracting close probabilities - 87% DataFlow, 73% TechCorp, 65% CloudMax" },
    { text: "Calculating expected revenue - $625K weighted by probability and effort" },
    { text: "Evaluating resource allocation - 60% top 2, 25% priority 3, 15% others" },
    { text: "Finalizing Q4 strategy - Prioritized pipeline with success probability factors" },
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

  const [counterValues, setCounterValues] = useState({
    // Deal values
    dealValue1: 0, // $240K
    dealValue2: 0, // $180K
    dealValue3: 0, // $200K
    dealValue4: 0, // $160K
    dealValue5: 0, // $140K

    // Close probabilities
    closeProb1: 0, // 87%
    closeProb2: 0, // 73%
    closeProb3: 0, // 65%
    closeProb4: 0, // 58%
    closeProb5: 0, // 45%

    // Expected revenue
    expectedRev1: 0, // $208K
    expectedRev2: 0, // $131K
    expectedRev3: 0, // $130K
    expectedRev4: 0, // $93K
    expectedRev5: 0, // $63K

    // Summary metrics
    totalPipeline: 0, // $920K
    expectedRevenue: 0, // $625K
    weightedCloseRate: 0, // 68%

    // Resource allocation percentages
    priority12Effort: 0, // 60%
    priority3Effort: 0, // 25%
    priority45Effort: 0, // 15%

    // Success probability factors
    highProbThreshold: 0, // 80%
    mediumProbMin: 0, // 60%
    mediumProbMax: 0, // 80%
    lowProbThreshold: 0, // 60%
  });

  // Counter animation will be triggered after analyzing completes
  const animateCounters = useCallback(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounterValues({
        // Deal values
        dealValue1: Math.min(240 * progress, 240),
        dealValue2: Math.min(180 * progress, 180),
        dealValue3: Math.min(200 * progress, 200),
        dealValue4: Math.min(160 * progress, 160),
        dealValue5: Math.min(140 * progress, 140),

        // Close probabilities
        closeProb1: Math.min(87 * progress, 87),
        closeProb2: Math.min(73 * progress, 73),
        closeProb3: Math.min(65 * progress, 65),
        closeProb4: Math.min(58 * progress, 58),
        closeProb5: Math.min(45 * progress, 45),

        // Expected revenue
        expectedRev1: Math.min(208 * progress, 208),
        expectedRev2: Math.min(131 * progress, 131),
        expectedRev3: Math.min(130 * progress, 130),
        expectedRev4: Math.min(93 * progress, 93),
        expectedRev5: Math.min(63 * progress, 63),

        // Summary metrics
        totalPipeline: Math.min(920 * progress, 920),
        expectedRevenue: Math.min(625 * progress, 625),
        weightedCloseRate: Math.min(68 * progress, 68),

        // Resource allocation percentages
        priority12Effort: Math.min(60 * progress, 60),
        priority3Effort: Math.min(25 * progress, 25),
        priority45Effort: Math.min(15 * progress, 15),

        // Success probability factors
        highProbThreshold: Math.min(80 * progress, 80),
        mediumProbMin: Math.min(60 * progress, 60),
        mediumProbMax: Math.min(80 * progress, 80),
        lowProbThreshold: Math.min(60 * progress, 60),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  // Update handleBuildRepeatComplete to include counter animation
  const handleBuildRepeatCompleteWithCounters = useCallback(() => {
    handleBuildRepeatComplete();

    // Start counter animation after analyzing completes
    setTimeout(() => {
      animateCounters();
    }, 1000);
  }, [handleBuildRepeatComplete, animateCounters]);
  const prospects = [
    {
      priority: 1,
      customer: "DataFlow Industries",
      dealValue: `$${Math.round(counterValues.dealValue1)}K`,
      closeProbability: `${Math.round(counterValues.closeProb1)}%`,
      expectedRevenue: `$${Math.round(counterValues.expectedRev1)}K`,
      salesEffort: "Medium",
      timeline: "4 weeks",
      keyAdvantage: "Strong technical relationship, urgent pain points",
      priorityColor: "bg-green-500 text-white",
    },
    {
      priority: 2,
      customer: "TechCorp Solutions",
      dealValue: `$${Math.round(counterValues.dealValue2)}K`,
      closeProbability: `${Math.round(counterValues.closeProb2)}%`,
      expectedRevenue: `$${Math.round(counterValues.expectedRev2)}K`,
      salesEffort: "High",
      timeline: "6 weeks",
      keyAdvantage: "Budget pre-approved, technical evaluation started",
      priorityColor: "bg-blue-500 text-white",
    },
    {
      priority: 3,
      customer: "CloudMax Enterprise",
      dealValue: `$${Math.round(counterValues.dealValue3)}K`,
      closeProbability: `${Math.round(counterValues.closeProb3)}%`,
      expectedRevenue: `$${Math.round(counterValues.expectedRev3)}K`,
      salesEffort: "Medium",
      timeline: "8 weeks",
      keyAdvantage: "Contract renewal timing, existing relationship",
      priorityColor: "bg-orange-500 text-white",
    },
    {
      priority: 4,
      customer: "Innovate Systems",
      dealValue: `$${Math.round(counterValues.dealValue4)}K`,
      closeProbability: `${Math.round(counterValues.closeProb4)}%`,
      expectedRevenue: `$${Math.round(counterValues.expectedRev4)}K`,
      salesEffort: "High",
      timeline: "10 weeks",
      keyAdvantage: "Competitive displacement opportunity",
      priorityColor: "bg-gray-500 text-white",
    },
    {
      priority: 5,
      customer: "Futuretech Corp",
      dealValue: `$${Math.round(counterValues.dealValue5)}K`,
      closeProbability: `${Math.round(counterValues.closeProb5)}%`,
      expectedRevenue: `$${Math.round(counterValues.expectedRev5)}K`,
      salesEffort: "High",
      timeline: "12 weeks",
      keyAdvantage: "Early stage, high growth potential",
      priorityColor: "bg-red-500 text-white",
    },
  ];

  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatCompleteWithCounters}
        steps={steps}
        description="I'll analyze your top 5 prospects comparatively and create a prioritized pipeline strategy for optimal Q4 resource allocation. Let me evaluate your prospect data and develop resource optimization strategies."
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
                  <div className="py-3">
                    {/* Title */}
                    <motion.div
                      className="flex items-center gap-2 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <motion.div
                        initial={{ rotate: -180, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <TrendingUp className="h-5 w-5 text-gray-600" />
                      </motion.div>
                      <motion.h2
                        className="text-lg font-semibold text-gray-900"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        Q4 Pipeline Prioritization & Comparative Analysis
                      </motion.h2>
                    </motion.div>

                    {/* Pipeline Table */}
                    <motion.div
                      className="overflow-x-auto mb-8"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <table className="w-full border">
                        <thead>
                          <motion.tr
                            className="border-b border-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.7 }}
                          >
                            <th className="text-left py-3 px-4 font-bold text-gray-900">Priority</th>
                            <th className="text-left py-3 px-4 font-bold text-gray-900">Customer</th>
                            <th className="text-left py-3 px-4 font-bold text-gray-900">Deal Value</th>
                            <th className="text-left py-3 px-4 font-bold text-gray-900">Close Probability</th>
                            <th className="text-left py-3 px-4 font-bold text-gray-900">Expected Revenue</th>
                            <th className="text-left py-3 px-4 font-bold text-gray-900">Sales Effort</th>
                            <th className="text-left py-3 px-4 font-bold text-gray-900">Timeline</th>
                            <th className="text-left py-3 px-4 font-bold text-gray-900">Key Advantage</th>
                          </motion.tr>
                        </thead>
                        <tbody>
                          {prospects.map((prospect, index) => (
                            <motion.tr
                              key={index}
                              className="border border-gray-100 hover:bg-gray-50"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.8 + (index * 0.1)
                              }}
                              whileHover={{
                                scale: 1.01,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <td className="py-4 px-4 border">
                                <motion.div
                                  className={`w-6 h-8 rounded-sm flex items-center justify-center text-sm font-semibold ${prospect.priorityColor}`}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ duration: 0.3, delay: 0.9 + (index * 0.1) }}
                                >
                                  {prospect.priority}
                                </motion.div>
                              </td>
                              <td className="py-4 px-4 border font-bold text-gray-900">
                                {prospect.customer}
                              </td>
                              <td className="py-4 px-4 border font-semibold text-gray-900">
                                {prospect.dealValue}
                              </td>
                              <td className="py-4 px-4 border">
                                <span
                                  className={`px-2 py-1 rounded text-sm font-medium ${Number.parseInt(prospect.closeProbability) >= 80
                                    ? "bg-green-100 text-green-800"
                                    : Number.parseInt(prospect.closeProbability) >= 60
                                      ? "bg-blue-100 text-blue-800"
                                      : Number.parseInt(prospect.closeProbability) >= 50
                                        ? "bg-orange-100 text-orange-800"
                                        : "bg-red-100 text-red-800"
                                    }`}
                                >
                                  {prospect.closeProbability}
                                </span>
                              </td>
                              <td className="py-4 px-4 border font-bold text-gray-900">
                                {prospect.expectedRevenue}
                              </td>
                              <td className="py-4 px-4 border">
                                <span
                                  className={`px-2 py-1 rounded text-xs ${prospect.salesEffort === "High"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-yellow-100 text-yellow-800"
                                    }`}
                                >
                                  {prospect.salesEffort}
                                </span>
                              </td>
                              <td className="py-4 px-4 border text-gray-900">
                                {prospect.timeline}
                              </td>
                              <td className="py-4 px-4 text-gray-900 text-xs">
                                {prospect.keyAdvantage}
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </motion.div>

                    {/* Summary Section */}
                    <motion.div
                      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                    >
                      {/* Q4 Pipeline Summary */}
                      <motion.div
                        className="bg-gray-50 rounded-lg p-2 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      >
                        <h3 className="text-base font-semibold text-gray-900 mb-4">
                          Q4 Pipeline Summary
                        </h3>
                        <div className="space-y-4">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 1.6 }}
                          >
                            <div className="text-xl font-bold text-green-600">
                              ${Math.round(counterValues.totalPipeline)}K
                            </div>
                            <div className="text-sm text-gray-600">
                              Total Pipeline Value
                            </div>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 1.7 }}
                          >
                            <div className="text-xl font-bold text-blue-600">
                              ${Math.round(counterValues.expectedRevenue)}K
                            </div>
                            <div className="text-sm text-gray-600">Expected Revenue</div>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 1.8 }}
                          >
                            <div className="text-xl font-bold text-purple-600">
                              {Math.round(counterValues.weightedCloseRate)}%
                            </div>
                            <div className="text-sm text-gray-600">Weighted Close Rate</div>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Resource Allocation Strategy */}
                      <motion.div
                        className="bg-gray-50 rounded-lg p-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      >
                        <h3 className="text-base font-semibold text-gray-900 mb-4">
                          Resource Allocation Strategy
                        </h3>
                        <div className="space-y-3">
                          {[
                            { label: "Priority 1-2 (DataFlow, TechCorp)", value: counterValues.priority12Effort, color: "green" },
                            { label: "Priority 3 (CloudMax)", value: counterValues.priority3Effort, color: "blue" },
                            { label: "Priority 4-5 (Innovate, FutureTech)", value: counterValues.priority45Effort, color: "orange" }
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              className="flex justify-between items-center"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 1.7 + (index * 0.1) }}
                            >
                              <span className="text-sm text-gray-900">{item.label}</span>
                              <span className={`px-2 py-1 bg-${item.color}-100 text-${item.color}-800 rounded text-sm font-medium`}>
                                {Math.round(item.value)}% effort
                              </span>
                            </motion.div>
                          ))}
                          <motion.div
                            className="mt-4 p-3 bg-blue-50 rounded"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 2.0 }}
                          >
                            <span className="text-sm font-semibold text-blue-900">Strategy:</span>
                            <span className="text-xs text-blue-700"> Focus 85% effort on top 3 priorities for maximum Q4 impact</span>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Success Probability Factors */}
                      <motion.div
                        className="bg-gray-50 rounded-lg p-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      >
                        <h3 className="text-base font-semibold text-gray-900 mb-4">
                          Success Probability Factors
                        </h3>
                        <div className="space-y-4">
                          {[
                            {
                              title: `High Probability (${Math.round(counterValues.highProbThreshold)}%+)`,
                              description: "Strong relationships, urgent pain points, budget approved",
                              color: "green"
                            },
                            {
                              title: `Medium Probability (${Math.round(counterValues.mediumProbMin)}-${Math.round(counterValues.mediumProbMax)}%)`,
                              description: "Good fit, timeline alignment, competitive factors",
                              color: "orange"
                            },
                            {
                              title: `Lower Probability (<${Math.round(counterValues.lowProbThreshold)}%)`,
                              description: "Early stage, competitive pressure, longer sales cycles",
                              color: "red"
                            }
                          ].map((factor, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 1.8 + (index * 0.1) }}
                            >
                              <div className={`font-semibold text-${factor.color}-700 mb-1`}>
                                {factor.title}
                              </div>
                              <div className="text-sm text-gray-600">
                                {factor.description}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
