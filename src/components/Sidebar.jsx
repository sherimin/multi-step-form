import React from 'react'
import SideButton from './SideButton'
import bgSidebar from "../assets/images/bg-sidebar-desktop.svg";

const Sidebar = ({ activeStep, setActiveStep }) => {
  return (
    <div 
      className={`${activeStep} h-full w-72 bg-no-repeat bg-contain bg-center border-2 border-red-500`}
      style={{ backgroundImage: `url(${bgSidebar})`}}
    >
      <SideButton title="step 1" subtitle="your info" />
      <SideButton title="step 2" subtitle="select plan" />
      <SideButton title="step 3" subtitle="add-ons" />
      <SideButton title="step 4" subtitle="summary" />
    </div>
  )
}

export default Sidebar

