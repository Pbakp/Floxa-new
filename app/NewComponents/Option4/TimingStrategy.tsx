"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";
import AnalyzingCard from "../processing-animation";

export function TimingStrategy() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing business cycle alignment - Q4 planning cycle, budget allocation timing" },
    { text: "Extracting engagement momentum - 95% response rate, recent intelligence discussions" },
    { text: "Mapping competitive advantage - Market leaders' longer cycles, DataMart Pro failures" },
    { text: "Reviewing optimal timing - Next 2 weeks window, contract renewal 7 months out" },
    { text: "Finalizing sales sequence - 4-week timeline with stakeholder-specific approach" },
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

  // Remove the scroll-based animation control - let AnalyzingCard handle the flow

  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'll analyze optimal timing based on DataFlow's business cycles, recent engagement patterns, and competitive market dynamics. Let me evaluate the best approach for your sales sequence strategy."
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
                  <div className="py-6 px-4">
                    {/* Title */}
                    <motion.div
                      className="flex items-center gap-3 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <motion.div
                        initial={{ rotate: -180, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <Clock className="w-4 h-4 text-gray-700" />
                      </motion.div>
                      <motion.h2
                        className="text-lg font-semibold text-gray-900"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        Optimal Timing & Sales Sequence Strategy
                      </motion.h2>
                    </motion.div>

                    {/* Optimal Outreach Window */}
                    <motion.div
                      className="mb-8"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <motion.h3
                        className="text-base font-semibold text-gray-900 mb-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                      >
                        Optimal Outreach Window: Next 2 Weeks
                      </motion.h3>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          {
                            title: "Business Cycle Alignment",
                            items: [
                              "Q4 planning cycle initiated",
                              "Budget allocation decisions pending",
                              "Contract renewal timeline (7 months)"
                            ]
                          },
                          {
                            title: "Engagement Momentum",
                            items: [
                              "Sarah Mitchell 95% response rate",
                              "Recent \"intelligence\" strategy discussions",
                              "Support ticket activity increasing"
                            ]
                          },
                          {
                            title: "Competitive Advantage",
                            items: [
                              "Market leaders have longer sales cycles",
                              "DataMart Pro failed implementations create urgency",
                              "Our platform integration advantage"
                            ]
                          }
                        ].map((section, index) => (
                          <motion.div
                            key={index}
                            className="bg-gray-50 rounded-lg p-2"
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.8 + (index * 0.2),
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
                              className="font-semibold text-gray-950 mb-3"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.9 + (index * 0.2) }}
                            >
                              {section.title}
                            </motion.h4>
                            <ul className="space-y-2 text-sm text-gray-950">
                              {section.items.map((item, itemIndex) => (
                                <motion.li
                                  key={itemIndex}
                                  className="flex items-start gap-2 text-sm"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    delay: 1.0 + (index * 0.2) + (itemIndex * 0.1)
                                  }}
                                >
                                  <div className="w-1 h-1 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                                  {item}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Recommended Sales Sequence */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                    >
                      <motion.h3
                        className="text-base font-semibold text-gray-900 mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.5 }}
                      >
                        Recommended Sales Sequence (4-Week Timeline)
                      </motion.h3>

                      <div className="space-y-6">
                        {[
                          {
                            week: 1,
                            color: "blue",
                            title: "Initial CTO Outreach",
                            description: "Direct email to Sarah Mitchell referencing recent intelligence discussions",
                            action: "Send personalized email with ROI preview and request 30-minute discovery call",
                            goal: "Secure stakeholder mapping meeting and technical requirements discussion"
                          },
                          {
                            week: 2,
                            color: "green",
                            title: "Technical Evaluation Setup",
                            description: "Engage David Kim for technical deep-dive and proof of concept",
                            action: "Schedule technical demo focused on cross-module integration",
                            goal: "Validate technical fit and identify champion advocate"
                          },
                          {
                            week: 3,
                            color: "purple",
                            title: "Executive Business Case",
                            description: "Present comprehensive ROI analysis to Maria Santos and executive team",
                            action: "Executive presentation with 462% ROI projections and implementation roadmap",
                            goal: "Secure budget approval and implementation timeline agreement"
                          },
                          {
                            week: 4,
                            color: "gray",
                            title: "Proposal & Closing",
                            description: "Deliver customized proposal with risk mitigation and success guarantees",
                            action: "Submit comprehensive proposal with implementation timeline and success metrics",
                            goal: "Close deal with signed contract and implementation start date"
                          }
                        ].map((week, index) => (
                          <motion.div
                            key={index}
                            className="flex gap-4"
                            initial={{ opacity: 0, x: -50, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{
                              duration: 0.8,
                              delay: 1.6 + (index * 0.3),
                              type: "spring",
                              stiffness: 100
                            }}
                            whileHover={{
                              scale: 1.02,
                              x: 5,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <motion.div
                              className={`w-8 h-8 bg-${week.color}-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{
                                duration: 0.6,
                                delay: 1.7 + (index * 0.3),
                                type: "spring",
                                stiffness: 150
                              }}
                              whileHover={{
                                scale: 1.1,
                                rotate: 5,
                                transition: { duration: 0.2 }
                              }}
                            >
                              {week.week}
                            </motion.div>
                            <motion.div
                              className="flex-1"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 1.8 + (index * 0.3) }}
                            >
                              <motion.div className="flex flex-col sm:flex-row sm:items-center">
                                <motion.h4
                                  className={`font-bold text-${week.color}-600`}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: 1.9 + (index * 0.3) }}
                                >
                                  Week {week.week}: {week.title}
                                </motion.h4>
                              </motion.div>
                              <motion.p
                                className="text-xs text-gray-900 mb-1"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 2.0 + (index * 0.3) }}
                              >
                                {week.description}
                              </motion.p>
                              <motion.div
                                className={`bg-${week.color}-50 rounded-lg p-2`}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                  duration: 0.5,
                                  delay: 2.1 + (index * 0.3),
                                  type: "spring",
                                  stiffness: 120
                                }}
                                whileHover={{
                                  scale: 1.02,
                                  y: -2,
                                  transition: { duration: 0.2 }
                                }}
                              >
                                <motion.div
                                  className="text-xs"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: 2.2 + (index * 0.3) }}
                                >
                                  <span className="font-semibold text-gray-900">Action:</span>
                                  <span className="text-gray-900 ml-1">{week.action}</span>
                                </motion.div>
                                <motion.div
                                  className="text-xs"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: 2.3 + (index * 0.3) }}
                                >
                                  <span className="font-semibold text-gray-900">Goal:</span>
                                  <span className="text-gray-900 ml-1">{week.goal}</span>
                                </motion.div>
                              </motion.div>
                            </motion.div>
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
