

import { useEffect, useState, useContext } from "react";
import TaskCard from "./TaskCard";

import { TaskContext } from "../context/TaskContext";

function TaskList() {

  const { tasks } = useContext(TaskContext)

  if(tasks.length === 0) {
    return <h1 className="bg-gray-800 py-5 text-center font-bold text-xl text-slate-400">Aun no hay tareas :D</h1>
  }
  return (
    <div className="grid grid-cols-3 gap-1 ">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
