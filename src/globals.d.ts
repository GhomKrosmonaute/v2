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

interface ProfessionalProjectRowData {
  name: string
  description: string[]
  image: string
  url: string
}

interface SkillRowData {
  level: "Expert" | "Avancé" | "Débutant" | "Refuse"
  name: string
}

interface DemoCardData {
  name: string
  description: string
  url: string
}
