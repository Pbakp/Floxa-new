"use client";
import { ChevronDown, ChevronRight, SquarePen, ListFilter } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
    const [open, setOpen] = useState(true);
  return (
    <div className="w-64 bg-white border-r h-full flex flex-col">
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
      {/* Example Team */}
      <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-teal-500 text-white font-bold">
            F
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">Floxa</div>
            <div className="text-xs text-gray-500">General</div>
          </div>
        </div>
        <div className="text-xs text-gray-500">1:47 PM</div>
      </div>
    </div>
  );
}
