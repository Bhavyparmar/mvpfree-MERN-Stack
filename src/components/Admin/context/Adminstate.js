import React, { useState } from 'react'
import Admincontext from './admincontext'
const host="http://localhost:5000";
const Adminstate = (props) => {
    const a=[]
    const [data,setData]=useState(a)
    const getContact=async()=>{
        const response=await fetch(`${host}/api/uploadproject/showproject`,{
          method:"GET",
          headers:{
            "Content-type":"application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZGVjYmNhNWQzOTdiYjgxZjlkODJhIiwiZW1haWwiOiJiaGF2eUBlbWFpbC5jb20ifSwiaWF0IjoxNjc4NjM0OTYzfQ.wC0r4yhLR5Kn_sliaQsdCGfC-a_WCftKrY74se_f-6I"
          }
        })
        const json=await response.json();
        console.log(json,16);
        setData(json);
      }
  return (
   <Admincontext.Provider value={{data,getContact}} >
    {props.children}
   </Admincontext.Provider>
  )
}

export default Adminstate
