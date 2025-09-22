"use client";

import React, { useEffect, useState } from "react";
import { Bot, FileText, Headphones, BarChart3, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DigitalTransformationIntelligenceAns4b from "./digitalTransformationIntelligenceans4b";
import { CiCalculator1 } from "react-icons/ci";
const DigitalTransformationIntelligenceAns4 = () => {
  const [showAnalyzing, setShowAnalyzing] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [show4b, setShow4b] = useState(false);

  useEffect(() => {
    // Show analyzing component for 3 seconds, then show second content
    const timerAnalyzing = setTimeout(() => {
      setShowAnalyzing(false);
      setShowSecond(true);
    }, 3000); // Show analyzing for 3 seconds

    // Show third section after second appears
    const timerThird = setTimeout(() => {
      setShowThird(true);
    }, 5000); // Show third after 5 seconds total

    // Show 4b component after third appears
    const timer4b = setTimeout(() => {
      setShow4b(true);
    }, 7000); // Show 4b after 7 seconds total

    return () => {
      clearTimeout(timerAnalyzing);
      clearTimeout(timerThird);
      clearTimeout(timer4b);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-3 bg-white ">
      {/* Analyzing Container - Only shows once */}
      <AnimatePresence>
        {showAnalyzing && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 0.6,
              ease: "easeOut"
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
                I&apos;ll analyze specific AI implementation opportunities with
                detailed ROI projections based on your current state and
                competitive benchmarks. Let me model the business case for each
                high-impact area.
              </motion.p>
              <motion.div
                className="flex items-center space-x-2 mt-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <CiCalculator1 />
                <p className="text-xs opacity-90">
                  Calculating ROI projections and business impact modeling...
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Implementation ROI Analysis */}
      <AnimatePresence>
        {showSecond && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            }}
            className="mb-8"
          >
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-left">
                AI Implementation ROI Analysis
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Document Processing AI Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <FileText className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Document Processing AI
                      </h3>
                      <p className="text-sm text-gray-600">
                        Contract & Invoice Automation
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Implementation Cost
                      </span>
                      <span className="text-lg font-bold text-gray-900">
                        €180K
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Annual Savings
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        €340K
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">ROI</span>
                      <span className="text-lg font-bold text-green-600">
                        189%
                      </span>
                    </div>
                    <div className="flex justify-between items-center  border-gray-200">
                      <span className="text-sm font-medium text-gray-700">
                        Payback Period
                      </span>
                      <span className="text-lg font-semibold text-gray-700">
                        6.4 months
                      </span>
                    </div>
                  </div>
                </div>

                {/* Customer Service AI Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Headphones className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Customer Service AI
                      </h3>
                      <p className="text-sm text-gray-600">
                        Intelligent Support Automation
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Implementation Cost
                      </span>
                      <span className="text-lg font-bold text-gray-900">
                        €140K
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Annual Savings
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        €280K
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">ROI</span>
                      <span className="text-lg font-bold text-green-600">
                        200%
                      </span>
                    </div>
                    <div className="flex justify-between items-center  border-gray-200">
                      <span className="text-sm font-medium text-gray-700">
                        Payback Period
                      </span>
                      <span className="text-lg font-semibold text-gray-700">
                        6.0 months
                      </span>
                    </div>
                  </div>
                </div>

                {/* Predictive Analytics Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Predictive Analytics
                      </h3>
                      <p className="text-sm text-gray-600">
                        Sales & Operations Optimization
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Implementation Cost
                      </span>
                      <span className="text-lg font-bold text-gray-900">
                        €220K
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Annual Revenue
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        €520K
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">ROI</span>
                      <span className="text-lg font-bold text-green-600">
                        236%
                      </span>
                    </div>
                    <div className="flex justify-between items-center  border-gray-200">
                      <span className="text-sm font-medium text-gray-700">
                        Payback Period
                      </span>
                      <span className="text-lg font-semibold text-gray-700">
                        5.1 months
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Total Business Impact Summary */}
      <AnimatePresence>
        {showThird && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            }}
            className="mb-8"
          >
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-8">
                {/* <TrendingUp className="w-6 h-6 text-purple-600" /> */}
                <h2 className="text-lg mx-auto font-bold text-gray-900">
                  Total Business Impact Summary
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Total 3-Year ROI */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    €2.3M
                  </div>
                  <div className="text-sm text-gray-600">Total 3-Year ROI</div>
                </div>

                {/* Total Investment */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    €540K
                  </div>
                  <div className="text-sm text-gray-600">Total Investment</div>
                </div>

                {/* Average ROI */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    426%
                  </div>
                  <div className="text-sm text-gray-600">Average ROI</div>
                </div>

                {/* Months Payback */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">5.8</div>
                  <div className="text-sm text-gray-600">Months Payback</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {show4b && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            }}
          >
            <DigitalTransformationIntelligenceAns4b />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DigitalTransformationIntelligenceAns4;
