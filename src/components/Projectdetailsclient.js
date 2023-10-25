import React from 'react'

const Projectdetailsclient = (props) => {
    const {client}=props;
  return (
   <>
       <div className="col-lg-3 ">
      <div className="card left-profile-card">
        <div className="card-body">
          <div className="text-center">
            <h3>About the Client</h3>
            <br /><br />
            <img src={`http://localhost:5000/${client.photo}`} alt="" className="user-profile" />
            <h3>{client.name}</h3>
            <p>World of Internet</p>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <i className="fas fa-star text-info" />
              <i className="fas fa-star text-info" />
              <i className="fas fa-star text-info" />
              <i className="fas fa-star text-info" />
              <i className="fas fa-star text-info" />
            </div>
          </div>
          <div className="personal-info">
            <h3>Personal Information</h3>
            <ul className="personal-list">
              <li><i className="fas fa-briefcase " /><span>{client.company}</span></li>
              <li><i className="fas fa-map-marker-alt " /><span> {client.country}</span></li>
              <li><i className="far fa-envelope " /><span>{client.linkedin}</span></li>
              <li><i className="fas fa-mobile " /><span>{client.phone}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Projectdetailsclient
