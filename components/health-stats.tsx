"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Heart, Activity, Thermometer, Weight } from "lucide-react"

const healthMetrics = [
  {
    label: "Blood Pressure",
    value: "120/80",
    status: "Normal",
    progress: 85,
    icon: Heart,
    color: "text-green-600",
  },
  {
    label: "Heart Rate",
    value: "72 bpm",
    status: "Good",
    progress: 90,
    icon: Activity,
    color: "text-blue-600",
  },
  {
    label: "Body Temperature",
    value: "98.6°F",
    status: "Normal",
    progress: 100,
    icon: Thermometer,
    color: "text-green-600",
  },
  {
    label: "BMI",
    value: "22.5",
    status: "Healthy",
    progress: 75,
    icon: Weight,
    color: "text-green-600",
  },
]

export function HealthStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Health Overview</CardTitle>
        <CardDescription>Latest health metrics from your records</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {healthMetrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <metric.icon className={`h-4 w-4 ${metric.color}`} />
                  <span className="font-medium">{metric.label}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{metric.value}</div>
                  <div className={`text-xs ${metric.color}`}>{metric.status}</div>
                </div>
              </div>
              <Progress value={metric.progress} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
