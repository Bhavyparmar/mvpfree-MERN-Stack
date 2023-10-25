import React,{useContext,useEffect} from 'react'
import Footer from './Footer'
import bidContext from '../context/bidContext';
import Proposalsitem from './Proposalsitem';
import { Link } from 'react-router-dom';
const Proposals = () => {
  const context=useContext(bidContext);
  const {abids,fetchBid}=context;
  useEffect(()=>{
    fetchBid(localStorage.getItem('bid_id'));
  },[10])
  return (
    <>
      {/* css for the proposals */}
        <link rel="stylesheet" href="asset/css/Proposals.css"/>
    {/* css for the proposals */}
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className="osahan-account-page-left shadow-sm bg-white h-100">
          <ul className="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4" id="myTab" role="tablist">
            <li className="nav-item">
             <p>Total Bids- 20-</p>
             <p>Average bids- 2000</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-9">
        <div className="card-header alert-danger">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item">
              <Link className="nav-link" to="/Projectdetails">Project Details</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Proposals">Proposals</Link>
            </li>
          </ul>
        </div>
        <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100"> 
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane  fade  active show" id="orders" role="tabpanel" aria-labelledby="orders-tab">
              <div className="bg-white card mb-4 order-list shadow-sm">
                <div className="gold-members p-4">
                  {
  abids.map((bidm)=>{
    return(
      <Proposalsitem key={bidm._id} bidm={bidm} />
    )
  })
}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<br /><br /><br /><br /><br /><br />
<Footer/>
    </>
  )
}

export default Proposals
