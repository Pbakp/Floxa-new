"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Users, Wrench, Clock, Target } from "lucide-react";
import AnalyzingCard from "../processing-animation";

export function RiskAssessment() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing DataFlow's current environment and technical foundation" },
    { text: "Evaluating implementation risks based on competitive lessons learned" },
    { text: "Assessing user adoption patterns and resistance factors" },
    { text: "Cross-referencing integration complexity with existing systems" },
    { text: "Generating comprehensive risk mitigation strategies" }
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
        title="Risk Assessment Analysis"
        description="I'll analyze implementation risks based on DataFlow's current environment and competitive lessons learned."
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
                    {/* Title */}
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
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                      </motion.div>
                      <motion.h2
                        className="text-lg font-semibold text-gray-900"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        Implementation Risk Assessment & Mitigation
                      </motion.h2>
                    </motion.div>

                    {/* Risk Matrix and Mitigation Strategies */}
                    <motion.div
                      className="grid md:grid-cols-2 gap-6 mb-6 p-4"
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
                      {/* Risk Matrix Analysis */}
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        <h3 className="text-base font-semibold text-gray-900 mb-4">
                          Risk Matrix Analysis
                        </h3>
                        <div className="space-y-3">
                          {[
                            {
                              className: "bg-red-50 border border-red-200 rounded-lg py-4 p-2",
                              title: "User Adoption Resistance",
                              subtitle: "High Impact, Medium Probability",
                              titleClass: "text-red-800",
                              subtitleClass: "text-red-600"
                            },
                            {
                              className: "bg-orange-50 border border-orange-200 rounded-lg p-2 py-4",
                              title: "Integration Complexity",
                              subtitle: "Medium Impact, Low Probability",
                              titleClass: "text-red-800",
                              subtitleClass: "text-orange-600"
                            },
                            {
                              className: "bg-orange-50 border border-orange-200 rounded-lg p-4",
                              title: "Timeline Pressure",
                              subtitle: "Medium Impact, Medium Probability",
                              titleClass: "text-red-800",
                              subtitleClass: "text-orange-600"
                            },
                            {
                              className: "bg-green-50 border border-green-200 rounded-lg p-2 py-4",
                              title: "Budget Constraints",
                              subtitle: "Low Impact, Low Probability",
                              titleClass: "text-green-800",
                              subtitleClass: "text-green-600"
                            }
                          ].map((risk, index) => (
                            <motion.div
                              key={index}
                              className={risk.className}
                              initial={{ opacity: 0, x: -50, scale: 0.9 }}
                              animate={{ opacity: 1, x: 0, scale: 1 }}
                              transition={{
                                duration: 0.6,
                                delay: 0.4 + (index * 0.15),
                                type: "spring",
                                stiffness: 100
                              }}
                              whileHover={{
                                scale: 1.02,
                                x: 5,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <div className="flex justify-between items-center">
                                <span className={`font-medium text-sm ${risk.titleClass}`}>
                                  {risk.title}
                                </span>
                                <span className={`text-xs ${risk.subtitleClass}`}>
                                  {risk.subtitle}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Mitigation Strategies */}
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        <h3 className="text-base font-semibold text-gray-900 mb-4">
                          Mitigation Strategies
                        </h3>
                        <div className="space-y-3">
                          {[
                            {
                              className: "bg-teal-50 border border-teal-200 rounded-lg p-2 py-4",
                              title: "Change Management Program",
                              description: "Comprehensive training, champion network, phased rollout",
                              titleClass: "text-teal-800",
                              descriptionClass: "text-teal-700"
                            },
                            {
                              className: "bg-blue-50 border border-blue-200 rounded-lg p-2 py-4",
                              title: "Technical Integration Support",
                              description: "Dedicated integration team, existing platform leverage",
                              titleClass: "text-blue-800",
                              descriptionClass: "text-blue-700"
                            },
                            {
                              className: "bg-orange-50 border border-orange-200 rounded-lg p-2 py-4",
                              title: "Realistic Timeline Planning",
                              description: "Phased approach with quick wins, milestone tracking",
                              titleClass: "text-orange-800",
                              descriptionClass: "text-orange-700"
                            },
                            {
                              className: "bg-purple-50 border border-purple-200 rounded-lg p-2 py-4",
                              title: "ROI Demonstration",
                              description: "Clear business case with measurable outcomes",
                              titleClass: "text-purple-800",
                              descriptionClass: "text-purple-700"
                            }
                          ].map((strategy, index) => (
                            <motion.div
                              key={index}
                              className={strategy.className}
                              initial={{ opacity: 0, x: 50, scale: 0.9 }}
                              animate={{ opacity: 1, x: 0, scale: 1 }}
                              transition={{
                                duration: 0.6,
                                delay: 0.5 + (index * 0.15),
                                type: "spring",
                                stiffness: 100
                              }}
                              whileHover={{
                                scale: 1.02,
                                x: -5,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <div className="flex items-start gap-3">
                                <div>
                                  <h4 className={`font-medium text-sm ${strategy.titleClass}`}>
                                    {strategy.title}
                                  </h4>
                                  <p className={`text-xs ${strategy.descriptionClass}`}>
                                    {strategy.description}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* DataFlow-Specific Risk Mitigation */}
                    <motion.div
                      className="bg-blue-50 border border-blue-200 rounded-lg p-3 m-4"
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.3,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{
                        scale: 1.01,
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.h3
                        className="text-lg font-semibold text-blue-900 mb-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.4,
                          type: "spring",
                          stiffness: 120
                        }}
                      >
                        DataFlow-Specific Risk Mitigation
                      </motion.h3>
                      <motion.p
                        className="text-blue-800 text-sm leading-relaxed mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.5,
                          type: "spring",
                          stiffness: 80
                        }}
                      >
                        Based on DataFlow's strong technical foundation (4 active modules,
                        420 users) and high engagement with Sarah Mitchell (95% response
                        rate), we can mitigate most risks through user expectations during
                        implementation. Their existing module adoption success provides a
                        strong foundation for Intelligence Module rollout.
                      </motion.p>
                      <motion.p
                        className="text-blue-800 text-sm leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.6,
                          type: "spring",
                          stiffness: 80
                        }}
                      >
                        <span className="font-medium">Key Success Factor:</span> Leverage
                        David Kim (Dir. Analytics) as internal champion and demonstrate
                        quick wins with their existing analytics workflows.
                      </motion.p>
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
