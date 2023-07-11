import { useId } from "react";
import "./Input.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const Input = ({ value, onChange }: Props) => {
  const id = useId();

  return (
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
      <div className="input__preview">
        <span>some value</span>
      </div>
    </div>
  );
};
