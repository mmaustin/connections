"use client";

import { SquareProps } from "@/types/tttTypes";
import {} from "zustand";
import {} from "zustand/middleware";

//export default function Square({value, onSquareClick}: SquareProps){
export default function Square({value, onSquareClick}: SquareProps) {
  
//});
//}){
  return (
    <button
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      backgroundColor: '#fff',
      border: '1px solid #999',
      outline: 0,
      borderRadius: 0,
      fontSize: '1rem',
      fontWeight: 'bold',
    }}
    onClick={e => onSquareClick(e,9)}
    >
      {value}
    </button>
  )
};

// function handleClick(e: React.MouseEvent<HTMLButtonElement>, i: number){
//   console.log(i); 
// }
function logging(e: React.MouseEvent<HTMLButtonElement>){
  //console.log(`the board number is ${e.currentTarget.getHTML()}`, cell);
  console.log(`the board number is ${e.currentTarget.getHTML()}.`);
}

export function Board() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        width: 'calc(3 * 2.5rem)',
        height: 'calc(3 * 2.5rem)',
        border: '1px solid #999',
      }}
    >
      <Square value="1" onSquareClick={(e) => logging(e)} />
      <Square value="2" onSquareClick={(e) => logging(e)} />
      <Square value="3" onSquareClick={(e) => logging(e)} />
      <Square value="4" onSquareClick={(e) => logging(e)} />
      <Square value="5" onSquareClick={(e) => logging(e)} />
      <Square value="6" onSquareClick={(e) => logging(e)} />
      <Square value="7" onSquareClick={(e) => logging(e)} />
      <Square value="8" onSquareClick={(e) => logging(e)} />
      <Square value="9" onSquareClick={(e) => logging(e)} />
    </div>
  )
}


