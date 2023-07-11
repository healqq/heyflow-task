import React from "react";
import { JSONStruct } from "../convert-to-json-struct";
import { Renderer } from "../json-struct-renderer/Renderer";

interface Props {
  jsonStruct: JSONStruct;
  onKeyClick: (path: string) => void;
}

export const Explorer = React.memo(({ jsonStruct, onKeyClick }: Props) => {
  const onClick = (path: string) => {
    console.debug(path);
    onKeyClick(path);
  };

  return (
    <>
      <h2>JSON preview</h2>
      <Renderer jsonStruct={jsonStruct} onClick={onClick} />
    </>
  );
});
