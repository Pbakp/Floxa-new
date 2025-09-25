"use client";

import React, { useEffect, useState } from "react";
import { Calendar, TrendingUp, Target, Lightbulb } from "lucide-react";
import { TfiReload } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToBottom } from "@/app/utils/scrollUtils";

const OnboardingIntelligenceAns3 = () => {
  const [showAnalyzing, setShowAnalyzing] = useState(true);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  useEffect(() => {
    // Show analyzing container for 3s, then show main content
    const timerAnalyzing = setTimeout(() => {
      setShowAnalyzing(false);
      setShowFirst(true);

        setTimeout(() => {
        scrollToBottom();
      }, 200);
    }, 3000);

    const timer2 = setTimeout(() => { setShowSecond(true);setTimeout(() => {
            scrollToBottom();
          }, 200) }, 4000);
    const timer3 = setTimeout(() => { setShowThird(true);setTimeout(() => {
            scrollToBottom();
          }, 200)  }, 5500);

    return () => {
      clearTimeout(timerAnalyzing);
      clearTimeout(timer2);
      clearTimeout(timer3);
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
                I&apos;ll analyze your current marketing campaigns across
                HubSpot, SharePoint marketing folders, and Teams campaign
                channels to provide you with comprehensive campaign intelligence
                and performance insights.
              </motion.p>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <TfiReload className="inline-block animate-spin mr-2" />
                <p className="text-xs opacity-90">
                  Analyzing campaign data across HubSpot, SharePoint, and Teams
                  platforms...
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
                I&apos;ve analyzed current campaigns across HubSpot, SharePoint
                marketing folders, and Teams campaign channels:
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Campaign Cards */}
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
              className="mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Q2 Enterprise Expansion Campaign - Green Theme */}
                <motion.div
                  className="bg-green-50 rounded-lg p-3 border border-green-200 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-md font-semibold text-green-800 mb-1 flex items-center gap-2">
                    {/* <Target className="w-5 h-5 text-green-600" /> */}
                    Q2 Enterprise Expansion Campaign
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-[8px] flex-shrink-0"></div>
                      <div className="flex items-center gap-2">
                        {/* <Calendar className="w-4 h-4 text-gray-600" /> */}
                        <span className="text-gray-700">
                          <span className="font-medium">Launch:</span> April 15
                          | <span className="font-medium">Status:</span> Active
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-[8px] flex-shrink-0"></div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700">
                          127 qualified leads generated
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-[8px] flex-shrink-0"></div>
                      <div className="flex items-center gap-2">
                        {/* <Target className="w-4 h-4 text-gray-600" /> */}
                        <span className="text-gray-700">
                          €450K pipeline created
                        </span>
                      </div>
                    </li>
                  </ul>
                </motion.div>

                {/* Analytics Module Awareness Campaign - Blue Theme */}
                <motion.div
                  className="bg-blue-50 rounded-lg p-3 border border-blue-200 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-md font-semibold text-blue-800 mb-1 flex items-center gap-2">
                    {/* <TrendingUp className="w-5 h-5 text-blue-600" /> */}
                    Analytics Module Awareness Campaign
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-[8px] flex-shrink-0"></div>
                      <div className="flex items-center gap-2">
                        {/* <Calendar className="w-4 h-4 text-gray-600" /> */}
                        <span className="text-gray-700">
                          <span className="font-medium">Launch:</span> May 1 |{" "}
                          <span className="font-medium">Status:</span>{" "}
                          Optimization phase
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-[8px] flex-shrink-0"></div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700">
                          340% increase in demo requests
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-[8px] flex-shrink-0"></div>
                      <div className="flex items-center gap-2">
                        {/* <Target className="w-4 h-4 text-gray-600" /> */}
                        <span className="text-gray-700">
                          23% conversion to trial
                        </span>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Upcoming Launch Campaign Intelligence */}
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
                className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-md font-semibold text-gray-950 mb-1 flex items-center gap-2">
                  {/* <Lightbulb className="w-5 h-5 text-yellow-600" /> */}
                  Upcoming Launch Campaign Intelligence :
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Based on Confluence documentation and SharePoint campaign
                  briefs, the product launch campaign is scheduled for Q3 with a
                  focus on AI-powered analytics. Sarah Chen has been
                  coordinating with product marketing.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default OnboardingIntelligenceAns3;
