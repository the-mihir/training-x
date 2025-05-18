import type { Metadata } from "next"
import { CoursesTable } from "../components/courses/courses-table"

export const metadata: Metadata = {
  title: "Course Management - TrainingX Admin",
  description: "Manage courses on the TrainingX platform",
}

export default function CoursesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Course Management</h2>
      </div>

      <div className="space-y-4">
        <CoursesTable />
      </div>
    </div>
  )
}
