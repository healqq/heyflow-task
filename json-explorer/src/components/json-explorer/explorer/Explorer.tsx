import type { JSONValue } from "../types";

interface Props {
  json: JSONValue;
}

export const Explorer = ({ json }: Props) => {
  return JSON.stringify(json);
};
