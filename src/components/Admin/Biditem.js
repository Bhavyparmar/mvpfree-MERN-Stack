import React from 'react'

const Biditem = (props) => {
    const {datas}=props;
    let a=datas.bdate;
    let b=a.substring(0,10)
  return (
    <>
        <tr>
           <td >{datas.user}</td>
           <td >{datas.p_id}</td>
            <td>{datas.bamount}</td>
            <td>{datas.bday}</td>
            <td>{datas.bproposal}</td>
            <td>{b}</td>
        </tr>
    </>
  )
}

export default Biditem
