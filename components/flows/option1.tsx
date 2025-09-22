// flows/option1.ts
import { AnalysisMessage, Message, ProcessingMessage } from "@/types/messages";
import { matchesKeywords } from "./yes_state_keywords";
// import { delay } from "framer-motion";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let step = 0;
let pausedStep = 0; // remember where user stopped

// Export function to get current step
export const getCurrentStep = () => step;

// Helper function for flexible keyword matching


export const startProjectAssistantFlow = (
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
      text: "Floxa, we just signed the TechCorp contract. I need to get the project set up..",
    },
  ]);
  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: "bot",
        kind: "text",
        text: "Option1Step1",
      },
    ]);
  }, 800);
};

export const continueProjectAssistantFlow = (
  userInput: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
  const input = userInput.toLowerCase().trim();

  // Resume flow if previously paused
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
    // Initial response to contract analysis
    console.log(input);
    if (matchesKeywords(input, "Yes, please analyze the contract and help me get started.", ["analyze", "contract", "started", "help"])) {
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
    // After analysis, asking about team recommendations
    if (matchesKeywords(input, "That sounds good. Please proceed with that approach, but I'd like to see team recommendations first.", ["proceed", "approach", "team", "recommendations", "sounds", "good"])) {
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
    // After showing team recommendations
    if (matchesKeywords(input, "Yes, please show me David Kumar's profile and availability.", ["david", "kumar", "profile", "availability", "show"])) {
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
    // After showing profile details
    if (matchesKeywords(input, "Let's add David to the team as the ERP Specialist, Jennifer as Project Manager, and Sarah as the Dashboard Developer.", ["add", "david", "jennifer", "sarah", "team", "specialist", "manager", "developer"])) {
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
    // After project plan
    if (matchesKeywords(input, "Yes, please create the project plan and show me what it looks like.", ["create", "project", "plan", "show", "looks"])) {
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
    // After scheduling meetings
    if (matchesKeywords(input, "The project plan looks good. Now I need to schedule the kickoff meeting with the team and steering group meetings with TechCorp.", ["schedule", "kickoff", "meeting", "team", "steering", "group", "techcorp", "plan", "good"])) {
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
    // After summary - flow complete
    if (matchesKeywords(input, "Yes, please schedule all those meetings and make sure we have Teams links for virtual attendance.", ["schedule", "meetings", "teams", "links", "virtual", "attendance"])) {
      step = 8; // Restart flow
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
    // After summary - flow complete
    if (matchesKeywords(input, "Can you analyze potential risks for this project and recommend appropriate buffers and mitigation strategies?", ["analyze", "risks", "project", "recommend", "buffers", "mitigation", "strategies"])) {
      step = 9; // Restart flow
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
    // After summary - flow complete
    if (matchesKeywords(input, "Yes, please document these risks and create tasks for the mitigation strategies.", ["document", "risks", "create", "tasks", "mitigation", "strategies"])) {
      step = 10; // Restart flow
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
    // After summary - flow complete
    if (matchesKeywords(input, "This looks excellent. Can you also create a project dashboard that I can share with the executive team?", ["excellent", "create", "project", "dashboard", "share", "executive", "team"])) {
      step = 11; // Restart flow
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

  // Normal flow
  handleStep(step, setMessages);
};

// ----------------------
// Helper function
// ----------------------
const handleStep = async (
  currentStep: number,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
): Promise<void> => {
  switch (currentStep) {
    case 1:
      await delay(1000);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "botEnvironmentMessage",

        },
      ]);
      break;

    case 2:


      

        // await delay(500);
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            sender: "bot",
            kind: "text",
            text: "Option1Step2",
          },
        ]);


   

      break;

    case 3:

     
      (async () => {
        
          setMessages((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              sender: "bot",
              kind: "text",
              text: "Option1Step4",
            },
          ]);
      })();
      break;

    case 4:
      await delay(1000);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "Option1Step5",
        },
      ]);

      break;

    case 5:
     
      ( async () => {
        
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            sender: "bot",
            kind: "text",
            text: "Option1Step6",
          },
        ]);
      })();




      break;

    case 6:


      (async () => {
        await delay(1000);
        await delay(500)
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            sender: "bot",
            kind: "text",
            text: "Option1Step8",
          },
        ]);
      })();

      break;

    case 7:
      await delay(1000);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "Option1MissingStep1",
        },
      ]);
      break;

    case 8:
      (async () => {
        await delay(1000);
        await delay(500)
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            sender: "bot",
            kind: "text",
            text: "Option1Step9",
          },
        ]);
      })();


      break;



    case 9:

      await delay(1000);

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "Option1MissingStep3",
        },
      ]);
      break;




    case 10:
      await delay(1000);


      (async () => {
        await delay(1000);
        await delay(500)
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            sender: "bot",
            kind: "text",
            text: "Option1Step10",
          },
        ]);

      })();


      break;





    case 11:



      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          kind: "text",
          text: "Option1Step11",
        },
      ]);


      break;


    default:
      break;
  }
};
