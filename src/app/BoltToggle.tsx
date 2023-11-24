import React from "react"
import { Zap, ZapOff } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BoltToggle({
  dynamic,
  setDynamic,
}: {
  dynamic: boolean
  setDynamic: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <Button variant="outline" size="icon" onClick={() => setDynamic(!dynamic)}>
      {dynamic ? (
        <Zap className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <ZapOff className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle flashes</span>
    </Button>
  )
}
