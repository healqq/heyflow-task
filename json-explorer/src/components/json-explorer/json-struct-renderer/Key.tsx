import "./Key.css";

interface Props {
  label: string;
  onClick: () => void;
}

export const Key = ({ label, onClick }: Props) => {
  return (
    <button onClick={onClick} className="key" aria-label="set attribute path">
      {label}
    </button>
  );
};
