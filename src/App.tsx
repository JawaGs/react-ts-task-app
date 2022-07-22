import { Container } from '@mui/material';
import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './interfaces/Task';
import  logo  from "./logo.svg"
import { v4 } from "uuid"

interface Props {
  title?: string
}


export function App( { title }:Props ) {
  const [tasks, setTasks] = useState([
    {
      id:"",
      title: "",
      description: "",
      completed:false
    },

  ])

  const addNewTask = ( task:Task ) => setTasks( [ ...tasks, { ...task, completed:false, id:v4() } ] )

  const deleteTask = ( id: string ) => setTasks( tasks.filter( task => task.id !== id ) )

  
  return (
    <div className="taskApp__container">
      <nav className='taskApp__navbar'>
          <img src={ logo } alt="react logo" className='taskApp__navbar--logo' />
          <h1 className='taskApp__header--title'>
            { title }
          </h1>
      </nav>
      <Container className='taskApp__container--body'>
          <div>
            <TaskForm addNewTask={ addNewTask } />
          </div>
          <TaskList tasks={ tasks } deleteTask={ deleteTask }/>
      </Container>

    </div>
  );
}
