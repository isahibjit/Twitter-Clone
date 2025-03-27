import React from "react";
import styleVariants from "./styleVariants";

const ReactionContent = ({ icon: Icon, type, value }) => {
  console.log(Icon);
  const {bgColor,textColor} = styleVariants[type]
  return (
    <li
      className={`text-xl inline-flex  items-center group ${textColor}  transition-all duration-200  rounded-full `}
    >
      <div className={`${bgColor} rounded-2xl p-1.5 `}>
        {Icon && <Icon />}
      </div>
      <p className="text-sm">{value}</p>
    </li>
  );
};

export default ReactionContent;
