export interface ClickCounterProps {
  value: number;
  onClick: () => void;
}

export default function ClickCounterShared({
  value,
  onClick,
}: ClickCounterProps) {
  return (
    <button type="button" onClick={onClick}>
      Counter: {value}
    </button>
  );
}
