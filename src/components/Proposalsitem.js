import React ,{useState,useContext}from 'react'
import bidContext from '../context/bidContext';
const Proposalsitem = (props) => {
  const context=useContext(bidContext);
    const {bname}=context
    const {bidm} =props
    let time=bidm.bdate;
    let a=time.substring(0,10)// It print only first 9 charater of date
  return (
    <>
                    {
                      bname.map((bname)=>{
                        return(
                          <>
                <div className="media">
                <img className="mr-4" src={`http://localhost:5000/${bname.photo}`} alt="Generic placeholder image" />
                    <div className="media-body">
                        <span className="float-right text-info">{a} <i className="icofont-check-circled text-success" /></span>
                      <h6 className="mb-2">
                        <span style={{color:"blue"}} className="text-black">{bname.name}</span>
                      </h6>
                      <p className="text-gray mb-1"><i className="icofont-location-arrow" /> {bidm.bproposal}
                      </p>
                      <hr />
                      <p className="mb-0 text-black text-primary pt-2"><span className="text-black font-weight-bold"> Bid Amount:</span> {bidm.bamount}
                      </p>
                    </div>
                  </div>
                  <hr/>
                  </>
              )
            })
}
                      
    </>
  )
}

export default Proposalsitem
