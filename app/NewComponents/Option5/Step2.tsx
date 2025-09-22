// components/ChartComponent.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IoSpeedometerSharp } from "react-icons/io5";
const data = [
  {
    name: 'Support Tickets',
    current: 12,
    target: 8,
  },
  {
    name: 'SLA Breaches',
    current: 3,
    target: 0,
  },
  {
    name: 'Response Time (hours)',
    current: 65,
    target: 8,
  },
  {
    name: 'Knowledge Base Access',
    current: 0,
    target: 5,
  },
];

const ChartComponent: React.FC = () => {
  return (
    <motion.div
      className="w-full max-w-6xl mx-auto p-4 sm:p-6 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
    >
      <motion.div
        className='flex items-center justify-start gap-2'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2
        }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <IoSpeedometerSharp className='text-red-700 mb-4 text-2xl' />
        </motion.div>
        <h2 className="text-lg sm:text-lg text-blue-600 font-semibold mb-4">Real-Time Operational Metrics Analysis</h2>
      </motion.div>

      {/* Header Section with Metrics */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-11/12 mx-auto mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.4
        }}
      >
        <motion.div
          className="flex flex-col items-start p-4 bg-white border-l-6 border-red-500 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.6
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <motion.span
            className="text-xl text-red-600 font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              type: "spring",
              stiffness: 200
            }}
          >
            12
          </motion.span>
          <span className="text-sm text-gray-600">Open Jira Tickets</span>
          <span className="text-xs text-red-500 mt-1">3 over SLA</span>
        </motion.div>

        <motion.div
          className="flex flex-col border-l-6 border-gray-500 items-start p-4 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.8
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <motion.span
            className="text-xl text-yellow-600 font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.0,
              type: "spring",
              stiffness: 200
            }}
          >
            2.3 days
          </motion.span>
          <span className="text-sm text-gray-600">Avg Response Time</span>
          <span className="text-xs text-yellow-500 mt-1">vs 8-hour SLA target</span>
        </motion.div>

        <motion.div
          className="flex flex-col items-start border-l-6 border-red-500 p-4 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 1.0
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <motion.span
            className="text-xl text-red-600 font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.2,
              type: "spring",
              stiffness: 200
            }}
          >
            18 days
          </motion.span>
          <span className="text-sm text-gray-600">Last KB Access</span>
          <span className="text-xs text-red-500 mt-1">Self-service declining</span>
        </motion.div>
      </motion.div>

      {/* Chart Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 1.4
        }}
      >
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="current" fill="#FF4D4D" name="Current" />
            <Bar dataKey="target" fill="#4CAF50" name="Target" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
};

export default ChartComponent;
