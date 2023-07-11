import { PrimitiveJSONStruct } from "../convert-to-json-struct";
import { Key } from "./Key";

interface Props {
  element: PrimitiveJSONStruct;
  onClick: (path: string) => void;
}

export const Primitive = ({ element, onClick }: Props) => {
  let displayedValue = "";

  if (element.kind === "string") {
    displayedValue = `"${element.value}"`;
  }

  if (element.kind === "null") {
    displayedValue = "null";
  }

  if (element.kind === "number" || element.kind === "boolean") {
    displayedValue = element.value.toString();
  }

  const onKeyClick = () => {
    onClick(`.${element.key}`);
  };
  return (
    <div>
      <Key label={element.key} onClick={onKeyClick} />
      :&nbsp;
      <span>{displayedValue}</span>
    </div>
  );
};
