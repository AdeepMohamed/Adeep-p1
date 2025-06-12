"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, FileText, Activity, Stethoscope, Pill, Syringe } from "lucide-react"
import { useState } from "react"

const timelineEvents = [
  {
    id: 1,
    date: "2024-01-15",
    title: "Blood Test Results",
    category: "Lab Report",
    description: "Complete Blood Count (CBC) - All values within normal range",
    doctor: "Dr. Smith",
    icon: Activity,
    status: "Normal",
  },
  {
    id: 2,
    date: "2024-01-10",
    title: "Chest X-Ray",
    category: "Imaging",
    description: "Routine chest imaging - No abnormalities detected",
    doctor: "Dr. Johnson",
    icon: FileText,
    status: "Clear",
  },
  {
    id: 3,
    date: "2024-01-08",
    title: "Antibiotic Prescription",
    category: "Prescription",
    description: "Amoxicillin 500mg - For respiratory infection treatment",
    doctor: "Dr. Brown",
    icon: Pill,
    status: "Active",
  },
  {
    id: 4,
    date: "2024-01-05",
    title: "Annual Physical Exam",
    category: "Checkup",
    description: "Comprehensive physical examination - Overall health excellent",
    doctor: "Dr. Wilson",
    icon: Stethoscope,
    status: "Complete",
  },
  {
    id: 5,
    date: "2023-12-20",
    title: "COVID-19 Booster",
    category: "Vaccination",
    description: "COVID-19 booster vaccination administered",
    doctor: "Clinic Staff",
    icon: Syringe,
    status: "Complete",
  },
  {
    id: 6,
    date: "2023-12-15",
    title: "Lipid Panel",
    category: "Lab Report",
    description: "Cholesterol levels slightly elevated - Dietary changes recommended",
    doctor: "Dr. Smith",
    icon: Activity,
    status: "Follow-up needed",
  },
]

export default function TimelinePage() {
  const [filterPeriod, setFilterPeriod] = useState("all")
  const [filterCategory, setFilterCategory] = useState("all")

  const filteredEvents = timelineEvents.filter((event) => {
    const eventDate = new Date(event.date)
    const now = new Date()

    let periodMatch = true
    if (filterPeriod === "30days") {
      const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
      periodMatch = eventDate >= thirtyDaysAgo
    } else if (filterPeriod === "90days") {
      const ninetyDaysAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000)
      periodMatch = eventDate >= ninetyDaysAgo
    }

    const categoryMatch = filterCategory === "all" || event.category === filterCategory

    return periodMatch && categoryMatch
  })

  const categories = ["all", ...Array.from(new Set(timelineEvents.map((e) => e.category)))]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Health Timeline</h2>
        <p className="text-muted-foreground">Chronological view of your medical history</p>
      </div>

      {/* Filter Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Timeline Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <Select value={filterPeriod} onValueChange={setFilterPeriod}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="90days">Last 90 Days</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Medical Timeline ({filteredEvents.length} events)</CardTitle>
          <CardDescription>Your health journey over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-6">
              {filteredEvents.map((event, index) => (
                <div key={event.id} className="relative flex items-start space-x-4">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-background border-2 border-primary">
                    <event.icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Event content */}
                  <div className="flex-1 min-w-0 pb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{event.title}</h3>
                        <Badge variant="secondary">{event.category}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">{new Date(event.date).toLocaleDateString()}</div>
                    </div>

                    <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="text-muted-foreground">by {event.doctor}</span>
                        <Badge
                          variant={
                            event.status === "Normal" || event.status === "Clear" || event.status === "Complete"
                              ? "default"
                              : event.status === "Active"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {event.status}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
