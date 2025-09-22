"use client";

import React from "react";
import { Bot, Target } from "lucide-react";
import { motion } from "framer-motion";

const DigitalTransformationIntelligenceAns6b = () => {
  return (
    <div className="max-w-full mt-2 bg-white ">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white shadow-lg">
          {/* Main Message */}
          <motion.p
            className="text-xs leading-relaxed mb-6 text-purple-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            I&apos;ve created a comprehensive 18-month implementation roadmap
            with phased deployment approach. The plan prioritizes quick wins
            through Document Processing AI (Q2) while building foundation
            capabilities for more complex implementations. Total investment of
            €540K will generate €2.3M ROI over 3 years with measurable success
            metrics at each phase.
          </motion.p>

          {/* Executive Summary Key Points */}
          <motion.div
            className="bg-purple-600 bg-opacity-30 rounded-lg p-4 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.div
              className="flex items-center space-x-2 mb-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Target className="w-4 h-4 text-red-300" />
              <span className="font-bold text-purple-100">
                Executive Summary Key Points:
              </span>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {/* Left Column */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <p className="text-sm text-purple-100">
                  Competitive Advantage: 18-month head start over
                  MegaCorp&apos;s rebuild
                </p>
                <p className="text-sm text-purple-100">
                  Risk Mitigation: Phased approach reduces implementation risk
                  by 65%
                </p>
              </motion.div>

              {/* Right Column */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <p className="text-sm text-purple-100">
                  Quick Wins: €85K quarterly savings starting Q2
                </p>
                <p className="text-sm text-purple-100">
                  Success Probability: 87% based on competitive benchmarking
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.p
            className="text-sm text-purple-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            Would you like me to generate the executive presentation materials,
            focus on specific vendor evaluation criteria, or help you prepare
            for stakeholder alignment meetings?
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default DigitalTransformationIntelligenceAns6b;
