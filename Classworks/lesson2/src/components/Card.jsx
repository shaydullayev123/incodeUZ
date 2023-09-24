/* eslint-disable react/prop-types */
const Card = ({ id, title, pri, checkItem, isDone }) => {
  const style = () => {
    if (pri === "low") return "green";
    else if (pri === "normal") return "yellow";
    else if (pri === "high") return "red";
  };

  return (
    <div
      style={{ backgroundColor: style(), filter: isDone && "grayscale(100%)" }}
      className="flex items-center justify-between w-full p-3 rounded-lg shadow-lg bg-slate-200"
    >
      <p
        style={{ textDecoration: isDone && "line-through" }}
        className="text-[18px]"
      >
        {title}
      </p>
      <input type="checkbox" onChange={() => checkItem(id)} />
    </div>
  );
};

export default Card;

// if (pri == "low") {
//   return (
//     <div className="flex items-center justify-between w-full p-3 rounded-lg shadow-lg bg-lime-600">
//       <p className="text-[18px]">{title}</p>
//       <input type="checkbox" onChange={() => checkItem(id)} />
//     </div>
//   );
// } else if (pri == "normal") {
//   return (
//     <div className="flex items-center justify-between w-full p-3 rounded-lg shadow-lg bg-amber-400">
//       <p className="text-[18px] ">{title}</p>
//       <input type="checkbox" onChange={() => checkItem(id)} />
//     </div>
//   );
// } else {
//   return (
//     <div className="flex items-center justify-between w-full p-3 bg-red-500 rounded-lg shadow-lg">
//       <p className="text-[18px]">{title}</p>
//       <input type="checkbox" onChange={() => checkItem(id)} />
//     </div>
//   );
// }
