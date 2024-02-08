import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

// 57 min

function App() {

  const [showForm, setShowForm] = useState(false)

  const [tasks, setTasks] = useState([])

  const onToggleTask = (id) => {
    setTasks(tasks.map((t) => 
    t.id === id ? {...t, reminder: !t.reminder} : t))
  }

  const onDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  const onSubmitFormTask = (task) => {
    const maxId = tasks.reduce((max, curElem) => {
      return curElem.id > max ? curElem.id : max;
    }, 0);

    const id = maxId + 1;
    const newTask = {...task, id};
    setTasks([...tasks, newTask]);
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
