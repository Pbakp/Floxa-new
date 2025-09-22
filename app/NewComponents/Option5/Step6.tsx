// components/CrisisCallPreparation.tsx

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnalyzingCard from '../processing-animation';

const CrisisCallPreparation: React.FC = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing crisis situation - David Chen account issues identified" },
    { text: "Preparing acknowledgment script - Taking responsibility for service gaps" },
    { text: "Conducting root cause analysis - API failures and communication breakdowns" },
    { text: "Developing recovery plan - Dedicated support and infrastructure upgrades" },
    { text: "Finalizing crisis call materials - Ready for executive meeting" },
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
        description="I'm generating crisis call preparation materials for the David Chen
                   meeting, including acknowledgment scripts, root cause analysis, and
                   immediate recovery plans:"
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
                  <h2 className="text-xl sm:text-lg text-blue-600 font-semibold mb-6">
                    Generated crisis call preparation materials for David Chen meeting:
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showSecond && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1
                  }}
                >
                  {/* Issue Acknowledgment */}
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
                    <h3 className="text-md font-bold">Issue Acknowledgment Script</h3>
                    <p className="text-xs mt-2">
                      "David, I want to start by acknowledging that our service delivery hasn't met your expectations. I've identified three critical API integration issues affecting your daily reconciliation processes, and I take full responsibility for the communication gaps that led to this situation."
                    </p>
                  </motion.div>

                  {/* Root Cause Analysis */}
                  <motion.div
                    className="p-4 bg-blue-100 text-blue-700 rounded-lg shadow-md"
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
                    <h3 className="text-md font-bold">Root Cause Analysis</h3>
                    <ul className="mt-2 text-xs">
                      <li>API timeout issues traced to infrastructure scaling during Q4 growth</li>
                      <li>Support ticket routing delays due to recent team restructuring</li>
                      <li>Communication breakdown when you weren't included in technical meetings</li>
                    </ul>
                  </motion.div>

                  {/* Recovery Plan */}
                  <motion.div
                    className="p-4 bg-green-100 text-green-700 rounded-lg shadow-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.7
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <h3 className="text-md font-bold">Immediate Recovery Plan</h3>
                    <ul className="mt-2 text-xs">
                      <li>Dedicated technical architect assigned to your account (starting tomorrow)</li>
                      <li>Priority support channel with 2-hour response SLA</li>
                      <li>Weekly CTO-level check-ins for next 8 weeks</li>
                      <li>Infrastructure upgrade completed by end of week</li>
                    </ul>
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

export default CrisisCallPreparation;
