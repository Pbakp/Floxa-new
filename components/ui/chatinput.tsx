"use client";


import Rest from "@/app/icons/Rest.svg";
import Rest1 from "@/app/icons/Rest-1.svg";
import Rest2 from "@/app/icons/Rest-2.svg";
import Rest3 from "@/app/icons/Rest-3.svg";
import Rest4 from "@/app/icons/Rest-4.svg";
import Rest5 from "@/app/icons/Rest-5.svg";
import Rest6 from "@/app/icons/Rest-6.svg";
import Rest7 from "@/app/icons/Rest-7.svg";
import Rest8 from "@/app/icons/Rest-8.svg";
import Rest9 from "@/app/icons/Rest9.svg";

export default function ChatInput() {
  return (
    <div className="border-t border-gray-200 px-4 py-3 bg-white sticky bottom-0">
      <div className="max-w-4xl mx-auto w-full ">
        {/* Input box */}
        <input
          type="text"
          placeholder="Type a new message"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
        />

        {/* Icons row */}
        <div className="flex items-center justify-between mt-2">
          {/* Left icons */}
          <div className="flex items-center space-x-1 text-gray-600">
            <Rest className="w-8 h-8  cursor-pointer" />
            <Rest1 className="w-8 h-8 cursor-pointer" />
            <Rest2 className="w-8 h-8 cursor-pointer" />
            <Rest3 className="w-8 h-8 cursor-pointer" />
            <Rest4 className="w-8 h-8 cursor-pointer" />
            <Rest5 className="w-8 h-8 text-gray-600 cursor-pointer" />
            <Rest6 className="w-8 h-8 cursor-pointer" />
            <Rest7 className="w-8 h-8 text-gray-600 cursor-pointer" />
            <Rest8 className="w-8 h-8 cursor-pointer" />
            
          </div>

          {/* Right send button */}
           <Rest9 className="w-8 h-8 cursor-pointer text-gray-700 " />
        </div>
      </div>
    </div>
  );
}