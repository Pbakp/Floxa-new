"use client";

import React, { useEffect, useState } from "react";
import { Database, Users, FileText, CheckCircle } from "lucide-react";
import { TfiReload } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";
import Sugg3 from "../Option1/Missing/sugg3";
import { scrollToBottom } from "@/app/utils/scrollUtils";

const OnboardingIntelligenceAns1 = () => {
  const [showAnalyzing, setShowAnalyzing] = useState(true);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showSugg3, setShowSugg3] = useState(false);
  const [pricingValues, setPricingValues] = useState({
    essentialYearly: 0,
    essentialMonthly: 0,
    professionalYearly: 0,
    professionalMonthly: 0,
    enterpriseYearly: 0,
    enterpriseMonthly: 0,
  });

  useEffect(() => {
    // Show analyzing container for 3s, then show main content
    const timerAnalyzing = setTimeout(() => {
      setShowAnalyzing(false);
      setShowFirst(true);
        setTimeout(() => {
        scrollToBottom();
      }, 200);
    }, 3000);

    const timer2 = setTimeout(() =>{ setShowSecond(true);   setTimeout(() => {
        scrollToBottom();
      }, 200); }, 4000);
    const timer3 = setTimeout(() =>{ setShowThird(true);   setTimeout(() => {
        scrollToBottom();
      }, 200);}, 4500);
    const timer4 = setTimeout(() =>{ setShowSugg3(true);setTimeout(() => {
        scrollToBottom();
      }, 200) }, 7500); // Show after pricing animation completes

    // Animate pricing counters when third section shows
    const pricingTimer = setTimeout(() => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setPricingValues({
          essentialYearly: Math.min(15000 * progress, 15000),
          essentialMonthly: Math.min(120 * progress, 120),
          professionalYearly: Math.min(30000 * progress, 30000),
          professionalMonthly: Math.min(180 * progress, 180),
          enterpriseYearly: Math.min(75000 * progress, 75000),
          enterpriseMonthly: Math.min(250 * progress, 250),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, 1000); // Start animation 1 second after third section shows (4500ms + 1000ms delay)

    return () => {
      clearTimeout(timerAnalyzing);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(pricingTimer);
    };
  }, []);

  return (
    <>
      {/* Floxa Message Box (Analyzing) - Only shows once */}
      <AnimatePresence>
        {showAnalyzing && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white shadow-lg">
              <motion.p
                className="text-xs leading-relaxed mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                I&apos;ll analyze your enterprise pricing across all platforms
                to provide you with the most current and comprehensive pricing
                information. Let me search through SharePoint, Teams, and
                Dynamics CRM to find the latest pricing data and cross-reference
                it for accuracy.
              </motion.p>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <TfiReload className="inline-block animate-spin mr-2" />
                <p className="text-xs opacity-90">
                  Analyzing pricing data across Microsoft 365, Teams, and
                  Dynamics platforms...
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto p-3 bg-white rounded-lg shadow-lg">
        {/* first section  */}
        <AnimatePresence>
          {showFirst && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
              className="mb-6"
            >
              <p className="text-gray-800 text-sm leading-relaxed">
                I&apos;ve found your enterprise pricing across multiple systems.
                The most current version is in SharePoint&apos;s Sales Resources
                folder, last updated by Ryan Fisher (Sales Director) 2 weeks
                ago.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* second section */}
        <AnimatePresence>
          {showSecond && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
              className="mb-8 border-l-4 rounded-lg px-6 py-4 border-green-600"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2 ">
                {/* <Database className="w-5 h-5 text-blue-600" /> */}
                Cross-Platform Intelligence
              </h3>
              <ul className="space-y-1">
                <li className="flex items-start gap-3">
                  <div className="w-1  h-1 bg-gray-700   rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex items-center gap-2">
                    {/* <FileText className="w-4 h-4 text-gray-600" /> */}
                    <span className="text-gray-700">
                      <span className="font-medium">SharePoint:</span>{" "}
                      Enterprise_Pricing_2025.xlsx (primary source)
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1  h-1 bg-gray-700   rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex items-center gap-2">
                    {/* <Users className="w-4 h-4 text-gray-600" /> */}
                    <span className="text-gray-700">
                      <span className="font-medium">Teams:</span> Q3 pricing
                      discussions from Enterprise Sales channel
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1  h-1 bg-gray-700   rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex items-center gap-2">
                    {/* <Database className="w-4 h-4 text-gray-600" /> */}
                    <span className="text-gray-700">
                      <span className="font-medium">Dynamics CRM:</span> Product
                      catalog with live pricing tiers
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* third section */}
        <AnimatePresence>
          {showThird && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                {/* <CheckCircle className="w-5 h-5 text-green-600" /> */}
                Enterprise Pricing Summary
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Essential Tier */}
                <motion.div
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Essential
                    </h4>
                    <div className="text-xl font-bold text-blue-600 mb-1">
                      €
                      {Math.round(
                        pricingValues.essentialYearly
                      ).toLocaleString()}
                      /year
                    </div>
                    <div className="text-lg text-gray-600">
                      + €{Math.round(pricingValues.essentialMonthly)}/user/month
                    </div>
                  </div>
                </motion.div>

                {/* Professional Tier */}
                <motion.div
                  className="bg-blue-50 rounded-lg p-6 border border-blue-200 hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Professional
                    </h4>
                    <div className="text-xl font-bold text-blue-600 mb-1">
                      €
                      {Math.round(
                        pricingValues.professionalYearly
                      ).toLocaleString()}
                      /year
                    </div>
                    <div className="text-lg text-gray-600">
                      + €{Math.round(pricingValues.professionalMonthly)}
                      /user/month
                    </div>
                  </div>
                </motion.div>

                {/* Enterprise Tier */}
                <motion.div
                  className="bg-green-50 rounded-lg p-6 border border-green-200 hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Enterprise
                    </h4>
                    <div className="text-xl font-bold text-green-600 mb-1">
                      €
                      {Math.round(
                        pricingValues.enterpriseYearly
                      ).toLocaleString()}
                      /year
                    </div>
                    <div className="text-lg text-gray-600">
                      + €{Math.round(pricingValues.enterpriseMonthly)}
                      /user/month
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showSugg3 && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <Sugg3 />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OnboardingIntelligenceAns1;
