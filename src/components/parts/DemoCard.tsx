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
            <div className="absolute left-0 top-0 pl-5">
              <div className="flex items-baseline">
                <h2 className="shad0w text-5xl">{data.name}</h2>
                <OpenInNewTab
                  className="-translate-y-2 translate-x-[15px]"
                  href={data.url}
                />
              </div>
              <p className="text-2xl">{data.description}</p>
            </div>
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
