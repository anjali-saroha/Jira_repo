import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {Button} from '../index'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const TaskDetail =() => {
    const { id } = useParams();
    const [task, setTask] = useState(null);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const foundTask = storedTasks.find(t => t.id == id);
        setTask(foundTask);
    }, [id]);

    if (!task) return <p>Task not found.</p>;

    return (
        <Grid container justifyContent='center' spacing={4}>
            <Grid container xs={8} spacing={4}>
            <Grid item xs={8}>
             <Typography variant="h4" >
             {task.name} 
             </Typography>
             </Grid>
             <Grid item xs={4} className='edit'>
                <Link to={`/edit/${task.id}`}>
                    <Button title='Edit'></Button>
                </Link>
             </Grid>
            </Grid>
            <Grid item xs={8}>
             <Typography variant="h6" >
             DeadLine: {task.deadline}
             </Typography>
            </Grid>
            <Grid item xs={8}>
             <Typography variant="h6" >
             Description: {task.description}
             </Typography>
            </Grid>
            <Grid item xs={8}>
             <Typography variant="h6" >
             Summary: {task.summary}
             </Typography>
            </Grid>
        </Grid>
    );
}

export default TaskDetail;
