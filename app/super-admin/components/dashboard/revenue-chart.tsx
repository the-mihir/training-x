"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const data = [
  { name: "Jan", revenue: 18000, users: 2400, courses: 24 },
  { name: "Feb", revenue: 25000, users: 3600, courses: 28 },
  { name: "Mar", revenue: 32000, users: 4200, courses: 35 },
  { name: "Apr", revenue: 28000, users: 3800, courses: 40 },
  { name: "May", revenue: 35000, users: 4800, courses: 45 },
  { name: "Jun", revenue: 42000, users: 5600, courses: 52 },
  { name: "Jul", revenue: 38000, users: 5200, courses: 58 },
  { name: "Aug", revenue: 45000, users: 6100, courses: 62 },
  { name: "Sep", revenue: 52000, users: 6800, courses: 68 },
  { name: "Oct", revenue: 58000, users: 7400, courses: 72 },
  { name: "Nov", revenue: 62000, users: 8000, courses: 78 },
  { name: "Dec", revenue: 68000, users: 8600, courses: 85 },
]

export function RevenueChart() {
  const [timeRange, setTimeRange] = useState("year")

  return (
    <Card className="col-span-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Revenue & Growth</CardTitle>
          <CardDescription>Platform revenue, user growth, and course creation</CardDescription>
        </div>
        <Select defaultValue={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Last 7 days</SelectItem>
            <SelectItem value="month">Last 30 days</SelectItem>
            <SelectItem value="quarter">Last 90 days</SelectItem>
            <SelectItem value="year">Last 12 months</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="left" type="monotone" dataKey="users" stroke="#82ca9d" />
            <Line yAxisId="right" type="monotone" dataKey="courses" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
