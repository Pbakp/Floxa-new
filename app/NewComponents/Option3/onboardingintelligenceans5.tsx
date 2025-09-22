"use client";

import React, { useEffect, useState } from "react";
import { TfiReload } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";

const OnboardingIntelligenceAns5 = () => {
  const [showAnalyzing, setShowAnalyzing] = useState(true);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [progressValues, setProgressValues] = useState({
    draft: 0,
    marketing: 0,
    legal: 0,
    final: 0,
  });

  useEffect(() => {
    // Show analyzing container for 3s, then show main content
    const timerAnalyzing = setTimeout(() => {
      setShowAnalyzing(false);
      setShowFirst(true);
    }, 3000);

    const timer2 = setTimeout(() => setShowSecond(true), 4000);
    const timer3 = setTimeout(() => setShowThird(true), 6000);

    // Animate progress bars when second section shows
    const progressTimer = setTimeout(() => {
      setProgressValues({
        draft: 75,
        marketing: 55,
        legal: 85,
        final: 100,
      });
    }, 2000); // Start animation 2 seconds after second section shows (4000ms + 2000ms delay)

    return () => {
      clearTimeout(timerAnalyzing);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(progressTimer);
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
                I&apos;ll analyze your content approval process by examining
                Confluence process documentation and recent Jira approval
                workflows to provide you with a comprehensive overview of your
                current approval pipeline.
              </motion.p>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <TfiReload className="inline-block animate-spin mr-2" />
                <p className="text-xs opacity-90">
                  Analyzing approval workflows across Confluence and Jira
                  platforms...
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className=" mx-auto p-3 bg-white rounded-lg">
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
                Based on Confluence process documentation and recent Jira
                approval workflows, here&apos;s your content approval process:
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Approval Process Steps */}
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
              <div className="space-y-6">
                {/* Step 1: Draft Creation */}
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      1
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-md font-semibold text-gray-900">
                        Draft Creation
                      </h3>
                      <p className="text-gray-600 text-sm">
                        You create in SharePoint
                      </p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progressValues.draft}%` }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 2: Marketing Review */}
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      2
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-md font-semibold text-gray-900">
                        Marketing Review
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Sarah Chen approval
                      </p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progressValues.marketing}%` }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 3: Legal Review */}
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      3
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-md font-semibold text-gray-900">
                        Legal Review
                      </h3>
                      <p className="text-gray-600 text-sm">
                        If claims or pricing
                      </p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progressValues.legal}%` }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 4: Final Approval */}
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-sm">
                      4
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-md font-semibold text-gray-900">
                        Final Approval
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Published to channels
                      </p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                      <motion.div
                        className="bg-green-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progressValues.final}%` }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Average Timeline */}
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
                className="bg-gray-50 rounded-lg p-3 border border-gray-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-gray-700">
                  <span className="text-gray-950 text-sm font-semibold">
                    Average Timeline :
                  </span>{" "}
                  3-5 business days for standard materials, 7-10 days for major
                  campaigns
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default OnboardingIntelligenceAns5;
