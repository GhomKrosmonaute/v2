import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

export default function GithubProjectAccordionSkeleton() {
  return (
    <div className="flex items-center gap-3 h-16">
      <Skeleton className="h-12 w-12 rounded-full" />
      <Skeleton className="h-4 w-[250px]" />
    </div>
  )
}
