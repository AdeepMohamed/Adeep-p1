"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User, Shield, Key, Bell, Download } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-05-15",
    address: "123 Main St, City, State 12345",
    emergencyContact: "Jane Doe - +1 (555) 987-6543",
    medicalConditions: "Hypertension, Diabetes Type 2",
    allergies: "Penicillin, Shellfish",
    bloodType: "O+",
    insurance: "Blue Cross Blue Shield - Policy #12345",
  })

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    shareNotifications: true,
    reminderNotifications: true,
  })

  const handleProfileUpdate = () => {
    console.log("Updating profile:", profileData)
    // Here you would typically send the data to your backend
  }

  const handleNotificationUpdate = (key: string, value: boolean) => {
    setNotifications((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Profile Settings</h2>
        <p className="text-muted-foreground">Manage your account information and preferences</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Overview */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Profile Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback className="text-lg">
                  {profileData.firstName[0]}
                  {profileData.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="font-semibold text-lg">
                  {profileData.firstName} {profileData.lastName}
                </h3>
                <p className="text-muted-foreground">{profileData.email}</p>
              </div>
              <Button variant="outline" className="w-full">
                Change Photo
              </Button>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Account Status</span>
                <Badge variant="default">Verified</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Member Since</span>
                <span className="text-sm text-muted-foreground">Jan 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Documents</span>
                <span className="text-sm text-muted-foreground">24</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Storage Used</span>
                <span className="text-sm text-muted-foreground">45.2 MB</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
            <CardDescription>Update your personal details and medical information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={profileData.firstName}
                  onChange={(e) => setProfileData((prev) => ({ ...prev, firstName: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={profileData.lastName}
                  onChange={(e) => setProfileData((prev) => ({ ...prev, lastName: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData((prev) => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={profileData.phone}
                  onChange={(e) => setProfileData((prev) => ({ ...prev, phone: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={profileData.dateOfBirth}
                  onChange={(e) => setProfileData((prev) => ({ ...prev, dateOfBirth: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bloodType">Blood Type</Label>
                <Input
                  id="bloodType"
                  value={profileData.bloodType}
                  onChange={(e) => setProfileData((prev) => ({ ...prev, bloodType: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={profileData.address}
                onChange={(e) => setProfileData((prev) => ({ ...prev, address: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyContact">Emergency Contact</Label>
              <Input
                id="emergencyContact"
                value={profileData.emergencyContact}
                onChange={(e) => setProfileData((prev) => ({ ...prev, emergencyContact: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="medicalConditions">Medical Conditions</Label>
              <Textarea
                id="medicalConditions"
                value={profileData.medicalConditions}
                onChange={(e) => setProfileData((prev) => ({ ...prev, medicalConditions: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="allergies">Allergies</Label>
              <Textarea
                id="allergies"
                value={profileData.allergies}
                onChange={(e) => setProfileData((prev) => ({ ...prev, allergies: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="insurance">Insurance Information</Label>
              <Input
                id="insurance"
                value={profileData.insurance}
                onChange={(e) => setProfileData((prev) => ({ ...prev, insurance: e.target.value }))}
              />
            </div>

            <Button onClick={handleProfileUpdate} className="w-full">
              Update Profile
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Settings
          </CardTitle>
          <CardDescription>Manage your account security and privacy</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Button variant="outline" className="justify-start">
              <Key className="h-4 w-4 mr-2" />
              Change Password
            </Button>
            <Button variant="outline" className="justify-start">
              <Shield className="h-4 w-4 mr-2" />
              Two-Factor Authentication
            </Button>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Login Activity</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Last login: Today at 2:30 PM</span>
                <span className="text-muted-foreground">Current session</span>
              </div>
              <div className="flex justify-between">
                <span>Previous login: Yesterday at 9:15 AM</span>
                <span className="text-muted-foreground">Chrome on Windows</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notification Preferences
          </CardTitle>
          <CardDescription>Choose how you want to be notified</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive updates via email</p>
              </div>
              <Switch
                checked={notifications.emailNotifications}
                onCheckedChange={(checked) => handleNotificationUpdate("emailNotifications", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">SMS Notifications</p>
                <p className="text-sm text-muted-foreground">Receive updates via text message</p>
              </div>
              <Switch
                checked={notifications.smsNotifications}
                onCheckedChange={(checked) => handleNotificationUpdate("smsNotifications", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Share Notifications</p>
                <p className="text-sm text-muted-foreground">Get notified when documents are accessed</p>
              </div>
              <Switch
                checked={notifications.shareNotifications}
                onCheckedChange={(checked) => handleNotificationUpdate("shareNotifications", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Reminder Notifications</p>
                <p className="text-sm text-muted-foreground">Reminders for appointments and medications</p>
              </div>
              <Switch
                checked={notifications.reminderNotifications}
                onCheckedChange={(checked) => handleNotificationUpdate("reminderNotifications", checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Data Management
          </CardTitle>
          <CardDescription>Export or delete your data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Button variant="outline" className="justify-start">
              <Download className="h-4 w-4 mr-2" />
              Export All Data
            </Button>
            <Button variant="outline" className="justify-start text-destructive">
              Delete Account
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Export includes all your medical records, sharing history, and profile information in a secure format.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
