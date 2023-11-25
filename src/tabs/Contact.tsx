import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { AlertTriangle, Mail } from "lucide-react"
import ContactLine from "@/app/ContactLine"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Contact() {
  return (
    <ScrollArea className="w-screen h-full">
      <div className="container mx-auto flex flex-col xl:flex-row gap-3">
        <div className="basis-full">
          <h2 className="text-3xl my-3">Me contacter</h2>
          <Alert className="mb-2">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Je ne réponds pas aux appels téléphoniques</AlertTitle>
            <AlertDescription>
              S'il vous plait contactez-moi textuellement pour un meilleur taux
              de réponse de ma part.
            </AlertDescription>
          </Alert>
          <ul>
            <li>
              <ContactLine href="mailto:camille.abella@proton.me" hasNext>
                <Mail /> camille.abella@proton.me
              </ContactLine>
            </li>
            <li>
              <ContactLine href="https://discord.gg/kYxDWWQJ8q" hasNext>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 -28.5 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  className="inline"
                >
                  <g>
                    <path
                      d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                Mon Discord
              </ContactLine>
            </li>
            <li>
              <ContactLine
                href="https://www.linkedin.com/in/camille-abella-a99950176/"
                hasNext
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
                Mon LinkedIn
              </ContactLine>
              <ContactLine href="https://www.malt.fr/profile/camilleabella">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Malt"
                  role="img"
                  width={24}
                  height={24}
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8c34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4c-4.6-23.3-17.9-44.4-53.3-44.4c-35.4 0-48.7 21.2-53.2 44.5c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2c5 23.8 19 45.5 53.1 45.5c34.2 0 48.3-21.9 53.2-45.7c-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5c0 34.3 21.9 48.3 45.8 53.2c2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6c0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2c-25 25-19.4 49.4-6.2 69.1c4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3c24.2-24.2 18.7-49.7 5.3-70c-4.3.3-123.2.6-123.2.6z" />
                </svg>
                Ma page de freelance
              </ContactLine>
            </li>
          </ul>
        </div>
        <div className="basis-full">
          <h2 className="text-3xl my-3">Adresse postale</h2>
          <address>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Camille Abella</CardTitle>
              </CardHeader>
              <CardContent>5 Rue Agusanum 66240 Saint-Estève</CardContent>
              <CardFooter>Europe/France</CardFooter>
            </Card>
          </address>
          <span className="text-2xl">
            Heure française:{" "}
            <span className="font-mono">
              {new Date().toLocaleTimeString("fr-FR", {
                timeZone: "Europe/Paris",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </span>
        </div>
      </div>
    </ScrollArea>
  )
}
