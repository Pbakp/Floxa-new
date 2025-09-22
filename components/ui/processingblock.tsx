import { Step } from "@/types/messages";
import { Check } from "lucide-react";

export default function ProcessingBlock({ steps }: { steps: Step[] }) {
  return (
    <div className="space-y-4 mt-1">
      <p className="font-medium text-[13px] text-gray-900">Processing...</p>
      <div className="space-y-4">
        {steps.map((step, i) => (
          <div key={i} className="space-y-1">
            <div className="flex items-center gap-2">
              {step.completed ? (
                <Check className="w-4 h-4 bg-[#635BFF] text-white rounded-full p-[2px]" />
              ) : (
                <div className="w-4 h-4 rounded-full border border-gray-400" />
              )}
              <p className="text-[13px] text-gray-800 font-medium">{step.label}</p>
            </div>
            <div className="min-w-[220px] max-w-[380px] w-full bg-gray-200 rounded-full h-1.5">
              <div
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  step.completed ? "bg-[#635BFF] w-full" : "bg-[#635BFF] w-8"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
