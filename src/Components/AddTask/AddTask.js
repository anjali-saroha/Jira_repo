import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Button} from '../index'


const AddTask = () => {
    const { id } = useParams();
    const history = useNavigate();
    const isEdit = id ? true : false;

    const [task, setTask] = useState({
        id: null,
        name: '',
        description: '',
        summary:'',
        deadline: ''
    });

    useEffect(() => {
        if (isEdit) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const existingTask = storedTasks.find(t => t.id === parseInt(id));
            if (existingTask) setTask(existingTask);
        }
    }, [id, isEdit]);

    const [nameError,setNameError] = useState(false)
    const [descError,setDescError] = useState(false)
    const [deadLineError,setDeadLineError] = useState(false)

    const handleChange = e => {
        setNameError(false)
        setDescError(false)
        setDeadLineError(false)
        const { name, value } = e.target;
        setTask(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if(task.name === ''){
         setNameError(true)
         return
        }else if(task.description === ''){
         setDescError(true)
         return
        }else if(task.deadline === ''){
          setDeadLineError(true)
        }
        else{
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        if (isEdit) {
            const index = storedTasks.findIndex(t => t.id === parseInt(id));
            storedTasks[index] = task;
        } else {
            const lastId = parseInt(localStorage.getItem('lastId') || '0');
            task.id = lastId + 1;
            storedTasks.push(task);
            localStorage.setItem('lastId', task.id.toString());
        }

        localStorage.setItem('tasks', JSON.stringify(storedTasks));
        history('/');
    }
    };

 return(
     <>
    <Grid container justifyContent='center' spacing={4}>
       <Grid item xs={8}>
       <Typography variant="h5" >
         Add Task
      </Typography>
       </Grid>
        <Grid item md={8}>
            <TextField
                error={nameError}
                id="standard-error-helper-text"
                label="Name"
                helperText={nameError ? "Required":''}
                variant="outlined"
                name="name" 
                value={task.name} 
                onChange={handleChange}
            />
        </Grid>
        <Grid item xs={8}>
      <TextField
          error={descError}
          id="standard-error-helper-text"
          label="Desciption"
          helperText={descError ? "Required":''}
          variant="outlined"
          name="description" 
          value={task.description} 
          onChange={handleChange}
        />
        </Grid>
        <Grid item xs={8}>
      <TextField
          error={deadLineError}
          id="standard-error-helper-text"
          label="Deadline"
          helperText={deadLineError ? "Required":''}
          variant="outlined"
          name="deadline" 
          value={task.deadline} 
          onChange={handleChange}
        />
        </Grid>
        <Grid item xs={8}>
        <TextField
            id="outlined-multiline-static"
            label="Summary"
            variant="outlined"
            multiline
            rows={4}
            defaultValue="Default Value"
            name="summary" 
            fullWidth
            value={task.summary} 
            onChange={handleChange}
        />
        </Grid>
        <Grid item xs={8}>
         <Button onClick={handleSubmit} title='Add Task'></Button>
        </Grid>
    </Grid>
    </>
 )
}

export default AddTask