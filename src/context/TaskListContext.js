import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { name: "Read the book", id: 1 },
    { name: "Wash the book", id: 2 },
    { name: "Write the book", id: 3 },
  ]);

  return (
    <TaskListContext.Provider value={{ tasks }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
