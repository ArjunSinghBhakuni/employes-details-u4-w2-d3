import React, { useState } from 'react'

export const Employee = ({name,age,address,image,department,salary,maritual}) => {
const [marrige,setmarrige] = useState("")


useState(()=>{
 if(maritual===true){
  setmarrige("Married")
   }else{
    setmarrige("Unmarried")
  
   }
},[marrige])
 

  return (
    
     
     
     
        <tr>
         <td> {image}</td>
          <td>{name}</td>
          <td>{age}</td>
           
          <td>{address}</td>
          <td>{department}</td>
          <td>{salary}</td>
          <td>{marrige}</td>
        </tr>
        
      
   
  )
}
