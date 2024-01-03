import React from "react";
import "./MainPage.css";
import Menu from "../../components/Menu/Menu";
import TaskComponent from "../../components/TaskComponent/TaskComponent";
import { Task } from "../../interface/Task";

export default function MainPage() {
  const [taskList, setTaskList] = React.useState<Task[]>([]);

  React.useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      setTaskList(JSON.parse(tasks));
    }
  }, []);

  const addTask = (newTask: Task) => {
    setTaskList([...taskList, newTask]);
  };

  return (
    <>
      <main className="td_page_container">
        <div className="td_menu_container">
          <Menu addTask={addTask} />
        </div>

        <div className="td_tasks_grid">
          {taskList.length === 0 && (
            <div className="td_no_tasks">
              <h1>No tasks yet</h1>
              <p>Use upper menu to add a task!!!</p>
              <p>🗒️​✏️​🤓​📚​🧑🏻‍🏫​👩🏻‍🏫​</p>
            </div>
          )}
          {taskList.map((task: Task) => {
            return (
              <TaskComponent
                id={task.id}
                title={task.title}
                description={task.description}
                date={task.date}
                done={task.done}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
