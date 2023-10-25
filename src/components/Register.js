import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom';
const host="http://localhost:5000"
const Register = () => {
  const [credentials,setCredentials]=useState('');
  let navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const {name,email,password}=credentials;
    const response=await fetch (`${host}/api/auth/createuser`,{
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({name,email,password})
    });
    const json=await response.json();
    localStorage.setItem('token',json.authtoken)
    if(json.success){
      const {name,company,bio}=credentials
      const response=await fetch(`${host}/api/user-info/adduserinfo`,{
        method:"POST",
        headers:{
          'Content-type':'application/json',
          'auth-token':localStorage.getItem('token')
        },
        body:JSON.stringify({name,company,bio})
      });
      navigate('/bid');
    }
    else{
      alert("Invalid credentials")
    }
  }
const onChange=(e)=>{
  setCredentials({...credentials,[e.target.name]:e.target.value})
}


  return (
   <>
   {/* css for the register */}
      <link rel="stylesheet" href="asset/css/login.css"/>
      <link rel="stylesheet" href="asset/fonts/material-icon/css/material-design-iconic-font.min.css"/>
   {/* css for the register */}
   <div className="main">
  <section className="signup">
    <div className="container">
      <div className="signup-content">
        <div className="signup-form">
          <h2 className="form-title">Sign up</h2>
          <form  className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name" /></label>
              <input type="text" name="name" id="name" onChange={onChange} placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
              <input type="email" name="email" id="email" onChange={onChange} placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
              <input type="password" name="password" id="pass" onChange={onChange} placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
              <input type="password" name="cpass" id="re_pass" onChange={onChange} placeholder="Repeat your password" />
            </div>
            <div className="form-group">
              <input type="checkbox" name="term" id="agree-term" className="agree-term" />
              <label htmlFor="agree-term" className="label-agree-term"><span><span /></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
            </div>
            <div className="form-group form-button">
              <input type="submit" name="signup" id="signup" className="form-submit" defaultValue="Register" />
            </div>
          </form>
        </div>
        <div className="signup-image">
          <figure><img src="asset/images/signup-image.jpg" alt="sing up image" /></figure>
          <Link to="/login" className="signup-image-link">I am already member</Link>
        </div>
      </div>
    </div>
  </section>
</div>

   </>
  )
}

export default Register
