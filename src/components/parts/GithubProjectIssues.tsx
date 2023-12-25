import React from "react"

export default function GithubProjectIssues({ count = 0 }) {
  return <div className="px-3 whitespace-nowrap">{count} issues</div>
}
