import type React from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 overflow-hidden">
        <div className="flex h-16 items-center border-b px-4">
          <SidebarTrigger />
          <div className="ml-4">
            <h1 className="text-xl font-semibold">MediVault</h1>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-6">{children}</div>
      </main>
    </SidebarProvider>
  )
}
