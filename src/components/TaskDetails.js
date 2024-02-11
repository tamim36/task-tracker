import { useState, useEffect } from 'react'
import { useParams, Navigate, useNavigate, useLocation } from 'react-router-dom' 
import Button from './Button'

const TaskDetails = () => {
  const [loading, setLoading] = useState(true)
  const [task, setTask] = useState({})
  const [error, setError] = useState(null)

  const params = useParams()
  const navigate = useNavigate()
  const {pathname}  = useLocation()

  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    if (res.status === 404){
      navigate('/')
    }

    const data = await res.json()
    return data
  }

  useEffect(() => {
    const getTask = async(id) => {
      const taskDetails = await fetchTask(id)
      
      setTask(taskDetails)
      setLoading(false)
    }

    getTask(params.id)
  }, [])

  // if (error) {
  //   return <Navigate to='/' />
  // }

  return loading ? (
    <h3>Loading ...</h3>
  ) : 
  (
    <div>
      <p>{pathname}</p>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <Button onClickProp={() => {
        navigate(-1)
      }}
      text='Go Back' />
    </div>
  )
}

export default TaskDetails