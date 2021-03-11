export * as storage from "./app/storage"
export * as theme from "./app/theme"

export function observe(
  element: HTMLElement,
  callback: IntersectionObserverCallback
): IntersectionObserver {
  const observer = new IntersectionObserver(callback)
  observer.observe(element)
  return observer
}
