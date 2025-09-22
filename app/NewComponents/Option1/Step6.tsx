"use client"; // Only for App Router setup


import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnalyzingCard from '../processing-animation';
import ProjectPlanStep from './Step7';


const TeamSelectionPage = () => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [showMainContent, setShowMainContent] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing team member profiles and availability windows" },
    { text: "Calculating skill match percentages for project requirements" },
    { text: "Evaluating workload distribution and resource optimization" },
    { text: "Cross-referencing with past project success patterns" },
    { text: "Finalizing optimal team composition and confirming selections" }
  ], []);

  const handleBuildRepeatComplete = useCallback(() => {
    // Show dashboard first with smooth transition
    setShowDashboard(true);

    // Show main content after a smooth delay
    setTimeout(() => {
      setShowMainContent(true);
    }, 500);

    // Show header after main content appears
    setTimeout(() => {
      setShowHeader(true);
    }, 800);

    // Show cards after header
    setTimeout(() => {
      setShowCards(true);
    }, 1200);

    // Show button after cards
    setTimeout(() => {
      setShowButton(true);
    }, 1800);
  }, []);

  // Simulate progress change over time
  useEffect(() => {
    if (showMainContent) {
      const timer1 = setTimeout(() => {
        setProgress1(90); // Set to 90% after 2 seconds
      }, 1500);

      const timer2 = setTimeout(() => {
        setProgress2(95); // Set to 95% after 3 seconds
      }, 1500);

      const timer3 = setTimeout(() => {
        setProgress3(92); // Set to 92% after 4 seconds
      }, 1500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [showMainContent]);

  return (

    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'll analyze the recommended team members and calculate optimal skill matches for the TechCorp project. Let me evaluate compatibility and finalize the team selection."
      />

      <AnimatePresence mode="wait">
        {showDashboard && showMainContent && (
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
            <main className="p-6 md:p-10 max-w-7xl mx-auto space-y-10">
              <motion.h1
                className="text-2xl font-bold text-gray-800"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                👥 TechCorp Project Team Selection
              </motion.h1>

              {/* Team Cards Section */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 flex-wrap gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                {/* Card 1 */}
                <motion.div
                  className="rounded-lg border border-green-400 p-6 bg-green-50 shadow hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center font-bold text-lg">
                      JR
                    </div>
                    <div>
                      <p className="font-semibold">Jennifer Reeves</p>
                      <p className="text-gray-500 text-sm">Project Manager</p>
                      <p className="text-green-600 text-sm">✔ Selected</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="font-medium">Match Score</p>
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 h-2 rounded">
                        <div
                          className="bg-green-500 h-2 rounded"
                          style={{
                            width: `${progress1}%`,
                            transition: 'width 2s ease-in-out', // Smooth transition for width change
                          }}
                        />
                      </div>
                      <span className="text-sm font-bold">{progress1}%</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <p><span className="font-bold">Skills:</span> Digital Transformation, Enterprise Projects, Agile</p>
                    <p><span className="font-bold">Available:</span> From Mar 10</p>
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  className="rounded-lg border border-green-400 p-6 bg-green-50 shadow hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-purple-500 text-white w-12 h-12 flex items-center justify-center font-bold text-lg">
                      DK
                    </div>
                    <div>
                      <p className="font-semibold">David Kumar</p>
                      <p className="text-gray-500 text-sm">ERP Specialist</p>
                      <p className="text-green-600 text-sm">✔ Selected</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="font-medium">Match Score</p>
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 h-2 rounded">
                        <div
                          className="bg-green-500 h-2 rounded"
                          style={{
                            width: `${progress2}%`,
                            transition: 'width 2s ease-in-out', // Smooth transition for width change
                          }}
                        />
                      </div>
                      <span className="text-sm font-bold">{progress2}%</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <p><span className="font-bold">Skills:</span> ERP Integration, API Development, Data Migration</p>
                    <p><span className="font-bold">Available:</span> From Mar 15</p>
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  className="rounded-lg border border-green-400 p-6 bg-green-50 shadow hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, x: 30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-pink-500 text-white w-12 h-12 flex items-center justify-center font-bold text-lg">
                      SW
                    </div>
                    <div>
                      <p className="font-semibold">Sarah Williams</p>
                      <p className="text-gray-500 text-sm">Dashboard Developer</p>
                      <p className="text-green-600 text-sm">✔ Selected</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="font-medium">Match Score</p>
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 h-2 rounded">
                        <div
                          className="bg-green-500 h-2 rounded"
                          style={{
                            width: `${progress3}%`,
                            transition: 'width 2s ease-in-out', // Smooth transition for width change
                          }}
                        />
                      </div>
                      <span className="text-sm font-bold">{progress3}%</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <p><span className="font-bold">Skills:</span> Dashboard Design, Data Visualization, Power BI</p>
                    <p><span className="font-bold">Available:</span> Part-time from Mar 20</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Confirm Button */}
              <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              >
                <motion.button
                  className="mt-4 px-6 py-3 mx-auto bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Confirm Team Selection
                </motion.button>
              </motion.div>
            </main>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
            >
              <ProjectPlanStep />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </>

  );
};

export default TeamSelectionPage;
