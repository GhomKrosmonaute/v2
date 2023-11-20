import React from "react"
import { Zap, ZapOff } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BoltToggle() {
  const [enabled, setEnabled] = React.useState(
    document.body.classList.contains("zap")
  )

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        document.body.classList[enabled ? "remove" : "add"]("zap")
        setEnabled(!enabled)
      }}
    >
      {enabled ? (
        <Zap className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <ZapOff className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle flashes</span>
    </Button>
  )
}
