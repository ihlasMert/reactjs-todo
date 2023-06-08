import React, { useState } from "react";

function ListInput() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const onAddTask = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      const capitalizedTodo = capitalLetter(value);
      setTasks([...tasks, capitalizedTodo]);
      setValue("");
    }
  };
  const capitalLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const deleteButton = (id) => {
    const updatedStatus = tasks.filter((todo) => todo.id !== id);
    setTasks(updatedStatus);
  };

  return (
    <div className="form">
      <header>Your todo list</header>
      <input
        placeholder="type your task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={onAddTask}>Submit task</button>
      {tasks.map((teori) => (
        <li key={teori.id}>
          {teori}
          <button onClick={() => deleteButton(teori.id)}>Delete</button>
          <button>Completed</button>
        </li>
      ))}
    </div>
  );
}

export default ListInput;
