"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { delay } from "@/utils/delay";
import { Message, WelcomeMessage, ProcessingMessage } from "@/types/messages";
import type { AnalysisMessage } from "@/types/messages";
import { getFlowSuggestions } from "@/utils/flow-suggestions";
import { usePathname } from "next/navigation";

import BotBubble from "@/components/ui/botbubble";
import UserBubble from "@/components/ui/userbubble";
import TypingDots from "@/components/ui/typingdots";
import ProcessingBlock from "@/components/ui/processingblock";
import WelcomeBlock from "@/components/ui/welcomeblock";
import InputBar from "@/components/ui/inputbar";
import AnalysisBlock from "@/components/ui/analysisblock";

// --- Flows ---
import {
  startProjectAssistantFlow,
  continueProjectAssistantFlow,
  getCurrentStep as getProjectAssistantStep,
} from "@/components/flows/option1";
import {
  startMeetingIntelligenceFlow,
  continueMeetingIntelligenceFlow,
  getCurrentStep as getMeetingIntelligenceStep,
} from "@/components/flows/option2";
import {
  startOnboardingFlow,
  continueOnboardingFlow,
  getCurrentStep as getOnboardingStep,
} from "@/components/flows/option3";
import {
  startUpsellFlow,
  continueUpsellFlow,
  getCurrentStep as getUpsellStep,
} from "@/components/flows/option4";
import {
  startCustomerCrisisFlow,
  continueCustomerCrisisFlow,
  getCurrentStep as getCustomerCrisisStep,
} from "@/components/flows/option5";
import {
  startDigitalTransformationFlow,
  continueDigitalTransformationFlow,
  getCurrentStep as getDigitalTransformationStep,
} from "@/components/flows/option6";
import {
  startProactiveStaffingFlow,
  continueProactiveStaffingFlow,
  getCurrentStep as getProactiveStaffingStep,
} from "@/components/flows/option7";
import {
  startGrowthFlow,
  continueGrowthFlow,
  getCurrentStep as getGrowthStep,
} from "@/components/flows/option8";
import ChatInput from "./chatinput";
import { CustomerPortfolioAnalysis } from "@/app/NewComponents/Option4/CustomerPortfolioAnalysis";
import { CustomerDataTable } from "@/app/NewComponents/Option4/CustomerData";
import { CustomerIntelligenceReport } from "@/app/NewComponents/Option4/CustomerIntelligenceReport";
import { CompetitiveIntelligenceAnalysis } from "@/app/NewComponents/Option4/CompetitiveIntelligenceAnalysis";
import { ROIAnalysis } from "@/app/NewComponents/Option4/RoiAnalysis";
import { RiskAssessment } from "@/app/NewComponents/Option4/RiskAssessment";
import { ImplementationRoadmap } from "@/app/NewComponents/Option4/ImplementationRoadmap";
import { StakeholderSalesStrategy } from "@/app/NewComponents/Option4/StakeholderSalesStrategy";
import { TimingStrategy } from "@/app/NewComponents/Option4/TimingStrategy";
import { PipelinePrioritization } from "@/app/NewComponents/Option4/PipelinePrioritization";
import { ObjectionHandling } from "@/app/NewComponents/Option4/ObjectionHandling";
import UserStorySummary from "@/app/NewComponents/Option2/Userstory";
import Step17 from "@/app/NewComponents/Option2/Step17";
import Step2 from "@/app/NewComponents/Option2/Step2";
import Step3 from "@/app/NewComponents/Option2/Step3";
import Step5 from "@/app/NewComponents/Option2/Step5";
import Step7 from "@/app/NewComponents/Option2/Step7";
import Step9 from "@/app/NewComponents/Option2/Step9";
import Step11 from "@/app/NewComponents/Option2/Step11";
import Step13 from "@/app/NewComponents/Option2/Step13";
import Step15 from "@/app/NewComponents/Option2/Step15";
import ProcessingAnimation from "@/app/NewComponents/Option1/processingCards/Option1/card1";
import OnboardingIntelligenceAns1 from "@/app/NewComponents/Option3/onboardingintelligenceans1";
import OnboardingIntelligenceAns2 from "@/app/NewComponents/Option3/onboardingintelligenceans2";
import OnboardingIntelligenceAns3 from "@/app/NewComponents/Option3/onboardingintelligenceans3";
import OnboardingIntelligenceAns4 from "@/app/NewComponents/Option3/onboardingintelligenceans4";
import OnboardingIntelligenceAns5 from "@/app/NewComponents/Option3/onboardingintelligenceans5";
import OnboardingIntelligenceAns6 from "@/app/NewComponents/Option3/onboardingintelligenceans6";
import OnboardingIntelligenceAns7 from "@/app/NewComponents/Option3/onboardingintelligenceans7";
import PredictiveStaffingIntelligenceAns1 from "@/app/NewComponents/Option7/predictiveStaffingIntelligenceans1";
import PredictiveStaffingIntelligenceAns2 from "@/app/NewComponents/Option7/predictiveStaffingIntelligenceans2";
import PredictiveStaffingIntelligenceAns3 from "@/app/NewComponents/Option7/predictiveStaffingIntelligenceans3";
import PredictiveStaffingIntelligenceAns4 from "@/app/NewComponents/Option7/predictiveStaffingIntelligenceans4";
import PredictiveStaffingIntelligenceAns5 from "@/app/NewComponents/Option7/predictiveStaffingIntelligenceans5";
import PredictiveStaffingIntelligenceAns6 from "@/app/NewComponents/Option7/predictiveStaffingIntelligenceans6";
import StrategicGrowthCommandCenterAns1 from "@/app/NewComponents/Option8/strategicGrowthCommandCenterans1";
import StrategicGrowthCommandCenterAns8b from "@/app/NewComponents/Option8/strategicGrowthCommandCenterans8b";
import StrategicGrowthCommandCenterAns8c from "@/app/NewComponents/Option8/strategicGrowthCommandCenterans8c";
import StrategicGrowthCommandCenterAns8d from "@/app/NewComponents/Option8/strategicGrowthCommandCenterans8d";
import StrategicGrowthCommandCenterAns8 from "@/app/NewComponents/Option8/strategicGrowthCommandCenterans8";
import StrategicGrowthCommandCenterAns7 from "@/app/NewComponents/Option8/strategicGrowthCommandCenterans7";
import StrategicGrowthCommandCenterAns6 from "@/app/NewComponents/Option8/strategicGrowthCommandCenterans6";
import StrategicGrowthCommandCenterAns5 from "@/app/NewComponents/Option8/strategicGrowthCommandCenterans5";
import StrategicGrowthCommandCenterAns4 from "@/app/NewComponents/Option8/strategicGrowthCommandCenterans4";
import StrategicGrowthCommandCenterAns3 from "@/app/NewComponents/Option8/strategicGrowthCommandCenterans3";
import StrategicGrowthCommandCenterAns2 from "@/app/NewComponents/Option8/strategicGrowthCommandCenterans2";


