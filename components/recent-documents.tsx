"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, Eye } from "lucide-react"

const recentDocs = [
  {
    id: 1,
    title: "Blood Test Results",
    category: "Lab Report",
    date: "2024-01-15",
    size: "2.3 MB",
  },
  {
    id: 2,
    title: "Chest X-Ray",
    category: "Imaging",
    date: "2024-01-10",
    size: "5.1 MB",
  },
  {
    id: 3,
    title: "Prescription - Antibiotics",
    category: "Prescription",
    date: "2024-01-08",
    size: "1.2 MB",
  },
  {
    id: 4,
    title: "Annual Physical Exam",
    category: "Report",
    date: "2024-01-05",
    size: "3.4 MB",
  },
]

export function RecentDocuments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Documents</CardTitle>
        <CardDescription>Your latest uploaded medical records</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentDocs.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="font-medium">{doc.title}</p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Badge variant="secondary">{doc.category}</Badge>
                    <span>{doc.date}</span>
                    <span>{doc.size}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-1">
                <Button size="sm" variant="ghost">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
