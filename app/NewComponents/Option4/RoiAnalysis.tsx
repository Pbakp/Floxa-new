"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Check } from "lucide-react";
import AnalyzingCard from "../processing-animation";

export function ROIAnalysis() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing DataFlow Industries usage patterns - 4 modules, 420 users, 18 support tickets" },
    { text: "Processing current pain points - Reporting limitations, cross-platform data silos" },
    { text: "Evaluating competitive ROI benchmarks - 462% average, 4.4-month payback" },
    { text: "Calculating implementation costs - €390K total investment, 12-week timeline" },
    { text: "Generating comprehensive ROI projections - €1.8M 3-year return, €420K annual savings" },
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
    // Cross-Module Analytics
    crossModuleCost: 0,
    crossModuleSavings: 0,
    crossModuleROI: 0,
    crossModulePayback: 0,

    // Predictive Intelligence
    predictiveCost: 0,
    predictiveRevenue: 0,
    predictiveROI: 0,
    predictivePayback: 0,

    // Advanced Reporting
    reportingCost: 0,
    reportingGains: 0,
    reportingROI: 0,
    reportingPayback: 0,

    // Total Business Impact
    totalROI: 0,
    totalInvestment: 0,
    averageROI: 0,
    totalPayback: 0,
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
        // Cross-Module Analytics
        crossModuleCost: Math.min(180 * progress, 180),
        crossModuleSavings: Math.min(420 * progress, 420),
        crossModuleROI: Math.min(233 * progress, 233),
        crossModulePayback: Math.min(5.1 * progress, 5.1),

        // Predictive Intelligence
        predictiveCost: Math.min(120 * progress, 120),
        predictiveRevenue: Math.min(340 * progress, 340),
        predictiveROI: Math.min(283 * progress, 283),
        predictivePayback: Math.min(4.2 * progress, 4.2),

        // Advanced Reporting
        reportingCost: Math.min(90 * progress, 90),
        reportingGains: Math.min(280 * progress, 280),
        reportingROI: Math.min(311 * progress, 311),
        reportingPayback: Math.min(3.9 * progress, 3.9),

        // Total Business Impact
        totalROI: Math.min(1800 * progress, 1800),
        totalInvestment: Math.min(390 * progress, 390),
        averageROI: Math.min(462 * progress, 462),
        totalPayback: Math.min(4.4 * progress, 4.4),
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

  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatCompleteWithCounters}
        steps={steps}
        description="I'll calculate specific ROI projections for DataFlow Industries based on their current usage patterns, pain points, and competitive benchmarks. Let me analyze the business impact and generate comprehensive ROI modeling."
      />
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            className="mx-auto p-3 bg-white rounded-lg shadow-sm border border-gray-200"
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
                  <div className="py-6">
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
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      </motion.div>
                      <motion.h2
                        className="text-lg font-semibold text-gray-900"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        Intelligence Module ROI Analysis - DataFlow Industries
                      </motion.h2>
                    </motion.div>

                    {/* ROI Cards */}
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {[
                        {
                          title: "Cross-Module Analytics",
                          headerColor: "bg-pink-500",
                          cost: counterValues.crossModuleCost,
                          value: counterValues.crossModuleSavings,
                          valueLabel: "Annual Savings",
                          roi: counterValues.crossModuleROI,
                          payback: counterValues.crossModulePayback,
                          valueColor: "text-green-600"
                        },
                        {
                          title: "Predictive Intelligence",
                          headerColor: "bg-blue-500",
                          cost: counterValues.predictiveCost,
                          value: counterValues.predictiveRevenue,
                          valueLabel: "Annual Revenue Impact",
                          roi: counterValues.predictiveROI,
                          payback: counterValues.predictivePayback,
                          valueColor: "text-blue-600"
                        },
                        {
                          title: "Advanced Reporting",
                          headerColor: "bg-green-500",
                          cost: counterValues.reportingCost,
                          value: counterValues.reportingGains,
                          valueLabel: "Efficiency Gains",
                          roi: counterValues.reportingROI,
                          payback: counterValues.reportingPayback,
                          valueColor: "text-green-600"
                        }
                      ].map((card, index) => (
                        <motion.div
                          key={index}
                          className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                          initial={{ opacity: 0, y: 30, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.7 + (index * 0.2),
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{
                            scale: 1.05,
                            y: -5,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <motion.div
                            className={`${card.headerColor} text-white p-4 text-center`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.8 + (index * 0.2) }}
                          >
                            <h3 className="font-semibold text-base mb-2">
                              {card.title}
                            </h3>
                            <motion.div
                              className="text-xl font-bold"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.9 + (index * 0.2) }}
                            >
                              €{Math.round(card.cost)}K
                            </motion.div>
                            <div className="text-sm opacity-90">Implementation Cost</div>
                          </motion.div>
                          <motion.div
                            className="p-4 text-center space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 1.0 + (index * 0.2) }}
                          >
                            <motion.div
                              className={`text-xl font-bold ${card.valueColor}`}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3, delay: 1.1 + (index * 0.2) }}
                            >
                              €{Math.round(card.value)}K
                            </motion.div>
                            <div className="text-sm text-gray-600">{card.valueLabel}</div>
                            <motion.div
                              className="text-base font-semibold text-gray-900"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3, delay: 1.2 + (index * 0.2) }}
                            >
                              {Math.round(card.roi)}% ROI
                            </motion.div>
                            <div className="text-sm text-gray-600">
                              {card.payback.toFixed(1)} months payback
                            </div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Total Business Impact Summary */}
                    <motion.div
                      className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3"
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 1.4,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.h3
                        className="text-base font-semibold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.5 }}
                      >
                        Total Business Impact Summary
                      </motion.h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { value: `€${(counterValues.totalROI / 1000).toFixed(1)}M`, label: "Total 3-Year ROI", color: "text-green-600" },
                          { value: `€${Math.round(counterValues.totalInvestment)}K`, label: "Total Investment", color: "text-blue-600" },
                          { value: `${Math.round(counterValues.averageROI)}%`, label: "Average ROI", color: "text-purple-600" },
                          { value: counterValues.totalPayback.toFixed(1), label: "Months Payback", color: "text-gray-900" }
                        ].map((metric, index) => (
                          <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                              duration: 0.4,
                              delay: 1.6 + (index * 0.1),
                              type: "spring",
                              stiffness: 120
                            }}
                            whileHover={{
                              scale: 1.05,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <motion.div
                              className={`text-xl font-bold ${metric.color}`}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3, delay: 1.7 + (index * 0.1) }}
                            >
                              {metric.value}
                            </motion.div>
                            <div className="text-sm text-gray-600">{metric.label}</div>
                          </motion.div>
                        ))}
                      </div>
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
