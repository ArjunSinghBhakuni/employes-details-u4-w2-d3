import React, { useState,useEffect } from "react";
import { Employee } from "./Employee";
import axios from 'axios'
 
export const ShowDetail = ({ details }) => {
const [employeeDetail ,setEmploayeeDeail] = useState([])
const [page,setPage] = useState(1)
useEffect(() => {
  
  axios.get(`http://localhost:8080/posts?_page=${page}&_sort=age&_order=dsc`)
.then((res)=> 
  console.log(res)
   
)
   
}, [page])

const handleChange= (e)=>{
console.log(e.target.value)

}

  return (
    <div  >
      ShowDetail
      <table>
      <thead>

          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department
            </th>
            <th>Cost To Company</th>
            <th>Marital Status</th>
          </tr>
      </thead>
 <tbody>
          {employeeDetail.map((detail, index) => (
           <Employee
              key={index}
              name={detail.username}
              age={detail.age}
              address={detail.address}
              image={detail.image}
              department={detail.department}
              salary={detail.salary}
              maritual={detail.maritual}
              />
              ))}
              </tbody>       
       
      </table>

      <button onClick={()=>setPage(page-1)}>Prev</button>
      <button onClick={()=>setPage(page+1)}>Next</button>
      <select onChange={ handleChange} name="" id="">
                <option value="finace">finace</option>
                <option value="it">IT</option>
              </select>
    </div>
  );
};
