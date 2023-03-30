import React from 'react';

const BtnContainer = ({jobs, currenItem, setCurrentItem }) => {
  return (
    <div className='btn-container'>
     {jobs.map((item, index) => {
        return(
           <button key={item.id} className={index === currenItem ? 'job-activebtn' : 'job-btn'} onClick={() => setCurrentItem(index)}>{item.company}</button> 
        )
     })}
    </div>
  )
}

export default BtnContainer;