import React ,{useState,useContext, useEffect}from 'react'
import {Link} from 'react-router-dom';
import bidContext from '../context/bidContext';
import Projectdetailsclient from './Projectdetailsclient';

const ProjectdetailsItem = (props) => {
    const {bid} =props
    const context=useContext(bidContext);
    const {makeBid,fetchBid,client,fetchClient}=context;
    useEffect(()=>{
      fetchClient(localStorage.getItem('clientid'));
    },[10])
    let time=bid.Date;
    let a=time.substring(0,10)// It print only first 9 charater of date

    const [mbid,setMbid]=useState({bamount:"",bday:"",bproposal:""});
    const handleSubmit=(e)=>{
      e.preventDefault();
      const {bamount,bday,bproposal}=mbid
      let p_id=bid._id
      makeBid(p_id,bamount,bday,bproposal)
      setMbid({bamount:"",bday:"",bproposal:""})
    }
    const onChange=(e)=>{
      setMbid({...mbid,[e.target.name]:e.target.value})
    }
    const clickProposal=()=>{
      fetchBid();
    }
  return (
    <>
            {/* css for projectdetails */}
            <link rel="stylesheet" href="asset/css/Project-Detais.css"/>
            <link rel="stylesheet" href="asset/css/Proposals.css"/>
        {/* css for projectdetails */}
        <div className="container">
  <div className="row">
  {
  client.map((client)=>{
    return(
      <Projectdetailsclient key={client._id} client={client} />
    )
  })
}
    <div className="col-lg-9">
      <div className="card right-profile-card ">
        <div className="card-header alert-danger">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item">
              <Link className="nav-link " id="pills-home-tab" data-toggle="pill" to="/Projectdetails" role="tab" aria-selected="true">Project Details</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={clickProposal}  id="pills-home-tab" data-toggle="pill" to="/Proposals" role="tab" aria-selected="true">Proposals</Link>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="work-container">
                <h3>{bid.pname}</h3>
                <h4>{bid.pbudget}<span className="badge badge-info" /></h4>
                <h4><i className="far fa-calendar-alt" />{a} <span className="badge badge-info">Current</span></h4>
                <p>{bid.pdesc}</p>
                Here is the link &nbsp;
                <a href={`http://localhost:5000/${bid.pfile}`} download>Download</a>
              </div>
              <div className="skill">
                <p>{bid.pskill}</p>
                <div className="progress mb-3">
                  <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                </div>
                {/* <p>Javascript &amp; Jquery</p>
                <div className="progress mb-3">
                  <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <p>Angular &amp; React</p>
                <div className="progress mb-3">
                  <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                </div>*/}
              </div>
                  <form onSubmit={handleSubmit}>
              <div className="work-container">
                <h3>Make a proposal on this Project</h3>
                <p>You will be able to edit your bid until the project is awarded to someone.</p>
                <div className="row gx-3 mb-3">
                  {/* Form Group (first name)*/}
                  <div className="col-md-6">
                    <label className=" mb-1 " htmlFor="inputFirstName">Bid Amount</label>
                    <input className="form-control" id="inputFirstName" type="text" placeholder="Enter the Bid Amount" name='bamount' value={mbid.bamount} onChange={onChange} />
                  </div>
                  {/* Form Group (last name)*/}
                  <div className="col-md-6">
                    <label className="mb-1" htmlFor="inputLastName">This project will be delivered in Day</label>
                    <input className="form-control" id="inputLastName" type="text" placeholder="Enter the Day" value={mbid.bday} name='bday' onChange={onChange} />
                  </div>
                </div>
                <h3>Describe your proposal</h3>
                <div className="form-group">
                  <textarea className="form-control" rows={5} name='bproposal' value={mbid.bproposal} onChange={onChange} />
                </div>
                
              </div>
              <button className="btn btn-primary" type="submit">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default ProjectdetailsItem
