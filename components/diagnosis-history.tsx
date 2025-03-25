import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const diagnosisHistory = [
  {
    id: 1,
    date: "2025-03-20",
    cropType: "Wheat",
    diagnosis: "Leaf Rust",
    severity: "moderate",
    thumbnail: "/leafrust.jpg?height=100&width=100",
  },
  {
    id: 2,
    date: "2025-03-15",
    cropType: "Rice",
    diagnosis: "Brown Spot",
    severity: "mild",
    thumbnail: "/mild.jpg?height=100&width=100",
  },
]

export default function DiagnosisHistory() {
  if (diagnosisHistory.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Diagnosis History</CardTitle>
          <CardDescription>Your previous crop diagnoses will appear here</CardDescription>
        </CardHeader>
        <CardContent className="text-center py-6">
          <p className="text-sm text-muted-foreground">No diagnosis history found</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Diagnosis History</CardTitle>
        <CardDescription>Your previous crop diagnoses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {diagnosisHistory.map((diagnosis) => (
            <div key={diagnosis.id} className="flex items-center gap-4 p-3 rounded-lg border">
              <img
                src={diagnosis.thumbnail || "/placeholder.svg"}
                alt={`${diagnosis.cropType} with ${diagnosis.diagnosis}`}
                width={80}
                height={80}
                className="rounded object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium">{diagnosis.cropType}</h4>
                  <Badge
                    variant={
                      diagnosis.severity === "severe"
                        ? "destructive"
                        : diagnosis.severity === "moderate"
                          ? "default"
                          : "outline"
                    }
                  >
                    {diagnosis.severity}
                  </Badge>
                </div>
                <p className="text-sm mb-1">Diagnosis: {diagnosis.diagnosis}</p>
                <p className="text-xs text-muted-foreground">{new Date(diagnosis.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

