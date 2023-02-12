import { useState, useContext, useEffect } from "react";
import {TaskContext} from '../context/TaskContext'


function TaskForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, description)
        createTask({title,description})
        setTitle('')
        setDescription('')
    }

  return (
    <form className=" bg-slate-800 text-slate-300 p-5 mb-4" onSubmit={handleSubmit}>
      <input
      className="bg-slate-500 border-0 w-1/5 py-3 px-1"
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
      />
      <input  placeholder="Escribe tu tarea"
      className="border-x-4 border-slate-800 bg-slate-500 py-3 px-1 border-0 w-3/5"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}></input>
      <button
      className="bg-blue-900 text-slate-300 py-3 px-1 w-1/5">Guardar</button>
    </form>
  );
}

export default TaskForm;
