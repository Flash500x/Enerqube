import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type LucideIconName = {
  [K in keyof typeof Icons]: (typeof Icons)[K] extends LucideIcon ? K : never;
}[keyof typeof Icons];

type DataCardProps = {
  title: string;
  value: string | number;
  unit: string;
  delta: number;
  icon: LucideIconName;
};

export default function DataCard({
  title,
  value,
  unit,
  delta,
  icon,
}: DataCardProps) {
  const Icon = Icons[icon] as LucideIcon;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-bold">
          {value}
          <span className="ml-1 text-sm text-muted-foreground">{unit}</span>
        </div>

        <p
          className={`text-xs ${
            delta >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {delta >= 0 ? "+" : ""}
          {delta}% from last month
        </p>
      </CardContent>
    </Card>
  );
}