import CustomerCrisisFlowAns1 from "@/app/NewComponents/Option5/Step1";
import CustomerCrisisFlowAns2 from "@/app/NewComponents/Option5/Step2";
import CustomerCrisisFlowAns3 from "@/app/NewComponents/Option5/Step3";
import CustomerCrisisFlowAns4 from "@/app/NewComponents/Option5/Step4";
import CustomerCrisisFlowAns5 from "@/app/NewComponents/Option5/Step5";
import CustomerCrisisFlowAns6 from "@/app/NewComponents/Option5/Step6";
import CustomerCrisisFlowAns7 from "@/app/NewComponents/Option5/Step7";
import CustomerCrisisFlowAns8 from "@/app/NewComponents/Option5/Step8";
import CustomerCrisisFlowAns9 from "@/app/NewComponents/Option5/Step9";
import CustomerCrisisFlowAns10 from "@/app/NewComponents/Option5/Step10";
import CustomerCrisisFlowAns11 from "@/app/NewComponents/Option5/Step11";
import CustomerCrisisFlowAns12 from "@/app/NewComponents/Option5/Step12";
import CustomerCrisisFlowAns13 from "@/app/NewComponents/Option5/Step13";
import DigitalTransformationIntelligenceAns1 from "@/app/NewComponents/Option6/digitalTransformationIntelligenceans1";
import DigitalTransformationIntelligenceAns2 from "@/app/NewComponents/Option6/digitalTransformationIntelligenceans2";
import DigitalTransformationIntelligenceAns1b from "@/app/NewComponents/Option6/digitalTransformationIntelligenceans1b";
import DigitalTransformationIntelligenceAns2b from "@/app/NewComponents/Option6/digitalTransformationIntelligenceans2b";
import DigitalTransformationIntelligenceAns3 from "@/app/NewComponents/Option6/digitalTransformationIntelligenceans3";
import DigitalTransformationIntelligenceAns3b from "@/app/NewComponents/Option6/digitalTransformationIntelligenceans3b";
import DigitalTransformationIntelligenceAns4 from "@/app/NewComponents/Option6/digitalTransformationIntelligenceans4";
import DigitalTransformationIntelligenceAns4b from "@/app/NewComponents/Option6/digitalTransformationIntelligenceans4b";
import DigitalTransformationIntelligenceAns5 from "@/app/NewComponents/Option6/digitalTransformationIntelligenceans5";
import DigitalTransformationIntelligenceAns5b from "@/app/NewComponents/Option6/digitalTransformationIntelligenceans5b";
import DigitalTransformationIntelligenceAns6 from "@/app/NewComponents/Option6/digitalTransformationIntelligenceans6";
import DigitalTransformationIntelligenceAns6b from "@/app/NewComponents/Option6/digitalTransformationIntelligenceans6b";
import DigitalTransformationIntelligenceAns7 from "@/app/NewComponents/Option6/digitalTransformationIntelligenceans7";


