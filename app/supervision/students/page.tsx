import type { Metadata } from "next"
import StudentsPage from "./students-page"

export const metadata: Metadata = {
  title: "Students | Supervision",
  description: "Manage your supervised students",
}

export default function Page() {
  return <StudentsPage />
}
