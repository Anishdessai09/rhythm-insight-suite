import { Card } from "@/components/ui/card";
import { Gauge, Zap, ThermometerSun, Activity } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Machine {
  id: string;
  name: string;
  type: string;
  efficiency: number;
  temperature: number;
  outputRate: number;
  status: string;
}

interface MachineMetricsProps {
  machines: Machine[];
}

export const MachineMetrics = ({ machines }: MachineMetricsProps) => {
  const getTempStatus = (temp: number) => {
    if (temp <= 70) return { color: "text-success", label: "Normal" };
    if (temp <= 85) return { color: "text-warning", label: "Warm" };
    return { color: "text-destructive", label: "Hot" };
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Gauge className="h-5 w-5 text-primary" />
        <h3 className="text-xl font-bold text-foreground">Machine Performance</h3>
      </div>

      {machines.map((machine) => (
        <Card key={machine.id} className="p-5 bg-card/80 backdrop-blur border-border/50 hover:border-primary/30 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Gauge className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{machine.name}</h4>
                <p className="text-sm text-muted-foreground">{machine.type}</p>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
              machine.status === 'Operational' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'
            }`}>
              {machine.status}
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  Efficiency
                </span>
                <span className="text-sm font-semibold text-primary">{machine.efficiency}%</span>
              </div>
              <Progress value={machine.efficiency} className="h-1.5" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <ThermometerSun className="h-4 w-4" />
                  Temperature
                </span>
                <span className={`text-sm font-semibold ${getTempStatus(machine.temperature).color}`}>
                  {machine.temperature}°C - {getTempStatus(machine.temperature).label}
                </span>
              </div>
              <Progress value={(machine.temperature / 100) * 100} className="h-1.5" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Output Rate
                </span>
                <span className="text-sm font-semibold text-foreground">{machine.outputRate} units/hr</span>
              </div>
              <Progress value={(machine.outputRate / 150) * 100} className="h-1.5" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
