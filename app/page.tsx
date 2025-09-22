"use client";

import { useState } from "react";
import DashboardView from "@/components/ui/dashboard";
import HomeIntelligence from "@/components/ui/home-intelligence";
import FloxaChatList from "@/components/ui/floxa-chatlist";
import IntelligenceScreen from "@/components/ui/floxa-intelligencechat";
import FloxaChatHeader from "@/components/ui/floxa-chatheader";
import Image from "next/image";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<
    "Dashboard" | "Intelligence" | "Floxa"
  >("Dashboard");

  const [isFloxaHovered, setIsFloxaHovered] = useState(false);

  return (
    <main className="max-w-6xl mx-auto mt-8 px-6 pb-10 ">
      {/* Tabs */}
      <div className="inline-flex bg-white border border-gray-200 rounded-md p-1 mb-6">
        {["Dashboard", "Intelligence", "Floxa"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "Dashboard" | "Intelligence" | "Floxa")}
            onMouseEnter={() => tab === "Floxa" && setIsFloxaHovered(true)}
            onMouseLeave={() => tab === "Floxa" && setIsFloxaHovered(false)}
            className={`px-5 py-2 cursor-pointer rounded-md text-sm font-medium transition ${activeTab === tab
              ? `bg-[#F5F5F5] ${tab === "Floxa" ? "text-[#2ECFB6]" : "text-[#717680]"} border border-gray-200`
              : `bg-white ${tab === "Floxa" ? "hover:text-[#2ECFB6]" : "text-[#717680]"}`
              } flex items-center gap-2`}
          >
            {tab === "Floxa" && (
              <Image
                src={activeTab === "Floxa" ? "/images/floxa_image.png" : (!isFloxaHovered ? "/images/floxa.png" : "/images/floxa_image.png")}
                alt="Floxa Icon"
                width={16}
                height={16}
              />
            )}
            {tab}
          </button>
        ))}
      </div>

      {/* Render Active Tab */}
      <div className="flex-1 ">
        {activeTab === "Dashboard" && <DashboardView />}
        {activeTab === "Intelligence" && <HomeIntelligence />}
        {activeTab === "Floxa" && (
          <div className="flex">
            <FloxaChatList />
            <div className="flex flex-col flex-1">
              <FloxaChatHeader />
              <div style={{ overflowY: "auto", height: "calc(100vh - 120px)" }}>
                <IntelligenceScreen />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
