import React from "react"

import Projects from "@/tabs/Projects"
import AboutMe from "@/tabs/AboutMe"
import Pricing from "@/tabs/Pricing"
import Contact from "@/tabs/Contact"

import ThemeProvider from "@/app/ThemeProvider"
import ThemeToggle from "@/app/ThemeToggle"
import GithubStats from "@/app/GithubStats"
import BoltToggle from "@/app/BoltToggle"
import Background from "@/app/Background"
import Title from "@/app/Title"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function App() {
  const [dynamic, setDynamic] = React.useState(true)

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <GithubStats className="hidden xl:inline-block z-10 fixed top-0 left-0" />
      <Background />
      <div className="fixed right-1 top-1 gap-1 scale-75 sm:right-5 sm:top-5 sm:gap-2 sm:scale-100 flex z-20">
        <ThemeToggle />
        <BoltToggle dynamic={dynamic} setDynamic={setDynamic} />
      </div>
      <Title dynamic={dynamic} />
      <Tabs
        defaultValue="projects"
        className="fixed top-[130px] w-screen animate-show opacity-0"
      >
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="about">A propos</TabsTrigger>
            <TabsTrigger value="projects">Projets</TabsTrigger>
            <TabsTrigger value="pricing">Tarifs</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
        </div>
        <div className="h-[calc(100svh-180px)]">
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
