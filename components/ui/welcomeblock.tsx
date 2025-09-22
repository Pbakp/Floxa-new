import { OptionCard } from "@/types/messages";

export default function WelcomeBlock({
  text,
  options,
  footer,
  onPick,
}: {
  text: string;
  options: OptionCard[];
  footer: string;
  onPick: (title: string) => void;
}) {
  return (
    <div className="space-y-3">
      <p className="text-[13px] font-medium text-gray-900 whitespace-pre-line">{text}</p>
      <div className="grid grid-cols-1 gap-3">
        {options.map((opt) => (
          <button
            key={opt.title}
            onClick={() => onPick(opt.title)}
            className="text-left rounded-[12px] border border-gray-200 p-3 hover:border-violet-400 transition-colors"
          >
            <p className="text-[13px] font-semibold text-gray-900">{opt.title}</p>
            <p className="text-[12px] text-gray-600 mt-0.5">{opt.description}</p>
          </button>
        ))}
      </div>
      <p className="text-[12px] text-gray-600 mt-4">{footer}</p>
    </div>
  );
}
