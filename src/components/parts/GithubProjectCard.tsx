import React from "react"

export default function GithubProjectCard({
  data,
}: {
  data: GithubProjectCardData
}) {
  return (
    <a
      href={`https://github.com/${data.org}/${data.repo}`}
      className="inline-block"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={`https://github-readme-stats.vercel.app/api/pin/?username=${data.org}&repo=${data.repo}&theme=dark&bg_color=00000000&show_owner=true&hide_border=true`}
        alt="test"
        className="hidden dark:block"
      />
      <img
        src={`https://github-readme-stats.vercel.app/api/pin/?username=${data.org}&repo=${data.repo}&theme=light&bg_color=00000000&show_owner=true&hide_border=true`}
        alt="test"
        className="block dark:hidden"
      />
    </a>
  )
}
