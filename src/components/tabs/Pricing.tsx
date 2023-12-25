import React from "react"

// import { useQuery } from "@tanstack/react-query"

import { ScrollArea } from "@/components/ui/scroll-area"

import * as utils from "@/lib/utils"

import HeaderArrowIndicator from "@/components/parts/HeaderArrowIndicator"

export default function Pricing({
  headerEnabled,
  setHeaderEnabled,
}: {
  headerEnabled: boolean
  setHeaderEnabled: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { scrollDown, scrollAreaRef } = utils.useScroll()

  // show the header
  React.useEffect(() => {
    setHeaderEnabled(true)
  }, [setHeaderEnabled])

  return (
    <>
      <HeaderArrowIndicator
        headerEnabled={headerEnabled}
        scrollDown={scrollDown}
      />
      <ScrollArea className="w-full h-full" ref={scrollAreaRef}>
        <div className="container py-3">
          <div className="hidden">
            todo: trouver une source fiable pour calculer dynamiquement mes
            tarifs à l'heure en fonction des tarifs moyens en France. Afficher
            un graphique avec une zone représentant ou je me situe par rapport
            aux autres en fonction de mon expérience.
          </div>
        </div>
      </ScrollArea>
    </>
  )
}
