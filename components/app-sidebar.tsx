"use client"

import { Calendar, FileText, Home, Share2, Upload, User, LogOut, Shield } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Medical Records",
    url: "/dashboard/records",
    icon: FileText,
  },
  {
    title: "Health Timeline",
    url: "/dashboard/timeline",
    icon: Calendar,
  },
  {
    title: "Upload Documents",
    url: "/dashboard/upload",
    icon: Upload,
  },
  {
    title: "Secure Sharing",
    url: "/dashboard/sharing",
    icon: Share2,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: User,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-blue-600" />
          <div>
            <h2 className="text-lg font-bold">MediVault</h2>
            <p className="text-sm text-muted-foreground">Secure Medical Records</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <Button variant="ghost" className="w-full justify-start">
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
