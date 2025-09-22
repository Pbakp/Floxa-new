"use client";

import Image from "next/image";
import { MoreHorizontal } from "lucide-react";

interface Reaction {
  src: string;
  count: number;
}

interface ChatMessageProps {
  isUser?: boolean;
  sender?: string;
  time?: string;
  message: string;
  message1?: string;
  file?: string;
  reactions?: Reaction[];
  showAvatar?: boolean; // 👈 new
  showTime?: boolean;   // 👈 new
}

export default function ChatMessage({
  isUser = false,
  sender,
  time,
  message,
  message1,
  file,
  reactions,
  showAvatar = true,
  showTime = true,
}: ChatMessageProps) {
  return (
    <div
      className={`px-4 py-2 flex items-start ${
        isUser ? "justify-start" : "justify-end"
      }`}
    >
      {/* Avatar (only for user on left side) */}
      {isUser && (
        <div className="mr-3">
          {showAvatar ? (
            <div className="w-8 h-8 rounded-full bg-gray-300">
              <Image
                src="/images/avatar2.png"
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </div>
          ) : (
            // 👇 placeholder keeps alignment when avatar is hidden
            <div className="w-8 h-8" />
          )}
        </div>
      )}

      {/* Message Bubble */}
      <div
        className={`max-w-md p-3 rounded-lg text-sm relative ${
          isUser
            ? "bg-[#F5F5F5] text-[#242424] rounded-bl-none"
            : "bg-[#E8EBFA] text-[#242424] rounded-br-none"
        }`}
      >
        {/* Sender + Time + Reactions Row (TOP inside bubble) */}
        {(sender || (showTime && time) || reactions) && (
          <div className="flex items-center justify-between mb-2">
            {/* Sender + Time */}
            <div className="flex items-center space-x-2">
              {sender && (
                <span className="text-xs font-medium text-[#242424]">
                  {sender}
                </span>
              )}
              {showTime && time && (
                <span className="text-xs text-[#424242]">{time}</span>
              )}
            </div>

            {/* Reactions */}
            {reactions && reactions.length > 0 && (
              <div className="flex space-x-2">
                {reactions.map((reaction, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-1  "
                  >
                    <Image
                      src={reaction.src}
                      alt="reaction"
                      width={16}
                      height={16}
                    />
                    <span className="text-xs">{reaction.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Messages */}
        <p>{message}</p>
        {message1 && <p className="mt-1">{message1}</p>}

        {/* Attached File */}
        {file && (
          <div className="mt-2 border rounded-md bg-white text-gray-800 px-3 py-2 font-medium flex items-center">
            {/* Left: Attachment icon and filename */}
            <div className="flex items-center space-x-2">
              <Image
                src="/images/IconContainer (1).png"
                alt="Attachment"
                width={16}
                height={16}
              />
              <span>{file}</span>
            </div>

            {/* Spacer to push the ellipsis icon to the right */}
            <div className="flex-1" />

            {/* Right: Ellipsis (more) icon */}
            <MoreHorizontal className="w-4 h-4 cursor-pointer text-gray-600" />
          </div>
        )}
      </div>
    </div>
  );
}
