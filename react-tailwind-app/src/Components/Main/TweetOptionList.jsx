import React from "react";
import { GoFileMedia } from "react-icons/go";
import { MdOutlineGifBox } from "react-icons/md";
import { FaPollH } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { RiCalendarLine } from "react-icons/ri";

import { MdLocationPin } from "react-icons/md";

const TweetOptionList = () => {
  return (
    <div className="">
      <div className="p-1">
        <ul className="text-blue-400 flex gap-1 ">
          <li className = "text-md cursor-pointer hover:bg-gray-900 p-2 rounded-full transition-all duration-200">
            <GoFileMedia />
          </li>
          <li className = "text-md cursor-pointer hover:bg-gray-900 p-2 rounded-full transition-all duration-200">
            <MdOutlineGifBox />
          </li>
          <li className = "text-md cursor-pointer hover:bg-gray-900 p-2 rounded-full transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              fillRule="evenodd"
              height="1em"
              style={{ flex: "none", lineHeight: "1" }}
              viewBox="0 0 24 24"
              width="1em"
            >
              <title>Grok</title>
              <path d="M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815" />
            </svg>
          </li>
          <li className = "text-md md:block hidden cursor-pointer hover:bg-gray-900 p-2 rounded-full transition-all duration-200">
            <FaPollH  />
          </li>
          <li className = "text-md cursor-pointer hover:bg-gray-900 p-2 rounded-full transition-all duration-200">
            <BsEmojiSmile />
          </li>
          <li className = "text-md cursor-pointer md:block hidden hover:bg-gray-900 p-2 rounded-full transition-all duration-200">
            <RiCalendarLine />
          </li>
          <li className = "text-md cursor-pointer hover:bg-gray-900 p-2 rounded-full transition-all duration-200">
            <MdLocationPin />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TweetOptionList;
