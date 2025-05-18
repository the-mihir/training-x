"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

type ChartData = {
  name: string
  value: number
  [key: string]: any
}[]

type ChartType = "line" | "area" | "bar" | "pie"

interface AnimatedChartProps {
  title: string
  subtitle?: string
  data: ChartData
  type?: ChartType
  colors?: string[]
  className?: string
  height?: number
  showAnimation?: boolean
  showGrid?: boolean
  showTooltip?: boolean
  showLegend?: boolean
  dataKeys?: string[]
}

export function AnimatedChart({
  title,
  subtitle,
  data,
  type = "line",
  colors = ["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#ef4444"],
  className,
  height = 300,
  showAnimation = true,
  showGrid = true,
  showTooltip = true,
  showLegend = true,
  dataKeys = ["value"],
}: AnimatedChartProps) {
  const [chartData, setChartData] = useState<ChartData>([])

  // Animation effect
  useEffect(() => {
    if (!showAnimation) {
      setChartData(data)
      return
    }

    setChartData([])

    const timer = setTimeout(() => {
      setChartData(data)
    }, 500)

    return () => clearTimeout(timer)
  }, [data, showAnimation])

  const renderChart = () => {
    switch (type) {
      case "line":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />}
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              {showTooltip && <Tooltip />}
              {showLegend && <Legend />}
              {dataKeys.map((key, index) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={colors[index % colors.length]}
                  strokeWidth={2}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                  isAnimationActive={showAnimation}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        )

      case "area":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <AreaChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />}
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              {showTooltip && <Tooltip />}
              {showLegend && <Legend />}
              {dataKeys.map((key, index) => (
                <Area
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={colors[index % colors.length]}
                  fill={`${colors[index % colors.length]}20`}
                  isAnimationActive={showAnimation}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        )

      case "bar":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />}
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              {showTooltip && <Tooltip />}
              {showLegend && <Legend />}
              {dataKeys.map((key, index) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={colors[index % colors.length]}
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={showAnimation}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        )

      case "pie":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey={dataKeys[0]}
                isAnimationActive={showAnimation}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              {showTooltip && <Tooltip />}
              {showLegend && <Legend />}
            </PieChart>
          </ResponsiveContainer>
        )

      default:
        return null
    }
  }

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </CardHeader>
      <CardContent className="p-0 pb-4">{renderChart()}</CardContent>
    </Card>
  )
}
