import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import ExpertsList from "@/components/experts-list"
import MyConsultations from "@/components/my-consultations"
import VoiceControl from "@/components/voice-control"

export default function ExpertsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Expert Consultations</h1>
          <p className="text-muted-foreground">Connect with agricultural experts for personalized advice</p>
        </div>
        <VoiceControl />
      </div>

      <Tabs defaultValue="experts">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="experts">Find Experts</TabsTrigger>
          <TabsTrigger value="consultations">My Consultations</TabsTrigger>
        </TabsList>

        <TabsContent value="experts" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-9" placeholder="Search experts by name or specialty..." />
                </div>
                <div className="flex gap-3 md:w-[260px]">
                  <div className="flex-1">
                    <Label htmlFor="specialty-filter" className="sr-only">
                      Specialty
                    </Label>
                    <Select>
                      <SelectTrigger id="specialty-filter">
                        <SelectValue placeholder="Specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Specialties</SelectItem>
                        <SelectItem value="crops">Crop Management</SelectItem>
                        <SelectItem value="pest">Pest Control</SelectItem>
                        <SelectItem value="soil">Soil Health</SelectItem>
                        <SelectItem value="irrigation">Irrigation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="language-filter" className="sr-only">
                      Language
                    </Label>
                    <Select>
                      <SelectTrigger id="language-filter">
                        <SelectValue placeholder="Language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Languages</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="hindi">Hindi</SelectItem>
                        <SelectItem value="punjabi">Punjabi</SelectItem>
                        <SelectItem value="tamil">Tamil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <ExpertsList />
        </TabsContent>

        <TabsContent value="consultations">
          <MyConsultations />
        </TabsContent>
      </Tabs>
    </div>
  )
}

