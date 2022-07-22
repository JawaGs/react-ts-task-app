import { Container } from '@mui/material';
import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import { Task } from './interfaces/Task';
import  logo  from "./logo.svg"

interface Props {
  title?: string
}



export function App( { title }:Props ) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id:1,
      title: "aprender r",
      description: "desca",
      completed:false
    }
  ])
  
  return (
    <div className="taskApp__container">
      <nav className='taskApp__navbar'>
          <img src={ logo } alt="react logo" className='taskApp__navbar--logo' />
          <h1 className='taskApp__header--title'>
            { title }
          </h1>
      </nav>
      <Container>
          <TaskList tasks={ tasks } />
      </Container>

    </div>
  );
}
