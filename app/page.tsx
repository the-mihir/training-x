import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

// Dynamically import heavy components
const DynamicHomeClient = dynamic(() => import("./home-client"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <Skeleton className="h-[80vh] w-full max-w-6xl mx-auto rounded-xl" />
    </div>
  ),
  ssr: true,
})

export default function Home() {
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
