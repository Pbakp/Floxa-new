"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, TrendingUp, Settings, Shield, Link, BarChart3, Gauge, AlertTriangle } from "lucide-react";
import AnalyzingCard from "../processing-animation";

const PredictiveStaffingIntelligenceAns6 = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFirst(true), 500);
    const timer2 = setTimeout(() => setShowSecond(true), 1000);
    const timer3 = setTimeout(() => setShowThird(true), 1500);
    const timer4 = setTimeout(() => setShowFourth(true), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing cross-platform intelligence capabilities" },
    { text: "Evaluating predictive staffing analytics performance" },
    { text: "Measuring automated HR orchestration efficiency" },
    { text: "Calculating privacy-preserving analysis impact" },
    { text: "Compiling comprehensive ROI demonstration" }
  ], []);

  const handleBuildRepeatComplete = useCallback(() => {
    // Show dashboard first
    setShowDashboard(true);

    // Show sections with staggered delays for smooth animation
    setTimeout(() => setShowFirst(true), 300);
    setTimeout(() => setShowSecond(true), 600);
    setTimeout(() => setShowThird(true), 900);
    setTimeout(() => setShowFourth(true), 1200);

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
        description="I'm compiling the comprehensive predictive staffing ROI analysis with executive brief and follow-up scheduling."
      />
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            className="mx-auto p-3 bg-white rounded-lg"
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
                  {/* Introductory Text */}
                  <p className="text-gray-900 text-sm mb-6 leading-relaxed">
                    I'm preparing a comprehensive executive briefing with quantified business impact:
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showSecond && (
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1
                  }}
                >
                  {/* Predictive Staffing ROI Summary Card */}
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg shadow-sm mb-6">
                    <h3 className="text-base font-bold text-blue-700 mb-6">
                      Predictive Staffing ROI Summary
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Risk Mitigation Value Column */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-4">
                          Risk Mitigation Value
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">Revenue Protected:</span>
                            <span className="text-sm text-gray-900 font-medium">€2.3M</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">Delivery Risk Reduction:</span>
                            <span className="text-sm text-gray-900 font-medium">75%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">Client Satisfaction Impact:</span>
                            <span className="text-sm text-gray-900 font-medium">+18%</span>
                          </div>
                        </div>
                      </div>

                      {/* Operational Efficiency Column */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-4">
                          Operational Efficiency
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">Hiring Time Reduction:</span>
                            <span className="text-sm text-gray-900 font-medium">45%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">Manual Analysis Saved:</span>
                            <span className="text-sm text-gray-900 font-medium">12 hrs/week</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">Predictive Accuracy:</span>
                            <span className="text-sm text-gray-900 font-medium">87%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showThird && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1
                  }}
                >
                  <p className="text-purple-700 text-sm leading-relaxed">
                    Executive brief will be ready in 15 minutes with full presentation
                    slides and supporting data. I'll also schedule a follow-up
                    review in 30 days to measure the actual outcomes against our
                    predictions.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showFourth && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1
                  }}
                >

                  {/* Use Case Summary & Value Demonstration */}
                  <div className=" p-2 mt-4 bg-blue-50 rounded-lg shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-6 text-left">
                      Use Case Summary & Value Demonstration
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Floxa's Strategic Value Delivered */}
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-4">
                          Floxa's Strategic Value Delivered
                        </h4>
                        <div className="space-y-4">
                          {/* Universal Cross-Platform Intelligence */}
                          <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-lg mr-3 flex-shrink-0">
                              <Link className="text-blue-600" size={20} />
                            </div>
                            <div>
                              <h5 className="text-sm font-semibold text-gray-900 mb-1">
                                Universal Cross-Platform Intelligence
                              </h5>
                              <p className="text-sm text-gray-600">
                                Synthesized staffing requirements across Jira projects, Teams capacity, and HubSpot revenue commitments.
                              </p>
                            </div>
                          </div>

                          {/* Predictive Staffing Analytics */}
                          <div className="flex items-start">
                            <div className="bg-green-100 p-2 rounded-lg mr-3 flex-shrink-0">
                              <BarChart3 className="text-green-600" size={20} />
                            </div>
                            <div>
                              <h5 className="text-sm font-semibold text-gray-900 mb-1">
                                Predictive Staffing Analytics
                              </h5>
                              <p className="text-sm text-gray-600">
                                Identified 23% understaffing 45 days before critical impact, enabling proactive hiring.
                              </p>
                            </div>
                          </div>

                          {/* Automated HR Orchestration */}
                          <div className="flex items-start">
                            <div className="bg-purple-100 p-2 rounded-lg mr-3 flex-shrink-0">
                              <Settings className="text-purple-600" size={20} />
                            </div>
                            <div>
                              <h5 className="text-sm font-semibold text-gray-900 mb-1">
                                Automated HR Orchestration
                              </h5>
                              <p className="text-sm text-gray-600">
                                End-to-end hiring workflow automation from role definition to candidate screening.
                              </p>
                            </div>
                          </div>

                          {/* Privacy-Preserving Analysis */}
                          <div className="flex items-start">
                            <div className="bg-gray-100 p-2 rounded-lg mr-3 flex-shrink-0">
                              <Shield className="text-gray-600" size={20} />
                            </div>
                            <div>
                              <h5 className="text-sm font-semibold text-gray-900 mb-1">
                                Privacy-Preserving Analysis
                              </h5>
                              <p className="text-sm text-gray-600">
                                Maintained employee data privacy while enabling comprehensive workforce analytics.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Measurable Business Impact */}
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-4">
                          Measurable Business Impact
                        </h4>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {/* Revenue Protected */}
                          <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-green-600 mb-1">€2.3M</div>
                            <div className="text-sm text-gray-600">Revenue Protected</div>
                          </div>

                          {/* Hiring Time Reduction */}
                          <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-1">45%</div>
                            <div className="text-sm text-gray-600">Hiring Time Reduction</div>
                          </div>

                          {/* Prediction Accuracy */}
                          <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-purple-600 mb-1">87%</div>
                            <div className="text-sm text-gray-600">Prediction Accuracy</div>
                          </div>

                          {/* Early Warning */}
                          <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-gray-900 mb-1">45 days</div>
                            <div className="text-sm text-gray-600">Early Warning</div>
                          </div>
                        </div>

                        {/* Annual ROI Projection */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="text-sm font-bold text-gray-900 mb-2">Annual ROI Projection</h5>
                          <div className="text-3xl font-bold text-green-600 mb-1">285%</div>
                          <div className="text-sm text-gray-600">Based on risk mitigation + efficiency gains</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PredictiveStaffingIntelligenceAns6;
