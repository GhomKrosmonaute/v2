import React from "react"

import GithubProjects from "@/app/GithubProjects"
import ThemeProvider from "@/app/ThemeProvider"
import ThemeToggle from "@/app/ThemeToggle"
import Title from "@/app/Title"

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
      <Title />
      <div className="fixed top-[20vh] p-5 h-auto md:h-[80vh] w-screen animate-show opacity-0">
        <GithubProjects />
      </div>
    </ThemeProvider>
  )
}
