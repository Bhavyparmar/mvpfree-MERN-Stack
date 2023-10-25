import React, { useState ,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import Bidfetch from './Admin/Bidfetch';
const host="http://localhost:5000"
const Login = () => {
  let reloadCount;
  useEffect(() => {
    if(reloadCount < 2) {
      localStorage.setItem('reloadCount', String(reloadCount + 1));
      window.location.reload(true);
    } else {
      localStorage.removeItem('reloadCount');
    }
  }, [1]);
  const[credentials,setCredentials]=useState('');
  let navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const{email,password}=credentials;
    const response=await fetch(`${host}/api/auth/login`,{
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({email,password})
    });
    const json=await response.json();
    if(json.success && json.user.role=="user"){ 
      localStorage.setItem('role',json.user.role);
      navigate("/bid")
      localStorage.setItem('token',json.authtoken);
    }
    else if (json.success && json.user.role=="admin"){
      localStorage.setItem('role',json.user.role);
      navigate("/Bidfetch")
    }
    else{
      alert("Email or password is wrong");
    }

  }
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <>
    {/* css for the login page */}
    <link rel="stylesheet" href="asset/fonts/material-icon/css/material-design-iconic-font.min.css"/>
    <link rel="stylesheet" href="asset/css/login.css"/>
    {/* css for the login page */}
    <div className="main">
  <section className="sign-in">
    <div className="container">
      <div className="signin-content">
        <div className="signin-image">
          <figure><img src="asset/images/signin-image.jpg" alt="sing up image" /></figure>
          <Link to="/register" className="signup-image-link">Create an account</Link>
        </div>
        <div className="signin-form">
          <h2 className="form-title">Sign In</h2>
          <form onSubmit={handleSubmit}  className="register-form" >
            <div className="form-group">
              <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name" /></label>
              <input type="email" name="email" onChange={onChange} id="email" placeholder="Your email" />
            </div>
            <div className="form-group">
              <label htmlFor="your_pass"><i className="zmdi zmdi-lock" /></label>
              <input type="password" name="password" onChange={onChange} id="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
              <label htmlFor="remember-me" className="label-agree-term"><span><span /></span>Remember me</label>
            </div>
            <div className="form-group form-button">
              <input type="submit" name="signin" id="signin" className="form-submit" defaultValue="Log in" />
            </div>
          </form>
          <div className="social-login">
            <span className="social-label">Or login with</span>
            <ul className="socials">
              <li><Link href="#"><i className="display-flex-center zmdi zmdi-facebook" /></Link></li>
              <li><Link href="#"><i className="display-flex-center zmdi zmdi-twitter" /></Link></li>
              <li><Link href="#"><i className="display-flex-center zmdi zmdi-google" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </>
  )
}

export default Login