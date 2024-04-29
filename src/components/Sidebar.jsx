

function Sidebar({ selectedTab, setSelectedTab }) {


  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{
      maxWidth: '200px'
    }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" />
      <hr />
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("tasklist");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${selectedTab === "tasklist" && "bg-info"
              }`}
            aria-current="page"
          >

            Tasks
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("createtask");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${selectedTab === "createtask" && "bg-info"
              }`}
          >
            Create Task
          </a>
        </li>
      </ul>


    </div >
  );
}


export default Sidebar;
