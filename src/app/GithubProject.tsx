import React from "react"

import { TableRow, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function GithubProject({ data }: { data: GithubProjectData }) {
  return (
    <TableRow>
      <TableCell>
        <Avatar>
          <AvatarImage src={data.image} alt={data.name} />
        </Avatar>
      </TableCell>
      <TableCell className="xl:text-2xl overflow-x-hidden whitespace-nowrap">
        <a
          href={data.homepage ?? data.html_url}
          target="_blank"
          rel="noreferrer"
        >
          {data.name}
        </a>
      </TableCell>
      <TableCell>
        <ScrollArea className="overflow-y-hidden max-w-[400px] h-10 inline-block">
          {data.description}
        </ScrollArea>
      </TableCell>
      <TableCell>
        <Badge>{data.language}</Badge>
      </TableCell>
      <TableCell className="hidden lg:inline-block">
        ⭐ {data.stargazers_count}
      </TableCell>
      <TableCell className="hidden lg:inline-block">
        {data.forks} forks
      </TableCell>
      <TableCell className="hidden lg:inline-block">
        <div>{data.open_issues} issues</div>
      </TableCell>
      <TableCell className="hidden xl:inline-block">
        <Button asChild variant="outline">
          <a href={data.html_url} target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </Button>
      </TableCell>
    </TableRow>
  )
}
