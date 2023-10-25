import React ,{useState}  from 'react'
import Footer from './Footer'

const Contactus = () => {
  const[contact,setContact]=useState({name:"",email:"",pnumber:"",msg:""});
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const{name,email,pnumber,msg}=contact;
    const response=await fetch("http://localhost:5000/api/conta-feed/contact",{
      method:"POST",
      headers:{
        'Content-type':'application/json',
        'auth-token':localStorage.getItem('token')
      },
      body:JSON.stringify({name,email,pnumber,msg})
    });
    const json=await response.json();
    if(json.success){
      alert("Message is added successfully")
      setContact({name:"",email:"",pnumber:"",msg:""});
    }
    else{
      alert("!!Message is not added due to some error!!")
    }
    
  }
  const onChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value})
  }
  return (
    <>

    {/* css for contact us */}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"/>
    <link rel="stylesheet" href="asset/css/contact.css"/>
    {/* css for contact us */}
    <div className="container my-4">
    <div className="row">
        <h3>Contact Us</h3>
    </div>
    <div className="row">
        <h4 style={{textAlign:'center'}}>We'd love to hear from you!</h4>
    </div>
    <form onSubmit={handleSubmit}>
    <div className="row input-container">
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input type="text" name="name" value={contact.name} onChange={onChange} required />
            <label>Name</label> 
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input">
            <input type="text" name="email" value={contact.email} onChange={onChange} required />
            <label>Email</label> 
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input" style={{float:"right"}}>
            <input type="text" name="pnumber" value={contact.pnumber} onChange={onChange} required />
            <label>Phone Number</label> 
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <textarea required name="msg" value={contact.msg}  onChange={onChange}></textarea>
            <label>Message</label>
          </div>
        </div>
        <div className="col-xs-12">
          <button type="submit" className="btn-lrg submit-btn text-center w-100">Send Message</button>
        </div>
    </div>
    </form>
  </div>
  <Footer/>
    </>
  )
}

export default Contactus