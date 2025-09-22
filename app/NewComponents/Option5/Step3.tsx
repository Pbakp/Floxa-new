// components/CriticalSupportIssues.tsx

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnalyzingCard from '../processing-animation';

const CriticalSupportIssues: React.FC = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing support ticket patterns - 12 critical issues identified" },
    { text: "Evaluating business impact - API failures affecting daily processes" },
    { text: "Categorizing by severity - High, Medium, Low impact classification" },
    { text: "Calculating resolution priorities - 72+ hours open tickets flagged" },
    { text: "Finalizing critical issues report - Actionable insights ready" },
  ], []);

  const handleBuildRepeatComplete = useCallback(() => {
    // Show dashboard first
    setShowDashboard(true);

    // Show sections with staggered delays for smooth animation
    setTimeout(() => setShowFirst(true), 300);
    setTimeout(() => setShowSecond(true), 600);
    setTimeout(() => setShowThird(true), 900);

    // Show dashboard value section after a delay
    setTimeout(() => {
      setShowDashboardValue(true);
    }, 500);
  }, []);

  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'm analyzing critical support issues by business impact and
                   categorizing them by severity to help prioritize resolution efforts:"
      />
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            className="w-full max-w-full p-3"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
          >
            <AnimatePresence>
              {showFirst && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2
                  }}
                >
                  <h2 className="text-lg sm:text-lg text-blue-600 font-semibold mb-6">
                    Analyzed critical support issues by business impact:
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showSecond && (
                <motion.div
                  className="grid grid-cols-1 gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1
                  }}
                >
                  {/* High Impact Section */}
                  <motion.div
                    className="p-4 bg-red-100 text-red-700 rounded-lg shadow-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.3
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <h3 className="text-sm font-bold">High Impact: API Integration Failures</h3>
                    <p className="text-xs mt-2">3 tickets, 72+ hours open, affecting daily reconciliation processes</p>
                  </motion.div>

                  {/* Medium Impact Section */}
                  <motion.div
                    className="p-4 bg-yellow-100 text-yellow-700 rounded-lg shadow-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.5
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <h3 className="text-sm font-bold">Medium Impact: Report Generation Delays</h3>
                    <p className="text-xs mt-2">4 tickets, performance degradation during peak hours</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CriticalSupportIssues;
