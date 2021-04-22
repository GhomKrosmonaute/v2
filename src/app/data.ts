export interface Project {
  name: string
  technologies: string[]
  image: string
  description: string
  url: string
}

export const projects: Project[] = [
  {
    name: "Gario",
    technologies: ["TypeScript", "p5.js", "ESBuild", "Gulp"],
    image: "assets/images/projects/gario.png",
    description:
      "Petit test de platformer 2D avec moteur physique simple et système de checkpoint.",
    url: "https://github.com/CamilleAbella/Gario",
  },
  {
    name: "Just a Forum",
    technologies: ["TypeScript", "Express", "Sass", "PostgresSQL", "Gulp"],
    image: "assets/images/projects/jf.png",
    description:
      "Début de réseau social/forum à post récursif orienté développement (markdown interprété et syntaxe des blocs de code colorée).",
    url: "https://github.com/CamilleAbella/just-a-forum",
  },
  {
    name: "Bot.ts",
    technologies: ["TypeScript", "ESBuild", "Gulp", "discord.js"],
    image: "assets/images/projects/bts.png",
    description:
      "Framework pour bots Discord incluant un command handler avancé, un cli pour générer des fichiers, une structure de fichier super pratique, un système d'arguments basé sur Yargs pour les commandes, quelques commandes et events intégrés, un base de données déjà setup et quelques outils...",
    url: "https://ghom.gitbook.io/bot-ts/",
  },
  {
    name: "xPad",
    technologies: ["JavaScript"],
    image: "assets/images/projects/xpad.png",
    description: "Mapper de manette xBox pour les applications WEB.",
    url: "https://github.com/CamilleAbella/xPad",
  },
]
