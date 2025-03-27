import React from "react";
const List = ({icon : Icon, value}) => {

  return (
    <li className="list-item twitter-hover w-fit ">
      <div className="list-icon ">
        {Icon && <Icon className="text-3xl " />}
        <p className="hidden lg:block">{value}</p>
      </div>
    </li>
  );
};

export default List;
