import React from "react";
import "./MainPage.css";
import Menu from "../../components/Menu/Menu";
import TaskComponent from "../../components/TaskComponent/TaskComponent";
import { Task } from "../../interface/Task";

export default function MainPage() {
  const [taskList, setTaskList] = React.useState<Task[]>(() => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  });

  
  React.useEffect(() => {
    // Supongamos que `taskList` es tu lista de tareas
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]); // Ejecuta este efecto cada vez que `taskList` cambia
  


  const addTask = (newTask: Task) => {
    newTask.id = taskList.length;
    setTaskList([...taskList, newTask]);
  };

  const deleteTask = (id: number) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  }

  return (
    <>
      <main className="td_page_container">
        <div className="td_menu_container">
          <Menu addTask={addTask} taskIndex={taskList.length} />
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
                deleteTask={deleteTask}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
