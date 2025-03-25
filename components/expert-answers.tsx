import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ThumbsUp } from "lucide-react"

// Mock data
const expertAnswers = [
  {
    id: 1,
    question: "What's the best way to control weeds in organic farming?",
    questioner: "Rajiv Mehta",
    answer:
      "For organic weed control, consider these methods: 1) Mulching with organic materials like straw or leaves to suppress weed growth, 2) Regular shallow cultivation to disrupt weed seedlings, 3) Crop rotation to break weed cycles, 4) Cover cropping during off-seasons, and 5) Thermal weeding for smaller areas. The key is consistency and implementing multiple strategies together.",
    expert: "Dr. Sunita Patel",
    expertTitle: "Organic Farming Specialist",
    avatar: "/a.png?height=50&width=50",
    time: "1 day ago",
    likes: 34,
  },
  {
    id: 2,
    question: "How can I improve soil drainage in my paddy field?",
    questioner: "Vijay Kumar",
    answer:
      "To improve drainage in paddy fields, I recommend: 1) Install subsurface drainage pipes if the issue is severe, 2) Create proper field leveling with a slight slope toward drainage channels, 3) Incorporate organic matter to improve soil structure over time, 4) Consider raised bed farming for portions of your field, and 5) Maintain clean drainage ditches around field perimeters. Assess your specific field conditions before implementing these solutions.",
    expert: "Prof. Raghav Singh",
    expertTitle: "Soil & Water Management Expert",
    avatar: "/s.png?height=50&width=50",
    time: "3 days ago",
    likes: 28,
  },
]

export default function ExpertAnswers() {
  return (
    <div className="space-y-4">
      {expertAnswers.map((item) => (
        <Card key={item.id} className="border-primary/30 bg-primary/5">
          <CardContent className="p-6">
            <div className="mb-4 p-4 bg-background rounded-md border">
              <p className="font-medium mb-1">{item.question}</p>
              <p className="text-xs text-muted-foreground">Asked by {item.questioner}</p>
            </div>

            <div className="flex items-start gap-3 mb-3">
              <Avatar>
                <AvatarImage src={item.avatar} alt={item.expert} />
                <AvatarFallback>
                  {item.expert
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{item.expert}</h3>
                  <Badge variant="outline" className="text-primary border-primary">
                    Expert
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{item.expertTitle}</p>
                <p className="text-xs text-muted-foreground">{item.time}</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm">{item.answer}</p>
            </div>
          </CardContent>
          <CardFooter className="px-6 py-3 border-t flex justify-between">
            <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
              <ThumbsUp className="h-4 w-4" />
              <span>{item.likes}</span>
            </Button>
            <Button variant="ghost" size="sm">
              View Full Discussion
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

