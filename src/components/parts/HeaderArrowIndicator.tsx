import React from "react"

import navArrow from "@assets/images/nav-arrow.png"
import navArrowBlack from "@assets/images/nav-arrow-black.png"

export default function HeaderArrowIndicator({
  headerEnabled,
  scrollDown,
}: {
  headerEnabled: boolean
  scrollDown: boolean
}) {
  return (
    <div
      className={`hidden sm:block h-[100px] md:h-fit absolute -top-[25px] md:-top-[60px] right-[65px] md:right-0 transition-opacity duration-300 ${
        headerEnabled || scrollDown ? "opacity-0" : ""
      }`}
    >
      <img src={navArrow} alt="" className="hidden dark:inline-block h-full" />
      <img
        src={navArrowBlack}
        alt=""
        className="inline-block dark:hidden h-full"
      />
    </div>
  )
}
