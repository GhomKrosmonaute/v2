import React from "react"
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import GithubProject from "@/app/GithubProject"

import githubProjects from "@/data/githubProjects"

export default function GithubProjects() {
  return (
    <div className="h-[80vh] lg:h-full">
      <ScrollArea className="w-full lg:w-1/2 h-full p-3">
        <CardHeader>
          <CardTitle>Current projects</CardTitle>
          <CardDescription>My recent projects on Github</CardDescription>
        </CardHeader>
        <Table>
          <TableBody>
            {githubProjects.map((data, i) => (
              <GithubProject key={i} data={data} />
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  )
}
