"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, FileText, X, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const documentCategories = ["Lab Report", "Imaging", "Prescription", "Vaccination", "Report", "Insurance", "Other"]

export default function UploadPage() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({})
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    date: "",
    doctor: "",
    notes: "",
  })

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setSelectedFiles((prev) => [...prev, ...files])
  }

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleUpload = async () => {
    // Simulate upload progress
    selectedFiles.forEach((file, index) => {
      let progress = 0
      const interval = setInterval(() => {
        progress += 10
        setUploadProgress((prev) => ({
          ...prev,
          [file.name]: progress,
        }))

        if (progress >= 100) {
          clearInterval(interval)
        }
      }, 200)
    })
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Upload Documents</h2>
        <p className="text-muted-foreground">Add new medical records to your vault</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Upload Form */}
        <Card>
          <CardHeader>
            <CardTitle>Document Information</CardTitle>
            <CardDescription>Provide details about your medical document</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Document Title</Label>
              <Input
                id="title"
                placeholder="e.g., Blood Test Results"
                value={formData.title}
                onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select document category" />
                </SelectTrigger>
                <SelectContent>
                  {documentCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Document Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="doctor">Doctor/Provider</Label>
              <Input
                id="doctor"
                placeholder="e.g., Dr. Smith"
                value={formData.doctor}
                onChange={(e) => setFormData((prev) => ({ ...prev, doctor: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Additional notes about this document..."
                value={formData.notes}
                onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
              />
            </div>
          </CardContent>
        </Card>

        {/* File Upload */}
        <Card>
          <CardHeader>
            <CardTitle>Upload Files</CardTitle>
            <CardDescription>Select medical documents to upload (PDF, JPG, PNG)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Drop Zone */}
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-muted-foreground/50 transition-colors">
              <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <div className="space-y-2">
                <p className="text-sm font-medium">Drop files here or click to browse</p>
                <p className="text-xs text-muted-foreground">Supports PDF, JPG, PNG up to 10MB each</p>
              </div>
              <Input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <Label htmlFor="file-upload" className="cursor-pointer">
                <Button variant="outline" className="mt-4">
                  Select Files
                </Button>
              </Label>
            </div>

            {/* Selected Files */}
            {selectedFiles.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium">Selected Files ({selectedFiles.length})</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border rounded">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-4 w-4 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium truncate max-w-48">{file.name}</p>
                          <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {uploadProgress[file.name] === 100 ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : uploadProgress[file.name] ? (
                          <div className="text-xs">{uploadProgress[file.name]}%</div>
                        ) : null}
                        <Button size="sm" variant="ghost" onClick={() => removeFile(index)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Upload Button */}
            <Button
              onClick={handleUpload}
              disabled={selectedFiles.length === 0 || !formData.title || !formData.category}
              className="w-full"
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload Documents
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Uploads */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
          <CardDescription>Documents uploaded in the last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "Blood Test Results.pdf", date: "2024-01-15", status: "Processed" },
              { name: "Chest X-Ray.jpg", date: "2024-01-10", status: "Processed" },
              { name: "Prescription.pdf", date: "2024-01-08", status: "Processing" },
            ].map((upload, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">{upload.name}</p>
                    <p className="text-sm text-muted-foreground">{upload.date}</p>
                  </div>
                </div>
                <Badge variant={upload.status === "Processed" ? "default" : "secondary"}>{upload.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
