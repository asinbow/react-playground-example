export function replaceAt<T>(list: readonly T[], index: number, item: T): T[] {
  return [...list.slice(0, index), item, ...list.slice(index + 1)];
}

export function removeAt<T>(list: readonly T[], index: number): T[] {
  return [...list.slice(0, index), ...list.slice(index + 1)];
}
