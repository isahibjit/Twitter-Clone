import React from 'react'

const SubscribeCard = () => {
  return (
    <div className="card flex flex-col   items-start  border border-[#2f3336] px-3 pb-3 rounded-2xl ">
    <h1 className="lg:text-lg font-bold leading-12">Subscribe to Premium</h1>
    <p className="lg:leading-5 lg:text-sm">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
    <button className="w-fit mt-2 font-bold bg-blue-400 rounded-full py-2 px-6 hover:bg-blue-500 transition-all duration-200 cursor-pointer">Subscribe</button>
  </div>
  )
}

export default SubscribeCard