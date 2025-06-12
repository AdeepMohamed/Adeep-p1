"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Search, Filter, Download, Eye, Trash2, Share } from "lucide-react"

const medicalRecords = [
  {
    id: 1,
    title: "Complete Blood Count (CBC)",
    category: "Lab Report",
    date: "2024-01-15",
    doctor: "Dr. Smith",
    size: "2.3 MB",
    status: "Normal",
  },
  {
    id: 2,
    title: "Chest X-Ray",
    category: "Imaging",
    date: "2024-01-10",
    doctor: "Dr. Johnson",
    size: "5.1 MB",
    status: "Clear",
  },
  {
    id: 3,
    title: "Amoxicillin Prescription",
    category: "Prescription",
    date: "2024-01-08",
    doctor: "Dr. Brown",
    size: "1.2 MB",
    status: "Active",
  },
  {
    id: 4,
    title: "Annual Physical Examination",
    category: "Report",
    date: "2024-01-05",
    doctor: "Dr. Wilson",
    size: "3.4 MB",
    status: "Complete",
  },
  {
    id: 5,
    title: "COVID-19 Vaccination Certificate",
    category: "Vaccination",
    date: "2023-12-20",
    doctor: "Clinic Staff",
    size: "0.8 MB",
    status: "Valid",
  },
  {
    id: 6,
    title: "Lipid Panel Results",
    category: "Lab Report",
    date: "2023-12-15",
    doctor: "Dr. Smith",
    size: "1.9 MB",
    status: "Elevated",
  },
]

export default function RecordsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("date")

  const filteredRecords = medicalRecords
    .filter(
      (record) =>
        record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.doctor.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((record) => categoryFilter === "all" || record.category === categoryFilter)
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      return a.title.localeCompare(b.title)
    })

  const categories = ["all", ...Array.from(new Set(medicalRecords.map((r) => r.category)))]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Medical Records</h2>
        <p className="text-muted-foreground">Manage and view all your medical documents</p>
      </div>

      {/* Search and Filter Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Search & Filter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search records, doctors, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
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
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Sort by Date</SelectItem>
                <SelectItem value="title">Sort by Title</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Records List */}
      <Card>
        <CardHeader>
          <CardTitle>Records ({filteredRecords.length})</CardTitle>
          <CardDescription>Your medical documents and reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredRecords.map((record) => (
              <div
                key={record.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <FileText className="h-10 w-10 text-blue-600" />
                  <div className="space-y-1">
                    <h3 className="font-semibold">{record.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Badge variant="secondary">{record.category}</Badge>
                      <span>•</span>
                      <span>{record.date}</span>
                      <span>•</span>
                      <span>{record.doctor}</span>
                      <span>•</span>
                      <span>{record.size}</span>
                    </div>
                    <Badge variant={record.status === "Normal" || record.status === "Clear" ? "default" : "secondary"}>
                      {record.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Share className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
