import React from 'react'

const SideButton = ({ id, title, subtitle, isActive, onClick }) => {
  return (
    <div 
      className='flex flex-row justify-start items-center ml-10 mt-8 cursor-pointer'
      onClick={() => onClick(id)}
    >
      <div className={`flex border-2 rounded-full mr-5 w-12 h-12 justify-center items-center font-bold  ${isActive ? 'bg-primary-blue-200 text-primary-blue-950 border-primary-blue-200' : 'bg-transparent text-neutral-white border-neutral-white'}`}>
        {id}
      </div>

      <div className='flex flex-col'>
        <div className='flex text-primary-blue-300 uppercase'>{title}</div>
        <div className='flex text-neutral-white font-bold uppercase'>{subtitle}</div>
      </div>

    </div>
  )
}

export default SideButton;