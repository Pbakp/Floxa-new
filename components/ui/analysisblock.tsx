// Define AnalysisMessage type if not imported from elsewhere
type AnalysisMessage = {
  data: {
    budget: string;
    timeline: string;
    compliance: string;
    scope: string;
    risk: string;
  };
};

export default function AnalysisBlock({
  data,
}: {
  data: AnalysisMessage["data"];
}) {
  return (
    <div className="w-full max-w-[640px] rounded-xl border border-gray-200 shadow p-4 space-y-3">
      <h3 className="text-[14px] font-semibold text-[#635BFF]">
        Contract Analysis Complete
      </h3>
      <p className="text-[12px] text-gray-600">
        TechCrop Healthcare IT Platform
      </p>

      <div className="grid grid-cols-2 gap-3 mt-3">
        <div className="rounded-lg border p-3">
          <p className="text-[12px] font-medium text-gray-500">BUDGET</p>
          <p className="text-[13px] font-semibold text-gray-900">
            {data.budget}
          </p>
        </div>
        <div className="rounded-lg border p-3">
          <p className="text-[12px] font-medium text-gray-500">TIMELINE</p>
          <p className="text-[13px] font-semibold text-gray-900">
            {data.timeline}
          </p>
        </div>
        <div className="rounded-lg border p-3">
          <p className="text-[12px] font-medium text-gray-500">COMPLIANCE</p>
          <p className="text-[13px] font-semibold text-gray-900">
            {data.compliance}
          </p>
        </div>
        <div className="rounded-lg border p-3">
          <p className="text-[12px] font-medium text-gray-500">SCOPE</p>
          <p className="text-[13px] font-semibold text-gray-900">
            {data.scope}
          </p>
        </div>
      </div>

      <div className="rounded-lg bg-[#635BFF] p-3 text-white mt-2">
        <p className="text-[12px] font-medium">RISK ASSESSMENT</p>
        <p className="text-[13px] font-semibold">{data.risk}</p>
      </div>

      <div className="flex items-center gap-2 text-[12px] text-gray-600">
        <span className="w-2 h-2 rounded-full bg-green-500" />
        Analysis Complete
      </div>
    </div>
  );
}
