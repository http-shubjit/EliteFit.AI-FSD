import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import './App.css'
import Header from "./components/Header"
import Fotter from './components/Fotter';
import Sidebar from './components/Sidebar';
import { Provider } from 'react-redux';
import { store } from '../store/task-list-store';
import NavBar from './components/navBar';
import TaskList from './components/taskList';
import CreateTask from './components/createTask';



function App() {
  const [selectedTab, setSelectedTab] = useState("tasklist");
  return (

    <Provider store={store}>
      <div className='app-container'>
        <NavBar />
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className='content'>
          <Header />

          {selectedTab === "tasklist" ? <TaskList /> : <CreateTask />}
          <Fotter />
        </div>
      </div>
    </Provider>

  )
}

export default App
