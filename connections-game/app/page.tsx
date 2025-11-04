//import { Button } from "@/components/ui/button";
'use client';

import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {

  const handleColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    //e.currentTarget.classList.contains('border-blue-500')
    if(e.currentTarget.classList.contains('bg-amber-200')){
      e.currentTarget.classList.remove('bg-amber-200');
      e.currentTarget.classList.add('bg-amber-500');
    } else {
      e.currentTarget.classList.remove('bg-amber-500');
      e.currentTarget.classList.add('bg-amber-200');
    }
  }

  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center" >
      <p className="mb-5 text-4xl font-extrabold"> Black Connections</p>
      <div className="w-[25%] h-[50%] border-2 border-green-700 grid grid-cols-4 gap-2 p-3">
        <button onClick={handleColor} className="border border-red-700 bg-amber-200">TILE</button>
        <Button onClick={handleColor} size="lg" variant="secondary" className="border border-red-700 bg-amber-200">TILE</Button>
        <Button onClick={handleColor} size="lg" variant="secondary" className="border border-red-700 bg-amber-200">TILE</Button>
        <Button onClick={handleColor} size="lg" variant="secondary" className="border border-red-700 bg-amber-200">TILE</Button>
        <Button onClick={handleColor} size="lg" variant="secondary" className="border border-red-700 bg-amber-200">TILE</Button>
        <Button onClick={handleColor} size="lg" variant="secondary" className="border border-red-700 bg-amber-200">TILE</Button>
        <Button onClick={handleColor} size="lg" variant="secondary" className="border border-red-700 bg-amber-200">TILE</Button>
        <Button onClick={handleColor} size="lg" variant="secondary" className="border border-red-700 bg-amber-200">TILE</Button>
        <Button onClick={handleColor} size="lg" variant="secondary" className="border border-red-700 bg-amber-200">TILE</Button>
        <Button onClick={handleColor} size="lg" variant="secondary" className="border border-red-700 bg-amber-200">TILE</Button>
        <Button onClick={handleColor} size="lg" variant="secondary" className="border border-red-700">TILE</Button>
        <Button onClick={handleColor} size="lg" variant="secondary" className="border border-red-700">TILE</Button>
        <Button onClick={handleColor} size="lg" variant="secondary" className="border border-red-700">TILE</Button>
        <Button onClick={handleColor} size="lg" variant="secondary" className="border border-red-700">TILE</Button>
        <Button onClick={handleColor} size="lg" variant="secondary" className="border border-red-700">TILE</Button>
        <Button onClick={handleColor} size="lg" variant="secondary" className="border border-red-700">TILE</Button>
      </div>

    </div>
  );
}
