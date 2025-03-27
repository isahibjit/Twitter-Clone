import React from 'react'
import { MdMoreHoriz } from 'react-icons/md'
const UserProfile = () => {
  return (
    <div className="flex justify-between  mt-4 hidden md:flex twitter-hover transition-all duration-200 cursor-pointer rounded-full py-2 px-4 lg:px-2 w-64">
    <div className="flex items-center justify-center gap-3">
      <img
        className="w-10 h-10 rounded-full"
        src="https://pbs.twimg.com/profile_images/1831327452888449024/h9Q7y6Es_400x400.jpg"
        alt="profile-picture"
      />
      <div className="leading-5">
        <h1 className="text-lg leading-5">Sahibjit Singh</h1>
        <span className="text-gray-700 text-base">@isahibjit</span>
      </div>
    </div>
    <button className="cursor-pointer">
      <MdMoreHoriz />
    </button>
  </div>
  )
}

export default UserProfile