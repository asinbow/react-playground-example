import "./styles.css";

import { Student } from "./types";
import InputBox from "./InputBox";

type Props = Readonly<{
  value: Student;
  onChange: (value: Student) => void;
  onRemove: () => void;
}>;

export default function StudentComponent({ value, onChange, onRemove }: Props) {
  const { firstName, lastName } = value;

  return (
    <div>
      <InputBox
        value={firstName}
        onChange={(firstName) => onChange({ ...value, firstName })}
      />
      <InputBox
        value={lastName}
        onChange={(lastName) => onChange({ ...value, lastName })}
      />
      <input type="button" value="Remove" onClick={onRemove} />
    </div>
  );
}
