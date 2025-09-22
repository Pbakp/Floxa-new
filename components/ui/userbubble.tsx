"use client";
import { motion } from "framer-motion";

export default function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        className="max-w-[640px] rounded-[12px] border border-gray-200 bg-white text-gray-700 shadow-sm px-4 py-3 text-[13px] leading-[20px]"
      >
        {children}
      </motion.div>
    </div>
  );
}

