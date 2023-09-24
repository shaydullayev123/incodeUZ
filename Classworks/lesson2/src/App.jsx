/* eslint-disable react/jsx-key */
import { useState } from "react";
import Card from "./components/Card";
import { message } from "antd";

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [selectVal, setSelectVal] = useState("high");
  const [list, setList] = useState([]);

  const checkItem = (aydi) => {
    let newList = list.map((item) => {
      return item.id === aydi ? { ...item, isDone: !item.isDone } : item;
    });
    setList(newList);
  };
  console.log(list);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex items-center flex-col gap-[10px] shadow-xl w-[500px] rounded-lg p-[20px] bg-orange-400">
        <h1 className="font-semibold text-center text-[25px] mb-[20px]">
          Todo List
        </h1>
        <div className="flex gap-3 mb-5">
          <input
            value={inputVal}
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
              if (inputVal.length > 0 && selectVal) {
                setList([
                  ...list,
                  {
                    id: Date.now(),
                    title: inputVal,
                    priority: selectVal,
                    isDone: false,
                  },
                ]);
                message.success("Todo qo'shildi!");
                setInputVal("");
              } else message.warning("Inputlarni To'ldiring!");
            }}
            className="px-3 py-2 text-white bg-indigo-500 rounded-lg"
          >
            Add
          </button>
        </div>
        {list.map((item) => (
          <Card
            id={item.id}
            title={item.title}
            pri={item.priority}
            isDone={item.isDone}
            checkItem={checkItem}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
