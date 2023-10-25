import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
const AllNavbar = () => {
  let navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate("/login");
  }
  return (
    <>
    
    {/* First Navbar Without Login */}
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
    {!localStorage.getItem('token')? <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item active bg-danger"><Link to="/login"
                className="nav-link">Log In <span className="sr-only"></span></Link></li>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <li className="nav-item active bg-danger"><Link to="/register"
                className="nav-link">Sign Up</Link></li>
          </ul>
        </div>: <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
          <button type="button" className="btn btn-danger" onClick={handleLogout}>Log Out</button>
          </ul>
        </div>}
        
      </div>
    </nav>

{/* Second Navbar Without Login */}
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {!localStorage.getItem('token')? <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
      </div>:  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Link className="nav-link active" to="/bid">Projects<span className="sr-only" /></Link>
      <Link className="nav-link active" to="/usersetting">User Setting<span className="sr-only" /></Link>
      <Link className="nav-link active" to="/feedback">FeedBack<span className="sr-only" /></Link>
      <Link className="nav-link active" to="/contactus">Contact Us<span className="sr-only" /></Link>
      <Link className="nav-link bg-danger active" to="/projectupload">Post a Project <span className="sr-only" /></Link>
    </ul>
  </div>}
      
    </nav>

   
    </>
  )
}

export default AllNavbar
