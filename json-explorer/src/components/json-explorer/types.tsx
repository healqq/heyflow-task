export type JSONValue = {
  [key: string]: number | string | boolean | null | JSONValue | JSONValue[]
}
