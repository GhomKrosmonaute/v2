import React from "react"
import {
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

import GithubProjectStars from "@/components/parts/GithubProjectStars"
import GithubProjectForks from "@/components/parts/GithubProjectForks"
import GithubProjectIssues from "@/components/parts/GithubProjectIssues"

export default function GithubProjectAccordion({
  data,
}: {
  data: GithubProjectRowData
}) {
  return (
    <AccordionItem value={data.name!}>
      <AccordionTrigger>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={data.image} alt={data.name} />
          </Avatar>
          <div className="text-2xl text-start overflow-x-hidden text-ellipsis whitespace-nowrap w-[300px]">
            {data.name}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <p className="p-2">{data.description}</p>
        <div className="flex">
          <GithubProjectStars count={data.stargazers_count} />
          <GithubProjectForks count={data.forks} />
          <GithubProjectIssues count={data.open_issues} />
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
