import React from 'react'
import { FaAngeDoubleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';


const Duties = ({duties}) => {
  return (
    <div>
    {duties.map((duty, index) => {
       const id = uuidv4();
       return  (
         <div key={id}>
          <FaAngeDoubleRight />
          <p>{duty}</p> 
         </div>
       )
    })}
    </div>
  )
}

export default Duties;