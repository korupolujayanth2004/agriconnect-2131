"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PriceCharts() {
  return (
    <div className="space-y-6">
      <div className="flex gap-4 justify-end">
        <Select defaultValue="rice">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select crop" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rice">Rice</SelectItem>
            <SelectItem value="wheat">Wheat</SelectItem>
            <SelectItem value="corn">Corn</SelectItem>
            <SelectItem value="cotton">Cotton</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="3m">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Time period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1m">1 Month</SelectItem>
            <SelectItem value="3m">3 Months</SelectItem>
            <SelectItem value="6m">6 Months</SelectItem>
            <SelectItem value="1y">1 Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="border rounded-lg p-4">
        <div className="h-[300px] flex items-center justify-center bg-muted/20">
          <p className="text-muted-foreground">Price trend chart will be displayed here</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          <h3 className="text-sm font-medium mb-2">Current Price</h3>
          <p className="text-2xl font-bold">₹2,200/100kg</p>
          <p className="text-xs text-green-600">+2.3% from last week</p>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="text-sm font-medium mb-2">Average Price (3M)</h3>
          <p className="text-2xl font-bold">₹2,150/100kg</p>
          <p className="text-xs text-muted-foreground">Based on regional data</p>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="text-sm font-medium mb-2">Forecasted Trend</h3>
          <p className="text-2xl font-bold">Increasing</p>
          <p className="text-xs text-muted-foreground">Next 2 weeks prediction</p>
        </div>
      </div>
    </div>
  )
}

