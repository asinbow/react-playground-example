type Props = Readonly<{
  value: string;
  onChange: (value: string) => void;
}>;

export default function InputBox({ value, onChange }: Props) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />;
}
