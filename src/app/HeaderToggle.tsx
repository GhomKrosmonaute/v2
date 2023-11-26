import React from "react"

import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function HeaderToggle({
  enabled,
  setEnabled,
}: {
  enabled: boolean
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <Button variant="outline" size="icon" onClick={() => setEnabled(!enabled)}>
      {enabled ? <ChevronUp /> : <ChevronDown />}
    </Button>
  )
}
