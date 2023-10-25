import React, { useContext, useEffect } from 'react';
import Footer from './Footer';
import bidContext from '../context/bidContext';
import Biditem from './Biditem';

const Bid = () => {
  const context=useContext(bidContext);
  const {bids,getBid}=context;
  useEffect(()=>{
    getBid();
  },[10])
  // setTimeout(() => {
  //   getBid();
  // }, 5000);
  return (
    <>
   {
    bids.map((bid)=>{
      return(
        <Biditem key={bid._id} bid={bid}/>
      )
    })
   }
  <Footer/>
    </>
  )
}

export default Bid