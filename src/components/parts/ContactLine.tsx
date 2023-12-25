import React from "react"
import { Separator } from "@/components/ui/separator"

export default function ContactLine({
  children,
  href,
  hasNext,
}: {
  children: [icon: React.ReactNode, text: React.ReactNode]
  href: string
  hasNext?: boolean
}) {
  return (
    <>
      <div className="h-[30px]">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex h-full items-center"
        >
          <div className="w-[40px] inline-flex justify-center items-center">
            {children[0]}
          </div>
          <div>{children[1]}</div>
        </a>
      </div>
      <Separator className={hasNext ? "" : "hidden"} />
    </>
  )
}
