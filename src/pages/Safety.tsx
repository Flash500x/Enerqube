import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  Wrench,
  Droplets,
  Power,
  Phone,
  Zap,
  TrendingUp,
  Shield,
} from "lucide-react";

export default function SafetyTab() {
  const aiInsights = [
    {
      id: 1,
      severity: "high",
      title: "Abnormal Current Detected",
      description:
        "AI detected abnormal current during low-usage hours. Possible insulation issue or moisture intrusion.",
      device: "Kitchen Circuit",
      timestamp: "2 hours ago",
      icon: AlertTriangle,
    },
    {
      id: 2,
      severity: "medium",
      title: "Unusual Power Spike",
      description:
        "Your air conditioner is using 40% more power than usual. This could indicate a refrigerant leak or dirty filters.",
      device: "Air Conditioner",
      timestamp: "5 hours ago",
      icon: TrendingUp,
    },
    {
      id: 3,
      severity: "low",
      title: "Standby Power Usage",
      description:
        "Several devices are consuming power in standby mode. Switching them off could save you ₹200 per month.",
      device: "Living Room",
      timestamp: "1 day ago",
      icon: Power,
    },
  ];

  const recommendedActions = [
    {
      category: "Immediate Action Required",
      actions: [
        {
          text: "Check kitchen wiring for any loose connections",
          icon: Wrench,
          priority: "high",
        },
        {
          text: "Inspect water-exposed sockets in bathroom and kitchen",
          icon: Droplets,
          priority: "high",
        },
      ],
    },
    {
      category: "Preventive Maintenance",
      actions: [
        {
          text: "Switch off unused appliances to reduce standby consumption",
          icon: Power,
          priority: "medium",
        },
        {
          text: "Clean air conditioner filters for optimal performance",
          icon: Lightbulb,
          priority: "medium",
        },
        {
          text: "Schedule professional inspection for kitchen circuit",
          icon: Wrench,
          priority: "medium",
        },
      ],
    },
    {
      category: "Professional Help",
      actions: [
        {
          text: "Call electrician if alert persists beyond 24 hours",
          icon: Phone,
          priority: "low",
        },
        {
          text: "Consider electrical safety audit for your home",
          icon: Shield,
          priority: "low",
        },
      ],
    },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "secondary";
      default:
        return "default";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-white bg-red-990 border";
      case "medium":
        return "text-white border";
      case "low":
        return "text-white border";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Safety & Insights
        </h1>
        <p className="text-muted-foreground">
          AI-powered analysis of your electrical system with actionable
          recommendations
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid gap-4 grid">
          {aiInsights.map((insight) => (
            <Alert key={insight.id} className="border-l-4 ">
              <insight.icon className="h-5 w-5" />
              <div className="flex items-start justify-between w-full">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <AlertTitle className="text-lg font-semibold">
                      {insight.title}
                    </AlertTitle>
                    <Badge variant={getSeverityColor(insight.severity)}>
                      {insight.severity.toUpperCase()}
                    </Badge>
                  </div>
                  <AlertDescription className="text-base">
                    {insight.description}
                  </AlertDescription>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                    <span className="font-medium">
                      Device: {insight.device}
                    </span>
                    <span>•</span>
                    <span>{insight.timestamp}</span>
                  </div>
                </div>
              </div>
            </Alert>
          ))}
        </div>
      </div>

      {/* Recommended Actions Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-green-500" />
          <h2 className="text-2xl font-bold">Recommended Actions</h2>
        </div>

        <div className="grid gap-6">
          {recommendedActions.map((section, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-xl">{section.category}</CardTitle>
                <CardDescription>
                  {section.category === "Immediate Action Required" &&
                    "Address these issues as soon as possible"}
                  {section.category === "Preventive Maintenance" &&
                    "Regular maintenance to keep your system healthy"}
                  {section.category === "Professional Help" &&
                    "When to call in the experts"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.actions.map((action, actionIdx) => (
                    <div
                      key={actionIdx}
                      className={`flex items-start gap-3 p-4 rounded-lg border ${getPriorityColor(
                        action.priority
                      )}`}
                    >
                      <action.icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium">{action.text}</p>
                      </div>
                      {action.priority === "high" && (
                        <Badge variant="destructive" className="ml-auto">
                          Priority
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
