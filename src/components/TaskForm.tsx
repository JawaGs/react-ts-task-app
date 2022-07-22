import { Card, Typography, CardContent, CardActions, Button } from "@mui/material"
import { ChangeEvent, FormEvent, useState } from "react"
import { Task } from "../interfaces/Task"

interface Props{
    addNewTask: ( task:Task )=>void
}

const initialState = {
    title: "",
    description: "",
    id:""
}

type HandleInputChange = ChangeEvent<HTMLInputElement|HTMLTextAreaElement>

export default function TaskForm({ addNewTask }:Props) {
    const [task, setTask] = useState(initialState)
    const handleInputChange = ({ 
        target: { name, value },
        }: HandleInputChange ) =>{
        setTask( { ...task, [ name ]: value } )
    }

    const handleNewTask = ( e:React.MouseEvent<HTMLButtonElement> )=>{
        e.preventDefault();
        addNewTask( task )
        setTask(initialState)
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                    Add Task
                </Typography>
                <div 
                    className="taskForm__body--inputsContainer"
                    
                >
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Write a title"
                        onChange={ handleInputChange }
                        value={ task.title }
                    />
                    <textarea 
                        name="description" 
                        id="task_description" 
                        cols={30} 
                        rows={10} 
                        placeholder="Add a description"
                        onChange={ handleInputChange }
                        value={ task.description }
                    >
                    </textarea>
                </div>
            </CardContent>
            <CardActions>
                <Button size="large" variant="contained" color="primary" onClick={ handleNewTask }>Save</Button>
            </CardActions>
        </Card>
    )
}
