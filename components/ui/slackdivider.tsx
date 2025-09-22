import { ChevronDown } from "lucide-react";

export default function SlackDayDivider({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center my-4">
      <div className="border-t border-gray-300 flex-grow" />
      <span className="flex inline mx-2 text-sm text-black bg-white px-2 rounded-full border">
        {text} <ChevronDown size={14} className="ml-1 mt-1" />
      </span>
      <div className="border-t border-gray-300 flex-grow" />
    </div>
  );
}
