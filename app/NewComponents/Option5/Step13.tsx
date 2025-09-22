import React from 'react';
import { motion } from 'framer-motion';

const StaticContent: React.FC = () => {
  return (
    <motion.div
      className="p-3 max-w-screen-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
    >
      {/* Competitive Intelligence & Market Position Title */}
      <motion.h1
        className="text-xl font-bold text-left text-gray-900 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2
        }}
      >
        Competitive Intelligence & Market Position
      </motion.h1>

      {/* Three Column Layout - Competitive Intelligence */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.4
        }}
      >
        {/* Floxa Advantage */}
        <motion.div
          className="bg-blue-50 p-6 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.6
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Floxa Advantage</h3>
          <ul className="space-y-2 text-sm text-blue-700">
            <li>• Cross-platform intelligence synthesis</li>
            <li>• Predictive churn detection (30-day window)</li>
            <li>• Crisis intervention automation</li>
            <li>• Real-time stakeholder mapping</li>
          </ul>
        </motion.div>

        {/* Traditional CRM Limitations */}
        <motion.div
          className="bg-white border border-gray-200 p-6 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.8
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Traditional CRM Limitations</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Siloed data analysis</li>
            <li>• Reactive risk identification</li>
            <li>• Manual relationship health tracking</li>
            <li>• No predictive capabilities</li>
          </ul>
        </motion.div>

        {/* Market Differentiation */}
        <motion.div
          className="bg-purple-50 p-6 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 1.0
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <h3 className="text-lg font-semibold text-purple-600 mb-4">Market Differentiation</h3>
          <ul className="space-y-2 text-sm text-purple-700">
            <li>• Only solution with Microsoft Graph integration</li>
            <li>• AI-powered crisis call preparation</li>
            <li>• Automatic stakeholder sentiment analysis</li>
            <li>• Market intelligence correlation</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Stakeholder Alignment Framework Title */}
      <motion.h1
        className="text-xl font-bold text-left text-gray-900 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 1.2
        }}
      >
        Stakeholder Alignment Framework
      </motion.h1>

      {/* Two Column Layout */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 1.4
        }}
      >
        {/* Left Column - Internal Stakeholder Benefits */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 1.6
          }}
        >
          <motion.h2
            className="text-lg font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 1.8
            }}
          >
            Internal Stakeholder Benefits
          </motion.h2>

          {/* Account Managers */}
          <motion.div
            className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 2.0
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <h3 className="text-sm font-semibold text-blue-600 mb-2">Account Managers</h3>
            <p className="text-xs text-gray-600">Proactive risk detection, automated crisis preparation, relationship health visibility</p>
          </motion.div>

          {/* Sales Leadership */}
          <motion.div
            className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 2.2
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <h3 className="text-sm font-semibold text-green-600 mb-2">Sales Leadership</h3>
            <p className="text-xs text-gray-600">Revenue protection, upsell opportunity identification, account portfolio optimization</p>
          </motion.div>

          {/* Executive Team */}
          <motion.div
            className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 2.4
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <h3 className="text-sm font-semibold text-purple-600 mb-2">Executive Team</h3>
            <p className="text-xs text-gray-600">Strategic account visibility, competitive intelligence, predictive revenue forecasting</p>
          </motion.div>
        </motion.div>

        {/* Right Column - Client Stakeholder Value */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.8
          }}
        >
          <motion.h2
            className="text-lg font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 1.0
            }}
          >
            Client Stakeholder Value
          </motion.h2>

          {/* Technical Teams */}
          <motion.div
            className="bg-white border-l-4 border-gray-300 p-4 rounded-r-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 1.2
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Technical Teams</h3>
            <p className="text-xs text-gray-600">Faster issue resolution, proactive support, dedicated technical resources</p>
          </motion.div>

          {/* Executive Buyers */}
          <motion.div
            className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 1.4
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <h3 className="text-sm font-semibold text-red-600 mb-2">Executive Buyers</h3>
            <p className="text-xs text-red-600">Strategic partnership focus, transparent communication, business outcome alignment</p>
          </motion.div>

          {/* End Users */}
          <motion.div
            className="bg-white border-l-4 border-gray-300 p-4 rounded-r-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 1.6
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <h3 className="text-sm font-semibold text-gray-800 mb-2">End Users</h3>
            <p className="text-xs text-gray-600">Improved platform reliability, enhanced features, seamless integration experience</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default StaticContent;
