import React from "react"
import { Table, TableBody } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import GithubProjectRow from "@/app/GithubProjectRow"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

import githubProjects from "@/data/githubProjects.json"
import githubFavoriteProjects from "@/data/githubFavoriteProjects.json"
import GithubProjectCard from "@/app/GithubProjectCard"

export default function Projects() {
  const [showAll, setShowAll] = React.useState(false)

  return (
    <>
      <div className="h-[30px] flex items-center justify-center px-3">
        <div className="flex items-center gap-2">
          <Switch id="showAll" checked={showAll} onCheckedChange={setShowAll} />
          <Label htmlFor="showAll">Show all</Label>
        </div>
      </div>
      <ScrollArea className="p-3 h-[calc(100%-30px)]">
        {showAll ? (
          <Table className="table-auto">
            <TableBody>
              {githubProjects
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .map((data, i) => (
                  <GithubProjectRow key={i} data={data} />
                ))}
            </TableBody>
          </Table>
        ) : (
          <div className="flex flex-wrap justify-center h-full w-full gap-3">
            {githubFavoriteProjects.map((data, i) => (
              <GithubProjectCard key={i} data={data} />
            ))}
          </div>
        )}
      </ScrollArea>
    </>
  )
}
