"use client";

import React, { useEffect, useState } from "react";
import { Bot, ClipboardList, BarChart3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DigitalTransformationIntelligenceAns6b from "./digitalTransformationIntelligenceans6b";
import { TfiReload } from "react-icons/tfi";

const DigitalTransformationIntelligenceAns6 = () => {
  const [showAnalyzing, setShowAnalyzing] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);

  useEffect(() => {
    // Show analyzing component for 3 seconds, then show second content
    const timerAnalyzing = setTimeout(() => {
      setShowAnalyzing(false);
      setShowSecond(true);
    }, 3000); // Show analyzing for 3 seconds

    // Show sections one by one in sequence
    const timerThird = setTimeout(() => {
      setShowThird(true);
    }, 5000); // Show Q1-Q3 timeline items after 5 seconds total

    const timerFourth = setTimeout(() => {
      setShowFourth(true);
    }, 7000); // Show Q4 and success metrics after 7 seconds total

    return () => {
      clearTimeout(timerAnalyzing);
      clearTimeout(timerThird);
      clearTimeout(timerFourth);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white ">
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
                I&apos;ll create a comprehensive implementation roadmap with phased approach, resource allocation, and
                success metrics. This will include timeline optimization based on your readiness levels and competitive
                positioning requirements
              </motion.p>
              <motion.div
                className="flex flex-row items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <TfiReload className="mr-2 animate-spin" />
                <p className="text-xs opacity-90">
                  Generating implementation roadmap and execution framework...
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Implementation Roadmap & Execution Plan */}
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
              <div className="flex items-center space-x-3 mb-6">
                <ClipboardList className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  AI Implementation Roadmap & Execution Plan
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                18-Month Implementation Timeline
              </p>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                {/* Q1: Foundation & Data Preparation */}
                <div
                  className={`relative flex items-start space-x-6 mb-8 transform transition-all duration-700 ease-out ${showThird
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                    }`}
                >
                  {/* Timeline marker */}
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    Q1
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Foundation & Data Preparation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Data audit, quality improvement, infrastructure setup
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Key Activities
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              Data quality assessment and cleanup
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              AI infrastructure setup and testing
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              Team training and skill development
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="text-right">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-800 mb-2">
                            Resources
                          </h4>
                          <p className="text-sm text-blue-700">
                            €120K Investment, 4 FTE team members
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q2: Document Processing AI Implementation */}
                <div
                  className={`relative flex items-start space-x-6 mb-8 transform transition-all duration-700 ease-out ${showThird
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                    }`}
                >
                  {/* Timeline marker */}
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    Q2
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Document Processing AI Implementation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Contract and invoice automation deployment
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Key Activities
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              AI model training and testing
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              Pilot Implementation with finance team
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              Performance monitoring setup
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="text-right">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="font-semibold text-green-800 mb-2">
                            Expected Results
                          </h4>
                          <p className="text-sm text-green-700">
                            €85K quarterly savings
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q3: Customer Service AI Deployment */}
                <div
                  className={`relative flex items-start space-x-6 mb-8 transform transition-all duration-700 ease-out ${showThird
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                    }`}
                >
                  {/* Timeline marker */}
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    Q3
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Customer Service AI Deployment
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Intelligent support automation rollout
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Key Activities
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              AI chatbot development and training
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              Integration with existing support systems
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              Customer experience optimization
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="text-right">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="font-semibold text-green-800 mb-2">
                            Expected Results
                          </h4>
                          <p className="text-sm text-green-700">
                            €70K quarterly savings
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Predictive Analytics Implementation */}
                <div
                  className={`relative flex items-start space-x-6 transform transition-all duration-700 ease-out ${showFourth
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                    }`}
                >
                  {/* Timeline marker */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    Q4
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Predictive Analytics Implementation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Sales and operations optimization system
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Key Activities
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              Advanced analytics model development
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              Sales and operations Integration
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              Performance dashboard creation
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="text-right">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="font-semibold text-green-800 mb-2">
                            Expected Results
                          </h4>
                          <p className="text-sm text-green-700">
                            €130K quarterly revenue Increase
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Metrics Dashboard & Resource Allocation */}
      <AnimatePresence>
        {showFourth && (
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Success Metrics Dashboard */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">
                    Success Metrics Dashboard
                  </h3>

                  <div className="space-y-4">
                    {/* Cost Reduction Target */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        Cost Reduction Target
                      </span>
                      <span className="text-sm font-bold text-green-700">
                        €620K annually
                      </span>
                    </div>

                    {/* Revenue Enhancement */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        Revenue Enhancement
                      </span>
                      <span className="text-sm font-bold text-blue-700">
                        €520K annually
                      </span>
                    </div>

                    {/* Productivity Improvement */}
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        Productivity Improvement
                      </span>
                      <span className="text-sm font-bold text-purple-700">
                        25% increase
                      </span>
                    </div>

                    {/* Customer Satisfaction */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        Customer Satisfaction
                      </span>
                      <span className="text-sm font-bold text-gray-700">
                        15% improvement
                      </span>
                    </div>
                  </div>
                </div>

                {/* Resource Allocation */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">
                    Resource Allocation
                  </h3>

                  <div className="space-y-6">
                    {/* Technology Investment */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Technology Investment
                        </span>
                        <span className="text-sm font-bold text-blue-700">
                          €380K (70%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-blue-500 h-3 rounded-full"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>

                    {/* Training & Development */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Training & Development
                        </span>
                        <span className="text-sm font-bold text-green-700">
                          €110K (20%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-green-500 h-3 rounded-full"
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                    </div>

                    {/* Change Management */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Change Management
                        </span>
                        <span className="text-sm font-bold text-purple-700">
                          €50K (10%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-purple-500 h-3 rounded-full"
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show 6b only after main content is shown */}
      <AnimatePresence>
        {(showSecond || showThird || showFourth) && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            }}
          >
            <DigitalTransformationIntelligenceAns6b />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DigitalTransformationIntelligenceAns6;
