import React from 'react';
import Duties from './Duties';


const JobInfo = ({ jobs, currentItem }) => {
  console.log(jobs);

     const { company, dates, duties,  title } = jobs[0];

     return (
      <div>
      <article className='job-description'>
        <h2>{title}</h2>
        <span>{dates}</span>
        <p>{company}</p>
        <Duties duties={duties}/>
      </article>
      </div>
         );
  
} 

 export default JobInfo;