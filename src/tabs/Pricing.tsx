import React from "react"
import { AlertTriangle } from "lucide-react"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Pricing() {
  return (
    <ScrollArea className="w-full h-full">
      <div className="container py-3">
        <Alert className="mb-2 w-fit">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Work in progress</AlertTitle>
        </Alert>
      </div>
    </ScrollArea>
  )
}
