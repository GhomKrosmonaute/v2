import React from "react"

import { CarouselItem } from "@/components/ui/carousel"

export default function DemoCard({ data }: { data: DemoCardData }) {
  return (
    <CarouselItem>
      <a
        href={data.url}
        target="_blank"
        rel="noreferrer"
        className="inline-block w-full h-full"
      >
        <div className="flex justify-center items-baseline">
          <h2 className="shad0w mr-4">{data.name}</h2>
          <p>{data.description}</p>
        </div>
        <iframe
          src={data.url}
          width="100%"
          height="100%"
          className="overflow-hidden border-none"
          title={data.name}
        ></iframe>
      </a>
    </CarouselItem>
  )
}
