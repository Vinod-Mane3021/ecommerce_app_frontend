import React from "react";

const PasswordInputText = () => {
  return (
    <div className="w-[75%] flex justify-center flex-col gap-2">
      <p className="text-gray-700 font-semibold">Password</p>
      <input
        className="w-[100%] h-11 px-5 rounded-xl shadow-md focus:outline-purple-700"
        type="text"
        placeholder="Enter your password"
      />
    </div>
  );
};

export default PasswordInputText;
