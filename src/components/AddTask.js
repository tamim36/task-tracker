import React from 'react'
import { useState } from 'react'

const AddTask = ({taskForm}) => {
  const [text, setText] = useState('Default task');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(true);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!text){
        alert('Please add text.');
        return
    }

    taskForm({text, day, reminder});

    setText('');
    setDay('');
    setReminder(true);
  }

  return (
    <form className='add-form' onSubmit={onSubmitForm}>
        <div className='form-control'>
            <label>Task Name</label>
            <input type='text' placeholder='Add Task' 
            value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' placeholder='Add day & time' 
            value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' 
            checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
        <input type='submit' value='Save' className='btn btn-block'/>
    </form>
  )
}

export default AddTask