import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MessageCircleIcon as ChatBubble, ThumbsUp } from "lucide-react"

// Mock data
const posts = [
  {
    id: 1,
    author: "Ravi Singh",
    avatar: "/c1.png?height=50&width=50",
    time: "2 hours ago",
    title: "Dealing with Brown Spot in Rice",
    content:
      "I've noticed some brown spots on my rice crops. Has anyone dealt with this before? What treatments worked for you?",
    likes: 12,
    comments: 8,
    tags: ["Rice", "Disease", "Question"],
    isExpertReply: false,
    image: "/comunity1.png?height=200&width=400",
  },
  {
    id: 2,
    author: "Dr. Anita Sharma",
    avatar: "/a.png?height=50&width=50",
    time: "1 day ago",
    title: "Tips for Water Conservation During Summer",
    content:
      "With summer approaching, water conservation becomes crucial. Here are some techniques I recommend for efficient irrigation...",
    likes: 45,
    comments: 23,
    tags: ["Irrigation", "Expert Advice"],
    isExpertReply: true,
  },
  {
    id: 3,
    author: "Suresh Kumar",
    avatar: "/s.png?height=50&width=50",
    time: "3 days ago",
    title: "Market Prices for Wheat in South Region",
    content:
      "Has anyone sold wheat recently in the South Region? I'm trying to gauge the current market price before taking my harvest to market.",
    likes: 8,
    comments: 15,
    tags: ["Wheat", "Market", "Question"],
    isExpertReply: false,
  },
]

export default function CommunityPosts() {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id} className={post.isExpertReply ? "border-primary/30 bg-primary/5" : ""}>
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-3">
              <Avatar>
                <AvatarImage src={post.avatar} alt={post.author} />
                <AvatarFallback>
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{post.author}</h3>
                  {post.isExpertReply && (
                    <Badge variant="outline" className="text-primary border-primary">
                      Expert
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{post.time}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-medium">{post.title}</h2>
              <p className="text-sm">{post.content}</p>

              {post.image && (
                <div className="mt-3">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt="Post attachment"
                    className="rounded-md max-h-[300px] w-auto"
                  />
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="px-6 py-3 border-t flex justify-between">
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                <ThumbsUp className="h-4 w-4" />
                <span>{post.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                <ChatBubble className="h-4 w-4" />
                <span>{post.comments}</span>
              </Button>
            </div>
            <Button variant="ghost" size="sm">
              View Discussion
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

