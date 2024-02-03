import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div className="error-box">
        <div className="error-body text-center">
          <h1 className="error-title text-danger">404</h1>
          <h3 className="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
          <p className="text-muted mt-4 mb-4">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
          <NavLink to="/" className="btn btn-danger btn-rounded waves-effect waves-light mb-5 text-white">Back to home</NavLink>
        </div>
      </div>
    </>
  )
}

export default Error