import React from "react"
import {
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

import GithubProjectStars from "@/app/GithubProjectStars"
import GithubProjectForks from "@/app/GithubProjectForks"
import GithubProjectIssues from "@/app/GithubProjectIssues"

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
          <div className="text-2xl overflow-x-hidden whitespace-nowrap">
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
