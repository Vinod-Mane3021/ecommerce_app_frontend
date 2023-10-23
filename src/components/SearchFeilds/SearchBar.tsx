import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="w-full h-10 px-5 border border-none bg-gray-200 rounded-full flex flex-row items-center justify-center gap-2">
      <CiSearch size={20} color="#27374D" />
      <input
        className="h-full w-full bg-gray-200 appearance-none outline-none focus:outline-none active:outline-none"
        type="text"
        placeholder="Find a product"
      />
    </div>
  );
};

export default SearchBar;
