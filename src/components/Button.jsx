import React from 'react'

const Button = ({ name, backgroundColor }) => {
  return (
    <button className={`${backgroundColor} w-10 font-extrabold`}>
      {name}
    </button>
  )
}

export default Button