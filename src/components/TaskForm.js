import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(
    TaskListContext
  );

  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem === null) {
      addTask(name);
      setName("");
    } else {
      editTask(name, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem !== null) {
      setName(editItem.name);
    } else {
      setName("");
    }
  }, [editItem]);
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        value={name}
        type="text"
        className="task-input"
        placeholder="Add new task"
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? "EditTask" : "Add Task"}
        </button>
        <button onClick={clearList} className="btn clear-btn">
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
