import { AlertCircle, AlertTriangle, Info, X } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface WeatherAlertProps {
  alert: {
    title: string
    description: string
    severity: "info" | "warning" | "error"
  }
}

export default function WeatherAlert({ alert }: WeatherAlertProps) {
  const { title, description, severity } = alert

  const getAlertIcon = () => {
    switch (severity) {
      case "info":
        return <Info className="h-4 w-4" />
      case "warning":
        return <AlertTriangle className="h-4 w-4" />
      case "error":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <Info className="h-4 w-4" />
    }
  }

  const getAlertClassnames = () => {
    switch (severity) {
      case "info":
        return "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-950 dark:border-blue-900 dark:text-blue-300"
      case "warning":
        return "bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950 dark:border-amber-900 dark:text-amber-300"
      case "error":
        return "bg-red-50 border-red-200 text-red-800 dark:bg-red-950 dark:border-red-900 dark:text-red-300"
      default:
        return "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-950 dark:border-blue-900 dark:text-blue-300"
    }
  }

  return (
    <Alert className={getAlertClassnames()}>
      <div className="flex items-start gap-4">
        <div className="flex-1 flex gap-2">
          {getAlertIcon()}
          <div>
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{description}</AlertDescription>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
          <X className="h-4 w-4" />
          <span className="sr-only">Dismiss</span>
        </Button>
      </div>
    </Alert>
  )
}

