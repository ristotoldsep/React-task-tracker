// import React from 'react'
/* 
    //Without useState HOOK
    const tasks = [
    {
        id: 1,
        text: 'Hahhaha',
    },
    {
        id: 2,
        text: 'okeiokei',
    },
    {
        id: 3,
        text: 'Testing',
    }
] */
// import { useState } from 'react';
import Task from './Task';

const Tasks = ({tasks, onDelete, onToggle}) => {
    //To use this array in state of this component //3. gonna set this array as global state in App.js instead!
/*     const [tasks, setTasks] = useState([ //1. name of the array, 2. which fx updates them
        {
            id: 1,
            text: 'Hahhaha',
        },
        {
            id: 2,
            text: 'okeiokei',
        },
        {
            id: 3,
            text: 'Testing',
        }
    ]) */

    return (
        <>
         {tasks.map((task) => (
             <Task 
                key={task.id} 
                task={task} 
                onDelete={onDelete} 
                onToggle={onToggle}  
            />
         ))}   
        </>
    )
}

export default Tasks
