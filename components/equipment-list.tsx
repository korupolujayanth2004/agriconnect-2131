"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Star, Tractor } from "lucide-react"

// Mock data
const equipment = [
  {
    id: 1,
    name: "John Deere Combine Harvester",
    type: "Combine Harvester",
    owner: "Singh Agro Services",
    location: "North Region",
    distance: "12 km",
    rate: "₹2,500/hour",
    availability: "Available",
    rating: 4.8,
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 2,
    name: "New Holland TX66",
    type: "Combine Harvester",
    owner: "Modern Farm Equipment",
    location: "East Region",
    distance: "18 km",
    rate: "₹2,200/hour",
    availability: "Available from April 5",
    rating: 4.5,
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 3,
    name: "Mahindra 575 DI",
    type: "Tractor",
    owner: "Kumar Tractor Services",
    location: "West Region",
    distance: "8 km",
    rate: "₹1,200/day",
    availability: "Available",
    rating: 4.2,
    image: "/placeholder.svg?height=120&width=120",
  },
]

export default function EquipmentList() {
  return (
    <div className="space-y-4">
      {equipment.map((item) => (
        <Card key={item.id}>
          <div className="md:flex">
            <div className="md:w-[120px] md:h-auto shrink-0">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="h-full w-full object-cover aspect-square md:rounded-l-lg"
              />
            </div>
            <div className="flex-1">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Tractor className="h-5 w-5 text-primary" />
                      {item.name}
                    </CardTitle>
                    <CardDescription>{item.owner}</CardDescription>
                  </div>
                  <Badge variant={item.availability.includes("Available") ? "outline" : "secondary"}>{item.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center text-sm">
                    <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>
                      {item.location} ({item.distance})
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{item.availability}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="mr-2 h-4 w-4 text-amber-500" />
                    <span>{item.rating} (42 bookings)</span>
                  </div>
                  <div className="font-medium text-lg">{item.rate}</div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  Contact Owner
                </Button>
                <Button className="flex-1">Book Now</Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

