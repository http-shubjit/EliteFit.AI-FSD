import { useDispatch } from "react-redux"


function NavBar() {

  const dispatch = useDispatch()
  const handleonSearch = (e) => {
    dispatch({ type: "SEARCH", payload: e.key })
  }
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Task Dashboard</a>
          <form className="d-flex justify-end" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onKeyUp={handleonSearch} />
            <button className="btn btn-outline-success">Search</button>
          </form>

        </div>
      </nav>
    </div>
  )
}

export default NavBar