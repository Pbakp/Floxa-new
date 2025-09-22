"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Target, Users, TrendingUp } from "lucide-react";
import AnalyzingCard from "../processing-animation";

export function ImplementationRoadmap() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  const [counterValues, setCounterValues] = useState({
    // Q1 Resources
    q1Investment: 0,
    q1TeamMembers: 0,

    // Q2 Results
    q2ProductivityGains: 0,
    q2UserAdoption: 0,

    // Q3 Results
    q3RevenueImpact: 0,

    // Q4 Results
    q4EfficiencyImprovements: 0,
    q4UserSatisfaction: 0,

    // Resource Allocation
    techInvestment: 0,
    trainingSupport: 0,
    changeManagement: 0,

    // Success Metrics
    costReduction: 0,
    revenueEnhancement: 0,
    userAdoptionRate: 0,

    // Success Factors
    technicalIntegration: 0,
    userReadiness: 0,
  });

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing implementation readiness - DataFlow's technical foundation assessed" },
    { text: "Extracting resource requirements - €390K total investment, 3 technical team members" },
    { text: "Mapping quarterly milestones - Q1 foundation, Q2 analytics, Q3 intelligence, Q4 optimization" },
    { text: "Reviewing success metrics - 95% user adoption target, €420K cost reduction annually" },
    { text: "Finalizing roadmap - 12-month timeline with phased rollout and ROI validation" },
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

    // Animate counters when dashboard shows
    setTimeout(() => {
      const duration = 4000; // 4 seconds for longer animation
      const steps = 80; // 80 steps for smooth animation
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounterValues({
          // Q1 Resources
          q1Investment: Math.min(120 * progress, 120),
          q1TeamMembers: Math.min(3 * progress, 3),

          // Q2 Results
          q2ProductivityGains: Math.min(105 * progress, 105),
          q2UserAdoption: Math.min(70 * progress, 70),

          // Q3 Results
          q3RevenueImpact: Math.min(85 * progress, 85),

          // Q4 Results
          q4EfficiencyImprovements: Math.min(140 * progress, 140),
          q4UserSatisfaction: Math.min(95 * progress, 95),

          // Resource Allocation
          techInvestment: Math.min(270 * progress, 270),
          trainingSupport: Math.min(80 * progress, 80),
          changeManagement: Math.min(40 * progress, 40),

          // Success Metrics
          costReduction: Math.min(420 * progress, 420),
          revenueEnhancement: Math.min(340 * progress, 340),
          userAdoptionRate: Math.min(95 * progress, 95),

          // Success Factors
          technicalIntegration: Math.min(92 * progress, 92),
          userReadiness: Math.min(87 * progress, 87),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, 1000);
  }, []);

  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'll create a comprehensive implementation roadmap optimized for DataFlow's technical readiness and organizational priorities. Let me analyze your current infrastructure and map out a detailed 12-month execution plan."
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
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <motion.div
                      className="flex items-center gap-3 mb-6 p-4"
                      initial={{ x: -20 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <motion.div
                        initial={{ rotate: -180, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <Calendar className="h-5 w-5 text-blue-600" />
                      </motion.div>
                      <motion.h2
                        className="text-lg font-semibold text-gray-900"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        Intelligence Module Implementation Roadmap - DataFlow Industries
                      </motion.h2>
                    </motion.div>

                    {/* Timeline Section */}
                    <motion.div
                      className="mb-8 p-4"
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
                      <motion.h3
                        className="text-base font-semibold text-gray-900 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        12-Month Implementation Timeline
                      </motion.h3>

                      <div className="space-y-6">
                        {[
                          {
                            color: "blue",
                            title: "Q1: Foundation & Integration Setup",
                            description: "Platform integration and initial configuration",
                            activities: "API integration setup, data connectivity testing, user access configuration",
                            resources: `€${Math.round(counterValues.q1Investment)}K investment, ${Math.round(counterValues.q1TeamMembers)} technical team members`,
                            metrics: "100% platform connectivity, baseline analytics setup"
                          },
                          {
                            color: "green",
                            title: "Q2: Cross-Module Analytics Deployment",
                            description: "Advanced reporting and dashboard implementation",
                            activities: "Custom dashboard creation, cross-module reporting, user training program",
                            resources: `€${Math.round(counterValues.q2ProductivityGains)}K quarterly productivity gains`,
                            metrics: `${Math.round(counterValues.q2UserAdoption)}% of analytics team engaged`
                          },
                          {
                            color: "purple",
                            title: "Q3: Predictive Intelligence Implementation",
                            description: "AI-powered insights and predictive modeling",
                            activities: "Predictive model training, AI insights configuration, advanced workflow integration",
                            resources: `€${Math.round(counterValues.q3RevenueImpact)}K quarterly revenue impact`,
                            metrics: "Trend forecasting, anomaly detection"
                          },
                          {
                            color: "gray",
                            title: "Q4: Advanced Features & Optimization",
                            description: "Full feature rollout and performance optimization",
                            activities: "Advanced reporting suite, performance tuning, user experience optimization",
                            resources: `€${Math.round(counterValues.q4EfficiencyImprovements)}K quarterly efficiency improvements`,
                            metrics: `${Math.round(counterValues.q4UserSatisfaction)}% user satisfaction, full ROI realization`
                          }
                        ].map((quarter, index) => (
                          <motion.div
                            key={index}
                            className="flex gap-4"
                            initial={{ opacity: 0, x: -50, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.3 + (index * 0.2),
                              type: "spring",
                              stiffness: 100
                            }}
                          >
                            <div className="flex-shrink-0">
                              <motion.div
                                className={`w-3 h-3 bg-${quarter.color}-500 rounded-full mt-2`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.4 + (index * 0.2) }}
                              />
                              {index < 3 && (
                                <motion.div
                                  className="w-0.5 h-20 bg-gray-200 ml-1 mt-2"
                                  initial={{ height: 0 }}
                                  animate={{ height: 80 }}
                                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.2) }}
                                />
                              )}
                            </div>
                            <div className="flex-1">
                              <motion.div
                                className={`bg-${quarter.color}-50 rounded-lg p-4 border-l-4 border-${quarter.color}-500`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
                                whileHover={{
                                  scale: 1.02,
                                  x: 5,
                                  transition: { duration: 0.2 }
                                }}
                              >
                                <h4 className={`font-semibold text-${quarter.color}-900 mb-1`}>
                                  {quarter.title}
                                </h4>
                                <p className={`text-${quarter.color}-800 text-xs mb-3`}>
                                  {quarter.description}
                                </p>
                                <div className="space-y-2 text-sm">
                                  <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.2) }}
                                  >
                                    <span className={`font-medium text-sm text-${quarter.color}-900`}>
                                      Key Activities:
                                    </span>
                                    <span className={`text-${quarter.color}-800 text-xs ml-1`}>
                                      {quarter.activities}
                                    </span>
                                  </motion.div>
                                  <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.7 + (index * 0.2) }}
                                  >
                                    <span className={`font-medium text-${quarter.color}-900`}>
                                      Resources:
                                    </span>
                                    <span className={`text-${quarter.color}-800 text-xs ml-1`}>
                                      {quarter.resources}
                                    </span>
                                  </motion.div>
                                  <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.8 + (index * 0.2) }}
                                  >
                                    <span className={`font-medium text-sm text-${quarter.color}-900`}>
                                      Success Metrics:
                                    </span>
                                    <span className={`text-${quarter.color}-800 text-xs ml-1`}>
                                      {quarter.metrics}
                                    </span>
                                  </motion.div>
                                </div>
                              </motion.div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Bottom Metrics Grid */}
                    <motion.div
                      className="grid grid-cols-1 lg:grid-cols-3 gap-2 p-4"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2,
                        type: "spring",
                        stiffness: 80
                      }}
                    >
                      {/* Resource Allocation */}
                      <motion.div
                        className="bg-gray-50 rounded-lg p-4"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2 text-center">
                          Resource Allocation
                        </h4>
                        <div className="space-y-3">
                          {[
                            { label: "Technology Investment", value: `€${Math.round(counterValues.techInvestment)}K`, percentage: "(70%)" },
                            { label: "Training & Support", value: `€${Math.round(counterValues.trainingSupport)}K`, percentage: "(20%)" },
                            { label: "Change Management", value: `€${Math.round(counterValues.changeManagement)}K`, percentage: "(10%)" }
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              className="flex justify-between items-center"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                            >
                              <span className="text-sm text-gray-700">
                                {item.label}
                              </span>
                              <div className="text-right font-semibold flex items-center gap-1 text-gray-900">
                                <div className="font-semibold text-gray-900">
                                  {item.value}
                                </div>
                                <div className="text-xs">{item.percentage}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Success Metrics Dashboard */}
                      <motion.div
                        className="bg-gray-50 rounded-lg p-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2 text-center">
                          Success Metrics Dashboard
                        </h4>
                        <div className="space-y-3">
                          {[
                            { label: "Cost Reduction Target", value: `€${Math.round(counterValues.costReduction)}K`, unit: "annually", color: "blue" },
                            { label: "Revenue Enhancement", value: `€${Math.round(counterValues.revenueEnhancement)}K`, unit: "annually", color: "green" },
                            { label: "User Adoption Rate", value: `${Math.round(counterValues.userAdoptionRate)}%`, unit: "target", color: "purple" }
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              className="flex justify-between items-center"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                            >
                              <span className="text-sm text-gray-700">
                                {item.label}
                              </span>
                              <div className={`text-right font-semibold flex items-center gap-1 text-${item.color}-600`}>
                                <div className={`font-semibold text-${item.color}-600`}>
                                  {item.value}
                                </div>
                                <div className="text-xs">{item.unit}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Implementation Success Factors */}
                      <motion.div
                        className="bg-gray-50 rounded-lg p-2"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2 text-center">
                          Implementation Success Factors
                        </h4>
                        <div className="space-y-3">
                          {[
                            { label: "Technical Integration", value: `${Math.round(counterValues.technicalIntegration)}%`, unit: "readiness", color: "green" },
                            { label: "User Readiness", value: `${Math.round(counterValues.userReadiness)}%`, unit: "confidence", color: "blue" },
                            { label: "Change Management", value: "Strong", unit: "support", color: "green" }
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              className="flex justify-between items-center"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                            >
                              <span className="text-sm text-gray-700">
                                {item.label}
                              </span>
                              <div className={`text-right font-semibold flex items-center gap-1 text-${item.color}-600`}>
                                <div className={`font-semibold text-${item.color}-600`}>
                                  {item.value}
                                </div>
                                <div className="text-xs text-gray-500">{item.unit}</div>
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
