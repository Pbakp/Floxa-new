"use client"

import { useEffect, useState, useMemo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AnalyzingCard from "../processing-animation"
import UserStorySummary from "./Userstory"

type Props = {}

const Step17 = (props: Props) => {
  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [showDashboardValue, setShowDashboardValue] = useState(false)
  const [showUserStory, setShowUserStory] = useState(false)

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing cross-platform integration - 6 enterprise systems synchronized" },
    { text: "Calculating business value metrics - Time savings and ROI projections" },
    { text: "Generating follow-up scenarios - Detailed interaction possibilities" },
    { text: "Compiling value summary - €90K-€120K annual value demonstration" },
    { text: "Finalizing system completion - Comprehensive ROI and integration summary" },
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

    // Show user story after main content is complete
    setTimeout(() => {
      setShowUserStory(true)
    }, 8000)
  }, [])

  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'll analyze the cross-platform integration, calculate business value metrics, and provide a comprehensive ROI summary with follow-up scenarios."
      />
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            className="w-full max-w-6xl mx-auto p-3 sm:p-4 bg-white rounded-lg shadow-lg"
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
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="w-3 h-3 bg-blue-500 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              ></motion.div>
              <motion.h2
                className="text-sm font-semibold text-gray-800"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                System Completion and ROI Summary
              </motion.h2>
            </motion.div>

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
                      className="bg-gray-50 border-l-4 border-green-500 p-3 mb-4 rounded-r-lg"
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
                        className="text-xs text-gray-600"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        I've created the presentation and shared it with you and Jordan (Technical Architect). You'll find it in the
                        TechCorp project folder and attached to the meeting invitation.
                      </motion.div>
                    </motion.div>

                    {/* Value Summary */}
                    <motion.div
                      className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4"
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8,
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
                        className="text-xs font-semibold text-gray-800 mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.9 }}
                      >
                        Value Summary:
                      </motion.h4>
                      <motion.div
                        className="overflow-x-auto"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.0 }}
                      >
                        <table className="w-full text-xs">
                          <tbody className="divide-y divide-blue-200">
                            {[
                              { label: "Time Saved:", value: "~6-8 hours of manual work" },
                              { label: "Actions Automated:", value: "Meeting analysis, documentation updates, ticket creation, presentation preparation" },
                              { label: "Risk Reduction:", value: "Identified 8 critical concerns and 12 unresolved questions that could have caused project delays" },
                              { label: "Knowledge Preserved:", value: "Detailed meeting insights documented across Jira, Confluence, and HubSpot" }
                            ].map((row, index) => (
                              <motion.tr
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 1.1 + (index * 0.1) }}
                              >
                                <td className="py-1 pr-4 font-medium text-gray-700">{row.label}</td>
                                <td className="py-1 text-gray-600">{row.value}</td>
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </motion.div>
                    </motion.div>

                    {/* Final Question */}
                    <motion.div
                      className="bg-gray-50 border-l-4 border-green-500 p-3 mb-4 rounded-r-lg"
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
                      <motion.p
                        className="text-xs text-gray-600"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.7 }}
                      >
                        I've completed all requested actions across your systems. Is there anything else you need help with regarding
                        the TechCorp project?
                      </motion.p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex mb-4 flex-wrap gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.8 }}
                    >
                      {[
                        { text: "Teams", bg: "bg-purple-600", hover: "hover:bg-purple-700" },
                        { text: "Outlook", bg: "bg-blue-600", hover: "hover:bg-blue-700" },
                        { text: "SharePoint", bg: "bg-teal-600", hover: "hover:bg-teal-700" },
                        { text: "Jira", bg: "bg-blue-600", hover: "hover:bg-blue-700" },
                        { text: "Confluence", bg: "bg-slate-600", hover: "hover:bg-slate-700" },
                        { text: "HubSpot", bg: "bg-orange-600", hover: "hover:bg-orange-700" }
                      ].map((button, index) => (
                        <motion.button
                          key={button.text}
                          className={`px-3 py-1 text-white text-xs rounded transition-colors ${button.bg} ${button.hover}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.9 + (index * 0.1) }}
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

                    {/* Follow-up Interaction Possibilities */}
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.5 }}
                    >
                      <motion.h3
                        className="text-sm font-semibold text-gray-800 mb-3 pb-1 border-b-2 border-blue-500"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 2.6 }}
                      >
                        Follow-up Interaction Possibilities
                      </motion.h3>
                      <motion.p
                        className="text-xs text-gray-600 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 2.7 }}
                      >
                        The conversation could continue in several directions, demonstrating Floxa's flexibility in supporting the project manager's needs:
                      </motion.p>

                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 2.8 }}
                      >
                        {[
                          {
                            title: "Detailed Requirements Analysis",
                            userQuery: "Can you show me only the requirements that would impact our database architecture?",
                            floxaAction: "Floxa would filter the requirements specific to data architecture, showing dependencies and technical implications."
                          },
                          {
                            title: "Competitive Analysis",
                            userQuery: "Are any of Sarah's requests similar to what we've implemented for other clients?",
                            floxaAction: "Floxa would analyze past projects to find similar requirements and solution approaches."
                          },
                          {
                            title: "Resource Planning",
                            userQuery: "Based on these new requirements, what additional team members might we need?",
                            floxaAction: "Floxa would analyze skill requirements against current team composition and suggest resource needs."
                          },
                          {
                            title: "Timeline Impact",
                            userQuery: "How would adding the ML capabilities affect our delivery timeline?",
                            floxaAction: "Floxa would analyze typical implementation times for similar features and project the impact on the current timeline."
                          }
                        ].map((card, index) => (
                          <motion.div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg p-4"
                            initial={{ opacity: 0, y: 20, x: index % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 2.9 + (index * 0.1),
                              type: "spring",
                              stiffness: 100
                            }}
                            whileHover={{
                              scale: 1.02,
                              y: -2,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <motion.h4
                              className="text-sm font-semibold text-gray-800 mb-3"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 3.0 + (index * 0.1) }}
                            >
                              {card.title}
                            </motion.h4>

                            <motion.div
                              className="mb-3"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 3.1 + (index * 0.1) }}
                            >
                              <motion.span
                                className="text-xs font-medium text-gray-700"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 3.2 + (index * 0.1) }}
                              >
                                User:
                              </motion.span>
                              <motion.p
                                className="text-xs text-gray-600 mt-1 italic"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 3.3 + (index * 0.1) }}
                              >
                                "{card.userQuery}"
                              </motion.p>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 3.4 + (index * 0.1) }}
                            >
                              <motion.span
                                className="text-xs font-medium text-gray-700"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 3.5 + (index * 0.1) }}
                              >
                                Floxa's action:
                              </motion.span>
                              <motion.p
                                className="text-xs text-gray-600 mt-1"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 3.6 + (index * 0.1) }}
                              >
                                {card.floxaAction}
                              </motion.p>
                            </motion.div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>

                    {/* Cross-Platform Integration Summary */}
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 4.0 }}
                    >
                      <motion.h3
                        className="text-sm font-semibold text-gray-800 mb-3 pb-1 border-b-2 border-blue-500"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 4.1 }}
                      >
                        Cross-Platform Integration Summary
                      </motion.h3>
                      <motion.p
                        className="text-xs text-gray-600 mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 4.2 }}
                      >
                        This use case demonstrates Floxa's ability to unify data and actions across multiple enterprise systems:
                      </motion.p>

                      <motion.div
                        className="overflow-x-auto"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 4.3,
                          type: "spring",
                          stiffness: 120
                        }}
                        whileHover={{
                          scale: 1.02,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className="min-w-full">
                          <motion.table
                            className="w-full border border-gray-200 rounded-lg overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 4.4 }}
                          >
                            <motion.thead
                              className="bg-gray-50"
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 4.5 }}
                            >
                              <tr>
                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 border-b border-gray-200">
                                  Enterprise System
                                </th>
                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 border-b border-gray-200">
                                  Data Accessed
                                </th>
                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 border-b border-gray-200">
                                  Actions Performed
                                </th>
                              </tr>
                            </motion.thead>
                            <tbody className="divide-y divide-gray-200">
                              {[
                                {
                                  system: "Microsoft Teams",
                                  color: "bg-purple-100 text-purple-800",
                                  data: ["Meeting recording", "Speaker identification", "Conversation transcript"],
                                  actions: ["Analysis of meeting content", "Sentiment analysis", "Topic extraction"]
                                },
                                {
                                  system: "Microsoft Outlook",
                                  color: "bg-blue-100 text-blue-800",
                                  data: ["Meeting metadata", "Calendar availability", "Participant information"],
                                  actions: ["Schedule follow-up meeting", "Send meeting invitations", "Attach presentation"]
                                },
                                {
                                  system: "SharePoint",
                                  color: "bg-teal-100 text-teal-800",
                                  data: ["Project templates", "Previous presentations", "Reference documentation"],
                                  actions: ["Create presentation document", "Save to project folder", "Update project documentation"]
                                },
                                {
                                  system: "Jira",
                                  color: "bg-blue-100 text-blue-800",
                                  data: ["Existing project epics", "Current project scope", "Team assignments"],
                                  actions: ["Create unresolved question tickets", "Link to relevant epics", "Assign to appropriate owners"]
                                },
                                {
                                  system: "Confluence",
                                  color: "bg-slate-100 text-slate-800",
                                  data: ["Requirements documentation", "Project specifications", "Technical documentation"],
                                  actions: ["Update requirements document", "Add new requirements sections", "Link to related Jira tickets"]
                                },
                                {
                                  system: "HubSpot",
                                  color: "bg-orange-100 text-orange-800",
                                  data: ["Client account information", "Stakeholder profiles", "Deal requirements"],
                                  actions: ["Update stakeholder insights", "Add meeting notes to account", "Update deal requirements"]
                                }
                              ].map((row, index) => (
                                <motion.tr
                                  key={index}
                                  initial={{ opacity: 0, y: 20, x: -20 }}
                                  animate={{ opacity: 1, y: 0, x: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    delay: 4.6 + (index * 0.1),
                                    type: "spring",
                                    stiffness: 100
                                  }}
                                  whileHover={{
                                    scale: 1.01,
                                    x: 5,
                                    transition: { duration: 0.2 }
                                  }}
                                >
                                  <td className="px-3 py-2 border-r border-gray-200">
                                    <motion.span
                                      className={`inline-block px-2 py-1 text-xs rounded ${row.color}`}
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ duration: 0.3, delay: 4.7 + (index * 0.1) }}
                                    >
                                      {row.system}
                                    </motion.span>
                                  </td>
                                  <td className="px-3 py-2 text-xs text-gray-600 border-r border-gray-200">
                                    <motion.ul
                                      className="space-y-1"
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.3, delay: 4.8 + (index * 0.1) }}
                                    >
                                      {row.data.map((item, itemIndex) => (
                                        <motion.li
                                          key={itemIndex}
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ duration: 0.3, delay: 4.9 + (index * 0.1) + (itemIndex * 0.05) }}
                                        >
                                          • {item}
                                        </motion.li>
                                      ))}
                                    </motion.ul>
                                  </td>
                                  <td className="px-3 py-2 text-xs text-gray-600">
                                    <motion.ul
                                      className="space-y-1"
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.3, delay: 5.0 + (index * 0.1) }}
                                    >
                                      {row.actions.map((item, itemIndex) => (
                                        <motion.li
                                          key={itemIndex}
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ duration: 0.3, delay: 5.1 + (index * 0.1) + (itemIndex * 0.05) }}
                                        >
                                          • {item}
                                        </motion.li>
                                      ))}
                                    </motion.ul>
                                  </td>
                                </motion.tr>
                              ))}
                            </tbody>
                          </motion.table>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Business Value & ROI */}
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 5.8 }}
                    >
                      <motion.h3
                        className="text-sm font-semibold text-gray-800 mb-3 pb-1 border-b-2 border-blue-500"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 5.9 }}
                      >
                        Business Value & ROI
                      </motion.h3>

                      {/* Time Savings and Risk Reduction placeholders */}
                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 6.0 }}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20, x: -20 }}
                          animate={{ opacity: 1, y: 0, x: 0 }}
                          transition={{ duration: 0.4, delay: 6.1 }}
                        >
                          <h4 className="text-xs font-medium text-gray-700 mb-2">Time Savings</h4>
                          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-32 flex items-center justify-center">
                            <span className="text-xs text-gray-500">Chart Placeholder</span>
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20, x: 20 }}
                          animate={{ opacity: 1, y: 0, x: 0 }}
                          transition={{ duration: 0.4, delay: 6.2 }}
                        >
                          <h4 className="text-xs font-medium text-gray-700 mb-2">Risk Reduction</h4>
                          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-32 flex items-center justify-center">
                            <span className="text-xs text-gray-500">Chart Placeholder</span>
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Direct Business Impact */}
                      <motion.div
                        className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 6.3,
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
                          className="text-xs font-medium text-gray-800 mb-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 6.4 }}
                        >
                          Direct Business Impact:
                        </motion.h4>
                        <motion.ul
                          className="space-y-1 text-xs text-gray-700"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 6.5 }}
                        >
                          {[
                            "Time Efficiency: 6-8 hours saved per meeting analysis (vs. manual process)",
                            "Improved Requirements Accuracy: 40% more complete requirements identification",
                            "Risk Mitigation: Early identification of scope gaps and stakeholder concerns",
                            "Cross-System Consistency: Ensures synchronized information across all platforms",
                            "Knowledge Preservation: Captures and connects insights that would otherwise be lost"
                          ].map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 6.6 + (index * 0.1) }}
                            >
                              <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </motion.div>

                      {/* Annual Value Table */}
                      <motion.div
                        className="bg-blue-50 border border-blue-200 rounded-lg p-3"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 7.1,
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
                          className="text-xs font-medium text-gray-800 mb-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 7.2 }}
                        >
                          Annual Value (For a Typical Professional Services Organization):
                        </motion.h4>
                        <motion.div
                          className="overflow-x-auto"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 7.3 }}
                        >
                          <table className="w-full text-xs">
                            <tbody className="divide-y divide-blue-200">
                              {[
                                { label: "Client Requirements Workshops:", value: "~100 per year" },
                                { label: "Time Saved per Workshop:", value: "6-8 hours" },
                                { label: "Total Hours Saved:", value: "600-800 hours annually" },
                                { label: "Average Hourly Rate:", value: "€150/hour (Project Manager/Business Analyst)" },
                                { label: "Annual Value (Time Savings Only):", value: "€90,000 - €120,000", highlight: true },
                                { label: "Additional Value:", value: "Improved project success rates, reduced scope creep, better client relationships" }
                              ].map((row, index) => (
                                <motion.tr
                                  key={index}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: 7.4 + (index * 0.1) }}
                                >
                                  <td className="py-1 pr-4 font-medium text-gray-700">{row.label}</td>
                                  <td className={`py-1 text-gray-600 ${row.highlight ? 'font-semibold' : ''}`}>{row.value}</td>
                                </motion.tr>
                              ))}
                            </tbody>
                          </table>
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* Technical Implementation Notes */}
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 8.0 }}
                    >
                      <motion.h3
                        className="text-sm font-semibold text-gray-800 mb-3 pb-1 border-b-2 border-blue-500"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 8.1 }}
                      >
                        Technical Implementation Notes
                      </motion.h3>
                      <motion.p
                        className="text-xs text-gray-600 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 8.2 }}
                      >
                        Frontend Prototype Simulation
                      </motion.p>

                      <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 8.3 }}
                      >
                        {[
                          {
                            title: "Conversation Flow Simulation:",
                            items: [
                              "Implement a pre-programmed conversation path with branching based on common user responses",
                              "Create simulated \"thinking\" indicators when processing complex requests",
                              "Use realistic timing delays to simulate processing of the meeting recording"
                            ]
                          },
                          {
                            title: "Data Visualization:",
                            items: [
                              "Use Chart.js for creating the requirements categorization chart and ROI visualizations",
                              "Create static but realistic-looking data for the sentiment analysis visualization",
                              "Ensure all tables are responsive and maintain readability on different screen sizes"
                            ]
                          },
                          {
                            title: "Cross-Platform Integration Simulation:",
                            items: [
                              "Create visual indicators (system tags) that show which systems are being accessed at each step",
                              "Design mockups that closely mimic the UI of each integrated system (Jira, Confluence, etc.)",
                              "Implement simulated \"loading\" states when performing cross-platform actions"
                            ]
                          },
                          {
                            title: "Interface Toggle Implementation:",
                            items: [
                              "Create alternative UI styles for Teams, Copilot, and Slack interfaces",
                              "Maintain the same core functionality across all interface styles",
                              "Ensure conversation history persists when switching between interfaces"
                            ]
                          }
                        ].map((section, index) => (
                          <motion.div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg p-4"
                            initial={{ opacity: 0, y: 20, x: -20 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 8.4 + (index * 0.1),
                              type: "spring",
                              stiffness: 100
                            }}
                            whileHover={{
                              scale: 1.02,
                              x: 5,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <motion.h4
                              className="text-sm font-semibold text-gray-800 mb-3"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 8.5 + (index * 0.1) }}
                            >
                              {section.title}
                            </motion.h4>
                            <motion.ul
                              className="space-y-2 text-xs text-gray-600"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 8.6 + (index * 0.1) }}
                            >
                              {section.items.map((item, itemIndex) => (
                                <motion.li
                                  key={itemIndex}
                                  className="flex items-start"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: 8.7 + (index * 0.1) + (itemIndex * 0.05) }}
                                >
                                  <span className="mr-2 text-gray-400 mt-1">•</span>
                                  <span>{item}</span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
      {showUserStory && <UserStorySummary />}
    </>
  )
}

export default Step17