export function popupImage(url: string) {
  const popup = document.getElementById("popupImage")
  const img = popup.querySelector("img") as HTMLImageElement
  img.src = url
  popup.style.display = popup.style.display === "none" ? "block" : "none"
}
