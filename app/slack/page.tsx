"use client";

import { useState } from "react";
import SlackSidebar from "@/components/ui/slack-sidebar";
import WorkspaceSidebar from "@/components/ui/worksidebar";
import SlackHeader from "@/components/ui/slackheader";
import SlackMessage from "@/components/ui/slackmessage";
import SlackDayDivider from "@/components/ui/slackdivider";
import SlackInput from "@/components/ui/slackinput";

// Floxa components
import FloxaChatList from "@/components/ui/floxa-chatlist";
import IntelligenceScreen from "@/components/ui/floxa-intelligencechat";
import FloxaChatHeader from "@/components/ui/floxa-chatheader";

export default function SlackLayout() {
  const [activeIndex, setActiveIndex] = useState(0); // default Home

  return (
    <div className="flex">
      <SlackSidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      {/* Floxa Page */}
      {activeIndex === 4 && (
        <div className="flex flex-1">
          <FloxaChatList />
          <div className="flex flex-col flex-1">
            <FloxaChatHeader />
            <div style={{ overflowY: "auto", height: "calc(100vh - 120px)" }}>
              <IntelligenceScreen />
            </div>
          </div>
        </div>
      )}

      {/* Default Slack Page */}
      {activeIndex !== 4 && (
        <>
          <WorkspaceSidebar />
          <div
            className="flex flex-col flex-1 h-full bg-white"
            style={{ overflowY: "auto", height: "calc(100vh - 80px)" }}
          >
            <SlackHeader />
            <div className="flex-1 overflow-y-auto bg-white">
              <SlackMessage
                sender="Jordan"
                time="2:13 PM"
                message="We received a lot of UI feedback from the client again."
                avatar="/images/profile.png"
              />
              <SlackMessage
                sender="Lara"
                time="2:30 PM"
                message="We need to think about how we can improve our current process. The way we
receive feedback from the client is mostly on UI and not the experience. Let’s
make time for a meeting to resolve this issue."
                avatar="/images/lady2.png"
              />
              <SlackMessage
                sender="Jordan"
                time="4:30 PM"
                message="The client wants an update on the progress of the work. We can create a 
prototype to show them tomorrow."
                avatar="/images/profile.png"
              />
              <SlackMessage
                sender="Sarah"
                time="4:45 PM"
                message="I agree. Let’s talk tomorrow."
                avatar="/images/lady2.png"
              />
              <SlackDayDivider text="Today" />
              <SlackMessage
                sender="Jordan"
                time="8:30 AM"
                message="Please send the project file when you get the chance. Thanks"
                avatar="/images/profile.png"
                reactions={[
                  {
                    emoji: "/images/thumb.png",
                    count: 2,
                    isImage: true,
                  },
                ]}
                showAddReaction
              />
            </div>
            <SlackInput />
          </div>
        </>
      )}
    </div>
  );
}
