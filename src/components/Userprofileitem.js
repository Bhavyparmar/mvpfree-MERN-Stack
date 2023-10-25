import React from 'react'

const Userprofileitem = (props) => {
  const {datas}=props;
  return (
    <>
     <div className="card card-block card-stretch card-height">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <div className="profile-img position-relative">
                <img src={`http://localhost:5000/${datas.photo}`} height={"100px"} width={"100px"} className="img-fluid rounded avatar-110" alt="profile-image" />
                {/*eslint-disable-next-line */}
              </div>
              <div className="ml-3">
                <h4 className="mb-1">{(datas.name) }</h4>
                <p className="mb-2">{datas.company}</p>
              </div>
            </div>
            <p>
              {datas.bio}
            </p>
            <ul className="list-inline p-0 m-0">
              <li className="mb-2">
                <div className="d-flex align-items-center">
                  <svg className="svg-icon mr-3" height={16} width={16} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="mb-0">{datas.country}</p>   
                </div>
              </li>
              <li className="mb-2">
                <div className="d-flex align-items-center">
                  <svg className="svg-icon mr-3" height={16} width={16} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="mb-0">{datas.website}</p>   
                </div>
              </li>
              <li className="mb-2">
                <div className="d-flex align-items-center">
                  <svg className="svg-icon mr-3" height={16} width={16} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                  <p className="mb-0">{datas.dob}</p>   
                </div>
              </li>
              <li className="mb-2">
                <div className="d-flex align-items-center">
                  <svg className="svg-icon mr-3" height={16} width={16} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="mb-0">{datas.phone}</p>   
                  
                </div>
              </li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Userprofileitem