//option 1
import BuildRepeatable from "@/app/NewComponents/Option1/buildRepeat";
import Option1Step1 from "@/app/NewComponents/Option1/Step1";
import Option1Step2 from "@/app/NewComponents/Option1/Step2";
import Option1Step3 from "@/app/NewComponents/Option1/Step3";
import Option1Step4 from "@/app/NewComponents/Option1/Step4";
import Option1Step5 from "@/app/NewComponents/Option1/Step5";
import Option1Step6 from "@/app/NewComponents/Option1/Step6";
import Option1Step7 from "@/app/NewComponents/Option1/Step7";
import Option1Step8 from "@/app/NewComponents/Option1/Step8";
import Option1Step9 from "@/app/NewComponents/Option1/Step9";
import Option1Step10 from "@/app/NewComponents/Option1/Step10";
import Option1Step11 from "@/app/NewComponents/Option1/Step11";
import Option1Step12 from "@/app/NewComponents/Option1/Step12";
import Option1Step13 from "@/app/NewComponents/Option1/Step13";

import Option1MissingStep1 from "@/app/NewComponents/Option1/Missing/step1";
import Option1MissingStep3 from "@/app/NewComponents/Option1/Missing/Step3";
import Option1MissingStep4 from "@/app/NewComponents/Option1/Missing/step4";
import Option1MissingStep2 from "@/app/NewComponents/Option1/Missing/step2";
import BuildRepeat1 from "@/app/NewComponents/Option1/Missing/BuildRepeat1";
import BuildRepeat2 from "@/app/NewComponents/Option1/Missing/BuildRepeat2";
import BuildRepeat4 from "@/app/NewComponents/Option1/Missing/BuildRepeat4";
import BuildRepeat5 from "@/app/NewComponents/Option1/Missing/BuildRepeat5";
import BuildRepeat6 from "@/app/NewComponents/Option1/Missing/BuildRepeat6";
import BuildRepeat7 from "@/app/NewComponents/Option1/Missing/BuildRepeat7";
import Sugg1 from "@/app/NewComponents/Option1/Missing/sugg1";
import Sugg2 from "@/app/NewComponents/Option1/Missing/sugg2";
import Sugg3 from "@/app/NewComponents/Option1/Missing/sugg3";



//processing cards
import Card1 from "@/app/NewComponents/Option2/processingCards/Card1";


import Step11b from "@/app/NewComponents/Option5/Step11b"

