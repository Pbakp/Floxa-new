import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Bug, BarChart3, Check } from "lucide-react";
import { useEffect, useState, useMemo, useCallback } from "react";
import AnalyzingCard from "../processing-animation";

export function CustomerIntelligenceReport() {
  // Memoize the steps array to prevent recreation on every render
  const steps = useMemo(() => [
    { text: "Analyzing DataFlow Industries customer data" },
    { text: "Processing Teams meeting insights and sentiment" },
    { text: "Evaluating Jira support history and pain points" },
    { text: "Cross-referencing HubSpot relationship data" },
    { text: "Generating comprehensive intelligence report" }
  ], []);

  const [showDashboard, setShowDashboard] = useState(false);

  const handleBuildRepeatComplete = useCallback(() => {
    // Show dashboard when analyzing is complete
    setShowDashboard(true);
  }, []);

  return (
    <div className="space-y-6">
      <AnalyzingCard
        key="analyzing-card"
        onProcessingComplete={handleBuildRepeatComplete}
        steps={steps}
        title="Customer Intelligence Report"
        description="I'll synthesize detailed intelligence about DataFlow Industries from across all connected platforms to create a targeted value proposition."
      />
      {showDashboard && (
        <div className="transform gap-4 transition-all duration-1000 ease-out translate-y-0 opacity-100">
          {/* Company Header */}
          <div className="bg-white rounded-lg mb-4  border p-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-lg font-bold text-gray-900">
                DataFlow Industries
              </h1>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Enterprise customer since 2021
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  4 active modules
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800"
                >
                  420 users
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-800"
                >
                  94% Fit Score
                </Badge>
              </div>
            </div>
          </div>

          {/* Intelligence Grid */}
          <div className="grid grid-cols-1 mb-4 lg:grid-cols-2 gap-6">
            {/* Dynamics: Current Product Usage */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Building2 className="w-4 h-4 text-blue-500" />
                  Dynamics: Current Product Usage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-gray-700">
                  • Core Platform (all features active)
                </div>
                <div className="text-sm text-gray-700">
                  • Analytics Module (heavy dashboard usage)
                </div>
                <div className="text-sm text-gray-700">
                  • Workflow Module (156 custom workflows)
                </div>
                <div className="text-sm text-gray-700">
                  • Security Module (SSO implementation)
                </div>
                <div className="text-sm text-gray-700">
                  • Last upgrade: 6 weeks ago
                </div>
              </CardContent>
            </Card>

            {/* Teams: Meeting Insights */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="w-4 h-4 text-blue-600" />
                  Teams: Meeting Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-gray-700">
                  • Monthly review (1 week ago): &quot;We need better intelligence
                  across modules&quot;
                </div>
                <div className="text-sm text-gray-700">
                  • Strategy meeting (3 weeks ago): &quot;Dashboard limitations are
                  blocking decisions&quot;
                </div>
                <div className="text-sm text-gray-700">
                  • CTO mentioned &quot;Intelligence&quot; 15 times in last meeting
                </div>
              </CardContent>
            </Card>

            {/* Jira: Support History */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Bug className="w-4 h-4 text-green-500" />
                  Jira: Support History
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-gray-700">
                  • 18 tickets about reporting limitations
                </div>
                <div className="text-sm text-gray-700">
                  • 12 requests for cross-module analytics
                </div>
                <div className="text-sm text-gray-700">
                  • 5 escalations about dashboard performance
                </div>
                <div className="text-sm text-gray-700">
                  • Recent ticket: &quot;Need predictive analytics&quot; (1 week
                  ago)
                </div>
              </CardContent>
            </Card>

            {/* HubSpot: Relationship Data */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BarChart3 className="w-4 h-4 text-gray-800" />
                  HubSpot: Relationship Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-gray-700">
                  • Sarah Mitchell (CTO) response rate: 95%
                </div>
                <div className="text-sm text-gray-700">
                  • Email sentiment: Very positive (increasing +18%)
                </div>
                <div className="text-sm text-gray-700">
                  • Contract renewal: 7 months away
                </div>
                <div className="text-sm text-gray-700">
                  • Annual value: $580,000
                </div>
                <div className="text-sm text-gray-700">
                  • Expansion opportunity: $240,000 (Intelligence Module)
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Decision Makers */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Key Decision Makers:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3">
                <Badge
                  variant="outline"
                  className="justify-center py-2 px-2 bg-blue-50 border-blue-200 text-blue-800"
                >
                  Sarah Mitchell (CTO) - Primary Contact
                </Badge>
                <Badge
                  variant="outline"
                  className="justify-center py-2 px-4 bg-green-50 border-green-200 text-green-800"
                >
                  David Kim (Dir. Analytics) - Technical Evaluator
                </Badge>
                <Badge
                  variant="outline"
                  className="justify-center py-2 px-4 bg-purple-50 border-purple-200 text-purple-800"
                >
                  Maria Santos (CFO) - Budget Approver
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
