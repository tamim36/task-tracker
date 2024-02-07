import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {

  return (
    <>
        {
            tasks.map((t) => (
            <Task onToggle={onToggle} onDelete={onDelete} key={t.id} task={t} />
            ))
        }
    </>
  )
}

export default Tasks