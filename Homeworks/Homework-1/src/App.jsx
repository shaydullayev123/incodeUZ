import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [selectVal, setSelectVal] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex items-center flex-col gap-[10px] shadow-xl w-[500px] rounded-lg p-[20px] bg-orange-400">
        <h1 className="font-semibold text-center text-[25px] mb-[20px]">
          Todo List
        </h1>
        <div className="flex gap-3 mb-5">
          <input
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
            className="px-3 py-2 rounded-lg"
            type="text"
            placeholder="Title"
          />
          <select
            onChange={(e) => {
              setSelectVal(e.target.value);
            }}
            className="px-3 py-2 rounded-lg"
            name=""
            id=""
          >
            <option value="high">High</option>
            <option value="normal">Normal</option>
            <option value="low">Low</option>
          </select>
          <button
            onClick={() => {
              setList([...list, { title: inputVal, priority: selectVal }]);
            }}
            className="px-3 py-2 text-white bg-indigo-500 rounded-lg"
          >
            Add
          </button>
        </div>
        {list.map((item) => (
          <Card title={item.title} pri={item.priority} />
        ))}
      </div>
    </div>
  );
};

export default App;
