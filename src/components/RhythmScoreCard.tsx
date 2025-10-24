import { Card } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface RhythmScoreCardProps {
  score: number;
  trend: number;
}

export const RhythmScoreCard = ({ score, trend }: RhythmScoreCardProps) => {
  return (
    <Card className="p-8 bg-gradient-to-br from-primary/20 via-card to-accent/20 border-primary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary/20 rounded-xl glow-blue">
            <Activity className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Rhythm Score</h3>
            <p className="text-xs text-muted-foreground/70">Factory Harmony Index</p>
          </div>
        </div>

        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="text-6xl font-bold text-gradient-blue mb-2">{score}</div>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${trend >= 0 ? 'text-success' : 'text-destructive'}`}>
                {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
              </span>
              <span className="text-xs text-muted-foreground">vs last period</span>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-xs text-muted-foreground mb-1">Status</div>
            <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
              score >= 80 ? 'bg-success/20 text-success' :
              score >= 60 ? 'bg-primary/20 text-primary' :
              'bg-warning/20 text-warning'
            }`}>
              {score >= 80 ? 'Optimal' : score >= 60 ? 'Good' : 'Fair'}
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          The Rhythm Score measures the synchronization between worker wellbeing and machine performance, 
          indicating overall factory harmony and efficiency.
        </p>
      </div>
    </Card>
  );
};
