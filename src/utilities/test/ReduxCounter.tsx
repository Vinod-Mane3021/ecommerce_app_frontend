
import React, { useState } from "react";

const ReduxCounter = () => {


  return (
    <div className="h-screen w-full flex flex-col font-semibold items-center justify-center gap-9">
      <p className="text-2xl">{99}</p>

      <div className="flex gap-10">
        <button 
          className="bg-red-200 py-2 px-4 rounded-full hover:bg-red-300 duration-300">
          increment by 1
        </button>
        <button 
          className="bg-black py-2 px-4 rounded-full hover:bg-red-300 duration-300">
          decrement
        </button>

        <button 
          className="bg-yellow-900 py-2 px-4 rounded-full hover:bg-red-300 duration-300">
          incrementByAmount
        </button>
      </div>
    </div>
  );
};

export default ReduxCounter;
