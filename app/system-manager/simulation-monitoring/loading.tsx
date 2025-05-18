import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-96" />
      </div>

      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-64" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <Skeleton className="h-10 w-64" />
              <Skeleton className="h-10 w-40" />
              <Skeleton className="h-10 w-40" />
            </div>
            <Skeleton className="h-10 w-32" />
          </div>

          <div className="rounded-md border">
            <div className="h-10 px-4 border-b flex items-center">
              <div className="grid grid-cols-7 w-full">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16 hidden md:block" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16 hidden md:block" />
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16 ml-auto" />
              </div>
            </div>
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="h-20 px-4 border-b last:border-0 flex items-center">
                  <div className="grid grid-cols-7 w-full">
                    <div>
                      <Skeleton className="h-5 w-40 mb-1" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <div className="hidden md:block">
                      <Skeleton className="h-5 w-16 mb-1" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-2 w-24 flex-1" />
                      <Skeleton className="h-4 w-8" />
                    </div>
                    <div className="hidden md:flex items-center">
                      <Skeleton className="h-4 w-12" />
                    </div>
                    <div>
                      <Skeleton className="h-6 w-8" />
                    </div>
                    <div>
                      <Skeleton className="h-6 w-16" />
                    </div>
                    <div className="flex justify-end">
                      <Skeleton className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex items-center justify-end space-x-2 py-4">
            <Skeleton className="h-9 w-24" />
            <Skeleton className="h-9 w-24" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
