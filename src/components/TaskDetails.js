import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' 

const TaskDetails = () => {
  const [loading, setLoading] = useState(true)
  const [task, setTask] = useState({})
  const [error, setError] = useState(null)

  const params = useParams()

  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  useEffect(() => {
    const getTask = async(id) => {
      const taskDetails = await fetchTask(id)
      
      console.log(taskDetails)
      setTask(taskDetails)
      setLoading(false)
    }

    getTask(params.id)
  }, [])

  return loading ? (
    <h3>Loading ...</h3>
  ) : 
  (
    <div>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
    </div>
  )
}

export default TaskDetails