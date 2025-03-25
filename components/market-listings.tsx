"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MapPin, Phone } from "lucide-react"

// Mock data
const listings = [
  {
    id: 1,
    title: "Premium Quality Rice - 2000kg",
    seller: "Green Fields Cooperative",
    location: "North Region",
    distance: "15 km",
    price: "₹2,200/100kg",
    cropType: "Rice",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 2,
    title: "Organic Wheat - Direct from Farm",
    seller: "Natural Harvest Ltd",
    location: "East Region",
    distance: "28 km",
    price: "₹2,800/100kg",
    cropType: "Wheat",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 3,
    title: "Fresh Cotton - New Harvest",
    seller: "United Farmers Association",
    location: "South Region",
    distance: "22 km",
    price: "₹7,500/100kg",
    cropType: "Cotton",
    image: "/placeholder.svg?height=120&width=120",
  },
]

export default function MarketListings() {
  return (
    <div className="space-y-4">
      {listings.map((listing) => (
        <Card key={listing.id}>
          <div className="md:flex">
            <div className="md:w-[120px] md:h-auto shrink-0">
              <img
                src={listing.image || "/placeholder.svg"}
                alt={listing.title}
                className="h-full w-full object-cover aspect-square md:rounded-l-lg"
              />
            </div>
            <div className="flex-1">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{listing.title}</CardTitle>
                    <CardDescription>{listing.seller}</CardDescription>
                  </div>
                  <Badge>{listing.cropType}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center text-sm">
                    <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>
                      {listing.location} ({listing.distance})
                    </span>
                  </div>
                  <div className="font-medium text-lg">{listing.price}</div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="gap-1">
                  <Phone className="h-4 w-4" />
                  <span>Contact</span>
                </Button>
                <Button>
                  <span>View Details</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

