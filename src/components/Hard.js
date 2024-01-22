import React, { useState } from "react";

export default function Hard() {
  const [addTask, setAddTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");

  const addTaskItem = () => {
    if (addTask.trim() !== "") {
      const newTask = {
        id: Math.floor(Math.random() * 10000),
        value: addTask,
      };
      setTaskList([...taskList, newTask]);
      setAddTask("");
    }
  };

  const deleteTask = (id) => {
    const updatedList = taskList.filter((item) => item.id !== id);
    setTaskList(updatedList);
  };

  const editItem = (id, newText) => {
    const updatedList = taskList.map((item) => {
      if (item.id === id) {
        return { ...item, value: newText };
      }
      return item;
    });
    setTaskList(updatedList);
    setUpdatedText("");
    setShowEdit(-1);
  };

  return (
    <div>
      <h1>Todo List App</h1>

      <input
        type="text"
        placeholder="ADD LIST"
        value={addTask}
        onChange={(e) => setAddTask(e.target.value)}
      />
      <button onClick={addTaskItem}>ADD</button>

      <ul className="Task-List">
        {taskList.map((item) => (
          <div key={item.id}>
            <li>
              {item.value}
              <button onClick={() => deleteTask(item.id)}>X</button>
              {showEdit === item.id ? (
                <div>
                  <input
                    type="text"
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                  <button onClick={() => editItem(item.id, updatedText)}>
                    Update
                  </button>
                </div>
              ) : (
                <button onClick={() => setShowEdit(item.id)}>Edit</button>
              )}
            </li>
          </div>
        ))}
      </ul>
      <style jsx>
        {`
          .App ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}
