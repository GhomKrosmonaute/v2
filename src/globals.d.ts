interface GithubProjectRowData {
  name?: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string
  image: string
  stargazers_count: number
  forks: number
  open_issues: number
}

interface GithubProjectCardData {
  org: string
  repo: string
}
