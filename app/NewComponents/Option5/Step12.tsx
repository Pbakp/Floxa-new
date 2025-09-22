import React from "react";
import { motion } from "framer-motion";

const BusinessValueROI: React.FC = () => {
  return (
    <motion.div
      className="w-full max-w-7xl mx-auto p-3 bg-white rounded-lg mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
    >
      <motion.h2
        className="text-lg font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2
        }}
      >
        Business Value & ROI Summary
      </motion.h2>

      <motion.div
        className="space-y-6 space-x-1 bg-white mt-6 flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.4
        }}
      >
        {/* Time Savings & Efficiency and Revenue Impact Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 w-full bg-white lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.6
          }}
        >

          {/* Time Savings & Efficiency Box */}
          <motion.div
            className="p-6 bg-white max-w-full text-black rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.8
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <h3 className="text-md font-semibold mb-4">Time Savings & Efficiency</h3>
            <p className="text-xs bg-blue-100 p-2 mb-2 rounded">
              Relationship Analysis Time: <span className="font-bold">4.5 hours saved</span>
            </p>
            <p className="text-xs bg-blue-100 p-2 mb-2 rounded">
              Crisis Call Preparation: <span className="font-bold">2.5 hours saved</span>
            </p>
            <p className="text-xs bg-blue-100 p-2 mb-2 rounded">
              Ongoing Monitoring Setup: <span className="font-bold">8 hours saved</span>
            </p>
          </motion.div>

          {/* Revenue Impact Box */}
          <motion.div
            className="p-6 bg-white min-w-full text-black rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 1.0
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <h3 className="text-md font-semibold mb-4">Revenue Impact</h3>
            <p className="text-xs bg-green-100 p-2 mb-2 rounded">
              Contract Value Protected: <span className="font-bold text-green-500">€450K</span>
            </p>
            <p className="text-xs bg-green-100 p-2 mb-2 rounded">
              Potential Upsell Identified: <span className="font-bold text-green-500">€180K-€300K</span>
            </p>
            <p className="text-xs bg-green-100 p-2 mb-2 rounded">
              Recovery Investment Required: <span className="font-bold text-green-500">€60K</span>
            </p>
          </motion.div>

        </motion.div>

        {/* ROI Section with Gradient */}
        <motion.div
          className="p-3 bg-gradient-to-r from-green-400 to-blue-600 text-center text-white rounded-lg shadow-md mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 1.2
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <h3 className="text-lg font-semibold mb-2">ROI of Recovery Strategy</h3>
          <p className="text-sm font-bold">890% Annual ROI</p>
          <p className="text-xs mt-2">€450K Value Protected vs. €50K Platform Cost</p>
          <p className="text-xs mt-1">Payback Period: 1.3 months (Target: &lt;6.5 months)</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BusinessValueROI;
