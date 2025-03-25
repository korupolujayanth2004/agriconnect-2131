import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, MapPin, MessageSquare, Star } from "lucide-react"

// Mock data
const experts = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    title: "Agricultural Scientist",
    specialties: ["Crop Management", "Soil Health"],
    location: "North Region",
    experience: "15 years",
    languages: ["English", "Hindi"],
    rating: 4.9,
    reviews: 124,
    price: "₹1,200/session",
    availability: "Available in 2 days",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Anita Sharma",
    title: "Pest Control Expert",
    specialties: ["Pest Control", "Organic Farming"],
    location: "West Region",
    experience: "8 years",
    languages: ["English", "Punjabi"],
    rating: 4.7,
    reviews: 86,
    price: "₹950/session",
    availability: "Available tomorrow",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Prof. Suresh Patel",
    title: "Irrigation Specialist",
    specialties: ["Irrigation", "Water Management"],
    location: "South Region",
    experience: "20 years",
    languages: ["English", "Tamil", "Hindi"],
    rating: 4.8,
    reviews: 152,
    price: "₹1,500/session",
    availability: "Available in 3 days",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function ExpertsList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {experts.map((expert) => (
        <Card key={expert.id} className="flex flex-col">
          <CardHeader className="flex flex-row gap-4 pb-3">
            <Avatar className="h-16 w-16">
              <AvatarImage src={expert.image} alt={expert.name} />
              <AvatarFallback>
                {expert.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h3 className="font-medium">{expert.name}</h3>
              <p className="text-sm text-muted-foreground">{expert.title}</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {expert.specialties.map((specialty) => (
                  <Badge key={specialty} variant="outline" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 pb-3">
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>
                  {expert.location} • {expert.experience} experience
                </span>
              </div>
              <div className="flex items-center">
                <Star className="mr-2 h-4 w-4 text-amber-500" />
                <span className="font-medium">{expert.rating}</span>
                <span className="text-muted-foreground ml-1">({expert.reviews} reviews)</span>
              </div>
              <p>Languages: {expert.languages.join(", ")}</p>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{expert.availability}</span>
              </div>
              <p className="font-medium">{expert.price}</p>
            </div>
          </CardContent>
          <CardFooter className="pt-0 flex gap-3">
            <Button variant="outline" className="flex-1">
              <MessageSquare className="mr-2 h-4 w-4" />
              Message
            </Button>
            <Button className="flex-1">Book Consultation</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

