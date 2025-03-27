import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { MdIosShare } from "react-icons/md";
import ReactionContent from "./ReactionContent";

const Post = ({profileName, userName, date,title, imgUrl, commentValue, repostValue, likeValue, pollsValue}) => {
  return (
    <div className="border   border-[#2f3336] border-x-0 border-b-0 twitter-hover transition-all duration-200 cursor-pointer">
      <div className="flex p-3 gap-2">
        <div>
          <img
            className="w-12 rounded-full"
            src="https://pbs.twimg.com/profile_images/1831327452888449024/h9Q7y6Es_400x400.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col   justify-center ">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <p className="font-bold">{profileName}</p>
              <p className="text-gray-500">{userName}</p>
              <p className="text-gray-500">.{date}</p>
            </div>
            <div className="rounded-full hover:bg-gray-700 p-1">
              <MdMoreHoriz className="text-2xl " />
            </div>
          </div>
          <div>
            <h1>{title}</h1>
          </div>
          <div className="py-3">
            <div>
              <img
                src={imgUrl}
                alt=""
                className="rounded-xl"
              />
            </div>
            <div className="pt-2">
              <ul className="flex justify-between text-gray-600">
                <ReactionContent
                  icon={BiMessageRounded}
                  type="comment"
                  value={commentValue}
                />
                <ReactionContent icon={BiRepost} type="repost" value={repostValue} />
                <ReactionContent icon={CiHeart} type="heart" value={likeValue} />
                <ReactionContent icon={CiViewBoard} type="polls" value={pollsValue} />
                <li className="text-xl">
                  <ul className="flex gap-2 ">
                    <ReactionContent
                      icon={CiBookmark}
                      type={"comment"}
                      value={null}
                    />
                    <ReactionContent
                      icon={MdIosShare}
                      type="comment"
                      value={null}
                    />
                  </ul>
                </li>
              </ul>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Post;
