"use client"

import WeatherAlert from "@/components/weather-alert"

// Mock data
const alerts = [
  {
    id: 1,
    title: "Heavy Rain Expected",
    description:
      "Heavy rainfall predicted in your area for the next 48 hours. Consider delaying fertilizer application.",
    severity: "warning",
  },
  {
    id: 2,
    title: "Heat Wave Alert",
    description: "Temperatures expected to rise above 38°C. Ensure adequate irrigation for your crops.",
    severity: "error",
  },
  {
    id: 3,
    title: "Frost Advisory",
    description: "Light frost possible in the early morning hours. Consider covering sensitive crops.",
    severity: "info",
  },
]

export default function WeatherAlerts() {
  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <WeatherAlert key={alert.id} alert={alert as any} />
      ))}
    </div>
  )
}

