import React from "react"

import { TableRow, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function GithubProject({ data }: { data: GithubProjectData }) {
  return (
    <TableRow>
      <a href={data.url} target="_blank" rel="noreferrer">
        <TableCell>
          <Avatar>
            <AvatarImage src={data.image} alt={data.name} />
          </Avatar>
        </TableCell>
        <TableCell className="md:text-2xl">{data.name}</TableCell>
        <TableCell>{data.description}</TableCell>
        <TableCell>
          <div className="flex flex-wrap gap-1">
            {data.badges?.map((badge, i) => <Badge key={i}>{badge}</Badge>)}
          </div>
        </TableCell>
      </a>
    </TableRow>
  )
}
