
//import React from "react";

export interface SquareProps {
  value: string | null,
  onSquareClick(e: React.MouseEvent<HTMLButtonElement>, i: number): void;
  //onSquareClick: (n: number) => void;
};