// --------------------------------------
// Main Intelligence Screen
// --------------------------------------
export default function IntelligenceScreen({ initialFlow }: { initialFlow?: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [currentFlow, setCurrentFlow] = useState<null | string>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const endRef = useRef<HTMLDivElement>(null);
  const didMount = useRef(false);
  const pathname = usePathname();

  // helper to build the welcome block (reused on mount and on refresh)
  const buildWelcome = () => {
    return {
      id: crypto.randomUUID(),
      sender: "bot",
      kind: "welcome",
      text: "Hi! I'm Floxa, your AI project intelligence assistant. I can help you with eight workflows:\n\n",
      options: [
        { title: "Project Assistant", description: "Analyze contracts, build teams, orchestrate setup" },
        { title: "Meeting Intelligence", description: "Analyze recordings, extract requirements, orchestrate actions" },
        { title: "Onboarding Intelligence", description: "Accelerating New Employee Ramp-Up Through Unified Knowledge Access" },
        { title: "Strategic Upsell Intelligence", description: "Data-Driven Sales Opportunity Identification" },
        { title: "Customer Intelligence with Crisis Management", description: "Digital Maturity Assessment and Proactive Support" },
        { title: "Digital Transformation Intelligence", description: "Strategic AI Implementation Planning" },
        { title: "Proactive Staffing Intelligence", description: "Understaffing Detection to Automated Hiring" },
        { title: "Strategic Growth Command Center", description: "Comprehensive Strategic Intelligence & Cross-Functional Execution" },
      ],
      footer: "Simply click one of the options above to get started",
    } as WelcomeMessage;
  };

  // Listen for external refresh requests (e.g. from floxa-chatlist refresh button)
  useEffect(() => {
    const handler = () => {
      // avoid injecting global welcome when embedded on /copilot
      if (pathname === "/copilot") return;
      setCurrentFlow(null);
      setCurrentStep(0);
      setHasStarted(false);
      setInput("");
      setBusy(false);
      setMessages([buildWelcome()]);
    };

    window.addEventListener("floxa:refresh", handler);
    return () => window.removeEventListener("floxa:refresh", handler);
  }, [pathname]);

  const messageComponents: Record<string, JSX.Element> = {


    CustomerPortfolioAnalysis: <CustomerPortfolioAnalysis />,
    CustomerData: <CustomerDataTable />,
    CustomerIntelligenceReport: <CustomerIntelligenceReport />,
    CompetitiveIntelligenceAnalysis: <CompetitiveIntelligenceAnalysis />,
    ROIAnalysis: <ROIAnalysis />,
    RiskAssessment: <RiskAssessment />,
    ImplementationRoadmap: <ImplementationRoadmap />,
    StakeholderSalesStrategy: <StakeholderSalesStrategy />,
    TimingStrategy: <TimingStrategy />,
    PipelinePrioritization: <PipelinePrioritization />,
    ObjectionHandling: <ObjectionHandling />,

    //option 2 
    Step2: <Step2 />,
    Step3: <Step3 />,
    Step5: <Step5 />,
    Step7: <Step7 />,
    Step9: <Step9 />,
    Step11: <Step11 />,
    Step13: <Step13 />,
    Step15: <Step15 />,
    Step17: <Step17 />,
    Option2Card1: <Card1 />,
    userstory: <UserStorySummary />,


    // option 3
    OnboardingIntelligenceAns1: <OnboardingIntelligenceAns1 />,
    OnboardingIntelligenceAns2: <OnboardingIntelligenceAns2 />,
    OnboardingIntelligenceAns3: <OnboardingIntelligenceAns3 />,
    OnboardingIntelligenceAns4: <OnboardingIntelligenceAns4 />,
    OnboardingIntelligenceAns5: <OnboardingIntelligenceAns5 />,
    OnboardingIntelligenceAns6: <OnboardingIntelligenceAns6 />,
    OnboardingIntelligenceAns7: <OnboardingIntelligenceAns7 />,


    //option 7 

    PredictiveStaffingIntelligenceAns1: <PredictiveStaffingIntelligenceAns1 />,
    PredictiveStaffingIntelligenceAns2: <PredictiveStaffingIntelligenceAns2 />,
    PredictiveStaffingIntelligenceAns3: <PredictiveStaffingIntelligenceAns3 />,
    PredictiveStaffingIntelligenceAns4: <PredictiveStaffingIntelligenceAns4 />,
    PredictiveStaffingIntelligenceAns5: <PredictiveStaffingIntelligenceAns5 />,
    PredictiveStaffingIntelligenceAns6: <PredictiveStaffingIntelligenceAns6 />,

    //option 8
    StrategicGrowthCommandCenterAns1: <StrategicGrowthCommandCenterAns1 />,
    StrategicGrowthCommandCenterAns2: <StrategicGrowthCommandCenterAns2 />,
    StrategicGrowthCommandCenterAns3: <StrategicGrowthCommandCenterAns3 />,
    StrategicGrowthCommandCenterAns4: <StrategicGrowthCommandCenterAns4 />,
    StrategicGrowthCommandCenterAns5: <StrategicGrowthCommandCenterAns5 />,
    StrategicGrowthCommandCenterAns6: <StrategicGrowthCommandCenterAns6 />,
    StrategicGrowthCommandCenterAns7: <StrategicGrowthCommandCenterAns7 />,
    StrategicGrowthCommandCenterAns8: <StrategicGrowthCommandCenterAns8 />,
    StrategicGrowthCommandCenterAns8b: <StrategicGrowthCommandCenterAns8b />,
    StrategicGrowthCommandCenterAns8c: <StrategicGrowthCommandCenterAns8c />,
    StrategicGrowthCommandCenterAns8d: <StrategicGrowthCommandCenterAns8d />,


    //option 5
    CustomerCrisisFlowAns1: <CustomerCrisisFlowAns1 />,
    CustomerCrisisFlowAns2: <CustomerCrisisFlowAns2 />,
    CustomerCrisisFlowAns3: <CustomerCrisisFlowAns3 />,
    CustomerCrisisFlowAns4: <CustomerCrisisFlowAns4 />,
    CustomerCrisisFlowAns5: <CustomerCrisisFlowAns5 />,
    CustomerCrisisFlowAns6: <CustomerCrisisFlowAns6 />,
    CustomerCrisisFlowAns7: <CustomerCrisisFlowAns7 />,
    CustomerCrisisFlowAns8: <CustomerCrisisFlowAns8 />,
    CustomerCrisisFlowAns9: <CustomerCrisisFlowAns9 />,
    CustomerCrisisFlowAns10: <CustomerCrisisFlowAns10 />,
    CustomerCrisisFlowAns11: <CustomerCrisisFlowAns11 />,
    CustomerCrisisFlowAns11b: <Step11b />,
    CustomerCrisisFlowAns12: <CustomerCrisisFlowAns12 />,
    CustomerCrisisFlowAns13: <CustomerCrisisFlowAns13 />,


    // option 6
    DigitalTransformationIntelligenceAns1: <DigitalTransformationIntelligenceAns1 />,
    DigitalTransformationIntelligenceAns1b: <DigitalTransformationIntelligenceAns1b />,
    DigitalTransformationIntelligenceAns2: <DigitalTransformationIntelligenceAns2 />,
    DigitalTransformationIntelligenceAns2b: <DigitalTransformationIntelligenceAns2b />,
    DigitalTransformationIntelligenceAns3: <DigitalTransformationIntelligenceAns3 />,
    DigitalTransformationIntelligenceAns3b: <DigitalTransformationIntelligenceAns3b />,
    DigitalTransformationIntelligenceAns4: <DigitalTransformationIntelligenceAns4 />,
    DigitalTransformationIntelligenceAns4b: <DigitalTransformationIntelligenceAns4b />,
    DigitalTransformationIntelligenceAns5: <DigitalTransformationIntelligenceAns5 />,
    DigitalTransformationIntelligenceAns5b: <DigitalTransformationIntelligenceAns5b />,
    DigitalTransformationIntelligenceAns6: <DigitalTransformationIntelligenceAns6 />,
    DigitalTransformationIntelligenceAns6b: <DigitalTransformationIntelligenceAns6b />,
    DigitalTransformationIntelligenceAns7: <DigitalTransformationIntelligenceAns7 />,


    //option 1 
    BuildRepeatable: <BuildRepeatable />,
    Option1Step1: <Option1Step1 />,
    Option1Step2: <Option1Step2 />,
    Option1Step3: <Option1Step3 />,
    Option1Step4: <Option1Step4 />,
    Option1Step5: <Option1Step5 />,
    Option1Step6: <Option1Step6 />,
    Option1Step7: <Option1Step7 />,
    Option1Step8: <Option1Step8 />,
    Option1Step9: <Option1Step9 />,
    Option1Step10: <Option1Step10 />,
    Option1Step11: <Option1Step11 />,
    Option1Step12: <Option1Step12 />,
    Option1Step13: <Option1Step13 />,

    //option 1 missing
    Option1MissingStep1: <Option1MissingStep1 />,
    Option1MissingStep3: <Option1MissingStep3 />,
    Option1MissingStep4: <Option1MissingStep4 />,
    Option1MissingStep2: <Option1MissingStep2 />,
    BuildRepeat1: <BuildRepeat1 />,
    BuildRepeat2: <BuildRepeat2 />,
    BuildRepeat4: <BuildRepeat4 />,
    BuildRepeat5: <BuildRepeat5 />,
    BuildRepeat6: <BuildRepeat6 />,
    BuildRepeat7: <BuildRepeat7 />,

    //option 1 missing
    Sugg1: <Sugg1 />,
    Sugg2: <Sugg2 />,
    Sugg3: <Sugg3 />,

  };

  // Function to get current step from active flow
  const getCurrentStepFromFlow = () => {
    if (!currentFlow) return 0;

    switch (currentFlow) {
      case "Project Assistant":
        return getProjectAssistantStep();
      case "Meeting Intelligence":
        return getMeetingIntelligenceStep();
      case "Onboarding Intelligence":
        return getOnboardingStep();
      case "Strategic Upsell Intelligence":
        return getUpsellStep();
      case "Customer Intelligence with Crisis Management":
        return getCustomerCrisisStep();
      case "Digital Transformation Intelligence":
        return getDigitalTransformationStep();
      case "Proactive Staffing Intelligence":
        return getProactiveStaffingStep();
      case "Strategic Growth Command Center":
        return getGrowthStep();
      default:
        return 0;
    }
  };

  // Get suggestions for current flow and step
  const suggestions = useMemo(() => {
    if (!currentFlow) return [];
    const step = getCurrentStepFromFlow();
    return getFlowSuggestions(currentFlow, step);
  }, [currentFlow, messages]); // Re-calculate when flow or messages change

  // Chips (quick shortcuts) - only show when no active flow
  const chips = useMemo(
    () => currentFlow ? [] : ["PROJECT MANAGEMENT", "PROJECT MANAGEMENT", "PROJECT MANAGEMENT"],
    [currentFlow]
  );

  // Auto-scroll
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    // Skip scrolling if it's *just* the welcome message
    if (messages.length === 1 && messages[0].kind === "welcome") {
      return;
    }

    // Scroll on all later updates
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initial welcome (skip when embedded on /copilot)
  useEffect(() => {
    if (pathname === "/copilot") {
      // do not inject the global welcome block when running inside the Copilot page
      return;
    }

    setMessages([buildWelcome()]);
  }, [pathname]);

  // Handle Welcome Picks
  const handlePickWelcome = async (title: string) => {
    switch (title) {
      case "Project Assistant":
        setCurrentFlow("Project Assistant");
        startProjectAssistantFlow(setMessages);
        break;
      case "Meeting Intelligence":
        setCurrentFlow("Meeting Intelligence");
        startMeetingIntelligenceFlow(setMessages);
        break;
      case "Onboarding Intelligence":
        setCurrentFlow("Onboarding Intelligence");
        startOnboardingFlow(setMessages);
        break;
      case "Strategic Upsell Intelligence":
        setCurrentFlow("Strategic Upsell Intelligence");
        startUpsellFlow(setMessages);
        break;
      case "Customer Intelligence with Crisis Management":
        setCurrentFlow("Customer Intelligence with Crisis Management");
        startCustomerCrisisFlow(setMessages);
        break;
      case "Digital Transformation Intelligence":
        setCurrentFlow("Digital Transformation Intelligence");
        startDigitalTransformationFlow(setMessages);
        break;
      case "Proactive Staffing Intelligence":
        setCurrentFlow("Proactive Staffing Intelligence");
        startProactiveStaffingFlow(setMessages);
        break;
      case "Strategic Growth Command Center":
        setCurrentFlow("Strategic Growth Command Center");
        startGrowthFlow(setMessages);
        break;
      default:
        break;
    }
  };

  // If parent requested an initial flow, auto-pick it once on mount
  useEffect(() => {
    if (!initialFlow) return;
    // small timeout to allow the initial welcome message to be set up
    // and to avoid double-runs when messages already exist
    const t = setTimeout(() => {
      handlePickWelcome(initialFlow);
    }, 50);
    return () => clearTimeout(t);
  }, [initialFlow]);

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  // Handle Send
  const handleSend = async () => {
    const final = input.trim();
    if (!final || busy) return;
    setInput("");

    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), sender: "user", kind: "text", text: final },
    ]);

    switch (currentFlow) {
      case "Project Assistant":
        return continueProjectAssistantFlow(final, setMessages);
      case "Meeting Intelligence":
        return continueMeetingIntelligenceFlow(final, setMessages);
      case "Onboarding Intelligence":
        return continueOnboardingFlow(final, setMessages);
      case "Strategic Upsell Intelligence":
        return continueUpsellFlow(final, setMessages);
      case "Customer Intelligence with Crisis Management":
        return continueCustomerCrisisFlow(final, setMessages);
      case "Digital Transformation Intelligence":
        return continueDigitalTransformationFlow(final, setMessages);
      case "Proactive Staffing Intelligence":
        return continueProactiveStaffingFlow(final, setMessages);
      case "Strategic Growth Command Center":
        return continueGrowthFlow(final, setMessages);
    }

    await delay(400);
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: "bot",
        kind: "text",
        text: `You said: "${final}"`,
      },
    ]);
  };

  return (
    <div className="flex flex-col mt-1 h-full relative">
      {/* Chat Area - scrollable */}
      <div style={{scrollbarWidth:"none"}} className="flex-1 p-6 space-y-4 bg-transparent overflow-auto" data-chat-container>
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <div key={msg.id} className="flex w-full flex-col gap-2">
              {msg.sender === "bot" ? (
                msg.kind === "analysis" ? (
                  <BotBubble variant="card">
                    <AnalysisBlock data={msg.data} />
                  </BotBubble>
                ) : (
                  <BotBubble>
                    {msg.kind === "welcome" && (
                      <WelcomeBlock
                        text={msg.text}
                        options={msg.options}
                        footer={msg.footer}
                        onPick={handlePickWelcome}
                      />
                    )}
                    {msg.kind === "processing" && (
                      <ProcessingBlock
                        steps={msg.steps as ProcessingMessage["steps"]}
                      />
                    )}
                    {msg.kind === "text" && (
                      <>
                        {messageComponents[msg.text] ? (
                          messageComponents[msg.text]
                        ) : (
                          <div className="prose max-w-none">{msg.text}</div>
                        )}
                      </>
                    )}
                    {msg.kind === "typing" && <TypingDots />}
                  </BotBubble>
                )
              ) : (
                <UserBubble>
                  {"text" in msg ? <span>{msg.text}</span> : null}
                </UserBubble>
              )}
            </div>
          ))}
        </AnimatePresence>
        <div ref={endRef} />
      </div>

      {/* Input + Chips - sticky to bottom so it never slides up */}
      <div className="sticky bottom-0 bg-white z-20 ">
        <InputBar
          input={input}
          setInput={setInput}
          onSend={handleSend}
          busy={busy}
          chips={chips}
          onChipClick={(chip) => handlePickWelcome(chip)}
          suggestions={suggestions}
          onSuggestionClick={handleSuggestionClick}
        />
      </div>
    </div>
  );
}
     
     