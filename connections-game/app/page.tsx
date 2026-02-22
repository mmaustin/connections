'use client';

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TileState, AnswerArrays, ValueArray, TileColor } from "@/types/customTypes";


const initialAnswerArrays: AnswerArrays = [
  { id: 0, arr: [] },
  { id: 1, arr: [] },
  { id: 2, arr: [] },
  { id: 3, arr: [] }
];

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
  //Commented out to test if the  answer array switches to the next array properly
  //const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [colorCheckArray, setColorCheckArray] = useState<Array<string|null>>([]);

  const [chosenBoolean, setChosenBoolean] = useState<boolean>(false);
  
  const [tileStatus, setTileStatus] = useState<TileState>(initialTileState);
  
  const [answerArrayOne, setAnswerArrayOne] = useState<AnswerArrays>(initialAnswerArrays);
  
  const [whichStorageArray, setWhichStorageArray] = useState<number>(0);
  
  
  const boardTiles = Array.from({ length: 16 }, (_, i) => {
    // const testValues = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourt'n", "fifteen", "sixteen"];
    const gameValues: ValueArray = [
      {value: "Cubs", color: "yellow", chosen: chosenBoolean},
      {value: "Joe Gibbs", color: "purple", chosen: chosenBoolean},
      {value: "Man U", color: "green", chosen: chosenBoolean},
      {value: "Blue Hens", color: "blue", chosen: chosenBoolean},
      {value: "Yankees", color: "yellow", chosen: chosenBoolean},
      {value: "Trackhouse", color: "purple", chosen: chosenBoolean},
      {value: "Hotspurs", color: "green", chosen: chosenBoolean},
      {value: "Milikens", color: "blue", chosen: chosenBoolean},
      {value: "Dodgers", color: "yellow", chosen: chosenBoolean},
      {value: "Front Row", color: "purple", chosen: chosenBoolean},
      {value: "Gunners", color: "green", chosen: chosenBoolean},
      {value: "Green Wave", color: "blue", chosen: chosenBoolean},
      {value: "Mets", color: "yellow", chosen: chosenBoolean},
      {value: "23, 11", color: "purple", chosen: chosenBoolean},
      {value: "Reds", color: "green", chosen: chosenBoolean},
      {value: "Blue Devils", color: "blue", chosen: chosenBoolean},
    ];
    //Commented out to test if the  answer array switches to the next array properly
    // return <Button key={i} data-tile={i} onClick={handleColor} size='lg' variant="secondary" className="border border-red-700 bg-amber-200" disabled={isDisabled}>{testValues[i]}</Button>
    return <Button key={i} data-tile={i} data-color={gameValues[i].color} onClick={handleColor} size='lg' variant="secondary" className="border border-red-700 bg-amber-200" >{gameValues[i].value}</Button>
  });

  const boardTilesPlusThree = Object.values(tileStatus).map((val, i) => {
    // const testValues = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fift'n", "sixteen"];
    const gameValues: ValueArray = [
      {value: "Cubs", color: "yellow", chosen: chosenBoolean},
      {value: "Joe Gibbs", color: "purple", chosen: chosenBoolean},
      {value: "Man U", color: "green", chosen: chosenBoolean},
      {value: "Blue Hens", color: "blue", chosen: chosenBoolean},
      {value: "Yankees", color: "yellow", chosen: chosenBoolean},
      {value: "Trackhouse", color: "purple", chosen: chosenBoolean},
      {value: "Hotspurs", color: "green", chosen: chosenBoolean},
      {value: "Milikens", color: "blue", chosen: chosenBoolean},
      {value: "Dodgers", color: "yellow", chosen: chosenBoolean},
      {value: "Front Row", color: "purple", chosen: chosenBoolean},
      {value: "Gunners", color: "green", chosen: chosenBoolean},
      {value: "Green Wave", color: "blue", chosen: chosenBoolean},
      {value: "Mets", color: "yellow", chosen: chosenBoolean},
      {value: "23, 11", color: "purple", chosen: chosenBoolean},
      {value: "Reds", color: "green", chosen: chosenBoolean},
      {value: "Blue Devils", color: "blue", chosen: chosenBoolean},
    ];

    if (val === true) {
      return <Button key={i} data-tile={i} onClick={handleColor} size='lg' variant="secondary" className="border border-red-700 bg-amber-200" disabled={false}>{gameValues[i].value}</Button>
    } else {
      return <Button key={i} data-tile={i} onClick={handleColor} size='lg' variant="secondary" className="border border-red-700 bg-amber-200" disabled={true}>{gameValues[i].value}</Button>
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

  function addToColorArray(color: TileColor){
    //const colorAddition = colorCheckArray.concat([color]);
    setColorCheckArray(colorCheckArray.concat([color]))
  };

  function addToArray(tileValue: string) {
      
    const nextArray: AnswerArrays = answerArrayOne.map((a, i) => {
      if (a.id === whichStorageArray) {
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
    //Changing to the next array will be done on submit in the functioning game.
    if(nextArray[whichStorageArray].arr.length === 4){
      setWhichStorageArray(whichStorageArray + 1);
    };
  };

  function removeFromArray(tileValue: string, arrayValue: number){
    //This works for the rigged system I currently have, but everything rests on not being able to access an array after a successful submission has been made.
    const newArraySet = answerArrayOne.map(a => {
      if(a.id === arrayValue){
        const filteredArr = a.arr.filter(word => word !== tileValue);
        return {id: a.id, arr: filteredArr}
      } else {
        return a;
      }
    })

    setAnswerArrayOne(
      //original logic
      //answerArrayOne.filter(answer => answer != tileValue);
      newArraySet
    );
  };

  function handleColor(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    if (e.currentTarget.classList.contains('bg-amber-200')) {
      e.currentTarget.classList.remove('bg-amber-200');
      parameterToSetTileStatus(e.currentTarget.dataset.tile, true);
      addToColorArray(e.currentTarget.dataset.color as TileColor);
      e.currentTarget.classList.add('bg-amber-500');
      addToArray(e.currentTarget.innerHTML);
      setSelectedCount(selectedCount + 1);
    } else {
      e.currentTarget.classList.remove('bg-amber-500');
      e.currentTarget.classList.add('bg-amber-200');
      removeFromArray(e.currentTarget.innerHTML, whichStorageArray);
      setSelectedCount(selectedCount - 1);
      parameterToSetTileStatus(e.currentTarget.dataset.tile, false);

    };
  };

  if(colorCheckArray.length === 4){
    switch(colorCheckArray.join("")){
      case "purplepurplepurplepurple":
        console.log("purple category found");
        break;
      case "greengreengreengreen":
        console.log("green category found");
        break;
      case "blueblueblueblue":
        console.log("blue category found");
        break;
      case "yellowyellowyellowyellow":
        console.log("yellow category found");
        break;
      default:
        console.log("you dumb. your answer wrong!");
    };
  };
  
  //Commented out to test if the  answer array switches to the next array properly
  // function enable() {
  //   setIsDisabled(false);
  // }

  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center" >
      <p className="mb-5 text-4xl font-extrabold"> Wannabe Connections</p>
      <div className="w-[250px] h-[300px] border-2 border-green-700 grid grid-cols-4 gap-2 p-3">
      {/* Commented out to test if the  answer array switches to the next array properly */}
        {/* {selectedCount < 4 ? boardTiles : boardTilesPlusThree} */}
        {boardTiles}
      </div>
      {/* <Button onClick={enable} >Enable</Button> */}
    </div>
  );
}


//Answer array with the four answer colors, to string, check against the string of four colors. if answer array colors, eg, "blueblueblueblue" === "blueblueblueblue" then filter and get back all of the tiles that are not marked chosen true.  This will get the next board on successful submissions.
//if answer array[0] === "blue", setCheckAnswer("blueblueblueblue"), else if ("purple"), else if ("yellow"), else if ("green"), else return the board as is, because the answer is wrong