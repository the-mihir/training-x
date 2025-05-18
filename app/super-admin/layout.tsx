import type React from "react"
import type { Metadata } from "next"
import Sidebar from "@/app/super-admin/components/sidebar"
import Header from "@/app/super-admin/components/header"

export const metadata: Metadata = {
  title: "TrainingX | Super Admin",
  description: "Super Admin Dashboard for TrainingX platform",
}

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Authentication check temporarily removed for design preview
  // Will be re-implemented later

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
