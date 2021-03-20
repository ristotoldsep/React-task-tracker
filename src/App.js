
//With function declaration we don't need to import react, with class we do! 
// import React from 'react'
import { useState, useEffect } from 'react'; //Added useEffect hook to have tasks displayed when opening the page
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';

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
    // Empty array! (objects were here, but now used json-server to mock back-end (db.json))
  ])

  /* MAKING THE HTTP REQUEST FOR DATA */
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer) //Set the tasks from db as initial STATE
    }

    getTasks();
  }, []) //useEffect needs to have dependencies array

  // Fetch data (tasks)
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  }
  
  // Fetch data (single task)
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  }

  // Add Task
  const addTask = async (task) => {
    //Removed this and added json-server to add data to the back-end (id increments automatically there)
    /* const id = Math.floor(Math.random() * 10000) + 1; //Created a random id for the task, since we are not using back-end
    
    const newTask = { id, ...task } //get the form data that was added from front-end
    setTasks([...tasks, newTask]) //add it to the existing tasks object

    console.log(id); */
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task) //Convert the JS object into JSON and post to api
    })

    const data = await res.json();  //get the form data that was added from front-end

    setTasks([...tasks, data]) //add it to the existing tasks object
  }

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id)) //removing the task with clicked id (setting tasks object to filtered tasks)
  }

  // Toggle the reminder with double click
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder } //getting the task and assigning it to a variable

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updTask) //Turn the response into JSON
    })

    const data = await res.json(); //data = updated "task"

    setTasks(
      tasks.map((task) => 
        task.id === id ? 
        { ...task, reminder: data.reminder } : task)) //Take in the task object as it is, but change reminder to opposite
  }

  return (
    <Router>
      <div className="container">

        {/* Header component - contains toggle button to show/hide the form */}
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} /> 
        
        <Route 
          path='/' 
          exact 
          render={(props) => (
            <>
              {/* Form for adding the task */}
              {showAddTask && <AddTask onAdd={addTask} />} {/* Shorter way for terniary operator */}

              {/* Tasks components */}
              {tasks.length > 0 ?
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                /> : (<p>No tasks!</p>)}
            </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
