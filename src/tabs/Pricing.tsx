import React from "react"
// import { useQuery } from "@tanstack/react-query"
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
        <div className="hidden">
          todo: trouver une source fiable pour calculer dynamiquement mes tarifs
          à l'heure en fonction des tarifs moyens en France. Afficher un
          graphique avec une zone représentant ou je me situe par rapport aux
          autres en fonction de mon expérience.
        </div>
      </div>
    </ScrollArea>
  )
}
