import React from 'react'
import {Link} from 'react-router-dom'
const Navbar3 = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg py-3 sticky-top navbar-dark bg-light shadow-sm">
  <div className="container">
    <Link href="/" className="navbar-brand">
      {/* Logo Image */}
      <img src="asset/sb-logo.svg" width={44}  alt="" className="d-inline-block align-middle mr-2" />
      {/* Logo Text */}
      <span className="text-fan   tasy font-weight-bold" style={{textShadow: '2px 2px 5px red', color: 'black'}}>MVP Free</span>
    </Link>
    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon" /></button>
    <div id="navbarSupportedContent" className="collapse navbar-collapse">
      {/* <ul class="navbar-nav ml-auto">
      
      <li class="nav-item active bg-danger"><a href="#" class="nav-link">Log In <span class="sr-only"></span></a></li>
     &nbsp;     &nbsp;     &nbsp;     &nbsp;     &nbsp;
      <li class="nav-item active bg-danger"><a href="#" class="nav-link">Sign Up</a></li>
      
    </ul> */}   
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar3
