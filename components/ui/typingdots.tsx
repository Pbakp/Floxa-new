export default function TypingDots() {
  return (
    <div className="flex items-center gap-1">
      <span className="sr-only">Floxa is typing</span>
      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:120ms]" />
      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:240ms]" />
    </div>
  );
}
