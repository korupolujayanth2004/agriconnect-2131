"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Bug, FileText, Landmark, TreesIcon as Plant } from "lucide-react"

// Mock data
const alerts = [
  {
    id: 1,
    title: "Rice Stem Borer Risk",
    description: "High risk of rice stem borer infestation in your region based on current weather conditions.",
    level: "high",
    crop: "Rice",
  },
  {
    id: 2,
    title: "Aphid Activity",
    description: "Moderate aphid activity detected in neighboring farms. Monitor your crops closely.",
    level: "medium",
    crop: "Wheat",
  },
]

const treatments = [
  {
    id: 1,
    name: "Neem Oil Spray",
    type: "Organic",
    effectiveness: "Medium",
    target: "Aphids, Mites",
    application: "Foliar spray, 5ml/L of water",
    waitPeriod: "1 day",
  },
  {
    id: 2,
    name: "Bacillus thuringiensis (Bt)",
    type: "Biological",
    effectiveness: "High",
    target: "Caterpillars, Borers",
    application: "Foliar spray, 2g/L of water",
    waitPeriod: "None",
  },
  {
    id: 3,
    name: "Imidacloprid",
    type: "Chemical",
    effectiveness: "High",
    target: "Sucking pests",
    application: "Foliar spray, 0.5ml/L of water",
    waitPeriod: "7 days",
  },
]

export default function PestControl() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-medium flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          Current Pest Alerts
        </h3>

        {alerts.length > 0 ? (
          <div className="space-y-4">
            {alerts.map((alert) => (
              <Card
                key={alert.id}
                className={
                  alert.level === "high"
                    ? "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/50"
                    : alert.level === "medium"
                      ? "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/50"
                      : "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/50"
                }
              >
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{alert.title}</h4>
                        <Badge
                          variant={
                            alert.level === "high" ? "destructive" : alert.level === "medium" ? "default" : "outline"
                          }
                        >
                          {alert.level === "high" ? "High Risk" : alert.level === "medium" ? "Medium Risk" : "Low Risk"}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm gap-2 mb-2">
                        <Plant className="h-4 w-4 text-muted-foreground" />
                        <span>Crop: {alert.crop}</span>
                      </div>
                      <p className="text-sm">{alert.description}</p>
                    </div>
                    <div className="md:shrink-0 mt-3 md:mt-0">
                      <Button size="sm">View Solutions</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-6 text-center">
              <Bug className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <h3 className="font-medium mb-1">No Active Pest Alerts</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Your crops appear healthy with no detected pest issues.
              </p>
              <Button variant="outline">Run Manual Scan</Button>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-medium flex items-center gap-2">
            <Bug className="h-5 w-5 text-primary" />
            Recommended Treatments
          </h3>
          <Button variant="outline" size="sm" className="gap-1">
            <FileText className="h-4 w-4" />
            <span>Treatment History</span>
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Treatment
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Target Pests
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Application
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Waiting Period
                </th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {treatments.map((treatment) => (
                <tr key={treatment.id}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm font-medium">{treatment.name}</div>
                    <div className="flex items-center mt-1">
                      <Badge
                        variant={
                          treatment.effectiveness === "High"
                            ? "outline"
                            : treatment.effectiveness === "Medium"
                              ? "secondary"
                              : "default"
                        }
                        className="text-xs"
                      >
                        {treatment.effectiveness} Effectiveness
                      </Badge>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{treatment.type}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{treatment.target}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{treatment.application}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{treatment.waitPeriod}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm">
                    <Button variant="ghost" size="sm">
                      Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center gap-2">
            <Landmark className="h-5 w-5 text-primary" />
            <span className="font-medium">Find Local Suppliers</span>
          </div>
          <Button size="sm">Search Nearby</Button>
        </div>
      </div>
    </div>
  )
}

