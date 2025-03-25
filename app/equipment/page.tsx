import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import EquipmentList from "@/components/equipment-list"
import VoiceControl from "@/components/voice-control"
import EquipmentSearch from "@/components/equipment-search"

export default function EquipmentPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Harvester Booking</h1>
          <p className="text-muted-foreground">Book harvesters and equipment for your farming needs</p>
        </div>
        <VoiceControl />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Find Available Equipment</CardTitle>
          <CardDescription>Search for harvesters and agricultural equipment in your area</CardDescription>
        </CardHeader>
        <CardContent>
          <EquipmentSearch />
        </CardContent>
      </Card>

      <EquipmentList />
    </div>
  )
}

