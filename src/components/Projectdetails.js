import React,{useContext,useEffect} from 'react'
import Footer from './Footer'
import bidContext from '../context/bidContext';
import ProjectdetailsItem from './ProjectdetailsItem';
const Projectdetails = () => {
  const context=useContext(bidContext);
  const {bids,fetchDetails}=context;
  useEffect(()=>{
    fetchDetails(localStorage.getItem('bid_id'));
  },[10])
  return (
    <>
{
  bids.map((bid)=>{
    return(
      <ProjectdetailsItem key={bid._id} bid={bid} />
    )
  })
}
<Footer/>

    </>
  )
}

export default Projectdetails
