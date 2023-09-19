/* eslint-disable react/prop-types */
const Card = ({ title, pri }) => {
  if (pri == "low") {
    return (
      <div className="flex items-center justify-between w-full p-3 bg-lime-600 rounded-lg shadow-lg">
        <p className="text-[18px]">{title}</p>
        <p className="text-[15px] text-gray-600">{pri}</p>
      </div>
    );
  } else if (pri == "normal") {
    return (
      <div className="flex items-center justify-between w-full p-3 bg-amber-400 rounded-lg shadow-lg">
        <p className="text-[18px] ">{title}</p>
        <p className="text-[15px] text-gray-600">{pri}</p>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-between w-full p-3 bg-red-500 rounded-lg shadow-lg">
        <p className="text-[18px]">{title}</p>
        <p className="text-[15px] text-gray-600">{pri}</p>
      </div>
    );
  }
  //   return (
  //     <div className="flex items-center justify-between w-full p-3 bg-slate-200 rounded-lg shadow-lg">
  //       <p className="text-[18px]">{title}</p>
  //       <p className="text-[15px] text-gray-600">{pri}</p>
  //     </div>
  //   );
};

export default Card;
