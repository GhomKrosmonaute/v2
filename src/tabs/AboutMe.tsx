import React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AlertTriangle } from "lucide-react"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

export default function AboutMe() {
  return (
    <ScrollArea className="w-full h-full">
      <div className="container py-3">
        <Alert className="mb-2 w-fit">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Work in progress</AlertTitle>
        </Alert>
        <div id="redaction" className="block xl:flex xl:gap-3">
          <div className="basis-full">
            <h2>A propos de moi</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
              delectus doloremque dolores fuga maiores modi molestiae nam, omnis
              pariatur perferendis tenetur veniam! Accusantium commodi deleniti,
              dolores non tempore veritatis? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Accusamus aliquam delectus dicta
              earum excepturi explicabo impedit minus, necessitatibus obcaecati
              quia sed sunt. Dolore dolores laboriosam officia quasi quia
              repudiandae tempora?
            </p>
            <h2>Mon parcours scolaire</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
              delectus doloremque dolores fuga maiores modi molestiae nam, omnis
              pariatur perferendis tenetur veniam! Accusantium commodi deleniti,
              dolores non tempore veritatis? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Accusamus aliquam delectus dicta
              earum excepturi explicabo impedit minus, necessitatibus obcaecati
              quia sed sunt. Dolore dolores laboriosam officia quasi quia
              repudiandae tempora?
            </p>
            <h2>Les jeux vidéos</h2>
            <p>
              LES JEUX VIDEO M'ONT PASSIONNE DEPUIS MON PLUS JEUNE AGE, J'AI
              COMMENCE A CODER EN RETRO-INGENIERIE DES JEUX VIDEO POUR LES
              MODIFIER A MON GOUT. J'AI ENSUITE COMMENCE A CREER MES PROPRES
              JEUX VIDEO AVEC UNITY. J'AI ENSUITE COMMENCE A CREER DES SITES
              INTERNET POUR MES JEUX VIDEO, PUIS POUR MES PROJETS PERSONNELS.
              J'AI ENSUITE DECIDE DE FAIRE DE MA PASSION MON METIER EN
              COMMENCANT UNE FORMATION DE DEVELOPPEUR WEB A L'ECOLE O'CLOCK.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
              delectus doloremque dolores fuga maiores modi molestiae nam, omnis
              pariatur perferendis tenetur veniam! Accusantium commodi deleniti,
              dolores non tempore veritatis? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Accusamus aliquam delectus dicta
              earum excepturi explicabo impedit minus, necessitatibus obcaecati
              quia sed sunt. Dolore dolores laboriosam officia quasi quia
              repudiandae tempora?
            </p>
            <h2>Mes premiers pas dans le monde du travail</h2>
            <p>
              PARLER ICI DU STARTUP WEEKEND, DE MON PREMIER STAGE CHEZ AGENCE
              POINT COM Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ad aut delectus doloremque dolores fuga maiores modi
              molestiae nam, omnis pariatur perferendis tenetur veniam!
              Accusantium commodi deleniti, dolores non tempore veritatis? Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
              aliquam delectus dicta earum excepturi explicabo impedit minus,
              necessitatibus obcaecati quia sed sunt. Dolore dolores laboriosam
              officia quasi quia repudiandae tempora?
            </p>
            <h2>PlayCurious</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
              delectus doloremque dolores fuga maiores modi molestiae nam, omnis
              pariatur perferendis tenetur veniam! Accusantium commodi deleniti,
              dolores non tempore veritatis? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Accusamus aliquam delectus dicta
              earum excepturi explicabo impedit minus, necessitatibus obcaecati
              quia sed sunt. Dolore dolores laboriosam officia quasi quia
              repudiandae tempora?
            </p>
            <h2>Mes premiers gros projets</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
              delectus doloremque dolores fuga maiores modi molestiae nam, omnis
              pariatur perferendis tenetur veniam! Accusantium commodi deleniti,
              dolores non tempore veritatis? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Accusamus aliquam delectus dicta
              earum excepturi explicabo impedit minus, necessitatibus obcaecati
              quia sed sunt. Dolore dolores laboriosam officia quasi quia
              repudiandae tempora?
            </p>
          </div>
          <Separator className="hidden xl:block" orientation="vertical" />
          <div className="basis-full">
            <h2>Ma formation</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
              delectus doloremque dolores fuga maiores modi molestiae nam, omnis
              pariatur perferendis tenetur veniam! Accusantium commodi deleniti,
              dolores non tempore veritatis? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Accusamus aliquam delectus dicta
              earum excepturi explicabo impedit minus, necessitatibus obcaecati
              quia sed sunt. Dolore dolores laboriosam officia quasi quia
              repudiandae tempora?
            </p>
            <h2>Les Laboratoires JS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
              delectus doloremque dolores fuga maiores modi molestiae nam, omnis
              pariatur perferendis tenetur veniam! Accusantium commodi deleniti,
              dolores non tempore veritatis? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Accusamus aliquam delectus dicta
              earum excepturi explicabo impedit minus, necessitatibus obcaecati
              quia sed sunt. Dolore dolores laboriosam officia quasi quia
              repudiandae tempora?
            </p>
            <h2>Mon projet de boite de jeu vidéo</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
              delectus doloremque dolores fuga maiores modi molestiae nam, omnis
              pariatur perferendis tenetur veniam! Accusantium commodi deleniti,
              dolores non tempore veritatis? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Accusamus aliquam delectus dicta
              earum excepturi explicabo impedit minus, necessitatibus obcaecati
              quia sed sunt. Dolore dolores laboriosam officia quasi quia
              repudiandae tempora?
            </p>
            <h2>Mon but dans la vie</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
              delectus doloremque dolores fuga maiores modi molestiae nam, omnis
              pariatur perferendis tenetur veniam! Accusantium commodi deleniti,
              dolores non tempore veritatis? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Accusamus aliquam delectus dicta
              earum excepturi explicabo impedit minus, necessitatibus obcaecati
              quia sed sunt. Dolore dolores laboriosam officia quasi quia
              repudiandae tempora?
            </p>
            <h2>Ma philosophie</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              voluptatum, quia, voluptatem, quibusdam voluptates voluptate
              voluptatibus doloremque quos quod laboriosam. Quisquam, voluptatum
              quibusdam. Quisquam, voluptatum quibusdam. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quae voluptatum, quia,
              voluptatem, quibusdam voluptates voluptate voluptatibus doloremque
              quos quod laboriosam. Quisquam, voluptatum quibusdam. Quisquam,
              voluptatum quibusdam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quae voluptatum, quia, voluptatem, quibusdam
              voluptates voluptate voluptatibus doloremque quos quod laboriosam.
              Quisquam, voluptatum quibusdam. Quisquam, voluptatum quibusdam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              voluptatum, quia, voluptatem, quibusdam voluptates voluptate
              voluptatibus doloremque quos quod laboriosam. Quisquam, voluptatum
              quibusdam. Quisquam, voluptatum quibusdam. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quae voluptatum, quia,
              voluptatem, quibusdam voluptates voluptate voluptatibus doloremque
              quos quod laboriosam. Quisquam, voluptatum quibusdam. Quisquam,
              voluptatum quibusdam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quae voluptatum, quia, voluptatem, quibusdam
              voluptates voluptate voluptatibus doloremque quos quod laboriosam.
              Quisquam, voluptatum quibusdam. Quisquam, voluptatum quibusdam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              voluptatum, quia, voluptatem, quibusdam voluptates voluptate
              voluptatibus doloremque quos quod laboriosam. Quisquam, voluptatum
              quibusdam. Quisquam, voluptatum quibusdam. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quae voluptatum, quia,
              voluptatem, quibus
            </p>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
