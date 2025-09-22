import React, { useEffect, useState } from 'react';
import { FaCog } from 'react-icons/fa'; // Gear icon

interface BuildRepeat4Props {
    onComplete?: () => void;
}

const BuildRepeat4 = ({ onComplete }: BuildRepeat4Props) => {
    const processingSteps = [
        { text: "Retrieving project templates for digital transformation" },
        { text: "Configuring project deliverables and timeline tracking" },
        { text: "Creating an epic structure based on contract requirements" },
        { text: "Creating customer touchpoints and communication plan" },
        { text: "Setting up document folders with appropriate permissions" }
    ];

    const [showProcessing, setShowProcessing] = useState(true);
    const [showContent, setShowContent] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
    const [progressPercentages, setProgressPercentages] = useState<number[]>(new Array(processingSteps.length).fill(0));

    useEffect(() => {
        // Processing animation logic - similar to other BuildRepeat components
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
            setShowContent(true);
            // Notify parent component that processing is complete
            onComplete?.();
        }, processingSteps.length * stepDuration);

        return () => {
            clearInterval(stepInterval);
            progressTimers.forEach(timer => clearInterval(timer));
            clearTimeout(completeTimer);
        };
    }, [processingSteps.length, onComplete]);


    return (
        <div className="max-w-full mx-auto bg-white  p-2">
            {showProcessing && (
                <div className="bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white w-full">
                        <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <FaCog className="text-gray-400 text-sm" />
                                <h2 className="text-sm font-semibold text-gray-700">
                                    Behind the Scenes: Project Plan Creation
                                </h2>
                            </div>
                            <p className="text-gray-600 text-xs mb-2">
                                To create the project plan, Floxa:
                            </p>
                        </div>

                        <div className="space-y-3 max-w-md">
                            {processingSteps.map((step, index) => {
                                const isCompleted = completedSteps.has(index);
                                const isActive = index === currentStep;
                                const shouldShowProgress = isCompleted || isActive || progressPercentages[index] > 0;

                                return (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div
                                            className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${isCompleted
                                                ? "bg-purple-600 text-white"
                                                : "border-2 border-gray-300"
                                                }`}
                                        >
                                            {isCompleted && <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>}
                                        </div>

                                        <div className="flex-1">
                                            <p
                                                className={`text-sm transition-colors duration-300 ${isCompleted ? "text-gray-900" : "text-gray-500"
                                                    }`}
                                            >
                                                {step.text}
                                            </p>

                                            {shouldShowProgress && (
                                                <div className="mt-1 h-1 bg-gray-200 rounded-full overflow-hidden">
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
            )}

        </div>
    );
};

export default BuildRepeat4;
