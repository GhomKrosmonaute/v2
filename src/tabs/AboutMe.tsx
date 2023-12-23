import React from "react"

import * as utils from "@/lib/utils"

import { ArrowUp, AlertCircle } from "lucide-react"

import { Alert, AlertTitle } from "@/components/ui/alert"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

import Avatar from "@/app/Avatar"
import HeaderArrowIndicator from "@/app/HeaderArrowIndicator"

export default function AboutMe({
  headerEnabled,
  setHeaderEnabled,
}: {
  headerEnabled: boolean
  setHeaderEnabled: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { scrollDown, scrollAreaRef } = utils.useScroll()

  const button = React.useRef<HTMLButtonElement>(null)

  // hide the header
  React.useEffect(() => {
    setHeaderEnabled(false)
  }, [setHeaderEnabled])

  // reveal on scroll
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.2) {
            const div = entry.target as HTMLDivElement
            div.style.opacity = "1"
            div.style.transform = "translateY(0)"
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    document
      .querySelectorAll<HTMLDivElement>("#redaction > div")
      .forEach((div) => {
        observer.observe(div)
      })
  }, [])

  return (
    <>
      <HeaderArrowIndicator
        headerEnabled={headerEnabled}
        scrollDown={scrollDown}
      />
      <Button
        ref={button}
        className={`absolute right-5 bottom-2 z-50 transition-opacity duration-300 ${
          scrollDown ? "" : "opacity-0"
        }`}
        variant="outline"
        size="default"
        onClick={() => {
          document
            .getElementById("about-me")
            ?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        <ArrowUp className="h-4 w-4 mr-2" /> Remonter
      </Button>
      <ScrollArea className="w-full h-full" ref={scrollAreaRef}>
        <div id="about-me" className="container py-3">
          <div
            className={`flex justify-center opacity-0 h-0 transition-all duration-200 ${
              headerEnabled ? "" : "opacity-100 h-auto"
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <Avatar
                className={`w-28 h-28 inline-block scale-0 transition-all duration-200 ${
                  headerEnabled ? "" : "scale-100"
                }`}
              />
              <h2 className="text-4xl title mt-2">Ma Bio</h2>
            </div>
          </div>
          <div
            id="redaction"
            className="block xl:flex flex-col flex-wrap xl:gap-3 animate-show"
            style={{
              height: "3200px",
              // maxHeight: "min-content",
            }}
          >
            <div>
              <h3>A propos de moi</h3>
              <p>
                Je suis Camille Abella, plus connu sous le pseudo Ghom, un
                développeur web amateur passionné basé à Perpignan, France. Mon
                parcours dans le monde du développement web a débuté en 2017,
                avec une immersion dans l'univers professionnel pendant cinq
                enrichissantes années.
              </p>
              <p>
                Ma passion pour le développement web va au-delà d'une simple
                profession. Chaque ligne de code que je compose, chaque projet
                sur lequel je travaille est une expression de mon dévouement
                envers l'art du codage. En tant qu'amateur passionné, je me
                considère comme un étudiant perpétuel, toujours avide
                d'apprendre et de repousser les limites de mes compétences.
              </p>
              <p>
                Mon expérience en entreprise m'a permis de m'imprégner des
                meilleures pratiques du secteur, tout en développant un amour
                profond pour la création de solutions numériques. Récemment,
                j'ai décidé de franchir le cap et de me lancer en freelance,
                prêt à relever de nouveaux défis et à partager ma passion avec
                un public plus large.
              </p>
              <p>
                Bien que ma carrière en tant que freelance soit encore à ses
                débuts, mon enthousiasme et mon engagement envers la qualité
                restent intacts. Je suis ouvert à de nouvelles collaborations et
                à la possibilité de donner vie à vos idées à travers des sites
                web uniques et conviviaux. Explorez mon portfolio pour découvrir
                mes réalisations jusqu'à présent, et n'hésitez pas à me
                contacter pour discuter de la manière dont nous pourrions
                travailler ensemble pour concrétiser votre vision en ligne.
              </p>
              <Alert className="shad0w">
                <AlertCircle className="h-5 w-5" />
                <AlertTitle>
                  Pour m'engager, rendez-vous sur mon profile&nbsp;
                  <a
                    href="https://www.malt.fr/profile/camilleabella"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Malt.fr
                  </a>
                </AlertTitle>
              </Alert>
            </div>
            <div>
              <h3>Mon parcours scolaire</h3>
              <p>
                Mon parcours scolaire a été tout sauf classique, marqué par une
                agilité d'esprit et une quête constante de créativité. Tout se
                déroulait normalement jusqu'en 4ème, où mon esprit agité et
                espiègle me caractérisait comme un véritable garnement.
                Cependant, dès cette période, une remise en question profonde du
                système éducatif m'a poussé à prendre des chemins moins
                conventionnels.
              </p>
              <p>
                Enchaînant les écarts de conduite parce que je percevais le
                système éducatif comme défaillant, j'ai finalement pris la
                décision radicale d'arrêter l'école. Pendant les six années qui
                ont suivi, j'ai choisi de rester chez moi, loin des bancs de
                l'école traditionnelle. C'était une période tumultueuse, mais
                cette pause m'a offert l'opportunité de perfectionner mon art,
                d'affiner ma créativité et d'approfondir mes compétences en
                développement web.
              </p>
              <p>
                Cette parenthèse autodidacte a été formatrice, me permettant de
                développer une logique aiguisée et de cultiver une approche
                unique du codage. En m'éloignant des sentiers battus, j'ai
                découvert une passion inextinguible pour la création numérique.
                Ainsi, ces années de retrait du système éducatif traditionnel
                ont non seulement forgé ma compréhension du développement web,
                mais elles ont également cultivé en moi une perspective
                singulière et une détermination à défier les normes pour
                atteindre l'excellence dans mon domaine.
              </p>
              <p>
                Mon parcours atypique témoigne de ma conviction profonde selon
                laquelle l'apprentissage est une aventure personnelle, et le
                développement de compétences ne se limite pas nécessairement aux
                salles de classe. Aujourd'hui, fort de cette expérience hors du
                commun, je mets en pratique ces leçons apprises dans chaque
                projet.
              </p>
            </div>
            <div>
              <h3>Les jeux vidéos</h3>
              <p>
                Les jeux vidéo ont été une source inépuisable de passion et
                d'inspiration tout au long de ma vie, jouant un rôle déterminant
                dans la manière dont je conçois la programmation. Dès mon plus
                jeune âge, ma fascination pour les jeux vidéo a été le
                catalyseur qui m'a amené à explorer le monde complexe du
                développement informatique. Mon parcours a débuté par la
                rétro-ingénierie de jeux vidéo, où j'ai entrepris de modifier et
                d'adapter ces univers virtuels à mes propres préférences,
                fusionnant ainsi ma passion pour le jeu avec celle du code.
              </p>
              <p>
                À mesure que ma compréhension du développement s'affinait, j'ai
                naturellement évolué vers la création de mes propres jeux vidéo
                par pur plaisir. Cette transition a été nourrie par l'influence
                de titres emblématiques qui ont laissé une empreinte indélébile
                sur mon vécu. En voici quelques uns:
              </p>
              <ul>
                <li>
                  <strong>Dofus</strong> - Premier MMORPG français, gameplay
                  tactique
                </li>
                <li>
                  <strong>Krosmaga</strong> - Mix entre un jeu de carte et un
                  jeu de plateau
                </li>
                <li>
                  <strong>Advance Wars</strong> - Jeu de tactique de guerre sur
                  un damier
                </li>
                <li>
                  <strong>Fire Emblem</strong> - Advance Wars mais en médieval
                </li>
                <li>
                  <strong>Flight Simulator</strong> - Simulateur de vol avec une
                  histoire
                </li>
                <li>
                  <strong>Saga Mario & Luigi</strong> - RPG tactique de Nintendo
                </li>
                <li>
                  <strong>Pokemon</strong> - RPG tactique de collection
                </li>
                <li>
                  <strong>The Binding of Isaac</strong> - Mon premier Rogue-like
                </li>
                <li>
                  <strong>Halo 3 ODST</strong> - FPS, double histoire rythmée
                  par des phases d'aventure et d'enquête
                </li>
                <li>
                  <strong>Call of Duty: WaW</strong> - FPS, premier mode zombie,
                  adventure historique
                </li>
                <li>
                  <strong>Minitroopers</strong> - Combat automatique, équipe
                  contre équipe
                </li>
                <li>
                  <strong>La Brute</strong> - Combat automatique, joueur contre
                  joueur
                </li>
                <li>
                  <strong>Minecraft</strong> - Jeu bac à sable, RPG de survie
                </li>
                <li>
                  <strong>Mario Kart</strong> - Jeu de course type arcade
                </li>
              </ul>
              <p>
                Ah, les souvenirs d'enfance sont souvent teintés d'une touche
                espiègle. Il y a une anecdote qui résonne particulièrement dans
                ma mémoire. Lorsque j'étais gosse, un ami généreux m'avait prêté
                le jeu "Advance Wars" sur Nintendo DS. C'était une immersion
                captivante dans le monde de la stratégie militaire, et je me
                suis tellement plongé dans l'univers du jeu que, je dois
                l'avouer avec un sourire complice, je n'ai jamais trouvé le
                chemin du retour pour rendre le jeu à son propriétaire. Un petit
                acte qui a peut-être forgé ma passion pour le genre tactical.
                Désolé, cher ami, si tu lis ceci. C'était une aventure
                mémorable! 😄
              </p>
              <p>
                Aujourd'hui encore, je continue d'être passionné par tous ces
                nouveaux types de jeux qui sortent chaque mois. Dernièrement je
                me suis notamment intéressé à certains titres innovants tels
                que:
              </p>
              <ul>
                <li>
                  <strong>Inscryption</strong> - Mix entre jeu de carte, jeu
                  d'enquête et Rogue-like
                </li>
                <li>
                  <strong>Despot's Game</strong> - Rogue like en combat
                  automatique, jeu des synergies
                </li>
                <li>
                  <strong>Waven</strong> - Tactical RPG, jeu de carte et jeu de
                  plateau. Successeur de Dofus
                </li>
                <li>
                  <strong>Mario et les lapins crétins</strong> - Tactical RPG à
                  la X-COM
                </li>
                <li>
                  <strong>Slay the Spire</strong> - Jeu de carte stratégique
                  type Rogue like à choix de synergie
                </li>
              </ul>
              <p>
                Je me lance bientôt dans le développement de mon propre jeu
                vidéo, je m'inspirerais bien entendu de tous ces jeux qui m'ont
                marqué. Je suis impatient de partager cette aventure avec vous!
              </p>
            </div>
            <div>
              <h3>Ma formation</h3>
              <p>
                Ma vie a pris un tournant significatif lorsqu'une étape cruciale
                m'a conduit à quitter ma période de solitude. Je me suis engagé
                dans une aventure transformative à l'École d'Art de&nbsp;
                <a href="https://lidem.eu" target="_blank" rel="noreferrer">
                  l'Idem
                </a>
                , une période qui a redéfini non seulement ma compréhension du
                code mais aussi ma manière d'interagir avec le monde qui
                m'entoure.
              </p>
              <p>
                Au cours de ces cinq années au sein de l'école, j'ai eu
                l'opportunité de plonger profondément dans l'univers du
                développement, d'acquérir des compétences spécialisées en
                conception et développement d'applications web et mobiles, ainsi
                que de perfectionner mes aptitudes en tant que chef de projet.
                C'est là que j'ai réussi à démêler certains des nœuds qui
                entravaient ma capacité à interagir socialement. L'Idem n'était
                pas seulement un établissement d'enseignement, mais également un
                lieu de croissance personnelle, où j'ai pu corriger mes
                problèmes de sociabilisation et apprendre à collaborer de
                manière constructive.
              </p>
            </div>
            <div>
              <h3>Mes premiers pas dans le monde du travail</h3>
              <p>
                Tout a commencé lors de ma participation enthousiaste au&nbsp;
                <a
                  href="https://twitter.com/swperpi?lang=fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  Startup Weekend de Perpignan
                </a>
                , une expérience collaborative qui a été le catalyseur de
                changements majeurs. Aux côtés de mon ami Arnaud, nous avons
                formé une équipe dynamique et avons travaillé intensément sur
                une idée novatrice. Notre projet, qui a fini par se classer en
                3ème place, était à l'origine de l'entreprise derrière
                l'application de rencontre&nbsp;
                <a
                  href="https://www.lindependant.fr/2022/07/04/kerubi-une-application-de-rencontres-et-de-sorties-made-in-perpignan-10414844.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kerubi
                </a>
                . L'excitation et l'énergie déployées pendant ce weekend ont été
                récompensées par l'obtention de fonds de 10 000€, qui ont permis
                à Arnaud de concrétiser son rêve entrepreneurial. Cette
                expérience a été une immersion profonde dans l'univers
                compétitif et stimulant des startups, façonnant ma perspective
                du monde professionnel.
              </p>
              <p>
                Par la suite, j'ai embrassé mon premier stage chez&nbsp;
                <a
                  href="https://agencepoint.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Agence Point Com
                </a>
                , une expérience de trois mois qui m'a permis de plonger dans le
                monde du développement web d'une manière plus traditionnelle.
                Cependant, j'ai rapidement compris que WordPress n'était pas
                vraiment ma tasse de thé. Ce stage m'a servi de tremplin pour
                découvrir mes préférences et mes forces en matière de
                développement. Même si WordPress n'était pas mon domaine de
                prédilection, cette expérience m'a permis de développer une
                compréhension plus approfondie des dynamiques de travail en
                agence et des exigences du développement web dans un contexte
                professionnel.
              </p>
              <p>
                Ces premières expériences ont jeté les bases de ma carrière,
                m'offrant des enseignements précieux sur l'entrepreneuriat et
                m'aidant à affiner mes préférences en matière de développement
                web. Chaque étape, qu'elle soit couronnée de succès ou
                accompagnée d'apprentissages, a contribué à forger la
                trajectoire qui m'a conduit là où je suis aujourd'hui.
              </p>
            </div>
            <div>
              <h3>PlayCurious</h3>
              <p>
                Quand j'ai rejoint&nbsp;
                <a
                  href="https://playcurious.games"
                  target="_blank"
                  rel="noreferrer"
                >
                  PlayCurious
                </a>
                , j'ai été accueilli par une équipe dynamique et passionnée, qui
                m'a offert une immersion dans l'univers du développement de jeu
                vidéo. J'ai eu l'occasion de travailler sur une multitude de
                serious games, qui ont été une source inépuisable d'inspiration
                et d'apprentissage. J'ai également développé des compétences en
                gestion de projet, en travaillant avec des équipes de
                développeurs et de graphistes pour créer des jeux vidéo uniques.
              </p>
              <p>
                Je suis resté 5 ans dans cette boite, dont 2 ans en tant que
                stagiaire, et 3 en tant qu'apprentis. Au cours de cette période,
                j'ai eu l'occasion de développer mes compétences en
                développement web, mais aussi en game design, en graphisme et en
                marketing. Si c'était à refaire je ne changerais rien.
              </p>
            </div>
            <div>
              <h3>Mes premiers gros projets</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
                delectus doloremque dolores fuga maiores modi molestiae nam,
                omnis pariatur perferendis tenetur veniam! Accusantium commodi
                deleniti, dolores non tempore veritatis? Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Accusamus aliquam delectus
                dicta earum excepturi explicabo impedit minus, necessitatibus
                obcaecati quia sed sunt. Dolore dolores laboriosam officia quasi
                quia repudiandae tempora?
              </p>
            </div>
            <div>
              <h3>Les Laboratoires JS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
                delectus doloremque dolores fuga maiores modi molestiae nam,
                omnis pariatur perferendis tenetur veniam! Accusantium commodi
                deleniti, dolores non tempore veritatis? Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Accusamus aliquam delectus
                dicta earum excepturi explicabo impedit minus, necessitatibus
                obcaecati quia sed sunt. Dolore dolores laboriosam officia quasi
                quia repudiandae tempora?
              </p>
            </div>
            <div>
              <h3>Mon projet de boite de jeu vidéo</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
                delectus doloremque dolores fuga maiores modi molestiae nam,
                omnis pariatur perferendis tenetur veniam! Accusantium commodi
                deleniti, dolores non tempore veritatis? Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Accusamus aliquam delectus
                dicta earum excepturi explicabo impedit minus, necessitatibus
                obcaecati quia sed sunt. Dolore dolores laboriosam officia quasi
                quia repudiandae tempora?
              </p>
            </div>
            <div>
              <h3>Mon but dans la vie</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
                delectus doloremque dolores fuga maiores modi molestiae nam,
                omnis pariatur perferendis tenetur veniam! Accusantium commodi
                deleniti, dolores non tempore veritatis? Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Accusamus aliquam delectus
                dicta earum excepturi explicabo impedit minus, necessitatibus
                obcaecati quia sed sunt. Dolore dolores laboriosam officia quasi
                quia repudiandae tempora?
              </p>
            </div>
            <div>
              <h3>Ma philosophie</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                voluptatum, quia, voluptatem, quibusdam voluptates voluptate
                voluptatibus doloremque quos quod laboriosam. Quisquam,
                voluptatum quibusdam. Quisquam, voluptatum quibusdam. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quae
                voluptatum, quia, voluptatem, quibusdam voluptates voluptate
                voluptatibus doloremque quos quod laboriosam. Quisquam,
                voluptatum quibusdam. Quisquam, voluptatum quibusdam. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quae
                voluptatum, quia, voluptatem, quibusdam voluptates voluptate
                voluptatibus doloremque quos quod laboriosam. Quisquam,
                voluptatum quibusdam. Quisquam, voluptatum quibusdam. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quae
                voluptatum, quia, voluptatem, quibusdam voluptates voluptate
                voluptatibus doloremque quos quod laboriosam. Quisquam,
                voluptatum quibusdam. Quisquam, voluptatum quibusdam. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quae
                voluptatum, quia, voluptatem, quibusdam voluptates voluptate
                voluptatibus doloremque quos quod laboriosam. Quisquam,
                voluptatum quibusdam. Quisquam, voluptatum quibusdam. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quae
                voluptatum, quia, voluptatem, quibusdam voluptates voluptate
                voluptatibus doloremque quos quod laboriosam. Quisquam,
                voluptatum quibusdam. Quisquam, voluptatum quibusdam. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quae
                voluptatum, quia, voluptatem, quibusdam voluptates voluptate
                voluptatibus doloremque quos quod laboriosam. Quisquam,
                voluptatum quibusdam. Quisquam, voluptatum quibusdam. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quae
                voluptatum, quia, voluptatem, quibus
              </p>
            </div>
          </div>
        </div>
      </ScrollArea>
    </>
  )
}
