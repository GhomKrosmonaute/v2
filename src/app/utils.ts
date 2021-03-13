export function createElementFromHTML<
  Element extends ChildNode = HTMLDivElement
>(html: string): Element {
  const div = document.createElement("div")
  div.innerHTML = html.trim()
  return div.firstChild as Element
}
