const Tasks = ({tasks}) => {

  return (
    <>
        {
            tasks.map((t) => (
            <h3 key={t.id}>{t.text}</h3>
            ))
        }
    </>
  )
}

export default Tasks