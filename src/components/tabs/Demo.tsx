import React from "react"

import demos from "@/data/demos.json"

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import DemoCard from "@/components/parts/DemoCard"

export default function Demo({
  setHeaderEnabled,
}: {
  headerEnabled: boolean
  setHeaderEnabled: React.Dispatch<React.SetStateAction<boolean>>
}) {
  // hide the header
  React.useEffect(() => {
    setHeaderEnabled(false)
  }, [setHeaderEnabled])

  return (
    <>
      <Carousel
        className="left-[50vw] -translate-x-1/2 w-[90vw] h-[90svh]"
        opts={{}}
      >
        <CarouselContent className="h-full">
          {demos.map((demo, i) => (
            <DemoCard key={i} data={demo} />
          ))}
        </CarouselContent>
        <CarouselPrevious variant="default" />
        <CarouselNext variant="default" />
      </Carousel>
    </>
  )
}
