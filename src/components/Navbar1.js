import React from 'react'
import {Link} from 'react-router-dom';
const Navbar1 = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg py-3 sticky-top navbar-dark bg-light
      shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="asset/sb-logo.svg" width="44" height="" alt=""
            className="d-inline-block align-middle mr-2"/>
          <span className="text-fantasy font-weight-bold" style= {{textShadow: "2px 2px 5px red",color:"black"}}>MVP Free</span>
        </Link>

        <button type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation" className="navbar-toggler"><span
            className="navbar-toggler-icon"></span></button>
      {}
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item active bg-danger"><Link to="/login"
                className="nav-link">Log In <span className="sr-only"></span></Link></li>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <li className="nav-item active bg-danger"><Link to="/register"
                className="nav-link">Sign Up</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar1
