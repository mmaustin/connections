'use client';

import { useRef, useState } from "react";
import { ValueArray } from "@/types/customTypes"

const gameBoardState = [
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
];

const Display = () => {

  const [refBoardState, setRefBoardState] = useState([
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

  console.log(refBoardState);
  

  const ref = useRef(gameBoardState);
  
  
  const gameBoard = gameBoardState.map((v, i) => {
      return <p key={i} data-tile={i} data-color={v.color} date-tile="v.chosen" onClick={startAction} className="border border-red-700 bg-amber-200">{v.value}</p>
      //}
  });

  function setStateWithRef(){
    ref.current = ref.current.filter(r => {
      if(r.chosen === false){
        return r;
      }
    })
  }

  function changeBoolean(val: string){
    ref.current.map((t, i) => {
      console.log(i);
      
      if(parseInt(val) === i){  
        return {
          ...t,
          chosen: !t.chosen
        }
      } else {
        return t;
      }
    });   
  };
    
  function startAction(e: React.MouseEvent<HTMLParagraphElement>){
    changeBoolean(e.currentTarget.dataset.tile as string);
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="">
        {gameBoard}
      </div>
      <button className="h-14 w-10 border-4 border-cyan-800">
        click me
      </button>
    </div>
    
    
  )
}
export default Display