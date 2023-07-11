import { useId, useEffect, useState } from "react";
import lodashGet from "lodash/get";

import "./Input.css";
import { JSONValue, ROOT_ELEMENT_KEY } from "../types";

interface Props {
  json: JSONValue;
  value: string;
  onChange: (value: string) => void;
}

export const Input = ({ json, value, onChange }: Props) => {
  const id = useId();
  const [preview, setPreview] = useState<string | undefined>(undefined);

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const propertyPath = value.substring(ROOT_ELEMENT_KEY.length + 1);

    console.log(propertyPath);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
    const resolvedValue: JSONValue = lodashGet(json, propertyPath) as JSONValue;

    if (resolvedValue === undefined) {
      setIsValid(false);
      setPreview(undefined);
    } else {
      setIsValid(true);
      setPreview(JSON.stringify(resolvedValue));
    }
  }, [json, value]);
  return (
    <>
      <h2>Search value</h2>
      <div className="input__wrapper">
        <label htmlFor={id} className="input__label">
          Attribute path
        </label>
        <input
          className="input"
          type="text"
          value={value}
          id={id}
          onChange={(e) => onChange(e.target.value)}
        />
        <label className="input__preview-label">Preview value</label>
        <div className="input__preview">
          {isValid ? <span>{preview}</span> : <span>invalid path</span>}
        </div>
      </div>
    </>
  );
};
