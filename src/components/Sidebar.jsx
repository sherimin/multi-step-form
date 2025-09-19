import React from "react";
import SideButton from "./SideButton";
import bgSidebar from "../assets/images/bg-sidebar-desktop.svg";

const Sidebar = ({ activeStep, setActiveStep }) => {
  const steps = [
    { id: 1, title: "step 1", subtitle: "your info" },
    { id: 2, title: "step 2", subtitle: "select plan" },
    { id: 3, title: "step 3", subtitle: "add-ons" },
    { id: 4, title: "step 4", subtitle: "summary" },
  ];

  return (
    <div
      className={` h-full w-72 bg-no-repeat bg-contain bg-center border-2 border-red-500`}
      style={{ backgroundImage: `url(${bgSidebar})` }}
    >
      {steps.map((step) => {
        return (
          <SideButton
            key={step.id}
            id={step.id}
            title={step.title}
            subtitle={step.subtitle}
            isActive={step.id === activeStep}
            onClick={() => setActiveStep(step.id)}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
