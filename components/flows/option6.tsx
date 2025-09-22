// flows/option6.ts
import { Message } from "@/types/messages";
import { matchesKeywords } from "./yes_state_keywords";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let step = 0;
let pausedStep = 0;

// Export function to get current step
export const getCurrentStep = () => step;


export const startDigitalTransformationFlow = (
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
      text: " Floxa, I need to build a comprehensive business case for our digital transformation initiative, particularly around AI implementation. The CEO wants data-driven recommendations with clear ROI projections, competitive analysis, and a realistic execution plan. Can you help me analyze our current capabilities and identify the best opportunities?",
    },
  ]);

  // Bot reply
  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: "bot",
        kind: "text",
        text:
          "DigitalTransformationIntelligenceAns1",
      },
    ]);
  }, 800);


};

export const continueDigitalTransformationFlow = async (
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
    // Initial response to ROI analysis question
    console.log("step 1");
    if (matchesKeywords(input, "That's helpful. Now I need to understand what our competitors are doing with AI implementations. What specific AI initiatives are they pursuing, and what results are they seeing? This will help me position our strategy appropriately.", ["helpful", "understand", "competitors", "implementations", "specific", "initiatives", "pursuing", "results", "position", "strategy", "appropriately"])) {
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
  } else if (step === 2) {
    // After ROI analysis
    console.log("step 2");
    if (matchesKeywords(input, "Excellent analysis. Now I need to see specific AI implementation opportunities for our organization. What are the high-impact areas where we can achieve competitive advantage, and what would be the ROI projections for each?", ["excellent", "analysis", "specific", "implementation", "opportunities", "organization", "high-impact", "areas", "competitive", "advantage", "roi", "projections"])) {
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
    // After competitor benchmarking
    console.log("step 3");
    if (matchesKeywords(input, "That makes sense. Can you show me specific AI implementation opportunities with detailed ROI projections? I need to present concrete numbers to the executive team showing how each initiative will deliver measurable business value.", ["makes", "sense", "show", "specific", "implementation", "opportunities", "detailed", "roi", "projections", "present", "concrete", "numbers", "executive", "team", "initiative", "deliver", "measurable", "business", "value"])) {
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
    // After 3-phase roadmap recommendation
    console.log("step 4");
    if (matchesKeywords(input, "These projections look promising. Now I need to understand the implementation risks and how we can mitigate them. What are the potential challenges we might face, and how do we ensure successful execution based on what we've learned from competitor experiences?", ["projections", "promising", "understand", "implementation", "risks", "mitigate", "potential", "challenges", "ensure", "successful", "execution", "learned", "competitor", "experiences"])) {
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
    // After board-ready presentation
    console.log("step 5");
    if (matchesKeywords(input, "Perfect. Now I need a detailed implementation roadmap with timelines, resource requirements, and success metrics. Can you create a comprehensive execution plan that I can present to the executive team?", ["perfect", "detailed", "implementation", "roadmap", "timelines", "resource", "requirements", "success", "metrics", "create", "comprehensive", "execution", "plan", "present", "executive", "team"])) {
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
  }

  else if (step === 6) {
    // After board-ready presentation
    console.log("step 6");
    if (matchesKeywords(input, "This is excellent! The comprehensive analysis and roadmap give me everything I need for the executive presentation. Could you help me prepare the key stakeholder alignment strategy? I need to ensure buy in from department heads who will be affected by these AI implementations.", ["excellent", "comprehensive", "analysis", "roadmap", "executive", "presentation", "help", "prepare", "stakeholder", "alignment", "strategy", "ensure", "buy", "department", "heads", "affected", "implementations"])) {
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
  }


  // Handle stop/pause commands
  if (input.includes("stop") || input.includes("pause") || input.includes("wait") || input === "no") {
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
            "Great.\n" +
            "Based on your sector and scale, AI adoption can drive ~20–30% efficiency gains in operations, reduce manual reporting by 40%, and improve customer retention by ~15%.\n" +
            "A phased approach over 18 months can yield a conservative ROI of 4.2x.\n\n" +
            "Shall we benchmark this against your top competitors? (yes/no)",
        },
      ]);
      break;
    }

    case 2: {
       await delay(1000);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "DigitalTransformationIntelligenceAns2",
        },
      ]);

      break;
    }

    case 3: {
       await delay(1000);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "DigitalTransformationIntelligenceAns3",
        },
      ]);
     
      break;
    }

    case 4: {
       await delay(1000);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "DigitalTransformationIntelligenceAns4",
        },
      ]);
   
      break;
    }

    case 5: {
      // Flow completed - no further steps
       await delay(1000);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "DigitalTransformationIntelligenceAns5",
        },
      ]);
    
      break;
    }

    case 6: {
      // Flow completed - no further steps
       await delay(1000);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "DigitalTransformationIntelligenceAns6",
        },
      ]);
      
      break;
    }


    case 7: {
      // Flow completed - no further steps
       await delay(1000);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "DigitalTransformationIntelligenceAns7",
        },
      ]);

      break;
    }

    default:
      break;
  }
};
