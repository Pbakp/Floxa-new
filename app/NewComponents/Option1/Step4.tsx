// components/TeamRecommendation.tsx
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnalyzingCard from '../processing-animation';

const TeamRecommendation: React.FC = () => {
  const [showTeamRecommendation, setShowTeamRecommendation] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing similar past projects in Jira for optimal setup patterns" },
    { text: "Identifying client communication preferences from HubSpot data" },
    { text: "Checking SharePoint access templates for enterprise clients" },
    { text: "Reviewing organizational policies and compliance requirements" },
    { text: "Analyzing Confluence project documentation structures" }
  ], []);

  // Function to scroll the main chat to bottom
  const scrollToBottom = () => {
    const chatContainer = document.querySelector('[data-chat-container]') ||
      document.querySelector('.flex-1.p-6.space-y-4.bg-transparent') ||
      document.querySelector('main') ||
      document.body;

    if (chatContainer) {
      chatContainer.scrollTo({
        top: chatContainer.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleBuildRepeatComplete = useCallback(() => {
    // Show dashboard first with smooth transition
    setShowDashboard(true);

    // Show team recommendation after a smooth delay
    setTimeout(() => {
      setShowTeamRecommendation(true);
      // Scroll to bottom when team recommendation is displayed
      setTimeout(() => {
        scrollToBottom();
      }, 300);
    }, 500);
  }, []);

  // Scroll when content changes
  useEffect(() => {
    if (showTeamRecommendation) {
      setTimeout(() => {
        scrollToBottom();
      }, 300);
    }
  }, [showTeamRecommendation]);

  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'll analyze your team database and match the required skills for the TechCorp project with available professionals. Let me evaluate compatibility and calculate optimal team recommendations."
      />

      <AnimatePresence mode="wait">
        {showDashboard && showTeamRecommendation && (
          <motion.div
            className="mx-auto p-3 bg-white rounded-lg"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
          >
            <motion.div
              className="p-6 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                Based on the required skills for the TechCorp project and current team availability, here are my recommended team members:
              </motion.p>

              <motion.div
                className="space-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                  <span className="font-semibold">Project Manager:</span> Jennifer Reeves (90% match, available from March 10)
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                >
                  <span className="font-semibold">ERP Specialists:</span> David Kumar (95% match, available from March 15) or Michael Chen (85% match, available immediately)
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                >
                  <span className="font-semibold">Dashboard Developer:</span> Sarah Williams (92% match, available part-time from March 20) or Alex Johnson (88% match, available part-time immediately)
                </motion.p>
              </motion.div>

              <motion.p
                className="pt-2 text-sm text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              >
                Would you like me to show you detailed profiles for any of these team members?
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TeamRecommendation;
