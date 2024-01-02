import React, { useState } from "react";
import "./Menu.css";

export default function Menu() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  return (
    <>
      <div className="td_menu_grid">
        <div className="td_menu_input_container">
          <input
            type="text"
            value={task}
            placeholder="Task title"
            onChange={(e) => setTask(e.target.value)}
            className="td_menu_input_title"
          />
          <input
            type="text"
            value={task}
            placeholder="Task description"
            onChange={(e) => setTask(e.target.value)}
            className="td_menu_input_description"
          />
        </div>

        <button onClick={handleAddTask} className="td_menu_add_button">
          Add
        </button>
        {/* Task list */}
      </div>
    </>
  );
}
