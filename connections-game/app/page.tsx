'use client';

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TileState, AnswerArrays } from "@/types/customTypes";

const initialAnswerArrays: AnswerArrays = [
  { id: 0, arr: [] },
  { id: 1, arr: [] },
  { id: 2, arr: [] },
  { id: 3, arr: [] }
]

const initialTileState: TileState = {
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false,
  11: false,
  12: false,
  13: false,
  14: false,
  15: false,
};

export default function Home() {

  const [selectedCount, setSelectedCount] = useState<number>(0);

  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const [tileStatus, setTileStatus] = useState<TileState>(initialTileState);

  //const [answerArrayOne, setAnswerArrayOne] = useState<Array<string>>([]);
  const [answerArrayOne, setAnswerArrayOne] = useState<AnswerArrays>(initialAnswerArrays);

  //const [storageArray, setStorageArray] = useState<number>(0);


  const boardTiles = Array.from({ length: 16 }, (_, i) => {
    const testValues = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourt'n", "fifteen", "sixteen"];

    return <Button key={i} data-tile={i} onClick={handleColor} size='lg' variant="secondary" className="border border-red-700 bg-amber-200" disabled={isDisabled}>{testValues[i]}</Button>
  });

  const boardTilesPlusThree = Object.values(tileStatus).map((val, i) => {
    const testValues = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fift'n", "sixteen"];

    if (val === true) {
      return <Button key={i} data-tile={i} onClick={handleColor} size='lg' variant="secondary" className="border border-red-700 bg-amber-200" disabled={false}>{testValues[i]}</Button>
    } else {
      return <Button key={i} data-tile={i} onClick={handleColor} size='lg' variant="secondary" className="border border-red-700 bg-amber-200" disabled={true}>{testValues[i]}</Button>
    }
  });

  function parameterToSetTileStatus(tile: string | undefined, b: boolean) {
    for (const property in tileStatus) {
      if (property === tile) {
        setTileStatus({
          ...tileStatus,
          [property]: b,
        });
        break;
      } else {
        continue;
      }
    }
  };

  function addToArray(tileValue: string) {
      
    const nextArray: AnswerArrays = answerArrayOne.map((a, i) => {
      if (a.id === 0) {
        return { id: i, arr: [...a.arr].concat([tileValue]) };
      } else {
        return a;
      }
    });
    // setAnswerArrayOne([
    //   ...answerArrayOne,
    //   tileValue
    // ])
    setAnswerArrayOne(
      nextArray
    )
    console.log(nextArray);

  };

  // function removeFromArray(tileValue: string){
  //   setAnswerArrayOne(
  //     answerArrayOne.filter(answer => answer != tileValue)
  //   );
  // };

  function handleColor(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    if (e.currentTarget.classList.contains('bg-amber-200')) {
      e.currentTarget.classList.remove('bg-amber-200');
      parameterToSetTileStatus(e.currentTarget.dataset.tile, true);

      e.currentTarget.classList.add('bg-amber-500');
      addToArray(e.currentTarget.innerHTML);
      setSelectedCount(selectedCount + 1);
    } else {
      e.currentTarget.classList.remove('bg-amber-500');
      e.currentTarget.classList.add('bg-amber-200');
      //removeFromArray(e.currentTarget.innerHTML);
      setSelectedCount(selectedCount - 1);
      parameterToSetTileStatus(e.currentTarget.dataset.tile, false);

    };
  };

  console.log(answerArrayOne);

  function enable() {
    setIsDisabled(false);
  }

  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center" >
      <p className="mb-5 text-4xl font-extrabold"> Wannabe Connections</p>
      <div className="w-[250px] h-[300px] border-2 border-green-700 grid grid-cols-4 gap-2 p-3">
        {selectedCount < 4 ? boardTiles : boardTilesPlusThree}
        {/* {boardTiles} */}
      </div>
      <Button onClick={enable} >Enable</Button>
    </div>
  );
}
