export interface Project {
  name: string
  technologies: string[]
  image: string
  description: string
}

export const projects: Project[] = [
  {
    name: "Gario",
    technologies: ["TypeScript", "p5.js"],
    image: "assets/images/projects/gario.png",
    description:
      "Petit test de platformer 2D avec moteur physique simple et système de checkpoint.",
  },
  {
    name: "Just a Forum",
    technologies: ["TypeScript", "Express", "Sass", "PostgresSQL"],
    image: "assets/images/projects/jf.png",
    description:
      "Début de réseau social/forum à post récursif orienté développement (markdown interprété et syntaxe des blocs de code colorée).",
  },
]
