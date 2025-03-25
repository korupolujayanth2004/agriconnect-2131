"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Bell, Calendar, CloudRain, Droplets } from "lucide-react"

// Mock data
const soilMoisture = 65
const prediction = [
  { day: "Today", rainfall: 0, irrigation: "Required" },
  { day: "Tomorrow", rainfall: 0, irrigation: "Required" },
  { day: "Wed", rainfall: 12, irrigation: "Not needed" },
  { day: "Thu", rainfall: 8, irrigation: "Not needed" },
  { day: "Fri", rainfall: 0, irrigation: "Monitor" },
]
const crops = [
  { id: 1, name: "Rice (Field 1)", waterNeeds: "High", schedule: "Daily" },
  { id: 2, name: "Wheat (Field 2)", waterNeeds: "Medium", schedule: "Every 3 days" },
]

export default function IrrigationRecommendations() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-blue-500" />
                <h3 className="font-medium">Current Soil Moisture</h3>
              </div>
              <Badge variant={soilMoisture > 70 ? "outline" : soilMoisture > 40 ? "secondary" : "destructive"}>
                {soilMoisture > 70 ? "Optimal" : soilMoisture > 40 ? "Adequate" : "Low"}
              </Badge>
            </div>

            <div className="text-3xl font-bold mb-2">{soilMoisture}%</div>
            <Progress value={soilMoisture} className="h-2 mb-2" />

            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Dry</span>
              <span>Optimal range</span>
              <span>Saturated</span>
            </div>

            <div className="mt-4 text-sm">
              <p>Last measured: Today, 8:00 AM</p>
              <p className="text-muted-foreground">Your crops require watering based on current moisture levels.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <CloudRain className="h-5 w-5 text-blue-500" />
              <h3 className="font-medium">Rainfall Forecast</h3>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {prediction.map((day) => (
                <div key={day.day} className="text-center">
                  <p className="text-sm font-medium mb-1">{day.day}</p>
                  <div className="h-24 flex flex-col items-center justify-end mb-1">
                    {day.rainfall > 0 ? (
                      <div
                        className="bg-blue-100 dark:bg-blue-900/40 w-full rounded-t-md flex items-center justify-center"
                        style={{ height: `${Math.min(day.rainfall * 4, 100)}%` }}
                      >
                        <span className="text-xs">{day.rainfall}</span>
                      </div>
                    ) : (
                      <div className="text-xs text-muted-foreground">0</div>
                    )}
                  </div>
                  <p className="text-xs">mm</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Irrigation Schedule</h3>
          <Button variant="outline" size="sm" className="gap-1">
            <Bell className="h-4 w-4" />
            <span>Set Reminders</span>
          </Button>
        </div>

        {crops.map((crop) => (
          <div key={crop.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-medium">{crop.name}</h4>
                <p className="text-sm text-muted-foreground">
                  Water needs: {crop.waterNeeds} • Current schedule: {crop.schedule}
                </p>
              </div>
              <Badge
                variant="outline"
                className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
              >
                {prediction[0].irrigation === "Required" ? "Needs Water Today" : "No Watering Needed"}
              </Badge>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                Next irrigation: {prediction[0].irrigation === "Required" ? "Today" : "In 3 days"}
              </span>
            </div>

            <div className="mt-3 text-sm text-muted-foreground">
              <p>
                Recommendation:{" "}
                {prediction[0].irrigation === "Required"
                  ? "Apply 20mm of water today to maintain optimal soil moisture levels."
                  : "Monitor soil moisture levels as rainfall is expected in the coming days."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

