import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import ClientWrapper from "./client-wrapper"

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Skeleton className="h-[80vh] w-full max-w-6xl mx-auto rounded-xl" />
        </div>
      }
    >
      <ClientWrapper />
    </Suspense>
  )
}
