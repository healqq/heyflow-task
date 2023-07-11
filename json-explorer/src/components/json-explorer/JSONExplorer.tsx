import { useState } from "react";
import { JSONValue } from "./types";
import { Input } from "./Input/Input";
import { Explorer } from "./explorer/Explorer";

interface Props {
  json: JSONValue;
}

export const JSONExplorer = ({ json }: Props) => {
  const [selectedPath, setSelectedPath] = useState("");

  return (
    <div className="json-explorer">
      <Input value={selectedPath} onChange={setSelectedPath} />
      <Explorer json={json} />
    </div>
  );
};
