import React from 'react'

const AddOnInput = ({ name, description, price}) => {
  return (
    <div className='flex flex-row justify-between items-center border-[1px] border-neutral-grey-500 p-5 rounded-md'>
        <div>
            checkbox
        </div>

        <div>
            <div className='text-primary-blue-950 font-extrabold'>{name}</div>
            <div className='text-neutral-grey-500'>{description}</div>
        </div>

        <div className='text-primary-purple-600'>
            +${price}
        </div>
    </div>
  )
}

export default AddOnInput