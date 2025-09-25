"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import {
  CheckCircle,
  Calendar,
  FileText,
  Bell,
  BarChart3,
  Users,
  Trophy,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnalyzingCard from "../processing-animation";

// Custom Animated Bar Chart Component
const AnimatedBarChart = ({ data, isVisible }: { data: any[], isVisible: boolean }) => {
  const maxValue = 30;
  const chartHeight = 320; // Fixed height in pixels
  
  console.log('AnimatedBarChart render - isVisible:', isVisible);
  
  useEffect(() => {
    if (isVisible) {
      console.log('Chart animation triggered!');
    }
  }, [isVisible]);
  
  return (
    <div className="h-80 w-full">
      <div className="relative h-full w-full">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-2">
          <span>30</span>
          <span>25</span>
          <span>20</span>
          <span>15</span>
          <span>10</span>
          <span>5</span>
          <span>0</span>
        </div>

        {/* Chart area */}
        <div className="ml-8 h-full relative">
          {/* Grid lines */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-px bg-gray-300"></div>
            <div className="absolute top-1/6 left-0 w-full h-px bg-gray-300"></div>
            <div className="absolute top-2/6 left-0 w-full h-px bg-gray-300"></div>
            <div className="absolute top-3/6 left-0 w-full h-px bg-gray-300"></div>
            <div className="absolute top-4/6 left-0 w-full h-px bg-gray-300"></div>
            <div className="absolute top-5/6 left-0 w-full h-px bg-gray-300"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
          </div>

          {/* Bars */}
          <div className="h-full flex items-end justify-between gap-8 relative z-0 px-4">
            {data.map((item, index) => (
              <div key={item.category} className="flex flex-col items-center relative">
                <div className="flex gap-2 mb-2 items-end">
                  {/* Traditional Bar */}
                  <div className="flex flex-col items-center justify-end">
                    <motion.div
                      className="w-12 bg-red-500 rounded-t relative"
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ 
                        scaleY: isVisible ? 1 : 0,
                        opacity: isVisible ? 1 : 0
                      }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.2,
                        ease: "easeOut"
                      }}
                      style={{ 
                        height: `${(item.traditional / maxValue) * chartHeight}px`,
                        transformOrigin: 'bottom'
                      }}
                    >
                      <motion.div 
                        className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isVisible ? 1 : 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: (index * 0.2) + 1.0
                        }}
                      >
                        {item.traditional}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Floxa Bar */}
                  <div className="flex flex-col items-center justify-end">
                    <motion.div
                      className="w-12 bg-green-500 rounded-t relative"
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ 
                        scaleY: isVisible ? 1 : 0,
                        opacity: isVisible ? 1 : 0
                      }}
                      transition={{ 
                        duration: 1.5, 
                        delay: (index * 0.2) + 0.3,
                        ease: "easeOut"
                      }}
                      style={{ 
                        height: `${(item.floxa / maxValue) * chartHeight}px`,
                        transformOrigin: 'bottom'
                      }}
                    >
                      <motion.div 
                        className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isVisible ? 1 : 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: (index * 0.2) + 1.3
                        }}
                      >
                        {item.floxa}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                <div className="text-xs text-gray-700 text-center absolute -bottom-5 whitespace-nowrap">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const OnboardingIntelligenceAns7 = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);
  const [showFifth, setShowFifth] = useState(false);
  const [showSixth, setShowSixth] = useState(false);
  const [showSeventh, setShowSeventh] = useState(false);
  const [chartAnimated, setChartAnimated] = useState(false);
  const [counterValues, setCounterValues] = useState({
    productivityReduction: 0,
    daysToKnowledge: 0,
    expertConnections: 0,
    annualROI: 0,
    monthsPayback: 0,
    onboardingMaturity: 0,
  });

  // Chart data
  const chartData = [
    {
      category: "Knowledge Discovery",
      traditional: 14,
      floxa: 2,
    },
    {
      category: "Expert Connections", 
      traditional: 21,
      floxa: 3,
    },
    {
      category: "Process Understanding",
      traditional: 10,
      floxa: 1,
    },
    {
      category: "Campaign Familiarity",
      traditional: 18,
      floxa: 2,
    },
    {
      category: "Competitive Intelligence",
      traditional: 28,
      floxa: 3,
    },
  ];

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(
    () => [
      {
        text: "Analyzing onboarding workflows - HubSpot, Jira, and Teams integration",
      },
      {
        text: "Extracting lead scoring criteria - Demographics, Engagement, Intent Signals",
      },
      {
        text: "Mapping handoff processes - Automated Jira ticket creation and SLA tracking",
      },
      {
        text: "Calculating success outcomes - 85% productivity reduction, 2.5 days to knowledge",
      },
      {
        text: "Finalizing business value - 340% annual ROI, 3.5 months payback period",
      },
    ],
    []
  );

  const handleBuildRepeatComplete = useCallback(() => {
    // Show dashboard first
    setShowDashboard(true);

    // Show sections with staggered delays for smooth animation
    setTimeout(() =>{ setShowFirst(true)   },  300);
    setTimeout(() =>{ setShowSecond(true)  }, 600);
    setTimeout(() =>{ setShowThird(true)   },  900);
    setTimeout(() =>{ setShowFourth(true)  }, 1200);
    setTimeout(() =>{ setShowFifth(true)   },  1500);
    setTimeout(() =>{ setShowSixth(true)   },  1800);
    setTimeout(() =>{ setShowSeventh(true) },2100);
    
    // Animate chart when sixth section shows (chart section)
    setTimeout(() => {
      console.log('Triggering chart animation');
      setChartAnimated(true);
    }, 2200);

    // Animate counters when fifth section shows (Onboarding Success Outcomes)
    setTimeout(() => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounterValues((prev) => ({
          ...prev,
          productivityReduction: Math.min(85 * progress, 85),
          daysToKnowledge: Math.min(2.5 * progress, 2.5),
          expertConnections: Math.min(15 * progress, 15),
        }));

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, 2000); // Start animation 2 seconds after fifth section shows

    // Animate counters when sixth section shows (Business Value)
    setTimeout(() => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounterValues((prev) => ({
          ...prev,
          annualROI: Math.min(340 * progress, 340),
          monthsPayback: Math.min(3.5 * progress, 3.5),
          onboardingMaturity: Math.min(8.7 * progress, 8.7),
        }));

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, 2500); // Start animation 2.5 seconds after sixth section shows
  }, []);

  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'll analyze your onboarding workflows across HubSpot, Jira, and Teams to provide comprehensive onboarding intelligence with success outcomes and business value metrics."
      />
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            className="mx-auto p-3 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
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
                    delay: 0.2,
                  }}
                  className="mb-6"
                >
                  <p className="text-gray-800 text-sm leading-relaxed">
                    Based on HubSpot workflows, Jira handoff processes, and
                    Teams sales alignment documentation:
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showSecond && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1,
                  }}
                  className="mb-8"
                >
                  <motion.div
                    className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-3"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-base font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      {/* <Target className="w-5 h-5 text-blue-600" /> */}
                      Lead Scoring Criteria (from HubSpot):
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                      {/* Demographics */}
                      <div className="">
                        <h4 className="text-sm font-semibold text-gray-900 ">
                          Demographics (40 points)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          {" "}
                          Title , Company size , Company size
                        </p>
                      </div>

                      {/* Engagement */}
                      <div className="">
                        <h4 className="text-sm font-semibold text-gray-900 ">
                          Engagement (35 points)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          {" "}
                          Email opens , Content downloads , Demo requests
                        </p>
                      </div>

                      {/* Intent Signals */}
                      <div className="">
                        <h4 className="text-sm font-semibold text-gray-900 ">
                          Intent Signals (25 points)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          {" "}
                          Pricing page visits , Feature comparisons
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      <span className="text-gray-700 font-semibold">
                        MQL Threshold:{" "}
                      </span>
                      65 points <span>|</span>{" "}
                      <span className="text-gray-700 font-semibold">
                        SQL Threshold:{" "}
                      </span>
                      85 points
                    </p>
                  </motion.div>
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
                    delay: 0.1,
                  }}
                >
                  <motion.div
                    className="bg-yellow-50 rounded-lg border border-yellow-200 shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex">
                      <div className="w-1 bg-yellow-500 rounded-l-lg"></div>
                      <div className="p-3 flex-1">
                        <h3 className="text-md font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          {/* <Clock className="w-5 h-5 text-yellow-600" /> */}
                          Handoff Process:
                        </h3>
                        <ol className="space-y-1 text-gray-700">
                          <motion.li
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                          >
                            <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 ">
                              <span className="text-yellow-600 font-semibold text-sm">
                                1
                              </span>
                            </div>
                            <span>
                              HubSpot automatically creates Jira ticket when SQL
                              threshold reached
                            </span>
                          </motion.li>
                          <motion.li
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                          >
                            <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 ">
                              <span className="text-yellow-600 font-semibold text-sm">
                                2
                              </span>
                            </div>
                            <span>
                              Sales rep assigned within 2 hours (tracked in
                              Teams channel)
                            </span>
                          </motion.li>
                          <motion.li
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                          >
                            <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 ">
                              <span className="text-yellow-600 font-semibold text-sm">
                                3
                              </span>
                            </div>
                            <span>
                              First contact within 24 hours (SLA monitored via
                              Dynamics)
                            </span>
                          </motion.li>
                          <motion.li
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                          >
                            <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 ">
                              <span className="text-yellow-600 font-semibold text-sm">
                                4
                              </span>
                            </div>
                            <span>
                              Discovery call scheduled within 48 hours
                            </span>
                          </motion.li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showFourth && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1,
                  }}
                  className="mt-10"
                >
                  <motion.div
                    className="bg-yellow-50 rounded-lg border border-yellow-200 shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex">
                      <div className="w-1 bg-yellow-500 rounded-l-lg"></div>
                      <div className="p-3 flex-1">
                        <h3 className="text-md font-semibold text-gray-900 mb-1">
                          Floxa - Final Proactive Summary
                        </h3>
                        <p className="text-gray-700 mb-2">
                          Emma, I&apos;ve now connected you with all the key
                          knowledge areas you need. Here&apos;s what I&apos;ve
                          set up for you:
                        </p>
                        <ul className="space-y-3 text-gray-700">
                          <motion.li
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                          >
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-[7.5px] flex-shrink-0"></div>
                            <span>
                              Meeting with Michael Chen tomorrow at 10 AM with
                              Analytics briefing materials
                            </span>
                          </motion.li>
                          <motion.li
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                          >
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-[7.5px] flex-shrink-0"></div>
                            <span>
                              Competitive battlecard shared with sales team and
                              saved to your OneDrive
                            </span>
                          </motion.li>
                          <motion.li
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                          >
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-[7.5px] flex-shrink-0"></div>
                            <span>
                              Pricing update summary scheduled for your inbox
                              when committee meets June 15th
                            </span>
                          </motion.li>
                          <motion.li
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                          >
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-[7.5px] flex-shrink-0"></div>
                            <span>
                              Campaign performance dashboard bookmarked in your
                              Teams channels
                            </span>
                          </motion.li>
                          <motion.li
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                          >
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-[7.5px] flex-shrink-0"></div>
                            <span>
                              Content approval workflow template saved to your
                              SharePoint folder
                            </span>
                          </motion.li>
                        </ul>
                        <p className="text-gray-700 mt-4 font-medium">
                          You&apos;re now ready to contribute effectively to the
                          product launch campaign planning!
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFifth && (
          <motion.div
            className="bg-white rounded-lg mx-auto shadow-sm mt-14 p-3"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <h2 className="text-xl font-bold flex items-center gap-2 text-gray-900 mb-6 ">
              <BarChart3 className="w-6 h-6 text-green-700 font-bold" />
              Onboarding Success Outcomes
            </h2>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Time to Productivity Reduction */}
              <div className="bg-green-500 rounded-lg p-8 text-center text-white hover:shadow-lg transition-shadow">
                <div className="text-2xl font-bold mb-2">
                  {Math.round(counterValues.productivityReduction)}%
                </div>
                <div className="text-sm opacity-90">Time to Productivity</div>
                <div className="text-xs opacity-90">
                  Reduction vs traditional onboarding
                </div>
              </div>

              {/* Days to Full Knowledge */}
              <div className="bg-blue-500 rounded-lg p-8 text-center text-white hover:shadow-lg transition-shadow">
                <div className="text-2xl font-bold mb-2">
                  {counterValues.daysToKnowledge.toFixed(1)}
                </div>
                <div className="text-sm opacity-90">Days to Full Knowledge</div>
                <div className="text-xs opacity-90">
                  vs 2 weeks industry average
                </div>
              </div>

              {/* Expert Connections Made */}
              <div className="bg-purple-500 rounded-lg p-8 text-center text-white hover:shadow-lg transition-shadow">
                <div className="text-2xl font-bold mb-2">
                  {Math.round(counterValues.expertConnections)}
                </div>
                <div className="text-sm opacity-90">
                  Expert Connections Made
                </div>
                <div className="text-xs opacity-90">
                  automatically via Floxa
                </div>
              </div>
            </div>

            {/* Detailed Outcomes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Emma's Knowledge Gained */}
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                  {/* <CheckCircle className="w-5 h-5" /> */}
                  Emma&apos;s Knowledge Gained
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Complete enterprise pricing knowledge
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Expert network established (15 key contacts)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Current campaign performance understanding
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Competitive positioning mastery
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Content approval process workflow
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Lead qualification system knowledge
                    </span>
                  </li>
                </ul>
              </div>

              {/* Automated Actions Completed */}
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  {/* <BarChart3 className="w-5 h-5" /> */}
                  Automated Actions Completed
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Analytics expert meeting scheduled
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Competitive battlecard created and shared
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Bell className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Pricing update alerts configured
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart3 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Performance dashboard bookmarked
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Workflow templates saved to SharePoint
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Team introductions facilitated
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSixth && (
          <motion.div
            className="bg-white rounded-lg max-w-4xl mx-auto shadow-sm mt-14 p-3 overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <h2 className="text-xl font-bold flex items-center gap-2 text-gray-900 mb-6">
              <Trophy className="w-6 h-6 text-yellow-600" />
              Onboarding Intelligence Business Value
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-500 rounded-lg p-8 text-center text-white hover:shadow-lg transition-shadow">
                <div className="text-2xl font-bold mb-2">
                  {Math.round(counterValues.annualROI)}%
                </div>
                <div className="text-sm font-medium mb-1">Annual ROI</div>
                <div className="text-xs opacity-90">
                  €180K productivity gains vs €53K investment
                </div>
              </div>

              <div className="bg-blue-500 rounded-lg p-8 text-center text-white hover:shadow-lg transition-shadow">
                <div className="text-2xl font-bold mb-2">
                  {counterValues.monthsPayback.toFixed(1)}
                </div>
                <div className="text-sm font-medium mb-1">Months Payback</div>
                <div className="text-xs opacity-90">vs 6.5 month target</div>
              </div>

              <div className="bg-purple-500 rounded-lg p-8 text-center text-white hover:shadow-lg transition-shadow">
                <div className="text-2xl font-bold mb-2">
                  {counterValues.onboardingMaturity.toFixed(1)}/10
                </div>
                <div className="text-sm font-medium mb-1">
                  Onboarding Maturity
                </div>
                <div className="text-xs opacity-90">
                  Advanced knowledge integration
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 overflow-hidden">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Onboarding Time Comparison
              </h3>
              <h4 className="text-base font-semibold text-center text-gray-700 mb-4">
                Onboarding Timeline Comparison: Traditional vs Floxa-Powered
              </h4>

              <div className="flex items-center justify-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-4 bg-red-300 border-2 border-red-500"></div>
                  <span className="text-sm text-gray-700">
                    Traditional Onboarding (Days)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-4 bg-green-300 border-2 border-green-500"></div>
                  <span className="text-sm text-gray-700">
                    Floxa-Powered Onboarding (Days)
                  </span>
                </div>
              </div>


              {/* Chart Container */}
              <div className="relative h-80 w-full">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-2">
                  <span>25</span>
                  <span>20</span>
                  <span>15</span>
                  <span>10</span>
                  <span>5</span>
                  <span>0</span>
                </div>

                {/* Chart area with grid lines */}
                <div className="absolute left-8 top-0 w-[calc(100%-2rem)] h-full z-0">
                  {/* Horizontal grid lines - aligned with Y-axis values (0-25) */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gray-300"></div>
                  <div className="absolute top-[20%] left-0 w-full h-px bg-gray-300"></div>
                  <div className="absolute top-[40%] left-0 w-full h-px bg-gray-300"></div>
                  <div className="absolute top-[60%] left-0 w-full h-px bg-gray-300"></div>
                  <div className="absolute top-[80%] left-0 w-full h-px bg-gray-300"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>

                  {/* Vertical grid lines - dividing into 5 equal sections for each competency */}
                  <div className="absolute top-0 left-0 w-px h-full bg-gray-300"></div>
                  <div className="absolute top-0 left-[20%] w-px h-full bg-gray-300"></div>
                  <div className="absolute top-0 left-[40%] w-px h-full bg-gray-300"></div>
                  <div className="absolute top-0 left-[60%] w-px h-full bg-gray-300"></div>
                  <div className="absolute top-0 left-[80%] w-px h-full bg-gray-300"></div>
                  <div className="absolute top-0 right-0 w-px h-full bg-gray-300"></div>
                </div>

                {/* Bars */}
                <div className="absolute left-8 top-0 w-[calc(100%-2rem)] h-full flex items-end justify-between px-4 relative z-10">
                  {/* Knowledge Discovery */}
                  <div className="flex flex-col items-center">
                    <div className="flex gap-1  items-end">
                      <div
                        className="w-16 bg-red-300 border-2 border-red-500 rounded-t"
                        style={{ height: "280px" }}
                      >
                        <div className="text-center text-red-800 text-xs font-medium mt-1">
                          14
                        </div>
                      </div>
                      <div
                        className="w-16 bg-green-300 border-2 border-green-500 rounded-t"
                        style={{ height: "40px" }}
                      >
                        <div className="text-center text-green-800 text-xs font-medium mt-1">
                          2
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-700 text-center absolute -bottom-5 whitespace-nowrap">
                      Knowledge Discovery
                    </div>
                  </div>

                  {/* Expert Connections */}
                  <div className="flex flex-col items-center">
                    <div className="flex gap-1  items-end">
                      <div
                        className="w-16 bg-red-300 border-2 border-red-500 rounded-t"
                        style={{ height: "220px" }}
                      >
                        <div className="text-center text-red-800 text-xs font-medium mt-1">
                          21
                        </div>
                      </div>
                      <div
                        className="w-16 bg-green-300 border-2 border-green-500 rounded-t"
                        style={{ height: "60px" }}
                      >
                        <div className="text-center text-green-800 text-xs font-medium mt-1">
                          3
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-700 text-center absolute -bottom-5 whitespace-nowrap">
                      Expert Connections
                    </div>
                  </div>

                  {/* Process Understanding */}
                  <div className="flex flex-col items-center">
                    <div className="flex gap-1  items-end">
                      <div
                        className="w-16 bg-red-300 border-2 border-red-500 rounded-t"
                        style={{ height: "200px" }}
                      >
                        <div className="text-center text-red-800 text-xs font-medium mt-1">
                          10
                        </div>
                      </div>
                      <div
                        className="w-16 bg-green-300 border-2 border-green-500 rounded-t"
                        style={{ height: "20px" }}
                      >
                        <div className="text-center text-green-800 text-xs font-medium mt-1">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-700 text-center absolute -bottom-5 whitespace-nowrap">
                      Process Understanding
                    </div>
                  </div>

                  {/* Campaign Familiarity */}
                  <div className="flex flex-col items-center">
                    <div className="flex gap-1  items-end">
                      <div
                        className="w-16 bg-red-300 border-2 border-red-500 rounded-t"
                        style={{ height: "300px" }}
                      >
                        <div className="text-center text-red-800 text-xs font-medium mt-1">
                          18
                        </div>
                      </div>
                      <div
                        className="w-16 bg-green-300 border-2 border-green-500 rounded-t"
                        style={{ height: "40px" }}
                      >
                        <div className="text-center text-green-800 text-xs font-medium mt-1">
                          2
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-700 text-center absolute -bottom-5 whitespace-nowrap">
                      Campaign Familiarity
                    </div>
                  </div>

                  {/* Competitive Intelligence */}
                  <div className="flex flex-col items-center">
                    <div className="flex gap-1  items-end">
                      <div
                        className="w-16 bg-red-300 border-2 border-red-500 rounded-t"
                        style={{ height: "100px" }}
                      >
                        <div className="text-center text-red-800 text-xs font-medium mt-1">
                          28
                        </div>
                      </div>
                      <div
                        className="w-16 bg-green-300 border-2 border-green-500 rounded-t"
                        style={{ height: "60px" }}
                      >
                        <div className="text-center text-green-800 text-xs font-medium mt-1">
                          3
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-700 text-center absolute -bottom-5 whitespace-nowrap">
                      Competitive Intelligence
                    </div>
                  </div>
                </div>
              </div>


              {/* Y-axis Label */}
              <div className="text-center text-sm text-gray-600 mt-4">
                Days to Competency
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSeventh && (
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mx-auto shadow-lg mt-10 p-8"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <div className="text-center mb-4">
              <div className="flex items-center justify-start gap-2 ">
                <Star className="w-6 h-6 text-yellow-400" />
                <h2 className="text-xl font-bold text-white">
                  Floxa&apos;s Universal Organizational Intelligence
                  Demonstrated
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Cross-Platform Intelligence Synthesis */}
              <div className="bg-white bg-opacity-0 rounded-lg p-3">
                <h3 className="text-base font-semibold text-yellow-300 mb-6">
                  Cross-Platform Intelligence Synthesis
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white text-sm">
                      Unified knowledge access across Microsoft 365, Atlassian
                      Suite, and HubSpot
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white text-sm">
                      Real-time expert identification through cross-system
                      activity analysis
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white text-sm">
                      Automated competitive intelligence compilation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white text-sm">
                      Proactive workflow optimization and task automation
                    </span>
                  </li>
                </ul>
              </div>

              {/* Business Impact Delivered */}
              <div className="bg-white bg-opacity-0 rounded-lg p-3">
                <h3 className="text-base font-semibold text-yellow-300 mb-6">
                  Business Impact Delivered
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <span className="text-green-400 text-lg">↗</span>
                    </div>
                    <span className="text-white text-sm">
                      85% reduction in time to employee productivity
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <span className="text-green-400 text-lg">↗</span>
                    </div>
                    <span className="text-white text-sm">
                      340% annual ROI through accelerated onboarding
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <span className="text-green-400 text-lg">↗</span>
                    </div>
                    <span className="text-white text-sm">
                      98% information accuracy through cross-platform validation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <span className="text-green-400 text-lg">↗</span>
                    </div>
                    <span className="text-white text-sm">
                      67% improvement in employee satisfaction scores
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OnboardingIntelligenceAns7;
