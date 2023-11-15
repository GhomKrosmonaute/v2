import React from "react"

import Avatar from "@/app/Avatar"
import ThemeProvider from "@/app/ThemeProvider"
import ThemeToggle from "@/app/ThemeToggle"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Avatar />
      <Button>Test</Button>
      <Input />
      <ThemeToggle />
    </ThemeProvider>
  )
}
