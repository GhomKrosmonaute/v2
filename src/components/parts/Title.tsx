import React from "react"

import logo from "@assets/images/logo.png"

import { useTypewriter } from "react-simple-typewriter"

export default function Title({ dynamic }: { dynamic: boolean }) {
  const [text] = useTypewriter({
    words: ["Camille Abella", "@Ghom", "Développeur web"],
    loop: true,
  })

  return (
    <>
      <span
        id="title"
        className="header opacity-0 animate-hideTitle pointer-events-none fixed left-1/2 top-1/2 text-7xl lg:text-9xl whitespace-nowrap z-10 text-white"
      >
        {dynamic ? text : "Camille Abella"}
      </span>
      <img
        src={logo}
        alt="logo"
        id="logo"
        className="header opacity-0 animate-hideLogo pointer-events-none fixed left-1/2 top-[calc(50svh-150px)] z-0"
      />
    </>
  )
}
