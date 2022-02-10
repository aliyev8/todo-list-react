import { createContext, useContext, useEffect, useState } from "react";
import randomColor from "randomcolor";
const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("todo")) || [
      {
        id: 1,
        title: "react",
        procces: false,
        color: randomColor(),
        date: { currentTime: new Date().toLocaleString() },
      },
      {
        id: 2,
        title: "TScript",
        procces: true,
        color: randomColor(),
        date: { currentTime: new Date().toLocaleString() },
      },
    ]
  );

  const [inItem, setItem] = useState("");

  const values = {
    list,
    setList,
    inItem,
    setItem,
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(list));
  }, [list]);

  return <ListContext.Provider value={values}>{children}</ListContext.Provider>;
};

export const useList = () => useContext(ListContext);
