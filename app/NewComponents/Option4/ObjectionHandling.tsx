"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  AlertCircle,
  Users,
  Target,
  Network,
  TrendingUp,
  FileText,
  Users2,
} from "lucide-react";
import AnalyzingCard from "../processing-animation";

export function ObjectionHandling() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing common objections - PowerBI competition, implementation timeline concerns" },
    { text: "Extracting competitive threats - Tableau Enterprise, Microsoft PowerBI market presence" },
    { text: "Evaluating response strategies - ROI validation, integration advantages, success guarantees" },
    { text: "Mapping defense tactics - Universal platform approach, faster implementation, lower TCO" },
    { text: "Finalizing objection handling - Comprehensive response framework with competitive intelligence" },
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
        description="I'll analyze common objections and competitive threats based on your prospect data and market intelligence, then provide specific response strategies for each scenario. Let me evaluate implementation risks and develop mitigation strategies."
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
                        <Shield className="h-4 w-4 text-red-600" />
                      </motion.div>
                      <motion.h2
                        className="text-lg font-semibold text-gray-900"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        Objection Handling & Competitive Defense Strategy
                      </motion.h2>
                    </motion.div>

                    {/* Common Objections Section */}
                    <motion.div
                      className="mb-8"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <motion.div
                        className="flex items-center gap-2 mb-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                      >
                        <AlertCircle className="h-3 w-3 text-red-600" />
                        <h3 className="text-base font-semibold text-gray-900">
                          Common Objections & Response Framework
                        </h3>
                      </motion.div>

                      <div className="space-y-6">
                        {[
                          {
                            borderColor: "border-red-500",
                            titleColor: "text-red-700",
                            title: "We already have PowerBI - why do we need another analytics solution?",
                            bgColor: "bg-green-50",
                            responseColor: "text-green-800",
                            listColor: "text-green-700",
                            responses: [
                              "Acknowledge PowerBI's strengths but highlight cross-platform limitations",
                              "Reference DataFlow's 18 support tickets about reporting limitations",
                              "Demonstrate unique Atlassian + HubSpot integration capabilities",
                              "Show 462% ROI that PowerBI alone cannot deliver"
                            ]
                          },
                          {
                            borderColor: "border-blue-500",
                            titleColor: "text-blue-700",
                            title: "The implementation timeline seems too aggressive",
                            bgColor: "bg-blue-50",
                            responseColor: "text-blue-800",
                            listColor: "text-blue-700",
                            responses: [
                              "Reference successful implementations with similar platform footprints",
                              "Highlight existing module adoption success (4 modules, 420 users)",
                              "Offer phased approach with quick wins in Q1",
                              "Provide implementation guarantee with success metrics"
                            ]
                          },
                          {
                            borderColor: "border-purple-500",
                            titleColor: "text-purple-700",
                            title: "The ROI projections seem too optimistic",
                            bgColor: "bg-orange-50",
                            responseColor: "text-orange-800",
                            listColor: "text-orange-700",
                            responses: [
                              "Provide conservative scenarios with 50% of projected benefits",
                              "Reference specific pain points costing time/money (18 reporting requests)",
                              "Offer ROI guarantee with performance milestones",
                              "Share case studies from similar implementations"
                            ]
                          }
                        ].map((objection, index) => (
                          <motion.div
                            key={index}
                            className={`border-l-4 ${objection.borderColor} pl-4`}
                            initial={{ opacity: 0, x: -50, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.8 + (index * 0.2),
                              type: "spring",
                              stiffness: 100
                            }}
                            whileHover={{
                              scale: 1.02,
                              x: 5,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <motion.h4
                              className={`font-medium ${objection.titleColor} mb-1`}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.9 + (index * 0.2) }}
                            >
                              "{objection.title}"
                            </motion.h4>
                            <motion.div
                              className={`${objection.bgColor} p-4 rounded-lg`}
                              initial={{ opacity: 0, y: 20, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{
                                duration: 0.5,
                                delay: 1.0 + (index * 0.2),
                                type: "spring",
                                stiffness: 120
                              }}
                            >
                              <motion.p
                                className={`font-semibold ${objection.responseColor} mb-2`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 1.1 + (index * 0.2) }}
                              >
                                Response Strategy:
                              </motion.p>
                              <ul className={`${objection.listColor} text-sm space-y-1`}>
                                {objection.responses.map((response, responseIndex) => (
                                  <motion.li
                                    key={responseIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: 1.2 + (index * 0.2) + (responseIndex * 0.1)
                                    }}
                                  >
                                    • {response}
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Competitive Threat Response Matrix */}
                    <motion.div
                      className="mb-8"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                    >
                      <motion.div
                        className="flex items-center gap-2 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.5 }}
                      >
                        <Users className="h-4 w-4 text-blue-600" />
                        <h3 className="text-base font-semibold text-gray-900">
                          Competitive Threat Response Matrix
                        </h3>
                      </motion.div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          {
                            title: "Tableau Enterprise (Market Leader)",
                            threat: "Advanced analytics capabilities, market reputation",
                            defense: "Platform integration advantage, faster implementation, lower total cost",
                            message: "Tableau requires 6-month implementation vs our 12-week timeline"
                          },
                          {
                            title: "Microsoft PowerBI (Direct Integration)",
                            threat: "Native Microsoft integration, familiar interface",
                            defense: "Cross-platform capabilities, Atlassian + HubSpot integration",
                            message: "PowerBI can't connect your Jira and HubSpot data like we can"
                          }
                        ].map((competitor, index) => (
                          <motion.div
                            key={index}
                            className="space-y-2"
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                              duration: 0.6,
                              delay: 1.6 + (index * 0.2),
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
                              className="font-semibold text-sm text-blue-700"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 1.7 + (index * 0.2) }}
                            >
                              {competitor.title}
                            </motion.h4>

                            <motion.div
                              className="bg-red-50 p-3 rounded-lg"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 1.8 + (index * 0.2) }}
                            >
                              <span className="font-semibold text-red-800 text-sm mb-1">Threat:</span>
                              <span className="text-red-700 text-sm"> {competitor.threat}</span>
                            </motion.div>

                            <motion.div
                              className="bg-green-50 p-3 rounded-lg"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 1.9 + (index * 0.2) }}
                            >
                              <span className="font-semibold text-green-800 text-sm mb-1">Defense:</span>
                              <span className="text-green-700 text-sm"> {competitor.defense}</span>
                            </motion.div>

                            <motion.div
                              className="bg-blue-50 p-3 rounded-lg"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 2.0 + (index * 0.2) }}
                            >
                              <span className="font-semibold text-blue-800 text-sm mb-1">Key Message:</span>
                              <span className="text-blue-700 text-sm"> "{competitor.message}"</span>
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Universal Competitive Advantage */}
                    <motion.div
                      className="bg-purple-50 p-4 rounded-lg mb-6"
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 2.2,
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
                        className="font-bold text-sm text-purple-900 mb-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 2.3 }}
                      >
                        Universal Competitive Advantage
                      </motion.h4>
                      <motion.p
                        className="text-purple-800 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 2.4 }}
                      >
                        <span className="text-sm font-semibold">Core Differentiator:</span>{" "}
                        <span className="text-xs font-medium">
                          "No other solution provides intelligence across Microsoft
                          365, Atlassian, AND HubSpot with the depth of integration we
                          offer. Your 4-platform environment requires our universal approach
                          - competitors force you to choose between platforms or accept
                          limited integration."
                        </span>
                      </motion.p>
                    </motion.div>

                    {/* Executive Summary */}
                    <motion.div
                      className="bg-purple-100 border-l-4 border-purple-500 p-4 rounded-lg mb-6"
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 2.5,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 2.6 }}
                      >

                        <div>

                          <motion.p
                            className="text-purple-800 text-sm leading-relaxed mb-1"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 2.9 }}
                          >
                            I&apos;ve provided comprehensive upsell intelligence covering
                            competitive positioning, stakeholder strategies, objection
                            handling, and pipeline prioritization. Your Q4 strategy is now
                            backed by data-driven insights across all touchpoints.
                          </motion.p>

                          <motion.div
                            className="bg-white p-3 rounded-lg mb-1"
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                              duration: 0.5,
                              delay: 3.0,
                              type: "spring",
                              stiffness: 120
                            }}
                          >
                            <motion.div
                              className="flex items-center gap-2 mb-1"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 3.1 }}
                            >
                              <span className="text-2xl">🎯</span>
                              <span className="font-semibold text-purple-900">
                                Executive Summary Key Points:
                              </span>
                            </motion.div>
                            <motion.ul
                              className="text-purple-800 text-sm space-y-1"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 3.2 }}
                            >
                              <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 3.3 }}
                              >
                                •{" "}
                                <span className="font-bold text-sm text-purple-900">
                                  Pipeline Value:
                                </span>{" "}
                                <span className=" text-sm text-purple-900">
                                  $920K total opportunity with $625K expected revenue
                                </span>{" "}
                              </motion.li>
                              <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 3.4 }}
                              >
                                •{" "}
                                <span className="font-bold text-sm text-purple-900">
                                  Priority Focus:
                                </span>{" "}
                                <span className=" text-sm text-purple-900">
                                  DataFlow Industries (87% close probability, $208K
                                  expected)
                                </span>{" "}
                              </motion.li>
                              <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 3.5 }}
                              >
                                •{" "}
                                <span className="font-medium text-sm text-purple-900">
                                  Competitive Advantage:
                                </span>{" "}
                                <span className=" text-sm text-purple-900">
                                  Universal cross-platform integration
                                </span>{" "}
                              </motion.li>
                              <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 3.6 }}
                              >
                                •{" "}
                                <span className="font-bold text-sm text-purple-900">
                                  Success Probability:
                                </span>{" "}
                                <span className=" text-sm text-purple-900">
                                  68% weighted close rate across top 5 prospects
                                </span>{" "}
                              </motion.li>
                            </motion.ul>
                          </motion.div>

                          <motion.p
                            className="text-purple-700 text-sm font-medium"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 3.7 }}
                          >
                            <span className="font-bold text-sm">Next Steps:</span> Would you
                            like me to generate personalized outreach materials, create
                            competitive battle cards, or help you prepare specific demo
                            scenarios for your priority prospects?
                          </motion.p>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Floxa's Strategic Upsell Intelligence Value */}
                    <motion.div
                      className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mt-6"
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 3.8,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div
                        className="flex items-center gap-2 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 3.9 }}
                      >
                        <motion.div
                          initial={{ rotate: -180, scale: 0 }}
                          animate={{ rotate: 0, scale: 1 }}
                          transition={{ duration: 0.5, delay: 4.0 }}
                        >
                          <Target className="w-4 h-4 text-red-400" />
                        </motion.div>
                        <motion.h2
                          className="text-lg font-bold text-white"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 4.1 }}
                        >
                          Floxa&apos;s Strategic Upsell Intelligence Value
                        </motion.h2>
                      </motion.div>

                      <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 4.2 }}
                      >
                        {/* Measurable Business Impact */}
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 4.3 }}
                        >
                          <motion.h3
                            className="text-base font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 4.4 }}
                          >
                            Measurable Business Impact
                          </motion.h3>
                          <div className="space-y-4">
                            {[
                              { value: "$625K", description: "Expected Q4 Revenue from Prioritized Pipeline" },
                              { value: "87%", description: "Close Probability for Top Priority (DataFlow)" },
                              { value: "95%", description: "Reduction in Manual Analysis Time" }
                            ].map((metric, index) => (
                              <motion.div
                                key={index}
                                className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm"
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                  duration: 0.4,
                                  delay: 4.5 + (index * 0.1),
                                  type: "spring",
                                  stiffness: 120
                                }}
                                whileHover={{
                                  scale: 1.05,
                                  y: -2,
                                  transition: { duration: 0.2 }
                                }}
                              >
                                <motion.div
                                  className="text-xl font-bold text-white mb-1"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ duration: 0.3, delay: 4.6 + (index * 0.1) }}
                                >
                                  {metric.value}
                                </motion.div>
                                <motion.div
                                  className="text-sm text-gray-200"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: 4.7 + (index * 0.1) }}
                                >
                                  {metric.description}
                                </motion.div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Strategic Capabilities Delivered */}
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 4.3 }}
                        >
                          <motion.h3
                            className="text-base font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 4.4 }}
                          >
                            Strategic Capabilities Delivered
                          </motion.h3>
                          <div className="space-y-4">
                            {[
                              {
                                icon: Network,
                                title: "Universal Cross-Platform Intelligence",
                                description: "Complete customer analysis across Microsoft, Atlassian, and HubSpot ecosystems"
                              },
                              {
                                icon: TrendingUp,
                                title: "Competitive Intelligence Synthesis",
                                description: "Real-time market positioning with objection handling strategies"
                              },
                              {
                                icon: FileText,
                                title: "Strategic ROI Modeling",
                                description: "Evidence-based business cases with 462% ROI projections"
                              },
                              {
                                icon: Users2,
                                title: "Stakeholder Intelligence",
                                description: "Personalized value propositions and approach strategies"
                              }
                            ].map((capability, index) => (
                              <motion.div
                                key={index}
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, y: 20, x: 20 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: 4.5 + (index * 0.1),
                                  type: "spring",
                                  stiffness: 100
                                }}
                                whileHover={{
                                  x: 5,
                                  transition: { duration: 0.2 }
                                }}
                              >
                                <motion.div
                                  initial={{ rotate: -180, scale: 0 }}
                                  animate={{ rotate: 0, scale: 1 }}
                                  transition={{ duration: 0.3, delay: 4.6 + (index * 0.1) }}
                                >
                                  <capability.icon className="w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0" />
                                </motion.div>
                                <div>
                                  <motion.div
                                    className="font-semibold text-white text-sm mb-1"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 4.7 + (index * 0.1) }}
                                  >
                                    {capability.title}
                                  </motion.div>
                                  <motion.div
                                    className="text-xs text-gray-200"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 4.8 + (index * 0.1) }}
                                  >
                                    {capability.description}
                                  </motion.div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
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
