// components/flows/option6.ts

import { delay } from "@/utils/delay";
import { Message } from "@/types/messages";
import { matchesKeywords } from "./yes_state_keywords";

// -----------------------------
// Proactive Staffing Intelligence Flow
// -----------------------------

let step = 0;
let pausedStep = 0;

// Export function to get current step
export const getCurrentStep = () => step;


export const startProactiveStaffingFlow = (
  setMessages: (fn: (prev: Message[]) => Message[]) => void
) => {
  step = 1;
  pausedStep = 0;

  // Initial user message
  setMessages((prev) => [
    ...prev,
    {
      id: crypto.randomUUID(),
      sender: "user",
      kind: "text",
      text: "Floxa, I need to plan our Q3 staffing levels. What does our data suggest about upcoming resource needs based on our project pipeline and current team capacity?",
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
          "PredictiveStaffingIntelligenceAns1",
      },
    ]);
  }, 800);
};

export const continueProactiveStaffingFlow = async (
  userInput: string,
  setMessages: (fn: (prev: Message[]) => Message[]) => void
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
  if (step == 1) {
    // Initial response to staffing analysis
    console.log("step 1");
    if (matchesKeywords(input, "Yes, absolutely. What specific role requirements do we need based on the workload analysis? I need to understand the skills and seniority level required.", ["absolutely", "specific", "role", "requirements", "workload", "analysis", "understand", "skills", "seniority", "level", "required"])) {
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
    // After role specification
    console.log("step 2");
    if (matchesKeywords(input, "Perfect. Can you engage HR to start the hiring process and set up the job posting with the appropriate salary range?", ["perfect", "engage", "hr", "start", "hiring", "process", "setup", "job", "posting", "appropriate", "salary", "range"])) {
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
    // After hiring workflow initiation
    console.log("step 3");
    if (matchesKeywords(input, "Yes, that timing works. What's our realistic hiring timeline to have someone onboarded before the Q3 surge hits?", ["timing", "works", "realistic", "hiring", "timeline", "onboarded", "q3", "surge", "hits"])) {
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
    // After hiring timeline projection
    console.log("step 4");
    if (matchesKeywords(input, "Yes, and can you also monitor our other teams for similar staffing risks? I want to be proactive across all departments.", ["monitor", "teams", "similar", "staffing", "risks", "proactive", "departments"])) {
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
  }

  else if (step === 5) {
    // After hiring timeline projection
    console.log("step 5");
    if (matchesKeywords(input, "Perfect! This level of predictive insight and automation is exactly what we need. Can you also prepare an executive summary for our leadership team showing the ROI of proactive staffing management?", ["perfect", "predictive", "insight", "automation", "exactly", "prepare", "executive", "summary", "leadership", "team", "roi", "proactive", "staffing", "management"])) {
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

  await handleStep(step, setMessages);
};

// ----------------------
// Step handler
// ----------------------
const handleStep = async (
  currentStep: number,
  setMessages: (fn: (prev: Message[]) => Message[]) => void
) => {
  switch (currentStep) {
    case 1:

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "PredictiveStaffingIntelligenceAns1",

        },
      ]);
      break;

    case 2:

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "PredictiveStaffingIntelligenceAns2",
        },
      ]);
      break;

    case 3:

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "PredictiveStaffingIntelligenceAns3",
        },
      ]);
      break;

    case 4:

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "PredictiveStaffingIntelligenceAns4",
        },
      ]);
      break;

    case 5:

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "PredictiveStaffingIntelligenceAns5",
        },
      ]);
      break;



    case 6:

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "PredictiveStaffingIntelligenceAns6",
        },
      ]);
      break;

    default:
      break;
  }
};
