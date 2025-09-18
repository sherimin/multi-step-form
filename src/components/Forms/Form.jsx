import React from 'react'
import Title from './Title'

const Form = () => {
  return (
    <div className='border-2 border-blue-400 h-full min-w-[50vw] p-5'>
      <Title title="Select your plan" description="You have the option of monthly or yearly billing." />
    </div>
  )
}

export default Form