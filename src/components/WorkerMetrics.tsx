import { Card } from "@/components/ui/card";
import { User, Moon, Brain, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Worker {
  id: string;
  name: string;
  shift: string;
  sleepHours: number;
  stressLevel: number;
  healthScore: number;
}

interface WorkerMetricsProps {
  workers: Worker[];
}

export const WorkerMetrics = ({ workers }: WorkerMetricsProps) => {
  const getStressColor = (level: number) => {
    if (level <= 25) return "text-success";
    if (level <= 50) return "text-primary";
    if (level <= 75) return "text-warning";
    return "text-destructive";
  };

  const getStressLabel = (level: number) => {
    if (level <= 25) return "Low";
    if (level <= 50) return "Medium";
    if (level <= 75) return "High";
    return "Very High";
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <User className="h-5 w-5 text-accent" />
        <h3 className="text-xl font-bold text-foreground">Worker Wellbeing</h3>
      </div>

      {workers.map((worker) => (
        <Card key={worker.id} className="p-5 bg-card/80 backdrop-blur border-border/50 hover:border-accent/30 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <User className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{worker.name}</h4>
                <p className="text-sm text-muted-foreground">{worker.shift} Shift</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gradient-orange">{worker.healthScore}%</div>
              <div className="text-xs text-muted-foreground">Health Score</div>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Moon className="h-4 w-4" />
                  Sleep Duration
                </span>
                <span className="text-sm font-semibold text-foreground">{worker.sleepHours}h</span>
              </div>
              <Progress value={(worker.sleepHours / 8) * 100} className="h-1.5" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  Stress Level
                </span>
                <span className={`text-sm font-semibold ${getStressColor(worker.stressLevel)}`}>
                  {getStressLabel(worker.stressLevel)}
                </span>
              </div>
              <Progress value={worker.stressLevel} className="h-1.5" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
