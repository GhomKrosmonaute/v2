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
              Je suis Camille Abella, plus connu sous le pseudo Ghom, un
              développeur web amateur passionné basé à Perpignan, France. Mon
              parcours dans le monde du développement web a débuté en 2017, avec
              une immersion dans l'univers professionnel pendant cinq
              enrichissantes années.
            </p>
            <p>
              Ma passion pour le développement web va au-delà d'une simple
              profession. Chaque ligne de code que je compose, chaque projet sur
              lequel je travaille est une expression de mon dévouement envers
              l'art du codage. En tant qu'amateur passionné, je me considère
              comme un étudiant perpétuel, toujours avide d'apprendre et de
              repousser les limites de mes compétences.
            </p>
            <p>
              Mon expérience en entreprise m'a permis de m'imprégner des
              meilleures pratiques du secteur, tout en développant un amour
              profond pour la création de solutions numériques. Récemment, j'ai
              décidé de franchir le cap et de me lancer en freelance, prêt à
              relever de nouveaux défis et à partager ma passion avec un public
              plus large.
            </p>
            <p>
              Bien que ma carrière en tant que freelance soit encore à ses
              débuts, mon enthousiasme et mon engagement envers la qualité
              restent intacts. Je suis ouvert à de nouvelles collaborations et à
              la possibilité de donner vie à vos idées à travers des sites web
              uniques et conviviaux. Explorez mon portfolio pour découvrir mes
              réalisations jusqu'à présent, et n'hésitez pas à me contacter pour
              discuter de la manière dont nous pourrions travailler ensemble
              pour concrétiser votre vision en ligne.
            </p>
            <h2>Mon parcours scolaire</h2>
            <p>
              Mon parcours scolaire a été tout sauf conventionnel, marqué par
              une agilité d'esprit et une quête constante de créativité. Tout se
              déroulait normalement jusqu'en 4ème, où mon esprit agité et
              espiègle me caractérisait comme un véritable garnement. Cependant,
              dès cette période, une remise en question profonde du système
              éducatif m'a poussé à prendre des chemins moins conventionnels.
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
              développer une logique aiguisée et de cultiver une approche unique
              du codage. En m'éloignant des sentiers battus, j'ai découvert une
              passion inextinguible pour la création numérique. Ainsi, ces
              années de retrait du système éducatif traditionnel ont non
              seulement forgé ma compréhension du développement web, mais elles
              ont également cultivé en moi une perspective singulière et une
              détermination à défier les normes pour atteindre l'excellence dans
              mon domaine.
            </p>
            <p>
              Mon parcours atypique témoigne de ma conviction profonde selon
              laquelle l'apprentissage est une aventure personnelle, et le
              développement de compétences ne se limite pas nécessairement aux
              salles de classe conventionnelles. Aujourd'hui, fort de cette
              expérience hors du commun, je mets en pratique ces leçons apprises
              dans chaque projet, apportant une touche unique et novatrice à
              chaque ligne de code que je crée.
            </p>
            <h2>Les jeux vidéos</h2>
            <p>
              Les jeux vidéo ont été une source inépuisable de passion et
              d'inspiration tout au long de ma vie, jouant un rôle déterminant
              dans la manière dont je conçois le codage. Dès mon plus jeune âge,
              ma fascination pour les jeux vidéo a été le catalyseur qui m'a
              amené à explorer le monde complexe du développement informatique.
              Mon parcours a débuté par la rétro-ingénierie de jeux vidéo, où
              j'ai entrepris de modifier et d'adapter ces univers virtuels à mes
              propres préférences, fusionnant ainsi ma passion pour le jeu avec
              celle du codage.
            </p>
            <p>
              À mesure que ma compréhension du développement s'affinait, j'ai
              naturellement évolué vers la création de mes propres jeux vidéo
              par pur plaisir. Cette transition a été nourrie par l'influence de
              titres emblématiques qui ont laissé une empreinte indélébile sur
              ma vision du codage.
            </p>
            <p>
              Ah, les souvenirs d'enfance sont souvent teintés d'une touche
              espiègle. Il y a une anecdote qui résonne particulièrement dans ma
              mémoire ludique. Lorsque j'étais gosse, un ami généreux m'avait
              prêté le jeu "Advance Wars" sur Nintendo DS. C'était une immersion
              captivante dans le monde de la stratégie militaire, et je me suis
              tellement plongé dans l'univers du jeu que, je dois l'avouer avec
              un sourire complice, je n'ai jamais trouvé le chemin du retour
              pour rendre le jeu à son propriétaire. Un petit acte espiègle qui
              a peut-être forgé ma passion pour les mondes virtuels et les
              intrigues stratégiques. Après tout, certains jeux ont simplement
              un pouvoir irrésistible. Désolé, cher ami, si tu lis ceci. C'était
              une aventure mémorable! 😄
            </p>
            <h2>Ma formation</h2>
            <p>
              Ma vie a pris un tournant significatif lorsqu'une étape cruciale
              m'a conduit à quitter ma période de solitude. Je me suis engagé
              dans une aventure transformative à l'École d'Art de l'Idem, une
              période qui a redéfini non seulement ma compréhension du code mais
              aussi ma manière d'interagir avec le monde qui m'entoure.
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
              lieu de croissance personnelle, où j'ai pu corriger mes problèmes
              de sociabilisation et apprendre à collaborer de manière
              constructive.
            </p>
            <h2>Mes premiers pas dans le monde du travail</h2>
            <p>
              Tout a commencé lors de ma participation enthousiaste au Startup
              Weekend à Perpignan, une expérience collaborative qui a été le
              catalyseur de changements majeurs. Aux côtés de mon ami Arnaud,
              nous avons formé une équipe dynamique et avons travaillé
              intensément sur une idée novatrice. Notre projet, qui a fini par
              se classer en 3ème place, était à l'origine de l'entreprise
              derrière l'application de rencontre "Kerubi". L'excitation et
              l'énergie déployées pendant ce weekend ont été récompensées par
              l'obtention de fonds de 10 000€, qui ont permis à Arnaud de
              concrétiser son rêve entrepreneurial. Cette expérience a été une
              immersion profonde dans l'univers compétitif et stimulant des
              startups, façonnant ma perspective du monde professionnel.
            </p>
            <p>
              Par la suite, j'ai embrassé mon premier stage chez Agence Point
              Com, une expérience de trois mois qui m'a permis de plonger dans
              le monde du développement web d'une manière plus traditionnelle.
              Cependant, j'ai rapidement compris que WordPress n'était pas
              vraiment ma tasse de thé. Ce stage m'a servi de tremplin pour
              découvrir mes préférences et mes forces en matière de
              développement. Même si WordPress n'était pas mon domaine de
              prédilection, cette expérience m'a permis de développer une
              compréhension plus approfondie des dynamiques de travail en agence
              et des exigences du développement web dans un contexte
              professionnel.
            </p>
            <p>
              Ces premières expériences ont jeté les bases de ma carrière,
              m'offrant des enseignements précieux sur l'entrepreneuriat et
              m'aidant à affiner mes préférences en matière de développement
              web. Chaque étape, qu'elle soit couronnée de succès ou accompagnée
              d'apprentissages, a contribué à forger la trajectoire qui m'a
              conduit là où je suis aujourd'hui.
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
