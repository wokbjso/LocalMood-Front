interface ButtonProps {
  color: string;
}

export default function Button({ color }: ButtonProps) {
  return <button className={`bg-${color}`}>버튼</button>;
}
