// flows/option2.ts
import Step2 from "@/app/NewComponents/Option2/Step2";
import { Message } from "@/types/messages";
import { ProcessingMessage } from "@/types/messages";
import { matchesKeywords } from "./yes_state_keywords";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let step = 0;
let pausedStep = 0; // remember where flow stopped

// Export function to get current step
export const getCurrentStep = () => step;


export const startMeetingIntelligenceFlow = (
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
  step = 1;
  pausedStep = 0;

  setMessages((prev) => [
    ...prev,
    {
      id: crypto.randomUUID(),
      sender: "user",
      kind: "text",
      text: "Can you analyze yesterday's client requirements workshop and help me understand what we need to deliver?",
    },
  ]);





  setMessages((prev) => [
    ...prev,
    {
      id: crypto.randomUUID(),
      sender: "bot",
      kind: "text",
      text: "Step2",
    },
  ]);

};

export const continueMeetingIntelligenceFlow = async (
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
    if (matchesKeywords(input, "Focus on identifying core requirements, any unresolved questions, concerns from Sarah (their CTO), and how the requirements align with our initial project scope in Jira.", ["focus", "requirements", "unresolved", "questions", "sarah", "cto", "project", "scope", "jira"])) {
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
    // After requirements breakdown
    console.log("step 2");
    if (matchesKeywords(input, " Show me the detailed requirements breakdown and how they align with our initial scope.", ["show", "detailed", "requirements", "breakdown", "align", "initial", "scope"])) {
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
    // After Sarah's concerns
    console.log("step 3");
    if (matchesKeywords(input, "What were Sarah's main concerns about the project, and what are the unresolved questions we need to follow up on?", ["sarah", "concerns", "project", "unresolved", "questions", "follow", "up"])) {
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
    // After actions completed
    console.log("step 4");
    if (matchesKeywords(input, "This is extremely helpful. Can you create Jira tickets for the unresolved questions, update our requirements document in Confluence, and schedule a follow up meeting with Sarah to discuss her concerns about compliance and AI capabilities?", ["create", "jira", "tickets", "unresolved", "questions", "update", "requirements", "confluence", "schedule", "meeting", "sarah", "concerns", "compliance", "ai", "capabilities"])) {
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
    // After actions completed
    console.log("step 5");
    if (matchesKeywords(input, "Yes, please proceed with all those actions. Schedule the follow-up meeting for Monday at 9 AM and make sure to include our technical architect in the invitation.", ["proceed", "actions", "schedule", "follow", "meeting", "monday", "technical", "architect", "invitation"])) {
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
    // After actions completed
    console.log("step 6");
    if (matchesKeywords(input, "Can you also prepare a presentation for the follow-up meeting that highlights Sarah's concerns and shows how we plan to address them?", ["prepare", "presentation", "follow", "meeting", "highlights", "sarah", "concerns", "shows", "plan", "address"])) {
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

  else if (step === 7) {
    // After actions completed
    console.log("step 7");
    if (matchesKeywords(input, "That looks perfect. Please create the presentation and share it with me and the technical architect before the meeting.This has been incredibly helpful you've saved me hours of work!", ["perfect", "create", "presentation", "share", "technical", "architect", "meeting", "helpful", "saved", "work"])) {
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


      // Show processing steps (like Option 1 styling)


      // for (const p of processingSteps) {
      //   setMessages((prev) => [
      //     ...prev,
      //     {
      //       id: crypto.randomUUID(),
      //       sender: "bot",
      //       kind: "processing",
      //       processing: { text: p } as ProcessingMessage["processing"],
      //     },
      //   ]);
      //   await delay(900);
      // }

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text:
            "<b>Analysis complete:</b>\n" +
            "• 37 requirements\n" +
            "• 12 unresolved questions\n" +
            "• 8 concerns by Sarah (CTO)\n" +
            "• 4 scope modifications\n\n" +
            "Would you like me to show requirements breakdown first? (yes/no)",
        },
      ]);
      break;
    }

    case 2: {
      const step3Id = crypto.randomUUID();

      setMessages((prev) => [
        ...prev,
        {
          id: step3Id,
          sender: "bot",
          kind: "text",
          text: "Step3",
        },
      ]);

      // Wait for Step3 animation to complete (7 seconds for all steps) plus a small buffer
      await delay(7500);

      // Remove Step3 after animation completes
      setMessages((prev) => prev.filter(msg => msg.id !== step3Id));

      // Show Step5
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "Step5",
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
            "Step7",
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
            "Step9",
        },
      ]);
      break;
    }

    case 5: {
      // Flow completed - no further steps
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "Step11",
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
          text: "Step13",
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
          text: "Step15",
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
          text: "Step17",
        },
      ]);

      break;


    }




    default:



      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "You have reached the end of the flow. Do you want to restart or clear the chat ?",
        },
      ]);

      break;
  }
};
