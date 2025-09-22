// flows/option3.ts
import { Message, ProcessingMessage } from "@/types/messages";
import { matchesKeywords } from "./yes_state_keywords";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let step = 0;
let pausedStep = 0;

// Export function to get current step
export const getCurrentStep = () => step;



export const startOnboardingFlow = (
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
      text: "Floxa, where can I find our current pricelist for enterprise clients?",
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
          "OnboardingIntelligenceAns1",
      },
    ]);
  }, 800);

};

export const continueOnboardingFlow = async (
  userInput: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
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
    // Initial response to pricing analysis
    console.log("step 1");
    if (matchesKeywords(input, "Yes, that would be helpful. Also, who should I talk to about our Analytics Module specifically?", ["helpful", "talk", "analytics", "module", "specifically"])) {
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
    // After contact recommendations
    console.log("step 2");
    if (matchesKeywords(input, "Perfect! And what campaigns are we currently running? I need to understand our marketing activities for the product launch.", ["campaigns", "currently", "running", "marketing", "activities", "product", "launch"])) {
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
    // After marketing campaigns analysis
    console.log("step 3");
    if (matchesKeywords(input, "Who are our main competitors and how do we position against them?", ["competitors", "position", "against"])) {
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
    // After competitive intelligence
    console.log("step 4");
    if (matchesKeywords(input, "Yes, please do that. What's our content approval process for marketing materials?", ["content", "approval", "process", "marketing", "materials"])) {
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
    // After marketing performance metrics
    console.log("step 5");
    if (matchesKeywords(input, "Can you show me recent marketing performance metrics so I understand what's working?", ["show", "recent", "marketing", "performance", "metrics", "understand", "working"])) {
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
    // After marketing performance metrics
    console.log("step 6");
    if (matchesKeywords(input, "This is incredibly helpful! One last question - how do we handle lead qualification and handoff to sales?", ["helpful", "question", "handle", "lead", "qualification", "handoff", "sales"])) {
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

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "OnboardingIntelligenceAns2",
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
            "OnboardingIntelligenceAns2",
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
            "OnboardingIntelligenceAns3",
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
            "OnboardingIntelligenceAns4",
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
            "OnboardingIntelligenceAns5",

        },
      ]);
      break;
    }

    case 6: {
      // Flow completed - no further steps
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "OnboardingIntelligenceAns6",
        },
      ]);
      break;
    }
    case 7: {
      // Flow completed - no further steps
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "OnboardingIntelligenceAns7",
        },
      ]);
      break;
    }

    default:
      break;
  }
};
