import { decrement, increment, incrementByAmount } from "@/reduxStore/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/reduxStore/hooks";
import React, { useState } from "react";

const ReduxCounter = () => {

  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="h-screen w-full flex flex-col font-semibold items-center justify-center gap-9">
      <p className="text-2xl">{count}</p>

      <div className="flex gap-10">
        <button 
          onClick={()=>dispatch(increment())}
          className="bg-red-200 py-2 px-4 rounded-full hover:bg-red-300 duration-300">
          increment
        </button>
        <button 
          onClick={()=>dispatch(decrement())}
          className="bg-red-200 py-2 px-4 rounded-full hover:bg-red-300 duration-300">
          decrement
        </button>

        <button 
          onClick={() => dispatch(incrementByAmount(10))}
          className="bg-red-200 py-2 px-4 rounded-full hover:bg-red-300 duration-300">
          incrementByAmount
        </button>
      </div>
    </div>
  );
};

export default ReduxCounter;
