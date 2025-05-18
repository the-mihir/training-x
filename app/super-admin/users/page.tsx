import type { Metadata } from "next"
import { UsersTable } from "../components/users/users-table"

export const metadata: Metadata = {
  title: "User Management - TrainingX Admin",
  description: "Manage users on the TrainingX platform",
}

export default function UsersPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">User Management</h2>
      </div>

      <div className="space-y-4">
        <UsersTable />
      </div>
    </div>
  )
}
