import React from "react"

import Projects from "@/components/tabs/Projects"
import AboutMe from "@/components/tabs/AboutMe"
import Pricing from "@/components/tabs/Pricing"
import Contact from "@/components/tabs/Contact"

import ThemeProvider from "@/components/parts/ThemeProvider"
import HeaderToggle from "@/components/parts/HeaderToggle"
import ThemeToggle from "@/components/parts/ThemeToggle"
import GithubStats from "@/components/parts/GithubStats"
import BoltToggle from "@/components/parts/BoltToggle"
import Background from "@/components/parts/Background"
import Title from "@/components/parts/Title"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Skills from "@/components/tabs/Skills"
import Demo from "@/components/tabs/Demo"

let rdm = Math.random()

export default function App() {
  const [dynamic, setDynamic] = React.useState(true)
  const [headerEnabled, setHeaderEnabled] = React.useState(true)

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div id="app" className={headerEnabled ? "" : "hide-header"}>
        <h1 className="opacity-0 h-0">
          Camille Abella aka GhomKrosmonaute - Portfolio
        </h1>
        <GithubStats
          className="header hidden xl:inline-block z-10 fixed top-0 left-0"
          rdm={rdm}
        />
        <Background />
        <div className="fixed right-1 top-1 gap-1 scale-75 sm:right-5 sm:top-5 sm:gap-2 sm:scale-100 flex z-20">
          <HeaderToggle enabled={headerEnabled} setEnabled={setHeaderEnabled} />
          <ThemeToggle />
          <BoltToggle dynamic={dynamic} setDynamic={setDynamic} />
        </div>
        <Title dynamic={dynamic} />
        <Tabs
          defaultValue="projects"
          className="fixed top-[130px] w-screen animate-show-2000 opacity-0"
        >
          <div id="tabs" className="header flex justify-center">
            <TabsList className="shad0w">
              <TabsTrigger value="projects">Projets</TabsTrigger>
              <TabsTrigger value="about">Ma Bio</TabsTrigger>
              {/*<TabsTrigger value="pricing">Tarifs</TabsTrigger>*/}
              <TabsTrigger value="skills">Compétences</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
              <TabsTrigger value="demo" className="hidden lg:inline-block">
                Démos
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="content fixed left-0 top-[50px] w-screen h-[calc(100svh-190px)] animate-show-2100 opacity-0">
            <TabsContent value="about">
              <AboutMe
                headerEnabled={headerEnabled}
                setHeaderEnabled={setHeaderEnabled}
              />
            </TabsContent>
            <TabsContent value="projects">
              <Projects
                headerEnabled={headerEnabled}
                setHeaderEnabled={setHeaderEnabled}
              />
            </TabsContent>
            <TabsContent value="pricing">
              <Pricing
                headerEnabled={headerEnabled}
                setHeaderEnabled={setHeaderEnabled}
              />
            </TabsContent>
            <TabsContent value="skills">
              <Skills
                headerEnabled={headerEnabled}
                setHeaderEnabled={setHeaderEnabled}
              />
            </TabsContent>
            <TabsContent value="contact">
              <Contact
                headerEnabled={headerEnabled}
                setHeaderEnabled={setHeaderEnabled}
              />
            </TabsContent>
            <TabsContent value="demo" className="hidden lg:inline-block">
              <Demo
                headerEnabled={headerEnabled}
                setHeaderEnabled={setHeaderEnabled}
              />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </ThemeProvider>
  )
}
