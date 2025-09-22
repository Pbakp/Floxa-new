"use client";

import Image from "next/image";
import {
  Bell,
  MessageSquare,
  Users,
  CalendarDays,
  Phone,
  File,
  MoreHorizontal,
  SquarePlus,
} from "lucide-react";
import { useState, Dispatch, SetStateAction } from "react";

interface SidebarProps {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

type NavItem = {
  icon?: any;
  image?: string;
  label: string;
  badge?: number;
};

export default function Sidebar({ activeIndex, setActiveIndex }: SidebarProps) {
  const navItems: NavItem[] = [
    { icon: Bell, label: "Activity" },
    { icon: MessageSquare, label: "Chat", badge: 2 },
    { icon: Users, label: "Teams" },
    { icon: CalendarDays, label: "Calendar" },
    { image: "/images/floxa.png", label: "Floxa" },
    { icon: Phone, label: "Calls" },
    { icon: File, label: "Files" },
    { image: "/images/contoso.png", label: "Contoso" },
    { icon: MoreHorizontal, label: "" },
    { icon: SquarePlus, label: "Apps" },
  ];

  return (
    <div
      className="w-20 bg-white border-r flex flex-col items-center py-2 space-y-2 overflow-y-auto overflow-x-hidden"
      style={{
        height: "calc(100vh - 100px)",
        scrollbarWidth: "thin",
        scrollbarColor: ""
      }}
    >
      {navItems.map((item, i) => {
        const isActive = i === activeIndex;
        const isFloxa = item.label === "Floxa";

        return (
          <div key={i} className="relative flex flex-col items-center">
            <button
              onClick={() => setActiveIndex(i)}
              className={`
                w-16 h-14 flex flex-col items-center justify-center transition
                ${isActive
                  ? isFloxa
                    ? "text-[#2ECFB6] border-l-4 border-[#2ECFB6]"
                    : "text-[#5B5FC7] border-l-4 border-[#5B5FC7]"
                  : "text-gray-500"
                }
              `}
            >
              {item.icon ? (
                <item.icon size={18} />
              ) : (
                <Image
                  src={
                    isActive && isFloxa ? "/images/brandmark.png" : item.image!
                  }
                  alt={item.label}
                  width={19}
                  height={19}
                  className={`${isActive && isFloxa ? "rounded-full" : ""}`}
                />
              )}
              <span className="mt-1 text-[11px] leading-tight">
                {item.label}
              </span>
            </button>

            {/* Badge */}
            {item.badge && (
              <span className="absolute top-1 right-2 bg-red-600 text-white text-[11px] font-semibold px-1.5 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
