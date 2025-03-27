import React from 'react'
import { CiSearch } from "react-icons/ci";
const Search = () => {
  return (
    <div class="flex  items-center justify-start  border border-[#2f3336]  rounded-full  p-1 ">
          <CiSearch className="twitter-border-theme text-xl" />
          <input
            type="text"
            placeholder="Search..."
            class="ml-1 outline-none py-1.5   "
          />
        </div>
  )
}

export default Search