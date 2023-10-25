import React,{useState,useEffect} from 'react'
import Biditem from './Biditem'
const host="http://localhost:5000";
const Bidfetch = () => {
  //const [refreshed, setRefreshed] = useState(false);
  useEffect(() => {
    let reloadCount=1;
    if(reloadCount < 2) {
      localStorage.setItem('reloadCount', String(reloadCount + 1));
      console.log(10);
      
      // window.location.reload();
      // return 0;
    } else {
      console.log(13);
      localStorage.removeItem('reloadCount');
    }
  }, []);
    const [data,setData]=useState([])
    const getBid=async()=>{
      const response=await fetch(`${host}/api/admin/bid`,{
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
        getBid();
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
            <th>User Id</th>
            <th>Project id</th>
            <th>Amount</th>
            <th>Day</th>
            <th>Proposal</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className="">
        {
            data.map((datas)=>{
              return(
              <Biditem key={datas._id} datas={datas}/>
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

export default Bidfetch
