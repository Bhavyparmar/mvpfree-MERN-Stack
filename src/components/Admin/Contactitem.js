import React from 'react'
const Contactitem = (props) => {
    const {datas}=props;
    let a=datas.Date;
    let b=a.substring(0,10)
  return (
    <>
        <tr>
           <td >{datas._id}</td>
           <td >{datas.name}</td>
            <td>{datas.email}</td>
            <td>{datas.pnumber}</td>
            <td>{datas.msg}</td> 
            <td>{b}</td>
        </tr>
    </>
  )
}

export default Contactitem