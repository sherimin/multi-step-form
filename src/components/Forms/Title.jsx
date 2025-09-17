import React from 'react'

const Title = ({ title, description }) => {
  return (
    <div className='flex flex-col'>
        <div className='text-primary-blue-950 font-bold text-3xl'>{title}</div>
        <div className='text-neutral-grey-500 text-md mt-2'>{description}</div>
    </div>
  )
}

export default Title