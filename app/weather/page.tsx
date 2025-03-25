import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WeatherForecast from "@/components/weather-forecast"
import WeatherMap from "@/components/weather-map"
import WeatherAlerts from "@/components/weather-alerts"
import VoiceControl from "@/components/voice-control"

export default function WeatherPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Weather Insights</h1>
          <p className="text-muted-foreground">Real-time weather information and forecasts for better planning</p>
        </div>
        <VoiceControl />
      </div>

      <Tabs defaultValue="forecast">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="forecast">Forecast</TabsTrigger>
          <TabsTrigger value="map">Weather Map</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="forecast" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Weather</CardTitle>
              <CardDescription>Updated as of {new Date().toLocaleTimeString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <WeatherForecast />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="map">
          <Card>
            <CardHeader>
              <CardTitle>Weather Map</CardTitle>
              <CardDescription>Interactive weather patterns for your region</CardDescription>
            </CardHeader>
            <CardContent>
              <WeatherMap />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts">
          <Card>
            <CardHeader>
              <CardTitle>Weather Alerts</CardTitle>
              <CardDescription>Important weather warnings for your area</CardDescription>
            </CardHeader>
            <CardContent>
              <WeatherAlerts />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

