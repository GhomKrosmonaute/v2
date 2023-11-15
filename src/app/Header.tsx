import React from "react"

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="flex h-[70px] shadow shadow-primary items-center justify-between px-3">
      {children}
    </header>
  )
}
