"use client";

import { useState } from "react";
import {
  PanelRightOpen,
  Phone,
  Video,
  SquareArrowOutUpRight,
  PanelRightClose,
  SquarePlus,
} from "lucide-react";

export default function ChatHeader() {
  const [activeTab, setActiveTab] = useState("Chat");
  const [isOpen, setIsOpen] = useState(false);

  const tabs = ["Chat", "Files", "Organization", "Activity"];

  return (
    <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 bg-white">
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full">
          <img
            src="/images/brandmark.png"
            alt="floxa logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Name + Tabs inline */}
        <div className="flex items-center space-x-6">
          <h2 className="font-semibold text-gray-900">Floxa</h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-1 h-8">
        {/* External Link */}
        <button className="flex items-center justify-center h-full w-9 rounded-md hover:bg-gray-50">
          <SquareArrowOutUpRight className="w-4 h-4 text-[#242424]" />
        </button>

        {/* Phone + Video */}
        <div className="flex items-center border rounded-md h-full overflow-hidden">
          <button className="flex items-center justify-center h-full w-9 hover:bg-gray-50">
            <Phone className="w-5 h-5 text-[#242424]" />
          </button>
          <div className="w-px h-5 bg-gray-300" />
          <button className="flex items-center justify-center h-full w-9 hover:bg-gray-50">
            <Video className="w-5 h-5 text-[#242424]" />
          </button>
        </div>

        {/* Panel Toggle */}
        <div className="flex items-center border rounded-md h-full overflow-hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center h-full w-9 hover:bg-gray-50"
          >
            {isOpen ? (
              <PanelRightClose className="w-4 h-4 text-[#242424]" />
            ) : (
              <PanelRightOpen className="w-4 h-4 text-[#242424]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
