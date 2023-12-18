import React from "react"

import { TableRow, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import GithubProjectStars from "@/app/GithubProjectStars"
import GithubProjectForks from "@/app/GithubProjectForks"
import GithubProjectIssues from "@/app/GithubProjectIssues"
import OpenInNewTab from "@/app/OpenInNewTab"

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
        <div className="text-2xl overflow-x-hidden whitespace-nowrap">
          <a
            href={data.homepage ?? data.html_url}
            target="_blank"
            rel="noreferrer"
          >
            {data.name!.length > 20
              ? data.name!.slice(0, 20) + "..."
              : data.name}
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
