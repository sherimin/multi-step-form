import React from 'react'

const titleContent = {
  1: {
    title: 'Personal Info',
    description: 'Please provide your name, email address, and phone number.',
  },
  2: {
    title: 'Select your plan',
    description: 'You have the option of monthly or yearly billing.',
  },
  3: {
    title: '',
    description: '',
  },
  4: {
    title: '',
    description: '',
  },
}

const Title = ({ title, description }) => {
  return (
    <div className='flex flex-col'>
        <div className='text-primary-blue-950 font-bold text-3xl'>{title}</div>
        <div className='text-neutral-grey-500 text-md mt-2'>{description}</div>
    </div>
  )
}

export default Title