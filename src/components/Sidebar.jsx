import React from 'react'
import SideButton from './SideButton'

const Sidebar = ({ activeStep, setActiveStep }) => {
  return (
    <div className={`${activeStep} border-2 border-red-700 h-full w-1/3`}>
      <img src='../../../assets/images/bg-sidebar-desktop.svg' alt='sidebar-bg' />
      <SideButton title="step 1" subtitle="your info" />
      <SideButton title="step 2" subtitle="select plan" />
      <SideButton title="step 3" subtitle="add-ons" />
      <SideButton title="step 4" subtitle="summary" />
    </div>
  )
}

export default Sidebar

