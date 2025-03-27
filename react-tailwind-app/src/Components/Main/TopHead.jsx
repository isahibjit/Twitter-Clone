import React from 'react'

const TopHead = () => {
  return (
    <div className="flex justify-around items-center border opacity-80 backdrop-blur-2xl sticky top-0 border-[#2f3336] border-x-0 border-t-0 ">
    <div className="cursor-pointer w-1/2">
        <div className=" absolute bottom-0 left-[20%] w-16 rounded-lg h-1 bg-blue-500 z-20"></div>
      <div >
        <h1 className="text-center twitter-hover p-4 transition-all duration-200">
          For You
        </h1>
      </div>
    </div>
    <div className="cursor-pointer w-1/2 ">
      <h1 className="text-center twitter-hover p-4 transition-all duration-200">
        Following
      </h1>
    </div>
  </div>
  )
}

export default TopHead