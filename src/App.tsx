import React from "react"

import Projects from "@/tabs/Projects"
import AboutMe from "@/tabs/AboutMe"
import Pricing from "@/tabs/Pricing"
import Contact from "@/tabs/Contact"

import ThemeProvider from "@/app/ThemeProvider"
import ThemeToggle from "@/app/ThemeToggle"
import Title from "@/app/Title"
import GithubStats from "@/app/GithubStats"
import BoltToggle from "@/app/BoltToggle"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="fixed right-5 top-5 z-10 flex gap-2">
        <ThemeToggle />
        <BoltToggle />
      </div>
      <GithubStats className="hidden xl:inline-block" />
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
          <TabsContent value="about">
            <AboutMe />
          </TabsContent>
          <TabsContent value="projects">
            <Projects />
          </TabsContent>
          <TabsContent value="pricing">
            <Pricing />
          </TabsContent>
          <TabsContent value="contact">
            <Contact />
          </TabsContent>
        </div>
      </Tabs>
    </ThemeProvider>
  )
}
