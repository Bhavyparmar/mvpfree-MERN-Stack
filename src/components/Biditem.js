
import React ,{useContext} from 'react'
import {Link} from 'react-router-dom';
import bidContext from '../context/bidContext';
const host="http://localhost:5000";
const Biditem = (props) => {
  //It will return all the bids
    const {bid}=props;
    const context=useContext(bidContext);
    //Here it gives id to the fetchdetails on click which bid is clicked
    const {fetchDetails}=context;
    const Click=async()=>{
      localStorage.setItem('bid_id',bid._id)
      localStorage.setItem('clientid',bid.user)
    }
  return (
    <>
       {/* css for the bid page */}
       <link rel="stylesheet" href="asset/css/bid.css"/>
    {/* css for the bid page */}
    <div className="container my-3">
    <div className="main-bid">
      {/* Localstorage is saved one id called bid._id for fetching the particular record  */}
      {/* Localstorage is saved one id called bid._id for fetching the particular record  */}
      {/* Localstorage is saved one id called bid._id for fetching the particular record  */}
      {/* Localstorage is saved one id called bid._id for fetching the particular record  */}
      <Link onClick={Click} to="/Projectdetails"  style={{textDecoration: "none", color: "black"}}>
      {/* Localstorage is saved one id called bid._id for fetching the particular record  */}
        <div className="title">
          
          <h3 className="subject my-1">{bid.pname}</h3>
          <p className="budget ">{bid.pbudget}</p>
          <p className="bid-con">
           {bid.pdesc}
          </p>
          <p className="technology">
          {bid.pskill}
          </p>
          <div className="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label htmlFor="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label htmlFor="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label htmlFor="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label htmlFor="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label htmlFor="star1" title="text">1 star</label>
          </div>
        </div>
      </Link>

  </div>
    </div>
   
    </>
  )
}

export default Biditem
