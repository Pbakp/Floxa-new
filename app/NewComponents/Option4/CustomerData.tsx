"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnalyzingCard from "../processing-animation";

interface CustomerData {
  customer: string;
  fitScore: number;
  currentModules: string[];
  keyIndicators: string;
  primaryContact: string;
  relationship: {
    status: "Strong" | "Good" | "Medium";
    score: string;
  };
}

const customerData: CustomerData[] = [
  {
    customer: "DataFlow Industries",
    fitScore: 94,
    currentModules: ["Core", "Analytics", "Workflow", "Security"],
    keyIndicators:
      'Jira: 18 reporting requests; Teams: "dashboard limitations" mentioned 12x',
    primaryContact: "Sarah Mitchell (CTO)",
    relationship: { status: "Strong", score: "4.9/5" },
  },
  {
    customer: "TechCorp Solutions",
    fitScore: 89,
    currentModules: ["Core", "Analytics", "Workflow"],
    keyIndicators: "HubSpot: Budget approved; Dynamics: High API usage",
    primaryContact: "Michael Torres (IT Director)",
    relationship: { status: "Good", score: "4.3/5" },
  },
  {
    customer: "Innovate Systems",
    fitScore: 86,
    currentModules: ["Core", "Security", "Workflow"],
    keyIndicators:
      "Teams: Competitor mentioned; Confluence: Integration docs viewed",
    primaryContact: "Lisa Rodriguez (COO)",
    relationship: { status: "Medium", score: "3.7/5" },
  },
  {
    customer: "CloudMax Enterprise",
    fitScore: 82,
    currentModules: ["Core", "Analytics", "Security"],
    keyIndicators:
      "Jira: Data visibility tickets; HubSpot: Contract renewal upcoming",
    primaryContact: "James Wilson (CIO)",
    relationship: { status: "Strong", score: "4.6/5" },
  },
  {
    customer: "Futuretech Corp",
    fitScore: 78,
    currentModules: ["Core", "Workflow", "Security"],
    keyIndicators:
      "Teams: Intelligence discussions; Dynamics: Growing usage patterns",
    primaryContact: "Anna Patel (Dir. Operations)",
    relationship: { status: "Good", score: "4.1/5" },
  },
];

function getRelationshipColor(status: string) {
  switch (status) {
    case "Strong":
      return "text-green-600 bg-green-50";
    case "Good":
      return "text-blue-600 bg-blue-50";
    case "Medium":
      return "text-orange-600 bg-orange-50";
    default:
      return "text-gray-600 bg-gray-50";
  }
}

export function CustomerDataTable() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showDashboardValue, setShowDashboardValue] = useState(false);

  const [animatedScores, setAnimatedScores] = useState<{
    [key: number]: { fitScore: number; relationshipScore: number };
  }>({});

  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing customer portfolio data from CRM systems" },
    { text: "Evaluating Intelligence Module fit scores across accounts" },
    { text: "Processing relationship strength indicators" },
    { text: "Cross-referencing engagement signals and usage patterns" },
    { text: "Generating prioritized opportunity matrix" }
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

    // Animate counters when dashboard shows
    setTimeout(() => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        const newScores: {
          [key: number]: { fitScore: number; relationshipScore: number };
        } = {};

        customerData.forEach((customer, index) => {
          const relationshipScore = parseFloat(
            customer.relationship.score.split("/")[0]
          );
          newScores[index] = {
            fitScore: Math.min(customer.fitScore * progress, customer.fitScore),
            relationshipScore: Math.min(
              relationshipScore * progress,
              relationshipScore
            ),
          };
        });

        setAnimatedScores(newScores);

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, 1000);
  }, []);

  return (
    <>
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        title="Customer Portfolio Analysis"
        description="I'll analyze your customer portfolio and identified top prospects based on Intelligence Module fit, relationship strength, and engagement signals."
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
                  <div className="bg-white rounded-lg  border-gray-200 overflow-hidden">
                  <p className="text-gray-900 text-sm  leading-relaxed p-1">
                  I've analyzed your customer portfolio and identified top prospects based on Intelligence Module fit, relationship strength, and
                  engagement signals. Here's your prioritized opportunity matrix

                  </p>
                    <p className="text-gray-800 text-sm leading-relaxed p-1">Here's your prioritized opportunity matrix</p>
                    <div className="overflow-x-auto">
                      <table className="w-full table-fixed border-collapse">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[140px]">
                              Customer
                            </th>
                            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[80px]">
                              Fit
                            </th>
                            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[120px]">
                              Modules
                            </th>
                            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Key Indicators
                            </th>
                            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[160px]">
                              Contact
                            </th>
                            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[120px]">
                              Relationship
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-sm">
                          {customerData.map((customer, index) => {
                            const animatedFitScore = animatedScores[index]?.fitScore ?? 0;
                            const animatedRelationshipScore =
                              animatedScores[index]?.relationshipScore ?? 0;

                            return (
                              <motion.tr 
                                key={index} 
                                className="hover:bg-gray-50"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay: index * 0.1
                                }}
                              >
                                <td className="px-2 py-2 font-medium text-gray-900 break-words">
                                  {customer.customer}
                                </td>
                                <td className="px-2 py-2">
                                  <span className="font-semibold">
                                    {Math.round(animatedFitScore)}%
                                  </span>
                                </td>
                                <td className="px-2 py-2 break-words">
                                  {customer.currentModules.join(", ")}
                                </td>
                                <td className="px-2 py-2 break-words max-w-xs">
                                  {customer.keyIndicators}
                                </td>
                                <td className="px-2 py-2 break-words">
                                  {customer.primaryContact}
                                </td>
                                <td className="px-2 py-2">
                                  <span
                                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getRelationshipColor(
                                      customer.relationship.status
                                    )}`}
                                  >
                                    {customer.relationship.status} (
                                    {animatedRelationshipScore.toFixed(1)}/5)
                                  </span>
                                </td>
                              </motion.tr>
                            );
                          })}
                        </tbody>
                      </table>
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
}
