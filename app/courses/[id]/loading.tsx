import { Skeleton } from "@/components/ui/skeleton"

export default function CourseDetailsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section Skeleton */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 dark:from-purple-950 dark:via-violet-950 dark:to-indigo-950">
        <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex items-center space-x-2">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>

              <Skeleton className="mb-4 h-12 w-full" />
              <Skeleton className="mb-4 h-12 w-3/4" />

              <Skeleton className="mb-6 h-6 w-full" />

              <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <Skeleton className="mr-3 h-10 w-10 rounded-full" />
                  <div>
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="mt-1 h-4 w-24" />
                  </div>
                </div>

                <div className="flex items-center">
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Skeleton className="h-12 w-32 rounded-md" />
                <Skeleton className="h-12 w-40 rounded-md" />
              </div>
            </div>

            <div className="relative mx-auto aspect-video max-w-lg overflow-hidden rounded-xl border-8 border-white/10 shadow-2xl lg:mx-0">
              <Skeleton className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Course Content */}
          <div className="lg:col-span-2">
            <div className="mb-8 grid w-full grid-cols-5 gap-2">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-10 rounded-md" />
              ))}
            </div>

            <div className="space-y-8">
              <div>
                <Skeleton className="mb-4 h-8 w-48" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-3/4" />
              </div>

              <div>
                <Skeleton className="mb-4 h-8 w-48" />
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex items-start">
                      <Skeleton className="mr-2 h-5 w-5 rounded-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Skeleton className="mb-4 h-8 w-48" />
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-24 rounded-lg" />
                  ))}
                </div>
              </div>

              {/* AI Companion Section Skeleton */}
              <Skeleton className="h-64 rounded-xl" />
            </div>
          </div>

          {/* Right Column - Enrollment Card */}
          <div className="lg:col-span-1">
            <Skeleton className="h-[600px] rounded-xl" />
          </div>
        </div>
      </div>

      {/* Related Courses Skeleton */}
      <div className="bg-gray-50 py-12 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="mx-auto mb-8 h-10 w-48" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-80 rounded-xl" />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section Skeleton */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-800 py-16 dark:from-purple-900 dark:to-indigo-900">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <Skeleton className="mx-auto mb-4 h-10 w-96" />
          <Skeleton className="mx-auto mb-8 h-6 w-full max-w-2xl" />
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Skeleton className="h-12 w-32 rounded-md" />
            <Skeleton className="h-12 w-40 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}
