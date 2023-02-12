import {useContext} from 'react'

import {TaskContext} from "../context/TaskContext";


function TaskCard({task}) {
    const { deleteTask } = useContext(TaskContext)

  return (
      <div className='bg-slate-800 text-white p-5 rounded-md'>
        <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
        <p className='text-gray-500 text-sm'>{task.description}</p>
        <button className='bg-red-500 px-2 py-1 rounded-md mt-2 hover:bg-red-600' onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
      </div>
  );
}

export default TaskCard;
