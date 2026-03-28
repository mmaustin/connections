"use client";

import { Button } from "@/components/ui/button";
import { AnswerArray, TileColor, ValueArray, ChosenState } from "@/types/customTypes";
import { useState } from "react";

const PerfectGame = () => {

  const [colorCheckArray, setColorCheckArray] = useState<Array<string|null>>([]);

  const [chosenState, setChosenState] = useState<ChosenState>(
    {
      chosen0: false,
      chosen1: false,
      chosen2: false,
      chosen3: false,
      chosen4: false,
      chosen5: false,
      chosen6: false,
      chosen7: false,
      chosen8: false,
      chosen9: false,
      chosen10: false,
      chosen11: false,
      chosen12: false,
      chosen13: false,
      chosen14: false,
      chosen15: false
    }
  );

  const [gameBoardState, setGameBoardState] = useState<ValueArray>([
    { value: "Cubs", color: "yellow", chosen: false },
    { value: "Joe Gibbs", color: "purple", chosen: false },
    { value: "Man U", color: "green", chosen: false },
    { value: "Blue Hens", color: "blue", chosen: false },
    { value: "Yankees", color: "yellow", chosen: false },
    { value: "Trackhouse", color: "purple", chosen: false },
    { value: "Hotspurs", color: "green", chosen: false },
    { value: "Milikens", color: "blue", chosen: false },
    { value: "Dodgers", color: "yellow", chosen: false },
    { value: "Front Row", color: "purple", chosen: false },
    { value: "Gunners", color: "green", chosen: false },
    { value: "Green Wave", color: "blue", chosen: false },
    { value: "Mets", color: "yellow", chosen: false },
    { value: "23, 11", color: "purple", chosen: false },
    { value: "Reds", color: "green", chosen: false },
    { value: "Blue Devils", color: "blue", chosen: false },
  ]);

  // const [gameBoardState, setGameBoardState] = useState<ValueArray>([
  //   { value: "Cubs", color: "yellow", chosen: {num: 1, bool: false} },
  //   { value: "Joe Gibbs", color: "purple", chosen: {num: 2, bool: false} },
  //   { value: "Man U", color: "green", chosen: {num: 3, bool: false} },
  //   { value: "Blue Hens", color: "blue", chosen: {num: 4, bool: false} },
  //   { value: "Yankees", color: "yellow", chosen: {num: 5, bool: false} },
  //   { value: "Trackhouse", color: "purple", chosen: {num: 6, bool: false} },
  //   { value: "Hotspurs", color: "green", chosen: {num: 7, bool: false} },
  //   { value: "Milikens", color: "blue", chosen: { num: 8, bool: false} },
  //   { value: "Dodgers", color: "yellow", chosen: {num: 9, bool: false} },
  //   { value: "Front Row", color: "purple", chosen: {num: 10, bool: false} },
  //   { value: "Gunners", color: "green", chosen: {num: 11, bool: false} },
  //   { value: "Green Wave", color: "blue", chosen: {num: 12, bool: false} },
  //   { value: "Mets", color: "yellow", chosen: {num: 13, bool: false} },
  //   { value: "23, 11", color: "purple", chosen: {num: 14, bool: false} },
  //   { value: "Reds", color: "green", chosen: {num: 15, bool: false} },
  //   { value: "Blue Devils", color: "blue", chosen: {num: 16, bool: false} },
  // ]);

  const gameBoard = gameBoardState.map((v, i) => {
    //if (v.chosen === false) {
      return <Button key={i} data-tile={i} data-color={v.color} date-tile="v.chosen" onClick={handleTileClick} size="lg" variant="secondary" className="border border-red-700 bg-amber-200">{v.value}</Button>
    //}
  });

  function changeChosenBoolean(val: string){
    const nextGameBoard: ValueArray = gameBoardState.map((t, i) => {
      if(parseInt(val) === i){
        return {
          ...t,
          chosen: !t.chosen
        }
      } else {
        return t;
      }
    });
    setGameBoardState(nextGameBoard);
    
    // const changeChosen = "chosen" + val;
    // setChosenState({
    //   ...chosenState,
    //   [changeChosen]: bool,
    // })
  };


  function filterChosen(e: React.MouseEvent<HTMLButtonElement>){
    
    e.preventDefault()
    const newGameBoard = gameBoardState.filter(tile => {
      //console.log(newGameBoard);
      
      if(tile.chosen !== true){   
        return tile;
      }
    });
    setGameBoardState(newGameBoard);
    //console.log(gameBoardState);
  };

  //console.log(gameBoardState);
  

  function handleTileClick(e: React.MouseEvent<HTMLButtonElement>) {
    //e.preventDefault()

    if (e.currentTarget.classList.contains('bg-amber-200')) {
      e.currentTarget.classList.remove('bg-amber-200');
      e.currentTarget.classList.add('bg-amber-500');
      changeChosenBoolean(e.currentTarget.dataset.tile as string)
    } else {
      e.currentTarget.classList.remove('bg-amber-500');
      e.currentTarget.classList.add('bg-amber-200');
      changeChosenBoolean(e.currentTarget.dataset.tile as string)
    };
  };

  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center" >
      <p className="mb-5 text-4xl font-extrabold"> Wannabe Connections</p>
      <div className="w-[350px] h-[350px] border-2 border-green-700 grid grid-cols-4 gap-2 p-3">
        {gameBoard}
        <Button onClick={filterChosen} size="lg" variant="destructive" className="border border-blue-700">Submit</Button>
      </div>
    </div>
  )
}
export default PerfectGame;


