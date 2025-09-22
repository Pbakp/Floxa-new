"use client"

import { useEffect, useState, useMemo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AnalyzingCard from "../processing-animation"

type Props = {}

const UserStorySummary = (props: Props) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="w-full max-w-4xl mx-auto mt-6"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            delay: 0.2
          }}
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            {/* Header */}
            <motion.div
              className="px-4 py-3 border-b border-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.h2
                className="text-sm font-semibold text-gray-800"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                User Story Summary
              </motion.h2>
              <motion.div
                className="w-full h-0.5 bg-blue-500 mt-1"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.6 }}
              ></motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="px-4 py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="mb-4">
                <motion.h3
                  className="text-xs font-semibold text-gray-700 mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  Key Value Demonstration:
                </motion.h3>
                <motion.p
                  className="text-xs text-gray-600 mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                >
                  This use case powerfully demonstrates Floxa's ability to:
                </motion.p>

                <motion.ul
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  {[
                    "Extract valuable insights from unstructured conversation data",
                    "Synthesize information across multiple enterprise systems",
                    "Automate routine but time-consuming tasks like documentation updates and ticket creation",
                    "Preserve critical knowledge that would otherwise remain siloed or lost",
                    "Take action across multiple platforms with simple natural language requests"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start text-xs text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 1.1 + (index * 0.1) }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2, delay: 1.2 + (index * 0.1) }}
                      ></motion.span>
                      <span>
                        <strong>{item.split(' ')[0]} {item.split(' ')[1]}:</strong> {item.split(': ')[1] || item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div
              className="bg-gray-800 px-4 py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              <motion.p
                className="text-xs text-gray-300 italic leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.8 }}
              >
                "Strategic Client Requirements Synthesis from Meeting Recordings" showcases how Floxa transforms fragmented
                information across enterprise systems into unified business intelligence that compounds, learns, and
                preserves organizational knowledge despite employee turnover.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default UserStorySummary