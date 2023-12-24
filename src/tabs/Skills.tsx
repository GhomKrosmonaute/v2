import React from "react"

import * as utils from "@/lib/utils"

import cv from "@/assets/images/CV.png"
import skills from "@/data/skills.json"

import { Download } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import HeaderArrowIndicator from "@/app/HeaderArrowIndicator"
import SkillRow from "@/app/SkillRow"

/*
 * Ici, nous retrouverons les compétences de l'utilisateur, avec des gauges représentant le niveau de qualification, et son CV
 */

export default function Skills({
  headerEnabled,
  setHeaderEnabled,
}: {
  headerEnabled: boolean
  setHeaderEnabled: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { scrollDown, scrollAreaRef } = utils.useScroll()

  const hrefPDF = "/downloads/Camille_ABELLA_CV.pdf"

  // hide the header
  React.useEffect(() => {
    setHeaderEnabled(false)
  }, [setHeaderEnabled])

  return (
    <>
      <HeaderArrowIndicator
        headerEnabled={headerEnabled}
        scrollDown={scrollDown}
      />
      <ScrollArea className="w-full h-full" ref={scrollAreaRef}>
        <h2 className="title text-center mb-[50px]">CV & Compétences</h2>
        <div className="container flex flex-col md:flex-row animate-show gap-3">
          <div className="md:w-1/2 object-contain flex flex-col justify-center">
            <img
              src={cv}
              alt="CV de Camille ABELLA"
              className="shad0w rounded-2xl "
            />
          </div>
          <a
            className={`self-center md:hidden ${buttonVariants()}`}
            download="CV_Camille_ABELLA.pdf"
            href={hrefPDF}
          >
            <Download className="mr-2" /> Télécharger mon CV
          </a>
          <div className="md:w-1/2 flex flex-col justify-between">
            {Object.keys(skills).map((level, i) => (
              <div key={i} className="self-center w-[70%]">
                <h3 className="text-center text-xl font-bold">{level}</h3>
                {skills[level as keyof typeof skills].map((skill, j) => (
                  <SkillRow
                    data={{
                      level: level as keyof typeof skills,
                      name: skill,
                    }}
                  />
                ))}
              </div>
            ))}
            <a
              className={`self-center hidden md:flex mt-5 ${buttonVariants()}`}
              download="CV_Camille_ABELLA.pdf"
              href={hrefPDF}
            >
              <Download className="mr-2" /> Télécharger mon CV
            </a>
          </div>
        </div>
      </ScrollArea>
    </>
  )
}
