export function observe(
  element: HTMLElement,
  callback: IntersectionObserverCallback
): IntersectionObserver {
  const observer = new IntersectionObserver(callback)
  observer.observe(element)
  return observer
}
