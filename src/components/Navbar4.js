import React from 'react'
import {Link} from 'react-router-dom'
const Navbar4 = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Link className="nav-link active" to="/">Projects<span className="sr-only" /></Link>
      <Link className="nav-link active" to="/chat">Chats<span className="sr-only" /></Link>
      <Link className="nav-link active" to="/usersetting">User Setting<span className="sr-only" /></Link>
      <Link className="nav-link active" to="/feedback">FeedBack<span className="sr-only" /></Link>
      <Link className="nav-link active" to="/contactus">Contact Us<span className="sr-only" /></Link>
      <Link className="nav-link bg-danger active" to="/projectupload">Post a Project <span className="sr-only" /></Link>
    </ul>
  </div>
</nav>

    </>
  )
}

export default Navbar4
