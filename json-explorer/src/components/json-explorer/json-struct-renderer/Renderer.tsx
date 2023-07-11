import { JSONStruct, PrimitiveJSONStruct } from "../convert-to-json-struct";
import { Primitive } from "./Primitive";
import { Array } from "./Array";
import { Object } from "./Object";

interface Props {
  jsonStruct: JSONStruct;
  onClick: (path: string) => void;
}

export const Renderer = ({ jsonStruct, onClick }: Props) => {
  if (["string", "boolean", "null", "number"].includes(jsonStruct.kind)) {
    return (
      <Primitive
        key={jsonStruct.key}
        onClick={onClick}
        element={jsonStruct as PrimitiveJSONStruct}
      />
    );
  }

  if (jsonStruct.kind === "array") {
    return (
      <Array key={jsonStruct.key} onClick={onClick} element={jsonStruct} />
    );
  }

  if (jsonStruct.kind === "object") {
    return <Object onClick={onClick} element={jsonStruct} />;
  }
};
