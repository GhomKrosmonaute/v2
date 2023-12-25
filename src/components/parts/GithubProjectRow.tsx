import React from "react"

import { TableRow, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

import GithubProjectStars from "@/components/parts/GithubProjectStars"
import GithubProjectForks from "@/components/parts/GithubProjectForks"
import GithubProjectIssues from "@/components/parts/GithubProjectIssues"
import OpenInNewTab from "@/components/parts/OpenInNewTab"

export default function GithubProjectRow({
  data,
}: {
  data: GithubProjectRowData
}) {
  return (
    <TableRow>
      <TableCell>
        <Avatar>
          <AvatarImage src={data.image} alt={data.name} />
        </Avatar>
      </TableCell>
      <TableCell>
        <div className="text-2xl">
          <a
            href={data.homepage || data.html_url}
            target="_blank"
            rel="noreferrer"
            className="block w-[250px] lg:w-[300px] text-ellipsis whitespace-nowrap overflow-x-hidden"
            title={data.name}
          >
            {data.name}
          </a>
        </div>
      </TableCell>
      <TableCell className="hidden sm:table-cell">
        <Badge>{data.language}</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <ScrollArea className="max-w-[400px] h-[40px] flex items-center">
          <p>{data.description}</p>
        </ScrollArea>
      </TableCell>
      <TableCell className="hidden lg:table-cell">
        <GithubProjectStars count={data.stargazers_count} />
      </TableCell>
      <TableCell className="hidden lg:table-cell">
        <GithubProjectForks count={data.forks} />
      </TableCell>
      <TableCell className="hidden lg:table-cell">
        <GithubProjectIssues count={data.open_issues} />
      </TableCell>
      <TableCell className="hidden xl:table-cell">
        <OpenInNewTab href={data.html_url} />
      </TableCell>
    </TableRow>
  )
}
