"use client";

import { ChevronDown, ListFilter, Lock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function WorkspaceSidebar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const menuItems = [
    { id: "threads", label: "Threads", icon: "/images/threads.png" },
    { id: "drafts", label: "Drafts & sent", icon: "/images/drafts.png" },
  ];

  const channels = [
    "slack-implement...",
    "change-approval-...",
    "culture-club",
    "customersuccess",
    "general",
    "slack-workflow...",
    "marketintel",
    "mdc-updates",
    "product-feedback",
    "product-qa",
    "product-support",
  ];

  return (
    <div className="bg-[#D6C4DA] w-56 h-[90.5vh] flex flex-col p-2 text-sm font-normal">
      {/* Workspace Header */}
      <div className="flex items-center justify-between px-2 py-2">
        {/* Left side: Slack + Chevron */}
        <div className="flex items-center gap-1">
          <span className="font-bold text-xl text-[#000000]">Slack</span>
          <ChevronDown
            size={16}
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#000000]"
          />
        </div>

        {/* Right side: extra button */}
        <button className="p-1 rounded hover:bg-white/20">
          <ListFilter size={16} className="text-[#000000]" />
        </button>
      </div>
      <div className="border-b border-[#BCAEC1] my-1"></div>

      {/* Menu */}
      <div className="flex flex-col mt-3 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`flex items-center gap-2 px-2 py-1 rounded transition-colors
              ${
                activeItem === item.id
                  ? "bg-[#350d36] text-white"
                  : "text-[#464446] hover:bg-white/10"
              }`}
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={16}
              height={16}
              className="object-contain"
            />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Channels */}
      <div className="mt-4">
        <p className=" text-[14px]   text-[#464446] px-2">
          <ChevronDown
            size={15}
            onClick={() => setIsOpen(!isOpen)}
            className="inline mr-2"
          />
          Channels
        </p>
        <div
          className={`flex flex-col mt-2 text-[#464446] ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {channels.map((ch, idx) => (
            <button
              key={idx}
              onClick={() => setActiveItem(ch)}
              className={`flex items-center px-2 py-1 rounded text-left transition-colors
                ${
                  activeItem === ch
                    ? "bg-[#350d36] text-white"
                    : "hover:bg-white/10"
                }`}
            >
              <span className="mr-2">#</span> {ch}
            </button>
          ))}

          {/* Locked channel */}
          <button
            onClick={() => setActiveItem("product-team")}
            className={`flex items-center px-2 py-1 rounded transition-colors
              ${
                activeItem === "product-team"
                  ? "bg-[#350d36] text-white"
                  : "hover:bg-white/10"
              }`}
          >
            <Lock size={14} className="mr-2" /> product-team
          </button>
        </div>

        {/* Add channels */}
        <button
          onClick={() => setActiveItem("add-channels")}
          className={`flex items-center px-2 py-1 mt-2 rounded transition-colors
    ${
      activeItem === "add-channels"
        ? "bg-[#350d36] text-white"
        : "text-[#464446] hover:bg-white/10"
    }`}
        >
          + Add channels
        </button>
      </div>
    </div>
  );
}
