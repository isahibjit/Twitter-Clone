import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import { MdGroup } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { MdOutlineElectricBolt } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { MdMoreHoriz } from "react-icons/md";
import List from "./Navbar/List";
import GrokIcon from "./Navbar/GrokIcon";
import PostButton from "./Navbar/PostButton";
import UserProfile from "./Navbar/UserProfile";

const Navbar = () => {
  return (
    <div className=" w-12 mx-4 lg:w-1/3 border-[#2f3336]  ">
      <div className="flex flex-col  lg:items-end   sticky top-0">
        <ul className="text-xl font-bold flex flex-col gap-1  ">
          <li className="list-item twitter-hover ">
            <RiTwitterXFill className=" text-3xl" />
          </li>
          <List icon={IoMdHome} value="Home" />
          <List icon={CiSearch} value="Explore" />
          <List icon={IoIosNotifications} value="Notifications" />
          <List icon={IoMdMail} value="Messages" />
          <GrokIcon />

          <List icon={IoBookmarkOutline} value="Bookmark" />
          <List icon={BsBriefcase} value="Jobs" />
          <List icon={MdGroup} value="Community" />
          <List icon={MdOutlineVerified} value="Premium" />
          <List icon={MdOutlineElectricBolt} value="Verified Orgs" />
          <List icon={BsFillPersonFill} value="Profile" />
          <List icon={CiCircleMore} value="More" />
          <PostButton />
          <UserProfile />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
