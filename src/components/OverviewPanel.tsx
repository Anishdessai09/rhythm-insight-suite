import { Activity, Users, Gauge, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface OverviewPanelProps {
  rhythmScore: number;
  workerHealth: number;
  machinePerformance: number;
}

export const OverviewPanel = ({ rhythmScore, workerHealth, machinePerformance }: OverviewPanelProps) => {
  const getHealthStatus = (score: number) => {
    if (score >= 80) return { label: "Excellent", color: "text-success", bgColor: "bg-success/10" };
    if (score >= 60) return { label: "Good", color: "text-primary", bgColor: "bg-primary/10" };
    if (score >= 40) return { label: "Fair", color: "text-warning", bgColor: "bg-warning/10" };
    return { label: "Needs Attention", color: "text-destructive", bgColor: "bg-destructive/10" };
  };

  const overallHealth = Math.round((workerHealth + machinePerformance) / 2);
  const status = getHealthStatus(overallHealth);

  return (
    <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border/50 backdrop-blur">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-1">Factory Health Overview</h2>
          <p className="text-sm text-muted-foreground">Real-time system status</p>
        </div>
        <div className={`px-4 py-2 rounded-full ${status.bgColor} ${status.color} text-sm font-semibold`}>
          {status.label}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Rhythm Score</p>
              <p className="text-2xl font-bold text-gradient-blue">{rhythmScore}%</p>
            </div>
          </div>
          <Progress value={rhythmScore} className="h-2" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-accent/10">
              <Users className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Worker Wellbeing</p>
              <p className="text-2xl font-bold text-gradient-orange">{workerHealth}%</p>
            </div>
          </div>
          <Progress value={workerHealth} className="h-2" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-success/10">
              <Gauge className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Machine Performance</p>
              <p className="text-2xl font-bold text-success">{machinePerformance}%</p>
            </div>
          </div>
          <Progress value={machinePerformance} className="h-2" />
        </div>
      </div>

      <div className="flex items-center gap-2 p-4 bg-muted/30 rounded-lg border border-border/30">
        <Activity className="h-5 w-5 text-primary" />
        <p className="text-sm text-foreground">
          <span className="font-semibold">System Status:</span> All systems operational. Factory rhythm is synchronized.
        </p>
      </div>
    </Card>
  );
};
