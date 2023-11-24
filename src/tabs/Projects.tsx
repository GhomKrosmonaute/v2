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
    <ScrollArea className="p-3 h-full">
      <div className="fixed top-5 right-3 flex items-center gap-2">
        <Switch id="showAll" checked={showAll} onCheckedChange={setShowAll} />
        <Label htmlFor="showAll">Show all</Label>
      </div>
      {showAll ? (
        <Table>
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
  )
}
