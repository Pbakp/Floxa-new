"use client"

import { useState } from "react"
import AnalyzingCard from "@/app/NewComponents/processing-animation"




const processingSteps = [
    { text: "Extracting key project parameters..." },
    { text: "Analyzing budget allocations..." },
    { text: "Identifying compliance requirements..." },
    { text: "Mapping scope to skill requirements..." },
]

// ✅ Parent example
export default function ParentComponent() {
    const [showProcessing, setShowProcessing] = useState(true)

    return (
        <div>
            {showProcessing && (
                <AnalyzingCard
                    steps={processingSteps}
                    onProcessingComplete={() => setShowProcessing(false)}
                />
            )}
        </div>
    )
}

