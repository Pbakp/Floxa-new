import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnalyzingCard from "../processing-animation";
import BusinessValueROI from "./Step12";
import StaticContent from "./Step13";

const MonitoringSystem = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Activating continuous monitoring system - Real-time SLA tracking enabled" },
    { text: "Configuring daily health dashboard - Support metrics and engagement tracking" },
    { text: "Setting up early warning alerts - 30-day churn risk predictions active" },
    { text: "Implementing recovery tracking - Weekly health scores and trend analysis" },
    { text: "Finalizing monitoring setup - Proactive stakeholder management ready" },
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
        description="I'm activating a comprehensive continuous monitoring system with
                   real-time tracking, early warning alerts, and proactive recovery
                   management for your account:"
      />
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            className="bg-white p-3 rounded-lg max-w-full mx-auto mt-2"
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
                  <p className="text-gray-700 mb-4">Continuous monitoring system activated:</p>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showSecond && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1
                  }}
                >
                  {/* Daily Health Dashboard */}
                  <motion.div
                    className="bg-blue-100 p-4 rounded-lg mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.3
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <h3 className="font-semibold text-blue-600 mb-2">Daily Health Dashboard</h3>
                    <ul className="list-disc pl-6 text-blue-500 text-sm">
                      <li className="text-xs">Real-time SLA compliance tracking</li>
                      <li className="text-xs">Support ticket sentiment analysis</li>
                      <li className="text-xs">Stakeholder engagement metrics</li>
                      <li className="text-xs">API usage and performance indicators</li>
                    </ul>
                  </motion.div>

                  {/* Early Warning Alerts */}
                  <motion.div
                    className="bg-yellow-100 p-4 rounded-lg mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.5
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <h3 className="font-semibold text-yellow-600 mb-2">Early Warning Alerts</h3>
                    <ul className="list-disc pl-6 text-yellow-500 text-sm">
                      <li className="text-xs">30-day churn risk predictions</li>
                      <li className="text-xs">Stakeholder disengagement detection</li>
                      <li className="text-xs">Support escalation pattern matching</li>
                      <li className="text-xs">Communication gap identification</li>
                    </ul>
                  </motion.div>

                  {/* Recovery Tracking */}
                  <motion.div
                    className="bg-green-100 p-4 rounded-lg mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.7
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <h3 className="font-semibold text-green-600 mb-2">Recovery Tracking</h3>
                    <ul className="list-disc pl-6 text-green-500 text-sm">
                      <li className="text-xs">Weekly relationship health scores delivered every Friday</li>
                      <li className="text-xs">Monthly executive summaries with trend analysis</li>
                      <li className="text-xs">Proactive calendar reminders for stakeholder check-ins</li>
                    </ul>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showThird && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1
                  }}
                >
                  {/* Footer */}
                  <motion.div
                    className="bg-blue-500 text-white p-4 rounded-lg flex items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.9
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="text-xl mr-4">🛡️</span>
                    <p className="font-semibold text-md bg-blue-500">Never Be Surprised Again - Floxa Has Your Back</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show Business Value and Static Content only after analyzing is complete */}
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 1.2
            }}
          >
            <BusinessValueROI />
            <StaticContent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MonitoringSystem;
