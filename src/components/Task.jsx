/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
function Task({ task }) {



  const [isEditing, setIsEditing] = useState(false);
  const [editedname, setEditedName] = useState(task.name);
  const [editedday, setEditedDay] = useState(task.day);
  const [editedprirority, setEditedPriority] = useState(task.priority);
  const [editedStatus, setEditedStatus] = useState(task.status);
  const [editdes, setEditdes] = useState(task.des)

  const dispatch = useDispatch()



  const handleSaveClick = () => {
    dispatch({
      type: "EDIT",
      payload: {
        id: task.id,
        name: editedname,
        day: editedday,
        priority: editedprirority,
        status: editedStatus,
        des: editdes


      }

    })

    setIsEditing(false);

  };
  return (

    <div className="card post_card" >
      <div className="card-body">
        <p>Task Tittle: {isEditing ? <input
          type="text"
          style={{ height: "30px", borderRadius: "5px", border: "1px solid black" }}
          value={editedname}
          onChange={(e) => setEditedName(e.target.value)}
        /> : <span style={{ fontWeight: "bolder" }}>{task.name}</span>}</p>

        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => dispatch({ type: "DEL", payload: { id: task.id } })}
        ><MdDelete />
        </span>

        <span
          className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-warning"
          onClick={() => setIsEditing(true)}
        >
          <FaEdit />
        </span>

        <p className="card-text">Task ID:
          <span style={{ fontWeight: "bolder" }}>{task.id}</span>
        </p>

        <p className="card-text">
          Day:
          {isEditing ?
            <input
              type="text"
              style={{ height: "30px", borderRadius: "5px", border: "1px solid black" }}
              value={editedday}
              onChange={(e) => setEditedDay(e.target.value)}
            /> : <span style={{ fontWeight: "bolder" }}>{task.day}</span>
          }
        </p>
        <p className="card-text">
          Description: {isEditing ?
            <input
              type="text"
              style={{ height: "30px", borderRadius: "5px", border: "1px solid black" }}
              value={editdes}
              onChange={(e) => setEditdes(e.target.value)}
            /> : <span style={{ fontWeight: "bolder" }}>
              {task.des}
            </span>
          }
        </p>
        <p className="card-text">
          Status: {isEditing ?
            <input
              type="text"
              style={{ height: "30px", borderRadius: "5px", border: "1px solid black" }}
              value={editedStatus}
              onChange={(e) => setEditedStatus(e.target.value)}
            /> : <span style={{ fontWeight: "bolder" }} className={`${task.status === ("inprogress" || "completed") ? "text-success" : "text-danger"}`}>
              {task.status}
            </span>
          }
        </p>
        <p className="card-text">
          Priority: {isEditing ?
            <input
              type="text"
              style={{ height: "30px", borderRadius: "5px", border: "1px solid black" }}
              value={editedprirority}
              onChange={(e) => setEditedPriority(e.target.value)}
            /> : <span style={{ fontWeight: "bolder" }} className={`${task.priority
              === "high" ? "text-danger" : "text-success"}`}>
              {task.priority}
            </span>
          }
        </p>
        {isEditing && (
          <button className="btn bg-dark text-white" onClick={handleSaveClick}>
            Save
          </button>
        )}
      </div>
    </div >
  )
}

export default Task