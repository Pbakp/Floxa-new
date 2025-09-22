"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AnalyzingCard from "../processing-animation"

type Props = {}

const Step9 = (props: Props) => {
  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [showDashboardValue, setShowDashboardValue] = useState(false)

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing stakeholder concerns - Sarah's key issues identified from meeting" },
    { text: "Processing sentiment data - CTO, Product Owner, Head of Data sentiment analysis" },
    { text: "Extracting unresolved questions - 12 critical questions requiring follow-up" },
    { text: "Categorizing concerns by priority - Security, Integration, Performance, AI/ML" },
    { text: "Finalizing stakeholder analysis - Comprehensive concerns and sentiment assessment" },
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

  const concerns = [
    {
      id: 1,
      title: "Security & Compliance",
      quote:
        "I'm concerned that the current architecture doesn't fully address our SOX compliance requirements, especially around audit logging and data lineage tracking.",
      timestamp: "23:15, 47:52, 1:12:30",
    },
    {
      id: 2,
      title: "Data Integration Complexity",
      quote:
        "Our data sources are more complex than I think you're assuming. We have legacy systems running on Oracle 11g that haven't been updated in years, plus three different ERP instances across divisions.",
      timestamp: "18:40, 42:10",
    },
    {
      id: 3,
      title: "Performance at Scale",
      quote:
        "My team calculated that we'll be processing about 500 million data points daily. Will your architecture handle that volume while maintaining sub-second dashboard response times?",
      timestamp: "35:22, 1:05:48",
    },
    {
      id: 4,
      title: "AI/ML Capabilities",
      quote:
        "We need more than just reporting. Our strategy depends on predictive analytics and anomaly detection to identify issues before they impact operations.",
      timestamp: "51:18, 1:08:35, 1:22:10",
    },
  ]

  const sentimentData = [
    {
      name: "Sarah (CTO)",
      sentiment: "Cautiously Optimistic",
      position: 35, // Position of the indicator (0-100)
    },
    {
      name: "Michael (Product Owner)",
      sentiment: "Confident",
      position: 75,
    },
    {
      name: "Jennifer (Head of Data)",
      sentiment: "Mixed",
      position: 45,
    },
  ]

  const questions = [
    {
      question: "What is the exact data retention policy for historical reports?",
      askedBy: "Sarah (CTO)",
      category: "Data Storage",
      priority: "High",
      owner: "Data Architect",
    },
    {
      question: "Can the system integrate with our custom Identity Provider?",
      askedBy: "Sarah (CTO)",
      category: "Security",
      priority: "High",
      owner: "Security Architect",
    },
    {
      question: "What is the licensing model for user access?",
      askedBy: "Michael (PO)",
      category: "Commercial",
      priority: "Medium",
      owner: "Account Manager",
    },
    {
      question: "How will the system handle data quality issues?",
      askedBy: "Jennifer (Data)",
      category: "Data Integration",
      priority: "High",
      owner: "Data Engineer",
    },
    {
      question: "What's the timeline for implementing ML-based features?",
      askedBy: "Sarah (CTO)",
      category: "ML/AI",
      priority: "High",
      owner: "Project Manager",
    },
    {
      question: "Will training be included in the implementation?",
      askedBy: "Michael (PO)",
      category: "Implementation",
      priority: "Medium",
      owner: "Implementation Lead",
    },
    {
      question: "Can we have multiple environments (dev/test/prod)?",
      askedBy: "Sarah (CTO)",
      category: "Infrastructure",
      priority: "Medium",
      owner: "DevOps Lead",
    },
    {
      question: "How will system upgrades be handled?",
      askedBy: "Sarah (CTO)",
      category: "Maintenance",
      priority: "Medium",
      owner: "Support Manager",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-600 bg-red-50"
      case "Medium":
        return "text-yellow-600 bg-yellow-50"
      case "Low":
        return "text-green-600 bg-green-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'll analyze stakeholder concerns and sentiment from the meeting, identify unresolved questions, and provide a comprehensive assessment of key issues requiring follow-up."
      />
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            className="w-full max-w-full p-3 bg-white rounded-lg shadow-sm border-l-4 border-l-green-400"
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
                    {/* Introduction Section */}
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <motion.p 
                        className="text-xs text-gray-700"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        I've analyzed Sarah's comments throughout the workshop and identified her key concerns. I've also compiled a list of unresolved questions that were raised but not fully answered:
                      </motion.p>
                    </motion.div>

                    {/* Sarah's Key Concerns */}
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <motion.h3 
                        className="text-sm font-semibold text-gray-800 mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                      >
                        Sarah's Key Concerns (CTO)
                      </motion.h3>
                      <div className="space-y-3">
                        {concerns.map((concern, index) => (
                          <motion.div 
                            key={concern.id} 
                            className="space-y-2"
                            initial={{ opacity: 0, y: 20, x: -20 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 0.7 + (index * 0.1),
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
                              className="text-xs font-medium text-gray-700"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                            >
                              {concern.id}. {concern.title}
                            </motion.div>
                            <motion.div 
                              className="border-l-3 border-l-red-400 bg-red-50 p-2 rounded-r"
                              initial={{ opacity: 0, y: 20, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ 
                                duration: 0.5, 
                                delay: 0.9 + (index * 0.1),
                                type: "spring",
                                stiffness: 120
                              }}
                            >
                              <motion.p 
                                className="text-xs text-gray-700 italic mb-1"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 1.0 + (index * 0.1) }}
                              >
                                "{concern.quote}"
                              </motion.p>
                              <motion.p 
                                className="text-xs text-blue-600"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 1.1 + (index * 0.1) }}
                              >
                                Mentioned at: {concern.timestamp}
                              </motion.p>
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Stakeholder Sentiment Analysis */}
                    <motion.div 
                      className="mb-6 p-3 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 1.2,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.02, 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.h3 
                        className="text-sm font-semibold text-gray-800 mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.3 }}
                      >
                        Stakeholder Sentiment Analysis
                      </motion.h3>
                      <div className="space-y-4">
                        {sentimentData.map((person, index) => (
                          <motion.div 
                            key={index} 
                            className="space-y-1"
                            initial={{ opacity: 0, y: 20, x: -20 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 1.4 + (index * 0.1),
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
                              className="text-xs text-gray-700"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 1.5 + (index * 0.1) }}
                            >
                              <span className="font-medium">{person.name}</span> - Overall Sentiment:{" "}
                              <span className="font-medium">{person.sentiment}</span>
                            </motion.div>
                            <motion.div 
                              className="relative"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 1.6 + (index * 0.1) }}
                            >
                              <div className="h-6 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full"></div>
                              <motion.div
                                className="absolute top-0 w-1 h-6 bg-gray-800 rounded"
                                style={{ left: `${person.position}%` }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3, delay: 1.7 + (index * 0.1) }}
                              ></motion.div>
                            </motion.div>
                            <motion.div 
                              className="flex justify-between text-xs text-gray-500"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 1.8 + (index * 0.1) }}
                            >
                              <span>Very Concerned</span>
                              <span>Neutral</span>
                              <span>Very Confident</span>
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Unresolved Questions */}
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.9 }}
                    >
                      <motion.h3 
                        className="text-sm font-semibold text-gray-800 mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 2.0 }}
                      >
                        12 Unresolved Questions Requiring Follow-up
                      </motion.h3>
                      <div className="overflow-x-auto">
                        <div className="min-w-full">
                          <motion.table 
                            className="w-full text-xs border-collapse"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 2.1 }}
                          >
                            <motion.thead
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 2.2 }}
                            >
                              <tr className="bg-gray-50">
                                <th className="text-left p-2 border-b font-medium text-gray-700 min-w-[200px]">Question</th>
                                <th className="text-left p-2 border-b font-medium text-gray-700 min-w-[100px]">Asked By</th>
                                <th className="text-left p-2 border-b font-medium text-gray-700 min-w-[100px]">Category</th>
                                <th className="text-left p-2 border-b font-medium text-gray-700 min-w-[80px]">Priority</th>
                                <th className="text-left p-2 border-b font-medium text-gray-700 min-w-[120px]">Suggested Owner</th>
                              </tr>
                            </motion.thead>
                            <tbody>
                              {questions.map((q, index) => (
                                <motion.tr 
                                  key={index} 
                                  className="border-b border-gray-100"
                                  initial={{ opacity: 0, y: 20, x: -20 }}
                                  animate={{ opacity: 1, y: 0, x: 0 }}
                                  transition={{ 
                                    duration: 0.4, 
                                    delay: 2.3 + (index * 0.05),
                                    type: "spring",
                                    stiffness: 100
                                  }}
                                  whileHover={{ 
                                    scale: 1.01, 
                                    x: 5,
                                    transition: { duration: 0.2 }
                                  }}
                                >
                                  <td className="p-2 text-gray-700">{q.question}</td>
                                  <td className="p-2 text-gray-600">{q.askedBy}</td>
                                  <td className="p-2 text-gray-600">{q.category}</td>
                                  <td className="p-2">
                                    <motion.span 
                                      className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(q.priority)}`}
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ duration: 0.3, delay: 2.4 + (index * 0.05) }}
                                    >
                                      {q.priority}
                                    </motion.span>
                                  </td>
                                  <td className="p-2 text-gray-600">{q.owner}</td>
                                </motion.tr>
                              ))}
                            </tbody>
                          </motion.table>
                        </div>
                      </div>

                      <motion.div 
                        className="mt-3 p-2 bg-blue-50 rounded text-xs text-gray-700"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 2.8,
                          type: "spring",
                          stiffness: 120
                        }}
                        whileHover={{ 
                          scale: 1.02, 
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                      >
                        Based on the analysis, I recommend prioritizing follow-up on Sarah's concerns about compliance requirements
                        and AI capabilities, as these represent the most significant gaps between client expectations and our initial
                        project scope.
                      </motion.div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 2.9 }}
                    >
                      <motion.button 
                        className="bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 3.0 }}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                      >
                        Sentiment Analysis
                      </motion.button>
                      <motion.button 
                        className="bg-orange-500 text-white text-xs px-3 py-1 rounded hover:bg-orange-600 transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 3.1 }}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                      >
                        Stakeholder Profiles
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Step9
