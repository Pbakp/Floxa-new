"use client";

import React, { useEffect, useState } from "react";
import {
  Building2,
  MessageSquare,
  GitBranch,
  Building,
  Globe,
} from "lucide-react";
import { TfiReload } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";
import DigitalTransformationIntelligenceAns1b from "./digitalTransformationIntelligenceans1b";

const DigitalTransformationIntelligenceAns1 = () => {
  const [showAnalyzing, setShowAnalyzing] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [show1b, setShow1b] = useState(false);

  useEffect(() => {
    // Show analyzing container for 3s, then show main content
    const timerAnalyzing = setTimeout(() => {
      setShowAnalyzing(false);
      setShowMain(true);
    }, 3000);
    // Show 1b after main assessment appears (runs in sequence)
    const timer1b = setTimeout(() => {
      setShow1b(true);
    }, 5000);
    // Show third section after 1b appears
    const timer3 = setTimeout(() => {
      setShowThird(true);
    }, 7000);
    return () => {
      clearTimeout(timerAnalyzing);
      clearTimeout(timer1b);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="max-w-full mx-auto p-3 bg-white">
      {/* Floxa Message Box (Analyzing) - Only shows once */}
      <AnimatePresence>
        {showAnalyzing && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white shadow-lg">
              <motion.p
                className="text-xs leading-relaxed mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                I'll provide a comprehensive digital transformation analysis by
                examining your current capabilities across all enterprise
                platforms, analyzing competitive AI implementations, and
                developing a data-driven business case. Let me start by assessing
                your digital maturity and AI readiness.
              </motion.p>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <TfiReload className="inline-block animate-spin mr-2" />
                <p className="text-xs opacity-90">
                  Analyzing digital maturity across Microsoft 365, Atlassian, and
                  HubSpot platforms...
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Assessment Card (after analyzing) */}
      <AnimatePresence>
        {showMain && (

          <>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            }}
            className="mb-8"
          >
            <div className="bg-white border-l-8 border-purple-700 rounded-xl shadow-md p-8">
              <h2 className="text-base font-bold text-gray-900 mb-6 text-center">
                Digital Maturity Assessment - Cross-Platform Analysis
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Side: Platform Utilization Analysis */}
                <div>
                  <h3 className="text-xs font-bold text-gray-900 mb-4">
                    Platform Utilization Analysis
                  </h3>

                  {/* Radar Chart Container */}
                  <div className="relative w-full h-72 bg-gray-50 rounded-lg p-2">
                    <svg className="w-full h-full mt-5" viewBox="0 0 300 300">
                      {/* Concentric circles */}
                      {[20, 40, 60, 80, 100].map((radius, index) => (
                        <circle
                          key={index}
                          cx="150"
                          cy="150"
                          r={radius * 1.2}
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="1"
                        />
                      ))}

                      {/* Scale numbers on axes */}
                      {[20, 40, 60, 80, 100].map((value, index) => {
                        const radius = value * 1.2;
                        const x = 150 + Math.cos((-90 * Math.PI) / 180) * radius;
                        const y = 150 + Math.sin((-90 * Math.PI) / 180) * radius;
                        return (
                          <text
                            key={index}
                            x={x - 20}
                            y={y + 5}
                            textAnchor="middle"
                            className="text-[10px] fill-gray-500 font-medium"
                          >
                            {value}
                          </text>
                        );
                      })}

                      {/* Axes lines */}
                      {[
                        { angle: 0, label: "Data Integration" },
                        { angle: 60, label: "Process Automation" },
                        { angle: 120, label: "User Adoption" },
                        { angle: 180, label: "Security Readiness" },
                        { angle: 240, label: "Analytics Capability" },
                        { angle: 300, label: "AI Infrastructure" },
                      ].map((axis, index) => {
                        const x =
                          150 +
                          Math.cos(((axis.angle - 90) * Math.PI) / 180) * 120;
                        const y =
                          150 +
                          Math.sin(((axis.angle - 90) * Math.PI) / 180) * 120;
                        return (
                          <g key={index}>
                            <line
                              x1="150"
                              y1="150"
                              x2={x}
                              y2={y}
                              stroke="#e5e7eb"
                              strokeWidth="1"
                            />
                            <text
                              x={
                                x +
                                Math.cos(((axis.angle - 90) * Math.PI) / 180) * 15
                              }
                              y={
                                y +
                                Math.sin(((axis.angle - 90) * Math.PI) / 180) * 15
                              }
                              textAnchor="middle"
                              className="text-[10px] fill-gray-600"
                            >
                              {axis.label}
                            </text>
                          </g>
                        );
                      })}

                      {/* Current State Polygon (Light Purple) */}
                      <polygon
                        points="150,45 120,90 105,135 135,180 165,180 195,135 180,90"
                        fill="rgba(147, 51, 234, 0.3)"
                        stroke="#9333ea"
                        strokeWidth="2"
                      />

                      {/* Target State Polygon (Pink) */}
                      <polygon
                        points="150,30 135,75 120,120 150,165 180,165 210,120 195,75"
                        fill="rgba(236, 72, 153, 0.3)"
                        stroke="#ec4899"
                        strokeWidth="2"
                      />
                    </svg>

                    {/* Legend */}
                    <div className="absolute top-2 sm:left-2 md:left-8 xl:left-16 flex space-x-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-8 h-3 bg-purple-400 rounded"></div>
                        <span className="text-xs text-gray-700">Current State</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-8 h-3 bg-pink-400 rounded"></div>
                        <span className="text-xs text-gray-700">Target State</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Current State Metrics */}
                <div>
                  <h3 className="text-xs font-bold text-gray-900 mb-4">
                    Current State Metrics
                  </h3>

                  <div className="space-y-3">
                    {/* Data Integration Score */}
                    <div className="bg-white border flex justify-between border-gray-200 rounded-lg p-2 shadow-sm">
                      <div>
                        <h4 className="text-xs font-semibold text-gray-900 mb-0.5">
                          Data Integration Score
                        </h4>
                        <p className="text-[11px] text-gray-600 mb-1">
                          Cross-platform data connectivity
                        </p>
                      </div>
                      <div className="text-xl font-bold text-green-600">73%</div>
                    </div>

                    {/* Process Automation */}
                    <div className="bg-white border flex justify-between border-gray-200 rounded-lg p-2 shadow-sm">
                      <div>
                        <h4 className="text-xs font-semibold text-gray-900 mb-0.5">
                          Process Automation
                        </h4>
                        <p className="text-[11px] text-gray-600 mb-1">
                          Current workflow automation level
                        </p>
                      </div>
                      <div className="text-xl font-bold text-orange-600">45%</div>
                    </div>

                    {/* AI Integration Readiness */}
                    <div className="bg-white border flex justify-between border-gray-200 rounded-lg p-2 shadow-sm">
                      <div>
                        <h4 className="text-xs font-semibold text-gray-900 mb-0.5">
                          AI Integration Readiness
                        </h4>
                        <p className="text-[11px] text-gray-600 mb-1">
                          Infrastructure and skills assessment
                        </p>
                      </div>
                      <div className="text-xl font-bold text-blue-600">67%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            }}
            className="mb-8"
          >
            <div className="bg-white border-l-8 border-purple-700 rounded-xl shadow-md p-6">
              <h3 className="text-xs font-bold text-gray-900 mb-4">
                System Integration Status
              </h3>

              <div className="flex flex-wrap gap-4">
                {/* Microsoft 365 */}
                <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full">
                  <Building2 className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] font-medium text-gray-700">
                    Microsoft 365
                  </span>
                </div>

                {/* Teams */}
                <div className="flex items-center space-x-1 bg-blue-100 px-2 py-1 rounded-full">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  <span className="text-[10px] font-medium text-blue-700">Teams</span>
                </div>

                {/* Jira */}
                <div className="flex items-center space-x-1 bg-blue-100 px-2 py-1 rounded-full">
                  <GitBranch className="w-4 h-4 text-blue-600" />
                  <span className="text-[10px] font-medium text-blue-700">Jira</span>
                </div>

                {/* HubSpot */}
                <div className="flex items-center space-x-1 bg-pink-100 px-2 py-1 rounded-full">
                  <Building className="w-4 h-4 text-pink-600" />
                  <span className="text-[10px] font-medium text-pink-700">HubSpot</span>
                </div>

                {/* External Scan */}
                <div className="flex items-center space-x-1 bg-gray-800 px-2 py-1 rounded-full">
                  <Globe className="w-4 h-4 text-white" />
                  <span className="text-[10px] font-medium text-white">
                    External Scan
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

</>

        )}
      </AnimatePresence>

      {/* 1b Section: Shows after main assessment, runs in sequence */}

      {/* Third Section: System Integration Status */}
     

      <AnimatePresence>
        {show1b && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            }}
          >
            <DigitalTransformationIntelligenceAns1b />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DigitalTransformationIntelligenceAns1;
