import React from "react";
import Task from "../../components/Task/Task";
import "./MainPage.css";
import Menu from "../../components/Menu/Menu";

export default function MainPage() {
  return (
    <>
      <main className="td_page_container">
        <div className="td_menu_container">
          <Menu />
        </div>
        <div className="td_tasks_grid">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </main>
    </>
  );
}
