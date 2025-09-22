"use client";

import Image from "next/image";

export default function DashboardView() {
  const insights = [
    {
      title: "Budget Risk",
      description:
        "Project Alpha trending 25% over budget based on Jira time tracking and Teams discussions",
      teams: ["Development", "Project Management"],
      priority: "High",
      priorityColor: "bg-red-100 text-red-700",
    },
    {
      title: "Revenue Opportunity",
      description:
        "Customer TechCorp shows 89% ICP match for Analytics module - marketing engagement up 300%",
      teams: ["Sales", "Marketing"],
      priority: "High",
      priorityColor: "bg-red-100 text-red-700",
    },
    {
      title: "Coordination Gap",
      description:
        "Support ticket pattern suggests Customer GlobalCorp needs training - no account manager follow-up in 2 weeks",
      teams: ["Support", "Account Management"],
      priority: "Medium",
      priorityColor: "bg-yellow-100 text-yellow-700",
    },
  ];

  return (
    <div>
      {/* Connected Systems Section */}
      <h2 className="text-lg font-semibold mb-4">Connected Systems</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {[
          {
            name: "Microsoft Teams",
            points: "2,847 Data Points",
            time: "2 min ago",
            img: "/images/teams-active.png",
          },
          {
            name: "Jira",
            points: "956 Data Points",
            time: "No recent update",
            img: "/images/jira-active.png",
          },
          {
            name: "HubSpot CRM",
            points: "1,423 Data Points",
            time: "5 min ago",
            img: "/images/hubspot-active.png",
          },
          {
            name: "SharePoint",
            points: "754 Data Points",
            time: "8 min ago",
            img: "/images/sharepoint-active.png",
          },
          {
            name: "Slack",
            points: "3,241 Data Points",
            time: "12 min ago",
            img: "/images/slack-active.png",
          },
          {
            name: "Confluence",
            points: "1,892 Data Points",
            time: "3 min ago",
            img: "/images/confluence-active.png",
          },
        ].map((system, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 rounded-xl border bg-white shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <Image
                src={system.img}
                alt={system.name}
                width={28}
                height={28}
              />
              <div>
                <h3 className="font-medium">{system.name}</h3>
                <p className="text-sm text-gray-500">{system.points}</p>
              </div>
            </div>
            <span className="text-xs text-gray-400 -mt-5">{system.time}</span>
          </div>
        ))}
      </div>

      {/* Proactive Intelligence Center Section */}
      <section>
        <div className="flex items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mr-4">
            Proactive Intelligence Center
          </h2>
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
            3 Strategic Insights to Drive Decisions
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {insights.map((insight, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-gray-200 p-4 flex justify-between items-start shadow-sm"
            >
              <div className="flex items-start space-x-4">
                <Image
                  src={`/images/frame${idx + 1}.png`}
                  alt={insight.title}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <div>
                  <h3 className="text-md font-semibold text-gray-900 mb-1">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {insight.description}
                  </p>
                  <div className="mt-2">
                    <p className="text-md font-sm text-black mb-2">Teams</p>
                    <div className="flex space-x-2 flex-wrap">
                      {insight.teams.map((team, i) => (
                        <span
                          key={i}
                          className="px-3 py-2 rounded-md border border-gray-200 text-gray-900 text-xs font-medium uppercase tracking-widest"
                        >
                          {team}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <span
                className={`px-3 py-1 rounded-md text-xs font-medium ${insight.priorityColor}`}
              >
                {insight.priority}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions Section */}
      <h2 className="text-lg font-semibold mt-10 mb-5">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
        {[
          {
            title: "Check Customer Status",
            desc: "Get unified view of any customer across all systems",
            tag: "Customer Intelligence",
            img: "/images/quickframe1.png",
          },
          {
            title: "Review Project Health",
            desc: "Cross-team project status with risk detection",
            tag: "Project Intelligence",
            img: "/images/quickframe2.png",
          },
          {
            title: "Find Expert",
            desc: "Locate team members with specific expertise",
            tag: "Team Intelligence",
            img: "/images/quickframe3.png",
          },
          {
            title: "Expansion Opportunities",
            desc: "AI-detected upsell prospects with ICP matching",
            tag: "Revenue Intelligence",
            img: "/images/quickframe4.png",
          },
        ].map((action, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg border border-gray-200 p-4 flex items-start shadow-sm justify-between"
          >
            <div className="flex items-start space-x-4">
              <Image
                src={action.img}
                alt={action.title}
                width={40}
                height={40}
                className="rounded-md"
              />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{action.desc}</p>
                <span className="px-3 py-2 text-xs rounded-md border border-gray-300 font-medium uppercase tracking-widest mb-3">
                  {action.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*  Recent Organizational Insights */}
      <div className="flex items-center justify-between mb-4">
        {/* Left: Heading */}
        <h2 className="text-lg font-semibold">
          Recent Organizational Insights
        </h2>

        {/* Right: LIVE Badge */}
        <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-[#22C55E] text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
          </span>
          LIVE
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-10">
        {[
          {
            title:
              "Customer TechCorp engagement increased 300% - Analytics module opportunity detected",
            tag: "Revenue Opportunity",
            score: "89%",
            img: "/images/recentframe1.png",
          },
          {
            title:
              "Project Alpha budget variance detected across 3 systems - client communication recommended",
            tag: "Risk Prevention",
            score: "18%",
            img: "/images/recentframe1.png",
          },
          {
            title:
              "Support ticket patterns suggest training need for GlobalCorp - account manager coordination required",
            tag: "Customer Success",
            score: "56%",
            img: "/images/recentframe1.png",
          },
        ].map((insight, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg border border-gray-200 p-4 flex justify-between items-start shadow-sm"
          >
            {/* Left: image + text */}
            <div className="flex items-start space-x-4">
              <Image
                src={insight.img}
                alt={insight.title}
                width={40}
                height={40}
                className="rounded-md"
              />
              <div className="mb-4">
                <p className="text-sm text-gray-700 mb-4">{insight.title}</p>
                <span className="px-3 py-2 text-xs rounded-md border border-gray-300 font-medium">
                  {insight.tag}
                </span>
              </div>
            </div>

            {/* Right: insight score */}
            <span className="px-2 py-1 mt-10 rounded-md text-sm font-sm bg-green-100 text-[#19BA95]">
              {insight.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
