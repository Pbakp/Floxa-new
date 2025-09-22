"use client"

import { useState } from "react"
import AnalyzingCard from "../../processing-animation"




const processingSteps = [
    { text: "Extracting key project parameters..." },
    { text: "Analyzing budget allocations..." },
    { text: "Identifying compliance requirements..." },
    { text: "Mapping scope to skill requirements..." },
]

// ✅ Parent example
export default function Card1() {
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

