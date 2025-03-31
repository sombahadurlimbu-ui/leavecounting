import React from 'react'
import "./Content.css"

const Content  = () => {
  const today = new Date();
  const formatteDate=today.toISOString().split('T')[0];
  return (
    <div className='content'>
      <br></br>
       Today Date :  {formatteDate}
       <br></br>
       <br></br>

    
    </div>
   
  )
}

export default Content
