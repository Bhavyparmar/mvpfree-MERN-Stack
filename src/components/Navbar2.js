import React from 'react'
import {Link} from 'react-router-dom'
const Navbar2 = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Link className="nav-link active" to="/">Home <span
              className="sr-only"></span></Link>
          <Link className="nav-link bg-danger active" to="/Projectupload">Post a
            Project <span className="sr-only"></span></Link>
          <Link className="nav-link active" to="/login">Log In<span
              className="sr-only"></span></Link>
          <Link className="nav-link active" to="/register">Sign Up <span
              className="sr-only"></span></Link>
    </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar2
