import { useState } from "react";
import useFetchData from "./components/Hooks";
import Wheel from "./components/Wheel";
import WinModal from "./components/WinModal";

function App() {
  const { data, fetchingState } = useFetchData();
  const [finalSpin, setFinalSpin] = useState(0);
  const [pickItem, setPickItem] = useState("");

  function onPick(val: string) {
    setPickItem(val);
  }

  function onSpinAgain() {
    setPickItem("");
    setFinalSpin(0);
  }

  return (
    <div className="grid place-items-center min-h-screen">
      <div className="bg-neutral-600 grid place-items-center relative pt-8">
        {fetchingState === "error" && <div>Something went wrong</div>}
        {fetchingState === "loading" && <div>loading...</div>}
        {fetchingState === "success" && data && (
          <Wheel
            data={data}
            setFinalSpin={setFinalSpin}
            finalSpin={finalSpin}
            onPick={onPick}
            pickItem={pickItem}
          />
        )}
        {pickItem !== "" && (
          <WinModal item={pickItem} onSpinAgain={onSpinAgain} />
        )}
      </div>
    </div>
  );
}

export default App;
