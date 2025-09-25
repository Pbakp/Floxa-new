"use client";

import React, { useEffect, useState } from "react";
import { TrendingUp, Target, Users, BarChart3 } from "lucide-react";
import { TfiReload } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToBottom } from "@/app/utils/scrollUtils";

const OnboardingIntelligenceAns6 = () => {
  const [showAnalyzing, setShowAnalyzing] = useState(true);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [counterValues, setCounterValues] = useState({
    emailCTR: 0,
    pipeline: 0,
    leadToOpp: 0,
    mqls: 0,
  });

  useEffect(() => {
    // Show analyzing container for 3s, then show main content
    const timerAnalyzing = setTimeout(() => {
      setShowAnalyzing(false);
      setShowFirst(true);
        setTimeout(() => {
        scrollToBottom();
      }, 200);
    }, 3000);

    const timer2 = setTimeout(() =>{ setShowSecond(true) ;  setTimeout(() => {
        scrollToBottom();
      }, 200);}, 4000);
    const timer3 = setTimeout(() =>{ setShowThird(true)  ;  setTimeout(() => {
        scrollToBottom();
      }, 200);},  6000);

    // Animate counters when second section shows
    const counterTimer = setTimeout(() => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounterValues({
          emailCTR: Math.min(2.8 * progress, 2.8),
          pipeline: Math.min(450 * progress, 450),
          leadToOpp: Math.min(18 * progress, 18),
          mqls: Math.min(127 * progress, 127),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, 2000); // Start animation 2 seconds after second section shows (4000ms + 2000ms delay)

    return () => {
      clearTimeout(timerAnalyzing);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(counterTimer);
    };
  }, []);

  return (
    <>
      {/* Floxa Message Box (Analyzing) - Only shows once */}
      <AnimatePresence>
        {showAnalyzing && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white shadow-lg">
              <motion.p
                className="text-xs leading-relaxed mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                I&apos;ll aggregate performance data from HubSpot campaigns,
                Google Analytics reports via SharePoint, and Teams campaign
                reviews to provide you with comprehensive marketing performance
                insights and KPI analysis.
              </motion.p>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <TfiReload className="inline-block animate-spin mr-2" />
                <p className="text-xs opacity-90">
                  Analyzing performance data across HubSpot, Google Analytics,
                  and Teams platforms...
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className=" mx-auto p-3 bg-white rounded-lg shadow-lg">
        <AnimatePresence>
          {showFirst && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
              className="mb-6"
            >
              <p className="text-gray-800 text-sm leading-relaxed">
                I&apos;ve aggregated performance data from HubSpot campaigns,
                Google Analytics (via SharePoint reports), and Teams campaign
                reviews:
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* KPI Cards */}
        <AnimatePresence>
          {showSecond && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            >
              {/* Email CTR Card */}
              <motion.div
                className="bg-green-50 rounded-lg p-3 text-center hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xl font-bold text-green-600 mb-1">
                  {counterValues.emailCTR.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600 mb-1">Email CTR</div>
                <div className="text-xs text-green-500 flex items-center justify-center gap-1">
                  ↑ 23% vs Q1
                </div>
              </motion.div>

              {/* Pipeline Generated Card */}
              <motion.div
                className="bg-blue-50 rounded-lg p-3 text-center hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xl font-bold text-blue-600 mb-1">
                  €{Math.round(counterValues.pipeline)}K
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  Pipeline Generated
                </div>
                <div className="text-xs text-blue-500">Q2 Target: €400K</div>
              </motion.div>

              {/* Lead to Opp Rate Card */}
              <motion.div
                className="bg-purple-50 rounded-lg p-3 text-center hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xl font-bold text-purple-600 mb-1">
                  {Math.round(counterValues.leadToOpp)}%
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  Lead to Opp Rate
                </div>
                <div className="text-xs text-purple-500">
                  Above industry avg
                </div>
              </motion.div>

              {/* MQLs This Month Card */}
              <motion.div
                className="bg-gray-50 rounded-lg p-3 text-center hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xl font-bold text-gray-800 mb-1">
                  {Math.round(counterValues.mqls)}
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  MQLs This Month
                </div>
                <div className="text-xs text-gray-900 flex items-center justify-center gap-1">
                  ↑ 34% MoM
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top Performing Content Section */}
        <AnimatePresence>
          {showThird && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              <motion.div
                className="bg-white rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex">
                  <div className="w-1 bg-green-500 rounded-l-lg"></div>
                  <div className="p-3 flex-1">
                    <h3 className="text-md font-semibold text-gray-900 mb-1 flex items-center gap-2">
                      Top Performing Content (from HubSpot analytics):
                    </h3>
                    <ul className="space-y-3">
                      <motion.li
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-[7.5px] flex-shrink-0"></div>
                        <span className="text-gray-700">
                          <span className="font-medium">
                            &quot;Analytics ROI Calculator&quot;
                          </span>{" "}
                          - 340% increase in demo requests
                        </span>
                      </motion.li>
                      <motion.li
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-[7.5px] flex-shrink-0"></div>
                        <span className="text-gray-700">
                          <span className="font-medium">
                            &quot;Enterprise Integration Guide&quot;
                          </span>{" "}
                          - 89% download-to-MQL conversion
                        </span>
                      </motion.li>
                      <motion.li
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-[7.5px] flex-shrink-0"></div>
                        <span className="text-gray-700">
                          <span className="font-medium">
                            &quot;Customer Success Stories&quot;
                          </span>{" "}
                          - 67% email engagement rate
                        </span>
                      </motion.li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default OnboardingIntelligenceAns6;
