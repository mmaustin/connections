
'use client';

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TileState } from "@/types/customTypes";

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
}

export default function Home() {

  const [selectedCount, setSelectedCount] = useState<number>(0);

  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const [tileStatus, setTileStatus] = useState<TileState>(initialTileState);


  const boardTiles = Array.from({ length: 16 }, (_, i) => {
    return <Button key={i} data-tile={i} onClick={handleColor} size='lg' variant="secondary" className="border border-red-700 bg-amber-200" disabled={isDisabled}>TILE</Button>
  });

  const boardTilesPlusThree = Object.values(tileStatus).map((val, i) => {
    if(val === true){
      return <Button key={i} data-tile={i} onClick={handleColor} size='lg' variant="secondary" className="border border-red-700 bg-amber-200" disabled={false}>TILE</Button>
    } else {
      return <Button key={i} data-tile={i} onClick={handleColor} size='lg' variant="secondary" className="border border-red-700 bg-amber-200" disabled={true}>TILE</Button>
    }
  });

  function parameterToSetTileStatus(tile: string | undefined) {
    for (const property in tileStatus) {
      if (property === tile) {
        setTileStatus({
          ...tileStatus,
          [property]: true,
        });
        console.log(tileStatus, property, tile);
        break;
      } else {
        continue; 
      }
    }
  };

  function handleColor(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    if (e.currentTarget.classList.contains('bg-amber-200')) {
      e.currentTarget.classList.remove('bg-amber-200');
      parameterToSetTileStatus(e.currentTarget.dataset.tile);

      e.currentTarget.classList.add('bg-amber-500');
      setSelectedCount(selectedCount + 1);
      //if (selectedCount === 3) setIsDisabled(true);
    } else {
      e.currentTarget.classList.remove('bg-amber-500');
      e.currentTarget.classList.add('bg-amber-200');
      setSelectedCount(selectedCount - 1);
      //if (selectedCount && selectedCount < 4) setIsDisabled(false);

    };

  };

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
