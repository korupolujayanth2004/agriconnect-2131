"use client"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, Leaf, Droplets, Bug } from "lucide-react"

// Mock data
const crops = [
  {
    id: 1,
    name: "Rice",
    variety: "Basmati",
    area: "2.5 hectares",
    stage: "Vegetative",
    plantedDate: "2025-02-10",
    health: 82,
    issues: ["Minor nutrient deficiency"],
    recommendations: ["Apply foliar spray", "Increase nitrogen"],
  },
  {
    id: 2,
    name: "Wheat",
    variety: "HD-2967",
    area: "3 hectares",
    stage: "Grain filling",
    plantedDate: "2024-11-15",
    health: 91,
    issues: [],
    recommendations: ["Regular monitoring"],
  },
  {
    id: 3,
    name: "Cotton",
    variety: "Bt Cotton",
    area: "1.5 hectares",
    stage: "Flowering",
    plantedDate: "2025-01-20",
    health: 68,
    issues: ["Early pest infestation", "Water stress"],
    recommendations: ["Apply recommended pesticide", "Increase irrigation frequency"],
  },
]

export default function CropHealth() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <Leaf className="h-5 w-5 text-green-500" />
            <h3 className="font-medium">Overall Health</h3>
          </div>
          <p className="text-3xl font-bold mb-1">Good</p>
          <div className="flex items-center text-sm text-green-600">
            <ArrowUp className="h-4 w-4 mr-1" />
            <span>5% from last week</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Based on your crop data</p>
        </div>

        <div className="border rounded-lg p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <Droplets className="h-5 w-5 text-blue-500" />
            <h3 className="font-medium">Water Status</h3>
          </div>
          <p className="text-3xl font-bold mb-1">Adequate</p>
          <div className="flex items-center text-sm text-muted-foreground">
            <span>No significant changes</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Based on soil moisture data</p>
        </div>

        <div className="border rounded-lg p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <Bug className="h-5 w-5 text-amber-500" />
            <h3 className="font-medium">Pest Risk</h3>
          </div>
          <p className="text-3xl font-bold mb-1">Moderate</p>
          <div className="flex items-center text-sm text-amber-600">
            <ArrowUp className="h-4 w-4 mr-1" />
            <span>Weather conditions favorable for pests</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Regional forecast based</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Your Crops</h3>

        {crops.map((crop) => (
          <div key={crop.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-medium">
                  {crop.name} ({crop.variety})
                </h4>
                <p className="text-sm text-muted-foreground">
                  {crop.area} • Planted: {new Date(crop.plantedDate).toLocaleDateString()}
                </p>
                <p className="text-sm">Current stage: {crop.stage}</p>
              </div>
              <Badge variant={crop.health > 80 ? "outline" : crop.health > 60 ? "secondary" : "destructive"}>
                {crop.health}% Health
              </Badge>
            </div>

            <Progress value={crop.health} className="h-2 mb-3" />

            <div className="space-y-2">
              {crop.issues.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-1">Issues Detected:</p>
                  <ul className="text-sm text-muted-foreground list-disc pl-5">
                    {crop.issues.map((issue, i) => (
                      <li key={i}>{issue}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <p className="text-sm font-medium mb-1">Recommendations:</p>
                <ul className="text-sm text-muted-foreground list-disc pl-5">
                  {crop.recommendations.map((rec, i) => (
                    <li key={i}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

