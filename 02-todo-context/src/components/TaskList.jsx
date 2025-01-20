import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {

    const { tasks, deleteTask, editTask, toogleTaskcompletion } = useContext(TaskContext);
    
  return (
    <>  
    <div className="p-4 bg-gray-200 shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Lista de tareas</h2>
        <ul> 
            { tasks.map((task) => (
                <li key={task.id} className="flex justify-between items-center p-2 mb-2 border border-gray-300 rounded-lg shadow-md">
                    <span className={`flex-1 ${task.completed ? "line-through" : ""}`}>{task.name}</span>
                    <button>editar</button>
                    <button>Eliminar</button>
                </li>
            ))}
        </ul>  


    </div>


    
    </>
  )
}

export default TaskList