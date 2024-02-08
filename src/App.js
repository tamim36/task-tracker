import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";

// 57 min

function App() {

  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const getTasks = async() => {
      const allTasks = await fetchTasks()
      setTasks(allTasks)
    }

    getTasks()
  }, [])

  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  const [tasks, setTasks] = useState([])

  const onToggleTask = async (id) => {
    const curTask = await fetchTask(id)
    const updTask = {...curTask, reminder: !curTask.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map((t) => 
    t.id === id ? {...t, reminder: data.reminder} : t))
  }

  const onDeleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE',
    })

    setTasks(tasks.filter((t) => t.id !== id));
  }

  const onSubmitFormTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])


    // const maxId = tasks.reduce((max, curElem) => {
    //   return curElem.id > max ? curElem.id : max;
    // }, 0);

    // const id = maxId + 1;
    // const newTask = {...task, id};
    // setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">
      <Header 
        isAddPress={() => setShowForm(!showForm)}
        isFormOpen={showForm} />

      {
        showForm === true && <AddTask taskForm={onSubmitFormTask} />
      }
      
      {
        tasks.length > 0 
          ? (<Tasks tasks={tasks} onDelete={onDeleteTask} onToggle={onToggleTask} />)
          : (<p>No tasks to show</p>)
      }
      
    </div>
  );
}

export default App;
