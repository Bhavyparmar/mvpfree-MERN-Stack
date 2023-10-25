import { useState } from "react";
import BidContext from "./bidContext";
const host="http://localhost:5000";
const BidState=(props)=>{
  const bidsIntial=[]
    const [bids,setBids]=useState(bidsIntial);
    const [bname,setBname]=useState(bidsIntial);
    const [abids,setAbids]=useState(bidsIntial);
    const [client,setClient]=useState(bidsIntial);
    //Function to show all the bid in the bid section
    //Function to show all the bid in the bid section
      const getBid=async()=>{
        const response=await fetch(`${host}/api/uploadproject/showproject`,{
          method:"GET",
          headers:{
            "Content-type":"application/json",
            "auth-token":localStorage.getItem('token')
          }
        })
        const json=await response.json();
        setBids(json)
      }
    //Function to show particular bid inside the project details section
    //Function to show particular bid inside the project details section
      const fetchDetails=async(id)=>{
        const response=await fetch(`${host}/api/uploadproject/showproject/${id}`,{
          method:"GET",
          headers:{
            "Content-type":"application/json",
            "auth-token":localStorage.getItem('token')
          }
        })
        const json=await response.json();
        setBids(json)
      }
      //Function to insert a bid on upload project
      //Function to insert a bid on upload project
      const makeBid=async(p_id,bamount,bday,bproposal)=>{
        const response=await fetch(`${host}/api/bid/makebid`,{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
            "auth-token":localStorage.getItem('token'),
          },
          body:JSON.stringify({p_id,bamount,bday,bproposal})
        });
        const json=await response.json();
        if(json){
          alert("Your bid is recorded")
        }else{
          alert("Your bid is not recorded due to some technical issue")
        }
      }
      //Function to show all the bid in proposals section
      //Function to show all the bid in proposals section
      const fetchBid=async(id)=>{
        const response=await fetch(`${host}/api/bid/showbid/${id}`,{
          method:"GET",
          headers:{
            'Content-type':'application/json',
            "auth-token":localStorage.getItem('token')
          }
        })
        const json=await response.json();
        console.log(json,11)
        setAbids(json);
        let id_user=await json[0].user;
        console.log(id_user,67)
        const response1=await fetch(`${host}/api/user-info/getinfo/${id_user}`,{
          method:"GET",
          headers:{
            'Content-type':'application/json',
            "auth-token":localStorage.getItem('token')
          }
        })
        const json1=await response1.json();
        console.log(json1,77)
        setBname(json1);
      }
      const fetchClient=async(id)=>{
        const response=await fetch(`${host}/api/uploadproject/showprojclient/${id}`,{
          method:"GET",
          headers:{
            "Content-type":"application/json",
            "auth-token":localStorage.getItem('token')
          }
        })
        const json=await response.json();
        setClient(json);
      }
    return (
        <BidContext.Provider value={{bids,abids,client,bname,getBid,fetchDetails,makeBid,fetchBid,fetchClient}}>
        {props.children}
        </BidContext.Provider>
    )
}

export default BidState;