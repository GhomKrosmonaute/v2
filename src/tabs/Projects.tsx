import React from "react"

import { Table, TableBody } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

import ProfessionalProjectRow from "@/app/ProfessionalProjectRow"
import GithubProjectRowSkeleton from "@/app/GithubProjectRowSkeleton"
import GithubProjectCardSkeleton from "@/app/GithubProjectCardSkeleton"
import GithubProjectAccordionSkeleton from "@/app/GithubProjectAccordionSkeleton"

import githubProjects from "@/data/githubProjects.json"
import githubFavoriteProjects from "@/data/githubFavoriteProjects.json"
import professionalProjects from "@/data/professionalProjects.json"

const GithubProjectRow = React.lazy(() => import("@/app/GithubProjectRow"))
const GithubProjectCard = React.lazy(() => import("@/app/GithubProjectCard"))
const GithubProjectAccordion = React.lazy(
  () => import("@/app/GithubProjectAccordion")
)

export default function Projects({
  headerEnabled,
}: {
  headerEnabled: boolean
}) {
  const [showAll, setShowAll] = React.useState(false)

  return (
    <>
      <div
        className={
          "h-[30px] flex items-center px-3 " +
          (headerEnabled ? "justify-center" : "justify-start md:justify-center")
        }
      >
        <div className="flex gap-2 items-center">
          <Switch id="showAll" checked={showAll} onCheckedChange={setShowAll} />
          <Label htmlFor="showAll">Tout afficher</Label>
        </div>
      </div>
      <ScrollArea className="p-3 h-[calc(100%-30px)]">
        {showAll ? (
          <div className="container">
            <div className="hidden md:block">
              <Table className="table-auto">
                <TableBody>
                  {githubProjects
                    .sort((a, b) => b.stargazers_count - a.stargazers_count)
                    .map((data, i) => (
                      <React.Suspense
                        key={i}
                        fallback={<GithubProjectRowSkeleton />}
                        children={<GithubProjectRow data={data} />}
                      />
                    ))}
                </TableBody>
              </Table>
            </div>
            <div className="block md:hidden">
              <Accordion type="single" collapsible>
                {githubProjects
                  .sort((a, b) => b.stargazers_count - a.stargazers_count)
                  .map((data, i) => (
                    <React.Suspense
                      key={i}
                      fallback={<GithubProjectAccordionSkeleton />}
                      children={<GithubProjectAccordion data={data} />}
                    />
                  ))}
              </Accordion>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="animate-show opacity-0">
              <h2 className="text-center">Mes principaux projets</h2>
              <Separator />
              <div className="flex flex-wrap justify-center xl:justify-between h-full w-full gap-3">
                {githubFavoriteProjects.map((data, i) => (
                  <React.Suspense
                    key={i}
                    fallback={<GithubProjectCardSkeleton />}
                    children={<GithubProjectCard data={data} />}
                  />
                ))}
              </div>
            </div>
            <div className="animate-show opacity-0">
              <h2 className="text-center">Mes projets professionnel</h2>
              <Separator />
              <div>
                {professionalProjects.map((data, i) => (
                  <ProfessionalProjectRow key={i} _key={i} data={data} />
                ))}
              </div>
            </div>
          </div>
        )}
      </ScrollArea>
    </>
  )
}
