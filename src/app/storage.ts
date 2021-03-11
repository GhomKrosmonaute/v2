export interface Storage {
  dark: boolean
}

export function getStore(): Partial<Storage> {
  const raw = localStorage.getItem("storage")
  return JSON.parse(raw ?? "{}")
}

export function setStore(store: Partial<Storage>) {
  const raw = JSON.stringify(store)
  localStorage.setItem("storage", raw)
}

export function set<StorageKey extends keyof Storage>(
  name: StorageKey,
  value: Storage[StorageKey]
) {
  const store = getStore()
  store[name] = value
  setStore(store)
}

export function get<StorageKey extends keyof Storage>(
  name: StorageKey
): Storage[StorageKey] | undefined {
  const store = getStore()
  return store[name]
}

export function ensure<StorageKey extends keyof Storage>(
  name: StorageKey,
  defaultValue: Storage[StorageKey]
): Storage[StorageKey] {
  let value = get(name)
  if (value) return value
  set(name, defaultValue)
  return defaultValue
}
