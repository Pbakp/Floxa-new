"use client";

import Sidebar from "@/components/ui/teams-sidebar";
import ChatInput from "@/components/ui/chatinput";

import TeamsChatList from "@/components/ui/teams-chatlist";
import TeamsChatHeader from "@/components/ui/teams-chatheader";
import TeamsChatBody from "@/components/ui/teams-chatbody";

import FloxaChatList from "@/components/ui/floxa-chatlist";
import IntelligenceScreen from "@/components/ui/floxa-intelligencechat";
import FloxaChatHeader from "@/components/ui/floxa-chatheader";

import { useState } from "react";

export default function ChatPage() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      {/* Floxa Chat */}
      {activeIndex === 4 && (
        <div className="flex flex-1">
          <FloxaChatList />
          {/* Chat container */}
          <div className="flex flex-col flex-1">
            <FloxaChatHeader />

            <div style={{ overflowY: "auto", height: "calc(100vh - 120px)" }}>
              <IntelligenceScreen />
            </div>
          </div>
        </div>
      )}

      {/* Teams Chat */}
      {activeIndex === 1 && (
        <div className="flex flex-1">
          <div style={{ overflowY: "auto", height: "calc(104vh - 102px)" }}>
            <TeamsChatList />
          </div>
          {/* Chat container */}
          <div className="flex flex-col flex-1">
            <TeamsChatHeader />
            <div style={{ overflowY: "auto", height: "calc(100vh - 230px)" }}>
              <TeamsChatBody />
            </div>
            <ChatInput />
          </div>
        </div>
      )}
    </div>
  );
}
