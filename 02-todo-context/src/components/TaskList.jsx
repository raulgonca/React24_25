import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, removeTask, editTask, toggleTaskCompletion } = useContext(TaskContext);

  return (
    <>
      <div className="p-4 bg-white-200 shadow-md rounded-lg mt-4">
        <h2 className="text-xl font-bold mb-4">Lista de tareas</h2>
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-2 mb-2 border border-gray-300 rounded-lg shadow-md"
            >
              <span
                className={`flex-1 mx-4 font-bold ${
                  task.completed ? "line-through text-gray-600" : ""
                }`}
              >
                {task.name}
              </span>
              <button
                className="px-3 py-1 bg-blue-700 text-white rounded mr-2 hover:bg-slate-800"
                onClick={() => toggleTaskCompletion(task.id)}
              >
                Completar
              </button>
              <button
                className="px-3 py-1 bg-red-600 text-white rounded mr-2 hover:bg-slate-800"
                onClick={() => removeTask(task.id)}
              >
                Borrar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
