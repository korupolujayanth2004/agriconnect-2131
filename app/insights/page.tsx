import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CropHealth from "@/components/crop-health"
import IrrigationRecommendations from "@/components/irrigation-recommendations"
import PestControl from "@/components/pest-control"
import FertilizerSchedule from "@/components/fertilizer-schedule"
import VoiceControl from "@/components/voice-control"

export default function InsightsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Farm Insights</h1>
          <p className="text-muted-foreground">Data-driven recommendations for optimal farming practices</p>
        </div>
        <VoiceControl />
      </div>

      <Tabs defaultValue="crop-health">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="crop-health">Crop Health</TabsTrigger>
          <TabsTrigger value="irrigation">Irrigation</TabsTrigger>
          <TabsTrigger value="pest-control">Pest Control</TabsTrigger>
          <TabsTrigger value="fertilizer">Fertilizer</TabsTrigger>
        </TabsList>

        <TabsContent value="crop-health">
          <Card>
            <CardHeader>
              <CardTitle>Crop Health Monitoring</CardTitle>
              <CardDescription>Current status and recommendations for your crops</CardDescription>
            </CardHeader>
            <CardContent>
              <CropHealth />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="irrigation">
          <Card>
            <CardHeader>
              <CardTitle>Irrigation Schedule</CardTitle>
              <CardDescription>Optimal watering recommendations based on soil conditions and weather</CardDescription>
            </CardHeader>
            <CardContent>
              <IrrigationRecommendations />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pest-control">
          <Card>
            <CardHeader>
              <CardTitle>Pest Control Strategies</CardTitle>
              <CardDescription>Targeted recommendations to manage pests in your crops</CardDescription>
            </CardHeader>
            <CardContent>
              <PestControl />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fertilizer">
          <Card>
            <CardHeader>
              <CardTitle>Fertilizer Schedule</CardTitle>
              <CardDescription>Nutrition recommendations based on soil analysis and crop needs</CardDescription>
            </CardHeader>
            <CardContent>
              <FertilizerSchedule />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

