import Task from "./Task"

const Tasks = ({tasks, onDelete , onToggle}) => {
    
  return (
    <>
        {tasks.map((task, index)=>(  //for each loop
        <Task key={index} task={task}
         onDelete={onDelete}
          onToggle={onToggle}/>//skould have unique key prop
        ))}    
    </>
  )
}

export default Tasks