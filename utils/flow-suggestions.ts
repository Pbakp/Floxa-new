// Flow suggestions mapping for each step
export interface FlowSuggestions {
    [flowName: string]: {
        [step: number]: string[];
    };
}

export const flowSuggestions: FlowSuggestions = {
    "Project Assistant": {
        1: [
            "Yes, please analyze the contract and help me get started.",

        ],
        2: [
            "That sounds good. Please proceed with that approach, but I'd like to see team recommendations first.",

        ],
        3: [
            "Yes, please show me David Kumar's profile and availability.",

        ],
        4: [
            "Let's add David to the team as the ERP Specialist, Jennifer as Project Manager, and Sarah as the Dashboard Developer.",

        ],
        5: [
            "Yes, please create the project plan and show me what it looks like.",

        ],
        6: [
            "The project plan looks good. Now I need to schedule the kickoff meeting with the team and steering group meetings with TechCorp.",

        ],
        7: [
            "Yes, please schedule all those meetings and make sure we have Teams links for virtual attendance.",

        ],
        8: [
            "Can you analyze potential risks for this project and recommend appropriate buffers and mitigation strategies?",

        ],
        9: [
            "Yes, please document these risks and create tasks for the mitigation strategies.",

        ],
        10: [
            "This looks excellent. Can you also create a project dashboard that I can share with the executive team?",

        ]
    },
    "Meeting Intelligence": {
        1: [
            "Focus on identifying core requirements, any unresolved questions, concerns from Sarah (their CTO), and how the requirements align with our initial project scope in Jira.",

        ],
        2: [
            "Show me the detailed requirements breakdown and how they align with our initial scope.",

        ],
        3: [
            "What were Sarah's main concerns about the project, and what are the unresolved questions we need to follow up on?",

        ],
        4: [
            "This is extremely helpful. Can you create Jira tickets for the unresolved questions, update our requirements document in Confluence, and schedule a follow up meeting with Sarah to discuss her concerns about compliance and AI capabilities?"
        ],
        5: [
            "Yes, please proceed with all those actions. Schedule the follow-up meeting for Monday at 9 AM and make sure to include our technical architect in the invitation."
        ],
        6: [
            "Can you also prepare a presentation for the follow-up meeting that highlights Sarah's concerns and shows how we plan to address them?"
        ]
        ,
        7: [
            "That looks perfect. Please create the presentation and share it with me and the technical architect before the meeting. This has been incredibly helpful you've saved me hours of work?"
        ]

    },
    "Onboarding Intelligence": {
        1: [
            "Yes, that would be helpful. Also, who should I talk to about our Analytics Module specifically?"
        ],
        2: [
            "Perfect! And what campaigns are we currently running? I need to understand our marketing activities for the product launch."
        ],
        3: [
            "Who are our main competitors and how do we position against them?"
        ],
        4: [
            "Yes, please do that. What's our content approval process for marketing materials?"
        ],
        5: [
            "Can you show me recent marketing performance metrics so I understand what's working?"
        ],
        6: [
            "This is incredibly helpful! One last question - how do we handle lead qualification and handoff to sales?"
        ]
    },
    "Strategic Upsell Intelligence": {
        1: [
            "Great foundation analysis. Now show me the top prospects prioritized by fit score and relationship strength. I need to understand which accounts have the highest probability of closing and why."
        ],
        2: [
            "Let's focus on DataFlow Industries - they have the highest fit score. What specific intelligence do we have about their current pain points and how should I position the Intelligence Module to address their needs?"
        ],
        3: [
            "Perfect intelligence. Now I need to understand our competitive position. What are our competitors doing in the intelligence space, and how should I differentiate our Intelligence Module in my sales approach?",
        ],
        4: [
            "Excellent competitive analysis. Now show me the ROI projections for DataFlow Industries specifically. What's the business case I can present to Sarah Mitchell and the CFO for the Intelligence Module investment?"
        ],
        5: [
            "Compelling ROI numbers! Now what are the implementation risks I should be aware of, and how can I mitigate them? I want to address potential concerns upfront in my sales approach."
        ],
        6: [
            "Perfect risk analysis. Now I need a detailed implementation roadmap with specific timelines and milestones. What's the optimal approach for rolling out the Intelligence Module at DataFlow?"
        ],
        7: [
            "Excellent roadmap! Now I need to prepare my sales approach. Can you create specific talking points and value propositions tailored to each key stakeholder at DataFlow - Sarah Mitchell, David Kim, and Maria Santos?"
        ],
        8: [
            "Perfect stakeholder strategy! Now I need to understand the optimal timing for this outreach. Based on their current situation and market dynamics, when should I initiate contact and what's the ideal sales sequence?"
        ],
        9: [
            "Excellent timing strategy! Now I want to understand how this DataFlow approach scales to my other top prospects. Can you show me the comparative analysis across my top 5 opportunities and prioritize my overall Q4 pipeline?"
        ],
        10: [
            "This pipeline analysis is exactly what I needed! Can you help me prepare for potential objections and competitive challenges I might face across these deals? I want to be ready for any pushback or competitive threats that could emerge."
        ]

    },
    "Customer Intelligence with Crisis Management": {
        1: [
            "Give me the comprehensive analysis. I want to understand the full picture and any early warning signs I should be aware of."
        ],
        2: [
            "Those support metrics are concerning. Can you break down which specific issues are causing the SLA breaches and their business impact?"
        ],
        3: [
            " Map the key stakeholders according to MEDDIC framework. Who should I be focusing on and what are their individual concerns?"
        ],
        4: [
            "What are the most critical risks I need to address first? Rank them by potential impact and urgency."
        ],
        5: [
            "This is critical. I need to prepare for an emergency call with David Chen. Can you create talking points and crisis call prep materials?"
        ],
        6: [
            "Can you provide examples of similar situations where we successfully recovered client relationships? I need credible success stories to build confidence."
        ],
        7: [
            "What's the realistic timeline for relationship recovery? When should we expect to see improvement in key metrics?"
        ],
        8: [
            "Show me the financial impact analysis. What's the cost of losing this account versus the investment in recovery?"
        ],
        9: [
            "Once we stabilize the relationship, what expansion opportunities exist? Are there market signals indicating growth potential?"
        ],
        10: [
            "Perfect. Now help me create the implementation plan. Schedule the crisis call, prepare the materials, and set up the monitoring systems"
        ],
        11: [
            "Excellent. Set up the ongoing monitoring dashboard so I can track our recovery progress and never get caught off-guard again."
        ]

    },
    "Digital Transformation Intelligence": {
        1: [
            "That's helpful. Now I need to understand what our competitors are doing with AI implementations. What specific AI initiatives are they pursuing, and what results are they seeing? This will help me position our strategy appropriately."
        ],
        2: [
            "Excellent analysis. Now I need to see specific AI implementation opportunities for our organization. What are the high-impact areas where we can achieve competitive advantage, and what would be the ROI projections for each?"
        ],
        3: [
            "That makes sense. Can you show me specific AI implementation opportunities with detailed ROI projections? I need to present concrete numbers to the executive team showing how each initiative will deliver measurable business value."
        ],
        4: [
            "These projections look promising. Now I need to understand the implementation risks and how we can mitigate them. What are the potential challenges we might face, and how do we ensure successful execution based on what we've learned from competitor experiences?"
        ],
        5: [
            "Perfect. Now I need a detailed implementation roadmap with timelines, resource requirements, and success metrics. Can you create a comprehensive execution plan that I can present to the executive team?"
        ],
        6: [
            "This is excellent! The comprehensive analysis and roadmap give me everything I need for the executive presentation. Could you help me prepare the key stakeholder alignment strategy? I need to ensure buy in from department heads who will be affected by these AI implementations."
        ]
    },
    "Proactive Staffing Intelligence": {
        1: [
            "Yes, absolutely. What specific role requirements do we need based on the workload analysis? I need to understand the skills and seniority level required."
        ],
        2: [
            "Perfect. Can you engage HR to start the hiring process and set up the job posting with the appropriate salary range?"
        ],
        3: [
            "Yes, that timing works. What's our realistic hiring timeline to have someone onboarded before the Q3 surge hits?"
        ],
        4: [
            "Yes, and can you also monitor our other teams for similar staffing risks? I want to be proactive across all departments."
        ],
        5: [
            "Perfect! This level of predictive insight and automation is exactly what we need. Can you also prepare an executive summary for our leadership team showing the ROI of proactive staffing management?"
        ]
    },
    "Strategic Growth Command Center": {
        1: [
            "Yes, absolutely. And I need you to analyze our product positioning against competitors in the enterprise AI market. Where do we stand, and what differentiation opportunities exist?"
        ],
        2: [
            "Perfect. Now show me our customer segmentation analysis - are we targeting the right segments for maximum growth? I need to understand which customer types drive the highest LTV and lowest churn."
        ],
        3: [
            "Excellent insights. Now I need to understand competitive threats and develop our defense strategy. What competitive moves should I be worried about, and how do we maintain our market position?"
        ],
        4: [
            "Great defense strategy. Now I need to align our functional departments - marketing, operations, finance, and product to support this market strategy. How should each department adapt their approach to maximize our competitive advantage?"
        ],
        5: [
            "Yes, definitely model the financial impact. Also, show me how our supply chain and product development operations need to adapt for this market expansion strategy."

        ],
        6: [
            " Perfect. Now create an integrated execution plan that coordinates all departments and provides real-time strategic monitoring. I need to see how marketing, sales, product, and operations work together as a unified growth engine."
        ],
        7: [
            "Excellent work! I can see this giving us unprecedented strategic execution capability. Can you set up proactive alerts for any strategic risks or opportunities, and provide me with weekly CEO strategic intelligence briefings in Teams?"
        ]
    }
};

// Function to get suggestions for a specific flow and step
export function getFlowSuggestions(flowName: string, step: number): string[] {
    return flowSuggestions[flowName]?.[step] || [];
}

// Function to get all available flows
export function getAvailableFlows(): string[] {
    return Object.keys(flowSuggestions);
}
