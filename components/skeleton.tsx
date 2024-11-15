import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardHeader, CardContent } from "./ui/card";

export function SkeletonNavUser() {
  return (
    <div className="flex items-center space-x-1 p-2 ">
      <Skeleton className="h-9 w-9 rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-[90px]" />
        <Skeleton className="h-2 w-[130px]" />
      </div>
    </div>
  )
}

export function LoadingSkeleton() {
  return (
    <Card className="max-w-md w-full mx-4">
      <CardHeader className="flex flex-row items-center gap-4 relative">
        <Skeleton className="h-5 w-14 absolute top-4 right-4" />
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-4 w-40" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}