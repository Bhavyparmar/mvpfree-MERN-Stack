import React from 'react'

const Feedbackitem = (props) => {
    const {datas}=props;
    let a=datas.Date;
    let b=a.substring(0,10)
  return (
    <>
    <tr>
           <td >{datas.name}</td>
           <td >{datas.msg}</td>
            <td>{b}</td>
        </tr>
    </>
  )
}

export default Feedbackitem
