import React from "react"

import logo from "@assets/images/logo.png"

export default function Title() {
  return (
    <>
      <h1 className="animate-hideTitle pointer-events-none fixed left-1/2 top-1/2 text-7xl lg:text-9xl whitespace-nowrap z-10 text-white">
        CAM
        <span id="i" className="inline-block">
          I
        </span>
        LLE ABELLA
      </h1>
      <img
        src={logo}
        alt="logo"
        id="logo"
        className="animate-hideLogo pointer-events-none fixed left-1/2 top-1/2 z-0"
      />
    </>
  )
}
