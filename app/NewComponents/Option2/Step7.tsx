"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AnalyzingCard from "../processing-animation"
import { scrollToBottom } from "@/app/utils/scrollUtils"

type Props = {}

const Step7 = (props: Props) => {
  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [showDashboardValue, setShowDashboardValue] = useState(false)

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing stakeholder requirements - 10 critical requirements identified" },
    { text: "Categorizing priority levels - Critical, High, Medium classifications" },
    { text: "Mapping scope alignment - 76% in scope, 16% partial, 8% out of scope" },
    { text: "Evaluating system impact - Data Layer, UI, Security, API modules" },
    { text: "Finalizing requirements analysis - Comprehensive scope and impact assessment" },
  ], [])

  const handleBuildRepeatComplete = useCallback(() => {
    // Show dashboard first
    setShowDashboard(true)

    // Show sections with staggered delays for smooth animation
    setTimeout(() =>{ setShowFirst(true); setTimeout(() => {
            scrollToBottom();
          }, 200) }, 300)
    setTimeout(() =>{ setShowSecond(true);setTimeout(() => {
        scrollToBottom();
      }, 200) }, 600)
    setTimeout(() =>{ setShowThird(true); setTimeout(() => {
        scrollToBottom();
      }, 200) }, 900)

    // Show dashboard value section after a delay
    setTimeout(() => {
      setShowDashboardValue(true)
      scrollToBottom() // Scroll to bottom after showing dashboard value
    }, 500)
  }, [])

  const requirements = [
    {
      req: "Real-time dashboard with customizable KPIs",
      priority: "Critical",
      stakeholder: "Sarah (CTO)",
      scope: "In Scope",
      impact: "Data Layer, UI",
    },
    {
      req: "Role-based access control with SSO integration",
      priority: "Critical",
      stakeholder: "Sarah (CTO)",
      scope: "In Scope",
      impact: "Security, API",
    },
    {
      req: "Multi-format export (PDF, Excel, API)",
      priority: "High",
      stakeholder: "Michael (PO)",
      scope: "In Scope",
      impact: "Export Module",
    },
    {
      req: "Custom alert rules with email/SMS notifications",
      priority: "High",
      stakeholder: "Jennifer (Data)",
      scope: "Partial",
      impact: "Notifications, API",
    },
    {
      req: "ML-based anomaly detection in data streams",
      priority: "High",
      stakeholder: "Sarah (CTO)",
      scope: "Out of Scope",
      impact: "AI Module, Data Layer",
    },
    {
      req: "Historical data migration from legacy system",
      priority: "High",
      stakeholder: "Jennifer (Data)",
      scope: "In Scope",
      impact: "Data Migration",
    },
    {
      req: "Visual report builder for non-technical users",
      priority: "High",
      stakeholder: "Michael (PO)",
      scope: "In Scope",
      impact: "UI, Report Engine",
    },
    {
      req: "Compliance reporting for SOX and GDPR",
      priority: "High",
      stakeholder: "Sarah (CTO)",
      scope: "Partial",
      impact: "Compliance Module",
    },
    {
      req: "Mobile-responsive design with native app feel",
      priority: "Medium",
      stakeholder: "Michael (PO)",
      scope: "In Scope",
      impact: "UI/UX",
    },
    {
      req: "Department-level data segmentation",
      priority: "Medium",
      stakeholder: "Jennifer (Data)",
      scope: "In Scope",
      impact: "Data Layer, Security",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "bg-red-100 text-red-800 border-red-200"
      case "High":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Medium":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getScopeColor = (scope: string) => {
    switch (scope) {
      case "In Scope":
        return "bg-green-100 text-green-800 border-green-200"
      case "Partial":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Out of Scope":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  useEffect(() => {
    if (showDashboardValue) {
      scrollToBottom() // Ensure scrolling to bottom when dashboard value is shown
    }
  }, [showDashboardValue])

  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'll analyze stakeholder requirements and create a comprehensive scope alignment assessment. Let me categorize priorities, evaluate system impact, and map requirements to your project scope."
      />
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            className="w-full max-w-6xl mx-auto p-3 bg-white rounded-lg shadow-sm border-l-4 border-green-400"
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
                    {/* Header Section */}
                    <motion.div 
                      className="mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <motion.div 
                        className="flex items-center gap-2 mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-blue-500 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 }}
                        ></motion.div>
                        <motion.span 
                          className="text-sm font-medium text-gray-700"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.6 }}
                        >
                          Requirements Analysis
                        </motion.span>
                      </motion.div>
                    </motion.div>

                    {/* Chart Section */}
                    <motion.div 
                      className="mb-6 bg-gray-50 border border-gray-200 rounded-lg p-4"
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.7,
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
                        className="text-sm font-semibold text-gray-800 mb-16"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                      >
                        Requirements Categorization & Scope Alignment
                      </motion.h3>
                      <div className="h-32"></div>
                      <motion.p 
                        className="text-xs text-gray-500 mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.9 }}
                      >
                        * Categories shown with number of requirements and alignment to initial scope
                      </motion.p>
                    </motion.div>

                    {/* Table Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                    >
                      <motion.h3 
                        className="text-sm font-semibold text-gray-800 mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.1 }}
                      >
                        Top 10 Critical Requirements
                      </motion.h3>

                      <div className="mb-4">
                        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                          <motion.table 
                            className="w-full text-xs border-collapse min-w-[800px]"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                          >
                            <motion.thead
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 1.3 }}
                            >
                              <tr className="bg-gray-50">
                                <th className="text-left p-3 border border-gray-200 font-medium text-gray-700 min-w-[200px] sm:min-w-[250px]">
                                  Requirement
                                </th>
                                <th className="text-left p-3 border border-gray-200 font-medium text-gray-700 min-w-[80px] w-[100px]">
                                  Priority
                                </th>
                                <th className="text-left p-3 border border-gray-200 font-medium text-gray-700 min-w-[100px] w-[120px]">
                                  Stakeholder
                                </th>
                                <th className="text-left p-3 border border-gray-200 font-medium text-gray-700 min-w-[90px] w-[110px]">
                                  Scope Status
                                </th>
                                <th className="text-left p-3 border border-gray-200 font-medium text-gray-700 min-w-[120px] w-[150px]">
                                  System Impact
                                </th>
                              </tr>
                            </motion.thead>
                            <tbody>
                              {requirements.map((item, index) => (
                                <motion.tr 
                                  key={index} 
                                  className="hover:bg-gray-50 transition-colors"
                                  initial={{ opacity: 0, y: 20, x: -20 }}
                                  animate={{ opacity: 1, y: 0, x: 0 }}
                                  transition={{ 
                                    duration: 0.4, 
                                    delay: 1.4 + (index * 0.1),
                                    type: "spring",
                                    stiffness: 100
                                  }}
                                  whileHover={{ 
                                    scale: 1.01, 
                                    x: 5,
                                    transition: { duration: 0.2 }
                                  }}
                                >
                                  <td className="p-3 border border-gray-200 text-gray-800 leading-relaxed">{item.req}</td>
                                  <td className="p-3 border border-gray-200">
                                    <motion.span
                                      className={`inline-block px-2 py-1 rounded text-xs font-medium border whitespace-nowrap ${getPriorityColor(item.priority)}`}
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ duration: 0.3, delay: 1.5 + (index * 0.1) }}
                                    >
                                      {item.priority}
                                    </motion.span>
                                  </td>
                                  <td className="p-3 border border-gray-200 text-gray-700 whitespace-nowrap">{item.stakeholder}</td>
                                  <td className="p-3 border border-gray-200">
                                    <motion.span
                                      className={`inline-block px-2 py-1 rounded text-xs font-medium border whitespace-nowrap ${getScopeColor(item.scope)}`}
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ duration: 0.3, delay: 1.6 + (index * 0.1) }}
                                    >
                                      {item.scope}
                                    </motion.span>
                                  </td>
                                  <td className="p-3 border border-gray-200 text-gray-600 leading-relaxed">{item.impact}</td>
                                </motion.tr>
                              ))}
                            </tbody>
                          </motion.table>
                        </div>
                        <motion.p 
                          className="text-xs text-gray-500 mt-2 sm:hidden"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 2.4 }}
                        >
                          ← Scroll horizontally to view all columns
                        </motion.p>
                      </div>
                    </motion.div>

                    {/* Analysis Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.5 }}
                    >
                      <motion.div 
                        className="mb-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 2.6,
                          type: "spring",
                          stiffness: 120
                        }}
                        whileHover={{ 
                          scale: 1.02, 
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.h4 
                          className="text-xs font-semibold text-yellow-800 mb-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 2.7 }}
                        >
                          Scope Analysis:
                        </motion.h4>
                        <motion.ul 
                          className="text-xs text-yellow-700 space-y-1"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 2.8 }}
                        >
                          <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 2.9 }}
                          >
                            • <strong>28 requirements (76%)</strong> align with initial project scope
                          </motion.li>
                          <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 3.0 }}
                          >
                            • <strong>6 requirements (16%)</strong> partially align but need clarification
                          </motion.li>
                          <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 3.1 }}
                          >
                            • <strong>3 requirements (8%)</strong> are completely out of initial scope
                          </motion.li>
                        </motion.ul>
                      </motion.div>

                      <motion.div 
                        className="mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 3.2 }}
                      >
                        <motion.p 
                          className="text-xs text-gray-700 leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 3.3 }}
                        >
                          The biggest scope gap is around the <strong>ML-based anomaly detection</strong> that Sarah emphasized multiple
                          times. There's also extended compliance reporting beyond what was initially specified in the Jira epics.
                        </motion.p>
                      </motion.div>
                    </motion.div>

                    {/* Buttons Section */}
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 3.4 }}
                    >
                      <motion.button 
                        className="bg-indigo-500 text-white text-xs px-3 py-1.5 rounded hover:bg-indigo-600 transition-all duration-200 transform hover:scale-105 shadow-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 3.5 }}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                      >
                        Meeting Analysis
                      </motion.button>
                      <motion.button 
                        className="bg-blue-500 text-white text-xs px-3 py-1.5 rounded hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 shadow-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 3.6 }}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                      >
                        Scope Mapping
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

export default Step7
