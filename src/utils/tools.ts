export const hideHashOrAddress = (hash: string, before?: number, end?: number) => {
  const reg = new RegExp(`(\\w{${before ?? 5}})\\w*(\\w{${end ?? 7}})`)
  return hash.replace(reg, '$1......$2')
}
