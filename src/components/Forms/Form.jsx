import React, { useState } from 'react'
import Title from './Title'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

const Form = ({ activeStep }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className='flex flex-col border-2 border-blue-400 h-full w-[50vw] px-28 py-5 justify-between'>
      <Title activeStep={activeStep} />

      {activeStep === 1 && <Step1 />}
      {activeStep === 2 && <Step2 isMonthly={isMonthly} />}
      {activeStep === 3 && <Step3 isMonthly={isMonthly} />}
      {activeStep === 4 && <Step4 isMonthly={isMonthly} />}


      <div className='flex flex-row justify-between mt-5'>
        <button className='bg-neutral-white'>Go Back</button>
        {activeStep === 4? <button>Confirm</button> : <button>Next Step</button>}
        
      </div>
    </div>
  )
}

export default Form