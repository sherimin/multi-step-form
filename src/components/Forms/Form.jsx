import React from 'react'
import Title from './Title'
import Step1 from './Step1'

const Form = () => {
  return (
    <div className='flex flex-col border-2 border-blue-400 h-full min-w-[50vw] px-32 py-5 justify-between'>
      <Title title="Personal Info" description="Please provide your name, email address, and phone number." />
      <Step1 />

      <div className='flex flex-row justify-between'>
        <div>Go Back</div>
        <div>Next Step</div>
      </div>
    </div>
  )
}

export default Form