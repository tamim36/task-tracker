import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

// 57 min

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2.30 pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Grocery Shopping',
        day: 'Feb 6th at 10.00 am',
        reminder: false
    },
    {
        id: 3,
        text: 'Meeting with Client',
        day: 'Feb 7th at 3.00 pm',
        reminder: true
    },
    {
        id: 4,
        text: 'Gym Session',
        day: 'Feb 8th at 8.00 am',
        reminder: false
    },
    {
        id: 5,
        text: 'Dentist Appointment',
        day: 'Feb 9th at 11.30 am',
        reminder: true
    }    
  ])

  const onToggleTask = (id) => {
    setTasks(tasks.map((t) => 
    t.id === id ? {...t, reminder: !t.reminder} : t))
  }

  const onDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  return (
    <div className="container">
      <Header />
      {
        tasks.length > 0 
          ? (<Tasks tasks={tasks} onDelete={onDeleteTask} onToggle={onToggleTask} />)
          : (<p>No tasks to show</p>)
      }
      
    </div>
  );
}

export default App;
