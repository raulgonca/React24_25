import { createContext, useEffect, useState } from "react";

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

  const [tasks, setTasks] = useState(() => {
    const savedTask = localStorage.getItem("tasks");
    return savedTask ? JSON.parse(savedTask) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  //funciones
  //acciones sobre una tarea
  // - crear
  // - borrar
  // - editar
  // - completar
  // no olvidar que en este caso estara guardado en el LocalStorage

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
    // localStorage.setItem("tasks", JSON.stringify(task));
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    // localStorage.setItem("tasks", JSON.stringify(task));
  };

  const editTask = (taskId, task) => {};


  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        tasks.id === taskId ? { ...task, completed: !task.completed } : tasks
      )
    );
  };

  return (
    <TaskContext.Provider value={{tasks, addTask, removeTask, editTask, toggleTaskCompletion}}>
        {children}
    </TaskContext.Provider>
  );
};
