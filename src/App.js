
//With function declaration we don't need to import react, with class we do! 
// import React from 'react'

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {useState} from 'react'

/* class App extends React.Component {
  render() {
    return <h1>Hahahhaahh</h1>
  }
} */

const App = () => {
  //State that controls the toggle
  const [showAddTask, setShowAddTask] = useState(false);
  
  //TASKS STATE
  //Defining tasks as global state here because we need them in several components
  const [tasks, setTasks] = useState([ //1. name of the array, 2. which fx updates them
    {
      id: 1,
      text: 'Hahhaha',
      day: 'August 13th at 15:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'okeiokei',
      day: 'June 3rd at 16:00',
      reminder: true,
    },
    {
      id: 3,
      text: 'Testing',
      day: 'June 7th at 22:30',
      reminder: true,
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1; //Created a random id for the task, since we are not using back-end
    
    const newTask = { id, ...task } //get the form data that was added
    setTasks([...tasks, newTask]) //add it to the existing tasks object

    console.log(id);
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)) //removing the task with clicked id (setting tasks object to filtered tasks)
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? 
        { ...task, reminder: !task.reminder } : task)) //Take in the task object as it is, but change reminder to opposite
  }

  return (
    <div className="container">

      {/* Header component - contains toggle button to show/hide the form */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} /> 

      {/* Form for adding the task */}
      {showAddTask && <AddTask onAdd={addTask} />} {/* Shorter way for terniary operator */}

      {/* Tasks components */}
      {tasks.length > 0 ? 
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder} 
      /> : 
      <p>No tasks!</p>}

    </div>
  );
}

export default App;
