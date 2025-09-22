"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BotBubble({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "card";
}) {
  return (
    <div className="flex items-start w-full">
      <Image
        src="/images/brandmark.png"
        alt="Floxa Logo"
        width={36}
        height={36}
        className="rounded-full mr-3"
      />
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        className={
          variant === "default"
            ? "w-full rounded-[12px] border border-gray-200 bg-white shadow-sm px-4 py-4 text-[13px] leading-[20px] text-gray-800 whitespace-pre-line"
            : "w-full"
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
