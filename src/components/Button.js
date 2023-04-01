import React from 'react'

const Button = ({onClick}) => {
  return (
    <label className="switch" >
           <input type={"checkbox"} onClick={onClick} />
           <span className="slider"></span>
        </label>
  )
}

export default Button