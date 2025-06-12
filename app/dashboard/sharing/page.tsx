"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Share2, Mail, Shield, Copy, Eye, Trash2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const availableDocuments = [
  { id: 1, title: "Blood Test Results", category: "Lab Report", date: "2024-01-15" },
  { id: 2, title: "Chest X-Ray", category: "Imaging", date: "2024-01-10" },
  { id: 3, title: "Prescription - Antibiotics", category: "Prescription", date: "2024-01-08" },
  { id: 4, title: "Annual Physical Exam", category: "Report", date: "2024-01-05" },
  { id: 5, title: "Vaccination Certificate", category: "Vaccination", date: "2023-12-20" },
]

const activeShares = [
  {
    id: 1,
    doctorEmail: "dr.smith@hospital.com",
    doctorName: "Dr. Smith",
    documents: ["Blood Test Results", "Annual Physical Exam"],
    createdAt: "2024-01-16",
    expiresAt: "2024-01-23",
    status: "Active",
    accessCount: 3,
  },
  {
    id: 2,
    doctorEmail: "dr.johnson@clinic.com",
    doctorName: "Dr. Johnson",
    documents: ["Chest X-Ray"],
    createdAt: "2024-01-14",
    expiresAt: "2024-01-21",
    status: "Active",
    accessCount: 1,
  },
  {
    id: 3,
    doctorEmail: "dr.brown@medical.com",
    doctorName: "Dr. Brown",
    documents: ["Prescription - Antibiotics"],
    createdAt: "2024-01-10",
    expiresAt: "2024-01-17",
    status: "Expired",
    accessCount: 2,
  },
]

export default function SharingPage() {
  const [selectedDocuments, setSelectedDocuments] = useState<number[]>([])
  const [shareForm, setShareForm] = useState({
    doctorEmail: "",
    doctorName: "",
    message: "",
    expiryDays: "7",
  })
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [generatedOTP, setGeneratedOTP] = useState("")

  const handleDocumentToggle = (docId: number) => {
    setSelectedDocuments((prev) => (prev.includes(docId) ? prev.filter((id) => id !== docId) : [...prev, docId]))
  }

  const generateShare = () => {
    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    setGeneratedOTP(otp)

    // Here you would typically send the OTP via email
    console.log("Sending OTP to:", shareForm.doctorEmail)
    console.log("OTP:", otp)

    // Reset form
    setShareForm({
      doctorEmail: "",
      doctorName: "",
      message: "",
      expiryDays: "7",
    })
    setSelectedDocuments([])
  }

  const copyOTP = () => {
    navigator.clipboard.writeText(generatedOTP)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Secure Sharing</h2>
        <p className="text-muted-foreground">Share your medical records securely with healthcare providers</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Create New Share */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Share Documents
            </CardTitle>
            <CardDescription>Generate secure access for healthcare providers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="doctorEmail">Doctor's Email</Label>
              <Input
                id="doctorEmail"
                type="email"
                placeholder="doctor@hospital.com"
                value={shareForm.doctorEmail}
                onChange={(e) => setShareForm((prev) => ({ ...prev, doctorEmail: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="doctorName">Doctor's Name (Optional)</Label>
              <Input
                id="doctorName"
                placeholder="Dr. Smith"
                value={shareForm.doctorName}
                onChange={(e) => setShareForm((prev) => ({ ...prev, doctorName: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label>Select Documents to Share</Label>
              <div className="space-y-2 max-h-48 overflow-y-auto border rounded p-3">
                {availableDocuments.map((doc) => (
                  <div key={doc.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`doc-${doc.id}`}
                      checked={selectedDocuments.includes(doc.id)}
                      onCheckedChange={() => handleDocumentToggle(doc.id)}
                    />
                    <Label htmlFor={`doc-${doc.id}`} className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{doc.title}</span>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Badge variant="secondary">{doc.category}</Badge>
                          <span>{doc.date}</span>
                        </div>
                      </div>
                    </Label>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{selectedDocuments.length} document(s) selected</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="expiryDays">Access Duration</Label>
              <Select
                value={shareForm.expiryDays}
                onValueChange={(value) => setShareForm((prev) => ({ ...prev, expiryDays: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Day</SelectItem>
                  <SelectItem value="3">3 Days</SelectItem>
                  <SelectItem value="7">7 Days</SelectItem>
                  <SelectItem value="14">14 Days</SelectItem>
                  <SelectItem value="30">30 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Additional message for the healthcare provider..."
                value={shareForm.message}
                onChange={(e) => setShareForm((prev) => ({ ...prev, message: e.target.value }))}
              />
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  className="w-full"
                  disabled={!shareForm.doctorEmail || selectedDocuments.length === 0}
                  onClick={() => {
                    generateShare()
                    setIsDialogOpen(true)
                  }}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Generate Secure Share
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Share Created Successfully</DialogTitle>
                  <DialogDescription>An OTP has been sent to the healthcare provider's email</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">One-Time Password (OTP)</p>
                        <p className="text-2xl font-mono font-bold">{generatedOTP}</p>
                      </div>
                      <Button variant="outline" size="sm" onClick={copyOTP}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>• OTP sent to: {shareForm.doctorEmail}</p>
                    <p>• Documents shared: {selectedDocuments.length}</p>
                    <p>• Expires in: {shareForm.expiryDays} days</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Security Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security Features
            </CardTitle>
            <CardDescription>How we keep your medical records secure</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">One-Time Password (OTP)</p>
                  <p className="text-sm text-muted-foreground">
                    Each share generates a unique 6-digit code sent via email
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Time-Limited Access</p>
                  <p className="text-sm text-muted-foreground">
                    Shares automatically expire after the specified duration
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Access Tracking</p>
                  <p className="text-sm text-muted-foreground">
                    Monitor when and how often your documents are accessed
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Encrypted Storage</p>
                  <p className="text-sm text-muted-foreground">All documents are encrypted and stored securely</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Shares */}
      <Card>
        <CardHeader>
          <CardTitle>Active Shares</CardTitle>
          <CardDescription>Manage your current document shares</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeShares.map((share) => (
              <div key={share.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <p className="font-medium">{share.doctorName || share.doctorEmail}</p>
                    <Badge variant={share.status === "Active" ? "default" : "secondary"}>{share.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{share.doctorEmail}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>Documents: {share.documents.length}</span>
                    <span>Created: {share.createdAt}</span>
                    <span>Expires: {share.expiresAt}</span>
                    <span>Accessed: {share.accessCount} times</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {share.documents.map((doc, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {doc}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost">
                    <Eye className="h-4 w-4" />
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
