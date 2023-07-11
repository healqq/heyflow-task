import { ArrayJSONType, JSONValue } from "./types";

const JSONStructFieldKinds = [
  "string",
  "boolean",
  "null",
  "number",
  "object",
  "array",
] as const;

export type JSONStructFieldKind = (typeof JSONStructFieldKinds)[number];

interface JSONStructElement {
  kind: JSONStructFieldKind;
  key: string;
}

export interface JSONStructNumber extends JSONStructElement {
  kind: "number";
  value: number;
}

export interface JSONStructNull extends JSONStructElement {
  kind: "null";
}

export interface JSONStructString extends JSONStructElement {
  kind: "string";
  value: string;
}

export interface JSONStructBoolean extends JSONStructElement {
  kind: "boolean";
  value: boolean;
}

export interface JSONStructObject extends JSONStructElement {
  kind: "object";
  value: JSONStruct[];
}
export interface JSONStructArray extends JSONStructElement {
  kind: "array";
  value: JSONStruct[];
}

export type PrimitiveJSONStruct =
  | JSONStructBoolean
  | JSONStructNull
  | JSONStructNumber
  | JSONStructString;

export type JSONStruct =
  | JSONStructNull
  | JSONStructNumber
  | JSONStructString
  | JSONStructBoolean
  | JSONStructArray
  | JSONStructObject;

// type-aware array check
const isArray = (value: JSONValue[string]): value is ArrayJSONType => {
  return Array.isArray(value);
};

export const convertKeyValueToJSONStruct = (
  key: string,
  value: JSONValue[string]
): JSONStruct => {
  if (typeof value === "string") {
    return { kind: "string", key, value: value };
  }

  if (typeof value === "number") {
    return { kind: "number", key, value };
  }

  if (typeof value === "boolean") {
    return { kind: "boolean", key, value };
  }

  if (isArray(value)) {
    return {
      kind: "array",
      key,
      // keys for arrays are ommited
      value: value.map((val) => convertKeyValueToJSONStruct("", val)),
    };
  }

  if (value === null) {
    return {
      kind: "null",
      key,
    };
  }

  return {
    kind: "object",
    key,
    value: Object.entries(value).map(([key, value]) =>
      convertKeyValueToJSONStruct(key, value)
    ),
  };
};
