export function createId(prefix: string) {
  return prefix + "_" + Date.now().toString() + "_" + Math.random().toString(36).slice(2, 9);
}
