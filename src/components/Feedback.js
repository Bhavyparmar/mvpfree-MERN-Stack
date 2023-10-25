import React, { useState } from 'react'
import Footer from './Footer'
const Feedback = () => {
  const [message,setMessage]=useState({name:"",msg:""});
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const {name,msg}=message;
    const response=await fetch("http://localhost:5000/api/conta-feed/feedback",{
    method :"POST",  
    headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify({name,msg})
    });
    const json=await response.json();
    if(json.success){
      alert("Your feedback is recorded ")
      setMessage({name:"",msg:""})
    }
    else{
      alert("Not recorded due to some technical issue")
    }
  }
  const onChange=(e)=>{
    setMessage({...message,[e.target.name]:e.target.value})
  }

  return (
    <>
    {/* bootsstrap 5 */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"/>
    {/* bootsstrap 5 */}
    {/* css for the feedback page */}
    <link rel="stylesheet" href="asset/css/feedback.css"/>
    {/* css for the feedback page */}
    <div className="container my-4">
        <div className="row">
          <h3>Feedback</h3>
        </div>
        <div className="row">
          <h4 style={{textAlign: 'center'}}>We'd love to hear from you!</h4>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input type="text" name="name" onChange={onChange} value={message.name}  required />
              <label>Name</label>
            </div>
          </div>
          <div className="star-source">
            <svg>
              <linearGradient x1="50%" y1="5.41294643%" x2="87.5527344%" y2="65.4921875%" id="grad">
                <stop stopColor="#007fed" offset="0%" />
                <stop stopColor="#007fed" offset="60%" />
                <stop stopColor="#007fed" offset="100%" />
              </linearGradient>
              <symbol id="star" viewBox="153 89 106 108">
                <polygon id="star-shape" stroke="url(#grad)" strokeWidth={5} fill="currentColor" points="206 162.5 176.610737 185.45085 189.356511 150.407797 158.447174 129.54915 195.713758 130.842203 206 95 216.286242 130.842203 253.552826 129.54915 222.643489 150.407797 235.389263 185.45085">
                </polygon>
              </symbol>
            </svg>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea required onChange={onChange} value={message.msg} name="msg" />
              <label>Message</label>
            </div>
          </div>
          
          <div className="col-xs-12 my-3">
            <button type="submit"  className="btn-lrg submit-btn text-center w-100">Send Message</button>
          </div>
        </div>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default Feedback
