"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AnalyzingCard from "../processing-animation"

type Props = {}

const Step13 = (props: Props) => {
  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [showDashboardValue, setShowDashboardValue] = useState(false)

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Executing Jira ticket creation - 12 tickets linked to project epics" },
    { text: "Updating Confluence documentation - Requirements specification v2.1 with 37 new requirements" },
    { text: "Scheduling follow-up meeting - Monday 9:00 AM with Sarah and technical architect" },
    { text: "Updating HubSpot CRM - Stakeholder insights and deal requirements recorded" },
    { text: "Finalizing system actions - All cross-platform integrations completed successfully" },
  ], [])

  const handleBuildRepeatComplete = useCallback(() => {
    // Show dashboard first
    setShowDashboard(true)

    // Show sections with staggered delays for smooth animation
    setTimeout(() => setShowFirst(true), 300)
    setTimeout(() => setShowSecond(true), 600)
    setTimeout(() => setShowThird(true), 900)

    // Show dashboard value section after a delay
    setTimeout(() => {
      setShowDashboardValue(true)
    }, 500)
  }, [])

  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'm executing the requested actions across your systems, creating tickets, updating documentation, scheduling meetings, and recording stakeholder insights."
      />
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
      }}
    >
      {/* Step Header */}
            <motion.div 
              className="flex items-center gap-2 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="w-2 h-2 bg-blue-500 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              ></motion.div>
              <motion.h3 
                className="text-sm font-semibold text-gray-800"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                System Action Execution
              </motion.h3>
            </motion.div>

      {/* Main Content */}
            <motion.div 
              className="bg-white rounded-lg border border-gray-200 p-4 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
          
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
                    <div className="py-6">
                      {/* Floxa Message */}
                      <motion.div 
                        className="border-l-4 border-green-500 bg-green-50 p-3 rounded-r mb-4"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.3,
                          type: "spring",
                          stiffness: 120
                        }}
                        whileHover={{ 
                          scale: 1.02, 
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.div 
                          className="text-xs text-green-700"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                        >
                          I'm executing the requested actions across your systems:
                        </motion.div>
                      </motion.div>

                      {/* Action Cards Grid */}
                      <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        {[
                          {
                            title: "Jira Tickets Created",
                            description: "12 tickets created and linked to appropriate epics"
                          },
                          {
                            title: "Confluence Doc Updated",
                            description: "Requirements specification updated with workshop findings"
                          },
                          {
                            title: "Meeting Scheduled",
                            description: "Monday, 9:00 AM with Sarah, you, and the technical architect"
                          },
                          {
                            title: "HubSpot Updated",
                            description: "Account notes and stakeholder insights recorded"
                          }
                        ].map((action, index) => (
                          <motion.div 
                            key={index}
                            className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-start gap-2"
                            initial={{ opacity: 0, y: 20, x: -20 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 0.6 + (index * 0.1),
                              type: "spring",
                              stiffness: 100
                            }}
                            whileHover={{ 
                              scale: 1.02, 
                              x: 5,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <motion.div 
                              className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                            >
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                            </motion.div>
              <div>
                              <motion.div 
                                className="text-xs font-medium text-green-800"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                              >
                                {action.title}
                              </motion.div>
                              <motion.div 
                                className="text-xs text-green-600 mt-1"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.9 + (index * 0.1) }}
                              >
                                {action.description}
                              </motion.div>
              </div>
                          </motion.div>
                        ))}
                      </motion.div>

        {/* Summary Section */}
                      <motion.div 
                        className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 1.0,
                          type: "spring",
                          stiffness: 120
                        }}
                        whileHover={{ 
                          scale: 1.02, 
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.div 
                          className="text-xs font-medium text-blue-800 mb-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 1.1 }}
                        >
                          Summary of Actions:
                        </motion.div>
                        <motion.ul 
                          className="space-y-1 text-xs text-blue-700"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 1.2 }}
                        >
                          {[
                            "Jira: Created tickets TECH-45 through TECH-56 for unresolved questions",
                            "Confluence: Updated \"TechCorp Requirements Specification v2.1\" with 37 new requirements",
                            "Outlook: Scheduled \"TechCorp Follow-up: Compliance & AI Requirements\" for Monday at 9:00 AM",
                            "HubSpot: Added stakeholder notes to TechCorp account and updated deal requirements"
                          ].map((item, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 1.3 + (index * 0.1) }}
                            >
                              <span className="font-medium">{item.split(':')[0]}:</span> {item.split(':')[1]}
                            </motion.li>
                          ))}
                        </motion.ul>
                        <motion.div 
                          className="text-xs text-blue-600 italic mt-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 1.7 }}
                        >
                          All actions have been recorded in your activity log.
                        </motion.div>
                      </motion.div>

        {/* Question and Actions */}
                      <motion.div 
                        className="border-t pt-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.8 }}
                      >
                        <motion.div 
                          className="text-xs text-gray-700 mb-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 1.9 }}
                        >
              Is there anything else you'd like me to do with the meeting insights?
                        </motion.div>
                        <motion.div 
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 2.0 }}
                        >
                          {[
                            { text: "Teams", bg: "bg-blue-600", hover: "hover:bg-blue-700" },
                            { text: "Outlook", bg: "bg-blue-500", hover: "hover:bg-blue-600" },
                            { text: "Jira", bg: "bg-blue-600", hover: "hover:bg-blue-700" },
                            { text: "Confluence", bg: "bg-teal-600", hover: "hover:bg-teal-700" },
                            { text: "HubSpot", bg: "bg-orange-500", hover: "hover:bg-orange-600" }
                          ].map((button, index) => (
                            <motion.button 
                              key={button.text}
                              className={`${button.bg} text-white text-xs px-3 py-1.5 rounded transition-colors ${button.hover}`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 2.1 + (index * 0.1) }}
                              whileHover={{ 
                                scale: 1.05, 
                                y: -2,
                                transition: { duration: 0.2 }
                              }}
                            >
                              {button.text}
                            </motion.button>
                          ))}
                        </motion.div>
                      </motion.div>
            </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Step13
