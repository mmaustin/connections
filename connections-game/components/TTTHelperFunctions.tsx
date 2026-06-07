"use client";

import { NextSquares, SquareProps, SquareStore, SquareActions } from "@/types/tttTypes";
import {create} from "zustand";
import {combine} from "zustand/middleware";

const useGameStore = create(
  combine({squares: Array(9).fill(null), xIsNext: true}, (set) => {
    return {
      setSquares: (nextSquares) => {  //Remember to remove 'noImplicitAny: false' from tsconfig file.  This is a setter function, so the type should be the squares array | a setter function--perhaps an updater function?
        set((state) => ({
          squares: typeof nextSquares === 'function' ? nextSquares(state.squares) : nextSquares,
        }))
      },
      setXIsNext: (nextXIsNext) => {
        set((state) => ({
          xIsNext: typeof nextXIsNext === 'function' ? nextXIsNext(state.xIsNext) : nextXIsNext,
        }))
      }
    }
  }),
);

export function Square({value, onSquareClick, k}: SquareProps & {k: number}) {
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
    onClick={() => onSquareClick(k)}
    >
      {value}
    </button>
  )
};

export function Board(){
  const squares = useGameStore(state => state.squares);
  const setSquares = useGameStore(state => state.setSquares);
  const xIsNext = useGameStore(state => state.xIsNext);
  const setXIsNext = useGameStore(state => state.setXIsNext);
  const player = xIsNext ? "X" : "O";

  function handleClick(num: number):void{
    if(squares[num]) return;
    const nextSquares = squares.slice();
    nextSquares[num] = player;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  function calculateWinner(squares){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  };

  function calculateTurns(squares){
    return squares.filter(square => !square).length
  };

  function calculateStatus(winner, turns, player){
    if(!winner && !turns) return "Draw";
    if(winner) return `Winner ${winner}`;
    return `Next player: ${player}`
  }

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
      {
        squares.map((square, squareIndex) => (
          <Square key={squareIndex} k={squareIndex} value={square} onSquareClick={() => handleClick( squareIndex)} />
        ))
      }
    </div>
  )

}












// //export default function Square({value, onSquareClick}: SquareProps){
// export default function Square({value, onSquareClick}: SquareProps) {
  
// //});
// //}){
//   return (
//     <button
//     style={{
//       display: 'inline-flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: 0,
//       backgroundColor: '#fff',
//       border: '1px solid #999',
//       outline: 0,
//       borderRadius: 0,
//       fontSize: '1rem',
//       fontWeight: 'bold',
//     }}
//     onClick={e => onSquareClick(e,9)}
//     >
//       {value}
//     </button>
//   )
// };

// // function handleClick(e: React.MouseEvent<HTMLButtonElement>, i: number){
// //   console.log(i); 
// // }
// function logging(e: React.MouseEvent<HTMLButtonElement>){
//   //console.log(`the board number is ${e.currentTarget.getHTML()}`, cell);
//   console.log(`the board number is ${e.currentTarget.getHTML()}.`);
// }

// export function Board() {
//   return (
//     <div
//       style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(3, 1fr)',
//         gridTemplateRows: 'repeat(3, 1fr)',
//         width: 'calc(3 * 2.5rem)',
//         height: 'calc(3 * 2.5rem)',
//         border: '1px solid #999',
//       }}
//     >
//       <Square value="1" onSquareClick={(e) => logging(e)} />
//       <Square value="2" onSquareClick={(e) => logging(e)} />
//       <Square value="3" onSquareClick={(e) => logging(e)} />
//       <Square value="4" onSquareClick={(e) => logging(e)} />
//       <Square value="5" onSquareClick={(e) => logging(e)} />
//       <Square value="6" onSquareClick={(e) => logging(e)} />
//       <Square value="7" onSquareClick={(e) => logging(e)} />
//       <Square value="8" onSquareClick={(e) => logging(e)} />
//       <Square value="9" onSquareClick={(e) => logging(e)} />
//     </div>
//   )
// }


