// flows/option4.ts
import { Message } from "@/types/messages";
import { matchesKeywords } from "./yes_state_keywords";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let step = 0;
let pausedStep = 0;

// Export function to get current step
export const getCurrentStep = () => step;

// Helper function for flexible keyword matching


export const startUpsellFlow = (
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
  step = 1;
  pausedStep = 0;

  // First user message
  setMessages((prev) => [
    ...prev,
    {
      id: crypto.randomUUID(),
      sender: "user",
      kind: "text",
      text:
        "Floxa, I need to build my Q4 upsell strategy for the Intelligence Module. Can you analyze our customer base and identify the best prospects with specific contacts, tailored value propositions, and optimal timing for outreach?",
    },
  ]);

  // Bot reply
  // setTimeout(() => {
  //   setMessages((prev) => [
  //     ...prev,
  //     {
  //       id: crypto.randomUUID(),
  //       sender: "bot",
  //       kind: "text",
  //       text:
  //         "I'll provide a comprehensive upsell intelligence analysis by examining customer behavior across all platforms, analyzing" +
  //         " competitive positioning, and developing data-driven targeting strategies. Let me start by assessing your current customer" +
  //         " portfolio and Intelligence Module fit criteria." +
  //         " Analyzing customer portfolio across Microsoft 365, Atlassian, and HubSpot platforms...",
  //     },
  //   ]);
  // }, 800);
  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: "bot",
        kind: "text",
        text:
          "CustomerPortfolioAnalysis",
      },
    ]);
  }, 800);

};

