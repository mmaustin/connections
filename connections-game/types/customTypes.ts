

export type TileState = {
  0: boolean,
  1: boolean,
  2: boolean,
  3: boolean,
  4: boolean,
  5: boolean,
  6: boolean,
  7: boolean,
  8: boolean,
  9: boolean,
  10: boolean,
  11: boolean,
  12: boolean,
  13: boolean,
  14: boolean,
  15: boolean,
};

export type AnswerArray = [string, string, string, string];

// export type AnswerArrays = [
//   { id: number; arr: string[];},
//   { id: number; arr: string[];},
//   { id: number; arr: string[];},
//   { id: number; arr: string[];}
// ];

export type AnswerArrays = { id: number, arr: string[] }[];

export type TileColor = "purple" | "green" | "blue" | "yellow";

export type ValueArray = { value: string, chosen: boolean, color: TileColor }[];

export type ChosenState = {
  chosen0: boolean,
  chosen1: boolean,
  chosen2: boolean,
  chosen3: boolean,
  chosen4: boolean,
  chosen5: boolean,
  chosen6: boolean,
  chosen7: boolean,
  chosen8: boolean,
  chosen9: boolean,
  chosen10: boolean,
  chosen11: boolean,
  chosen12: boolean,
  chosen13: boolean,
  chosen14: boolean,
  chosen15: boolean
};