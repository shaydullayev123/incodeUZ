/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ title, pri }) => {
  return (
    <div className="flex items-center justify-between w-full p-3 bg-white rounded-lg shadow-lg">
      <p className="text-[18px]">{title}</p>
      <p className="text-[15px] text-gray-600">{pri}</p>
    </div>
  );
};

export default Card;
