import React from 'react'

const StepNavigation = ({ label, onClick }) => {

  return (
    <button onClick={onClick} className={`flex font-semibold`}>
        {label}
    </button>
  )
}

export default StepNavigation;