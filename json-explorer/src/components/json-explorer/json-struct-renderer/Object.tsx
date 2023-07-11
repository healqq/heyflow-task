import { JSONStructObject } from "../convert-to-json-struct";
import { Renderer } from "./Renderer";
import { Fragment } from "react";
import { Key } from "./Key";
import { INDENT_SIZE } from "./constants";
import { ROOT_ELEMENT_KEY } from "../types";

interface Props {
  element: JSONStructObject;
  onClick: (path: string) => void;
}

export const Object = ({ element, onClick }: Props) => {
  return (
    <Fragment>
      {element.key !== ROOT_ELEMENT_KEY && element.key.length > 0 && (
        <>
          <Key label={element.key} onClick={() => onClick(`.${element.key}`)} />
          :&nbsp;
        </>
      )}
      {"{"}
      <div style={{ paddingLeft: `${INDENT_SIZE}ch` }}>
        {element.value.map((el) => (
          <Renderer
            key={el.key}
            jsonStruct={el}
            onClick={(path) => {
              onClick(`${element.key}${path}`);
            }}
          />
        ))}
      </div>
      {"}"}
    </Fragment>
  );
};
