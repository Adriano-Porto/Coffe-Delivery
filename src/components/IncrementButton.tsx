import { Minus, Plus } from "phosphor-react";
import { IncrementButtonContainer } from "./IncrementButtonStyle";

interface IncrementButtonProps {
  value: number;
  onValueChange: (value: number) => void;
}

export function IncrementButton({
  value,
  onValueChange,
}: IncrementButtonProps) {
  return (
    <IncrementButtonContainer>
      <Minus weight="bold" onClick={() => onValueChange(value - 1)} />
      <span>{value}</span>
      <Plus weight="bold" onClick={() => onValueChange(value + 1)} />
    </IncrementButtonContainer>
  );
}
