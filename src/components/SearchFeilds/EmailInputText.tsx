import React from "react";

const EmailInputText = () => {
  return (
    <div className="w-[75%] flex justify-center flex-col gap-2">
      <p className="text-gray-700 font-semibold">Email</p>
      <input
        className="w-[100%] h-11 px-5 rounded-xl shadow-md focus:outline-purple-700"
        type="text"
        placeholder="Enter your email"
      />
    </div>
  );
};

export default EmailInputText;
