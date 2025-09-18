import React from 'react'
import Title from './Title'
import Step1 from './Step1'
import Step2 from './Step2'

const Form = ({ activeStep }) => {
  return (
    <div className='flex flex-col border-2 border-blue-400 h-full w-[50vw] px-28 py-5 justify-between'>
      <Title activeStep={activeStep} />

      {activeStep === 1 && <Step1 />}
      {activeStep === 2 && <Step2 />}

      <div className='flex flex-row justify-between'>
        <div>Go Back</div>
        <div>Next Step</div>
      </div>
    </div>
  )
}

export default Form