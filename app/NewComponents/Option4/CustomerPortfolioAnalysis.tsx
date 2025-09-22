"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Bug, Building2, Search, Check } from "lucide-react";
import AnalyzingCard from "../processing-animation";

export function CustomerPortfolioAnalysis() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing customer data from Microsoft 365 - 420 users, 4 modules deployed" },
    { text: "Processing engagement metrics from Teams - Communication patterns, meeting data" },
    { text: "Evaluating support signals from Jira - 18 tickets, feature requests, pain points" },
    { text: "Cross-referencing HubSpot deal history - Engagement metrics, contract renewals" },
    { text: "Generating portfolio intelligence insights - 73% module usage, 67% readiness score" },
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
    moduleUsage: 0,
    supportSignal: 0,
    intelligenceReadiness: 0,
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
        moduleUsage: Math.min(73 * progress, 73),
        supportSignal: Math.min(45 * progress, 45),
        intelligenceReadiness: Math.min(67 * progress, 67),
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
        description="I'll provide a comprehensive upsell intelligence analysis by examining customer behavior across all platforms, analyzing competitive positioning, and developing data-driven targeting strategies. Let me assess your current customer portfolio and Intelligence Module fit criteria."
      />
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-4"
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
                    {/* Header */}
                    <motion.h1
                      className="text-lg font-semibold text-gray-900 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      Customer Portfolio Analysis - Cross-Platform Data
                    </motion.h1>

                    {/* Metrics Row */}
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {[
                        {
                          title: "Current Module Usage",
                          value: counterValues.moduleUsage,
                          color: "text-blue-600",
                          description: "Customers with 3+ modules deployed"
                        },
                        {
                          title: "Support Signal Analysis",
                          value: counterValues.supportSignal,
                          color: "text-green-600",
                          description: "Customers requesting reporting features"
                        },
                        {
                          title: "Intelligence Module Readiness",
                          value: counterValues.intelligenceReadiness,
                          color: "text-purple-600",
                          description: "Infrastructure and usage pattern fit"
                        }
                      ].map((metric, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-50 rounded-lg p-4"
                          initial={{ opacity: 0, y: 30, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.5 + (index * 0.2),
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{
                            scale: 1.05,
                            y: -5,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <motion.h3
                            className="text-base font-medium text-gray-800 mb-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 + (index * 0.2) }}
                          >
                            {metric.title}
                          </motion.h3>
                          <motion.div
                            className={`text-2xl font-bold ${metric.color} mb-1`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.7 + (index * 0.2) }}
                          >
                            {Math.round(metric.value)}%
                          </motion.div>
                          <motion.p
                            className="text-sm text-gray-500"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.8 + (index * 0.2) }}
                          >
                            {metric.description}
                          </motion.p>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Platform Cards */}
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                    >
                      {[
                        {
                          icon: Users,
                          title: "Teams",
                          description: "Meeting data, communication patterns",
                          bgColor: "bg-blue-100",
                          iconColor: "text-blue-600",
                          textColor: "text-blue-700"
                        },
                        {
                          icon: Bug,
                          title: "Jira",
                          description: "Support tickets, feature requests",
                          bgColor: "bg-green-100",
                          iconColor: "text-green-600",
                          textColor: "text-green-700"
                        },
                        {
                          icon: Building2,
                          title: "HubSpot",
                          description: "Engagement metrics, deal history",
                          bgColor: "bg-gray-100",
                          iconColor: "text-gray-800",
                          textColor: "text-gray-700"
                        },
                        {
                          icon: Search,
                          title: "External Scan",
                          description: "Market intelligence, competitor analysis",
                          bgColor: "bg-purple-100",
                          iconColor: "text-purple-600",
                          textColor: "text-purple-700"
                        }
                      ].map((platform, index) => (
                        <motion.div
                          key={index}
                          className={`${platform.bgColor} rounded-lg p-4`}
                          initial={{ opacity: 0, y: 30, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 1.1 + (index * 0.15),
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
                            className="flex items-center gap-2 mb-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 1.2 + (index * 0.15) }}
                          >
                            <motion.div
                              initial={{ rotate: -180, scale: 0 }}
                              animate={{ rotate: 0, scale: 1 }}
                              transition={{ duration: 0.3, delay: 1.3 + (index * 0.15) }}
                            >
                              <platform.icon className={`w-4 h-4 ${platform.iconColor}`} />
                            </motion.div>
                            <motion.h4
                              className="font-semibold text-gray-900"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3, delay: 1.4 + (index * 0.15) }}
                            >
                              {platform.title}
                            </motion.h4>
                          </motion.div>
                          <motion.p
                            className={`text-sm ${platform.textColor}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 1.5 + (index * 0.15) }}
                          >
                            {platform.description}
                          </motion.p>
                        </motion.div>
                      ))}
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
