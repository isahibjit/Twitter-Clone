import React from 'react'
import { FaEarthAmericas } from "react-icons/fa6";
import TweetOptionList from './TweetOptionList';
import SubmitTweet from './SubmitTweet';
const PublicPrivate = () => {
  return (
    <div className=''>

      <div className="flex items-center  gap-1 text-blue-400 text-sm   hover:bg-gray-900 w-fit  cursor-pointer px-2 py-0.5 rounded-full ">
            <FaEarthAmericas  />
              <span className="text-md  ">Everyone can reply</span>
              </div>
             

    </div>
  )
}

export default PublicPrivate