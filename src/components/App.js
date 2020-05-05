import React from "react";
import TaskList from "./TaskList";
import TaskListContextProvider from "../context/TaskListContext";
import TaskFrom from "./TaskForm";
import Header from "./Header";
import "../App.css";

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <Header />
            <TaskFrom />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
