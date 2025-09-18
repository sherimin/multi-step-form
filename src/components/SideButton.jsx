import React from 'react'

const SideButton = ({ title, subtitle }) => {
  return (
    <div className='flex flex-row justify-start items-center ml-10 mt-8'>
      <div className='flex border-2 rounded-full mr-5 w-12 h-12 justify-center items-center font-bold text-neutral-white'>
        1
      </div>

      <div className='flex flex-col'>
        <div className='flex text-primary-blue-300 uppercase'>{title}</div>
        <div className='flex text-neutral-white font-bold uppercase'>{subtitle}</div>
      </div>

    </div>
  )
}

export default SideButton;