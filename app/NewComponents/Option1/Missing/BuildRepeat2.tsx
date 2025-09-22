import React, { useEffect, useState } from 'react';
import { FaCog, FaCheck } from 'react-icons/fa';
import { Check } from "lucide-react";

interface BuildRepeat2Props {
    onProcessingComplete?: () => void;
}

const BuildRepeat2 = ({ onProcessingComplete }: BuildRepeat2Props) => {
    const processingSteps = [
        { text: "Analyzing similar past projects in Jira for optimal setup patterns" },
        { text: "Identifying client communication preferences from HubSpot data" },
        { text: "Checking SharePoint access templates for enterprise clients" },
        { text: "Reviewing organizational policies and compliance requirements" },
        { text: "Analyzing Confluence project documentation structures" }
    ];

    const [showProcessing, setShowProcessing] = useState(true);
    const [showSection, setShowSection] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
    const [progressPercentages, setProgressPercentages] = useState<number[]>(new Array(processingSteps.length).fill(0));

    useEffect(() => {
        // Processing animation logic - same as BuildRepeat1
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

        return () => {
            clearInterval(stepInterval);
            progressTimers.forEach(timer => clearInterval(timer));
            clearTimeout(completeTimer);
        };
    }, [processingSteps.length, onProcessingComplete]);

    return (
        <>
            {showProcessing && (
                <div className="bg-white">
                    <div className="bg-white flex items-center justify-center z-50">
                        <div className="bg-white w-full">
                            <div className="mb-6 p-6">
                                <h2 className="text-lg font-semibold text-gray-700 mb-3">Processing ...</h2>
                                <p className="text-gray-600 text-sm mb-2">I'll analyze the project environment and prepare comprehensive recommendations by examining past projects, client preferences, and organizational requirements.</p>
                                <p className="text-gray-600 text-sm">Analyzing environment setup patterns across Jira, HubSpot, SharePoint, and Confluence to optimize project configuration...</p>
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

export default BuildRepeat2;
