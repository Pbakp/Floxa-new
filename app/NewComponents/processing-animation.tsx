
"use client";

import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";

interface ProcessingStep {
    text: string;
}

interface AnalyzingCardProps {
    steps: ProcessingStep[];
    title?: string;
    description?: string;
    onProcessingComplete?: () => void;
}

const
    AnalyzingCard: React.FC<AnalyzingCardProps> = ({
        steps,
        title = "Processing...",
        description = "Gathering and analyzing all relevant data...",
        onProcessingComplete,
    }) => {
        const [showProcessing, setShowProcessing] = useState(true);
        const [currentStep, setCurrentStep] = useState(0);
        const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
        const [progressPercentages, setProgressPercentages] = useState<number[]>(
            new Array(steps.length).fill(0)
        );
        useEffect(() => {
            // Processing animation logic - each step takes 2 seconds
            const stepDuration = 1500; // 2 seconds per step
            const progressUpdateInterval = 50; // Update progress every 50ms for smooth animation
            const progressIncrement = 100 / (stepDuration / progressUpdateInterval); // Calculate increment per update

            let currentStepIndex = 0;
            const progressTimers: NodeJS.Timeout[] = [];
            const stepTimeouts: NodeJS.Timeout[] = [];

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

            // Function to complete a step and move to next
            const completeStep = (stepIndex: number) => {
                // Mark current step as completed
                setCompletedSteps(prevCompleted => new Set([...Array.from(prevCompleted), stepIndex]));

                // If this is the last step, complete the processing
                if (stepIndex === steps.length - 1) {
                    setProgressPercentages(prev => {
                        const newProgress = [...prev];
                        newProgress[stepIndex] = 100;
                        return newProgress;
                    });
                    // Hide processing and show main content
                    setTimeout(() => {
                        setShowProcessing(false);
                        if (onProcessingComplete) onProcessingComplete();
                    }, 500); // Small delay to show completion
                } else {
                    // Move to next step
                    currentStepIndex++;
                    setCurrentStep(currentStepIndex);
                    startStepProgress(currentStepIndex);

                    // Schedule completion of next step
                    const nextStepTimeout = setTimeout(() => {
                        completeStep(currentStepIndex);
                    }, stepDuration);
                    stepTimeouts.push(nextStepTimeout);
                }
            };

            // Start first step immediately
            setCurrentStep(0);
            startStepProgress(0);

            // Schedule completion of first step
            const firstStepTimeout = setTimeout(() => {
                completeStep(0);
            }, stepDuration);
            stepTimeouts.push(firstStepTimeout);

            return () => {
                stepTimeouts.forEach(timeout => clearTimeout(timeout));
                progressTimers.forEach(timer => clearInterval(timer));
            };
        }, [steps.length, onProcessingComplete]);

        return (
            <>
                {showProcessing && (
                    <div className="bg-white">
                        <div className="bg-white flex items-center justify-center z-50">
                            <div className="bg-white w-full">
                                <div className="mb-2 p-3">
                                    <h2 className="text-lg font-semibold text-gray-700 mb-3">
                                        {title}
                                    </h2>
                                    <p className="text-gray-600 text-sm">{description}</p>
                                </div>

                                <div className="space-y-2 max-w-lg px-6 pb-3">
                                    {steps.map((step, index) => {
                                        const isCompleted = completedSteps.has(index);
                                        const isActive = index === currentStep;
                                        const shouldShowProgress =
                                            isCompleted || isActive || progressPercentages[index] > 0;

                                        return (
                                            <div key={index} className="flex items-center space-x-4">
                                                <div
                                                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${isCompleted
                                                        ? "bg-[#635bff] text-white"
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
                                                                className="h-full bg-[#635bff] rounded-full transition-all duration-100 ease-in-out"
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

export default AnalyzingCard;
