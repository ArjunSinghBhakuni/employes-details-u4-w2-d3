import axios from 'axios'
import React, { useState } from 'react'
 
export const Detail = ({addDetails}) => {

 const [form,setForm]= useState({})

 const handleChange =(e)=>{
  
 let {name,value,checked,type,files}=e.target;
 if(type==="checkbox"){
  setForm({
   ...form,
   [name]:checked,
  });
 }else if (type === "file"){
  setForm({
   ...form,
   [name]:files,
  });
 } else {
  setForm({
    ...form,
    [name]:value,
   });
 }

 }
 const handleSubmit = (e)=>{
  e.preventDefault();
   //console.log(form)
   
   axios.post("http://localhost:8080/posts",{
     username:form.username,
     age: Number(form.age),
     address:form.address,
     department:form.department,
     salary:form.salary,
     maritual:form.maritual
   })  
   .then((res)=>console.log(res))

  addDetails(form)
 }

  return (
   <div>
   <form onSubmit={handleSubmit}>
    <div>
     <label  >Name:</label>
     <input type="text" name="username"  onChange = {handleChange} placeholder="Enter name ...." />
    </div>
    <div>
     <label  >Age:</label>
     <input type="number" name="age"  onChange = {handleChange} placeholder="Enter age ...." />
    </div>
    <div>
     <label  >Address:</label>
     <input type="text" name="address"  onChange = {handleChange} placeholder="Enter Address...." />
    </div>
    <div>
      <label htmlFor="">Departments:</label>
      <select name="department" value={form.department} onChange={handleChange} id="">
       <option value="IT"  >IT</option>
       <option value="Finance">Finance</option>
       <option value="Marketing">Marketing</option>
       <option value="Product">Product</option>
      </select>
     </div>
     
     <div>
     <label  >Salary:</label>
     <input type="number" name="salary"  onChange = {handleChange} placeholder="Enter CTC ...." />
    </div>
    
    <div>
     <input type="checkbox" name="maritual"  onChange = {handleChange}  />
     <label  >: Is Married</label>
    </div>
    
      
   
     <div>
     <label  > Image :</label>
     <input type="file" accept='image/png, image/jpeg, application/pdf' name="image" files={form.image} onChange = {handleChange}  />
    
    </div>
    <button type='submit'>Submit</button>
   </form>

    </div>
  )
}
