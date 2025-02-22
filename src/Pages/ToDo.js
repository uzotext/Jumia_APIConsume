import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import axios from 'axios';

import '../Styles/Todo.css'

function ToDo() {
  const [data, setData] = useState()

  const [tasks, setTasks] = useState([]); // State to hold tasks
  const [newTask, setNewTask] = useState(""); // State to hold input value

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Your Task is empty!");
      return;
    }
    if (tasks.length === 10) {
      alert("Task Limit Exceeded")
    }
    else {
      setTasks([...tasks, newTask]);
      setNewTask(""); // Clear input field
    }
  };

  // Delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Remove the task at the given index
  };
  const deleteData = (index) => {
    setData(data.filter((_, i) => i !== index)); // Remove the task at the given index
  };

  useEffect(() => {
    async function get() {
      await axios({
        url: "https://dummyjson.com/todos",
        method: "get",
        headers: {
          "Content-Type": 'application/json',
          "Accept": "*"
        }
      })
        .then(res => {setData(res.data.todos)})
        .catch(error => console.log(error))
    }

    get()
  }, [])



  return (
    <div style={{ paddingTop: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} style={{ width: "50%", justifySelf: "center", padding: "10px", fontSize: "30px" }} type='text' />
        <button onClick={addTask} style={{ backgroundColor: "blue", border: "none", color: "white", width: "5%", fontSize: "20px" }}>Add</button>
      </div>
      {tasks.map((dat, i) =>
        <div id='tasks' key={i}>
          <div id='mains'>
            <span id='task'>{dat}</span>
            <span id='cancel' onClick={() => deleteTask(i)}>Delete</span>
          </div>
        </div>
      )}
          
      {data?.slice(0, 5).map((dat, i) =>
        <div id='tasks' key={i}>
          <div id='mains'>
            <span id='task'>{dat.todo}</span>
            <span id='cancel' onClick={() => deleteData(i)}>Delete</span>
           </div>
        </div>
      )}
    </div>
  )
}

export default ToDo;