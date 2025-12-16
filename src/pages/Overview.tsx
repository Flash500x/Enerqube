import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataCard from "@/components/ui/DataCard";
import UsageChart from "@/components/ui/UsageChart";
import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
import { Zap } from "lucide-react";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Overview = () => {
  const randomizer = (m: number, n: number) => {
    return Math.round(Math.random() * (n - m) + m);
  };

  const randomizerFloat = (m: number, n: number, decimalPlaces: number = 1) => {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round((Math.random() * (n - m) + m) * factor) / factor;
  };

  const [forecast, setForecast] = useState<number>(0);
  const [monthlyAverage, setMonthlyAverage] = useState<number>(380);
  const [costSavings, setCostSavings] = useState<number>(0);
  const [carbonFootprint, setCarbonFootprint] = useState<number>(99);
  const [highestLoadToday, setHighestLoadToday] = useState<number>(4.2);
  const [offPeakUsage, setOffPeakUsage] = useState<number>(112);
  const [appliancesActive, setAppliancesActive] = useState<number>(7);
  const [peakUsageEvents, setPeakUsageEvents] = useState<number>(3);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.141:5000/api/forecast/next-hour"
        );
        setForecast(response.data.predicted_consumption_mw);
      } catch (error) {
        console.error("Error fetching forecast:", error);
      }
    };

    fetchForecast(); // Initial fetch
    const forecastInterval = setInterval(() => {
      fetchForecast();
    }, 5000); // Update every 5 seconds

    return () => clearInterval(forecastInterval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const updateRandomCards = () => {
      setMonthlyAverage(randomizer(300, 450));
      setCostSavings(randomizer(500, 2000));
      setCarbonFootprint(randomizer(80, 120));
      setHighestLoadToday(randomizerFloat(3.0, 5.0, 1));
      setOffPeakUsage(randomizer(100, 150));
      setAppliancesActive(randomizer(5, 10));
      setPeakUsageEvents(randomizer(1, 5));
    };

    updateRandomCards(); // Initial update
    const randomCardsInterval = setInterval(() => {
      updateRandomCards();
    }, 2000); // Update every 2 seconds

    return () => clearInterval(randomCardsInterval); // Cleanup on unmount
  }, []);

  return (
    <div className=" max-w-[1200px] mx-auto ">
      <div className="px-5 pt-5 mt-10">
        <div className="flex items-center gap-2 justify-between">
          <h1 className="scroll-m-20 text-left text-4xl font-extrabold tracking-tight text-balance">
            Welcome, Candice
          </h1>
        </div>
        <div className="flex items-center gap-2 justify-between">
          <p className="leading-7 text-muted-foreground ">
            Thursday, December 14, 2023
          </p>
        </div>
        <div className="mt-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Alert>
              <AlertTitle>Kerala State Electricity Board</AlertTitle>
              <AlertDescription>
                Safety starts with understanding how developers collect and
                share your data. Data privacy and security practices may vary
                based on your use, region and age. The developer provided this
                information and may update it over time.
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertTitle>Consumer Number: 9D7752</AlertTitle>
              <AlertDescription>Location: Sreekariyam, 695017</AlertDescription>
              <AlertTitle>Meter ID: 56677236646EET</AlertTitle>
              <AlertDescription>
                Registered Date: 16ᵗʰ December, 2022
              </AlertDescription>
            </Alert>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Command Center
          </h2>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-4">
          <DataCard
            title="Today's Forecast"
            value={forecast}
            unit="kWh"
            delta={-10}
            icon="SmartphoneCharging"
          />
          <DataCard
            title="Monthly Average"
            value={monthlyAverage}
            unit="kWh"
            delta={randomizer(-10, 10)}
            icon="Gauge"
          />
          <DataCard
            title="Cost Savings"
            value={costSavings}
            unit="INR"
            delta={randomizer(-10, 10)}
            icon="ReceiptIndianRupee"
          />
          <DataCard
            title="Carbon Footprint"
            value={carbonFootprint}
            unit="Kg"
            delta={randomizer(-10, 10)}
            icon="Clover"
          />
          <DataCard
            title="Highest Load Today"
            value={highestLoadToday}
            unit="kW"
            delta={randomizer(-10, 10)}
            icon="Zap"
          />

          <DataCard
            title="Off-Peak Usage"
            value={offPeakUsage}
            unit="kWh"
            delta={randomizer(-10, 10)}
            icon="Moon"
          />

          <DataCard
            title="Appliances Active"
            value={appliancesActive}
            unit="Devices"
            delta={randomizer(-2, 2)}
            icon="Plug"
          />

          <DataCard
            title="Peak Usage Events"
            value={peakUsageEvents}
            unit="Times"
            delta={randomizer(-1, 1)}
            icon="Activity"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
