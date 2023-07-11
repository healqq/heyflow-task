export type PrimitiveJSONType = number | string | boolean | null;

export type ArrayJSONType = (PrimitiveJSONType | JSONValue)[];

export type JSONValue = {
  [key: string]: PrimitiveJSONType | JSONValue | ArrayJSONType;
};

export const ROOT_ELEMENT_KEY = "root";
