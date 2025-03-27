import React,{useEffect,useRef} from "react";

import SubscribeCard from "./Sidebar/SubscribeCard";
import Search from "./Sidebar/Search";
import Whats from "./Sidebar/Whats";
const Sidebar = ({height}) => {

console.log("This is height",height)

  return (
    <div  className=" lg:w-[50%]  w-12 mx-auto lg:visible invisible lg:block   text-white">
      <div style={{height:`${height}px`}} className=" w-1/2 flex   flex-col items-start   mx-8 justify-start mt-2 gap-4 ">
        <div className="w-full sticky top-0 z-18 bg-black">
          <Search />
        </div>
        <div className="static">
          <SubscribeCard />
        </div>
        <div className="w-full sticky top-8 z-10">
          <Whats />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
