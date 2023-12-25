import React from "react"
import Delay from "@/components/parts/Delay"

export default function GithubStats({
  className,
  rdm,
}: {
  className?: string
  rdm: number
}) {
  return (
    <div className={className}>
      <Delay
        duration={500}
        showElement={
          <>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=GhomKrosmonaute&count_private=true&locale=fr&show_icons=true&bg_color=FFFFFF00&hide_border=true&title_color=7C3AED&text_color=F5F5F5&icon_color=7C3AED&rdm=${rdm}`}
              alt="github stats"
              className="hidden dark:block h-[170px] m-3"
            />
            <img
              src={`https://github-readme-stats.vercel.app/api?username=GhomKrosmonaute&count_private=true&locale=fr&show_icons=true&bg_color=00000000&hide_border=true&title_color=7C3AED&text_color=0F0F0F&icon_color=7C3AED&rdm=${rdm}`}
              alt="github stats"
              className="dark:hidden block h-[170px] m-3"
            />
          </>
        }
      />
    </div>
  )
}
