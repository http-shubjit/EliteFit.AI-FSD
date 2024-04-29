import { createStore } from "redux";



let DEFAULT_LIST;
function onload() {
  let loadedTasks = localStorage.getItem("tasks")
  loadedTasks = JSON.parse(loadedTasks)
  DEFAULT_LIST = loadedTasks
}
onload()
console.log(DEFAULT_LIST)

const reducer = (currTaskList = DEFAULT_LIST, action) => {


  let newTaskList = currTaskList;
  switch (action.type) {
    case "DEL": {
      let loadedTasks = localStorage.getItem("tasks")
      loadedTasks = JSON.parse(loadedTasks)
      if (loadedTasks) {
        newTaskList = loadedTasks.filter((task) => task.id !== action.payload.id)
        localStorage.setItem("tasks", JSON.stringify(newTaskList))
      }
      else {
        newTaskList = currTaskList.filter(
          (task) => task.id !== action.payload.id
        )
      }


      break;
    }
    case "ADD": {
      let tasks = []
      let loadedTasks = localStorage.getItem("tasks")
      loadedTasks = JSON.parse(loadedTasks)
      if (loadedTasks) {
        tasks.push(...loadedTasks, action.payload)
        localStorage.setItem("tasks", JSON.stringify(tasks))
      }
      else {
        localStorage.setItem("tasks", JSON.stringify([action.payload]))
      }

      newTaskList = [...currTaskList, action.payload];
      break;
    }
    case "EDIT": {
      const updatetask = action.payload;
      let loadedTasks = localStorage.getItem("tasks")
      loadedTasks = JSON.parse(loadedTasks)

      if (loadedTasks) {
        let updatedList = loadedTasks.map((task) => {
          if (task.id === updatetask.id) {
            return {
              ...task,
              name: updatetask.name,
              day: updatetask.day,
              des: updatetask.des,
              priority: updatetask.priority,
              status: updatetask.status,
            }
          }
          return task;
        })
        localStorage.setItem("tasks", JSON.stringify(updatedList))
        newTaskList = updatedList;
      }

      else {
        let updatedList = newTaskList.map((task) => {
          if (task.id === updatetask.id) {
            return {
              ...task,
              name: updatetask.name,
              day: updatetask.day,
              des: updatetask.des,
              priority: updatetask.priority,
              status: updatetask.status,
            };
          }
          return task;
        });

        localStorage.setItem("tasks", JSON.stringify(updatedList))
        newTaskList = updatedList;
      }
      break;
    }
  }
  return newTaskList;
};





export const store = createStore(reducer);
