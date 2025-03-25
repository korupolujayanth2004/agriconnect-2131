"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { useState } from "react"

export default function EquipmentSearch() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <div className="space-y-2">
        <Label htmlFor="equipment-type">Equipment Type</Label>
        <Select defaultValue="harvester">
          <SelectTrigger id="equipment-type">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="harvester">Combine Harvester</SelectItem>
            <SelectItem value="tractor">Tractor</SelectItem>
            <SelectItem value="thresher">Thresher</SelectItem>
            <SelectItem value="planter">Planter</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Location</Label>
        <div className="flex">
          <Button variant="outline" className="w-full justify-start text-left font-normal">
            <MapPin className="mr-2 h-4 w-4" />
            <span>Current Location</span>
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Date Needed</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex items-end">
        <Button className="w-full">Search</Button>
      </div>
    </div>
  )
}

