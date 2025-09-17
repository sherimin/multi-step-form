import React from 'react'
import Button from './Button'

const Sidebar = ({ activeStep, setActiveStep }) => {
  return (
    <div className={`${activeStep} border-2 border-red-700 h-full w-1/3`}>
      SideBar
      {/* <img src='../../src/assets/images/bg-sidebar-desktop.svg' alt='sidebar-bg' /> */}
      <Button>1</Button>
    </div>
  )
}

export default Sidebar