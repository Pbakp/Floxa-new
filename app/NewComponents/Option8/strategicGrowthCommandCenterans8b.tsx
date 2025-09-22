"use client";

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const StrategicGrowthCommandCenterAns8b = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFirst(true), 500);
    const timer2 = setTimeout(() => setShowSecond(true), 1000);
    const timer3 = setTimeout(() => setShowThird(true), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Chart data
  const revenueData = [
    { quarter: "Q1 2024", projected: 85, baseline: 82 },
    { quarter: "Q2 2024", projected: 95, baseline: 88 },
    { quarter: "Q3 2024", projected: 115, baseline: 100 },
    { quarter: "Q4 2024", projected: 135, baseline: 115 },
    { quarter: "Q1 2025", projected: 155, baseline: 125 },
    { quarter: "Q2 2025", projected: 165, baseline: 135 },
  ];

  const marketShareData = [
    { name: "GrowthTech (Us)", value: 35, color: "#8B5CF6" },
    { name: "Microsoft Copilot", value: 25, color: "#EF4444" },
    { name: "Salesforce Einstein", value: 20, color: "#F97316" },
    { name: "Others", value: 20, color: "#6B7280" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-3 bg-white rounded-lg shadow-lg py-2">
      {/* Introduction Message */}
      <div
        className={`mb-8 transform transition-all duration-700 ease-out ${showFirst ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Strategic Growth Analytics
        </h2>
      </div>

      {/* Charts Row - Left: Revenue Growth, Right: Market Position */}
      <div
        className={`mb-8 transform transition-all duration-700 ease-out ${showSecond ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Growth Forecast Chart */}
          <div className="bg-white rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Revenue Growth Forecast
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Strategic Growth Impact on Revenue
            </p>

            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-3 border-2 bg-blue-100 border-[#3B82F6] "></div>
                <span className="text-xs text-gray-600">Projected ARR ($M)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-3 border-2 border-dashed bg-gray-100 border-[#9CA3AF] "></div>
                <span className="text-xs text-gray-600">Baseline Forecast</span>
              </div>

            </div>


            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={revenueData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="quarter"
                    tick={{ fontSize: 12, fill: "#6b7280" }}
                    axisLine={{ stroke: "#d1d5db" }}
                    tickLine={{ stroke: "#d1d5db" }}
                  />
                  <YAxis
                    domain={[75, 175]}
                    tick={{ fontSize: 12, fill: "#6b7280" }}
                    axisLine={{ stroke: "#d1d5db" }}
                    tickLine={{ stroke: "#d1d5db" }}
                    label={{
                      value: "Annual Recurring Revenue ($M)",
                      angle: -90,
                      position: "insideLeft",
                      style: {
                        textAnchor: "middle",
                        fill: "#6b7280",
                        fontSize: 12,
                      },
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      fontSize: "12px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="projected"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                    name="Projected ARR ($M)"
                  />
                  <Line
                    type="monotone"
                    dataKey="baseline"
                    stroke="#9CA3AF"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: "#9CA3AF", strokeWidth: 2, r: 3 }}
                    name="Baseline Forecast"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Competitive Market Position Chart */}
          <div className="bg-white rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Competitive Market Position
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Enterprise AI Platform Market Share
            </p>

            <div className="h-80 flex items-center justify-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={marketShareData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {marketShareData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      fontSize: "12px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              {/* Center text for donut chart */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">35%</div>
                  <div className="text-sm text-gray-600">GrowthTech</div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {marketShareData.map((entry, index) => (
                <div key={index} className="flex  items-center space-x-2">
                  <div
                    className="w-6 h-2 "
                    style={{ backgroundColor: entry.color }}
                  ></div>
                  <span className="text-xs text-gray-700">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Customer Segmentation Performance Section */}
      <div
        className={`transform transition-all duration-700 ease-out ${showThird ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <div className="bg-white rounded-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            Customer Segmentation Performance
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {/* Enterprise Card */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className=" flex flex-col items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">
                  Enterprise
                </span>

                <div className="text-xs text-gray-600 mb-1">$2.1M avg LTV</div>
                <div className="text-xs text-blue-600">95% retention</div>
              </div>


            </div>

            {/* Mid-Market Card */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className=" flex flex-col items-center justify-center">
                <span className="text-green-600 font-bold text-xl">
                  Mid-Market
                </span>

                <div className="text-xs text-gray-600 mb-1">$450K avg LTV</div>
                <div className="text-xs text-green-600">40% expansion</div>
              </div>

            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className=" flex flex-col items-center justify-center">
                <span className="text-gray-600 font-bold text-xl">
                  Healthcare
                </span>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <div className="text-xs text-gray-600 mb-1">
                  3x faster adoption
                </div>
                <div className="text-xs text-gray-600">
                  67% higher conversion
                </div>
              </div>
            </div>

            {/* Financial Services Card */}
            <div className="bg-white  rounded-lg overflow-hidden">
              <div className=" flex flex-col items-center justify-center">
                <span className="text-purple-600 font-bold text-xl">
                  Financial Services
                </span>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <div className="text-xs text-gray-600 mb-1">
                  45% faster cycles
                </div>
                <div className="text-xs   text-gray-600">Premium pricing</div>
              </div>
            </div>
          </div>

          {/* Healthcare Card */}





        </div>
      </div>
    </div>

  );
};

export default StrategicGrowthCommandCenterAns8b;
