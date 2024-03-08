import React from 'react'

function Counter({title ,emp,...obj}) {
  //const {title,count} = props
  return (
    <div className='Counter'>
    <h1> {title} : {obj.count} </h1>
    <h3> {obj.place}</h3> 
    </div>
  )
}

export default Counter