// flows/option5.ts
import { Message } from "@/types/messages";
import { matchesKeywords } from "./yes_state_keywords";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let step = 0;
let pausedStep = 0;

// Export function to get current step
export const getCurrentStep = () => step;



export const startCustomerCrisisFlow = (
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
        "How healthy is our relationship with Vertex Solutions right now? I'm concerned about some signals I've been picking up"

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
          "CustomerCrisisFlowAns1",
      },
    ]);
  }, 800);
};

export const continueCustomerCrisisFlow = async (
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
    // Initial response to crisis intervention
    console.log("step 1");
    if (matchesKeywords(input, "Give me the comprehensive analysis. I want to understand the full picture and any early warning signs I should be aware of.", ["comprehensive", "analysis", "understand", "picture", "warning", "signs", "aware"])) {
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
    // After crisis call preparation
    console.log("step 2");
    if (matchesKeywords(input, "Those support metrics are concerning. Can you break down which specific issues are causing the SLA breaches and their business impact?", ["support", "metrics", "concerning", "break", "specific", "issues", "sla", "breaches", "business", "impact"])) {
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
    // After recovery case studies
    console.log("step 3");
    if (matchesKeywords(input, "Map the key stakeholders according to MEDDIC framework. Who should I be focusing on and what are their individual concerns?", ["map", "stakeholders", "meddic", "framework", "focusing", "individual", "concerns"])) {
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
    // After recovery timeline forecast
    console.log("step 4");
    if (matchesKeywords(input, "What are the most critical risks I need to address first? Rank them by potential impact and urgency.", ["critical", "risks", "address", "rank", "potential", "impact", "urgency"])) {
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
    // After financial impact analysis
    console.log("step 5");
    if (matchesKeywords(input, "This is critical. I need to prepare for an emergency call with David Chen. Can you create talking points and crisis call prep materials?", ["critical", "prepare", "emergency", "call", "david", "chen", "create", "talking", "points", "crisis", "prep", "materials"])) {
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
    // After growth indicators
    console.log("step 6");
    if (matchesKeywords(input, "Can you provide examples of similar situations where we successfully recovered client relationships? I need credible success stories to build confidence.", ["provide", "examples", "similar", "situations", "successfully", "recovered", "client", "relationships", "credible", "success", "stories", "build", "confidence"])) {
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
    // After execution of crisis plan
    console.log("step 7");
    if (matchesKeywords(input, "What's the realistic timeline for relationship recovery? When should we expect to see improvement in key metrics?", ["realistic", "timeline", "relationship", "recovery", "expect", "improvement", "key", "metrics"])) {
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
    // After execution of crisis plan
    console.log("step 8");
    if (matchesKeywords(input, "Show me the financial impact analysis. What's the cost of losing this account versus the investment in recovery?", ["show", "financial", "impact", "analysis", "cost", "losing", "account", "investment", "recovery"])) {
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
    // After execution of crisis plan
    console.log("step 9");
    if (matchesKeywords(input, "Once we stabilize the relationship, what expansion opportunities exist? Are there market signals indicating growth potential?", ["stabilize", "relationship", "expansion", "opportunities", "market", "signals", "growth", "potential"])) {
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
    // After execution of crisis plan
    console.log("step 10");
    if (matchesKeywords(input, "Perfect. Now help me create the implementation plan. Schedule the crisis call, prepare the materials, and set up the monitoring systems", ["perfect", "help", "create", "implementation", "plan", "schedule", "crisis", "call", "prepare", "materials", "monitoring", "systems"])) {
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

  else if (step === 11) {
    // After execution of crisis plan
    console.log("step 11");
    if (matchesKeywords(input, "Excellent. Set up the ongoing monitoring dashboard so I can track our recovery progress and never get caught off-guard again.", ["excellent", "setup", "ongoing", "monitoring", "dashboard", "track", "recovery", "progress", "caught", "off-guard"])) {
      step = 12;
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
      await delay(1000)
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "CustomerCrisisFlowAns1",
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
            "CustomerCrisisFlowAns2",
        },
      ]);
      break;
    }

    case 3: {
      await delay(1000)

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "CustomerCrisisFlowAns3",
        },
      ]);
      break;
    }

    case 4: {
      await delay(1000)

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "CustomerCrisisFlowAns4",
        },
      ]);
      break;
    }

    case 5: {
      await delay(1000)

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "CustomerCrisisFlowAns5",
        },
      ]);
      break;
    }

    case 6: {
      await delay(1000)

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "CustomerCrisisFlowAns6",
        },
      ]);
      break;
    }

    case 7: {
      await delay(1000)

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "CustomerCrisisFlowAns7",
        },
      ]);
      break;
    }

    case 8: {
      // Flow completed - no further steps
      await delay(1000)

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "CustomerCrisisFlowAns8",
        },
      ]);
      break;
    }

    case 9: {
      // Flow completed - no further steps
      await delay(1000)

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "CustomerCrisisFlowAns9",
        },
      ]);
      break;
    }
    case 10: {
      // Flow completed - no further steps
      await delay(1000)

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "CustomerCrisisFlowAns10",
        },
      ]);
      break;
    }
    case 11: {
      // Flow completed - no further steps
      await delay(1000)

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "CustomerCrisisFlowAns11",
        },
      ]);
      break;
    }

    case 12: {
      // Flow completed - no further steps
      await delay(1000)

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "CustomerCrisisFlowAns11b",
        },
      ]);

      break;
    }



    default:
      break;
  }
};
