import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
        
      {/* ============================================================== */}
      {/* Left Sidebar - style you can find in sidebar.scss  */}
      {/* ============================================================== */}
      <aside className="left-sidebar" data-sidebarbg="skin6">
      {/* Sidebar scroll*/}
      <div className="scroll-sidebar">
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            {/* User Profile*/}
            <li className="sidebar-item pt-2">
              <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/" aria-expanded="false">
                <i className="far fa-clock" aria-hidden="true" />
                <span className="hide-menu">Dashboard</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/studentEntry" aria-expanded="false">
                <i className="fa fa-user" aria-hidden="true" />
                <span className="hide-menu">Student Fill Details</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/viewstudent" aria-expanded="false">
                <i className="fa fa-table" aria-hidden="true" />
                <span className="hide-menu">View Students</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/bookEntry" aria-expanded="false">
                <i className="fa fa-book" aria-hidden="true" />
                <span className="hide-menu">Add Book Details</span>
              </NavLink>
            </li>
            
            <li className="sidebar-item">
              <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/BooksRead" aria-expanded="false">
                <i className="fa fa-table" aria-hidden="true" />
                <span className="hide-menu">View Books</span>
              </NavLink>
            </li>
            
            <li className="sidebar-item">
              <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/Booksissue" aria-expanded="false">
                <i className="fas fa-edit" aria-hidden="true" />
                <span className="hide-menu">Add Book Issue</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/Readissue" aria-expanded="false">
                <i className="fa fa-table" aria-hidden="true" />
                <span className="hide-menu">View Books Issue</span>
              </NavLink>
            </li>
             
          </ul>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
    </>
  )
}

export default SideBar