import React from "react"
import Delay from "@/app/Delay"

export default function GithubStats({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Delay
        duration={1000}
        showElement={
          <>
            <img
              src={
                "https://github-readme-stats.vercel.app/api?username=GhomKrosmonaute&count_private=true&show_icons=true&bg_color=FFFFFF00&hide_border=true&title_color=7C3AED&text_color=F5F5F5&icon_color=7C3AED&rdm=" +
                Math.random()
              }
              alt="github stats"
              className="hidden dark:block h-[20vh] m-3"
            />
            <img
              src={
                "https://github-readme-stats.vercel.app/api?username=GhomKrosmonaute&count_private=true&show_icons=true&bg_color=00000000&hide_border=true&title_color=7C3AED&text_color=0F0F0F&icon_color=7C3AED&rdm=" +
                Math.random()
              }
              alt="github stats"
              className="dark:hidden block h-[20vh] m-3"
            />
          </>
        }
      />
    </div>
  )
}
