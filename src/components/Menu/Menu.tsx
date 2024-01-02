import "./Menu.css";
import { Task } from "../../interface/Task";
import React from "react";

interface MenuProps {
  addTask: (newTask: Task) => void;
}

export default function Menu(props: MenuProps) {

  const [task, setTask] = React.useState<Task>({
    id: 0,
    title: "",
    description: "",
    date: new Date(),
    done: false,
  });

  const handleAddTask = () => {
    props.addTask(task);
    setTask({
      id: 0,
      title: "",
      description: "",
      date: new Date(),
      done: false,
    });
  };

  return (
    <>
      <div className="td_menu_grid">
        <div className="td_menu_input_container">
          <input
            type="text"
            value={task.title}
            placeholder="Task title"
            onChange= {(e) => setTask({...task, title: e.target.value})}
            className="td_menu_input_title"
          />
          <input
            type="text"
            value={task.description}
            placeholder="Task description"
            onChange= {(e) => setTask({...task, description: e.target.value})}
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
