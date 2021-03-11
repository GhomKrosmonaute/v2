import * as storage from "./storage"

if (storage.get("dark")) switchIt()

export function switchIt() {
  const activated = document.body.classList.toggle("dark")
  storage.set("dark", activated)
  console.log(activated)
}
