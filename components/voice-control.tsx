"use client"

import { Button } from "@/components/ui/button"
import { Mic, MicOff } from "lucide-react"
import { useState } from "react"

export default function VoiceControl() {
  const [isListening, setIsListening] = useState(false)

  const toggleListening = () => {
    setIsListening(!isListening)
    // Here you would implement actual voice recognition
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={
        isListening
          ? "bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/40"
          : ""
      }
      onClick={toggleListening}
    >
      {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
      <span className="sr-only">{isListening ? "Stop voice control" : "Start voice control"}</span>
    </Button>
  )
}

