import React, { useState } from "react";
import BuildRepeat6 from "./Missing/BuildRepeat6";
import TechCorpRiskAnalysis from "./Step10";
import ProjectSetupConfirmationCard from "./Missing/step4";

const RiskAnalysisSequence = () => {
    const [showRiskAnalysis, setShowRiskAnalysis] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleBuildRepeat6Complete = () => {
        // Show risk analysis first
        setShowRiskAnalysis(true);

        // Show confirmation card after a delay
        setTimeout(() => {
            setShowConfirmation(true);
        }, 800);
    };

    return (
        <>
            <BuildRepeat6 onComplete={handleBuildRepeat6Complete} />

            {showRiskAnalysis && (
                <div className="animate-fade-in">
                    <TechCorpRiskAnalysis />
                </div>
            )}

            {showConfirmation && (
                <div className="animate-fade-in">
                    <ProjectSetupConfirmationCard />
                </div>
            )}
        </>
    );
};

export default RiskAnalysisSequence;
