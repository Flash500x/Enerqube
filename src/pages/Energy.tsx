import { ChartAreaInteractive } from "@/components/ui/shadcn-io/area-chart-01";
import { PowerChartsGrid } from "@/components/ui/shadcn-io/pie-chart-05";
import type { ChartConfig } from "@/components/ui/chart";
export default function Energy() {
  return (
    <div className="max-w-[1200px] mx-auto mt-10">
      <div className="px-5 pt-5 mt-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
          Monitor Energy Levels
        </h1>

        <div className="mt-6">
          <ChartAreaInteractive />
        </div>
        <h3 className="scroll-m-20 text-3xl font-extrabold tracking-tight">
          Power Distribution
        </h3>
        <p className="text-muted-foreground">
          Showing power share by appliance category
        </p>
        <div className="mt-2">
          <PowerChartsGrid />
        </div>
      </div>
    </div>
  );
}
