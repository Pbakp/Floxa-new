"use client"
import { useState, useEffect } from "react"
import { Check } from "lucide-react"

const Step3 = () => {
  const steps = [
    { text: "Accessing Microsoft Teams recording" },
    { text: "Converting speech to text with speaker identification" },
    { text: "Extracting key topics and requirements" },
    { text: "Analyzing sentiment and stakeholder reactions" },
    { text: "Cross-referencing with existing Jira epics" },
    { text: "Identifying related documentation in Confluence and SharePoint" },
    { text: "Checking stakeholder profiles in HubSpot" }
  ]

  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())
  const [progressPercentages, setProgressPercentages] = useState<number[]>(new Array(steps.length).fill(0))

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const stepDuration = 1000 // 1 second per step
    const progressUpdateInterval = 50 // Update progress every 50ms for smooth animation
    const progressIncrement = 100 / (stepDuration / progressUpdateInterval) // Calculate increment per update

    let currentStepIndex = 0
    const progressTimers: NodeJS.Timeout[] = []

    // Start the first step immediately
    const startStepProgress = (stepIndex: number) => {
      let currentProgress = 0
      const timer = setInterval(() => {
        currentProgress += progressIncrement
        if (currentProgress >= 100) {
          currentProgress = 100
          clearInterval(timer)
        }

        setProgressPercentages(prev => {
          const newProgress = [...prev]
          newProgress[stepIndex] = currentProgress
          return newProgress
        })
      }, progressUpdateInterval)

      progressTimers.push(timer)
    }

    // Start first step immediately
    startStepProgress(0)

    // Mark first step as completed after its duration
    setTimeout(() => {
      setCompletedSteps(prevCompleted => new Set([...Array.from(prevCompleted), 0]))
    }, stepDuration)

    const stepInterval = setInterval(() => {
      if (currentStepIndex < steps.length - 1) {
        // Mark current step as completed before moving to next
        setCompletedSteps(prevCompleted => new Set([...Array.from(prevCompleted), currentStepIndex]))

        // Move to next step
        currentStepIndex++
        setCurrentStep(currentStepIndex)

        // Start smooth progress animation for current step
        startStepProgress(currentStepIndex)
      }
    }, stepDuration)

    // Mark the last step as completed after all steps are done
    const completeTimer = setTimeout(() => {
      setCompletedSteps(prevCompleted => new Set([...Array.from(prevCompleted), steps.length - 1]))
      setProgressPercentages(prev => {
        const newProgress = [...prev]
        newProgress[steps.length - 1] = 100
        return newProgress
      })
    }, steps.length * stepDuration)

    return () => {
      clearInterval(stepInterval)
      progressTimers.forEach(timer => clearInterval(timer))
      clearTimeout(completeTimer)
    }
  }, [isVisible, steps.length])

  if (!isVisible) return null

  return (
    <div className="w-full p-4 bg-white  animate-slideUp">
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">Processing steps:</h2>
        <p className="text-gray-600 text-xs">I'm analyzing the TechCorp requirements workshop recording. This will take a moment as I process the content and connect it with your existing project information...</p>
      </div>

      <div className="space-y-3 max-w-md">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.has(index)
          const isActive = index === currentStep
          const shouldShowProgress = isCompleted || isActive || progressPercentages[index] > 0

          return (
            <div key={index} className="flex items-center space-x-3">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${isCompleted
                  ? "bg-[#635bff] text-white"
                  : "border-2 border-gray-300"
                  }`}
              >
                {isCompleted && <Check className="w-3 h-3" />}
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
                      className="h-full bg-[#635bff] rounded-full transition-all duration-100 ease-in-out"
                      style={{
                        width: `${progressPercentages[index]}%`,
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <button className="px-3 py-1.5 rounded bg-purple-500 hover:bg-purple-600 text-white transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5 text-xs">
          Teams Recording
        </button>
        <button className="px-3 py-1.5 rounded bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5 text-xs">
          Jira Epics
        </button>
        <button className="px-3 py-1.5 rounded bg-teal-500 hover:bg-teal-600 text-white transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5 text-xs">
          Confluence Docs
        </button>
        <button className="px-3 py-1.5 rounded bg-green-500 hover:bg-green-600 text-white transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5 text-xs">
          SharePoint Files
        </button>
        <button className="px-3 py-1.5 rounded bg-orange-500 hover:bg-orange-600 text-white transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5 text-xs">
          HubSpot Profiles
        </button>
      </div>
    </div>
  )
}

export default Step3
