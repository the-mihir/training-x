import { Skeleton } from "@/components/ui/skeleton"

export default function CourseLearnLoading() {
  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center">
            <Skeleton className="h-9 w-9 mr-2" />
            <Skeleton className="h-5 w-32" />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Skeleton className="h-9 w-24" />
            <Skeleton className="h-9 w-24" />
          </div>

          <div className="flex items-center">
            <div className="hidden md:block mr-4">
              <Skeleton className="h-4 w-24 mb-1" />
              <Skeleton className="h-2 w-32" />
            </div>
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 border-r border-border bg-card overflow-y-auto hidden md:block">
          <div className="p-4 border-b border-border">
            <Skeleton className="h-5 w-48 mb-2" />
            <Skeleton className="h-2 w-full" />
          </div>

          <div className="p-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="mb-2">
                <Skeleton className="h-10 w-full rounded-lg mb-2" />
                {i === 0 && (
                  <div className="pl-4 space-y-1">
                    {[...Array(5)].map((_, j) => (
                      <Skeleton key={j} className="h-8 w-full rounded-lg" />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container py-8 max-w-4xl">
            <div className="mb-6">
              <Skeleton className="h-8 w-3/4 mb-2" />
              <Skeleton className="h-4 w-48" />
            </div>

            {/* Video Player */}
            <Skeleton className="w-full aspect-video rounded-lg mb-8" />

            {/* Lesson Content */}
            <div className="mb-4">
              <Skeleton className="h-10 w-80" />
            </div>

            <div className="space-y-4 mb-8">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-16 w-full" />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
