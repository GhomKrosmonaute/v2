import React from "react"

import ThemeProvider from "@/app/ThemeProvider"
import ThemeToggle from "@/app/ThemeToggle"

export default function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="fixed right-5 top-5 z-10">
        <ThemeToggle />
      </div>
      <h1 className="pointer-events-none fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl whitespace-nowrap z-10">
        CAM
        <span id="i" className="inline-block z-20">
          I
        </span>
        LLE ABELLA
      </h1>
    </ThemeProvider>
  )
}
