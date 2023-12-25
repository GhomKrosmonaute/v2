import React from "react"

import { Skeleton } from "@/components/ui/skeleton"

export default function GithubProjectCardSkeleton() {
  return (
    <div className="py-5 px-7 w-[400px] h-[140px]">
      <div className="flex">
        <Skeleton className="h-4 w-4 mr-3" />
        <Skeleton className="h-4 w-[150px]" />
        <div className="flex-1" />
        <Skeleton className="h-4 w-[50px] rounded-full" />
      </div>
      <div className="flex flex-col gap-1 my-5">
        <Skeleton className="h-3 w-[350px]" />
        <Skeleton className="h-3 w-[300px]" />
        <Skeleton className="h-3 w-[200px]" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-3 w-3 rounded-full" />
        <Skeleton className="h-3 w-[50px]" />
        <div />
        <Skeleton className="h-3 w-3 rounded-full" />
        <Skeleton className="h-3 w-4" />
        <div />
        <Skeleton className="h-3 w-3 rounded-full" />
        <Skeleton className="h-3 w-2" />
      </div>
    </div>
  )
}
