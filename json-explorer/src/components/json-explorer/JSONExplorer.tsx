import { useState, useMemo } from "react";
import { JSONValue, ROOT_ELEMENT_KEY } from "./types";
import { Input } from "./Input/Input";
import { Explorer } from "./explorer/Explorer";
import { convertKeyValueToJSONStruct } from "./convert-to-json-struct";

interface Props {
  json: JSONValue;
}

export const JSONExplorer = ({ json }: Props) => {
  const [selectedPath, setSelectedPath] = useState("");

  const jsonStruct = useMemo(
    () => convertKeyValueToJSONStruct(ROOT_ELEMENT_KEY, json),
    [json]
  );

  return (
    <div className="json-explorer">
      <Input value={selectedPath} onChange={setSelectedPath} json={json} />
      <Explorer jsonStruct={jsonStruct} onKeyClick={setSelectedPath} />
    </div>
  );
};
