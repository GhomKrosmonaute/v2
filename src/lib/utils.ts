import React from "react"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useScroll() {
  const scrollAreaRef = React.useRef<HTMLDivElement>(null)

  const [scrollDown, setScrollDown] = React.useState(false)

  React.useEffect(() => {
    const sa = scrollAreaRef.current

    if (sa)
      sa.onscroll = () => {
        if (sa.scrollTop ?? 0 > 300) {
          setScrollDown(true)
        } else {
          setScrollDown(false)
        }
      }

    return () => {
      if (sa) sa.onscroll = null
    }
  }, [scrollAreaRef])

  return { scrollAreaRef, scrollDown }
}
