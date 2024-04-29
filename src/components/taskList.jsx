import Task from './Task'
import { useSelector } from 'react-redux'
function TaskList() {

  const taskList = useSelector(state => state)
  return (
    <>
      {taskList.length > 0 ?
        <> <div className="dropdown" style={{ display: "flex", flexDirection: "row-reverse", margin: "20px" }}>
          <select style={{ borderRadius: "5px" }}>
            Dropdown button
            <option selected>Choose Task</option>
            <option >Inprogres</option>
            <option >Completed</option>
            <option >Backlog</option>
          </select>
        </div>
          {taskList.map((task) => (
            <Task
              key={task.id}
              task={task}
            />
          ))}
        </>


        : <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px" }}>There is No Task !</div>
      }
    </>
  )
}

export default TaskList










