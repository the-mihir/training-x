import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex w-full h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gray-900">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Video Player Skeleton */}
        <Skeleton className="w-full aspect-video" />

        {/* Content Tabs Skeleton */}
        <div className="p-6">
          <div className="flex space-x-2 mb-4">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
          </div>
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mb-6" />

          <Skeleton className="h-6 w-1/2 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mb-6" />

          <Skeleton className="h-28 w-full mb-4" />
        </div>

        {/* Navigation Footer Skeleton */}
        <div className="mt-auto border-t p-4 flex justify-between items-center">
          <Skeleton className="h-10 w-32" />
          <div className="text-center">
            <Skeleton className="h-4 w-20 mx-auto mb-2" />
            <Skeleton className="h-2 w-40" />
          </div>
          <Skeleton className="h-10 w-32" />
        </div>
      </div>

      {/* Sidebar Skeleton - on the right */}
      <div className="w-80 border-l h-full overflow-hidden">
        <div className="p-4 border-b">
          <Skeleton className="h-6 w-48 mb-3" />
          <Skeleton className="h-2 w-full mb-1" />
          <Skeleton className="h-4 w-20 ml-auto" />
        </div>
        <div className="p-4">
          <Skeleton className="h-4 w-32 mb-4" />
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div key={item} className="mb-3">
              <Skeleton className="h-12 w-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
