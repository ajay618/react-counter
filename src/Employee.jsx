import React from 'react'

function Employee(props) {
  return (
    <div>
        <h1>Name : {props.name}</h1>
        <h2>Place : {props.place} </h2>
    </div>
  )
}

export default Employee