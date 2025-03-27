import React from "react";
import Trending from "../../Trending";
import { MdMoreHoriz } from "react-icons/md";
const Whats = () => {
  return (
  

    <div className="border  border-[#2f3336] card flex flex-col overflow-x-auto rounded-lg relative">
      <h1 className="text-2xl font-bold p-3">What's Happening</h1>
      <div className="cursor-pointer twitter-hover2 transition-all duration-200">
        <div className=" flex gap-5 py-4 px-3 ">
          <img
            src="https://pbs.twimg.com/semantic_core_img/1875997496851263488/BLI4C75l?format=jpg&name=240x240"
            alt=""
            className="w-20 h-20 rounded-lg object-cover"
            />
          <div className="flex flex-col">
            <h1 className="font-bold">Khloé in Wonder Land</h1>
            <p className="text-gray-500">LIVE</p>
          </div>
        </div>
      </div>
      {Trending.map((card) => {
        return (
          <div className="px-3 twitter-hover cursor-pointer transition-all duration-200 py-2 relative">
            <p className="text-gray-500 text-sm">{card.heading}</p>
            <h1 className="font-bold">{card.hashtag}</h1>
            <p className="text-gray-500 text-sm">{card.posts} posts</p>
            <button className="text-xl absolute right-4 top-8 hover:bg-slate-500 rounded-full p-2 transition-all duration-200    text-white cursor-pointer">
                
            <MdMoreHoriz className="" />
            </button>
          </div>
        );
      })}
      <div className="text-blue-400 p-3 cursor-pointer twitter-hover rounded-b-lg">Show More</div>
    </div>
     
  );
};

export default Whats;
