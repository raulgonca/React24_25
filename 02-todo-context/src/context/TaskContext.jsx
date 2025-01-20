import { createContext, useState } from "react";

/**
 *  Una tarea tipica ha de ser :
 *  - id
 *  - nombre
 *  - completado
 */

// creacion del contexto
export const TaskContext = createContext();

// crear el provider del contexto
export const TaskProvider = ({ children }) => {
  // hoks

  const [task, setTask] = useState(() => {
    const savedTask = localStorage.getItem("tasks");
    return savedTask ? JSON.parse(savedTasks) : [];
  });

  //funciones
  //acciones sobre una tarea
  // - crear
  // - borrar
  // - editar
  // - completar
  // no olvidar que en este caso estara guardado en el LocalStorage

  const addTask = (task) => {
    setTask((prevTasks) => [...prevTasks, task]);
  };

  const removeTask = (taskId) => {
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    // localStorage.setItem("tasks", JSON.stringify(task));
  };

  const editTask = (taskId, task) => {};


  const toogleTaskcompletion = (taskId) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{task, addTask, removeTask, editTask, toogleTaskcompletion}}>
        {children}
    </TaskContext.Provider>
  );
};
