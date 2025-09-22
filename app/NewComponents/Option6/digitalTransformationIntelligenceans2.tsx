"use client";

import React, { useEffect, useState } from "react";
import {
  Bot,
  Search,
  Building2,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  X,
} from "lucide-react";
import { CiSearch } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import DigitalTransformationIntelligenceAns1 from "./digitalTransformationIntelligenceans1";
import DigitalTransformationIntelligenceAns2b from "./digitalTransformationIntelligenceans2b";

const DigitalTransformationIntelligenceAns2 = () => {
  const [showAnalyzing, setShowAnalyzing] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showSummaryComponent, setShowSummaryComponent] = useState(false);

  useEffect(() => {
    // Show analyzing component for 3 seconds, then show main content
    const timerAnalyzing = setTimeout(() => {
      setShowAnalyzing(false);
      setShowMain(true);
    }, 3000); // Show analyzing for 3 seconds

    return () => {
      clearTimeout(timerAnalyzing);
    };
  }, []);
  useEffect(() => {
    // Show second section after main section is visible
    if (showMain && !showSecond) {
      const timer = setTimeout(() => {
        setShowSecond(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showMain, showSecond]);

  useEffect(() => {
    // Show third section after second section is visible
    if (showSecond && !showThird) {
      const timer = setTimeout(() => {
        setShowThird(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showSecond, showThird]);

  useEffect(() => {
    // Show summary component after third section is visible
    if (showThird && !showSummaryComponent) {
      const timer = setTimeout(() => {
        setShowSummaryComponent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showThird, showSummaryComponent]);

  return (
    <div className="max-w-full mx-auto p-3 bg-white">
      {/* Floxa Message Box (Analyzing) - Only shows once */}
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
                I&apos;ll analyze competitive AI implementations by scanning
                industry reports, competitor websites, LinkedIn updates, and
                patent filings to give you a comprehensive competitive
                intelligence picture.
              </motion.p>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <CiSearch className="inline-block mr-2" />
                <p className="text-xs opacity-90">
                  Scanning competitor AI initiatives and implementation results...
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Competitive AI Intelligence Analysis */}
      <AnimatePresence>
        {showMain && showSecond && (
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
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8">
              <div className="flex items-center space-x-3 mb-8">
                <BarChart3 className="w-6 h-6 text-purple-600" />
                <h2 className="text-lg font-bold text-gray-900">
                  Competitive AI Intelligence Analysis
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* TechCorp Industries Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center space-x-2 mb-4">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">
                        TechCorp Industries
                      </h3>
                      <p className="text-xs text-gray-500">Direct Competitor</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">AI Investment</span>
                      <div className="text-base font-bold text-blue-600">
                        €2.1M
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">
                        Implementation
                      </span>
                      <div className="text-xs font-bold text-blue-600">
                        Microsoft Copilot
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Results</span>
                      <div className="text-xs font-bold text-green-600 flex items-center">
                        23% productivity ↑
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-xs text-green-700">
                      Successfully deployed across sales teams with strong
                      adoption rates
                    </p>
                  </div>
                </div>
                {/* DataFlow Solutions Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center space-x-2 mb-4">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">
                        DataFlow Solutions
                      </h3>
                      <p className="text-xs text-gray-500">Market Leader</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">AI Investment</span>
                      <div className="text-base font-bold text-blue-600">
                        €1.8M
                      </div>
                    </div>
                    <div className="flex justify-between items-center ">
                      <span className="text-xs text-gray-600">
                        Implementation
                      </span>
                      <div className="text-xs font-bold text-blue-600">
                        Document Processing AI
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Results</span>
                      <div className="text-xs font-bold text-green-600">
                        €340K annual savings
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-xs text-blue-700">
                      Custom AI solution for contract analysis and invoice
                      processing
                    </p>
                  </div>
                </div>
                {/* MegaCorp Enterprises Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center space-x-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">
                        MegaCorp Enterprises
                      </h3>
                      <p className="text-xs text-gray-500">
                        Failed Implementation
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">AI Investment</span>
                      <div className="text-base font-bold text-blue-600">
                        €2.7M
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">
                        Implementation
                      </span>
                      <div className="text-xs font-bold text-red-600">
                        Customer Service AI
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Results</span>
                      <div className="text-xs font-bold text-red-600">
                        34% accuracy issues
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-xs text-red-700">
                      Poor data quality preparation led to implementation failure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Market Intelligence Summary */}
      <AnimatePresence>
        {showMain && showThird && (
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
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-8">
                Market Intelligence Summary
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Successful AI Implementation Patterns */}
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-6">
                    Successful AI Implementation Patterns
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-700">
                        Focus on specific use cases with clear ROI
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-700">
                        Strong data quality foundation before implementation
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-700">
                        Phased rollout with user training and support
                      </span>
                    </div>
                  </div>
                </div>
                {/* Right Column: Common Failure Factors */}
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-6">
                    Common Failure Factors
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-700">
                        Inadequate data preparation and quality
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-700">
                        Unrealistic expectations and timeline pressure
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-700">
                        Insufficient change management and training
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSummaryComponent && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            }}
          >
            <DigitalTransformationIntelligenceAns2b />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DigitalTransformationIntelligenceAns2;
