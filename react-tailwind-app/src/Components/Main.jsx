import React from "react";
import TopHead from "./Main/TopHead";
import Post from "./Main/Post";
import InputCard from "./Main/InputCard";
import PostsData from "./Main/PostsData";
const Main = () => {
  return (
    <div className="border border-y-0 border-[#2f3336]   ">
     <TopHead />
    <InputCard />

    {PostsData.map((post)=>{ 
      return (
      <Post key={post.userName} profileName={post.profileName} userName={post.userName} date = {post.date} imgUrl={post.imgUrl} commentValue={post.commentValue} likeValue={post.likeValue} repostValue={post.repostValue} pollsValue={post.pollsValue}  />)
    })}
    </div>
  
  );
};

export default Main;
