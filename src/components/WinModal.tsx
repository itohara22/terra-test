type Props = {
  item: string;
  onSpinAgain: () => void;
};
export default function WinModal({ item, onSpinAgain }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 grid place-items-center z-[100]">
      <section className="bg-white rounded shadow-lg p-4">
        <h2 className="text-2xl mb-4">Congratulations!</h2>
        <p className="mb-4">You got {item}</p>
        <div className="flex justify-end">
          <button
            onClick={onSpinAgain}
            className="bg-red-400 text-white py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </section>
    </div>
  );
}
