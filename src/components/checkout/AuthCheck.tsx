import React from 'react'

const AuthCheck = () => {
  return (
    <div className="w-full xl:w-[72%] mt-5 shadow-md bg-white rounded-xl px-2 sm:px-4 lg:px-16 py-8 lg:py-16 flex flex-col gap-5 overflow-hidden">
      <div className="w-full h-48 lg:h-44 flex flex-col  justify-center mx-auto border order-1 border-gray-400 border-l-4 rounded-md">
        <h1 className="px-10 sm:text-lg font-bold">Exclusive gifts & products, early access to new collections...</h1>
        <p className="text-sm px-10 text-gray-600">Don't miss out on your loyalty points & join Le Club Lacoste today!</p>
        <button className="bg-darkGray text-lightGray border mt-3 border-transparent hover:border-gray-300 duration-300 hover:bg-white hover:text-darkGray w-fit self-center px-5 py-2 rounded-full">
          Sign in Sign up
        </button>
      </div>
    </div>
  )
}

export default AuthCheck