"use client";

import React, { useEffect, useState } from "react";
import { Clock, User, CheckCircle } from "lucide-react";
import { TfiReload } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";
import Sugg2 from "../Option1/Missing/sugg2";
import { scrollToBottom } from "@/app/utils/scrollUtils";

const OnboardingIntelligenceAns2 = () => {
  const [showAnalyzing, setShowAnalyzing] = useState(true);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showSugg2, setShowSugg2] = useState(false);

  useEffect(() => {
    // Show analyzing container for 3s, then show main content
    const timerAnalyzing = setTimeout(() => {
      setShowAnalyzing(false);
      setShowFirst(true);
    }, 3000);

    const timer2 = setTimeout(() =>{ setShowSecond(true);  setTimeout(() => {
        scrollToBottom();
      }, 200);}, 4000);
    const timer3 = setTimeout(() => setShowThird(true), 4500);
    const timer4 = setTimeout(() => setShowSugg2(true), 6000);

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
                I&apos;ll analyze your team&apos;s expertise and collaboration
                patterns across Confluence, Jira, and Teams to identify the best
                contacts for your Analytics Module inquiry. Let me search
                through activity logs and expertise indicators to find the most
                qualified team members.
              </motion.p>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <TfiReload className="inline-block animate-spin mr-2" />
                <p className="text-xs opacity-90">
                  Analyzing team expertise across Confluence, Jira, and Teams
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
                Based on my analysis across Confluence contributions, Jira
                ticket resolutions, and Teams participation, here are your best
                Analytics Module contacts:
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Cards */}
        <AnimatePresence>
          {showSecond && (
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              {/* Michael Chen - Green Theme */}
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
                    <div className="w-1 bg-green-500 rounded-l-lg"></div>
                    <div className="p-6 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {/* <User className="w-5 h-5 text-green-600" /> */}
                        <h3 className="text-lg font-semibold text-green-600">
                          Michael Chen - Product Manager, Analytics
                        </h3>
                        <span className="text-sm font-medium text-green-600">
                          ( 95% expertise match )
                        </span>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-[7.5px] flex-shrink-0"></div>
                          <span>
                            Primary author of Analytics documentation in
                            Confluence
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-[7.5px] flex-shrink-0"></div>
                          <span>
                            Answers 78% of Analytics questions in Teams
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Led last 3 client demos - available this week
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* James Wilson - Blue Theme */}
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
                    <div className="w-1 bg-blue-500 rounded-l-lg"></div>
                    <div className="p-6 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {/* <User className="w-5 h-5 text-blue-600" /> */}
                        <h3 className="text-lg font-semibold text-blue-600">
                          James Wilson - Customer Success Manager
                        </h3>
                        <span className="text-sm font-medium text-blue-600">
                          ( 79% expertise match )
                        </span>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-[7.5px] flex-shrink-0"></div>
                          <span>
                            Manages 5 enterprise accounts using Analytics Module
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-[7.5px] flex-shrink-0"></div>
                          <span>Available now (Teams status: green)</span>
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
        {showSugg2 && (
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
            <Sugg2 />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OnboardingIntelligenceAns2;
