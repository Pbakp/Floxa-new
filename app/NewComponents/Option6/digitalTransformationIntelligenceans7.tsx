"use client";

import React, { useEffect, useState } from "react";
import {
  Bot,
  Target,
  Users,
  BarChart3,
  Handshake,
  Calendar,
  CheckCircle,
  Info,
  TrendingUp,
  FileText,
  Settings,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DigitalTransformationIntelligenceAns7 = () => {
  const [showAnalyzing, setShowAnalyzing] = useState(true);
  const [showStakeholderAlignment, setShowStakeholderAlignment] = useState(false);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    // Show analyzing component for 3 seconds, then show stakeholder alignment
    const timerAnalyzing = setTimeout(() => {
      setShowAnalyzing(false);
      setShowStakeholderAlignment(true);
    }, 3000); // Show analyzing for 3 seconds

    // Show main content after stakeholder alignment
    const timerMain = setTimeout(() => {
      setShowMain(true);
    }, 5000); // Show main content after 5 seconds total

    return () => {
      clearTimeout(timerAnalyzing);
      clearTimeout(timerMain);
    };
  }, []);

  return (
    <div className="max-w-full mx-auto p-6 rounded-lg">
      {/* Analyzing Part */}
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
                I&apos;ll analyze your stakeholder alignment strategy, competitive intelligence, and business impact modeling. Let me synthesize the value demonstration and ROI projections for your organization.
              </motion.p>
              <motion.div
                className="flex flex-row items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Bot className="mr-2" />
                <p className="text-xs md:text-xs opacity-90">
                  Analyzing strategic value and business impact...
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stakeholder Alignment Component */}
      <AnimatePresence>
        {showStakeholderAlignment && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white shadow-lg">
              {/* Floxa Header */}


              {/* Main Message */}
              <motion.p
                className="text-xs leading-relaxed mb-6 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                I&apos;ll create a stakeholder alignment strategy based on MEDDIC methodology and change management best practices. Let me analyze your organizational structure and develop targeted communication plans for each department head.
              </motion.p>

              {/* Stakeholder Alignment Options */}
              <motion.div
                className="bg-purple-600 bg-opacity-30 rounded-lg p-4 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.div
                  className="flex items-center space-x-2 mb-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Target className="w-4 h-4 text-red-300" />
                  <span className="font-bold text-purple-100">
                    Stakeholder Alignment Options:
                  </span>
                </motion.div>

                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="flex items-center space-x-3">
                    <Users className="w-4 h-4 text-white" />
                    <span className="text-sm text-white">
                      Department head briefing presentations with role-specific benefits
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-4 h-4 text-white" />
                    <span className="text-sm text-white">
                      Executive dashboard for ongoing progress monitoring
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Handshake className="w-4 h-4 text-white" />
                    <span className="text-sm text-white">
                      Change champion network identification and enablement
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-white" />
                    <span className="text-sm text-white">
                      Implementation timeline coordination with department priorities
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Follow-up Message */}
              <motion.p
                className="text-xs leading-relaxed mb-4 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                I&apos;ll continue monitoring competitive AI developments and provide regular intelligence briefings to ensure your strategy stays ahead of market changes. I can also assist with vendor evaluations, team training coordination, and success metric tracking throughout implementation.
              </motion.p>

              {/* Call to Action */}
              <motion.p
                className="text-sm text-white font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                Which stakeholder alignment approach would you like me to develop first?
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Use Case Summary & Value Demonstration */}
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
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Use Case Summary & Value Demonstration
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Floxa's Strategic Value Delivered */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-6">
                    Floxa&apos;s Strategic Value Delivered
                  </h3>
                  <div className="space-y-6">
                    {/* Universal Cross-Platform Intelligence */}
                    <div className="flex items-start space-x-4">
                      <Info className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Universal Cross-Platform Intelligence
                        </h4>
                        <p className="text-sm text-gray-600">
                          Complete digital maturity analysis across Microsoft 365,
                          Atlassian, and HubSpot ecosystems
                        </p>
                      </div>
                    </div>
                    {/* Competitive Intelligence Synthesis */}
                    <div className="flex items-start space-x-4">
                      <TrendingUp className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Competitive Intelligence Synthesis
                        </h4>
                        <p className="text-sm text-gray-600">
                          Real-time analysis of competitor AI implementations with
                          success/failure pattern recognition
                        </p>
                      </div>
                    </div>
                    {/* Strategic ROI Modeling */}
                    <div className="flex items-start space-x-4">
                      <FileText className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Strategic ROI Modeling
                        </h4>
                        <p className="text-sm text-gray-600">
                          Data-driven business case development with €2.3M ROI
                          projection and risk assessment
                        </p>
                      </div>
                    </div>
                    {/* Implementation Orchestration */}
                    <div className="flex items-start space-x-4">
                      <Settings className="w-6 h-6 text-purple-700 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Implementation Orchestration
                        </h4>
                        <p className="text-sm text-gray-600">
                          Comprehensive roadmap with cross-platform execution
                          planning and success metrics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Measurable Business Impact */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Measurable Business Impact
                  </h3>
                  <div className="space-y-4">
                    {/* Total 3-Year ROI */}
                    <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center shadow-sm">
                      <span className="text-sm font-medium text-gray-900">
                        Total 3-Year ROI
                      </span>
                      <span className="text-green-600 font-bold text-lg">
                        €2.3M
                      </span>
                    </div>
                    {/* Implementation Success Probability */}
                    <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center shadow-sm">
                      <span className="text-sm font-medium text-gray-900">
                        Implementation Success Probability
                      </span>
                      <span className="text-blue-600 font-bold text-lg">87%</span>
                    </div>
                    {/* Competitive Advantage Window */}
                    <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center shadow-sm">
                      <span className="text-sm font-medium text-gray-900">
                        Competitive Advantage Window
                      </span>
                      <span className="text-purple-600 font-bold text-lg">
                        18 months
                      </span>
                    </div>
                    {/* Analysis Time Reduction */}
                    <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center shadow-sm">
                      <span className="text-sm font-medium text-gray-900">
                        Analysis Time Reduction
                      </span>
                      <span className="text-gray-900 font-bold text-lg">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DigitalTransformationIntelligenceAns7;
