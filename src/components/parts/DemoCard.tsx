import React from "react"

import { Play } from "lucide-react"

import { CarouselItem } from "@/components/ui/carousel"

import OpenInNewTab from "@/components/parts/OpenInNewTab"

export default function DemoCard({ data }: { data: DemoCardData }) {
  const iframe = React.useRef<HTMLIFrameElement>(null)
  const [isFocused, setIsFocused] = React.useState(false)

  // check is the iframe is not focused
  React.useEffect(() => {
    const iframeElement = iframe.current!

    iframeElement.addEventListener("blur", () => {
      setIsFocused(false)
    })

    return () => {
      iframeElement.removeEventListener("blur", () => {
        setIsFocused(false)
      })
    }
  }, [iframe])

  return (
    <CarouselItem>
      <div className="flex justify-center items-baseline gap-3">
        <h2 className="shad0w">{data.name}</h2>
        <p>{data.description}</p>
        <OpenInNewTab href={data.url} />
      </div>
      <div className="relative w-full h-full">
        <iframe
          src={data.url}
          width="100%"
          height="100%"
          className="overflow-hidden border-none"
          title={data.name}
          ref={iframe}
        ></iframe>
        {!isFocused ? (
          <div
            className="absolute bg-[rgba(255,255,255,0.90)] dark:bg-[rgba(0,0,0,0.90)] left-0 top-0 w-full h-full z-50 flex justify-center items-center cursor-pointer"
            onClick={() => {
              if (iframe.current) {
                iframe.current.focus()
                setIsFocused(true)
              }
            }}
          >
            <div className="flex flex-col items-center">
              <Play className="w-[50px] h-[50px]" />
              <p className="text-center mt-2 text-2xl">
                Cliquez pour jouer la démo
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </CarouselItem>
  )
}
