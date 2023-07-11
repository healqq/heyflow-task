import { JSONStructArray } from "../convert-to-json-struct";
import { Renderer } from "./Renderer";
import { Fragment } from "react";
import { Key } from "./Key";
import { INDENT_SIZE } from "./constants";

interface Props {
  element: JSONStructArray;
  onClick: (path: string) => void;
}

export const Array = ({ element, onClick }: Props) => {
  const isLastElement = (index: number) => {
    return index !== element.value.length - 1;
  };

  return (
    <Fragment>
      <Key label={element.key} onClick={() => onClick(`.${element.key}`)} />
      :&nbsp;{"["}
      <div style={{ paddingLeft: `${INDENT_SIZE}ch` }}>
        {element.value.map((el, index) => (
          <Fragment key={index}>
            <Renderer
              jsonStruct={el}
              onClick={(path) => {
                onClick(`.${element.key}[${index}]${path}`);
              }}
            />
            {isLastElement(index) && ",\u00A0"}
          </Fragment>
        ))}
      </div>
      {"]"}
    </Fragment>
  );
};
