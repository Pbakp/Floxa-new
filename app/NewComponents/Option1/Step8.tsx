import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import AnalyzingCard from '../processing-animation';
import Step2 from "./Missing/step2";

const data = [
  { name: "Discovery & Planning", weeks: 6, color: "#3b82f6" }, // blue-500
  { name: "ERP System Analysis", weeks: 8, color: "#8b5cf6" }, // purple-500
  { name: "Integration Development", weeks: 16, color: "#10b981" }, // green-500
  { name: "Dashboard Creation", weeks: 12, color: "#f59e0b" }, // orange-500
  { name: "Testing & Validation", weeks: 8, color: "#ef4444" }, // red-500
];

const DigitalTransformationPlan = () => {
  const [showStep2, setShowStep2] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);
  const [showStrategicValue, setShowStrategicValue] = useState(false);
  const [animateChart, setAnimateChart] = useState(false);
  const [showMilestones, setShowMilestones] = useState(false);
  const [showTasks, setShowTasks] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Retrieving project templates for digital transformation" },
    { text: "Configuring project deliverables and timeline tracking" },
    { text: "Creating an epic structure based on contract requirements" },
    { text: "Creating customer touchpoints and communication plan" },
    { text: "Setting up document folders with appropriate permissions" }
  ], []);

  // Show Step2 immediately
  React.useEffect(() => {
    setShowStep2(true);
  }, []);

  const handleBuildRepeatComplete = useCallback(() => {
    // Show dashboard first with smooth transition
    setShowDashboard(true);

    // Start chart animation after a short delay
    setTimeout(() => {
      setAnimateChart(true);
    }, 500);

    // Show milestones section after chart animation starts
    setTimeout(() => {
      setShowMilestones(true);
    }, 1000);

    // Show tasks section after milestones
    setTimeout(() => {
      setShowTasks(true);
    }, 1500);

    // Show dashboard value section after a delay
    setTimeout(() => {
      setShowDashboardValue(true);
    }, 800);

    // Show strategic value section after another delay
    setTimeout(() => {
      setShowStrategicValue(true);
    }, 1200);
  }, []);
  return (
    <>
      {showStep2 && <Step2 />}

      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'll analyze the project requirements and create a comprehensive digital transformation plan with timeline, milestones, and task breakdown. Let me generate the optimal project structure."
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
            <div className="bg-white rounded-xl p-2 max-w-full">
              {/* Header */}
              <motion.div
                className="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <h2 className="text-2xl font-semibold flex items-center gap-3 text-gray-900">
                  TechCorp Digital Transformation Plan
                </h2>

                <motion.div
                  className="flex gap-3 mt-5 md:mt-0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  {["Jira", "Confluence", "SharePoint"].map((tool, index) => (
                    <motion.span
                      key={tool}
                      className="bg-blue-600 text-white text-sm px-4 py-1 rounded-full shadow-sm hover:bg-blue-700 transition"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + (index * 0.1), ease: "easeOut" }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              {/* Timeline Subtitle */}
              <motion.div
                className="text-center text-sm font-medium text-gray-600 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                Project Timeline: March - November 2025
              </motion.div>

              {/* Recharts BarChart */}
              <motion.div
                className="w-full h-80 md:h-96"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.0, delay: 1.0, ease: "easeOut" }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={data}
                    margin={{ top: 20, right: 40, left: 10, bottom: 30 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis
                      type="number"
                      label={{
                        value: "Duration (Weeks)",
                        position: "bottom",
                        offset: 10,
                        style: { fontWeight: "600", fontSize: 14, fill: "#4b5563" },
                      }}
                      domain={[0, 18]}
                      tickCount={10}
                      tick={{ fontSize: 13, fill: "#6b7280" }}
                    />
                    <YAxis
                      dataKey="name"
                      type="category"
                      width={160}
                      tick={{ fontWeight: "600", fontSize: 15, fill: "#374151" }}
                    />
                    <Tooltip
                      formatter={(value) => `${value} weeks`}
                      cursor={{ fill: "rgba(0,0,0,0.05)" }}
                      contentStyle={{
                        borderRadius: "8px",
                        borderColor: "#60a5fa",
                        boxShadow: "0 4px 10px rgb(96 165 250 / 0.25)",
                      }}
                    />
                    <Bar
                      dataKey="weeks"
                      isAnimationActive={animateChart}
                      animationBegin={0}
                      animationDuration={2000}
                      animationEasing="ease-out"
                      radius={[12, 12, 12, 12]}
                      label={{
                        position: "right",
                        fill: "#374151",
                        fontWeight: "700",
                        fontSize: 14,
                        offset: 8,
                      }}
                      background={{ fill: "#f3f4f6" }}
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          style={{
                            transition: 'all 0.3s ease-in-out',
                            animationDelay: `${index * 200}ms`,
                          }}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Milestone & Task Section */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              >
                {/* Milestone Box */}
                <motion.div
                  className="bg-blue-50 rounded-lg p-6 space-y-4 shadow-sm"
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                >
                  <p className="text-blue-900 font-semibold text-lg">
                    Key Milestone: June 30 Phase 1 Integration Complete
                  </p>
                  <div className="flex justify-between text-blue-700 font-medium text-sm">
                    <div>Discovery & Planning</div>
                    <div>Mar - Apr</div>
                  </div>
                  <div className="flex justify-between text-blue-700 font-medium text-sm">
                    <div>ERP System Analysis</div>
                    <div>Apr - May</div>
                  </div>
                  <div className="flex justify-between text-blue-700 font-medium text-sm">
                    <div>Integration Development</div>
                    <div>May - Aug</div>
                  </div>
                </motion.div>

                {/* Task Count Box */}
                <motion.div
                  className="bg-green-50 rounded-lg p-6 shadow-sm"
                  initial={{ opacity: 0, x: 30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-3 text-sm text-green-900 mb-3">
                    <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded-full">
                      Jira
                    </span>
                    <span className="font-semibold">Initial Tasks Created</span>
                  </div>
                  <p className="text-4xl font-extrabold text-green-800 mb-1">42 Tasks</p>
                  <p className="text-sm text-green-800 mb-5">in 5 Epics</p>
                  <ul className="text-sm text-green-900 space-y-2">
                    <li className="flex justify-between">
                      <span>Discovery Epic</span>
                      <span>8 tasks</span>
                    </li>
                    <li className="flex justify-between">
                      <span>ERP Analysis Epic</span>
                      <span>12 tasks</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Integration Epic</span>
                      <span>15 tasks</span>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DigitalTransformationPlan;
