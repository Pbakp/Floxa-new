"use client";
import AvatarWithStatus from "@/components/ui/status";
import { ChevronDown, ChevronRight, SquarePen, ListFilter } from "lucide-react";
import { useState } from "react";

const pinned = [
  {
    name: "Ray Tanaka",
    msg: "Louisa will send the initial...",
    time: "1:47 PM",
    status: "online",
    avatar: "/images/avatar1.png",
    unread: true,
  },
  {
    name: "Beth Davis",
    msg: "Thanks. That would be nice.",
    time: "1:43 PM",
    status: "online",
    avatar: "/images/avatar2.png",
  },
  {
    name: "Kayo Miwa",
    msg: "I reviewed with the client...",
    time: "Yesterday",
    status: "online",
    avatar: "/images/avatar3.png",
  },
];

const recent = [
  {
    name: "Emiliano Ceballos",
    msg: "😊😊😊😊",
    time: "1:55 PM",
    status: "online",
    avatar: "/images/avatar4.png",
    unread: true,
  },
  {
    name: "Marie Beaudouin",
    msg: "Sounds good!",
    time: "1:00 PM",
    status: "online",
    avatar: "/images/avatar2.png",
  },
  {
    name: "Oscar Krogh",
    msg: "Nice! Thanks! Here are other...",
    time: "11:02 AM",
    status: "online",
    avatar: "/images/avatar3.png",
  },
  {
    name: "Daichi Fukuda",
    msg: "Do you think the other one...",
    time: "10:43 AM",
    status: "online",
    avatar: "/images/avatar1.png",
  },
  {
    name: "Kayo Miwa",
    msg: "I reviewed with the client...",
    time: "Yesterday",
    status: "online",
    avatar: "/images/avatar3.png",
  },
  {
    name: "Marie Beaudouin",
    msg: "Sounds good!",
    time: "1:00 PM",
    status: "online",
    avatar: "/images/avatar2.png",
  },
];

export default function TeamsChatList() {
  const [open, setOpen] = useState(true);
  const [showPinned, setShowPinned] = useState(true);
  const [showRecent, setShowRecent] = useState(true);

  // Chat Row

  const ChatRow = ({ c }: { c: any }) => (
    <div className="ml-3 px-3 py-2 flex items-center hover:bg-gray-100 cursor-pointer">
      {/* Unread dot + Avatar */}
      <div className="flex items-center">
        {c.unread && (
          <span className="w-1.5 h-1.5 bg-black rounded-full -ml-3 mr-2"></span>
        )}
        <AvatarWithStatus
          src={c.avatar}
          alt={c.name}
          status={c.status as any}
        />
      </div>

      {/* Name + message */}
      <div className="flex-1 min-w-0 ml-3">
        {/* Name + Time */}
        <div className="flex items-center justify-between">
          <p
            className={`truncate min-w-0 ${
              c.unread ? "font-bold text-gray-900" : "font-medium text-gray-500"
            }`}
          >
            {c.name}
          </p>
          <span className="ml-2 flex-shrink-0 text-[11px] text-gray-400">
            {c.time}
          </span>
        </div>

        {/* Message */}
        <p
          className={`truncate ${
            c.unread ? "font-semibold text-gray-900" : "text-gray-500"
          }`}
        >
          {c.msg}
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-72 border-r border-gray-200 bg-white flex flex-col text-[13px]">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center space-x-1 text-base font-semibold text-gray-800"
        >
          <span>Chat</span>
          {open ? (
            <ChevronDown size={16} className="text-[#242424]" />
          ) : (
            <ChevronRight size={16} className="text-[#242424]" />
          )}
        </button>
        <div className="flex space-x-3">
          <button className="text-[#242424] hover:text-gray-800">
            <ListFilter size={18} />
          </button>
          <button className="text-[#242424] hover:text-gray-800">
            <SquarePen size={18} />
          </button>
        </div>
      </div>

      {open && (
        <>
          {/* Pinned Toggle */}
          <button
            onClick={() => setShowPinned(!showPinned)}
            className="flex items-center space-x-1 px-3 pt-2 text-xs font-medium text-gray-500 hover:text-gray-800"
          >
            {showPinned ? (
              <img
                src="/images/triangle.png"
                width={11}
                height={11}
                alt="Collapse"
              />
            ) : (
              <ChevronRight size={14} className="text-gray-800" />
            )}
            <span>Pinned</span>
          </button>

          {showPinned && pinned.map((c, i) => <ChatRow key={i} c={c} />)}

          {/* Recent Toggle */}
          <button
            onClick={() => setShowRecent(!showRecent)}
            className="flex items-center space-x-1 px-3 pt-2 text-xs font-medium text-gray-500 hover:text-gray-800"
          >
            {showRecent ? (
              <img
                src="/images/triangle.png"
                width={11}
                height={11}
                alt="Collapse"
              />
            ) : (
              <ChevronRight size={14} className="text-gray-800" />
            )}
            <span>Recent</span>
          </button>

          {showRecent && recent.map((c, i) => <ChatRow key={i} c={c} />)}
        </>
      )}
    </div>
  );
}
