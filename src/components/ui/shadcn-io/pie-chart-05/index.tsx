"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { LabelList, Pie, PieChart, Tooltip, Cell } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import type { ChartConfig } from "@/components/ui/chart";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

const PowerChart = ({
  title,
  subtitle,
  data,
  config,
  trend,
  trendText,
  description,
}: {
  title: string;
  subtitle: string;
  data: any[];
  config: ChartConfig;
  trend: "up" | "down";
  trendText: string;
  description: string;
}) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="w-full h-full flex flex-col">
          <div className="text-center mb-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>

          <div className="flex-1 flex items-center justify-center min-h-0">
            <ChartContainer
              config={config}
              className="[&_.recharts-text]:fill-background aspect-square w-full max-w-[280px]"
            >
              <PieChart>
                <Tooltip
                  content={<ChartTooltipContent nameKey="power" hideLabel />}
                />

                <Pie data={data} dataKey="power" nameKey="category">
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={config[entry.category]?.color}
                    />
                  ))}

                  <LabelList
                    dataKey="category"
                    className="fill-background"
                    stroke="none"
                    fontSize={12}
                    formatter={(value: any) =>
                      config[value as keyof typeof config]?.label
                    }
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </div>

          <div className="flex flex-col gap-1 text-sm text-center mt-2">
            <div className="flex items-center justify-center gap-2 leading-none font-medium">
              {trendText}{" "}
              {trend === "up" ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
            </div>
            <div className="text-muted-foreground flex items-center justify-center gap-2 leading-none">
              {description}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export function PowerChartsGrid() {
  // Chart 1: Overall Power Distribution
  const chartData1 = [
    { category: "AC", power: 275 },
    { category: "Lighting", power: 200 },
    { category: "Kitchen", power: 187 },
    { category: "EV", power: 173 },
    { category: "Others", power: 90 },
  ];

  const chartConfig1 = {
    power: { label: "Power Share (kW)" },
    AC: { label: "AC", color: "var(--chart-1)" },
    Lighting: { label: "Lighting", color: "var(--chart-2)" },
    Kitchen: { label: "Kitchen", color: "var(--chart-3)" },
    EV: { label: "EV", color: "var(--chart-4)" },
    Others: { label: "Others", color: "var(--chart-5)" },
  } satisfies ChartConfig;

  // Chart 2: Peak Hours Distribution
  const chartData2 = [
    { category: "AC", power: 340 },
    { category: "Kitchen", power: 250 },
    { category: "EV", power: 220 },
    { category: "Lighting", power: 180 },
    { category: "Others", power: 110 },
  ];

  const chartConfig2 = {
    power: { label: "Power Share (kW)" },
    AC: { label: "AC", color: "var(--chart-1)" },
    Kitchen: { label: "Kitchen", color: "var(--chart-3)" },
    EV: { label: "EV", color: "var(--chart-4)" },
    Lighting: { label: "Lighting", color: "var(--chart-2)" },
    Others: { label: "Others", color: "var(--chart-5)" },
  } satisfies ChartConfig;

  // Chart 3: Off-Peak Hours Distribution
  const chartData3 = [
    { category: "Lighting", power: 120 },
    { category: "Kitchen", power: 95 },
    { category: "AC", power: 85 },
    { category: "EV", power: 280 },
    { category: "Others", power: 60 },
  ];

  const chartConfig3 = {
    power: { label: "Power Share (kW)" },
    Lighting: { label: "Lighting", color: "var(--chart-2)" },
    Kitchen: { label: "Kitchen", color: "var(--chart-3)" },
    AC: { label: "AC", color: "var(--chart-1)" },
    EV: { label: "EV", color: "var(--chart-4)" },
    Others: { label: "Others", color: "var(--chart-5)" },
  } satisfies ChartConfig;

  // Chart 4: Weekend vs Weekday
  const chartData4 = [
    { category: "Kitchen", power: 230 },
    { category: "AC", power: 210 },
    { category: "Entertainment", power: 190 },
    { category: "Lighting", power: 150 },
    { category: "Others", power: 95 },
  ];

  const chartConfig4 = {
    power: { label: "Power Share (kW)" },
    Kitchen: { label: "Kitchen", color: "var(--chart-3)" },
    AC: { label: "AC", color: "var(--chart-1)" },
    Entertainment: { label: "Entertainment", color: "var(--chart-4)" },
    Lighting: { label: "Lighting", color: "var(--chart-2)" },
    Others: { label: "Others", color: "var(--chart-5)" },
  } satisfies ChartConfig;

  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <PowerChart
          title="Overall Distribution"
          subtitle="January – June 2024"
          data={chartData1}
          config={chartConfig1}
          trend="up"
          trendText="Trending up by 5.2% this month"
          description="Showing power share by appliance category"
        />

        <PowerChart
          title="Peak Hours (6PM-10PM)"
          subtitle="Evening consumption pattern"
          data={chartData2}
          config={chartConfig2}
          trend="up"
          trendText="Up by 8.3% during peak hours"
          description="AC and Kitchen dominate peak usage"
        />

        <PowerChart
          title="Off-Peak Hours"
          subtitle="Night & early morning (10PM-6AM)"
          data={chartData3}
          config={chartConfig3}
          trend="down"
          trendText="Down by 3.1% in off-peak"
          description="EV charging optimized for low rates"
        />

        <PowerChart
          title="Weekend Usage"
          subtitle="Saturday & Sunday average"
          data={chartData4}
          config={chartConfig4}
          trend="up"
          trendText="Up by 12.4% on weekends"
          description="Higher kitchen and entertainment usage"
        />
      </div>
    </div>
  );
}
