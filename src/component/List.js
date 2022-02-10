import { useList } from "../context/ListContext";
import randomColor from "randomcolor";

import { getContrastYIQ } from "../helpers";
function List() {
  const { list, setList, inItem, setItem } = useList();

  const setTodo = () => {
    if (inItem === "") {
    } else {
      setList([
        ...list,
        {
          id: Date.now(),
          title: inItem,
          procces: false,
          color: randomColor(),
          date: { currentTime: new Date().toLocaleString() },
        },
      ]);
    }
  };

  const handleClear = () => {
    {
      setList(list.filter((item) => !item.procces));
    }
  };

  return (
    <div className="container">
      <div className="todoInput">
        <input
          className="enterTodo"
          placeholder="enter todo"
          value={inItem}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={setTodo}>Add</button>
      </div>
      <div className="list">
        {list.map((item, i) => (
          <div
            id="listItem"
            onClick={() =>
              setList(
                list.map((el) =>
                  el.id === item.id ? { ...el, procces: !el.procces } : el
                )
              )
            }
            className={item.procces ? "done" : ""}
            style={{ background: item.color }}
            key={i}
          >
            <span className="date">created date: {item.date.currentTime}</span>
            <span className="listText">
              {item.title}
              {console.log(item.color)}
            </span>
          </div>
        ))}
      </div>
      {list.length > 0 ? (
        <button className="clear" onClick={handleClear}>
          Clear
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default List;
