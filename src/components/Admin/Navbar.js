import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate("/login");
    //window.location.reload(true)
  }
  return (
    <>
       <div>
  <nav className="navbar navbar-expand-lg py-3 sticky-top navbar-dark bg-light shadow-sm">
    <div className="container">
      <a href="#" className="navbar-brand">
        {/* Logo Image */}
        <img src="sb-logo.svg" width={44}  alt="" className="d-inline-block align-middle mr-2" />
        {/* Logo Text */}
        <span className="text-fan   tasy font-weight-bold" style={{textShadow: '2px 2px 5px red', color: 'black'}}>MVP
          Free, Welcome Admin</span>
      </a>
      <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon" /></button>
      <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
          <button type="button" className="btn btn-danger" onClick={handleLogout}>Log Out</button>
          </ul>
        </div>
    </div>
  </nav>
  {/* End First NAVBAR*/}
  {/* Start Second Navbar*/}
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link className="nav-link active" to="/bidfetch">Bid<span className="sr-only" /></Link>
        <Link className="nav-link active" to="/contact">Contact<span className="sr-only" /></Link>
        <Link className="nav-link active" to="/feedbackfetch">Feedback<span className="sr-only" /></Link>
        <Link className="nav-link active" to="/uploadfetch">Uploads project<span className="sr-only" /></Link>
        <Link className="nav-link active" to="/userinfo">Userinfo<span className="sr-only" /></Link>
      </ul>
    </div>
  </nav>
</div>
  
    </>
  )
}

export default Navbar
