import React from 'react'
import Duties from './Duties'


const Jobinfo = ({jobs, currentItem }) => {

 const { company, dates, duties, id, title } = jobs[currentItem];
  return (
    <article key={id} className='job-description'>
      <h2>{title}</h2>
      <span>{company}</span>
      <p>{dates}</p>
      <Duties duties={duties}/>
    </article>
       );

  }

export default Jobinfo;