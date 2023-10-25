import React,{useEffect, useState} from 'react'
import Uploadfetchitem from './Uploadfetchitem';
const host="http://localhost:5000";
const Uploadfetch = () => {
  const [data,setData]=useState([])
  const getProject=async()=>{
    const response=await fetch(`${host}/api/admin/project`,{
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
      getProject();
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
                <th>Client-Id</th>
                <th>Project -name</th>
                <th>Required-Skill</th>
                <th>Budget</th>
                <th>Project-file</th>
                <th>Project description</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className="">
              {
                data.map((datas)=>{
                  return(
                  <Uploadfetchitem key={datas._id} datas={datas}/>
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

export default Uploadfetch
