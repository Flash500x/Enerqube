import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
export default function Reports() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="px-5 pt-5 mt-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
          Electicity Consumption
        </h1>
        <p className="text-muted-foreground">
          Energy usage summary for December
        </p>

        <Table className="mt-4">
          <TableCaption>
            Detailed device-wise energy consumption logs
          </TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Time Slot</TableHead>
              <TableHead>Device</TableHead>
              <TableHead>Power Status</TableHead>
              <TableHead className="text-left">Energy Consumed (kWh)</TableHead>
              <TableHead>Remarks</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>12 Dec 2024</TableCell>
              <TableCell>06:00 – 09:00</TableCell>
              <TableCell>Air Conditioner</TableCell>
              <TableCell className="text-green-600">ON</TableCell>
              <TableCell className="text-left">3.2</TableCell>
              <TableCell>Peak usage</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>12 Dec 2024</TableCell>
              <TableCell>09:00 – 12:00</TableCell>
              <TableCell>Lighting</TableCell>
              <TableCell className="text-green-600">ON</TableCell>
              <TableCell className="text-left">1.1</TableCell>
              <TableCell>Normal</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>12 Dec 2024</TableCell>
              <TableCell>18:00 – 22:00</TableCell>
              <TableCell>EV Charger</TableCell>
              <TableCell className="text-red-600">OFF</TableCell>
              <TableCell className="text-left">0.0</TableCell>
              <TableCell>Charging skipped</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>16 Dec 2024</TableCell>
              <TableCell>14:30 – 18:30</TableCell>
              <TableCell>Air Conditioner</TableCell>
              <TableCell className="text-green-600">ON</TableCell>
              <TableCell className="text-left">12.4</TableCell>
              <TableCell>Peak cooling</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>16 Dec 2024</TableCell>
              <TableCell>06:00 – 07:30</TableCell>
              <TableCell>Water Heater</TableCell>
              <TableCell className="text-green-600">ON</TableCell>
              <TableCell className="text-left">4.2</TableCell>
              <TableCell>Morning routine</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>15 Dec 2024</TableCell>
              <TableCell>22:00 – 06:00</TableCell>
              <TableCell>EV Charger</TableCell>
              <TableCell className="text-green-600">ON</TableCell>
              <TableCell className="text-left">28.5</TableCell>
              <TableCell>Off-peak charging</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>15 Dec 2024</TableCell>
              <TableCell>18:00 – 19:30</TableCell>
              <TableCell>Kitchen Oven</TableCell>
              <TableCell className="text-green-600">ON</TableCell>
              <TableCell className="text-left">3.8</TableCell>
              <TableCell>Dinner preparation</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>15 Dec 2024</TableCell>
              <TableCell>12:00 – 16:00</TableCell>
              <TableCell>Pool Pump</TableCell>
              <TableCell className="text-red-600">OFF</TableCell>
              <TableCell className="text-left">0.0</TableCell>
              <TableCell>Maintenance mode</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>14 Dec 2024</TableCell>
              <TableCell>20:00 – 23:00</TableCell>
              <TableCell>Washing Machine</TableCell>
              <TableCell className="text-green-600">ON</TableCell>
              <TableCell className="text-left">2.1</TableCell>
              <TableCell>Night cycle</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>14 Dec 2024</TableCell>
              <TableCell>15:00 – 18:00</TableCell>
              <TableCell>Air Conditioner</TableCell>
              <TableCell className="text-red-600">OFF</TableCell>
              <TableCell className="text-left">0.0</TableCell>
              <TableCell>Power saving mode</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>13 Dec 2024</TableCell>
              <TableCell>23:00 – 07:00</TableCell>
              <TableCell>EV Charger</TableCell>
              <TableCell className="text-green-600">ON</TableCell>
              <TableCell className="text-left">32.1</TableCell>
              <TableCell>Full charge cycle</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>13 Dec 2024</TableCell>
              <TableCell>08:00 – 10:00</TableCell>
              <TableCell>Dishwasher</TableCell>
              <TableCell className="text-green-600">ON</TableCell>
              <TableCell className="text-left">1.8</TableCell>
              <TableCell>Morning cleanup</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>12 Dec 2024</TableCell>
              <TableCell>19:00 – 21:00</TableCell>
              <TableCell>Electric Dryer</TableCell>
              <TableCell className="text-green-600">ON</TableCell>
              <TableCell className="text-left">3.6</TableCell>
              <TableCell>Laundry cycle</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>12 Dec 2024</TableCell>
              <TableCell>18:00 – 22:00</TableCell>
              <TableCell>EV Charger</TableCell>
              <TableCell className="text-red-600">OFF</TableCell>
              <TableCell className="text-left">0.0</TableCell>
              <TableCell>Charging skipped</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>12 Dec 2024</TableCell>
              <TableCell>14:00 – 17:00</TableCell>
              <TableCell>Air Conditioner</TableCell>
              <TableCell className="text-green-600">ON</TableCell>
              <TableCell className="text-left">9.7</TableCell>
              <TableCell>Afternoon cooling</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>11 Dec 2024</TableCell>
              <TableCell>21:00 – 05:00</TableCell>
              <TableCell>Space Heater</TableCell>
              <TableCell className="text-green-600">ON</TableCell>
              <TableCell className="text-left">6.4</TableCell>
              <TableCell>Night heating</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>11 Dec 2024</TableCell>
              <TableCell>16:00 – 17:30</TableCell>
              <TableCell>Microwave</TableCell>
              <TableCell className="text-green-600">ON</TableCell>
              <TableCell className="text-left">0.9</TableCell>
              <TableCell>Meal preparation</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>10 Dec 2024</TableCell>
              <TableCell>13:00 – 15:00</TableCell>
              <TableCell>Pool Pump</TableCell>
              <TableCell className="text-red-600">OFF</TableCell>
              <TableCell className="text-left">0.0</TableCell>
              <TableCell>Scheduled maintenance</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="grid grid-cols-1 gap-3 px-6 mt-5 sm:grid-cols-2 mb-5">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Current Month</CardTitle>
              </CardHeader>

              <CardContent className="space-y-2">
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Total Energy Used
                    </p>
                    <p className="text-2xl font-semibold">312 kWh</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Average Daily Usage
                    </p>
                    <p className="text-2xl font-semibold">9 kWh</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Peak Demand</p>
                    <p className="text-2xl font-semibold">7.8 kW</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Estimated Cost
                    </p>
                    <p className="text-2xl font-semibold">₹2,450</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Previous Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Total Energy Used
                    </p>
                    <p className="text-2xl font-semibold">318 kWh</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Average Daily Usage
                    </p>
                    <p className="text-2xl font-semibold">14 kWh</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Peak Demand</p>
                    <p className="text-2xl font-semibold">6.8 kW</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Estimated Cost
                    </p>
                    <p className="text-2xl font-semibold">₹2,550</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
