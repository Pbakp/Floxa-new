"use client";

import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { User, Target, TrendingUp, DollarSign } from "lucide-react";
import AnalyzingCard from "../processing-animation";

export function StakeholderSalesStrategy() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  // Refs for intersection observer
  const mainRef = useRef(null);
  const isInView = useInView(mainRef, {
    once: true,
    margin: "-20% 0px -20% 0px",
    amount: 0.3
  });

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing stakeholder profiles - Sarah Mitchell (CTO), David Kim (Analytics), Maria Santos (CFO)" },
    { text: "Extracting communication patterns - 95% response rate, 18 support tickets, 156 workflows" },
    { text: "Mapping pain points - Dashboard limitations, API integration needs, ROI requirements" },
    { text: "Reviewing engagement data - Teams mentions, Jira tickets, HubSpot contract renewal" },
    { text: "Finalizing sales strategy - Personalized value propositions and talking points for each stakeholder" },
  ], []);

  const handleBuildRepeatComplete = useCallback(() => {
    // Only set the dashboard value flag when analyzing is complete
    // This will be used as a gate to ensure content doesn't show until analysis is done
    setTimeout(() => {
      setShowDashboardValue(true);
    }, 500);
  }, []);

  // Enhanced animation control based on scroll position
  useEffect(() => {
    // Only trigger animations when component is in view AND analyzing is complete
    if (isInView && !showDashboard && showDashboardValue) {
      // Trigger animations when component enters the middle of the screen
      const timer = setTimeout(() => {
        setShowDashboard(true);
        setTimeout(() => setShowFirst(true), 200);
        setTimeout(() => setShowSecond(true), 400);
        setTimeout(() => setShowThird(true), 600);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isInView, showDashboard, showDashboardValue]);

  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'll create personalized value propositions and talking points for each stakeholder based on their role, communication patterns, and demonstrated priorities. Let me analyze your stakeholder engagement data and craft targeted sales approaches."
      />
      <div ref={mainRef}>
        <AnimatePresence>
          {showDashboard && (
            <motion.div
              className="mx-auto p-3 bg-white rounded-lg"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 80,
                damping: 20
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
                        className="flex items-center gap-2 mb-6 p-4"
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <motion.div
                          initial={{ rotate: -180, scale: 0 }}
                          animate={{ rotate: 0, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <Target className="w-4 h-4 text-gray-600" />
                        </motion.div>
                        <motion.h2
                          className="text-lg font-semibold text-gray-900"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          Stakeholder-Specific Sales Strategy
                        </motion.h2>
                      </motion.div>

                      <div className="space-y-6 p-4">
                        {[
                          {
                            color: "blue",
                            name: "Sarah Mitchell - CTO",
                            role: "Primary Contact • Technical Decision Maker • High Engagement (95% response rate)",
                            icon: User,
                            painPoints: [
                              '"Dashboard limitations are blocking decisions" (recent meeting)',
                              '18 support tickets about reporting limitations',
                              'Mentioned "intelligence" 15 times in strategy discussions'
                            ],
                            valueProps: [
                              'Cross-module analytics eliminating current dashboard silos',
                              'AI-powered insights for strategic decision making',
                              '90% reduction in custom reporting development time'
                            ],
                            recommendation: '"Sarah, I know you\'ve mentioned intelligence capabilities 15 times in recent strategy meetings. Our Intelligence Module directly addresses the dashboard limitations you raised and provides the cross-module analytics your team has been requesting through 18 support tickets."',
                            title: "Recommended Opening"
                          },
                          {
                            color: "teal",
                            name: "David Kim - Director of Analytics",
                            role: "Technical Evaluator • Heavy Analytics Module User • Implementation Champion",
                            icon: TrendingUp,
                            painPoints: [
                              'Heavy dashboard usage across all 4 modules',
                              '156 custom workflows requiring intelligence integration',
                              'Recent API integration requests for advanced analytics'
                            ],
                            valueProps: [
                              'Seamless integration with existing 156 workflows',
                              'Advanced API capabilities for custom analytics',
                              'Pre-built connectors for all 4 active modules'
                            ],
                            recommendation: '"David, the Intelligence Module integrates directly with your 156 existing workflows and provides the advanced API capabilities your team requested. Let me show you how it connects with your current Analytics Module usage patterns."',
                            title: "Recommended Technical Demo Focus"
                          },
                          {
                            color: "purple",
                            name: "Maria Santos - CFO",
                            role: "Budget Approver • ROI-Focused • Contract Renewal Decision Maker",
                            icon: DollarSign,
                            painPoints: [
                              'Contract renewal evaluation (7 months out)',
                              'Current annual investment: $580,000',
                              'Focus on measurable ROI and cost optimization'
                            ],
                            valueProps: [
                              '462% ROI with 4.4-month payback period',
                              '€420K annual cost savings through automation',
                              '€340K additional revenue through predictive insights'
                            ],
                            recommendation: '"Maria, the Intelligence Module delivers €1.8M in 3-year ROI on a €390K investment - that\'s 462% return with payback in just 4.4 months. This enhancement to your current $580K annual investment provides immediate cost savings and revenue impact."',
                            title: "Recommended Financial Presentation"
                          }
                        ].map((stakeholder, index) => (
                          <motion.div
                            key={index}
                            className={`border-l-4 border-l-${stakeholder.color}-500 bg-${stakeholder.color}-50 rounded-lg p-3`}
                            initial={{ opacity: 0, x: -80, scale: 0.8, rotateY: -15 }}
                            animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                            transition={{
                              duration: 0.8,
                              delay: 0.3 + (index * 0.25),
                              type: "spring",
                              stiffness: 120,
                              damping: 15
                            }}
                            whileHover={{
                              scale: 1.03,
                              x: 8,
                              rotateY: 2,
                              transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              scale: 1,
                              rotateY: 0
                            }}
                            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                          >
                            <motion.div
                              className="flex items-center gap-3 mb-4"
                              initial={{ opacity: 0, y: 30, x: -20 }}
                              animate={{ opacity: 1, y: 0, x: 0 }}
                              transition={{
                                duration: 0.6,
                                delay: 0.4 + (index * 0.25),
                                type: "spring",
                                stiffness: 100
                              }}
                            >
                              <motion.div
                                className={`w-10 h-10 bg-${stakeholder.color}-600 rounded-full flex items-center justify-center`}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                  duration: 0.6,
                                  delay: 0.5 + (index * 0.25),
                                  type: "spring",
                                  stiffness: 150
                                }}
                                whileHover={{
                                  scale: 1.1,
                                  rotate: 5,
                                  transition: { duration: 0.2 }
                                }}
                              >
                                <stakeholder.icon className="w-5 h-5 text-white" />
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 + (index * 0.25) }}
                              >
                                <h3 className={`font-semibold text-${stakeholder.color}-900`}>
                                  {stakeholder.name}
                                </h3>
                                <p className={`text-sm text-${stakeholder.color}-700`}>
                                  {stakeholder.role}
                                </p>
                              </motion.div>
                            </motion.div>

                            <motion.div
                              className="grid md:grid-cols-2 gap-6"
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.6,
                                delay: 0.7 + (index * 0.25),
                                type: "spring",
                                stiffness: 80
                              }}
                            >
                              <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 + (index * 0.25) }}
                              >
                                <motion.h4
                                  className="text-sm font-semibold text-gray-900 mb-3"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: 0.9 + (index * 0.25) }}
                                >
                                  Key Pain Points (from Teams/Jira)
                                </motion.h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                  {stakeholder.painPoints.map((point, pointIndex) => (
                                    <motion.li
                                      key={pointIndex}
                                      className="text-xs"
                                      initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                      animate={{ opacity: 1, x: 0, scale: 1 }}
                                      transition={{
                                        duration: 0.4,
                                        delay: 1.0 + (index * 0.25) + (pointIndex * 0.15),
                                        type: "spring",
                                        stiffness: 120
                                      }}
                                      whileHover={{
                                        x: 5,
                                        scale: 1.02,
                                        transition: { duration: 0.2 }
                                      }}
                                    >
                                      • {point}
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 + (index * 0.25) }}
                              >
                                <motion.h4
                                  className="text-sm font-semibold text-gray-900 mb-3"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: 0.9 + (index * 0.25) }}
                                >
                                  Tailored Value Propositions
                                </motion.h4>
                                <ul className="space-y-2 text-sm text-teal-700">
                                  {stakeholder.valueProps.map((prop, propIndex) => (
                                    <motion.li
                                      key={propIndex}
                                      className="text-xs"
                                      initial={{ opacity: 0, x: 20, scale: 0.9 }}
                                      animate={{ opacity: 1, x: 0, scale: 1 }}
                                      transition={{
                                        duration: 0.4,
                                        delay: 1.0 + (index * 0.25) + (propIndex * 0.15),
                                        type: "spring",
                                        stiffness: 120
                                      }}
                                      whileHover={{
                                        x: -5,
                                        scale: 1.02,
                                        transition: { duration: 0.2 }
                                      }}
                                    >
                                      • {prop}
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            </motion.div>

                            <motion.div
                              className={`mt-4 p-4 bg-${stakeholder.color}-100 rounded-lg`}
                              initial={{ opacity: 0, y: 30, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{
                                duration: 0.6,
                                delay: 1.2 + (index * 0.25),
                                type: "spring",
                                stiffness: 100
                              }}
                              whileHover={{
                                scale: 1.02,
                                y: -2,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <motion.h4
                                className={`text-sm font-semibold text-${stakeholder.color}-900 mb-2`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 1.3 + (index * 0.25) }}
                              >
                                {stakeholder.title}
                              </motion.h4>
                              <motion.p
                                className={`text-sm text-${stakeholder.color}-800`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 1.4 + (index * 0.25) }}
                              >
                                {stakeholder.recommendation}
                              </motion.p>
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
