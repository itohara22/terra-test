type Props = {
  text: string;
  index: number;
  rotageAngle: number;
};

export default function WheelItem({ text, index, rotageAngle }: Props) {
  const roateDeg = index * rotageAngle;

  return (
    <section
      style={{ transform: `translate(50%) rotate(${roateDeg}deg)` }}
      className="origin-bottom bg-red-300 pt-6 absolute wheel-element h-[200px] w-[105px] top-0 right-1/2"
    >
      <p className="text-center text-xs">{text}</p>
    </section>
  );
}
