"use client"
import { useState, useEffect } from "react"

const Step2 = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500) // Updated delay from 2000ms to 4000ms for consistent timing

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`w-full p-3 bg-white rounded-lg shadow-lg border-l-4 border-blue-400 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } animate-slideUp`}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <h2 className="text-xs font-semibold text-gray-700">System Clarification</h2>
      </div>

      <div className="mb-3 pl-4 border-l-2 border-green-400">

        <p className="text-xs text-gray-700 leading-relaxed">
          I'll analyze the requirements workshop recording with TechCorp from yesterday (March 15, 2:00-3:30 PM). Would
          you like me to focus on specific aspects beyond the core requirements identification?
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <button className="px-3 py-1.5 bg-purple-500 hover:bg-purple-600 text-white text-xs rounded transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5">
          Teams Recording
        </button>
        <button className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5">
          Calendar Event
        </button>
      </div>
    </div>
  )
}

export default Step2
