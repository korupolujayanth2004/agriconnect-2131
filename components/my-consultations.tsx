import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Download, FileText, Video } from "lucide-react"

// Mock data
const consultations = [
  {
    id: 1,
    expertName: "Dr. Rajesh Kumar",
    expertTitle: "Agricultural Scientist",
    date: "2025-03-25",
    time: "10:00 AM",
    status: "upcoming",
    topic: "Soil Health Assessment",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    expertName: "Anita Sharma",
    expertTitle: "Pest Control Expert",
    date: "2025-03-18",
    time: "2:00 PM",
    status: "completed",
    topic: "Organic Pest Management",
    hasReport: true,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function MyConsultations() {
  if (consultations.length === 0) {
    return (
      <Card className="p-8 text-center">
        <h3 className="text-xl font-medium mb-2">No Consultations Yet</h3>
        <p className="text-muted-foreground mb-4">You haven't booked any consultations with experts.</p>
        <Button>Book Your First Consultation</Button>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {consultations.map((consultation) => (
        <Card key={consultation.id}>
          <div className="md:flex">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={consultation.image} alt={consultation.expertName} />
                  <AvatarFallback>
                    {consultation.expertName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-medium">{consultation.expertName}</h3>
                      <p className="text-sm text-muted-foreground">{consultation.expertTitle}</p>
                    </div>
                    <Badge variant={consultation.status === "upcoming" ? "outline" : "secondary"}>
                      {consultation.status === "upcoming" ? "Upcoming" : "Completed"}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center text-sm">
                      <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Topic: {consultation.topic}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>
                        {new Date(consultation.date).toLocaleDateString()} at {consultation.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {consultation.status === "upcoming" ? (
                      <>
                        <Button>
                          <Video className="mr-2 h-4 w-4" />
                          Join Session
                        </Button>
                        <Button variant="outline">Reschedule</Button>
                      </>
                    ) : (
                      <>
                        {consultation.hasReport && (
                          <Button>
                            <Download className="mr-2 h-4 w-4" />
                            Download Report
                          </Button>
                        )}
                        <Button variant="outline">Book Again</Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  )
}

