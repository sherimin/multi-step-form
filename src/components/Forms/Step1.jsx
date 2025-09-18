import React from 'react'
import TextInput from '../Input/TextInput'

const textInputLabels = ['Name', 'Email Address', 'Phone Number'];

const Step1 = () => {
  return (
    <div className='bg-blue-200 flex flex-col h-full w-full justify-start items-center mt-10'>
      <TextInput label='Name' />
    </div>
  )
}

export default Step1