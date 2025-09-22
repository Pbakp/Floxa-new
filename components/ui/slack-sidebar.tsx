"use client";

import Image from "next/image";
import { MoreHorizontal, Plus } from "lucide-react";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

type SlackItem = {
  label: string;
  image?: string;
  isFloxa?: boolean;
  icon?: any;
};

interface SlackSidebarProps {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export default function SlackSidebar({ activeIndex, setActiveIndex }: SlackSidebarProps) {
  const navItems: SlackItem[] = [
    { label: "Home", image: "/images/home.png" },
    { label: "DMs", image: "/images/chat.png" },
    { label: "Activity", image: "/images/activity.png" },
    { label: "Later", image: "/images/save.png" },
    { label: "Floxa", image: "/images/floxa_image.png", isFloxa: true },
    { label: "More", icon: MoreHorizontal },
  ];

  return (
    <div className="flex flex-col items-center justify-between bg-gradient-to-b from-[#611f69] to-[#3f0e40] h-[90.5vh] w-16 pt-3 pb-6">
      {/* Top Logo */}
      <div className="flex flex-col items-center gap-1">
        <div className="bg-white rounded-md p-1">
          <Image
            src="/images/slack-active.png"
            alt="Slack"
            width={24}
            height={24}
            className="rounded"
          />
        </div>

        {/* Menu Icons */}
        <div className="flex flex-col items-center gap-3 mt-4 text-white/90">
          {navItems.map((item, i) => {
            const isActive = i === activeIndex;

            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="flex flex-col items-center gap-1"
              >
                <div
                  className={`
                    p-2 rounded-md transition
                    ${isActive
                      ? item.isFloxa
                        ? "bg-white/20 text-white"
                        : "bg-white/20 text-white"
                      : "text-gray-400 hover:bg-white/20"
                    }
                  `}
                >
                  {item.icon ? (
                    <item.icon size={20} />
                  ) : (
                    <Image
                      src={
                        isActive && item.isFloxa
                          ? "/images/brandmark.png" // active Floxa logo
                          : item.image!
                      }
                      alt={item.label}
                      width={18}
                      height={18}
                      className={`object-contain ${isActive && item.isFloxa ? "rounded-full" : ""
                        }`}
                    />
                  )}
                </div>
                <span
                  className={`text-[11px] ${isActive ? "text-white" : "text-white/70"
                    }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="flex flex-col items-center gap-4 pb-2">
        <button className="w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full">
          <Plus size={18} className="text-white" />
        </button>

        <div className="relative w-8 h-8 rounded-md border-2 border-[#3f0e40] overflow-hidden">
          <Image
            src="/images/profile.png"
            alt="User"
            width={32}
            height={32}
            className="object-cover"
          />
          <span className="absolute bottom-0 right-0 block w-2.5 h-2.5 bg-green-500 border-2 border-[#3f0e40] rounded-full"></span>
        </div>
      </div>
    </div>
  );
}
