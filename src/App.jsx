
import './App.scss'
import TaskList from './components/TaskList';
import React, { useState,useEffect } from 'react';
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import TaskListContextProvider from './Context/TaskListContext';
import Task from './components/Task';


function App() {

  
  return (
 <TaskListContextProvider>
   <div className="container">
   <div className="app-wrapper">

    <Header />
    <div className="main">
      <TaskForm />
   
      <TaskList />
    </div>
   </div>



   </div>
</TaskListContextProvider>

  );
}

  

 

export default App