export const continueUpsellFlow = async (
  userInput: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
  const input = userInput.toLowerCase().trim();
  const currentStep = step; // Store current step before any changes

  // Resume if paused
  if (step === -1 && (input === "yes" || input === "continue" || input === "resume")) {
    step = pausedStep;
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: "bot",
        kind: "text",
        text: "Great! Let's continue where we left off…",
      },
    ]);
    return handleStep(step, setMessages);
  }

  // Handle different types of responses based on current step
  if (step === 1) {
    // Initial response to analysis
    console.log("step 1");
    if (matchesKeywords(input, "Great foundation analysis. Now show me the top prospects prioritized by fit score and relationship strength. I need to understand which accounts have the highest probability of closing and why.", ["foundation", "analysis", "show", "prospects", "prioritized", "fit", "score", "relationship", "strength", "accounts", "probability", "closing"])) {
      step = 2;
    } else {
      // Show error message and stay on same step
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "Sorry I can't understand you, can you be more specific?",
        },
      ]);
      return; // Stay on same step
    }
  } else if (step == 2) {
    // After risk assessment
    console.log("step 2");
    if (matchesKeywords(input, "Let's focus on DataFlow Industries - they have the highest fit score. What specific intelligence do we have about their current pain points and how should I position the Intelligence Module to address their needs?", ["focus", "dataflow", "industries", "highest", "fit", "score", "intelligence", "pain", "points", "position", "module", "address", "needs"])) {
      step = 3;
    } else {
      // Show error message and stay on same step
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "Sorry I can't understand you, can you be more specific?",
        },
      ]);
      return; // Stay on same step
    }
  } else if (step === 3) {
    // After implementation roadmap
    console.log("step 3");
    if (matchesKeywords(input, "Perfect intelligence. Now I need to understand our competitive position. What are our competitors doing in the intelligence space, and how should I differentiate our Intelligence Module in my sales approach?", ["intelligence", "competitive", "position", "competitors", "space", "differentiate", "module", "sales", "approach"])) {
      step = 4;
    } else {
      // Show error message and stay on same step
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "Sorry I can't understand you, can you be more specific?",
        },
      ]);
      return; // Stay on same step
    }
  } else if (step === 4) {
    // After stakeholder strategy
    console.log("step 4");
    if (matchesKeywords(input, "Excellent competitive analysis. Now show me the ROI projections for DataFlow Industries specifically. What's the business case I can present to Sarah Mitchell and the CFO for the Intelligence Module investment?", ["excellent", "competitive", "analysis", "roi", "projections", "dataflow", "industries", "business", "case", "sarah", "mitchell", "cfo", "module", "investment"])) {
      step = 5;
    } else {
      // Show error message and stay on same step
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "Sorry I can't understand you, can you be more specific?",
        },
      ]);
      return; // Stay on same step
    }
  } else if (step === 5) {
    // After timing & sequence
    console.log("step 5");
    if (matchesKeywords(input, "Compelling ROI numbers! Now what are the implementation risks I should be aware of, and how can I mitigate them? I want to address potential concerns upfront in my sales approach.", ["compelling", "roi", "numbers", "implementation", "risks", "aware", "mitigate", "address", "concerns", "upfront", "sales", "approach"])) {
      step = 6;
    } else {
      // Show error message and stay on same step
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "Sorry I can't understand you, can you be more specific?",
        },
      ]);
      return; // Stay on same step
    }
  } else if (step === 6) {
    // After pipeline prioritization
    console.log("step 6");
    if (matchesKeywords(input, "Perfect risk analysis. Now I need a detailed implementation roadmap with specific timelines and milestones. What's the optimal approach for rolling out the Intelligence Module at DataFlow?", ["perfect", "risk", "analysis", "detailed", "implementation", "roadmap", "timelines", "milestones", "optimal", "approach", "rolling", "module", "dataflow"])) {
      step = 7;
    } else {
      // Show error message and stay on same step
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "Sorry I can't understand you, can you be more specific?",
        },
      ]);
      return; // Stay on same step
    }
  } else if (step === 7) {
    // After objection handling - flow complete
    // console.log("step 7");
    // if (input.includes("restart") || input.includes("new")) {
    //   step = 1; // Restart flow
    // } else if (input.includes("no") || input.includes("stop")) {
    //   pausedStep = step + 1;
    //   step = -1; // mark as stopped
    //   setMessages((prev) => [
    //     ...prev,
    //     {
    //       id: crypto.randomUUID(),
    //       sender: "bot",
    //       kind: "text",
    //       text: "Okay, I'm stopping the process here. Would you like me to continue again? (yes/no)",
    //     },
    //   ]);
    //   return;
    if (matchesKeywords(input, "Excellent roadmap! Now I need to prepare my sales approach. Can you create specific talking points and value propositions tailored to each key stakeholder at DataFlow - Sarah Mitchell, David Kim, and Maria Santos?", ["excellent", "roadmap", "prepare", "sales", "approach", "create", "talking", "points", "value", "propositions", "tailored", "stakeholder", "dataflow", "sarah", "mitchell", "david", "kim", "maria", "santos"])) {
      step = 8;
    } else {
      // Show error message and stay on same step
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "Sorry I can't understand you, can you be more specific?",
        },
      ]);
      return; // Stay on same step
    }
  }

  else if (step === 8) {
    // After pipeline prioritization
    console.log("step 8");
    if (matchesKeywords(input, "Perfect stakeholder strategy! Now I need to understand the optimal timing for this outreach. Based on their current situation and market dynamics, when should I initiate contact and what's the ideal sales sequence?", ["perfect", "stakeholder", "strategy", "optimal", "timing", "outreach", "current", "situation", "market", "dynamics", "initiate", "contact", "ideal", "sales", "sequence"])) {
      step = 9;
    } else {
      // Show error message and stay on same step
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "Sorry I can't understand you, can you be more specific?",
        },
      ]);
      return; // Stay on same step
    }
  }




  else if (step === 9) {
    // After pipeline prioritization
    console.log("step 9");
    if (matchesKeywords(input, "Excellent timing strategy! Now I want to understand how this DataFlow approach scales to my other top prospects. Can you show me the comparative analysis across my top 5 opportunities and prioritize my overall Q4 pipeline?", ["excellent", "timing", "strategy", "dataflow", "approach", "scales", "prospects", "comparative", "analysis", "opportunities", "prioritize", "pipeline"])) {
      step = 10;
    } else {
      // Show error message and stay on same step
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "Sorry I can't understand you, can you be more specific?",
        },
      ]);
      return; // Stay on same step
    }
  }


  else if (step === 10) {
    // After pipeline prioritization
    console.log("step 10");
    if (matchesKeywords(input, "This pipeline analysis is exactly what I needed! Can you help me prepare for potential objections and competitive challenges I might face across these deals? I want to be ready for any pushback or competitive threats that could emerge.", ["pipeline", "analysis", "needed", "prepare", "objections", "competitive", "challenges", "deals", "ready", "pushback", "threats", "emerge"])) {
      step = 11;
    } else {
      // Show error message and stay on same step
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "Sorry I can't understand you, can you be more specific?",
        },
      ]);
      return; // Stay on same step
    }
  }










  // Handle stop/pause commands
  if (input.includes("stop") || input.includes("pause") || input.includes("wait")) {
    pausedStep = step + 1; // save next step to resume
    step = -1; // mark as stopped
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: "bot",
        kind: "text",
        text: "Okay, I'm pausing the process here. Would you like me to continue again? (yes/continue/resume)",
      },
    ]);
    return;
  }

  // Normal flow - only call handleStep if step actually changed
  console.log("step", step);
  console.log("currentStep", currentStep);

  handleStep(step, setMessages);

};

// ----------------------
// Helper function
// ----------------------
const handleStep = async (
  currentStep: number,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
  switch (currentStep) {
    case 1: {

      await delay(1000);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "CustomerPortfolioAnalysis",
        },
      ]);
      break;
    }

    case 2: {

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            sender: "bot",
            kind: "text",
            text:
              "CustomerData",
          },
        ]);
      }, 800);


      break;
    }

    case 3: {

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "CustomerIntelligenceReport",
        },
      ]);
      break;
    }

    case 4: {

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "CompetitiveIntelligenceAnalysis",
        },
      ]);
      break;
    }

    case 5: {

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "ROIAnalysis",
        },
      ]);
      break;
    }

    case 6: {

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "RiskAssessment",
        },
      ]);
      break;
    }

    case 7: {

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "ImplementationRoadmap",
        },
      ]);
      break;
    }
    case 8: {

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "StakeholderSalesStrategy",
        },
      ]);
      break;
    }
    case 9: {

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "TimingStrategy",
        },
      ]);
      break;
    }


    case 10: {

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "PipelinePrioritization",
        },
      ]);
      break;
    }

    case 11: {

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "ObjectionHandling",
        },
      ]);
      break;
    }

    default:
      break;
  }
};
