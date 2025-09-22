import { SmilePlus } from "lucide-react";
import Image from "next/image";

interface Props {
  sender: string;
  time: string;
  message: string;
  avatar: string;
  reactions?: { emoji: string; count: number; isImage?: boolean }[];
  showAddReaction?: boolean;
}

export default function SlackMessage({
  sender,
  time,
  message,
  avatar,
  reactions,
  showAddReaction = false,
}: Props) {
  return (
    <div className="flex gap-3 px-4 py-2 hover:bg-gray-50 items-start">
      <div className="relative w-[32px] h-[32px] mt-1.5">
        <Image
          src={avatar}
          alt={sender}
          fill
          className="rounded-md object-cover"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline gap-2">
          <span className="font-semibold text-gray-900">{sender}</span>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-gray-800 text-sm">{message}</p>

        {/* Reactions */}
        {(reactions?.length || showAddReaction) && (
          <div className="flex gap-1 mt-1">
            {reactions?.map((r, i) => (
              <div
                key={i}
                className="flex items-center gap-1 text-sm border rounded-full px-2 py-0.5 bg-gray-50"
              >
                {r.isImage ? (
                  <Image
                    src={r.emoji}
                    alt="reaction"
                    width={16}
                    height={16}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <span>{r.emoji}</span>
                )}
                <span className="text-gray-500">{r.count}</span>
              </div>
            ))}

            {/* Add reaction icon */}
            {showAddReaction && (
              <div className="flex items-center justify-center border rounded-full px-2 py-0.5 bg-gray-50 cursor-pointer hover:bg-gray-100">
                <SmilePlus size={14} className="text-gray-600" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
