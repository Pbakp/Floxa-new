import React, { useEffect, useState } from 'react';
import { FaCog, FaCheck, FaFileContract } from 'react-icons/fa'; // Gear icon, Check icon, and File Contract icon
import { CheckCircle, AlertTriangle, Users, Check } from "lucide-react";

interface BuildRepeat1Props {
  onProcessingComplete?: () => void;
}

const BuildRepeat1 = ({ onProcessingComplete }: BuildRepeat1Props) => {
    const processingSteps = [
        { text: "Querying TechCorp contracts from Dynamics & SharePoint - Found 3 contracts" },
        { text: "Retrieving project documentation from Confluence - 12 files found" },
        { text: "Analyzing similar projects in Jira - 7 ERP integration projects identified" },
        { text: "Extracting project details: Digital Transformation, 8 months, $420K budget" },
        { text: "Finalizing resource allocation and compliance check - GDPR & ISO 27001" }
    ];

    const [showProcessing, setShowProcessing] = useState(true);
    const [showSection, setShowSection] = useState(false);
    const [showStep2, setShowStep2] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
    const [progressPercentages, setProgressPercentages] = useState<number[]>(new Array(processingSteps.length).fill(0));
    const [counterValues, setCounterValues] = useState({
        contractsFound: 0,
        documentsRetrieved: 0,
        projectsIdentified: 0,
    });

    useEffect(() => {
        // Processing animation logic - similar to CustomerPortfolioAnalysis
        const stepDuration = 1000; // 1 second per step
        const progressUpdateInterval = 50; // Update progress every 50ms for smooth animation
        const progressIncrement = 100 / (stepDuration / progressUpdateInterval); // Calculate increment per update

        let currentStepIndex = 0;
        const progressTimers: NodeJS.Timeout[] = [];

        // Start the first step immediately
        const startStepProgress = (stepIndex: number) => {
            let currentProgress = 0;
            const timer = setInterval(() => {
                currentProgress += progressIncrement;
                if (currentProgress >= 100) {
                    currentProgress = 100;
                    clearInterval(timer);
                }

                setProgressPercentages(prev => {
                    const newProgress = [...prev];
                    newProgress[stepIndex] = currentProgress;
                    return newProgress;
                });
            }, progressUpdateInterval);

            progressTimers.push(timer);
        };

        // Start first step immediately
        startStepProgress(0);

        // Mark first step as completed after its duration
        setTimeout(() => {
            setCompletedSteps(prevCompleted => new Set([...Array.from(prevCompleted), 0]));
        }, stepDuration);

        const stepInterval = setInterval(() => {
            if (currentStepIndex < processingSteps.length - 1) {
                // Mark current step as completed before moving to next
                setCompletedSteps(prevCompleted => new Set([...Array.from(prevCompleted), currentStepIndex]));

                // Move to next step
                currentStepIndex++;
                setCurrentStep(currentStepIndex);

                // Start smooth progress animation for current step
                startStepProgress(currentStepIndex);
            }
        }, stepDuration);

        // Mark the last step as completed and hide after all steps are done
        const completeTimer = setTimeout(() => {
            setCompletedSteps(prevCompleted => new Set([...Array.from(prevCompleted), processingSteps.length - 1]));
            setProgressPercentages(prev => {
                const newProgress = [...prev];
                newProgress[processingSteps.length - 1] = 100;
                return newProgress;
            });
            // Hide processing and show main content
            setShowProcessing(false);
            setShowSection(true);
            // Notify parent component that processing is complete
            if (onProcessingComplete) {
                onProcessingComplete();
            }
        }, processingSteps.length * stepDuration);

        // Animate counters when section shows
        const counterTimer = setTimeout(() => {
            const duration = 2000; // 2 seconds
            const steps = 60; // 60 steps for smooth animation
            const stepDuration = duration / steps;

            let currentStep = 0;
            const interval = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;

                setCounterValues({
                    contractsFound: Math.min(3 * progress, 3),
                    documentsRetrieved: Math.min(12 * progress, 12),
                    projectsIdentified: Math.min(7 * progress, 7),
                });

                if (currentStep >= steps) {
                    clearInterval(interval);
                }
            }, stepDuration);

            return () => clearInterval(interval);
        }, processingSteps.length * stepDuration + 1000); // Start counter animation after processing completes

        // Show Step2 after counters finish animating
        const step2Timer = setTimeout(() => {
            setShowStep2(true);
        }, processingSteps.length * stepDuration + 4000); // Show Step2 after 4 seconds delay


        return () => {
            clearInterval(stepInterval);
            progressTimers.forEach(timer => clearInterval(timer));
            clearTimeout(completeTimer);
            clearTimeout(counterTimer);
            clearTimeout(step2Timer);
        };
    }, [processingSteps.length]);

    return (
        <>
        {showProcessing && ( <div className="bg-white ">
           
                <div className="bg-white flex items-center justify-center z-50">
                    <div className="bg-white w-full">
                        <div className="mb-6 p-6">
                            <h2 className="text-lg font-semibold text-gray-700 mb-3">Processing ...</h2>
                            <p className="text-gray-600 text-sm mb-2">I'll automatically gather all relevant information when Thomas mentions "TechCorp contract." Let me start by querying our systems for contract details, documentation, project scope, timeline, resources, and budget information.</p>
                            <p className="text-gray-600 text-sm">Analyzing contract data across Dynamics, Confluence, SharePoint, Jira, and HubSpot to extract comprehensive project details...</p>
                        </div>

                        <div className="space-y-4 max-w-md px-6 pb-6">
                            {processingSteps.map((step, index) => {
                                const isCompleted = completedSteps.has(index);
                                const isActive = index === currentStep;
                                const shouldShowProgress = isCompleted || isActive || progressPercentages[index] > 0;

                                return (
                                    <div key={index} className="flex items-center space-x-4">
                                        <div
                                            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${isCompleted
                                                ? "bg-purple-600 text-white"
                                                : "border-2 border-gray-300"
                                                }`}
                                        >
                                            {isCompleted && <Check className="w-4 h-4" />}
                                        </div>

                                        <div className="flex-1">
                                            <p
                                                className={`text-sm transition-colors duration-300 ${isCompleted ? "text-gray-900" : "text-gray-500"
                                                    }`}
                                            >
                                                {step.text}
                                            </p>

                                            {shouldShowProgress && (
                                                <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-purple-600 rounded-full transition-all duration-100 ease-in-out"
                                                        style={{
                                                            width: `${progressPercentages[index]}%`,
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
          
        </div>
          )}
        </>
    );
};

export default BuildRepeat1;
