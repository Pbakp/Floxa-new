"use client";
import { ChevronDown, Pin } from "lucide-react";
import Image from "next/image";

export default function SlackHeader() {
  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
        {/* Left */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-black font-semibold">
            <img
              src="/images/lock.png"
              alt="lock"
              width={16}
              className="text-black"
            />
            <span>product-team</span>
            <ChevronDown className="w-4 h-4 text-black" />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1 h-9">
          {/* Avatars box */}
          <div className="flex items-center border border-gray-300 rounded-md px-2 h-full">
            <div className="flex items-center gap-1">
              <Image
                src="/images/lady3.png"
                alt="avatar"
                width={22}
                height={22}
                className="rounded-md border"
              />
              <Image
                src="/images/lady2.png"
                alt="avatar"
                width={22}
                height={22}
                className="rounded-md border"
              />
              <Image
                src="/images/lady3.png"
                alt="avatar"
                width={22}
                height={22}
                className="rounded-md border"
              />
              <span className="text-sm text-gray-500">4</span>
            </div>
          </div>

          {/* Headphone + Chevron box */}
          <div className="flex items-center border border-gray-300 rounded-md h-full">
            <div className="p-1.5 cursor-pointer hover:bg-gray-100 flex items-center">
              <img
                src="/images/headphone.png"
                alt="add"
                className="w-4 h-4 text-gray-600"
              />
            </div>

            {/* Vertical line */}
            <div className="w-px h-5 bg-gray-300" />

            <div className="p-1.5 cursor-pointer hover:bg-gray-100 flex items-center">
              <ChevronDown size={16} className="text-gray-600" />
            </div>
          </div>

          {/* Vector icon box */}
          <div className="border border-gray-300 rounded-md h-full flex items-center justify-center px-2 cursor-pointer hover:bg-gray-100">
            <img
              src="/images/vector1.png"
              alt="more"
              className="w-4 h-4 text-gray-600"
            />
          </div>
        </div>
      </div>

      {/* Pinned section */}
      <div className="pt-8 pl-6 pb-2  text-sm text-gray-500 border-b border-gray-200 flex gap-2">
        <Pin size={16} className="text-gray-500 mt-0.5" />
        <span>2 Pinned</span>
        <span>+ Add a bookmark</span>
      </div>
    </>
  );
}
