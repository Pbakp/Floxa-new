// components/Step2.tsx
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { FaFileContract } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import AnalyzingCard from '../processing-animation';
import ProjectEnvironment from './Step3';

const Step2 = () => {
  const [showContent, setShowContent] = useState(false);
  const [showProjectEnvironment, setShowProjectEnvironment] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Querying TechCorp contracts from Dynamics & SharePoint - Found 3 contracts" },
    { text: "Retrieving project documentation from Confluence - 12 files found" },
    { text: "Analyzing similar projects in Jira - 7 ERP integration projects identified" },
    { text: "Extracting project details: Digital Transformation, 8 months, $420K budget" },
    { text: "Finalizing resource allocation and compliance check - GDPR & ISO 27001" }
  ], []);

  // Function to scroll the main chat to bottom
  const scrollToBottom = () => {
    // Find the main chat container and scroll to bottom
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

  // Function to scroll to show ProjectEnvironment component
  const scrollToProjectEnvironment = () => {
    const chatContainer = document.querySelector('[data-chat-container]') ||
      document.querySelector('.flex-1.p-6.space-y-4.bg-transparent') ||
      document.querySelector('main') ||
      document.body;

    if (chatContainer) {
      // Find the ProjectEnvironment component and scroll to it
      const projectEnvElement = document.querySelector('[data-project-environment]');
      if (projectEnvElement) {
        projectEnvElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      } else {
        // Fallback: scroll to bottom
        chatContainer.scrollTo({
          top: chatContainer.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleBuildRepeatComplete = useCallback(() => {
    // Show dashboard first with smooth transition
    setShowDashboard(true);

    // Show main content after a smooth delay
    setTimeout(() => {
      setShowContent(true);
      // Scroll to show the new content with smooth animation
      setTimeout(() => {
        scrollToBottom();
      }, 200);
    }, 500);

    // Show ProjectEnvironment after a longer, smoother delay
    setTimeout(() => {
      setShowProjectEnvironment(true);
      // Scroll to show the new ProjectEnvironment component with smooth animation
      setTimeout(() => {
        scrollToProjectEnvironment();
      }, 300);
    }, 4000);
  }, []);

  // Scroll when content changes with smooth timing
  useEffect(() => {
    if (showContent && !showProjectEnvironment) {
      // Only scroll to bottom when main content shows (not when ProjectEnvironment shows)
      setTimeout(() => {
        scrollToBottom();
      }, 300);
    } else if (showProjectEnvironment) {
      // When ProjectEnvironment shows, scroll to it specifically with smooth timing
      setTimeout(() => {
        scrollToProjectEnvironment();
      }, 400);
    }
  }, [showContent, showProjectEnvironment]);



  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'll analyze the TechCorp contract and extract key project parameters to set up your digital transformation initiative. Let me parse the contract terms and identify the optimal project configuration."
      />

      <AnimatePresence mode="wait">
        {showDashboard && showContent && (
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
              className="bg-white p-6 w-full max-w-full mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.div
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <FaFileContract className="text-blue-500" />
                <h2 className="text-lg font-semibold text-gray-800">
                  TechCorp Contract Analysis
                </h2>
                <motion.span
                  className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
                >
                  Dynamics
                </motion.span>
                <motion.span
                  className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
                >
                  SharePoint
                </motion.span>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                {/* Project Scope */}
                <motion.div
                  className="bg-blue-50 rounded-md p-4 col-span-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                >
                  <h3 className="font-semibold text-sm text-blue-700 mb-2">Project Scope</h3>
                  <ul className="text-blue-600 text-sm list-disc list-inside">
                    <li>Digital Transformation Initiative</li>
                    <li>ERP System Integration</li>
                    <li>Custom Dashboard Development</li>
                  </ul>
                </motion.div>

                {/* Timeline */}
                <motion.div
                  className="bg-green-50 rounded-md p-4 col-span-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                >
                  <h3 className="font-semibold text-sm text-green-700 mb-2">Timeline</h3>
                  <ul className="text-green-700 text-sm list-disc list-inside">
                    <li>Start Date: March 15, 2025</li>
                    <li>Duration: 8 months</li>
                    <li>Key Milestone: June 30, 2025</li>
                  </ul>
                </motion.div>

                {/* Resource Requirements */}
                <motion.div
                  className="bg-purple-50 rounded-md p-4 col-span-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                >
                  <h3 className="font-semibold text-sm text-purple-700 mb-2">Resource Requirements</h3>
                  <ul className="text-purple-700 text-sm list-disc list-inside">
                    <li>Project Manager (full-time)</li>
                    <li>ERP Specialist (full-time)</li>
                    <li>Dashboard Developer (part-time)</li>
                  </ul>
                </motion.div>

                {/* Budget & Compliance */}
                <motion.div
                  className="bg-yellow-50 rounded-md p-4 col-span-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
                >
                  <h3 className="font-semibold text-sm text-yellow-800 mb-2">Budget & Compliance</h3>
                  <p className="text-yellow-800 text-sm">
                    <strong>Budget:</strong> $420,000<br />
                    <strong>Compliance:</strong> GDPR, ISO 27001
                  </p>
                </motion.div>

              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      <AnimatePresence>
        {showProjectEnvironment && (
          <motion.div
            className="transform mb-4"
            data-project-environment
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 1.0,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
              damping: 25
            }}
          >
            <ProjectEnvironment />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Step2;
