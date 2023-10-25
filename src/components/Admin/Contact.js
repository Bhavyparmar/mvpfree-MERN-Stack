import React,{useEffect, useState} from 'react'
import Contactitem from './Contactitem';
const host="http://localhost:5000";
const Contact = () => {
  const [data,setData]=useState([])
  const getContact=async()=>{
    const response=await fetch(`${host}/api/admin/contact`,{
      method:"GET",
      headers:{
        "Content-type":"application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZGVjYmNhNWQzOTdiYjgxZjlkODJhIiwiZW1haWwiOiJiaGF2eUBlbWFpbC5jb20ifSwiaWF0IjoxNjc4NjM0OTYzfQ.wC0r4yhLR5Kn_sliaQsdCGfC-a_WCftKrY74se_f-6I"
      }
    })
    const json=await response.json();
    setData(json);
  }
    useEffect(()=>{
        getContact();
    },[])
  return (
    <>
<div>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossOrigin="anonymous" />
  
  {/*-table*/}
  <div className="col-lg-12">
    <div className="table-responsive rounded mb-3">
      <table className="data-table table mb-0 tbl-server-info">
        <thead className="bg-white text-uppercase">
          <tr className="ligth ligth-data">
            <th>Sr.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone no</th>
            <th>Message</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody className="">
          {
            data.map((datas)=>{
              return(
              <Contactitem key={datas._id} datas={datas}/>
              )
            })
          }
        </tbody>
      </table>
    </div>
  </div>
  {/* Page end  */}
</div>

    </>
  )
}

export default Contact
