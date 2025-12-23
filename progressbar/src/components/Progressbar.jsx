import React, { useEffect, useState } from 'react'

const Progressbar = ({count}) => {

  const [Percent,setPercent]=useState(0)
  useEffect(()=>{
setPercent(Math.min(100,Math.max(0,count)))
  },[count])
  return (
    <div className='progress'>
      <span>{Percent.toFixed()}%</span>
      <div className='bar'  style={{transform:`scaleX(${Percent/100})`, transformOrigin:"left"}}/>
    </div>
  )
}

export default Progressbar
//  style={{width:`${Percent}%`}}