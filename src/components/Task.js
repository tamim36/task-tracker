import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div onDoubleClick={() => onToggle(task.id)} 
    className={`task ${task.reminder ? 'reminder': ''}`}>
        <h3>{task.text}
            <FaTimes 
                onClick={() => onDelete(task.id)} 
                style={{color: 'red', cursor: 'pointer'}} />
        </h3>
        <p>{task.day}</p>
        <Link to={`task/details/${task.id}`} > View Details </Link>
    </div>
  )
}

export default Task