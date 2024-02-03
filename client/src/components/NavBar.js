import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    {/* ============================================================== */}
    <header className="topbar" data-navbarbg="skin5">
    <nav className="navbar top-navbar navbar-expand-md navbar-dark">
      <div className="navbar-header" data-logobg="skin6">
        {/* ============================================================== */}
        {/* Logo */}
        {/* ============================================================== */}
        <NavLink className="navbar-brand" to="/">
          {/* Logo icon */}
          <b className="logo-icon">
            {/* Dark Logo icon */}
            <img src="../lbicon.png" alt="homepage" style={{width:'50px'}} />
          </b>
          {/*End Logo icon */}
          {/* Logo text */}
          <span className="logo-text">
            {/* dark Logo text */}
            <img src="../libicon.png" style={{width:'120px'}} alt="homepage" />
          </span>
        </NavLink>
        {/* ============================================================== */}
        {/* End Logo */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* toggle and nav items */}
        {/* ============================================================== */}
        <NavLink className="nav-toggler waves-effect waves-light text-dark d-block d-md-none" to="#"><i className="ti-menu ti-close" /></NavLink>
      </div>
      {/* ============================================================== */}
      {/* End Logo */}
      {/* ============================================================== */}
      <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
        {/* ============================================================== */}
        {/* Right side toggle and nav items */}
        {/* ============================================================== */}
        <ul className="navbar-nav ms-auto d-flex align-items-center">
          {/* ============================================================== */}
          {/* Search */}
          {/* ============================================================== */}
          <li className=" in">
            <form role="search" className="app-search d-none d-md-block me-3">
              <input type="text" placeholder="Search..." className="form-control mt-0" />
              <NavLink className="active">
                <i className="fa fa-search" />
              </NavLink>
            </form>
          </li>
          {/* ============================================================== */}
          {/* User profile and search */}
          {/* ============================================================== */}
          <li>
            <NavLink className="profile-pic" to="/">
              <img src="../profile.jpg" alt="user-img" width={20} className="img-circle" /><span className="text-white font-medium">Sumit Kumar</span></NavLink>
          </li>
          {/* ============================================================== */}
          {/* User profile and search */}
          {/* ============================================================== */}
        </ul>
      </div>
    </nav>
  </header>
  
    </>
  )
}

export default NavBar