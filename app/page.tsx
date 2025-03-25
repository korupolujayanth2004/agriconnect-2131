import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  AlertCircle,
  ArrowRight,
  Cloud,
  BananaIcon as Fruit,
  Leaf,
  MessageSquare,
  Navigation,
  Tractor,
  Users2,
} from "lucide-react"
import WeatherAlert from "@/components/weather-alert"

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Welcome to AgriConnect</h1>
        <p className="text-lg text-muted-foreground">
          Your AI-powered platform for agricultural success and prosperity
        </p>
      </section>

      <WeatherAlert
        alert={{
          title: "Heavy Rain Expected",
          description:
            "Heavy rainfall predicted in your area for the next 48 hours. Consider delaying fertilizer application.",
          severity: "warning",
        }}
      />

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/10 pb-2">
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5" />
              AI Crop Diagnostics
            </CardTitle>
            <CardDescription>Detect crop diseases instantly</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="mb-4">Take a photo of your crops to identify diseases and get treatment recommendations.</p>
            <Link href="/diagnose">
              <Button className="w-full">
                Diagnose Crops <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/10 pb-2">
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-5 w-5" />
              Weather Insights
            </CardTitle>
            <CardDescription>Real-time weather forecasts</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="mb-4">Access detailed weather information and receive alerts for better planning.</p>
            <Link href="/weather">
              <Button className="w-full">
                View Forecast <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/10 pb-2">
            <CardTitle className="flex items-center gap-2">
              <Fruit className="h-5 w-5" />
              Farm Insights
            </CardTitle>
            <CardDescription>Data-driven recommendations</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="mb-4">Get personalized recommendations for irrigation, fertilization, and pest control.</p>
            <Link href="/insights">
              <Button className="w-full">
                View Insights <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/10 pb-2">
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Community Forum
            </CardTitle>
            <CardDescription>Connect with fellow farmers</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="mb-4">Share knowledge, ask questions, and learn from experienced farmers and experts.</p>
            <Link href="/community">
              <Button className="w-full">
                Join Discussions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/10 pb-2">
            <CardTitle className="flex items-center gap-2">
              <Navigation className="h-5 w-5" />
              Market Access
            </CardTitle>
            <CardDescription>Connect with buyers directly</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="mb-4">Find buyers, check current market prices, and sell your produce at better rates.</p>
            <Link href="/market">
              <Button className="w-full">
                Explore Market <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/10 pb-2">
            <CardTitle className="flex items-center gap-2">
              <Tractor className="h-5 w-5" />
              Harvester Booking
            </CardTitle>
            <CardDescription>Book equipment efficiently</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="mb-4">Book combine harvesters and other equipment for your harvesting needs.</p>
            <Link href="/equipment">
              <Button className="w-full">
                Book Equipment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      <section className="py-4">
        <h2 className="text-2xl font-semibold mb-4">Expert Assistance</h2>
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/10 pb-2">
            <CardTitle className="flex items-center gap-2">
              <Users2 className="h-5 w-5" />
              Expert Consultations
            </CardTitle>
            <CardDescription>Get personalized advice from agricultural experts</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="mb-4">
              Book consultations with verified agricultural experts who can provide personalized advice for your
              specific farming challenges. Receive detailed reports and recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/experts" className="flex-1">
                <Button className="w-full">Find Experts</Button>
              </Link>
              <Link href="/consultations/new" className="flex-1">
                <Button variant="secondary" className="w-full">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="py-4">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2 flex items-center">
                  <AlertCircle className="mr-2 h-5 w-5 text-primary" />
                  Need Help Using AgriConnect?
                </h3>
                <p className="text-muted-foreground">
                  Our support team is available to help you navigate the app through voice assistance and in-person
                  training.
                </p>
              </div>
              <Button variant="outline" className="md:self-end shrink-0">
                Get Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

