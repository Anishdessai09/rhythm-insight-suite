import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewPanel } from "@/components/OverviewPanel";
import { RhythmScoreCard } from "@/components/RhythmScoreCard";
import { WorkerMetrics } from "@/components/WorkerMetrics";
import { MachineMetrics } from "@/components/MachineMetrics";
import { CorrelationInsights } from "@/components/CorrelationInsights";
import { Factory } from "lucide-react";

const Index = () => {
  // Mock data for 3 workers
  const workers = [
    {
      id: "W001",
      name: "Alex Johnson",
      shift: "Morning",
      sleepHours: 7.5,
      stressLevel: 35,
      healthScore: 85,
    },
    {
      id: "W002",
      name: "Maria Garcia",
      shift: "Afternoon",
      sleepHours: 6,
      stressLevel: 55,
      healthScore: 72,
    },
    {
      id: "W003",
      name: "James Chen",
      shift: "Night",
      sleepHours: 8,
      stressLevel: 25,
      healthScore: 92,
    },
  ];

  // Mock data for 2 machines
  const machines = [
    {
      id: "M001",
      name: "Tire Press Alpha",
      type: "Hydraulic Press",
      efficiency: 88,
      temperature: 68,
      outputRate: 125,
      status: "Operational",
    },
    {
      id: "M002",
      name: "Tire Press Beta",
      type: "Hydraulic Press",
      efficiency: 82,
      temperature: 72,
      outputRate: 118,
      status: "Operational",
    },
  ];

  // Calculate metrics
  const workerHealth = Math.round(
    workers.reduce((acc, w) => acc + w.healthScore, 0) / workers.length
  );
  const machinePerformance = Math.round(
    machines.reduce((acc, m) => acc + m.efficiency, 0) / machines.length
  );
  const rhythmScore = Math.round((workerHealth * 0.55 + machinePerformance * 0.45));

  // Correlation data for charts
  const correlationData = [
    { time: "6:00", workerHealth: 75, machineOutput: 110 },
    { time: "8:00", workerHealth: 82, machineOutput: 118 },
    { time: "10:00", workerHealth: 85, machineOutput: 125 },
    { time: "12:00", workerHealth: 88, machineOutput: 128 },
    { time: "14:00", workerHealth: 83, machineOutput: 122 },
    { time: "16:00", workerHealth: 78, machineOutput: 115 },
    { time: "18:00", workerHealth: 72, machineOutput: 108 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-xl glow-blue">
                <Factory className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">TireFactory Pro</h1>
                <p className="text-sm text-muted-foreground">Factory Owner Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Last Updated</p>
                <p className="text-sm font-semibold text-foreground">
                  {new Date().toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Overview Panel */}
          <OverviewPanel
            rhythmScore={rhythmScore}
            workerHealth={workerHealth}
            machinePerformance={machinePerformance}
          />

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Rhythm Score - Featured */}
            <div className="lg:col-span-1">
              <RhythmScoreCard score={rhythmScore} trend={3.2} />
            </div>

            {/* Metrics Tabs */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="workers" className="w-full">
                <TabsList className="w-full grid grid-cols-2 bg-card/50">
                  <TabsTrigger value="workers" className="data-[state=active]:bg-accent/20 data-[state=active]:text-accent">
                    Worker Metrics
                  </TabsTrigger>
                  <TabsTrigger value="machines" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                    Machine Metrics
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="workers" className="mt-6">
                  <WorkerMetrics workers={workers} />
                </TabsContent>
                
                <TabsContent value="machines" className="mt-6">
                  <MachineMetrics machines={machines} />
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Correlation Analysis */}
          <CorrelationInsights data={correlationData} />
        </div>
      </main>
    </div>
  );
};

export default Index;
