interface Props {
  className?: string;
}

export default function TopGradient({ className = "" }: Props) {
  return (
    <div
      className={`absolute -top-9 left-1/2 -translate-x-1/2 -translate-y-full blur-[110px] w-[428px] h-[428px] rounded-full ${className}`}
      style={{ backgroundColor: '#D9FAA1' }}
    />
  );
}
