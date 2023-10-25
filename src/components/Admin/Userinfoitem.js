import React from 'react'

const Userinfoitem = (props) => {
    const {datas}=props;
  return (
   <>
     <tr>
       <td >{datas.name}</td>
       <td >{datas.company}</td>
        <td> <img height={100} width={100} className="rounded-circle"  src={`http://localhost:5000/${datas.photo}`} /></td> 
        <td>{datas.bio}</td>
        <td>{datas.dob}</td>
        <td>{datas.country}</td>
        <td>{datas.phone}</td>
        <td>{datas.website}</td>
        <td>{datas.twitter}</td>
        <td>{datas.linkedin}</td>
    </tr>
   </>
  )
}

export default Userinfoitem
