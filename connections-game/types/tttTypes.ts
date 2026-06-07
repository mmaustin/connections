
//import React from "react";

export interface SquareProps {
  value: "X" | "O" | null,
  //onSquareClick: ( i: number) => void;
  onSquareClick(i: number): void;
  //onSquareClick(e: React.MouseEvent<HTMLButtonElement>, i: number): void;
  //onSquareClick: (n: number) => void;
};

// export interface SquareProps {
//   value: "X" | "O" | null,
// };

export type NextSquares = Array<"X" | "O" | null>;
export interface InitialState {
  squares: NextSquares
};

type SquareState = { squ: NextSquares };

export type SquareActions = {
  setSquares: (
    nextSquares: SquareState['squ'] | ((currentSquare: SquareState['squ']) => SquareState['squ']),
  ) => void
};

export type SquareStore = SquareState & SquareActions;