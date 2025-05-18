import type React from "react"
import type { Metadata } from "next"
import Sidebar from "@/components/system-manager/sidebar"
import Header from "@/components/system-manager/header"

export const metadata: Metadata = {
  title: "TrainingX | System Manager",
  description: "System Manager Dashboard for TrainingX platform",
}

export default function SystemManagerLayout({
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
