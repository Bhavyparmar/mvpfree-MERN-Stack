import axios from 'axios';
import React, { useState } from 'react'
import Footer from './Footer'
const host="http://localhost:5000"
const Projectupload = () => {

  const [project,setProject]=useState({pname:"",pskill:"",pbudget:"",pdesc:""});
  const [pfile,setPfile]=useState('');

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const {pname,pskill,pbudget,pdesc}=project;
    const formData=new FormData();
    formData.append('pname',pname);
    formData.append('pskill',pskill);
    formData.append('pbudget',pbudget);
    formData.append('pdesc',pdesc);
    formData.append('pfile',pfile);
    const a=axios.post(`${host}/api/uploadproject/createproject`,
      formData,
      {
        headers:{'auth-token':localStorage.getItem('token'),'Content-Type':"multipart/form-data"}
      }
    )
      if(a){
        alert("Your project is uploaded successfully")
      }
      setProject({pname:"",pskill:"",pbudget:"",pdesc:""})
      setPfile({pfile:""})
  }

  const onChange=(e)=>{
    setProject({...project,[e.target.name]:e.target.value})
  }
  return (
   <>
    
   {/* Project upload css */}
   <link rel="stylesheet" href="asset/css/project-upload.css"/>
   {/* Project upload css */}
   <section className="large-cta-section skrollable skrollable-between">
    <div className="medium-large-wrapper skrollable skrollable-after">
      <div className="medium-text-wrapper">
        <h2 className="h2 large white">Get Work done <span className="yellow">today</span>.</h2>
      </div>
    </div>
    <img className="cta-purple-email skrollable skrollable-after" src="asset/images/cl.png" alt="email illustration" />
    <img className="cta-blue-email skrollable skrollable-between" src="asset/images/cl1.png" alt="email illustration" />
  </section>
  <section className="contact-wrap">
    <form onSubmit={handleSubmit} className="contact-form" encType="multipart/form-data">
      <div className="col-sm-12">
        <label > <b style={{fontSize: 'larger'}}>Choose name for the project</b> </label>
        <div className="input-block my-3">
          <input className="form-control" placeholder="Project Name" type="text" value={project.pname} name='pname'   onChange={onChange}/>
        </div>
      </div>
      <div className="col-sm-12">
        <label > <b style={{fontSize: 'larger'}}>Skills required</b> </label>
        <div className="input-block my-3">
          <input className="form-control" placeholder="Skills" type="text" value={project.pskill} name='pskill' onChange={onChange}/>
        </div>
      </div>
      <div className="col-sm-12">
        <label > <b style={{fontSize: 'larger'}}>Budget</b> </label>
        <div className="input-block my-3">
          <input className="form-control" placeholder="budget" type="text" name='pbudget' value={project.pbudget} onChange={onChange}/>
        </div>
      </div>
      <div className="col-sm-12">
        <label > <b style={{fontSize: 'larger'}}>File</b> </label>
        <div>
          <input style={{border: 'solid #007fed 1px'}} className="form-control form-control-lg my-3" id="formFileLg" type="file" onChange={(e)=>setPfile(e.target.files[0])} />
        </div>
      </div>    
      <div className="col-sm-12">
        <label > <b style={{fontSize: 'larger'}}>Project description</b> </label>
        <div className="input-block textarea my-3">
          <textarea rows={3} type="text" placeholder="Project description" className="form-control" name='pdesc' value={project.pdesc} onChange={onChange}/>
        </div>
      </div>
      <div className="col-sm-6">
        <button type="submit" className="square-button ">Send</button>
      </div>
    </form> 
  </section>
  
<Footer/>
   </>
  )
}

export default Projectupload
