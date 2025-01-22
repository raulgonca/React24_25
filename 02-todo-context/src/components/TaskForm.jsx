import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {

    const { addTask } = useContext(TaskContext);
    const [ taskName, setTaskName ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim()) {
            addTask({
                id : Date.now(), 
                name : taskName, 
                completed : false
            });
            setTaskName("");
        }
        
    }

  return (
    <>
    <form className="p-4 bg-white-200 shadow-md rounded-lg" onSubmit={handleSubmit}>
        <h2 className=" text-xl font-bold mb-4">Crear nueva tarea</h2>
        <input 
            type="text" 
            value={ taskName }
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Escribe aquí la tarea"
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ">Añadir tarea</button>
      
    </form>
    
    
    </>
  )
}

export default TaskForm