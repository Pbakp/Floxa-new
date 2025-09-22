"use client";
import { Mic, Search, Send, RefreshCw, Sparkles, Link } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function InputBar({
  input,
  setInput,
  onSend,
  busy,
  chips,
  onChipClick,
  suggestions = [],
  onSuggestionClick,
}: {
  input: string;
  setInput: (v: string) => void;
  onSend: () => void;
  busy: boolean;
  chips: string[];
  onChipClick: (chip: string) => void;
  suggestions?: string[];
  onSuggestionClick?: (suggestion: string) => void;
}) {
  const pathname = usePathname();
  const isCopilot = pathname === "/copilot";

  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const maxWords = 500;
  const wordCount = input.trim() === "" ? 0 : input.trim().split(/\s+/).length;

  // Reset selected index when suggestions change
  useEffect(() => {
    setSelectedSuggestionIndex(-1);
  }, [suggestions]);

  // Show suggestions when user types and suggestions are available
  useEffect(() => {
    if (suggestions.length > 0 && input.trim().length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [suggestions, input]);

  // Handle keyboard navigation (works for both input and textarea)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (suggestions.length === 0) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        onSend();
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setShowSuggestions(true);
        setSelectedSuggestionIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setShowSuggestions(true);
        setSelectedSuggestionIndex((prev) =>
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (selectedSuggestionIndex >= 0 && selectedSuggestionIndex < suggestions.length) {
          const selectedSuggestion = suggestions[selectedSuggestionIndex];
          setInput(selectedSuggestion);
          onSuggestionClick?.(selectedSuggestion);
          setSelectedSuggestionIndex(-1);
          setShowSuggestions(false);
        } else {
          onSend();
        }
        break;
      case "Escape":
        setSelectedSuggestionIndex(-1);
        setShowSuggestions(false);
        break;
    }
  };

  // Render COPILOT styled (textarea) input
  if (isCopilot) {
    return (
      <div className="p-4 ml-[52px] bg-white/80 backdrop-blur-sm sticky bottom-0 border-gray-200 z-30">
        <div className="flex justify-center">
          <div className="w-full max-w-[900px] 2xl:max-w-[1200px] relative">
            {/* Large textarea container */}
            <div className="relative">
              <textarea
                ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                rows={5}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => {
                  if (suggestions.length > 0 && input.trim().length > 0) {
                    setShowSuggestions(true);
                  }
                }}
                onBlur={() => {
                  // Delay hiding to allow clicking on suggestions
                  setTimeout(() => setShowSuggestions(false), 150);
                }}
                placeholder=" A whole new way to work."
                className="w-full min-h-[110px] resize-none rounded-lg border-2 border-gray-200 focus:border-blue-400 focus:ring-0 p-4 pr-12 text-sm outline-none"
              />

              {/* Word count (top-left inside textarea area) */}
              <div className="absolute left-4 top-2  text-xs text-gray-400 pointer-events-none">
                {wordCount}/{maxWords}
              </div>

              {/* Bottom-left icons inside textarea */}
              <div className="absolute left-3 bottom-3 flex items-center gap-3 text-black">
                <button className="p-1 hover:text-blue-600" title="Magic">
                  <Sparkles size={18} />
                </button>
                <button className="p-1 hover:text-blue-600" title="Attach link">
                  <Link size={18} />
                </button>
                <button
                  className="p-1 hover:text-blue-600"
                  title="Refresh"
                  onClick={() => {
                    // full page refresh
                    if (typeof window !== "undefined") window.location.reload();
                  }}
                >
                  <RefreshCw size={18} />
                </button>
              </div>

              {/* Send icon (bottom-right inside textarea) */}
              <button
                onClick={onSend}
                disabled={busy}
                className="absolute right-3 bottom-3 bg-transparent p-2 rounded-full hover:bg-gray-100 disabled:opacity-60"
                aria-label="Send"
                title="Send"
              >
                <Send size={18} />
              </button>
            </div>

            {/* Popup Suggestions (above the textarea) */}
            {suggestions.length > 0 && showSuggestions && (
              <div className="absolute left-0 right-0 -mb-1 bottom-full mb-2 bg-white border border-gray-200 rounded-[10px] shadow-lg z-50 max-h-60 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onMouseDown={(ev) => {
                      // Use onMouseDown to avoid blur before click
                      ev.preventDefault();
                      setInput(suggestion);
                      onSuggestionClick?.(suggestion);
                      setSelectedSuggestionIndex(-1);
                      setShowSuggestions(false);
                      // focus back to textarea
                      (inputRef.current as HTMLTextAreaElement | null)?.focus();
                    }}
                    className={`w-full text-left px-4 py-3 text-[13px] transition-colors last:rounded-b-[10px] ${selectedSuggestionIndex === index
                      ? "bg-blue-100 text-blue-800"
                      : "hover:bg-gray-50 text-gray-700"
                      }`}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Chips under textarea */}
        {chips.length > 0 && (
          <div className="mt-3 flex gap-2 flex-wrap">
            {chips.map((chip) => (
              <button
                key={chip}
                onClick={() => onChipClick(chip)}
                className="px-3 py-1 rounded-md border bg-gray-50 hover:bg-gray-100 text-[12px]"
              >
                {chip}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Default (existing) compact input layout for other routes
  return (
    <div className="p-4 space-y-3 border-t border-gray-200 bg-white/80 backdrop-blur-sm sticky bottom-0">
      <div className="flex items-center gap-2 relative">
        <div className="flex-1 flex items-center gap-2 border rounded-[10px] px-3 py-2 bg-white">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            placeholder="Ask about any customer, project, or team activity , click ↓ for suggestions"
            className="flex-1 outline-none text-[13px] placeholder:text-gray-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (suggestions.length > 0 && input.trim().length > 0) {
                setShowSuggestions(true);
              }
            }}
            onBlur={() => {
              // Delay hiding to allow clicking on suggestions
              setTimeout(() => setShowSuggestions(false), 150);
            }}
          />
          <Mic className="w-5 h-5 text-gray-500 cursor-pointer mr-1" />
          <button
            onClick={onSend}
            disabled={busy}
            className="disabled:opacity-60 bg-[#635BFF] hover:bg-[#635BFF] text-white px-3 py-2 rounded-md inline-flex items-center gap-1"
          >
            <Send className="w-4 h-4" />
            <span className="text-[12px]">Send</span>
          </button>
        </div>

        {/* Popup Suggestions */}
        {suggestions.length > 0 && showSuggestions && (
          <div className="absolute bottom-full left-0 right-0 mb-1 bg-white border border-gray-200 rounded-[10px] shadow-lg z-50 max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onMouseDown={(ev) => {
                  ev.preventDefault();
                  setInput(suggestion);
                  onSuggestionClick?.(suggestion);
                  setSelectedSuggestionIndex(-1);
                  setShowSuggestions(false);
                  (inputRef.current as HTMLInputElement | null)?.focus();
                }}
                className={`w-full text-left px-4 py-3 text-[13px] transition-colors last:rounded-b-[10px] ${selectedSuggestionIndex === index
                  ? "bg-blue-100 text-blue-800"
                  : "hover:bg-gray-50 text-gray-700"
                  }`}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Chips */}
      {chips.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {chips.map((chip) => (
            <button
              key={chip}
              onClick={() => onChipClick(chip)}
              className="px-3 py-1 rounded-md border bg-gray-50 hover:bg-gray-100 text-[12px]"
            >
              {chip}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}