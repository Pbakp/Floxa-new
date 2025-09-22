import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import AnalyzingCard from '../processing-animation';
import ProjectSetupConfirmationCard from "./Missing/step4";

const data = [
  { x: 3, y: 4, risk: "ERP Integration Risk", color: "#DC2626" },
  { x: 2, y: 3, risk: "Dashboard Timeline Risk", color: "#F59E0B" },
  { x: 2, y: 2, risk: "GDPR Compliance Risk", color: "#F59E0B" },
  { x: 1, y: 1.5, risk: "Stakeholder Change Risk", color: "#059669" },
];

const xLabels: { [key: number]: string } = { 1: "Low", 2: "Med", 3: "High" };
const yLabels: { [key: number]: string } = { 1: "Low", 2: "Med", 3: "Med", 4: "High" };

export default function TechCorpRiskAnalysis() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing contract terms for potential risk areas" },
    { text: "Checking stakeholder stability through engagement history" },
    { text: "Reviewing similar past projects for common failure points" },
    { text: "Reviewing corporate risk frameworks from knowledge base" },
    { text: "Examining team availability conflicts in calendars" }
  ], []);

  const handleBuildRepeatComplete = useCallback(() => {
    // Show dashboard first with smooth transition
    setShowDashboard(true);

    // Show header after a smooth delay
    setTimeout(() => {
      setShowHeader(true);
    }, 500);

    // Show chart section after header
    setTimeout(() => {
      setShowChart(true);
    }, 1000);

    // Show tasks section after chart
    setTimeout(() => {
      setShowTasks(true);
    }, 1500);

    // Show dashboard value section after all animations complete
    setTimeout(() => {
      setShowDashboardValue(true);
    }, 2000);
  }, []);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const handleRiskClick = useCallback((data: any) => {
    setSelectedRisk(data.risk);
  }, []);

  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'll analyze the project requirements and identify potential risks to create a comprehensive risk management plan. Let me evaluate technical complexity and generate mitigation strategies."
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
            <div className="w-full px-4 py-6 bg-white rounded-lg shadow-md">
              {/* Header */}
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-gray-800">
                  <motion.span
                    role="img"
                    aria-label="warning"
                    className="text-yellow-600"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  >
                    ⚠️
                  </motion.span>
                  TechCorp Project Risk Analysis
                </h2>
                <motion.div
                  className="flex gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  {["Jira", "Confluence"].map((tool, index) => (
                    <motion.span
                      key={tool}
                      className="bg-blue-700 text-white px-3 py-1 rounded-full text-xs sm:text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + (index * 0.1), ease: "easeOut" }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col lg:flex-row gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              >
                {/* Risk Matrix Chart */}
                <motion.div
                  className="flex-1 w-full min-w-0 sm:min-w-[300px]"
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                >
                  <h3 className="mb-2 font-semibold text-sm sm:text-base text-gray-700">Risk Matrix</h3>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-3 bg-red-500 "></div>
                      <span className="text-xs text-gray-600">ERP Integration Risk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-3 bg-orange-500 "></div>
                      <span className="text-xs text-gray-600">Dashboard Timeline Risk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-3 bg-orange-500 "></div>
                      <span className="text-xs text-gray-600">GDRP Compliance Risk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-3 bg-green-500 "></div>
                      <span className="text-xs text-gray-600">Stakeholder Change Risk</span>
                    </div>
                  </div>
                  <div className="w-full">
                    <ResponsiveContainer width="100%" height={320}>
                      <ScatterChart
                        margin={{
                          top: 20,
                          right: 10,
                          bottom: 30,
                          left: isMobile ? 0 : 30, // Remove left margin on small screens
                        }}
                      >
                        <text
                          x={isMobile ? 100 : 150}
                          y={15}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="recharts-text"
                          fontSize="14"
                          fontWeight="500"
                        >
                          Risk Assessment Matrix
                        </text>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          type="number"
                          dataKey="x"
                          domain={[0.5, 3.5]}
                          ticks={[1, 2, 3]}
                          tickFormatter={(v) => xLabels[v as keyof typeof xLabels] || ""}
                          label={{
                            value: "Probability",
                            position: "bottom",
                            offset: 10,
                            fontSize: 12,
                          }}
                          tick={{ fontSize: 11 }}
                        />
                        <YAxis
                          type="number"
                          dataKey="y"
                          domain={[0.5, 4.5]}
                          ticks={[1, 2, 3, 4]}
                          tickFormatter={(v) => yLabels[v as keyof typeof yLabels] || ""}
                          label={{
                            value: "Impact",
                            angle: -90,
                            position: "insideLeft",
                            offset: 10,
                            fontSize: 12,
                          }}
                          tick={{ fontSize: 11 }}
                        />
                        <Tooltip
                          wrapperStyle={{ fontSize: "12px", maxWidth: "220px" }}
                          cursor={{ strokeDasharray: '3 3' }}
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              const point = payload[0].payload;
                              return (
                                <div className="bg-white text-xs p-2 border border-gray-200 rounded shadow-lg max-w-[220px]">
                                  <p className="font-semibold text-gray-800 border-b pb-1 mb-1">{point.risk}</p>
                                  <p>Probability: <strong>{xLabels[point.x as keyof typeof xLabels] || "Unknown"}</strong></p>
                                  <p>Impact: <strong>{yLabels[point.y as keyof typeof yLabels] || "Unknown"}</strong></p>
                                  <p className="mt-1 text-gray-600 text-[10px] italic">Click for details</p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Legend
                          verticalAlign="top"
                          align="center"
                          wrapperStyle={{ fontSize: "12px" }}
                        />
                        <Scatter
                          data={data}
                          shape={(props: any) => {
                            const { cx, cy, payload } = props;
                            return (
                              <circle
                                cx={cx}
                                cy={cy}
                                r={12}
                                fill={payload.color}
                                stroke="#374151"
                                strokeWidth={1}
                                style={{ cursor: 'pointer' }}
                              />
                            );
                          }}
                          onClick={handleRiskClick}
                        />
                      </ScatterChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>

                {/* Mitigation Tasks */}
                <motion.div
                  className="flex-1 min-w-[280px]"
                  initial={{ opacity: 0, x: 30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                >
                  <h3 className="mb-2 font-semibold text-sm sm:text-base text-gray-700">Mitigation Tasks Created</h3>
                  <motion.div
                    className="space-y-4 text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                  >
                    {/* High Priority */}
                    <motion.div
                      className="border-l-4 border-red-500 bg-red-50 p-4 rounded"
                      initial={{ opacity: 0, x: -20, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
                      style={{
                        transform: selectedRisk === "ERP Integration Risk" ? "scale(1.05)" : "scale(1)",
                        boxShadow: selectedRisk === "ERP Integration Risk" ? "0 0 10px rgba(220, 38, 38, 0.5)" : "none",
                        transition: "all 0.3s ease"
                      }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-red-700 font-semibold text-xs">TECH-101</span>
                        <span className="bg-red-200 text-red-700 px-2 py-0.5 rounded text-xs font-semibold">High Priority</span>
                      </div>
                      <p className="text-red-600 text-xs sm:text-sm">
                        Schedule early technical discovery with TechCorp IT
                      </p>
                    </motion.div>

                    {/* Medium Priority 1 */}
                    <motion.div
                      className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded"
                      initial={{ opacity: 0, x: 20, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
                      style={{
                        transform: selectedRisk === "Dashboard Timeline Risk" ? "scale(1.05)" : "scale(1)",
                        boxShadow: selectedRisk === "Dashboard Timeline Risk" ? "0 0 10px rgba(245, 158, 11, 0.5)" : "none",
                        transition: "all 0.3s ease"
                      }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-yellow-700 font-semibold text-xs">TECH-102</span>
                        <span className="bg-yellow-200 text-yellow-700 px-2 py-0.5 rounded text-xs font-semibold">Medium Priority</span>
                      </div>
                      <p className="text-yellow-700 text-xs sm:text-sm">
                        Add 20% buffer to Dashboard development phase
                      </p>
                    </motion.div>

                    {/* Medium Priority 2 */}
                    <motion.div
                      className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded"
                      initial={{ opacity: 0, x: -20, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
                      style={{
                        transform: selectedRisk === "GDPR Compliance Risk" ? "scale(1.05)" : "scale(1)",
                        boxShadow: selectedRisk === "GDPR Compliance Risk" ? "0 0 10px rgba(245, 158, 11, 0.5)" : "none",
                        transition: "all 0.3s ease"
                      }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-yellow-700 font-semibold text-xs">TECH-103</span>
                        <span className="bg-yellow-200 text-yellow-700 px-2 py-0.5 rounded text-xs font-semibold">Medium Priority</span>
                      </div>
                      <p className="text-yellow-700 text-xs sm:text-sm">
                        Engage legal compliance team for GDPR review
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
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
            <ProjectSetupConfirmationCard />
          </motion.div>
        )}
      </AnimatePresence>


    </>
  );
}
