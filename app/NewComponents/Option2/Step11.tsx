"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AnalyzingCard from "../processing-animation"

type Props = {}

const Step11 = (props: Props) => {
  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [showDashboardValue, setShowDashboardValue] = useState(false)

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Creating Jira tickets - 12 unresolved questions mapped to project epics" },
    { text: "Updating Confluence documentation - Requirements specification with workshop findings" },
    { text: "Scheduling follow-up meeting - Sarah's calendar availability and team coordination" },
    { text: "Updating HubSpot CRM - Stakeholder insights and deal requirements recorded" },
    { text: "Finalizing cross-platform actions - All systems synchronized with meeting outcomes" },
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
        description="I'll execute cross-platform actions across Jira, Confluence, Outlook, and HubSpot to synchronize all systems with the meeting outcomes and create follow-up tasks."
      />
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            className="w-full max-w-full sm:p-4"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div 
              className="bg-white rounded-lg border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-4 sm:p-6 border-l-4 border-green-500">
               
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
                        {/* Header Section */}
                        <motion.div 
                          className="mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <motion.h2 
                            className="text-lg sm:text-xl font-semibold text-gray-900"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                          >
                            Cross-Platform Actions
                          </motion.h2>
                        </motion.div>

                        {/* Jira Section */}
                        <motion.div 
                          className="mb-8"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                        >
                          <motion.div 
                            className="flex items-center gap-2 mb-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                          >
                            <motion.span 
                              className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-medium"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.7 }}
                            >
                              Jira
                            </motion.span>
                            <motion.span 
                              className="text-sm font-medium text-gray-900"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3, delay: 0.8 }}
                            >
                              Creating Jira Tickets
                            </motion.span>
                          </motion.div>
                          <motion.p 
                            className="text-xs text-gray-700 mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.9 }}
                          >
                            I'll create 12 Jira tickets in the "TechCorp Reporting System" project for each unresolved question,
                            assigning them to the suggested owners and linking them to relevant epics.
                          </motion.p>

                          <motion.div 
                            className="bg-blue-50 rounded-lg p-4 border border-blue-200"
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
                              className="text-xs text-gray-600 mb-2"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 1.1 }}
                            >
                              Preview: Jira Epic with Child Issues
                            </motion.div>
                            <div className="space-y-3">
                              <motion.div 
                                className="border-l-4 border-purple-500 pl-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 1.2 }}
                              >
                                <div className="text-sm font-medium text-gray-900">
                                  TECH-32: Security & Authentication Requirements
                                </div>
                              </motion.div>
                              <div className="ml-4 space-y-2">
                                {[
                                  {
                                    id: "TECH-45",
                                    title: "Custom Identity Provider Integration",
                                    question: "Can the system integrate with our custom Identity Provider?",
                                    assignee: "Jordan Chen (Security Architect)"
                                  },
                                  {
                                    id: "TECH-46",
                                    title: "Multi-Environment Setup",
                                    question: "Can we have multiple environments (dev/test/prod)?",
                                    assignee: "Taylor Wilson (DevOps Lead)"
                                  }
                                ].map((ticket, index) => (
                                  <motion.div 
                                    key={ticket.id}
                                    className="bg-white rounded p-3 border border-gray-200"
                                    initial={{ opacity: 0, y: 20, x: -20 }}
                                    animate={{ opacity: 1, y: 0, x: 0 }}
                                    transition={{ 
                                      duration: 0.4, 
                                      delay: 1.3 + (index * 0.1),
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
                                      className="text-sm font-medium text-blue-600 mb-1"
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.3, delay: 1.4 + (index * 0.1) }}
                                    >
                                      {ticket.id}: {ticket.title}
                                    </motion.div>
                                    <motion.div 
                                      className="text-xs text-gray-600 mb-1"
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.3, delay: 1.5 + (index * 0.1) }}
                                    >
                                      Question: {ticket.question}
                                    </motion.div>
                                    <motion.div 
                                      className="text-xs text-gray-500"
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.3, delay: 1.6 + (index * 0.1) }}
                                    >
                                      Assignee: {ticket.assignee}
                                    </motion.div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>

                        {/* Confluence Section */}
                        <motion.div 
                          className="mb-8"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1.7 }}
                        >
                          <motion.div 
                            className="flex items-center gap-2 mb-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 1.8 }}
                          >
                            <motion.span 
                              className="bg-blue-800 text-white text-xs px-2 py-1 rounded font-medium"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3, delay: 1.9 }}
                            >
                              Confluence
                            </motion.span>
                            <motion.span 
                              className="text-sm font-medium text-gray-900"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3, delay: 2.0 }}
                            >
                              Updating Requirements Document
                            </motion.span>
                          </motion.div>
                          <motion.p 
                            className="text-xs text-gray-700 mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 2.1 }}
                          >
                            I'll update the "TechCorp Requirements Specification" document in Confluence with the detailed
                            requirements from the workshop, highlighting the new requirements and scope changes.
                          </motion.p>

                          <motion.div 
                            className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 2.2,
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
                              className="text-xs text-gray-600 mb-2"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 2.3 }}
                            >
                              Preview: Confluence Document Updates
                            </motion.div>
                            <div className="space-y-2">
                              <motion.div 
                                className="text-sm font-medium text-gray-900"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 2.4 }}
                              >
                                TechCorp Reporting System - Requirements Specification
                              </motion.div>
                              <motion.div 
                                className="text-xs text-gray-500"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 2.5 }}
                              >
                                Last updated by Alex Chen • Updated by Floxa just now
                              </motion.div>
                              <div className="mt-3 space-y-1 text-xs">
                                {[
                                  "+ 37 requirements added from workshop (March 15)",
                                  "~ 6 existing requirements modified",
                                  "+ New section added: \"Compliance & Audit Requirements\"",
                                  "+ New section added: \"ML & Predictive Analytics\""
                                ].map((update, index) => (
                                  <motion.div 
                                    key={index}
                                    className={index === 1 ? "text-orange-600" : "text-green-600"}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 2.6 + (index * 0.1) }}
                                  >
                                    {update}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>

                        {/* Outlook Section */}
                        <motion.div 
                          className="mb-8"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 2.7 }}
                        >
                          <motion.div 
                            className="flex items-center gap-2 mb-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 2.8 }}
                          >
                            <motion.span 
                              className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-medium"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3, delay: 2.9 }}
                            >
                              Outlook
                            </motion.span>
                            <motion.span 
                              className="text-sm font-medium text-gray-900"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3, delay: 3.0 }}
                            >
                              Scheduling Follow-up Meeting
                            </motion.span>
                          </motion.div>
                          <motion.p 
                            className="text-xs text-gray-700 mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 3.1 }}
                          >
                            I'll schedule a follow-up meeting with Sarah (CTO) focused specifically on compliance requirements and AI
                            capabilities. Based on calendar availability, here are the options:
                          </motion.p>

                          <motion.div 
                            className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 3.2,
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
                              className="text-xs text-gray-600 mb-3"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 3.3 }}
                            >
                              Available Meeting Times (Sarah + Your Team)
                            </motion.div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {[
                                { day: "Tomorrow (March 17)", time: "2:00 PM - 3:00 PM" },
                                { day: "Friday (March 19)", time: "10:30 AM - 11:30 AM" },
                                { day: "Monday (March 22)", time: "9:00 AM - 10:00 AM" },
                                { day: "Monday (March 22)", time: "3:30 PM - 4:30 PM" }
                              ].map((slot, index) => (
                                <motion.div 
                                  key={index}
                                  className="bg-white rounded p-3 border border-gray-200"
                                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  transition={{ 
                                    duration: 0.4, 
                                    delay: 3.4 + (index * 0.1),
                                    type: "spring",
                                    stiffness: 100
                                  }}
                                  whileHover={{ 
                                    scale: 1.05, 
                                    y: -2,
                                    transition: { duration: 0.2 }
                                  }}
                                >
                                  <motion.div 
                                    className="text-sm font-medium text-gray-900"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 3.5 + (index * 0.1) }}
                                  >
                                    {slot.day}
                                  </motion.div>
                                  <motion.div 
                                    className="text-xs text-gray-600"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 3.6 + (index * 0.1) }}
                                  >
                                    {slot.time}
                                  </motion.div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </motion.div>

                        {/* HubSpot Section */}
                        <motion.div 
                          className="mb-8"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 3.7 }}
                        >
                          <motion.div 
                            className="flex items-center gap-2 mb-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 3.8 }}
                          >
                            <motion.span 
                              className="bg-orange-500 text-white text-xs px-2 py-1 rounded font-medium"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3, delay: 3.9 }}
                            >
                              HubSpot
                            </motion.span>
                            <motion.span 
                              className="text-sm font-medium text-gray-900"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3, delay: 4.0 }}
                            >
                              Updating Customer Insights
                            </motion.span>
                          </motion.div>
                          <motion.p 
                            className="text-xs text-gray-700 mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 4.1 }}
                          >
                            I'll update the TechCorp account in HubSpot with notes about Sarah's key concerns and preferences
                            identified from the meeting.
                          </motion.p>

                          <motion.div 
                            className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 4.2,
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
                              className="text-xs text-gray-600 mb-2"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 4.3 }}
                            >
                              Preview: HubSpot Account Updates
                            </motion.div>
                            <div className="space-y-3">
                              <motion.div 
                                className="text-sm font-medium text-gray-900"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 4.4 }}
                              >
                                TechCorp - Account Notes
                              </motion.div>
                              <motion.div 
                                className="text-xs text-gray-500"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 4.5 }}
                              >
                                Last activity: Meeting on March 15 • Updated just now
                              </motion.div>

                              <motion.div 
                                className="mt-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 4.6 }}
                              >
                                <motion.div 
                                  className="text-xs font-medium text-gray-700 mb-2"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: 4.7 }}
                                >
                                  New Stakeholder Insights:
                                </motion.div>
                                <ul className="text-xs text-gray-600 space-y-1 ml-3">
                                  {[
                                    "Sarah (CTO): Strong interest in ML/AI capabilities, compliance-focused",
                                    "Michael (PO): Prioritizes user experience and reporting flexibility",
                                    "Jennifer (Data): Concerned about data quality and integration complexity"
                                  ].map((insight, index) => (
                                    <motion.li 
                                      key={index}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.3, delay: 4.8 + (index * 0.1) }}
                                    >
                                      • {insight}
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>

                              <motion.div 
                                className="mt-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 5.1 }}
                              >
                                <motion.div 
                                  className="text-xs font-medium text-gray-700 mb-1"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: 5.2 }}
                                >
                                  Updated Deal Requirements:
                                </motion.div>
                                <motion.div 
                                  className="text-xs text-gray-600"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: 5.3 }}
                                >
                                  Added compliance and AI capabilities as key decision factors
                                </motion.div>
                              </motion.div>
                            </div>
                          </motion.div>
                        </motion.div>

                        {/* Action Prompt */}
                        <motion.div 
                          className="border-t border-gray-200 pt-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 5.4 }}
                        >
                          <motion.p 
                            className="text-sm text-gray-700 mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 5.5 }}
                          >
                            Would you like me to proceed with these actions now? You can modify any of the details before I execute
                            them.
                          </motion.p>

                          <motion.div 
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 5.6 }}
                          >
                            {[
                              { text: "Jira Actions", bg: "bg-blue-600", hover: "hover:bg-blue-700" },
                              { text: "Confluence Updates", bg: "bg-blue-800", hover: "hover:bg-blue-900" },
                              { text: "Calendar Scheduling", bg: "bg-blue-500", hover: "hover:bg-blue-600" },
                              { text: "CRM Updates", bg: "bg-orange-500", hover: "hover:bg-orange-600" }
                            ].map((button, index) => (
                              <motion.button 
                                key={button.text}
                                className={`${button.bg} text-white text-xs px-3 py-2 rounded transition-colors ${button.hover}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 5.7 + (index * 0.1) }}
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Step11
