import React, { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnalyzingCard from '../processing-animation';
import DashboardValueSection from "./Step12";
import StrategicValueSection from "./Step13";

const Badge = ({ children, color }: { children: React.ReactNode; color: string }) => {
  const baseClasses =
    "inline-block px-3 py-1 text-sm font-medium rounded-full text-white";
  const colors = {
    blue: "bg-blue-600",
    lightBlue: "bg-blue-400",
    darkBlue: "bg-blue-800",
    red: "bg-red-300 text-red-800",
    yellow: "bg-yellow-300 text-yellow-800",
    green: "bg-green-300 text-green-800",
  };

  return <span className={`${baseClasses} ${colors[color as keyof typeof colors] || colors.blue}`}>{children}</span>;
};

const ProjectDashboard = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showTopStats, setShowTopStats] = useState(false);
  const [showTimelineRisk, setShowTimelineRisk] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);
  const [showStrategicValue, setShowStrategicValue] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Verifying all components are set up across all systems" },
    { text: "Confirming permissions and access rights in all platforms" },
    { text: "Sending notifications to team members via Teams" },
    { text: "Updating project status in Dynamics" },
    { text: "Updating client engagement records in HubSpot" },
    { text: "Creating cross-reference links between systems" }
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

    // Show header after a smooth delay
    setTimeout(() => {
      setShowHeader(true);
    }, 500);

    // Show top stats row after header
    setTimeout(() => {
      setShowTopStats(true);
    }, 1000);

    // Show timeline and risk row after top stats
    setTimeout(() => {
      setShowTimelineRisk(true);
    }, 1500);

    // Show activities row after timeline/risk
    setTimeout(() => {
      setShowActivities(true);
    }, 2000);

    // Show dashboard value section after all dashboard animations complete
    setTimeout(() => {
      setShowDashboardValue(true);
    }, 3000);

    // Show strategic value section after dashboard value
    setTimeout(() => {
      setShowStrategicValue(true);
      // Scroll to bottom when strategic value section is displayed
      setTimeout(() => {
        scrollToBottom();
      }, 300);
    }, 5000);
  }, []);

  // Scroll when content changes
  useEffect(() => {
    if (showDashboard || showDashboardValue || showStrategicValue) {
      setTimeout(() => {
        scrollToBottom();
      }, 300);
    }
  }, [showDashboard, showDashboardValue, showStrategicValue]);

  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'll analyze the project data and generate a comprehensive executive dashboard. Let me review team assignments, budget allocations, and timeline risks to create actionable insights."
      />

      <AnimatePresence mode="wait">
        {showDashboard && (
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
            <div className="max-w-full p-3 bg-white rounded-lg space-y-2">
              {/* Header */}
              <motion.div
                className="flex flex-wrap items-center gap-3 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div
                  className="flex items-center space-x-2 text-gray-900 font-semibold text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </motion.svg>
                  <span>Project Dashboard for Executive Team</span>
                </motion.div>

                <motion.div
                  className="flex gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                  {[
                    { tool: "SharePoint", color: "lightBlue" },
                    { tool: "Dynamics", color: "blue" },
                    { tool: "Jira", color: "darkBlue" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.0 + (index * 0.1), ease: "easeOut" }}
                    >
                      <Badge color={item.color}>{item.tool}</Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Top Stats */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              >
                {/* Project Status */}
                <motion.div
                  className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-400"
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                >
                  <h3 className="font-semibold text-gray-700 mb-2">Project Status</h3>
                  <p className="text-2xl font-extrabold text-green-700 mb-1">INITIATED</p>
                  <p className="text-gray-600 text-sm">Start Date: March 15, 2025</p>
                  <p className="text-gray-600 text-sm">End Date: November 15, 2025</p>
                </motion.div>

                {/* Budget */}
                <motion.div
                  className="bg-white rounded-lg shadow p-6"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                >
                  <h3 className="font-semibold text-gray-700 mb-2">Budget</h3>
                  <p className="text-3xl font-extrabold text-blue-700 mb-1">$420,000</p>
                  <p className="text-gray-600 text-sm">Contract Value</p>
                  <p className="text-gray-600 text-sm">Est. Margin: 32%</p>
                </motion.div>

                {/* Team */}
                <motion.div
                  className="bg-white rounded-lg shadow p-6"
                  initial={{ opacity: 0, x: 30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
                >
                  <h3 className="font-semibold text-gray-700 mb-2">Team</h3>
                  <p className="text-3xl font-extrabold text-purple-700 mb-1">3 Members</p>
                  <p className="text-gray-600 text-sm">Experience with client: 2 members</p>
                  <p className="text-gray-600 text-sm">Skills match: 92%</p>
                </motion.div>
              </motion.div>

              {/* Timeline and Risk Assessment */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
              >
                {/* Timeline Overview */}
                <motion.div
                  className="bg-gray-50 rounded-lg shadow p-6"
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
                >
                  <h4 className="font-semibold text-gray-600 mb-3">Timeline Overview</h4>
                  <motion.div
                    className="space-y-3 text-gray-800"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
                  >
                    {[
                      { phase: "Phase 1", status: "Start", color: "text-blue-600 bg-blue-100", disabled: false },
                      { phase: "Phase 2", status: "Pending", color: "text-gray-600 bg-gray-200", disabled: true },
                      { phase: "Phase 3", status: "Pending", color: "text-gray-600 bg-gray-200", disabled: true }
                    ].map((item, index) => (
                      <motion.div
                        key={item.phase}
                        className="flex justify-between items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 2.4 + (index * 0.1), ease: "easeOut" }}
                      >
                        <span>{item.phase}</span>
                        <button
                          className={`${item.color} px-3 py-1 rounded text-sm`}
                          disabled={item.disabled}
                        >
                          {item.status}
                        </button>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Risk Assessment */}
                <motion.div
                  className="bg-gray-50 rounded-lg shadow p-6"
                  initial={{ opacity: 0, x: 30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
                >
                  <h4 className="font-semibold text-gray-600 mb-3">Risk Assessment</h4>
                  <motion.div
                    className="space-y-4 text-gray-900"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
                  >
                    {[
                      { risk: "High Risk", badge: "1 item", color: "red" },
                      { risk: "Medium Risk", badge: "2 items", color: "yellow" },
                      { risk: "Low Risk", badge: "1 item", color: "green" }
                    ].map((item, index) => (
                      <motion.div
                        key={item.risk}
                        className="flex justify-between items-center"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 2.4 + (index * 0.1), ease: "easeOut" }}
                      >
                        <span>{item.risk}</span>
                        <Badge color={item.color}>{item.badge}</Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Key Upcoming Activities */}
              <motion.div
                className="bg-blue-50 rounded-lg p-6 text-blue-800"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
              >
                <h4 className="font-semibold mb-3">Key Upcoming Activities</h4>
                <motion.ul
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.8, ease: "easeOut" }}
                >
                  {[
                    {
                      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z",
                      text: "Internal Kickoff Meeting - March 12, 2025"
                    },
                    {
                      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M12 11a4 4 0 100-8 4 4 0 000 8z",
                      text: "Client Kickoff Meeting - March 16, 2025"
                    },
                    {
                      icon: "M12 9v2m0 4h.01M12 3a9 9 0 110 18 9 9 0 010-18z",
                      text: "Technical Discovery Session - TBD (High Priority)"
                    }
                  ].map((activity, index) => (
                    <motion.li
                      key={activity.text}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 3.0 + (index * 0.1), ease: "easeOut" }}
                    >
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 3.0 + (index * 0.1) + 0.1, ease: "easeOut" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={activity.icon} />
                      </motion.svg>
                      <span>{activity.text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDashboardValue && (
          <motion.div
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
            <DashboardValueSection />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showStrategicValue && (
          <motion.div
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
            <StrategicValueSection />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDashboard;
