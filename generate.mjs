import "@ghom/utils"
import "dotenv/config"
import prettier from "prettier"
import fs from "fs/promises"
import { Octokit } from "@octokit/rest"

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

async function fetchGithubProjects() {
  const userRepos = await octokit.rest.repos.listForUser({
    username: "GhomKrosmonaute",
    per_page: 500,
  })

  console.log("loaded", "GhomKrosmonaute")

  const userOrganizations = {
    data: [
      { login: "bot-ts" },
      { login: "play-curious" },
      { login: "Les-Laboratoires" },
      { login: "ESBuildTemplates" },
      { login: "NoBrainNoGame" },
      { login: "NanoWorkspace" },
    ],
  }

  for (const organization of userOrganizations.data) {
    const organizationRepos = await octokit.rest.repos.listForOrg({
      org: organization.login,
    })
    userRepos.data.push(...organizationRepos.data)

    console.log(
      "loaded",
      organization.login,
      `(+${organizationRepos.data.length} repos)`
    )
  }

  const githubProjects = await Promise.all(
    userRepos.data
      .pick(
        "name",
        "stargazers_count",
        "forks",
        "language",
        "description",
        "html_url",
        "homepage",
        "open_issues",
        "owner",
        "fork"
      )
      .filter(
        (repo) =>
          repo.name !== "GhomKrosmonaute" && !repo.fork && !!repo.language
      )
      .map(async (repo) => {
        repo.image = repo.owner.avatar_url

        try {
          const packageJSON = await octokit.rest.repos.getContent({
            owner: repo.owner.login,
            repo: repo.name,
            path: "package.json",
          })

          if (packageJSON?.data?.content) {
            repo.name =
              JSON.parse(atob(packageJSON.data.content)).name ?? repo.name
          }
        } catch (error) {}

        delete repo.owner

        return repo
      })
  )

  await fs.writeFile(
    "./src/data/githubProjects.json",
    await prettier.format(JSON.stringify(githubProjects), { parser: "json" }),
    "utf-8"
  )
}

fetchGithubProjects()
  .catch(console.error)
  .then(() => console.log("done"))
