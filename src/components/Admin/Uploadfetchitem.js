import React from 'react'

const Uploadfetchitem = (props) => {
  const {datas}=props;
  let a=datas.Date;
  let b=a.substring(0,10)
  return (
    <>
    <tr>
       <td >{datas.user}</td>
       <td >{datas.pname}</td>
        <td>{datas.pskill}</td>
        <td>{datas.pbudget}</td>
        <td> <a href={`http://localhost:5000/${datas.pfile}`} download>Download</a></td> 
        <td>{datas.pdesc}</td> 
        <td>{b}</td>
    </tr>
</>
  )
}

export default Uploadfetchitem
