import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search, SortAsc } from "lucide-react"
import CommunityPosts from "@/components/community-posts"
import ExpertAnswers from "@/components/expert-answers"
import VoiceControl from "@/components/voice-control"

export default function CommunityPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Community Forum</h1>
          <p className="text-muted-foreground">Connect with fellow farmers and experts to share knowledge</p>
        </div>
        <div className="flex gap-3">
          <VoiceControl />
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Post
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input className="pl-9" placeholder="Search discussions..." />
            </div>
            <Button variant="outline" className="md:w-[140px]">
              <SortAsc className="mr-2 h-4 w-4" /> Sort
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="discussions">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="discussions">All Discussions</TabsTrigger>
          <TabsTrigger value="expert-advice">Expert Advice</TabsTrigger>
          <TabsTrigger value="my-posts">My Posts</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions">
          <CommunityPosts />
        </TabsContent>

        <TabsContent value="expert-advice">
          <ExpertAnswers />
        </TabsContent>

        <TabsContent value="my-posts">
          <Card className="p-8 text-center">
            <h3 className="text-xl font-medium mb-2">No Posts Yet</h3>
            <p className="text-muted-foreground mb-4">You haven't created any posts in the community.</p>
            <Button>Create Your First Post</Button>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

