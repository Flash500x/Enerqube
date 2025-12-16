import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Fan,
  Lightbulb,
  Thermometer,
  Tv,
  Wind,
  Droplets,
  Coffee,
  Zap,
  AlertCircle,
} from "lucide-react";

export default function IoTControlCenter() {
  const [devices, setDevices] = useState([
    {
      id: 1,
      name: "Ceiling Fan",
      icon: "Fan",
      isOn: false,
      power: 75,
      currentUsage: 0,
      totalUsage: 2.4,
      speed: 50,
      hasSpeed: true,
      color: "text-blue-500",
    },
    {
      id: 2,
      name: "Living Room Light",
      icon: "Lightbulb",
      isOn: true,
      power: 60,
      currentUsage: 60,
      totalUsage: 1.8,
      brightness: 80,
      hasBrightness: true,
      color: "text-yellow-500",
    },
    {
      id: 3,
      name: "Air Conditioner",
      icon: "Wind",
      isOn: true,
      power: 1500,
      currentUsage: 1500,
      totalUsage: 18.2,
      temperature: 24,
      hasTemperature: true,
      color: "text-cyan-500",
    },

    {
      id: 6,
      name: "Water Heater",
      icon: "Droplets",
      isOn: true,
      power: 2000,
      currentUsage: 2000,
      totalUsage: 12.5,
      color: "text-orange-500",
    },
  ]);

  const [kWhLimit, setKWhLimit] = useState(100);
  const [tempLimit, setTempLimit] = useState(100);

  const iconMap = { Fan, Lightbulb, Wind, Tv, Coffee, Droplets, Thermometer };

  const toggleDevice = (id: number) => {
    setDevices(
      devices.map((d) =>
        d.id === id
          ? { ...d, isOn: !d.isOn, currentUsage: !d.isOn ? d.power : 0 }
          : d
      )
    );
  };

  const updateDeviceControl = (
    id: number,
    controlType: string,
    value: number
  ) => {
    setDevices(
      devices.map((d) => (d.id === id ? { ...d, [controlType]: value } : d))
    );
  };

  const totalDailyUsage = devices.reduce((sum, d) => sum + d.totalUsage, 0);
  const activeDevices = devices.filter((d) => d.isOn).length;

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="px-5 pt-5 mt-10">
        <div className="flex items-center gap-2 justify-between">
          <h1 className="scroll-m-20 text-left text-4xl font-extrabold tracking-tight text-balance">
            Control Center
          </h1>
        </div>
        <div className="flex items-center gap-2 justify-between">
          <p className="leading-7 text-muted-foreground">
            last synced 2min ago.
          </p>
        </div>

        <div className="mt-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>System Status: Online</AlertTitle>
              <AlertDescription>
                All devices are connected and responding. Last sync: 2 minutes
                ago. Network latency: 42ms.
              </AlertDescription>
            </Alert>
            <Alert>
              <Zap className="h-4 w-4" />
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <AlertTitle>Smart Home Hub: Active</AlertTitle>
                  <AlertDescription>
                    Location: Kochi, Kerala, IN
                  </AlertDescription>
                  <AlertTitle className="mt-2">
                    Hub ID: SH-2025-KL-001
                  </AlertTitle>
                  <AlertDescription>
                    Connected Devices: {devices.length} | Active:{" "}
                    {activeDevices}
                  </AlertDescription>
                </div>
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline" size="sm" className="ml-2">
                      Limit: {kWhLimit} kWh
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>Set Daily kWh Limit</DrawerTitle>
                        <DrawerDescription>
                          Configure your daily energy consumption limit
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4 pb-0">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="flex-1 text-center">
                            <div className="text-7xl font-bold tracking-tighter">
                              {tempLimit}
                            </div>
                            <div className="text-[0.70rem] uppercase text-muted-foreground">
                              kWh/day
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              Current Usage:
                            </span>
                            <span className="font-semibold">
                              {totalDailyUsage.toFixed(1)} kWh
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              Limit:
                            </span>
                            <span className="font-semibold">
                              {kWhLimit} kWh
                            </span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full transition-all ${
                                totalDailyUsage > kWhLimit
                                  ? "bg-red-500"
                                  : totalDailyUsage > kWhLimit * 0.8
                                  ? "bg-yellow-500"
                                  : "bg-green-500"
                              }`}
                              style={{
                                width: `${Math.min(
                                  (totalDailyUsage / kWhLimit) * 100,
                                  100
                                )}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="mt-6 h-[120px] flex items-center justify-center">
                          <div className="w-full space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">
                                Adjust Limit
                              </span>
                              <span className="text-sm font-medium">
                                {tempLimit} kWh
                              </span>
                            </div>
                            <input
                              type="range"
                              min="10"
                              max="200"
                              step="5"
                              value={tempLimit}
                              onChange={(e) =>
                                setTempLimit(parseInt(e.target.value))
                              }
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                      <DrawerFooter>
                        <DrawerClose asChild>
                          <Button onClick={() => setKWhLimit(tempLimit)}>
                            Save Limit
                          </Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </Alert>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Device Control
          </h2>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {devices.map((device) => {
            const Icon = iconMap[device.icon as keyof typeof iconMap];
            return (
              <Card
                key={device.id}
                className={`transition-all duration-300 ${
                  device.isOn ? "border shadow-md" : "border-muted opacity-75"
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon
                        className={`h-6 w-6 ${
                          device.color
                        } transition-all duration-300 ${
                          device.isOn && device.id === 1
                            ? "animate-spin"
                            : device.isOn && device.id === 2
                            ? "animate-pulse"
                            : device.isOn && device.id === 3
                            ? "animate-bounce"
                            : ""
                        }`}
                        style={
                          device.isOn && device.id === 1
                            ? { animationDuration: "1s" }
                            : {}
                        }
                      />
                      <CardTitle className="text-base font-semibold">
                        {device.name}
                      </CardTitle>
                    </div>
                    <button
                      onClick={() => toggleDevice(device.id)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        device.isOn ? "bg-green-500" : "bg-black"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          device.isOn ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Status:
                    </span>
                    <Badge
                      variant={device.isOn ? "default" : "secondary"}
                      className={device.isOn ? "bg-green-500" : ""}
                    >
                      {device.isOn ? "ON" : "OFF"}
                    </Badge>
                  </div>

                  {device.isOn && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Power:
                      </span>
                      <span className="text-sm font-semibold">
                        {device.currentUsage}W
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Today:
                    </span>
                    <span className="text-sm font-semibold">
                      {device.totalUsage} kWh
                    </span>
                  </div>

                  {device.hasSpeed && device.isOn && (
                    <div className="space-y-2 pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">
                          Speed
                        </span>
                        <span className="text-xs font-medium">
                          {device.speed}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="10"
                        value={device.speed}
                        onChange={(e) =>
                          updateDeviceControl(
                            device.id,
                            "speed",
                            parseInt(e.target.value)
                          )
                        }
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  )}

                  {device.hasBrightness && device.isOn && (
                    <div className="space-y-2 pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">
                          Brightness
                        </span>
                        <span className="text-xs font-medium">
                          {device.brightness}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="10"
                        value={device.brightness}
                        onChange={(e) =>
                          updateDeviceControl(
                            device.id,
                            "brightness",
                            parseInt(e.target.value)
                          )
                        }
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  )}

                  {device.hasTemperature && device.isOn && (
                    <div className="space-y-2 pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">
                          Temperature
                        </span>
                        <span className="text-xs font-medium">
                          {device.temperature}°C
                        </span>
                      </div>
                      <input
                        type="range"
                        min="16"
                        max="30"
                        step="1"
                        value={device.temperature}
                        onChange={(e) =>
                          updateDeviceControl(
                            device.id,
                            "temperature",
                            parseInt(e.target.value)
                          )
                        }
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
