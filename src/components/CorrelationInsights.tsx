import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Brain, TrendingUp } from "lucide-react";

interface CorrelationInsightsProps {
  data: any[];
}

export const CorrelationInsights = ({ data }: CorrelationInsightsProps) => {
  return (
    <Card className="p-6 bg-card/80 backdrop-blur border-border/50">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Brain className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">AI Correlation Analysis</h3>
          <p className="text-sm text-muted-foreground">Worker Health vs Machine Output</p>
        </div>
      </div>

      <div className="h-[300px] mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="time" 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--foreground))'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="workerHealth" 
              stroke="hsl(var(--accent))" 
              strokeWidth={2}
              name="Worker Health"
              dot={{ fill: 'hsl(var(--accent))' }}
            />
            <Line 
              type="monotone" 
              dataKey="machineOutput" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              name="Machine Output"
              dot={{ fill: 'hsl(var(--primary))' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3">
        <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
          <div className="flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-success mt-0.5" />
            <div>
              <h4 className="font-semibold text-success mb-1">Positive Correlation Detected</h4>
              <p className="text-sm text-muted-foreground">
                Worker wellbeing shows a strong positive correlation (r=0.78) with machine output. 
                When worker health scores improve, machine efficiency increases by an average of 12%.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <div className="flex items-start gap-3">
            <Brain className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-semibold text-primary mb-1">AI Insight</h4>
              <p className="text-sm text-muted-foreground">
                Optimal performance occurs when workers have 7+ hours sleep and stress levels below 40%. 
                This combination correlates with 15% higher machine output rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
