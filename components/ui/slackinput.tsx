import {
  Bold,
  Italic,
  Strikethrough,
  Link,
  List,
  ListOrdered,
  Code,
  Smile,
  AtSign,
  Paperclip,
  Video,
  Mic,
  SquarePen,
  Send,
  AlignLeft,
  FileCode2,
  Plus,
  CaseSensitive,
  SquareSlash,
  SendHorizontal,
  ChevronDown,
} from "lucide-react";

export default function SlackInput() {
  return (
    <div className="pr-8 pl-8 pt-4 pb-1">
      <div className="border border-gray-200 rounded-md bg-white shadow-sm">
        {/* --- Top formatting toolbar --- */}
        <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 border-b border-gray-200 text-gray-400 rounded-t-md">
          <Bold className="w-4 h-4 cursor-pointer" />
          <Italic className="w-4 h-4 cursor-pointer" />
          <Strikethrough className="w-4 h-4 cursor-pointer" />
          {/* Vertical line */}
          <div className="w-px h-5 bg-gray-300" />
          <Link className="w-4 h-4 cursor-pointer" />
          {/* Vertical line */}
          <div className="w-px h-5 bg-gray-300" />
          <List className="w-4 h-4 cursor-pointer" />
          <ListOrdered className="w-4 h-4 cursor-pointer" />
          {/* Vertical line */}
          <div className="w-px h-5 bg-gray-300" />
          <AlignLeft className="w-4 h-4 cursor-pointer" />
          <div className="w-px h-5 bg-gray-300" />
          <Code className="w-4 h-4 cursor-pointer" />
          <FileCode2 className="w-4 h-4 cursor-pointer" />
        </div>

        {/* --- Middle input field --- */}
        <div className="px-1 py-1">
          <input
            type="text"
            placeholder="Message @ product-team"
            className="w-full  px-3 py-2 text-sm outline-none text-gray-800 placeholder-gray-500"
          />
        </div>

        {/* --- Bottom toolbar --- */}
        <div className="flex items-center justify-between px-3 py-2 text-gray-500 border-t border-gray-200 rounded-b-md">
          {/* Left icons */}
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full">
              <Plus size={18} className="text-[#7C838F]" />
            </button>
            <img
              src="/images/format.png"
              alt="format"
              className="w-5 h-5 cursor-pointer"
            />
            <Smile className="w-5 h-5 cursor-pointer" />
            <AtSign className="w-5 h-5 cursor-pointer" />
            <div className="w-px h-5 bg-gray-300" />

            <Video className="w-5 h-5 cursor-pointer" />
            <Mic className="w-5 h-5 cursor-pointer" />
            <div className="w-px h-5 bg-gray-300" />
            <SquareSlash className="w-5 h-5 cursor-pointer" />
          </div>

          {/* Send icon on right */}
          <div className="flex items-center gap-1">
            <SendHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" />
            <div className="w-px h-5 bg-gray-300" />
            <ChevronDown className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
