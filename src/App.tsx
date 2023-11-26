import React, { useEffect } from "react"

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
import HeaderToggle from "@/app/HeaderToggle"

export default function App() {
  const [dynamic, setDynamic] = React.useState(true)
  const [headerEnabled, setHeaderEnabled] = React.useState(true)

  useEffect(() => {
    if (!headerEnabled) setDynamic(false)
  }, [headerEnabled])

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className={headerEnabled ? "" : "hide-header"}>
        <GithubStats className="header hidden xl:inline-block z-10 fixed top-0 left-0" />
        <Background />
        <div className="fixed right-1 top-1 gap-1 scale-75 sm:right-5 sm:top-5 sm:gap-2 sm:scale-100 flex z-20">
          <HeaderToggle enabled={headerEnabled} setEnabled={setHeaderEnabled} />
          <ThemeToggle />
          <BoltToggle dynamic={dynamic} setDynamic={setDynamic} />
        </div>
        <Title dynamic={dynamic} />
        <Tabs
          defaultValue="projects"
          className="fixed top-[130px] w-screen animate-show opacity-0"
        >
          <div className="header flex justify-center">
            <TabsList>
              <TabsTrigger value="about">A propos</TabsTrigger>
              <TabsTrigger value="projects">Projets</TabsTrigger>
              <TabsTrigger value="pricing">Tarifs</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
          </div>
          <div className="content fixed left-0 top-[50px] w-screen h-[calc(100svh-190px)]">
            <TabsContent value="about">
              <AboutMe />
            </TabsContent>
            <TabsContent value="projects">
              <Projects headerEnabled={headerEnabled} />
            </TabsContent>
            <TabsContent value="pricing">
              <Pricing />
            </TabsContent>
            <TabsContent value="contact">
              <Contact />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </ThemeProvider>
  )
}
