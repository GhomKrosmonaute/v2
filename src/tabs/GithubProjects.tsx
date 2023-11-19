import React from "react"
import { Table, TableBody } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import GithubProject from "@/app/GithubProject"

import githubProjects from "@/data/githubProjects"

export default function GithubProjects() {
  return (
    <ScrollArea className="p-3 h-full">
      <Table>
        <TableBody>
          {githubProjects.map((data, i) => (
            <GithubProject key={i} data={data} />
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  )
}
