"use client";

import React, { useEffect, useState } from "react";
import { Shield, TrendingUp, AlertTriangle, Target } from "lucide-react";
import { TfiReload } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";
import Sugg1 from "../Option1/Missing/sugg1";

const OnboardingIntelligenceAns4 = () => {
  const [showAnalyzing, setShowAnalyzing] = useState(true);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showSugg1, setShowSugg1] = useState(false);

  useEffect(() => {
    // Show analyzing container for 3s, then show main content
    const timerAnalyzing = setTimeout(() => {
      setShowAnalyzing(false);
      setShowFirst(true);
    }, 3000);

    const timer2 = setTimeout(() => setShowSecond(true), 4000);
    const timer3 = setTimeout(() => setShowThird(true), 5500);
    const timer4 = setTimeout(() => setShowSugg1(true), 7000);

    return () => {
      clearTimeout(timerAnalyzing);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
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
                I&apos;ll analyze competitive intelligence from Confluence
                competitive analysis pages, SharePoint market research, and
                recent Teams sales discussions to provide you with comprehensive
                competitor insights and strategic recommendations.
              </motion.p>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <TfiReload className="inline-block animate-spin mr-2" />
                <p className="text-xs opacity-90">
                  Analyzing competitive data across Confluence, SharePoint, and
                  Teams platforms...
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
                I&apos;ve synthesized competitive intelligence from Confluence
                competitive analysis pages, SharePoint market research, and
                recent Teams sales discussions:
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Competitor Cards */}
        <AnimatePresence>
          {showSecond && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              {/* DataCorp Analytics - Primary Competitor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.div
                  className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex">
                    <div className="w-1 bg-red-500 rounded-l-lg"></div>
                    <div className="p-6 flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        DataCorp Analytics -{" "}
                        <span className="text-red-600">Primary Competitor</span>
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-[6px] flex-shrink-0"></div>
                          <div className="flex items-center gap-2">
                            {/* <Shield className="w-4 h-4 text-gray-600" /> */}
                            <span className="text-gray-700">
                              <span className="font-semibold text-sm text-gray-700">
                                Their strength:
                              </span>{" "}
                              Legacy enterprise relationships
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-[6px] flex-shrink-0"></div>
                          <div className="flex items-center gap-2">
                            {/* <TrendingUp className="w-4 h-4 text-gray-600" /> */}
                            <span className="text-gray-700">
                              <span className="font-semibold text-sm text-gray-700">
                                Our advantage:
                              </span>{" "}
                              40% faster implementation, modern API architecture
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-[6px] flex-shrink-0"></div>
                          <div className="flex items-center gap-2">
                            {/* <Target className="w-4 h-4 text-gray-600" /> */}
                            <span className="text-gray-700">
                              <span className="font-semibold text-sm text-gray-700">
                                Win rate against them:
                              </span>{" "}
                              67% (from HubSpot deal analysis)
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* InnovateTech Solutions - Emerging Threat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.div
                  className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex">
                    <div className="w-1 bg-gray-300 rounded-l-lg"></div>
                    <div className="p-6 flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        InnovateTech Solutions -{" "}
                        <span className="font-bold">Emerging Threat</span>
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-500 rounded-full mt-[6px] flex-shrink-0"></div>
                          <div className="flex items-center gap-2">
                            {/* <Shield className="w-4 h-4 text-gray-600" /> */}
                            <span className="text-gray-700">
                              <span className="font-semibold text-sm text-gray-700">
                                Their strength:
                              </span>{" "}
                              Lower pricing, aggressive sales
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-500 rounded-full mt-[6px] flex-shrink-0"></div>
                          <div className="flex items-center gap-2">
                            {/* <TrendingUp className="w-4 h-4 text-gray-600" /> */}
                            <span className="text-gray-700">
                              <span className="font-semibold text-sm text-gray-700">
                                Our advantage:
                              </span>{" "}
                              Superior analytics capabilities, enterprise
                              security
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-500 rounded-full mt-[6px] flex-shrink-0"></div>
                          <div className="flex items-center gap-2">
                            {/* <AlertTriangle className="w-4 h-4 text-gray-600" /> */}
                            <span className="text-gray-700">
                              <span className="font-semibold text-sm text-gray-700">
                                Recent intelligence:
                              </span>{" "}
                              Lost 3 deals to pricing in Q1
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showSugg1 && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="mt-4"
          >
            <Sugg1 />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OnboardingIntelligenceAns4;
