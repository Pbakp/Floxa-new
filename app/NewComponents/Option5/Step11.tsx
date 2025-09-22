"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnalyzingCard from "../processing-animation";

const CrisisInterventionPlan: React.FC = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing crisis intervention requirements - Critical account identified" },
    { text: "Scheduling emergency stakeholder meeting - Outlook calendar integration" },
    { text: "Escalating support tickets - Jira priority escalation workflow" },
    { text: "Updating account risk status - HubSpot CRM risk management" },
    { text: "Creating recovery war room - Teams collaboration setup" },
  ], []);

  const handleBuildRepeatComplete = useCallback(() => {
    // Show dashboard first
    setShowDashboard(true);

    // Show sections with staggered delays for smooth animation
    setTimeout(() => setShowFirst(true), 300);
    setTimeout(() => setShowSecond(true), 600);
    setTimeout(() => setShowThird(true), 900);
    setTimeout(() => setShowFourth(true), 1200);

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
        description="I'll execute a comprehensive crisis intervention plan across all your systems. Let me coordinate emergency responses, schedule critical meetings, and establish recovery protocols."
      />
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            className="mx-auto p-3 bg-white rounded-lg"
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
                  <h2 className="text-xl sm:text-sm text-black mb-6">Executing Crisis Intervention Plan Across All Systems:</h2>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showSecond && (
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1
                  }}
                >
                  <div className="p-4 bg-green-100 text-green-700 rounded-lg shadow-md">
                    <h3 className="text-md font-semibold">Outlook: Crisis Call Scheduled</h3>
                    <p className="text-xs mt-2">Tomorrow 2:00 PM: "Vertex Solutions - Strategic Partnership Review"</p>
                    <p className="text-xs mt-1">Attendees: David Chen (CTO), Sarah Martinez (IT Director), Alex Rodriguez</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showThird && (
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1
                  }}
                >
                  <div className="p-4 bg-teal-100 text-teal-700 rounded-lg shadow-md">
                    <h3 className="text-md font-semibold">Jira: Priority Support Escalation</h3>
                    <p className="text-xs mt-2">3 critical tickets escalated to senior engineering</p>
                    <p className="text-xs mt-1">Dedicated technical architect assigned: Jordan Martinez</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showFourth && (
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1
                  }}
                >
                  <div className="p-4 bg-blue-100 text-blue-700 rounded-lg shadow-md">
                    <h3 className="text-md font-semibold">HubSpot: Account Risk Status Updated</h3>
                    <p className="text-xs mt-2">Risk level: Critical → Under Active Management</p>
                    <p className="text-xs mt-1">Recovery plan documented with weekly checkpoints</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showFourth && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.3
                  }}
                >
                  <div className="p-4 bg-indigo-100 text-indigo-700 rounded-lg shadow-md">
                    <h3 className="text-md font-semibold">Teams: Recovery War Room Created</h3>
                    <p className="text-xs mt-2">Daily standup channel established</p>
                    <p className="text-xs mt-1">Technical architect, account team, support lead included</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CrisisInterventionPlan;
