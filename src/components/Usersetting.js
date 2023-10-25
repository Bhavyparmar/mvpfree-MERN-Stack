import React,{useState} from 'react'
import Footer from './Footer'
import axios from 'axios';
import Userprofile from './Userprofile';
import { Link } from 'react-router-dom';
const host="http://localhost:5000";
const Usersetting = () => {
  const [btn,setBtn]=useState(true);
//Getting the data for the user id 
//Getting the data for the user id 
const getData=async()=>{
  
}
 //Making state to hold the value
  const[social,setSocial]=useState({name:"",company:"",password:"",newpassword:"",bio:"",dob:"",country:"",phone:"",website:"",linkedin:"",twitter:""})
  const [photo,setPhoto]=useState('');
  //Making handlesubmit for the general
  const handleSubmits=async(e)=>{
    e.preventDefault(); 
    //For the id fetching
    //For the id fetching
    const response=await fetch(`${host}/api/auth/getuser`,{
      method:"GET",
      headers:{
       'auth-token':localStorage.getItem('token'),
      },
    });
    const json=await response.json();
    const id=json.user._id;
    // Making it localstorage for future use
    // Making it localstorage for future use
    localStorage.setItem("userid",json.user._id);

    // for updating the name and company and photo
    // for updating the name and company and photo
    const {name,company}=social;
    const formData=new FormData();
    formData.append('name',name);
    formData.append('company',company);
    formData.append('photo',photo);
    const a=axios.post(`${host}/api/user-info/igeneral/${id} `,
      formData,
      {
        headers:{'auth-token':localStorage.getItem('token'),'Content-Type':"multipart/form-data"}
      }
    )
    if(a){
      alert("Your general is updated")
      setSocial({name:"",company:"",password:"",newpassword:"",bio:"",dob:"",country:"",phone:"",website:"",linkedin:"",twitter:""})
    }
    //To do usestate should be clear-------------
    // console.log(social,44)
    // setSocial({name:"",company:""});
    // console.log(social,46)
  }


  //For the password updatation
  //For the password updatation
  const handleSubmitsp=async(e)=>{
    e.preventDefault(); 
    //For the id fetching 
    //For the id fetching 
    const response=await fetch(`${host}/api/auth/getuser`,{
      method:"GET",
      headers:{
       'auth-token':localStorage.getItem('token'),
      },
    });
    const json=await response.json();
    const id1=json.user._id;
    const {password,newpassword}=social;
    const response1=await fetch(`${host}/api/auth/uppass/${id1}`,{
      method:"POST",
      headers:{
       'auth-token':localStorage.getItem('token'),
       'Content-type':'application/json',
      },
      body:JSON.stringify({password,newpassword})
    });
    const json1=await response1.json();
    if(json1.success){
      alert("Your password is updated successfully")
      setSocial({password:"",newpassword:""})
    }
    else{
      alert("Something went wrong")
    }
  }
//For the infos
//For the infos
  const handleSubmitsi=async(e)=>{
    e.preventDefault();
    const response=await fetch(`${host}/api/auth/getuser`,{
      method:"GET",
      headers:{
       'auth-token':localStorage.getItem('token'),
      },
    });
    const json=await response.json();
    const id1=json.user._id;
    const {bio,dob,country,phone,website}=social;
    const response1=await fetch(`${host}/api/user-info/iinfo/${id1}`,{
      method:"POST",
      headers:{
       'auth-token':localStorage.getItem('token'),
       'Content-type':'application/json',
      },
      body:JSON.stringify({bio,dob,country,phone,website})
    });
    const json1=await response1.json();
    if(json1.success){
      alert("Your info is updated successfully")
      setSocial({bio:"",dob:"",country:"",phone:"",website:""})
    }
    else{
      alert("Something went wrong")
    }
  }

  // for the social
  // for the social

  const handleSubmitss=async(e)=>{
    e.preventDefault();
    const response=await fetch(`${host}/api/auth/getuser`,{
      method:"GET",
      headers:{
       'auth-token':localStorage.getItem('token'),
      },
    });
    const json=await response.json();
    const id1=json.user._id;
    const {twitter,linkedin}=social;
    const response1=await fetch(`${host}/api/user-info/isocial/${id1}`,{
      method:"POST",
      headers:{
       'auth-token':localStorage.getItem('token'),
       'Content-type':'application/json',
      },
      body:JSON.stringify({twitter,linkedin})
    });
    const json1=await response1.json();
    if(json1.success){
      alert("Your Social is updated successfully")
      setSocial({twitter:"",linkedini:""})
    }
    else{
      alert("Something went wrong")
    }
  }

const onChange=(e)=>{
  setSocial({...social,[e.target.name]:e.target.value})
}
const editClick=async()=>{
  setBtn(false);
  getData();
}
const cancelClick=()=>{
  setBtn(true);
}
  return (
    <>
    {/* css link for user setting */}
    <link rel="stylesheet" href="asset/css/user-setting.css"/>
    {/* css link for user setting */}
    <div className="container light-style flex-grow-1 container-p-y my-3">
  <div className="card overflow-hidden">
    <div className="row no-gutters row-bordered row-border-light">
      <div className="col-md-3 pt-0">
        <div className="list-group list-group-flush account-settings-links">
          <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">General</a>
          <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-change-password">Change password</a>
          <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-info">Info</a>
          <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-social-links">Social links</a>
        </div>
      </div>
      <div className="col-md-9">
        <div className="tab-content">
          <div className="tab-pane fade active show" id="account-general">
          <form onSubmit={handleSubmits} encType="multipart/form-data">
            <div className="card-body media align-items-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="d-block ui-w-80" />
              <div className="media-body ml-4">
                <label className="btn btn-outline-primary">
                  Upload new photo
                  <input type="file" onChange={(e)=>setPhoto(e.target.files[0])} className="account-settings-fileinput" />
                </label> &nbsp;
                <div className="text-dark small mt-1">Allowed JPG, GIF or PNG. Max size of 7MB</div>
                <Link className="btn btn-primary float-right" to="/Userprofile" >Your Profile</Link>
              </div>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" name='name'  onChange={onChange} className="form-control"  disabled={btn} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Company </label>
                <input type="text" name="company" onChange={onChange} className="form-control"  disabled={btn} required/>
              </div>
            </div>
            <div className="text-right mt-3">
              <button type="button"  className="btn btn-primary" onClick={editClick}>Edit</button>
              <button type="submit" className="btn btn-primary mx-1">Save changes</button>
              <button type="button" className="btn btn-primary mx-1" onClick={cancelClick}>Cancel</button>
            </div>
        </form>
          </div>
          <div className="tab-pane fade" id="account-change-password">
            <div className="card-body pb-2">
              <form onSubmit={handleSubmitsp}>
              <div className="form-group">
                <label className="form-label">Current password</label>
                <input type="password" name='password' onChange={onChange} className="form-control" disabled={btn} />
              </div>
              <div className="form-group">
                <label className="form-label">New password</label>
                <input type="password" name='newpassword' onChange={onChange} className="form-control" disabled={btn} />
              </div>
              <div className="text-right mt-3">
              <button type="button"  className="btn btn-primary" onClick={editClick}>Edit</button>
              <button type="submit" className="btn btn-primary mx-1">Save changes</button>
              <button type="button" className="btn btn-primary mx-1" onClick={cancelClick}>Cancel</button>
              </div>
              </form>
            </div>
          </div>
          <div className="tab-pane fade" id="account-info">
            <form onSubmit={handleSubmitsi}>
            <div className="card-body pb-2">
              <div className="form-group">
                <label className="form-label">Bio</label>
                <textarea className="form-control" rows={5} onChange={onChange} name='bio' disabled={btn}/>
              </div>
              <div className="form-group">
                <label className="form-label">Birthday</label>
                <input type="date" className="form-control" onChange={onChange} name='dob' disabled={btn}/>
              </div>
              <div className="form-group">
                <label className="form-label">Country</label>
                <select className="custom-select" onChange={onChange} name='country' disabled={btn}>
                  <option>India</option>
                  <option>Canada</option>
                  <option>UK</option>
                  <option>Germany</option>
                  <option>France</option>
                </select>
              </div>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body pb-2">
              <h6 className="mb-4">Contacts</h6>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" onChange={onChange} name='phone'  disabled={btn}/>
              </div>
              <div className="form-group">
                <label className="form-label">Website</label>
                <input type="text" className="form-control"  onChange={onChange} name='website' disabled={btn}/>
              </div>
              <div className="text-right mt-3">
              <button type="button"  className="btn btn-primary" onClick={editClick}>Edit</button>
              <button type="submit" className="btn btn-primary mx-1">Save changes</button>
              <button type="button" className="btn btn-primary mx-1" onClick={cancelClick}>Cancel</button>
              </div>
            </div>
            </form>
          </div>
          <div className="tab-pane fade" id="account-social-links">
            <form  onSubmit={handleSubmitss}>
            <div className="card-body pb-2">
              <div className="form-group">
                <label className="form-label">Twitter</label>
                <input type="text" className="form-control"   name="twitter" disabled={btn} onChange={onChange} />
              </div>
              <div className="form-group">
                <label className="form-label">LinkedIn</label>
                <input type="text" className="form-control"   name="linkedin" disabled={btn} onChange={onChange} />
              </div>
              <div className="text-right mt-3">
              <button type="button"  className="btn btn-primary" onClick={editClick}>Edit</button>
              <button type="submit" className="btn btn-primary mx-1">Save changes</button>
              <button type="button" className="btn btn-primary mx-1" onClick={cancelClick}>Cancel</button>
              </div>  
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<br />
<Footer/>
    </>
  )
}

export default Usersetting