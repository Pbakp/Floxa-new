export interface Step {
  label: string;
  completed: boolean;
}

export interface OptionCard {
  title: string;
  description: string;
}

export interface MessageBase {
  id: string;
  sender: "bot" | "user";
}

export interface WelcomeMessage extends MessageBase {
  kind: "welcome";
  text: string;
  options: OptionCard[];
  footer: string;
}

export interface ProcessingMessage extends MessageBase {

  steps: Step[];

  id: string;
  sender: "bot";
  kind: "processing";
  text: string;

}

export interface TextMessage extends MessageBase {
  kind: "text";
  text: string;
}

export interface TypingMessage extends MessageBase {
  kind: "typing";
}

export interface AnalysisMessage extends MessageBase {
  kind: "analysis";
  data: {
    budget: string;
    timeline: string;
    compliance: string;
    scope: string;
    risk: string;
  };
}

export interface ChartMessage extends MessageBase {

  text: string;
  sender: "bot";
  kind: "chart";
  chartType: "pie" | "timeline";
  title?: string;
  data: any;        // see renderers below
  chartData: {
    title: string;
    type: string;
    sections: {
      title: string;
      color: string;
      items: string[];
    }[];
  };
}
export type CustomMessage = {
  id: string;
  sender: "bot" | "user";
  kind: "custom";
  content: JSX.Element;
};
export type HighlightMessage = {
  id: string;
  sender: "bot";
  kind: "highlight";
  text: string;     // markdown allowed
  bg?: string;      // optional bg color (e.g. "#635BFF")
};


export type Message =
  | { id: string; sender: "user" | "bot"; kind: "text"; text: string }
  | ProcessingMessage
  | AnalysisMessage
  | WelcomeMessage
  | { id: string; sender: "bot"; kind: "typing" }
  | HighlightMessage
  | ChartMessage;


