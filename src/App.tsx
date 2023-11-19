import React from "react"

import GithubProjects from "@/tabs/GithubProjects"

import ThemeProvider from "@/app/ThemeProvider"
import ThemeToggle from "@/app/ThemeToggle"
import Title from "@/app/Title"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
      <Tabs
        defaultValue="account"
        className="fixed top-[16vh] w-screen animate-show opacity-0"
      >
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="projects" autoFocus>
              Projects
            </TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
        </div>
        <div className="h-[79vh]">
          <TabsContent value="projects">
            <GithubProjects />
          </TabsContent>
        </div>
      </Tabs>
    </ThemeProvider>
  )
}
