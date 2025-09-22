"use client";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  status?: "online" | "away" | "busy" | "offline";
};

export default function AvatarWithStatus({
  src,
  alt,
  status = "offline",
}: Props) {
  const statusColors: Record<string, string> = {
    online: "bg-[#6BB700]",
    away: "bg-yellow-500",
    busy: "bg-red-500",
    offline: "bg-gray-400",
  };

  return (
    <div className="relative">
      {/* Avatar */}
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="rounded-full"
      />

      {/* Status badge */}
      <span
        className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white flex items-center justify-center ${statusColors[status]}`}
      >
        {status === "online" && (
          // White checkmark
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="white"
            className="h-2.5 w-2.5"
          >
            <path d="M6.173 12.414 2.05 8.293l1.414-1.414 2.709 2.709 6.364-6.364 1.414 1.414z" />
          </svg>
        )}
        {status === "away" && (
          // White clock
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="white"
            className="h-2.5 w-2.5"
          >
            <path d="M8 1.333A6.667 6.667 0 1 0 14.667 8 6.675 6.675 0 0 0 8 1.333Zm0 12A5.333 5.333 0 1 1 13.333 8 5.34 5.34 0 0 1 8 13.333Zm.333-8H7v4l3.333 2L11 10.667 8.333 9Z" />
          </svg>
        )}
        {status === "busy" && (
          // White minus
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="white"
            className="h-2.5 w-2.5"
          >
            <rect x="3" y="7" width="10" height="2" rx="1" />
          </svg>
        )}
      </span>
    </div>
  );
}
