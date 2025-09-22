"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AnalyzingCard from "../processing-animation"

type Props = {}

const Step15 = (props: Props) => {
  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [showDashboardValue, setShowDashboardValue] = useState(false)

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Accessing presentation templates from SharePoint - TechCorp project folder" },
    { text: "Incorporating meeting analysis from Teams - Sarah's concerns and stakeholder insights" },
    { text: "Adding requirements data from Confluence - 37 new requirements and scope changes" },
    { text: "Including project status from Jira - Ticket assignments and epic linkages" },
    { text: "Finalizing presentation creation - Comprehensive follow-up meeting materials ready" },
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
        description="I'll create a presentation for your follow-up meeting with Sarah by accessing templates, incorporating meeting analysis, and including all relevant project data."
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
                System Advanced Response
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
                          I'll create a presentation for your follow-up meeting with Sarah. Here's an outline of what I'll include:
                        </motion.div>
                      </motion.div>


                      {/* Meeting Presentation Outline - PDF Style */}
                      <motion.div 
                        className="bg-white border border-gray-200 rounded-lg p-6"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 1.6,
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
                          className="text-lg font-bold text-gray-800 mb-6 text-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 1.7 }}
                        >
                          Floxa Prototype: Complete Meeting Intelligence Analysis
                        </motion.div>

                        <motion.div 
                          className="space-y-4 text-sm"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 1.8 }}
                        >
                          {[
                            { 
                              title: "1. Meeting Overview & Objectives", 
                              items: [] 
                            },
                            { 
                              title: "2. Recap of Requirements Workshop", 
                              items: [
                                "Key statistics and participation summary",
                                "Overall sentiment analysis"
                              ] 
                            },
                            { 
                              title: "3. Sarah's Key Concerns", 
                              items: [
                                "Security & Compliance requirements",
                                "Data integration complexity",
                                "Performance at scale",
                                "AI/ML capabilities"
                              ] 
                            },
                            { 
                              title: "4. Our Proposed Solutions", 
                              items: [
                                "Enhanced compliance framework",
                                "Legacy system integration approach",
                                "Performance optimization strategy",
                                "AI/ML implementation options"
                              ] 
                            },
                            { 
                              title: "5. Updated Project Scope", 
                              items: [
                                "Original vs. new requirements",
                                "Impact on timeline and resources"
                              ] 
                            },
                            { 
                              title: "6. Next Steps & Decision Points", 
                              items: [
                                "I'll create this presentation by:",
                                "• Accessing presentation templates from SharePoint",
                                "• Incorporating meeting analysis from Teams", 
                                "• Adding requirements data from Confluence",
                                "• Including project status from Jira",
                                "• Referencing stakeholder insights from HubSpot",
                                "The presentation will be saved to your TechCorp project folder in SharePoint and attached to the meeting invitation in Outlook.",
                                "Would you like me to proceed with creating this presentation, or would you like to adjust the outline?"
                              ] 
                            }
                          ].map((section, index) => (
                            <motion.div 
                              key={index}
                              className={`p-3 rounded-lg ${
                                section.title === "6. Next Steps & Decision Points" 
                                  ? "bg-blue-50 border-l-4 border-blue-500" 
                                  : "bg-gray-50"
                              }`}
                              initial={{ opacity: 0, y: 20, x: -20 }}
                              animate={{ opacity: 1, y: 0, x: 0 }}
                              transition={{ 
                                duration: 0.4, 
                                delay: 1.9 + (index * 0.1),
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
                                className={`font-semibold ${
                                  section.title === "6. Next Steps & Decision Points" 
                                    ? "text-blue-800" 
                                    : "text-gray-800"
                                }`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 2.0 + (index * 0.1) }}
                              >
                                {section.title}
                              </motion.div>
                              {section.items.length > 0 && (
                                <motion.div 
                                  className="ml-4 mt-2 space-y-2 text-gray-600"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: 2.1 + (index * 0.1) }}
                                >
                                  {section.title === "6. Next Steps & Decision Points" ? (
                                    <div className="space-y-3">
                                      <motion.div 
                                        className="text-sm text-gray-700"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 2.2 + (index * 0.1) }}
                                      >
                                        I'll create this presentation by:
                                      </motion.div>
                                      <motion.ul 
                                        className="space-y-2 text-sm text-gray-700"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 2.3 + (index * 0.1) }}
                                      >
                                        {[
                                          { text: "Accessing presentation templates from", platform: "SharePoint", color: "bg-teal-600" },
                                          { text: "Incorporating meeting analysis from", platform: "Teams", color: "bg-blue-600" },
                                          { text: "Adding requirements data from", platform: "Confluence", color: "bg-purple-600" },
                                          { text: "Including project status from", platform: "Jira", color: "bg-blue-500" },
                                          { text: "Referencing stakeholder insights from", platform: "HubSpot", color: "bg-orange-500" }
                                        ].map((item, itemIndex) => (
                                          <motion.li 
                                            key={itemIndex}
                                            className="flex items-center gap-2"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 2.4 + (index * 0.1) + (itemIndex * 0.1) }}
                                          >
                                            <span>• {item.text}</span>
                                            <span className={`${item.color} text-white px-3 py-1 rounded text-sm font-medium`}>{item.platform}</span>
                                          </motion.li>
                                        ))}
                                      </motion.ul>
                                      <motion.div 
                                        className="text-sm text-gray-600 p-3 bg-white rounded border"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 2.9 + (index * 0.1) }}
                                      >
                                        The presentation will be saved to your TechCorp project folder in SharePoint and attached to the meeting
                                        invitation in Outlook.
                                      </motion.div>
                                      <motion.div 
                                        className="text-sm text-gray-700 font-medium"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 3.0 + (index * 0.1) }}
                                      >
                                        Would you like me to proceed with creating this presentation, or would you like to adjust the outline?
                                      </motion.div>
                                    </div>
                                  ) : (
                                    <ul className="space-y-1">
                                      {section.items.map((item, itemIndex) => (
                                        <motion.li 
                                          key={itemIndex}
                                          className="flex items-start"
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ duration: 0.3, delay: 2.2 + (index * 0.1) + (itemIndex * 0.05) }}
                                        >
                                          <span className="mr-2 text-gray-400">•</span>
                                          <span>{item}</span>
                                        </motion.li>
                                      ))}
                                    </ul>
                                  )}
                                </motion.div>
                              )}
                            </motion.div>
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

export default Step15
