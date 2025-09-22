// flows/option7.ts
import { Message } from "@/types/messages";
import { matchesKeywords } from "./yes_state_keywords";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let step = 0;
let pausedStep = 0;

// Export function to get current step
export const getCurrentStep = () => step;


export const startGrowthFlow = (
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
  step = 1;
  pausedStep = 0;

  // First user message (Alexandra Chen)
  setMessages((prev) => [
    ...prev,
    {
      id: crypto.randomUUID(),
      sender: "user",
      kind: "text",
      text:
        'Floxa, I need to transform our latest board deck into a comprehensive executable strategic plan. The board wants to see market expansion, competitive positioning, and cross-functional execution with real-time monitoring. Can you help  me orchestrate this across all our systems?'
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
          "StrategicGrowthCommandCenterAns1",
      },
    ]);
  }, 800);
};

export const continueGrowthFlow = async (
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
    // Initial response to board deck analysis
    console.log("step 1");
    if (matchesKeywords(input, "Yes, absolutely. And I need you to analyze our product positioning against competitors in the enterprise AI market. Where do we stand, and what differentiation opportunities exist?", ["absolutely", "analyze", "product", "positioning", "competitors", "enterprise", "market", "stand", "differentiation", "opportunities", "exist"])) {
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
    // After competitive intelligence
    console.log("step 2");
    if (matchesKeywords(input, "Perfect. Now show me our customer segmentation analysis - are we targeting the right segments for maximum growth? I need to understand which customer types drive the highest LTV and lowest churn.", ["perfect", "show", "customer", "segmentation", "analysis", "targeting", "segments", "maximum", "growth", "understand", "types", "drive", "highest", "ltv", "lowest", "churn"])) {
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
    // After customer segmentation
    console.log("step 3");
    if (matchesKeywords(input, "Excellent insights. Now I need to understand competitive threats and develop our defense strategy. What competitive moves should I be worried about, and how do we maintain our market position?", ["excellent", "insights", "understand", "competitive", "threats", "develop", "defense", "strategy", "moves", "worried", "maintain", "market", "position"])) {
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
    // After competitive threats
    console.log("step 4");
    if (matchesKeywords(input, "Great defense strategy. Now I need to align our functional departments - marketing, operations, finance, and product to support this market strategy. How should each department adapt their approach to maximize our competitive advantage?", ["great", "defense", "strategy", "align", "functional", "departments", "marketing", "operations", "finance", "product", "support", "market", "strategy", "department", "adapt", "approach", "maximize", "competitive", "advantage"])) {
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
    // After cross-functional alignment
    console.log("step 5");
    if (matchesKeywords(input, "Yes, definitely model the financial impact. Also, show me how our supply chain and product development operations need to adapt for this market expansion strategy.", ["definitely", "model", "financial", "impact", "show", "supply", "chain", "product", "development", "operations", "adapt", "market", "expansion", "strategy"])) {
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
    // After product & ops scaling
    console.log("step 6");
    if (matchesKeywords(input, "Perfect. Now create an integrated execution plan that coordinates all departments and provides real-time strategic monitoring. I need to see how marketing, sales, product, and operations work together as a unified growth engine.", ["perfect", "create", "integrated", "execution", "plan", "coordinates", "departments", "provides", "real-time", "strategic", "monitoring", "marketing", "sales", "product", "operations", "work", "unified", "growth", "engine"])) {
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
    // After integrated execution plan
    console.log("step 7");
    if (matchesKeywords(input, "Excellent work! I can see this giving us unprecedented strategic execution capability. Can you set up proactive alerts for any strategic risks or opportunities, and provide me with weekly CEO strategic intelligence briefings in Teams?", ["excellent", "work", "unprecedented", "strategic", "execution", "capability", "setup", "proactive", "alerts", "risks", "opportunities", "provide", "weekly", "ceo", "intelligence", "briefings", "teams"])) {
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

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "StrategicGrowthCommandCenterAns1",
        },
      ]);
      break;
    }

    case 2: {

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "StrategicGrowthCommandCenterAns2",
        },
      ]);
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
            "StrategicGrowthCommandCenterAns3",
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
            "StrategicGrowthCommandCenterAns4",
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
            "StrategicGrowthCommandCenterAns5",
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
            "StrategicGrowthCommandCenterAns6",
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
            "StrategicGrowthCommandCenterAns7",
        },
      ]);
      break;
    }

    case 8: {
      // Flow completed - no further steps
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "StrategicGrowthCommandCenterAns8",
        },
      ]);




      break;
    }







    default:
      break;
  }
};
