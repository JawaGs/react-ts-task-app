import { Card, CardActions,CardContent, Typography, Button } from "@mui/material"
import { Task } from "../interfaces/Task"


interface Props{
    task: Task,
    deleteTask: ( id:string ) => void
}

export default function TaskCard( { task, deleteTask }:Props ) {
    return (
        task.id !== ""?<div>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    { task.title }
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    { task.id }
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    { task.description }
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large" variant="contained" color="error" onClick={ () => deleteTask( task.id ) }>Delete</Button>
            </CardActions>
        </Card>
    </div>:<></>
    )
}


    