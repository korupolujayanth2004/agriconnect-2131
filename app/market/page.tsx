import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Search } from "lucide-react"
import MarketListings from "@/components/market-listings"
import PriceCharts from "@/components/price-charts"
import VoiceControl from "@/components/voice-control"

export default function MarketPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Market Access</h1>
          <p className="text-muted-foreground">Connect with buyers and get the best prices for your crops</p>
        </div>
        <div className="flex gap-3">
          <VoiceControl />
          <Button>
            <Plus className="mr-2 h-4 w-4" /> List Product
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input className="pl-9" placeholder="Search market listings..." />
            </div>
            <div className="flex gap-3 md:w-[260px]">
              <div className="flex-1">
                <Label htmlFor="crop-filter" className="sr-only">
                  Crop Type
                </Label>
                <select
                  id="crop-filter"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">All Crops</option>
                  <option value="rice">Rice</option>
                  <option value="wheat">Wheat</option>
                  <option value="corn">Corn</option>
                </select>
              </div>
              <div className="flex-1">
                <Label htmlFor="location-filter" className="sr-only">
                  Location
                </Label>
                <select
                  id="location-filter"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">All Locations</option>
                  <option value="north">North Region</option>
                  <option value="south">South Region</option>
                  <option value="east">East Region</option>
                  <option value="west">West Region</option>
                </select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="listings">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="listings">Market Listings</TabsTrigger>
          <TabsTrigger value="prices">Price Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="listings">
          <MarketListings />
        </TabsContent>

        <TabsContent value="prices">
          <Card>
            <CardHeader>
              <CardTitle>Crop Price Trends</CardTitle>
              <CardDescription>Track historical and current market prices</CardDescription>
            </CardHeader>
            <CardContent>
              <PriceCharts />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

