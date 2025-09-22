// components/MarketIntelligenceAnalysis.tsx

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnalyzingCard from '../processing-animation';

const MarketIntelligenceAnalysis: React.FC = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing website activity patterns - 340% increase in enterprise features" },
    { text: "Monitoring press intelligence - €12M Series B funding detected" },
    { text: "Tracking acquisition signals - DataFlow Systems integration confirmed" },
    { text: "Evaluating upsell opportunities - Advanced features adoption trends" },
    { text: "Finalizing market intelligence report - Growth indicators ready" },
  ], []);

  const handleBuildRepeatComplete = useCallback(() => {
    // Show dashboard first
    setShowDashboard(true);

    // Show sections with staggered delays for smooth animation
    setTimeout(() => setShowFirst(true), 300);
    setTimeout(() => setShowSecond(true), 600);
    setTimeout(() => setShowThird(true), 900);

    // Show dashboard value section after a delay
    setTimeout(() => {
      setShowDashboardValue(true);
    }, 500);
  }, []);

  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        description="I'm conducting comprehensive market intelligence analysis to identify
                   growth indicators, competitive signals, and upsell opportunities:"
      />
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            className="w-full max-w-full p-6 bg-white"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
          >
            <AnimatePresence>
              {showFirst && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2
                  }}
                >
                  <h2 className="text-xl sm:text-lg text-blue-600 font-bold mb-6">
                    Market Intelligence Analysis - Growth Indicators Detected:
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showSecond && (
                <>
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.1
                    }}
                  >
                    <motion.div
                      className="p-4 bg-purple-100 text-purple-700 rounded-lg shadow-md"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.3
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <h3 className="text-sm font-semibold">Website Activity</h3>
                      <ul className="mt-2 text-xs">
                        <li className='text-xs'>340% increase in enterprise features page visits</li>
                        <li className='text-xs'>Multiple downloads of advanced integration guides</li>
                        <li className='text-xs'>15 unique visitors from Vertex IP ranges</li>
                      </ul>
                    </motion.div>


                    <motion.div
                      className="p-4 bg-green-100 text-blue-700 rounded-lg shadow-md"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.5
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <h3 className="text-sm font-semibold">LinkedIn Signals</h3>
                      <ul className="mt-2 text-xs">
                        <li className='text-xs'>David Chen posted about "scaling fintech infrastructure</li>
                        <li className='text-xs'> Engineering manager shared article on API optimization</li>
                        <li className='text-xs'>3 senior engineers following our company page"</li>
                      </ul>
                    </motion.div>


                    <motion.div
                      className="p-4 bg-green-100 text-green-700 rounded-lg shadow-md"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.5
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <h3 className="text-sm font-semibold">Press Intelligence</h3>
                      <ul className="mt-2 text-xs">
                        <li className='text-xs'>€12M Series B funding announced last month</li>
                        <li className='text-xs'>Acquisition of DataFlow Systems confirmed</li>
                        <li className='text-xs'>Expansion into European markets planned</li>
                      </ul>
                    </motion.div>




                    <motion.div
                      className="p-4 bg-green-100 text-black rounded-lg shadow-md"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.5
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <h3 className="text-sm font-semibold">Team Growth Signals</h3>
                      <ul className="mt-2 text-xs">
                        <li className='text-xs'> 15 new engineering positions posted</li>
                        <li className='text-xs'>3x team growth planned for Q2</li>
                        <li className='text-xs'> New subsidiary requiring integration platform</li>
                      </ul>
                    </motion.div>






                  </motion.div>

                  <motion.div
                    className="p-4 bg-blue-100 text-green-700 mt-4 rounded-lg shadow-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.7
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <h3 className="text-sm font-semibold">Upsell Opportunity Assessment</h3>
                    <p className="mt-2 text-xs">Based on expansion signals, advanced features adoption, and acquisition integration needs</p>
                  </motion.div>

                </>
              )}
            </AnimatePresence>


          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MarketIntelligenceAnalysis;
