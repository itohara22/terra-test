import { useState } from "react";
import WheelItem from "./WheelItem";
import { postOptions } from "./Utils";
import { FetchDataType } from "./types";

type Props = {
  data: FetchDataType;
  finalSpin: number;
  setFinalSpin: React.Dispatch<React.SetStateAction<number>>;
  onPick: (val: string) => void;
  pickItem: string;
};

export default function Wheel({
  onPick,
  data,
  finalSpin,
  setFinalSpin,
  pickItem,
}: Props) {
  const [isSpin, setIsSpin] = useState(false);

  const segmentAngle = 360 / (data?.options.length || 12);

  async function clickHandler() {
    setIsSpin(true);
    try {
      const res = await postOptions();
      if (!res.ok) {
        throw new Error("can't fetch");
      }
      const postData = (await res.json()) as { type: string; id: string };
      const index = data?.options.findIndex((el) => el.id === postData.id);

      const stopAngel = (index === -1 ? 0 : index || 0) * segmentAngle;

      const totalSpin = stopAngel + 360 * 5;

      setFinalSpin(totalSpin);

      setTimeout(() => {
        setIsSpin(false);

        setTimeout(() => {
          // onPick(postData.type);
          onPick("test");
        }, 500);
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div
        style={{
          transform: `rotate(${finalSpin}deg)`,
          transition: isSpin ? "transform 5s ease-out" : "none",
        }}
        className="bg-yellow-200 border-red-500 rounded-full aspect-square w-[400px] relative overflow-hidden"
      >
        {data?.options.map((el, i) => (
          <WheelItem
            key={el.id}
            text={el.id}
            index={i}
            rotageAngle={360 / data.options.length}
          />
        ))}
      </div>
      <div className="absolute z-50 top-1/2 right-1/2 translate-y-[-50%] translate-x-[50%] bg-white rounded-full aspect-square w-[60px] grid ">
        <div className="absolute bg-white aspect-square w-8 rotate-45 -top-[6px] right-1/2 translate-x-[50%] -z-10"></div>
        <button onClick={clickHandler} disabled={isSpin || pickItem !== ""}>
          {isSpin || pickItem !== "" ? "wait" : "Click"}
        </button>
      </div>
      <div className="bg-neutral-600 absolute inset-x-0 bottom-0 top-1/2"></div>
    </>
  );
}
