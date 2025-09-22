"use client";

import React, { useEffect, useState } from "react";
import {
  Bot,
  AlertTriangle,
  Circle,
  AlertCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DigitalTransformationIntelligenceAns6b from "./digitalTransformationIntelligenceans6b";
import DigitalTransformationIntelligenceAns5b from "./digitalTransformationIntelligenceans5b";
import { TfiReload } from "react-icons/tfi";

const DigitalTransformationIntelligenceAns5 = () => {
  const [showAnalyzing, setShowAnalyzing] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

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

    return () => {
      clearTimeout(timerAnalyzing);
      clearTimeout(timerThird);
    };
  }, []);

  return (
    <div className="max-w-full mx-auto p-6 bg-white ">
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
                className="text-xs leading-relaxed mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                I&apos;ll now assess the implementation risks and mitigation
                strategies for your AI transformation. This analysis will help
                identify potential challenges and provide actionable solutions to
                ensure successful deployment.
              </motion.p>
              <motion.div
                className="flex flex-row items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <TfiReload className="mr-2 animate-spin" />
                <p className="text-xs opacity-90">
                  Analyzing implementation risks and mitigation strategies...
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Implementation Risk Assessment & Mitigation */}
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
              <div className="flex items-center space-x-3 mb-8">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Implementation Risk Assessment & Mitigation
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Risk Matrix Analysis */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Risk Matrix Analysis
                  </h3>

                  {/* Scatter Plot Container */}
                  <div className="relative w-full h-80 bg-white rounded-lg p-4 border">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      {/* Grid lines - every 10 units */}
                      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(
                        (value, index) => (
                          <g key={index}>
                            {/* Vertical grid lines */}
                            <line
                              x1={40 + value * 3.2}
                              y1="40"
                              x2={40 + value * 3.2}
                              y2="260"
                              stroke="#e5e7eb"
                              strokeWidth="1"
                            />
                            {/* Horizontal grid lines */}
                            <line
                              x1="40"
                              y1={40 + value * 2.2}
                              x2="360"
                              y2={40 + value * 2.2}
                              stroke="#e5e7eb"
                              strokeWidth="1"
                            />

                            {/* Axis numbers */}
                            <text
                              x={40 + value * 3.2}
                              y="275"
                              textAnchor="middle"
                              className="text-xs fill-gray-500"
                            >
                              {value}
                            </text>
                            <text
                              x="25"
                              y={265 - value * 2.2}
                              textAnchor="middle"
                              className="text-xs fill-gray-500"
                            >
                              {value}
                            </text>
                          </g>
                        )
                      )}

                      {/* Axis labels */}
                      <text
                        x="200"
                        y="295"
                        textAnchor="middle"
                        className="text-sm fill-gray-600 font-medium"
                      >
                        Probability
                      </text>
                      <text
                        x="15"
                        y="130"
                        textAnchor="middle"
                        className="text-sm fill-gray-600 font-medium"
                        transform="rotate(-90, 15, 150)"
                      >
                        Impact
                      </text>

                      {/* Data points - 8 total with varying sizes */}
                      {/* Low Risk (Green) - 3 points */}
                      <circle
                        cx={40 + 25 * 3.2}
                        cy={40 + 35 * 2.2}
                        r="4"
                        fill="#10b981"
                        stroke="#059669"
                        strokeWidth="2"
                      />
                      <circle
                        cx={40 + 30 * 3.2}
                        cy={40 + 40 * 2.2}
                        r="5"
                        fill="#10b981"
                        stroke="#059669"
                        strokeWidth="2"
                      />
                      <circle
                        cx={40 + 35 * 3.2}
                        cy={40 + 45 * 2.2}
                        r="6"
                        fill="#10b981"
                        stroke="#059669"
                        strokeWidth="2"
                      />

                      {/* Medium Risk (Orange) - 3 points */}
                      <circle
                        cx={40 + 45 * 3.2}
                        cy={40 + 65 * 2.2}
                        r="5"
                        fill="#f59e0b"
                        stroke="#d97706"
                        strokeWidth="2"
                      />
                      <circle
                        cx={40 + 50 * 3.2}
                        cy={40 + 60 * 2.2}
                        r="4"
                        fill="#f59e0b"
                        stroke="#d97706"
                        strokeWidth="2"
                      />
                      <circle
                        cx={40 + 55 * 3.2}
                        cy={40 + 70 * 2.2}
                        r="6"
                        fill="#f59e0b"
                        stroke="#d97706"
                        strokeWidth="2"
                      />

                      {/* High Risk (Red) - 2 points */}
                      <circle
                        cx={40 + 60 * 3.2}
                        cy={40 + 80 * 2.2}
                        r="7"
                        fill="#ef4444"
                        stroke="#dc2626"
                        strokeWidth="2"
                      />
                      <circle
                        cx={40 + 70 * 3.2}
                        cy={40 + 85 * 2.2}
                        r="9"
                        fill="#ef4444"
                        stroke="#dc2626"
                        strokeWidth="2"
                      />
                    </svg>

                    {/* Legend */}
                    <div className="absolute ps-5 items-center gap-5 top-2 flex justify-between left-0 bg-white ">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="w-10 h-4 bg-red-500" />
                        <span className="text-xs text-gray-600">High Risk</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="w-10 h-4 bg-orange-500" />
                        <span className="text-xs text-gray-600">Medium Risk</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-10 h-4 bg-green-500" />
                        <span className="text-xs text-gray-600">Low Risk</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Critical Risk Factors */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Critical Risk Factors
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="w-4 h-4 bg-red-400 rounded-full mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-red-400">
                          Data Quality Preparation
                        </h4>
                        <p className="text-sm text-gray-600">
                          High impact, medium probability - Critical for all AI
                          implementations
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="w-4 h-4 bg-gray-400 rounded-full mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-400">
                          Change Management Resistance
                        </h4>
                        <p className="text-sm text-gray-900">
                          Medium impact, high probability - User adoption
                          challenges
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="w-4 h-4 bg-orange-400 rounded-full mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-orange-400">
                          Technical Integration Complexity
                        </h4>
                        <p className="text-sm text-gray-600">
                          Medium impact, medium probability - System compatibility
                          issues
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Risk Areas and Mitigation Strategies */}
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
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* High-Risk Areas */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <h3 className="text-lg font-bold text-red-800">
                      High-Risk Areas
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <XCircle className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-red-700">
                        Data quality and preparation
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <XCircle className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-red-700">
                        Legacy system integration
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <XCircle className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-red-700">
                        Regulatory compliance alignment
                      </span>
                    </div>
                  </div>
                </div>

                {/* Medium-Risk Areas */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    <h3 className="text-lg font-bold text-orange-800">
                      Medium-Risk Areas
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-orange-700">
                        User adoption and training
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-orange-700">
                        Vendor selection and management
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-orange-700">
                        Performance monitoring setup
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mitigation Strategies */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h3 className="text-lg font-bold text-green-800">
                      Mitigation Strategies
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-700">
                        Data audit and cleanup phase
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-700">
                        Phased implementation approach
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-700">
                        Comprehensive change management
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show 5b only after main content is shown */}
      <AnimatePresence>
        {(showSecond && showThird) && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            }}
          >
            <DigitalTransformationIntelligenceAns5b />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default DigitalTransformationIntelligenceAns5;
