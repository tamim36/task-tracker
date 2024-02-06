import Task from "./Task"

const Tasks = ({tasks, onDelete}) => {

  return (
    <>
        {
            tasks.map((t) => (
            <Task onDelete={onDelete} key={t.id} task={t} />
            ))
        }
    </>
  )
}

export default Tasks