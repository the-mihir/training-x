"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

// Dynamically import the home client component with SSR disabled
// This ensures it only runs on the client side
const DynamicHomeClient = dynamic(() => import("./home-client"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <Skeleton className="h-[80vh] w-full max-w-6xl mx-auto rounded-xl" />
    </div>
  ),
  ssr: false, // Disable SSR for this component
})

export default function ClientWrapper() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Skeleton className="h-[80vh] w-full max-w-6xl mx-auto rounded-xl" />
        </div>
      }
    >
      <DynamicHomeClient />
    </Suspense>
  )
}
