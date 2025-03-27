import React, { useState } from 'react'
import PublicPrivate from './PublicPrivate'
import TweetOptionList from './TweetOptionList'
import SubmitTweet from './SubmitTweet'
const InputCard = () => {
  const [isClicked,setIsClicked] = useState(false) 
  function handleClick(){
   console.log("I got Clicked Lol") 
   setIsClicked(true)
  }
  return (
    <div className=" flex gap-4   mt-3 px-2">
    <img src="https://pbs.twimg.com/profile_images/1831327452888449024/h9Q7y6Es_400x400.jpg" alt="profile-img" className="w-12 h-12 rounded-full" />
    <div className="flex flex-col  gap-2 w-full  py-1 ">
      <div>
      <input  onFocus={handleClick} type="text" name="" id="" placeholder="What's Happening?" className=" text-lg outline-none w-full" />
      </div>
       {isClicked && <PublicPrivate /> } 
       <div className={`flex ${isClicked && "border border-[#2f3336] border-x-0 border-b-0"}  items-center break-words  justify-between my-2  `}>
              <TweetOptionList />
                <SubmitTweet />
              </div>
    </div>
  </div>
  )
}

export default InputCard