"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link, Send, Sparkles, Bot } from "lucide-react";
import CollapsibleSidebar from "@/components/ui/copilot-sidebar";

// Floxa components
import FloxaChatList from "@/components/ui/floxa-chatlist";
import IntelligenceScreen from "@/components/ui/floxa-intelligencechat";
import FloxaChatHeader from "@/components/ui/floxa-chatheader";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function FloxaSidebar({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  const navItems = [
    { key: "copilot", label: "Copilot", image: "/images/copilot.png" },
    { key: "floxa", label: "Floxa", image: "/images/floxa.png", isFloxa: true },
  ];

  return (
    <div className="w-16 bg-[#FFFFFF] flex flex-col items-center py-4 border-r border-gray-300">
      {navItems.map((item) => {
        const isActive = activeTab === item.key;

        return (
          <button
            key={item.key}
            onClick={() => onTabChange(item.key)}
            className="mb-4 flex flex-col items-center gap-1"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-md transition ${isActive
                ? "bg-gray-200 text-gray-400"
                : "text-gray-400 hover:bg-gray-200"
                }`}
            >
              <Image
                src={
                  isActive && item.isFloxa
                    ? "/images/brandmark.png" // Floxa active brandmark
                    : item.image
                }
                alt={item.label}
                width={22}
                height={22}
                className={`object-contain ${isActive && item.isFloxa ? "rounded-full" : ""
                  }`}
              />
            </div>
            <span
              className={`text-[11px] ${isActive ? "text-[#2ECFB6]" : "text-gray-500"
                }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function CopilotPage() {
  const [text, setText] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [messages, setMessages] = useState<any[]>([]);
  const [started, setStarted] = useState(false);
  const [showFloxaInline, setShowFloxaInline] = useState(false);
  const [floxaInitialFlow, setFloxaInitialFlow] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [activeSidebarTab, setActiveSidebarTab] = useState("floxa");

  const maxWords = 500;
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // Graph data
  const graphData = [
    { time: "9 AM", value: 22 },
    { time: "10 AM", value: 38 },
    { time: "11 AM", value: 48 },
    { time: "12 PM", value: 52 },
    { time: "1 PM", value: 56 },
  ];

  // Chat flow
  const chatFlow = [
    {
      sender: "user",
      text: "Hey, I’ve got a team call at 10 AM and a report due by 3 PM.",
    },
    {
      sender: "bot",
      text: "Got it. I’ll block out time for your call and set a reminder for the report. ",
      graph: true,
    },
  ];

  const handleSend = () => {
    if (started) return;
    setStarted(true);
    setMessages([]);

    chatFlow.forEach((msg, index) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, msg]);
      }, index * 1800);
    });
    setText("");
  };

  // --------------------
  // Embedded Floxa inline in Copilot (when requested)
  // --------------------
  if (showFloxaInline) {
    return (
      <div className="flex h-[90.5vh] overflow-hidden">
        {/* Sidebar (unchanged for copilot) */}
        <div
          className={`transition-[width] duration-300 ${isSidebarOpen ? "w-64" : "w-12"} border-r border-gray-300`}
        >
          <CollapsibleSidebar
            isOpen={isSidebarOpen}
            onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
            onFloxaClick={(title?: string) => {
              // ensure inline floxa remains visible and optionally pass an initial flow
              setShowFloxaInline(true);
              setFloxaInitialFlow(title ?? null);
            }}
          />
        </div>

        {/* Floxa embedded content */}
        <div className="flex flex-1 justify-center px-6">
          <div style={{scrollbarWidth:"none"}} className="w-full overflow-x-auto xl:max-w-[900px] 2xl:max-w-[1200px]  flex flex-col">
            {/* <FloxaChatList /> */}
            <div className="flex flex-col flex-1">
              {/* <FloxaChatHeader /> */}
              <div  style={{ overflowY: "auto", height: "calc(100vh - 60px)",scrollbarWidth: "none" }}>
                <IntelligenceScreen initialFlow={floxaInitialFlow ?? undefined} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --------------------
  // Default Copilot screen
  // --------------------
  return (
    <div className="flex h-[90.5vh] overflow-hidden">
      {/* Sidebar (unchanged for copilot) */}
      <div
        className={`transition-[width] duration-300 ${isSidebarOpen ? "w-64" : "w-12"
          } border-r border-gray-300`}
      >
        <CollapsibleSidebar
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          onFloxaClick={(title?: string) => {
            // open inline floxa; if a specific title was passed start that flow
            setShowFloxaInline(true);
            setFloxaInitialFlow(title ?? null);
          }}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-end items-center bg-white relative overflow-hidden">
        {/* Copilot logo + tagline (only before chat starts) */}
        {!started && (
          <div className="flex flex-col items-center mb-4">
            <Image
              src="/images/copilot-active.png"
              alt="Copilot Logo"
              width={150}
              height={150}
            />
            <h1 className="mt-2 text-lg font-semibold text-gray-800">
              Your Copilot for work
            </h1>
          </div>
        )}

        {/* Messages */}
        <div className="flex flex-col gap-4 px-6 w-[800px] max-w-full mb-4 overflow-y-auto max-h-[60vh]">
          {messages.map((msg, i) => (
            <div key={i} className="flex flex-col">
              <div
                className={`max-w-[70%] px-4 py-2 rounded-lg text-sm ${msg.sender === "user"
                  ? "bg-blue-600 text-white self-end"
                  : "bg-gray-100 text-gray-800 self-start"
                  }`}
              >
                {msg.text}
              </div>

              {/* Chart */}
              {msg.graph && (
                <div className="self-start w-[70%] mt-2 rounded-xl p-0 bg-white">
                  <div className="rounded-xl overflow-hidden bg-gradient-to-t from-blue-100 to-white">
                    <div className="p-3">
                      <ResponsiveContainer width="100%" height={200}>
                        <AreaChart
                          data={graphData}
                          margin={{ top: 10, right: 8, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="areaFill"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#3b82f6"
                                stopOpacity={0.6}
                              />
                              <stop
                                offset="100%"
                                stopColor="#3b82f6"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            strokeOpacity={0.2}
                          />
                          <XAxis
                            dataKey="time"
                            tick={{ fontSize: 12, fill: "#6b7280" }}
                            axisLine={false}
                            tickLine={false}
                          />
                          <Tooltip cursor={{ strokeOpacity: 0.1 }} />
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            fill="url(#areaFill)"
                            activeDot={{ r: 5 }}
                            dot={{ r: 4 }}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input box */}
        <div className="p-6 flex justify-center ">
          <div className="w-[800px] relative">
            <textarea
              rows={6}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full border rounded-lg p-3 pt-2 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder=" A whole new way to work."
            />

            {/* Word count */}
            <span className="absolute left-3 top-10 text-xs text-gray-400">
              {wordCount}/{maxWords}
            </span>

            {/* Buttons row */}
            <div className="absolute left-3 bottom-4 flex items-center gap-3 text-black">
              <button className="p-1 hover:text-blue-600">
                <Sparkles size={20} />
              </button>
              <button className="p-1 hover:text-blue-600">
                <Link size={20} />
              </button>
              {/* Floxa Button */}
            </div>

            {/* Send button */}
            <button
              onClick={handleSend}
              className="absolute right-2 bottom-4 px-3 py-1 text-black hover:text-blue-600 flex items-center gap-1 text-sm"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
