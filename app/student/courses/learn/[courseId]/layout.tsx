import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TrainingX | Course Learning",
  description: "Interactive learning environment for TrainingX courses",
}

export default function CourseLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  )
}
