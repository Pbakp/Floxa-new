"use client";

import React, { useEffect, useState } from "react";
import { Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DigitalTransformationIntelligenceAns3b from "./digitalTransformationIntelligenceans3b";
import { TfiReload } from "react-icons/tfi";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';

const DigitalTransformationIntelligenceAns3 = () => {
  const [showAnalyzing, setShowAnalyzing] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [show3b, setShow3b] = useState(false);

  useEffect(() => {
    // Show analyzing component for 3 seconds, then show main content
    const timerAnalyzing = setTimeout(() => {
      setShowAnalyzing(false);
      setShowMain(true);
    }, 3000); // Show analyzing for 3 seconds

    // Show 3b component after main content
    const timer3b = setTimeout(() => {
      setShow3b(true);
    }, 5000); // Show 3b after 5 seconds total

    return () => {
      clearTimeout(timerAnalyzing);
      clearTimeout(timer3b);
    };
  }, []);

  // Data for scatter chart
  const scatterData = [
    { name: 'Document Processing', x: 85, y: 90, color: '#10b981', stroke: '#059669' },
    { name: 'Customer Service AI', x: 75, y: 85, color: '#3b82f6', stroke: '#2563eb' },
    { name: 'Predictive Analytics', x: 90, y: 80, color: '#8b5cf6', stroke: '#7c3aed' },
    { name: 'Process Automation', x: 65, y: 70, color: '#f59e0b', stroke: '#d97706' },
  ];

  // Custom tooltip for scatter points
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded text-xs">
          <p className="font-medium">{payload[0].payload.name}</p>
          <p>Implementation Readiness: {payload[0].payload.x}%</p>
          <p>Business Impact: {payload[0].payload.y}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-full mx-auto p-3 bg-white">
      {/* Floxa AI Assistant Message - Analyzing */}
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
                className="text-xs md:text-xs leading-relaxed mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Based on your competitive analysis and current capabilities,
                I&apos;ve identified several high-impact AI opportunities where
                you can achieve competitive advantage. Let me show you specific
                implementation areas with ROI projections and competitive
                differentiation potential.
              </motion.p>
              <motion.div
                className="flex flex-row items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <TfiReload className="mr-2 animate-spin" />
                <p className="text-xs md:text-xs opacity-90">
                  Analyzing AI implementation opportunities and competitive
                  gaps...
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Implementation Readiness Assessment */}
      <AnimatePresence>
        {showMain && (
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
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-8">
                <Settings className="w-5 h-5 text-purple-600" />
                <h2 className="text-lg font-bold text-gray-900">
                  AI Implementation Readiness Assessment
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side: Readiness by Category */}
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-6">
                    Readiness by Category
                  </h3>

                  <div className="space-y-6">
                    {/* Data Infrastructure */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Data Infrastructure
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          78%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-green-500 h-3 rounded-full transition-all duration-1000 ease-out animate-grow"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                    </div>

                    {/* Technical Skills */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Technical Skills
                        </span>
                        <span className="text-sm font-bold text-orange-600">
                          45%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-orange-500 h-3 rounded-full transition-all duration-1000 ease-out animate-grow"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>

                    {/* Process Automation */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Process Automation
                        </span>
                        <span className="text-sm font-bold text-red-600">
                          34%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-red-500 h-3 rounded-full transition-all duration-1000 ease-out animate-grow"
                          style={{ width: "34%" }}
                        ></div>
                      </div>
                    </div>

                    {/* Change Management */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Change Management
                        </span>
                        <span className="text-sm font-bold text-red-600">
                          23%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-red-500 h-3 rounded-full transition-all duration-1000 ease-out animate-grow"
                          style={{ width: "23%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Implementation Priority Matrix */}
                <div className=" w-full">
                  <h3 className="text-base font-bold text-gray-900 mb-6">
                    Implementation Priority Matrix
                  </h3>

                  {/* Legend */}
                  <div className="flex gap-2 w-full xl:w-[80%]  2xl:w-[60%] mx-auto  mb-4 ">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 2xl:w-7 h-3 bg-green-500 "></div>
                        <span className="text-xs text-gray-600">Document Processing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 2xl:w-7 h-3 bg-purple-500 "></div>
                        <span className="text-xs text-gray-600">Predictive Analytics</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 2xl:w-7 h-3 bg-blue-500 "></div>
                        <span className="text-xs text-gray-600">Customer Service AI</span>

                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 2xl:w-7 h-3 bg-orange-500 "></div>
                        <span className="text-xs text-gray-600">Process Automation</span>
                      </div>
                    </div>
                  </div>

                  {/* Recharts Scatter Plot */}
                  <div className="relative w-full h-80  rounded-lg p-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <ScatterChart
                        margin={{ top: 20, right: 20, bottom: 30, left: 1 }}
                      >
                        <CartesianGrid stroke="#e5e7eb" />
                        <XAxis
                          type="number"
                          dataKey="x"
                          name="Implementation Readiness"
                          domain={[0, 100]}
                          tick={{ fontSize: 10 }}
                          tickCount={11}
                          label={{ value: 'Implementation Readiness', position: 'bottom', dy: 15, fontSize: 12, fill: "#4b5563" }}
                        />
                        <YAxis
                          type="number"
                          dataKey="y"
                          name="Business Impact"
                          domain={[0, 100]}
                          tick={{ fontSize: 10 }}
                          tickCount={11}
                          label={{ value: 'Business Impact', angle: -90, position: 'insideLeft', dx: -0, fontSize: 12, fill: "#4b5563" }}
                        />
                        <Tooltip content={<CustomTooltip />} />

                        <ReferenceLine y={50} stroke="#e5e7eb" strokeWidth={1} />
                        <ReferenceLine y={70} stroke="#e5e7eb" strokeWidth={1} />
                        <ReferenceLine y={90} stroke="#e5e7eb" strokeWidth={1} />
                        <ReferenceLine y={30} stroke="#e5e7eb" strokeWidth={1} />
                        <ReferenceLine y={10} stroke="#e5e7eb" strokeWidth={1} />
                        <ReferenceLine x={30} stroke="#e5e7eb" strokeWidth={1} />
                        <ReferenceLine x={50} stroke="#e5e7eb" strokeWidth={1} />
                        <ReferenceLine x={70} stroke="#e5e7eb" strokeWidth={1} />
                        <ReferenceLine x={90} stroke="#e5e7eb" strokeWidth={1} />
                        <Scatter
                          data={scatterData}
                          shape={(props: any) => {
                            const { cx, cy, payload } = props;
                            return (
                              <circle
                                cx={cx}
                                cy={cy}
                                r={4}
                                fill={payload.color}
                                stroke={payload.stroke}
                                strokeWidth={2}
                              />
                            );
                          }}
                        />
                      </ScatterChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show 3b only after main content */}
      <AnimatePresence>
        {show3b && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            }}
          >
            <DigitalTransformationIntelligenceAns3b />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default DigitalTransformationIntelligenceAns3;
