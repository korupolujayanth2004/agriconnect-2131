"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Calendar, Check, Clock, Sprout } from "lucide-react"

// Mock data
const soilNutrients = {
  nitrogen: 65,
  phosphorus: 42,
  potassium: 78,
  ph: 6.8,
}

const schedule = [
  {
    id: 1,
    date: "2025-03-25",
    field: "Rice Field (2.5 ha)",
    type: "NPK 20-10-10",
    quantity: "25 kg/ha",
    status: "upcoming",
  },
  {
    id: 2,
    date: "2025-03-18",
    field: "Wheat Field (3 ha)",
    type: "Urea",
    quantity: "20 kg/ha",
    status: "completed",
  },
  {
    id: 3,
    date: "2025-04-05",
    field: "Cotton Field (1.5 ha)",
    type: "NPK 15-15-15",
    quantity: "30 kg/ha",
    status: "upcoming",
  },
]

export default function FertilizerSchedule() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-medium">Soil Nutrient Levels</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <h4 className="text-sm font-medium mb-2">Nitrogen (N)</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{soilNutrients.nitrogen}%</span>
                  <Badge variant={soilNutrients.nitrogen > 60 ? "outline" : "secondary"}>
                    {soilNutrients.nitrogen > 60 ? "Adequate" : "Low"}
                  </Badge>
                </div>
                <Progress value={soilNutrients.nitrogen} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="text-sm font-medium mb-2">Phosphorus (P)</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{soilNutrients.phosphorus}%</span>
                  <Badge variant="secondary">Low</Badge>
                </div>
                <Progress value={soilNutrients.phosphorus} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="text-sm font-medium mb-2">Potassium (K)</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{soilNutrients.potassium}%</span>
                  <Badge variant="outline">Adequate</Badge>
                </div>
                <Progress value={soilNutrients.potassium} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="text-sm font-medium mb-2">pH Level</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{soilNutrients.ph}</span>
                  <Badge variant="outline">Optimal</Badge>
                </div>
                <div className="relative pt-2">
                  <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                    <div
                      className="absolute h-4 w-2 bg-primary rounded-full top-1"
                      style={{ left: `calc(${(soilNutrients.ph / 14) * 100}% - 4px)` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Acidic (0)</span>
                    <span>Neutral (7)</span>
                    <span>Alkaline (14)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Fertilization Schedule
          </h3>
          <Button variant="outline" size="sm">
            Add Application
          </Button>
        </div>

        <div className="space-y-3">
          {schedule.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-3">
                    {item.status === "completed" ? (
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/30">
                        <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center dark:bg-amber-900/30">
                        <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{new Date(item.date).toLocaleDateString()}</p>
                        <Badge variant={item.status === "completed" ? "outline" : "secondary"}>
                          {item.status === "completed" ? "Completed" : "Upcoming"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.field}</p>
                    </div>
                  </div>

                  <div className="md:flex-1 flex flex-col md:flex-row md:items-center md:justify-end gap-3">
                    <div className="flex items-center gap-2">
                      <Sprout className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        {item.type}, {item.quantity}
                      </span>
                    </div>

                    {item.status === "upcoming" && (
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-medium mb-1">Fertilizer Recommendations</h3>
                <p className="text-sm text-muted-foreground">
                  Based on your soil test results, we recommend applying additional phosphorus to improve crop yield and
                  health.
                </p>
              </div>
              <Button>View Detailed Plan</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

