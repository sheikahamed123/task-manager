import React,{createContext,useState,useEffect} from 'react'
import {v4} from "uuid";

export const TaskListContext=createContext();
const TaskListContextProvider = (props) => {

  const initialState=JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks,setTasks]=useState(initialState);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  const [editItem,setEditItem]=useState(null);

  const addTask=(title)=>{
        setTasks([...tasks,{title:title,id:v4()}])
  }
  const removeTask = (id) => {
    // Use the filter function to create a new array without the task with the specified id
    const updatedTasks = tasks.filter((task) => task.id !== id);
  
    // Update the state with the new array
    setTasks(updatedTasks);
  };
  
  const clearList=()=>{
    setTasks([])
  }
  const findItem=(id)=>{
    const item=tasks.find((task)=> task.id===id);
    setEditItem(item);
  }
  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: title } : task
    );
    setTasks(newTasks);
    setEditItem(null);
  };
  
  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
      }}
      >
        {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider
