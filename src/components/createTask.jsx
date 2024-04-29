import { useRef } from "react"
import { useDispatch } from "react-redux"

function CreateTask() {

  const dispatch = useDispatch()
  const IdElement = useRef()
  const nameElement = useRef()
  const dayElement = useRef()
  const desElement = useRef()
  const priorityElement = useRef()
  const statusElement = useRef()

  const handleOnsubmit = (event) => {
    event.preventDefault()

    const id = IdElement.current.value
    const name = nameElement.current.value;
    const day = dayElement.current.value
    const des = desElement.current.value
    const status = statusElement.current.value
    const priority = priorityElement.current.value

    IdElement.current.value = ""
    nameElement.current.value = ""
    dayElement.current.value = ""
    desElement.current.value = ""
    statusElement.current.value = ""
    priorityElement.current.value = ""
    dispatch({ type: "ADD", payload: { id, name, day, des, priority, status } })
  }

  return (
    <form className="createpost" onSubmit={handleOnsubmit}>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="enter task no" ref={IdElement} required />
      </div>

      <div className="mb-3">
        <input type="text" className="form-control" placeholder="your task tittle" ref={nameElement} required />
      </div>

      <div className="mb-3">
        <input className="form-control" id="body" ref={dayElement} required placeholder="in which day you start your task " />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" ref={desElement} placeholder="task description" />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder=" task priority high/low" ref={priorityElement} />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" ref={statusElement} placeholder="enter task status inprogress / backlog / complete" />
      </div>

      <button type="submit" className="btn bg-info">Create Task</button>
    </form>
  )
}

export default CreateTask