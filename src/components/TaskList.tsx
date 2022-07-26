import { Task } from "../interfaces/Task"
import TaskCard from "./TaskCard"

interface Props{
    tasks: Task[],
    deleteTask: ( id:string ) => void
}

export default function TaskList({ tasks, deleteTask }:Props) {
    return (
        <div className="taskList__container" >
            { tasks.map( task =>(
                <div className="tarjeta_prueba">
                    <TaskCard task={ task } deleteTask={ deleteTask } key={ task.id } />
                </div>
            ) ) }
        </div>
    )
}
